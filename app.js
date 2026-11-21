const list = document.querySelector('#lesson-list');
const content = document.querySelector('#content');
const search = document.querySelector('#search');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessons = window.lessons || [];
const questions = window.interviewQuestions || [];
const labs = window.codeLabs || [];

// ============================================================
// 1. LOCALSTORAGE: o'qilgan darslar, test natijalari, AI sozlamalari
// ============================================================
const STORAGE_KEY = 'jsdaftar_progress_v1';
const defaultProgress = () => ({
  completed: {},                 // { lessonId: true } — foydalanuvchi "o'qilgan" deb belgilagan darslar
  answers: {},                   // { questionId: tanlanganVariantIndex }
  revealed: {},                  // { questionId: true } — tushuntirish ko'rsatilganmi
  ai: { endpoint: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o-mini', key: '' }
});

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const p = JSON.parse(raw);
    const d = defaultProgress();
    return {
      completed: p.completed || {},
      answers: p.answers || {},
      revealed: p.revealed || {},
      ai: { ...d.ai, ...(p.ai || {}) }
    };
  } catch (e) {
    return defaultProgress();
  }
}

const progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    // localStorage o'chirilgan yoki to'la bo'lsa, sayt ishlashda davom etadi.
  }
}

// Eski kod bilan moslik: quizState endi progress ichidagi obyektlarga ishora qiladi.
const quizState = {
  get answers() { return progress.answers; },
  set answers(v) { progress.answers = v; saveProgress(); },
  get revealed() { return progress.revealed; },
  set revealed(v) { progress.revealed = v; saveProgress(); }
};

let mode = 'learn'; // 'learn' | 'interview' | 'lab' | 'roadmap' | 'ai'
let aiSession = { questions: [], fromLesson: null };

const isDone = id => !!progress.completed[id];
const doneLessons = () => lessons.filter(l => isDone(l.id));

// ============================================================
// 2. ROUTING
// ============================================================
function route() {
  const raw = decodeURIComponent(location.hash.slice(1));
  const known = ['interview', 'lab', 'roadmap', 'ai'];
  const first = raw.split('/')[0];
  const [prefix, value] = known.includes(first) ? [first, raw.slice(first.length + (raw.includes('/') ? 1 : 0))] : ['lesson', raw];
  if (prefix === 'interview') return { view: 'interview', id: value };
  if (prefix === 'lab') return { view: 'lab', id: value };
  if (prefix === 'roadmap') return { view: 'roadmap' };
  if (prefix === 'ai') return { view: 'ai' };
  return { view: 'lesson', id: raw };
}

function go(hash) { location.hash = hash; }

function renderNav() {
  const sidebar = list.closest('aside');
  const sidebarScrollTop = sidebar.scrollTop;
  const r = route();
  list.replaceChildren();
  const home = document.createElement('button');
  home.textContent = '⌂  Boshlanish';
  home.className = r.view === 'lesson' && !r.id ? 'active' : '';
  home.onclick = () => go('');
  list.append(home);

  const modes = [
    ['#roadmap', '🗺  Yo‘l xaritasi', r.view === 'roadmap'],
    ['#ai', '🧠  AI test', r.view === 'ai'],
    ['#interview', '🎯  Intervyu testlari', r.view === 'interview'],
    ['#lab', '🔍  Kod o‘qish lab', r.view === 'lab']
  ];
  modes.forEach(([hash, label, active]) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.className = active ? 'active' : '';
    b.onclick = () => go(hash.slice(1));
    list.append(b);
  });

  const divider = document.createElement('p');
  divider.className = 'nav-divider';
  divider.textContent = 'DARSLLAR';
  list.append(divider);

  const query = search.value.toLocaleLowerCase();
  const filtered = lessons.filter(l => `${l.title} ${l.question}`.toLocaleLowerCase().includes(query));
  filtered.forEach(lesson => {
    const button = document.createElement('button');
    button.textContent = (isDone(lesson.id) ? '✓ ' : '') + lesson.title;
    button.className = (r.view === 'lesson' && r.id === lesson.id ? 'active ' : '') + (isDone(lesson.id) ? 'done' : '');
    button.onclick = () => go(encodeURIComponent(lesson.id));
    list.append(button);
  });
  if (query && !filtered.length) {
    const message = document.createElement('p');
    message.className = 'empty'; message.textContent = 'Dars topilmadi.'; list.append(message);
  }
  document.querySelector('#count').textContent = `${doneLessons().length}/${lessons.length} o‘qilgan · ${questions.length} test`;
  sidebar.scrollTop = sidebarScrollTop;
}

