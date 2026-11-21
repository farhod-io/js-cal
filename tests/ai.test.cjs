const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');
const source = fs.readFileSync('app.js', 'utf8').replace(/render\(\);\s*if \(location\.hash\) scrollContentToTop\(\);\s*$/, '');
function setup(saved) {
  const storage = new Map(saved ? [['jsdaftar_progress_v1', JSON.stringify(saved)]] : []);
  const elements = new Map();
  const ctx = vm.createContext({
    window: { lessons: [{ id: 'read', title: 'Read lesson', explanation: 'READ_MATERIAL' }, { id: 'unread', title: 'Unread lesson', explanation: 'UNREAD_MATERIAL' }], addEventListener() {} },
    document: { querySelector(id) { if (!elements.has(id)) elements.set(id, { addEventListener() {} }); return elements.get(id); } },
    localStorage: { getItem: k => storage.get(k) || null, setItem: (k, v) => storage.set(k, v) },
    crypto: webcrypto, AbortController, URL, setTimeout, clearTimeout,
    fetch: async () => { throw Error('Unexpected network request'); }
  });
  vm.runInContext(source + '\nglobalThis.api = { progress, normalizeAISettings, doneLessons, saveProgress, generateAIQuestions, validateAIQuiz, setAIStatus };', ctx);
  ctx.api.progress.completed.read = true;
  return { ctx, api: ctx.api, storage, elements };
}
const question = (overrides = {}) => ({ lessonId: 'read', question: 'Natija nima?', code: 'console.log(1)', options: ['1', '2', '3', '4'], answer: 0, explain: '1 chiqadi.', walkthrough: ['Kod bajariladi.', '1 chiqadi.'], ...overrides });
function configure(api, provider) {
  api.progress.ai.provider = provider;
  api.progress.ai.accounts[provider].key = 'test-key';
}
test('read lessons persist and legacy credentials migrate without becoming Gemini credentials', () => {
  const { api, storage } = setup({ completed: { read: true }, ai: { endpoint: 'https://example.com/chat', model: 'old-model', key: 'old-key' } });
  assert.equal(api.doneLessons().length, 1);
  assert.equal(api.progress.ai.provider, 'custom');
  assert.equal(api.progress.ai.accounts.custom.key, 'old-key');
  assert.equal(api.progress.ai.accounts.gemini.key, '');
  api.saveProgress();
  assert.equal(JSON.parse(storage.get('jsdaftar_progress_v1')).completed.read, true);
});
for (const provider of ['gemini', 'deepseek']) {
  test(`${provider} sends only read material with correct authentication and parses returned quiz`, async () => {
    const { ctx, api } = setup(); configure(api, provider);
    ctx.fetch = async (url, init) => {
      const body = JSON.parse(init.body);
      assert.ok(init.signal instanceof AbortSignal);
      assert.ok(init.body.includes('READ_MATERIAL'));
      assert.ok(!init.body.includes('UNREAD_MATERIAL'));
      if (provider === 'gemini') {
        assert.ok(url.startsWith('https://generativelanguage.googleapis.com/'));
        assert.equal(init.headers['x-goog-api-key'], 'test-key');
        assert.equal(init.headers.Authorization, undefined);
        assert.equal(body.generationConfig.responseMimeType, 'application/json');
      } else {
        assert.equal(url, 'https://api.deepseek.com/chat/completions');
        assert.equal(init.headers.Authorization, 'Bearer test-key');
        assert.equal(body.response_format.type, 'json_object');
      }
      const text = JSON.stringify({ questions: [question()] });
      return { ok: true, json: async () => provider === 'gemini' ? { candidates: [{ content: { parts: [{ text }] } }] } : { choices: [{ message: { content: text } }] } };
    };
    const result = await api.generateAIQuestions(api.doneLessons(), 1);
    assert.equal(result.error, undefined);
    assert.equal(result.questions[0].lessonId, 'read');
    assert.equal(result.questions[0].topic, 'Read lesson');
  });
}
test('missing key and unread selection never make network requests', async () => {
  const { api } = setup();
  assert.match((await api.generateAIQuestions(api.doneLessons(), 1)).error, /kalit/);
  configure(api, 'gemini');
  assert.match((await api.generateAIQuestions([{ id: 'unread' }], 1)).error, /belgilang/);
});
test('rejects unread lesson IDs, bad fields, duplicates and wrong count', () => {
  const { api } = setup(); const selected = api.doneLessons();
  for (const q of [question({ lessonId: 'unread' }), question({ options: ['a'] }), question({ options: ['a','a','b','c'] }), question({ answer: 4 }), question({ walkthrough: [2, 3] }), question({ explain: '<' , code: {} })]) {
    assert.throws(() => api.validateAIQuiz({ questions: [q] }, selected, 1));
  }
  assert.throws(() => api.validateAIQuiz({ questions: [] }, selected, 1));
  assert.throws(() => api.validateAIQuiz({ questions: [question(),question()] }, selected, 2));
  api.progress.completed = {};
  assert.throws(() => api.validateAIQuiz({ questions: [question()] }, selected, 1));
});
test('API failures, malformed JSON, empty and truncated responses are actionable', async () => {
  const { ctx, api } = setup(); configure(api, 'deepseek');
  for (const status of [401,402,403,404,429]) {
    ctx.fetch = async () => ({ ok: false, status });
    assert.ok((await api.generateAIQuestions(api.doneLessons(), 1)).error);
  }
  for (const message of ['', 'invalid json', '{"questions":[]}']) {
    ctx.fetch = async () => ({ ok: true, json: async () => ({ choices: [{ message: { content: message } }] }) });
    assert.ok((await api.generateAIQuestions(api.doneLessons(), 1)).error);
  }
  ctx.fetch = async () => ({ ok: true, json: async () => ({ choices: [{ finish_reason: 'length' }] }) });
  assert.match((await api.generateAIQuestions(api.doneLessons(), 1)).error, /tugallanmay/);
  ctx.fetch = async () => { const e = Error(); e.name = 'AbortError'; throw e; };
  assert.match((await api.generateAIQuestions(api.doneLessons(), 1)).error, /90 soniyada/);
});
test('provider keys remain separate and status messages render as text', () => {
  const { api, elements } = setup();
  api.progress.ai.accounts.gemini.key = 'gemini-key';
  api.progress.ai.accounts.deepseek.key = 'deepseek-key';
  const restored = api.normalizeAISettings(api.progress.ai);
  assert.equal(restored.accounts.gemini.key, 'gemini-key');
  assert.equal(restored.accounts.deepseek.key, 'deepseek-key');
  api.setAIStatus('<img src=x onerror=alert(1)>', 'bad');
  assert.equal(elements.get('#ai-status').textContent, '<img src=x onerror=alert(1)>');
  assert.equal(elements.get('#ai-status').innerHTML, undefined);
});

