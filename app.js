const list = document.querySelector('#lesson-list');
const content = document.querySelector('#content');
const search = document.querySelector('#search');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessons = window.lessons || [];
const questions = window.interviewQuestions || [];
const labs = window.codeLabs || [];

// Test holati: har bir savol uchun tanlangan javob va "ko'rsatilgan tushuntirish".
const quizState = { answers: {}, revealed: {} };
let mode = 'learn'; // 'learn' | 'interview' | 'lab' | 'roadmap'

function route() {
  const raw = decodeURIComponent(location.hash.slice(1));
  const known = ['interview', 'lab', 'roadmap'];
  const first = raw.split('/')[0];
  const [prefix, value] = known.includes(first) ? [first, raw.slice(first.length + (raw.includes('/') ? 1 : 0))] : ['lesson', raw];
  if (prefix === 'interview') return { view: 'interview', id: value };
  if (prefix === 'lab') return { view: 'lab', id: value };
  if (prefix === 'roadmap') return { view: 'roadmap' };
  return { view: 'lesson', id: raw };
}

function go(hash) { location.hash = hash; }

function renderNav() {
  const r = route();
  list.replaceChildren();
  const home = document.createElement('button');
  home.textContent = '⌂  Boshlanish';
  home.className = r.view === 'lesson' && !r.id ? 'active' : '';
  home.onclick = () => go('');
  list.append(home);

  const modes = [
    ['#roadmap', '🗺  Yo‘l xaritasi', r.view === 'roadmap'],
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
    button.textContent = lesson.title;
    button.className = r.view === 'lesson' && r.id === lesson.id ? 'active' : '';
    button.onclick = () => go(encodeURIComponent(lesson.id));
    list.append(button);
  });
  if (query && !filtered.length) {
    const message = document.createElement('p');
    message.className = 'empty'; message.textContent = 'Dars topilmadi.'; list.append(message);
  }
  document.querySelector('#count').textContent = `${lessons.length} dars · ${questions.length} test`;
}

function renderHome() {
  const solved = Object.keys(quizState.answers).length;
  content.innerHTML = `<span class="eyebrow">JAVASCRIPT / INTERVYUGA TAYYORGARLIK</span>
  <h1>JavaScript’ni<br>kod o‘qib o‘rgan.</h1>
  <p class="lead">0 dan boshlaysan. Har bir dars: tushuncha → kod → natija. Keyin intervyu testida bilimingni tekshirasan.</p>
  <div class="steps">
    <div><b>01 / O‘rgan</b>Tushunchni oddiy tilda o‘qi.</div>
    <div><b>02 / O‘qishni mashq qil</b>Kodni satr-ma-satr tahlil qil.</div>
    <div><b>03 / Sinab ko‘r</b>A/B/C/D testlarda javob tanla.</div>
  </div>
  <div class="cta-row">
    <button class="cta primary" onclick="location.hash='roadmap'">🗺  Yo‘l xaritasi</button>
    <button class="cta" onclick="location.hash='interview'">🎯  Testlarni boshlash</button>
    <button class="cta" onclick="location.hash='lab'">🔍  Kod laboratoriyasi</button>
  </div>
  <section class="card">
    <h2 style="margin-top:0">Sening holating</h2>
    <p>${solved} / ${questions.length} test javoblandi. ${solved ? 'Davom et, yaxshi ketayapsan.' : 'Birinchi testni boshla.'}</p>
  </section>
  <section class="card"><h2 style="margin-top:0">Nega bu sayt?</h2>
  <p>Intervyuda ko‘pincha kod berishadi va "nima chiqaradi?" deb so‘rashadi. Bu yerda aynan shu ko‘nikma mashq qilinadi: kodni ko‘rganda tushunish va variantlar ichidan to‘g‘risini tanlash.</p></section>
  <p class="note">Har bir dars: savol → tushuntirish → kod → natija → xulosa → mashq.</p>`;
}

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
    { title: '14-bosqich: zamonaviy naqshlar', ids: ['dynamic-import-async-iteration', 'promise-combinators'], desc: 'Dynamic import, async iteratsiya va Promise kombinatorlari.' }
  ];
  const html = groups.map(g => `<section class="card"><h2 style="margin-top:0">${g.title}</h2><p>${g.desc}</p><ol class="roadmap-list">${g.ids.map(id => {
    const l = lessons.find(x => x.id === id);
    if (!l) return '';
    const qs = questions.filter(q => q.lessonId === id);
    const done = qs.length && qs.every(q => quizState.answers[q.id] === q.answer);
    return `<li><a href="#${encodeURIComponent(id)}">${escapeHtml(l.title)}</a> <span class="badge ${done ? 'ok' : ''}">${done ? '✓ o‘zlashtirildi' : `${qs.length} test`}</span></li>`;
  }).join('')}</ol></section>`).join('');
  content.innerHTML = `<span class="eyebrow">O‘QUV YO‘LI</span><h1>Bosqichma-bosqich.</h1>
  <p class="lead">Har bosqichni tugatgach, testlarni yech. To‘g‘ri javoblar ro‘yxatda belgilanadi.</p>${html}`;
}