// ============================================================
// 3. HOME
// ============================================================
function renderHome() {
  const solved = Object.keys(progress.answers).length;
  const correct = questions.filter(q => progress.answers[q.id] === q.answer).length;
  const done = doneLessons().length;
  const pct = Math.round(done / lessons.length * 100);
  content.innerHTML = `<span class="eyebrow">JAVASCRIPT / INTERVYUGA TAYYORGARLIK</span>
  <h1>JavaScript’ni<br>kod o‘qib o‘rgan.</h1>
  <p class="lead">0 dan boshlaysan. Har bir dars: tushuncha → kod → natija. Darsni o‘qib bo‘lgach belgilasan, AI faqat o‘qigan darslaring bo‘yicha test beradi.</p>
  <div class="steps">
    <div><b>01 / O‘rgan</b>Tushunchni oddiy tilda o‘qi.</div>
    <div><b>02 / Belgilash</b>Darsni o‘qib bo‘lgach "O‘qilgan" deb bos.</div>
    <div><b>03 / AI test</b>Faqat tugallangan darslaring bo‘yicha test yech.</div>
  </div>
  <div class="cta-row">
    <button class="cta primary" onclick="location.hash='roadmap'">🗺  Yo‘l xaritasi</button>
    <button class="cta" onclick="location.hash='ai'">🧠  AI test</button>
    <button class="cta" onclick="location.hash='interview'">🎯  Barcha testlar</button>
    <button class="cta" onclick="location.hash='lab'">🔍  Kod laboratoriyasi</button>
  </div>
  <section class="card">
    <h2 style="margin-top:0">Sening holating</h2>
    <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><b>${pct}%</b></div>
    <p><b>${done} / ${lessons.length}</b> dars o‘qilgan · <b>${correct} / ${questions.length}</b> test to‘g‘ri · ${solved} ta javob berilgan.</p>
    ${done ? `<p class="note">AI test senga faqat o‘qigan ${done} darsing bo‘yicha savol beradi.</p>` : '<p class="note">Birinchi darsni ochib, o‘qib bo‘lgach “O‘qilgan deb belgilash” tugmasini bos.</p>'}
  </section>
  <section class="card"><h2 style="margin-top:0">Nega bu sayt?</h2>
  <p>Intervyuda ko‘pincha kod berishadi va "nima chiqaradi?" deb so‘rashadi. Bu yerda aynan shu ko‘nikma mashq qilinadi: kodni ko‘rganda tushunish va variantlar ichidan to‘g‘risini tanlash.</p></section>
  <p class="note">Har bir dars: savol → tushuntirish → kod → natija → xulosa → mashq.</p>`;
}