test('cancels a pending request and preserves the actual API error without exposing the key', async () => {
  const { ctx, api } = setup(); configure(api, 'gemini');
  const controller = new AbortController();
  ctx.fetch = async (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => { const e = Error(); e.name = 'AbortError'; reject(e); }, { once: true });
  });
  const pending = api.generateAIQuestions(api.doneLessons(), 1, { signal: controller.signal });
  controller.abort();
  assert.match((await pending).error, /bekor qilindi/);
  ctx.fetch = async () => ({ ok: false, status: 400, json: async () => ({ error: { message: 'API key test-key invalid' } }) });
  const result = await api.generateAIQuestions(api.doneLessons(), 1);
  assert.ok(result.error.includes('API key [kalit] invalid'));
  assert.ok(!result.error.includes('test-key'));
});

test('retries 503 twice then opens the returned quiz', async () => {
  const { ctx, api } = setup(); configure(api, 'gemini');
  ctx.setTimeout = (fn, ms) => setTimeout(fn, ms < 6000 ? 0 : ms);
  let requests = 0; const attempts = [];
  ctx.fetch = async () => ++requests < 3
    ? { ok: false, status: 503 }
    : { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: JSON.stringify({ questions: [question()] }) }] } }] }) };
  const result = await api.generateAIQuestions(api.doneLessons(), 1, { onRetry: n => attempts.push(n) });
  assert.equal(requests, 3);
  assert.deepEqual(attempts, [2,3]);
  assert.equal(result.questions.length, 1);
});
test('bounds retries and never retries invalid credentials or quota errors', async () => {
  const { ctx, api } = setup(); configure(api, 'gemini');
  ctx.setTimeout = (fn, ms) => setTimeout(fn, ms < 6000 ? 0 : ms);
  for (const status of [503,401,403,429]) {
    let requests = 0;
    ctx.fetch = async () => { requests++; return { ok: false, status }; };
    const result = await api.generateAIQuestions(api.doneLessons(), 1);
    assert.equal(requests, status === 503 ? 3 : 1);
    assert.ok(result.error);
    if (status === 503) assert.match(result.error, /3 marta/);
  }
});
test('cancelling during retry backoff prevents another request', async () => {
  const { ctx, api } = setup(); configure(api, 'gemini');
  const controller = new AbortController(); let requests = 0;
  ctx.fetch = async () => { requests++; return { ok: false, status: 503 }; };
  const result = await api.generateAIQuestions(api.doneLessons(), 1, { signal: controller.signal, onRetry: () => controller.abort() });
  assert.equal(requests, 1);
  assert.match(result.error, /bekor qilindi/);
});