function renderLesson(lesson) {
  const section = (title, text) => text ? `<section><h2>${title}</h2><p style="white-space:pre-line">${escapeHtml(text)}</p></section>` : '';
  const qs = questions.filter(q => q.lessonId === lesson.id);
  content.innerHTML = `<span class="eyebrow">JAVASCRIPT DARSI</span><h1>${escapeHtml(lesson.title)}</h1>
  <div class="card"><b>Savol</b><p>${escapeHtml(lesson.question)}</p></div>
  ${section('Sodda tushuntirish', lesson.explanation)}
  ${lesson.interactiveTruthy ? '<section id="truthy-demo" class="card"></section>' : ''}
  ${lesson.interactiveScope ? '<section id="scope-demo" class="card"></section>' : ''}
  ${lesson.comparison ? '<div class="table-wrap"><table><thead><tr><th>Xususiyat</th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>Scope</td><td>Function*</td><td>Block</td><td>Block</td></tr><tr><td>Qayta qiymat</td><td>Ha</td><td>Ha</td><td>Yo‘q</td></tr><tr><td>Bir scope ichida qayta deklaratsiya</td><td>Ha, var bilan*</td><td>Yo‘q</td><td>Yo‘q</td></tr><tr><td>Hoisting</td><td>Ha</td><td>Ha (TDZ)</td><td>Ha (TDZ)</td></tr><tr><td>Deklaratsiyadan oldin o‘qish</td><td>undefined</td><td>ReferenceError</td><td>ReferenceError</td></tr></tbody></table></div>' : ''}
  ${(lesson.sections || []).map(s => section(s.title, s.text) + (s.code ? `<pre><code>${escapeHtml(s.code)}</code></pre>` : '') + (s.note ? `<div class="card">${escapeHtml(s.note)}</div>` : '')).join('')}
  ${lesson.code ? `<h2>Kod misoli</h2><pre><code>${escapeHtml(lesson.code)}</code></pre>` : ''}
  ${section('Natija', lesson.result)}${section('Esda saqla', lesson.takeaway)}${section('Mustaqil mashq', lesson.exercise)}
  ${qs.length ? `<section class="card quiz-teaser"><b>Bu dars bo‘yicha ${qs.length} ta intervyu testi bor.</b><p>Javob tanlab, darhol tushuntirishni ko‘r.</p><button class="cta primary" onclick="location.hash='interview/${lesson.id}'">Testlarni yechish →</button></section>` : ''}`;
  if (lesson.interactiveTruthy) mountTruthyDemo(document.querySelector('#truthy-demo'));
  if (lesson.interactiveScope) mountScopeDemo(document.querySelector('#scope-demo'));
}

function renderInterview(filterId) {
  const listQs = filterId ? questions.filter(q => q.lessonId === filterId) : questions;
  const answered = listQs.filter(q => quizState.answers[q.id] !== undefined).length;
  const correct = listQs.filter(q => quizState.answers[q.id] === q.answer).length;
  const cards = listQs.map((q, i) => {
    const chosen = quizState.answers[q.id];
    const revealed = quizState.revealed[q.id];
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
        <div class="walkthrough"><b>Kodni o‘qish bosqichlari:</b><ol>${q.walkthrough.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ol></div>
      </div>` : ''}
    </section>`;
  }).join('');
  content.innerHTML = `<span class="eyebrow">INTERVYU REJIMI</span><h1>Kodni o‘qi,<br>variantni tanla.</h1>
  <p class="lead">Har bir savolda kod beriladi. A/B/C/D dan birini tanla, keyin tushuntirish va qadam-baqadam tahlilni ko‘r.</p>
  <div class="score-bar"><div><b>${correct} / ${listQs.length}</b><span>to‘g‘ri</span></div><div><b>${answered} / ${listQs.length}</b><span>javoblandi</span></div>
    <button class="cta" onclick="quizState.answers={};quizState.revealed={};render()">↻ Qaytadan boshlash</button></div>
  ${cards}`;
  content.querySelectorAll('.option').forEach(btn => {
    btn.onclick = () => {
      const qid = btn.dataset.q;
      if (quizState.revealed[qid]) return;
      quizState.answers[qid] = Number(btn.dataset.o);
      quizState.revealed[qid] = true;
      render();
      const el = document.getElementById(qid);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  });
}

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

function render() {
  renderNav();
  const r = route();
  if (r.view === 'interview') return renderInterview(r.id || null);
  if (r.view === 'lab') return renderLab(r.id || null);
  if (r.view === 'roadmap') return renderRoadmap();
  const lesson = lessons.find(l => l.id === r.id);
  if (!lesson) return renderHome();
  renderLesson(lesson);
}

search.addEventListener('input', render);
window.addEventListener('hashchange', render);
render();