// ============================================================
// 4. ROADMAP
// ============================================================
function renderRoadmap() {
  const groups = [
    { title: '1-bosqich: asoslar', ids: ['var-let-const', 'scope', 'hoisting-tdz'], desc: 'O‘zgaruvchi, scope va hoisting — intervyuning eng ko‘p so‘raladigan qismi.' },
    { title: '2-bosqich: turlar va taqqoslash', ids: ['typeof', 'coercion-equality', 'truthy-falsy'], desc: 'Type coercion, == vs ===, truthy/falsy tuzoqlari.' },
    { title: '3-bosqich: obyektlar', ids: ['object-reference', 'destructuring-spread'], desc: 'Reference, nusxa olish, destructuring va spread.' },
    { title: '4-bosqich: funksiyalar', ids: ['functions', 'this-keyword'], desc: 'Funksiya turlari, parametrlar va this bog\'lanishi.' },
    { title: '5-bosqich: ma\'lumotlar va asinxronlik', ids: ['array-methods', 'promises-async', 'event-loop'], desc: 'Array metodlari, Promise va event loop tartibi.' },
    { title: '6-bosqich: brauzer', ids: ['dom-basics'], desc: 'DOM elementlarini tanlash, matn va hodisalar.' },
    { title: '7-bosqich: son va stringlar', ids: ['numbers-math', 'strings', 'operators'], desc: 'Sonlar, NaN, string metodlari va operatorlar noldan.' },
    { title: '8-bosqich: shart va tsikllar', ids: ['conditionals', 'loops'], desc: 'if/else, switch, for, while va tsikl tuzoqlari.' },
    { title: '9-bosqich: ma\'lumot tuzilmalari', ids: ['objects-basics', 'arrays-basics', 'json-basics'], desc: 'Obyekt, massiv va JSON bilan ishlash asoslari.' },
    { title: '10-bosqich: xato va modullar', ids: ['errors-try-catch', 'modules', 'closures'], desc: 'try/catch, import/export va closure.' },
    { title: '11-bosqich: intermediate asoslari', ids: ['prototypes', 'classes', 'callbacks'], desc: 'Prototip, class va callback mexanizmi.' },
    { title: '12-bosqich: ilg\'or mavzular', ids: ['iterators-generators', 'map-set', 'regex-basics', 'dates', 'fetch-api', 'events-advanced', 'storage', 'web-apis', 'proxy-reflect', 'common-pitfalls'], desc: 'Iterator, Map/Set, regex, Date, Fetch, event, storage va xatolar.' },
    { title: '13-bosqich: chuqur JS', ids: ['recursion', 'debounce-throttle', 'currying', 'memoization', 'symbol-bigint', 'weakmap-weakset', 'object-descriptors'], desc: 'Rekursiya, debounce/throttle, currying, memoization, Symbol/BigInt va descriptorlar.' },
    { title: '14-bosqich: zamonaviy naqshlar', ids: ['dynamic-import-async-iteration', 'promise-combinators'], desc: 'Dynamic import, async iteratsiya va Promise kombinatorlari.' },
    { title: '15-bosqich: Node.js', ids: ['node-basics', 'node-fs-path', 'node-streams'], desc: 'CommonJS/ESM, fs/path va stream/event emitter.' },
    { title: '16-bosqich: pattern va testing', ids: ['design-patterns', 'testing-basics'], desc: 'Factory, Singleton, Observer va unit test asoslari.' }
  ];
  const html = groups.map(g => `<section class="card"><h2 style="margin-top:0">${g.title}</h2><p>${g.desc}</p><ol class="roadmap-list">${g.ids.map(id => {
    const l = lessons.find(x => x.id === id);
    if (!l) return '';
    const qs = questions.filter(q => q.lessonId === id);
    const quizDone = qs.length && qs.every(q => progress.answers[q.id] === q.answer);
    const read = isDone(id);
    const badge = read && quizDone ? '✓ o‘qilgan + test' : read ? '✓ o‘qilgan' : `${qs.length} test`;
    return `<li class="${read ? 'done' : ''}"><a href="#${encodeURIComponent(id)}">${escapeHtml(l.title)}</a> <span class="badge ${read || quizDone ? 'ok' : ''}">${badge}</span></li>`;
  }).join('')}</ol></section>`).join('');
  content.innerHTML = `<span class="eyebrow">O‘QUV YO‘LI</span><h1>Bosqichma-bosqich.</h1>
  <p class="lead">Darsni o‘qib bo‘lgach belgila. Yashil belgi — o‘qilgan dars. Keyin AI test faqat shular bo‘yicha savol beradi.</p>${html}`;
}

