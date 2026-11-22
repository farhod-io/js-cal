const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup() {
  const events = new Map(), entries = new Map();
  const normalize = value => typeof value === 'string' ? new URL(value, 'https://example.com/js-cal/').href : value.url;
  const cache = { match: async req => entries.get(normalize(req))?.clone(), put: async (req, res) => entries.set(normalize(req), res), addAll: async () => {} };
  const deleted = [];
  const ctx = vm.createContext({
    self: { location: { origin: 'https://example.com' }, addEventListener: (name, fn) => events.set(name, fn), clients: { claim: async () => {} }, skipWaiting: async () => {} },
    caches: { open: async () => cache, match: cache.match, keys: async () => ['js-daftar-cache-v2','js-daftar-cache-v3','another-app-cache'], delete: async key => deleted.push(key) },
    URL, Response, fetch: async () => new Response('new lesson')
  });
  vm.runInContext(fs.readFileSync('sw.js','utf8'), ctx);
  const request = (file, mode = 'cors') => ({ url: 'https://example.com/js-cal/'+file, method: 'GET', mode });
  const dispatch = async req => {
    let response;
    events.get('fetch')({ request: req, respondWith: promise => { response = promise; } });
    return response;
  };
  return { ctx, cache, request, dispatch, events, deleted };
}
test('online lesson assets use fresh network content even with an old cached copy', async () => {
  const { ctx, cache, request, dispatch } = setup();
  for (const file of ['data.js','app.js','style.css']) {
    const req = request(file);
    await cache.put(req, new Response('old lesson'));
    ctx.fetch = async (_req, options) => { assert.equal(options.cache, 'no-cache'); return new Response('new lesson'); };
    const res = await dispatch(req);
    assert.equal(await res.text(), 'new lesson');
    assert.equal(await (await cache.match(req)).text(), 'new lesson');
  }
});
test('offline lessons still load from cache and unknown navigation falls back to index', async () => {
  const { ctx, cache, request, dispatch } = setup();
  ctx.fetch = async () => { throw new Error('Offline'); };
  await cache.put(request('data.js'), new Response('cached data'));
  await cache.put('./index.html', new Response('cached index'));
  assert.equal(await (await dispatch(request('data.js'))).text(), 'cached data');
  assert.equal(await (await dispatch(request('unknown', 'navigate'))).text(), 'cached index');
  assert.equal((await dispatch(request('app.js'))).status, 503);
});
test('service worker update deletes only this app old caches', async () => {
  const { events, deleted } = setup();
  let pending;
  events.get('activate')({ waitUntil: promise => { pending = promise; } });
  await pending;
  assert.deepEqual(deleted, ['js-daftar-cache-v2']);
});