// ============================================================
// 5. LESSON — "O'qilgan deb belgilash" tugmasi
// ============================================================
function renderLesson(lesson) {
  const section = (title, text) => text ? `<section><h2>${title}</h2><p style="white-space:pre-line">${escapeHtml(text)}</p></section>` : '';
  const qs = questions.filter(q => q.lessonId === lesson.id);
  const read = isDone(lesson.id);
  content.innerHTML = `<span class="eyebrow">JAVASCRIPT DARSI</span><h1>${escapeHtml(lesson.title)}</h1>
  <div class="read-bar ${read ? 'is-done' : ''}">
    <button id="mark-done" class="mark-btn">${read ? '✓ O‘qilgan' : '○ O‘qilgan deb belgilash'}</button>
    <span>${read ? 'Bu dars AI testda ishtirok etadi.' : 'O‘qib bo‘lgach belgila — AI test shu dars bo‘yicha savol beradi.'}</span>
  </div>
  <div class="card"><b>Savol</b><p>${escapeHtml(lesson.question)}</p></div>
  ${section('Sodda tushuntirish', lesson.explanation)}
  ${lesson.interactiveTruthy ? '<section id="truthy-demo" class="card"></section>' : ''}
  ${lesson.interactiveScope ? '<section id="scope-demo" class="card"></section>' : ''}
  ${lesson.comparison ? '<div class="table-wrap"><table><thead><tr><th>Xususiyat</th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>Scope</td><td>Function*</td><td>Block</td><td>Block</td></tr><tr><td>Qayta qiymat</td><td>Ha</td><td>Ha</td><td>Yo‘q</td></tr><tr><td>Bir scope ichida qayta deklaratsiya</td><td>Ha, var bilan*</td><td>Yo‘q</td><td>Yo‘q</td></tr><tr><td>Hoisting</td><td>Ha</td><td>Ha (TDZ)</td><td>Ha (TDZ)</td></tr><tr><td>Deklaratsiyadan oldin o‘qish</td><td>undefined</td><td>ReferenceError</td><td>ReferenceError</td></tr></tbody></table></div>' : ''}
  ${(lesson.sections || []).map(s => section(s.title, s.text) + (s.code ? `<pre><code>${escapeHtml(s.code)}</code></pre>` : '') + (s.note ? `<div class="card">${escapeHtml(s.note)}</div>` : '')).join('')}
  ${lesson.code ? `<h2>Kod misoli</h2><pre><code>${escapeHtml(lesson.code)}</code></pre>` : ''}
  ${section('Natija', lesson.result)}${section('Esda saqla', lesson.takeaway)}${section('Mustaqil mashq', lesson.exercise)}
  <div class="lesson-actions">
    <button id="mark-done-bottom" class="cta ${read ? '' : 'primary'}">${read ? '✓ O‘qilgan' : '✓ O‘qilgan deb belgilash'}</button>
    ${qs.length ? `<button class="cta" onclick="location.hash='interview/${lesson.id}'">Bu dars bo‘yicha ${qs.length} test →</button>` : ''}
    <button class="cta" onclick="location.hash='ai'">🧠 AI test</button>
  </div>`;
  const toggle = () => {
    const y = window.scrollY;
    if (isDone(lesson.id)) delete progress.completed[lesson.id];
    else progress.completed[lesson.id] = true;
    saveProgress();
    render();
    window.scrollTo(0, y);
  };
  document.querySelector('#mark-done').onclick = toggle;
  document.querySelector('#mark-done-bottom').onclick = toggle;
  if (lesson.interactiveTruthy) mountTruthyDemo(document.querySelector('#truthy-demo'));
  if (lesson.interactiveScope) mountScopeDemo(document.querySelector('#scope-demo'));
}

// ============================================================
// 6. INTERVIEW TESTLARI (natijalar localStorage ga saqlanadi)
// ============================================================
function renderInterview(filterId) {
  let listQs;
  let heading = 'Kodni o‘qi,<br>variantni tanla.';
  let lead = 'Har bir savolda kod beriladi. A/B/C/D dan birini tanla, keyin tushuntirish va qadam-baqadam tahlilni ko‘r.';
  if (filterId === 'ai') {
    listQs = aiSession.questions;
    heading = 'AI testi.<br>Faqat o‘qiganlaring.';
    lead = 'Bu savollar sen belgilagan darslardan tanlandi. Kam o‘zlashtirilgan darslardan ko‘proq savol keladi.';
  } else if (filterId) {
    listQs = questions.filter(q => q.lessonId === filterId);
  } else {
    listQs = questions;
  }
  const answered = listQs.filter(q => progress.answers[q.id] !== undefined).length;
  const correct = listQs.filter(q => progress.answers[q.id] === q.answer).length;
  const cards = listQs.map((q, i) => {
    const chosen = progress.answers[q.id];
    const revealed = progress.revealed[q.id];
    const isCorrect = chosen === q.answer;
    const options = q.options.map((opt, oi) => {
      let cls = 'option';
      if (chosen === oi) cls += ' chosen';
      if (revealed && oi === q.answer) cls += ' correct';
      if (revealed && chosen === oi && !isCorrect) cls += ' wrong';
      return `<button class="${cls}" data-q="${q.id}" data-o="${oi}"><span class="opt-letter">${'ABCD'[oi]}</span><span>${escapeHtml(opt)}</span></button>`;
    }).join('');
    return `<section class="card question" id="${q.id}">
      <div class="q-head"><span class="q-num">${i + 1}/${listQs.length}</span><span class="badge">${escapeHtml(q.topic)}</span><span class="badge level">${escapeHtml(q.level)}</span></div>
      <h3>${escapeHtml(q.question)}</h3>
      ${q.code ? `<pre><code>${escapeHtml(q.code)}</code></pre>` : ''}
      <div class="options">${options}</div>
      ${revealed ? `<div class="feedback ${isCorrect ? 'good' : 'bad'}">
        <b>${isCorrect ? '✓ To‘g‘ri!' : '✕ Noto‘g‘ri. To‘g‘ri javob: ' + 'ABCD'[q.answer]}</b>
        <p>${escapeHtml(q.explain)}</p>
        <div class="walkthrough"><b>Kodni o‘qish bosqichlari:</b><ol>${(q.walkthrough || []).map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ol></div>
      </div>` : ''}
    </section>`;
  }).join('');
  content.innerHTML = `<span class="eyebrow">${filterId === 'ai' ? 'AI TEST REJIMI' : 'INTERVYU REJIMI'}</span><h1>${heading}</h1>
  <p class="lead">${lead}</p>
  <div class="score-bar"><div><b>${correct} / ${listQs.length}</b><span>to‘g‘ri</span></div><div><b>${answered} / ${listQs.length}</b><span>javoblandi</span></div>
    <button class="cta" id="reset-quiz">↻ Qaytadan boshlash</button>
    <button class="cta" onclick="location.hash='ai'">← AI test</button></div>
  ${cards || '<section class="card">Bu ro‘yxatda savol yo‘q.</section>'}`;
  content.querySelectorAll('.option').forEach(btn => {
    btn.onclick = () => {
      const qid = btn.dataset.q;
      if (progress.revealed[qid]) return;
      progress.answers[qid] = Number(btn.dataset.o);
      progress.revealed[qid] = true;
      saveProgress();
      render();
      const el = document.getElementById(qid);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  });
  content.querySelector('#reset-quiz').onclick = () => {
    listQs.forEach(q => { delete progress.answers[q.id]; delete progress.revealed[q.id]; });
    saveProgress();
    render();
  };
}

// ============================================================
// 7. KOD LABORATORIYASI
// ============================================================
function renderLab(filterId) {
  const labsList = filterId ? labs.filter(l => l.id === filterId) : labs;
  const cards = labsList.map(lab => `<section class="card lab">
    <h2 style="margin-top:0">${escapeHtml(lab.title)}</h2>
    <p class="hint">💡 ${escapeHtml(lab.hint)}</p>
    <div class="lab-code">${lab.lines.map(line => `<div class="lab-line"><code>${escapeHtml(line.code) || '&nbsp;'}</code><span>${escapeHtml(line.note)}</span></div>`).join('')}</div>
    <div class="takeaway"><b>Esda saqla:</b> ${escapeHtml(lab.takeaway)}</div>
  </section>`).join('');
  content.innerHTML = `<span class="eyebrow">KOD O‘QISH LABORATORIYASI</span><h1>Satr-ma-satr<br>tahlil qil.</h1>
  <p class="lead">Chapda kod, o‘ngda nima bo‘layotgani. Intervyuda aynan shunday o‘qish kerak.</p>${cards}`;
}

// ============================================================
// 8. AI TEST — faqat o'qilgan darslar bo'yicha
// ============================================================

// Og'irlik: noto'g'ri yoki javobsiz qolgan savollar ko'p bo'lsa, dars ko'proq tanlanadi.
function lessonWeight(lessonId) {
  const qs = questions.filter(q => q.lessonId === lessonId);
  if (!qs.length) return 1;
  const wrong = qs.filter(q => progress.answers[q.id] !== undefined && progress.answers[q.id] !== q.answer).length;
  const unanswered = qs.filter(q => progress.answers[q.id] === undefined).length;
  return 1 + wrong * 3 + unanswered;
}

function buildAdaptiveQuiz(count) {
  const doneIds = doneLessons().map(l => l.id);
  const pool = questions.filter(q => doneIds.includes(q.lessonId));
  if (!pool.length) return [];
  // Har bir savolni dars og'irligi bilan "ko'paytirib", keyin aralashtiramiz.
  const weighted = [];
  pool.forEach(q => {
    const w = lessonWeight(q.lessonId);
    for (let i = 0; i < w; i++) weighted.push(q);
  });
  for (let i = weighted.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [weighted[i], weighted[j]] = [weighted[j], weighted[i]];
  }
  const picked = [];
  const seen = new Set();
  for (const q of weighted) {
    if (seen.has(q.id)) continue;
    seen.add(q.id);
    picked.push(q);
    if (picked.length >= count) break;
  }
  return picked;
}

function renderAI() {
  const done = doneLessons();
  const cfg = progress.ai;
  const totalQs = questions.filter(q => done.some(l => l.id === q.lessonId)).length;

  if (!done.length) {
    content.innerHTML = `<span class="eyebrow">AI TEST</span><h1>Avval dars o‘qi.</h1>
    <p class="lead">AI senga faqat <b>o‘qilgan deb belgilagan</b> darslaring bo‘yicha test beradi. Hozir hech bir dars belgilanmagan.</p>
    <section class="card"><b>Nima qilish kerak?</b><ol><li>Biror darsni och.</li><li>O‘qib bo‘lgach “O‘qilgan deb belgilash” tugmasini bos.</li><li>Qaytib bu yerga kel — AI test ishga tushadi.</li></ol></section>
    <div class="cta-row"><button class="cta primary" onclick="location.hash='roadmap'">🗺  Yo‘l xaritasi</button><button class="cta" onclick="location.hash='var-let-const'">Birinchi darsni och →</button></div>`;
    return;
  }

  content.innerHTML = `<span class="eyebrow">AI TEST</span><h1>Senga mos test.</h1>
  <p class="lead">Faqat belgilagan <b>${done.length} darsing</b> bo‘yicha savol beraman. Kam o‘zlashtirilgan darslarga ko‘proq e’tibor qarataman.</p>

  <section class="card">
    <h2 style="margin-top:0">Adaptiv test</h2>
    <p>O‘qilgan darslaring: <b>${done.length}</b> · Ularda jami <b>${totalQs}</b> ta savol bor · Javob xato bo‘lgan darslardan ko‘proq savol keladi.</p>
    <div class="ai-controls">
      <label for="ai-count">Savol soni</label>
      <select id="ai-count"><option value="5">5 ta</option><option value="10" selected>10 ta</option><option value="15">15 ta</option><option value="20">20 ta</option></select>
      <button class="cta primary" id="ai-start">🧠 Testni boshlash</button>
    </div>
    <div id="ai-done-list" class="ai-done-list"></div>
  </section>

  <section class="card">
    <h2 style="margin-top:0">AI bilan yangi savol yaratish</h2>
    <p class="note">O‘z OpenAI-mos API kalitingni kiritasan. Kalit faqat shu brauzerda saqlanadi va faqat tanlagan endpoint ga yuboriladi. Kalit bo‘lmasa, yuqoridagi adaptiv test ishlayveradi.</p>
    <div class="ai-settings">
      <label>Endpoint<input id="ai-endpoint" type="text" value="${escapeHtml(cfg.endpoint)}"></label>
      <label>Model<input id="ai-model" type="text" value="${escapeHtml(cfg.model)}"></label>
      <label>API kalit<input id="ai-key" type="password" value="${escapeHtml(cfg.key)}" placeholder="sk-..."></label>
    </div>
    <div class="ai-controls">
      <button class="cta" id="ai-save">Sozlamalarni saqlash</button>
      <select id="ai-lesson">${done.map(l => `<option value="${l.id}">${escapeHtml(l.title)}</option>`).join('')}</select>
      <button class="cta primary" id="ai-generate">✨ AI savol yarat</button>
    </div>
    <div id="ai-status" class="ai-status"></div>
  </section>`;

  // O'qilgan darslar ro'yxati
  content.querySelector('#ai-done-list').innerHTML = done.map(l => {
    const qs = questions.filter(q => q.lessonId === l.id);
    const right = qs.filter(q => progress.answers[q.id] === q.answer).length;
    return `<span class="badge ${right === qs.length && qs.length ? 'ok' : ''}">✓ ${escapeHtml(l.title)} <small>${right}/${qs.length}</small></span>`;
  }).join('');

  content.querySelector('#ai-start').onclick = () => {
    const count = Number(content.querySelector('#ai-count').value);
    aiSession = { questions: buildAdaptiveQuiz(count), fromLesson: null };
    if (!aiSession.questions.length) return;
    go('interview/ai');
  };

  content.querySelector('#ai-save').onclick = () => {
    progress.ai.endpoint = content.querySelector('#ai-endpoint').value.trim();
    progress.ai.model = content.querySelector('#ai-model').value.trim();
    progress.ai.key = content.querySelector('#ai-key').value.trim();
    saveProgress();
    setAIStatus('✓ Sozlamalar saqlandi.', 'ok');
  };

  content.querySelector('#ai-generate').onclick = async () => {
    const lessonId = content.querySelector('#ai-lesson').value;
    const lesson = lessons.find(l => l.id === lessonId);
    const btn = content.querySelector('#ai-generate');
    btn.disabled = true;
    setAIStatus('AI savol yaratilyapti...', '');
    const result = await generateAIQuestion(lesson);
    btn.disabled = false;
    if (result.error) {
      setAIStatus('✕ ' + result.error + '.<br>Avval sozlamalarni tekshir. Kalitsiz ishlash uchun yuqoridagi “Adaptiv test”ni ishlat.', 'bad');
      return;
    }
    aiSession = { questions: [result.question], fromLesson: lesson.id };
    setAIStatus('✓ Yangi savol tayyor. Testga o‘tilyapti...', 'ok');
    setTimeout(() => go('interview/ai'), 500);
  };
}

function setAIStatus(html, kind) {
  const el = document.querySelector('#ai-status');
  if (el) { el.className = 'ai-status ' + kind; el.innerHTML = html; }
}

async function generateAIQuestion(lesson) {
  const cfg = progress.ai;
  if (!cfg.key) return { error: 'API kalit kiritilmagan' };
  const material = [
    lesson.explanation || '',
    ...(lesson.sections || []).map(s => `${s.title}: ${s.text || ''} ${s.code || ''}`),
    lesson.takeaway || ''
  ].join('\n').slice(0, 5000);

  const prompt = `Sen JavaScript intervyu tayyorlash uchun savol yaratuvchisan. Quyidagi dars materiali asosida BITTA A/B/C/D test savoli yarat.

QOIDALAR:
- Savol kodni tushunishga qaratilgan bo'lsin.
- Faqat JSON qaytar, boshqa hech narsa yozma.
- JSON shakli:
{"question":"savol matni","code":"kerak bo'lsa kod","options":["A variant","B variant","C variant","D variant"],"answer":0,"explain":"to'g'ri javob nima uchun","walkthrough":["qadam 1","qadam 2"]}
- answer — to'g'ri variant indeksi (0=A, 1=B, 2=C, 3=D).
- options aynan 4 ta bo'lishi shart.
- walkthrough kamida 2 ta qadam.

DARS: ${lesson.title}

MATERIAL:
${material}`;

  try {
    const res = await fetch(cfg.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cfg.key },
      body: JSON.stringify({ model: cfg.model, messages: [{ role: 'user', content: prompt }], temperature: 0.4 })
    });
    if (!res.ok) {
      const t = await res.text();
      return { error: `API xato ${res.status}: ${t.slice(0, 160)}` };
    }
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    const clean = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const q = JSON.parse(clean);
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
      return { error: 'AI noto‘g‘ri formatda javob berdi' };
    }
    return {
      question: {
        id: 'ai-' + Date.now(),
        lessonId: lesson.id,
        topic: lesson.title,
        level: 'AI',
        question: q.question,
        code: q.code || '',
        options: q.options,
        answer: q.answer,
        explain: q.explain || 'AI tomonidan yaratilgan savol.',
        walkthrough: Array.isArray(q.walkthrough) && q.walkthrough.length ? q.walkthrough : ['Dars materialini qayta o‘qi.', 'Kodni satr-ma-satr kuzat.']
      }
    };
  } catch (e) {
    return { error: e.message || 'Tarmoq xatosi' };
  }
}

// ============================================================
// 9. RENDER
// ============================================================
function render() {
  renderNav();
  const r = route();
  if (r.view === 'interview') return renderInterview(r.id || null);
  if (r.view === 'lab') return renderLab(r.id || null);
  if (r.view === 'roadmap') return renderRoadmap();
  if (r.view === 'ai') return renderAI();
  const lesson = lessons.find(l => l.id === r.id);
  if (!lesson) return renderHome();
  renderLesson(lesson);
}

search.addEventListener('input', render);
window.addEventListener('hashchange', render);
render();
