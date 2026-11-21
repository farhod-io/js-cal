const list = document.querySelector('#lesson-list');
const topNav = document.querySelector('#top-nav');
const content = document.querySelector('#content');
const search = document.querySelector('#search');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessons = window.lessons || [];
const lessonStages = window.lessonStages || [{ title: 'Darslar', ids: lessons.map(l => l.id) }];
const questions = window.interviewQuestions || [];
const labs = window.codeLabs || [];

// ============================================================
// 1. LOCALSTORAGE: o'qilgan darslar, test natijalari, AI sozlamalari
// ============================================================
const STORAGE_KEY = 'jsdaftar_progress_v1';
const defaultProgress = () => ({
  lessonSteps: {},              // har bir mavzudagi oxirgi ochilgan qadam
  completed: {},                 // { lessonId: true } — foydalanuvchi "o'qilgan" deb belgilagan darslar
  answers: {},                   // { questionId: tanlanganVariantIndex }
  revealed: {},                  // { questionId: true } — tushuntirish ko'rsatilganmi
  ai: { provider: 'gemini', accounts: {} }
});

const AI_PROVIDERS = {
  gemini: { name: 'Gemini', model: 'gemini-3.8-flash', keyPlaceholder: 'AIza...', keyUrl: 'https://aistudio.google.com/apikey' },
  deepseek: { name: 'DeepSeek', model: 'deepseek-flash', keyPlaceholder: 'sk-...', keyUrl: 'https://platform.deepseek.com/api_keys' },
  custom: { name: 'OpenAI-mos API', model: 'gpt-4o-mini', endpoint: 'https://api.openai.com/v1/chat/completions', keyPlaceholder: 'sk-...' }
};

function normalizeAISettings(saved = {}) {
  if (!saved || typeof saved !== 'object') saved = {};
  const accounts = {};
  for (const [id, provider] of Object.entries(AI_PROVIDERS)) {
    const old = saved.accounts?.[id] || (id === 'custom' && !saved.provider ? saved : {});
    accounts[id] = {
      model: typeof old.model === 'string' && old.model ? old.model : provider.model,
      key: typeof old.key === 'string' ? old.key : '',
      endpoint: typeof old.endpoint === 'string' ? old.endpoint : provider.endpoint || ''
    };
  }
  const provider = Object.hasOwn(AI_PROVIDERS, saved.provider) ? saved.provider : (saved.key ? 'custom' : 'gemini');
  return { provider, accounts };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress(), ai: normalizeAISettings() };
    const p = JSON.parse(raw);
    return {
      lessonSteps: p.lessonSteps && typeof p.lessonSteps === 'object' ? p.lessonSteps : {},
      completed: p.completed || {},
      answers: p.answers || {},
      revealed: p.revealed || {},
      ai: normalizeAISettings(p.ai)
    };
  } catch (e) {
    return { ...defaultProgress(), ai: normalizeAISettings() };
  }
}

const progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (e) {
    // localStorage o'chirilgan yoki to'la bo'lsa, sayt ishlashda davom etadi.
    return false;
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
  topNav.replaceChildren();
  const home = document.createElement('button');
  home.textContent = '⌂  Boshlanish';
  home.className = r.view === 'lesson' && !r.id ? 'active' : '';
  home.onclick = () => go('');
  topNav.append(home);

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
    topNav.append(b);
  });

  const query = search.value.toLocaleLowerCase();
  const filtered = lessons.filter(l => `${l.title} ${l.question}`.toLocaleLowerCase().includes(query));
  let previousStage;
  filtered.forEach(lesson => {
    const stage = lessonStages.find(group => group.ids.includes(lesson.id));
    if (stage !== previousStage) {
      const heading = document.createElement('p');
      heading.className = 'nav-divider';
      heading.textContent = stage?.title || 'Darslar';
      list.append(heading);
      previousStage = stage;
    }
    const button = document.createElement('button');
    button.textContent = `${lessons.indexOf(lesson) + 1}. ${lesson.title}`;
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
    <button class="cta primary" onclick="location.hash='js-intro'">01 / O‘rganishni boshlash</button>
    <button class="cta" onclick="location.hash='roadmap'">🗺  Yo‘l xaritasi</button>
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
  const groups = lessonStages;
  const html = groups.map(g => `<section class="card"><h2 style="margin-top:0">${g.title}</h2><p>${g.desc}</p><ol class="roadmap-list" start="${lessons.findIndex(l => l.id === g.ids[0]) + 1}">${g.ids.map(id => {
    const l = lessons.find(x => x.id === id);
    if (!l) return '';
    const qs = questions.filter(q => q.lessonId === id);
    const quizDone = qs.length && qs.every(q => progress.answers[q.id] === q.answer);
    const read = isDone(id);
    const badge = read && quizDone ? '✓ o‘qilgan + test' : read ? '✓ o‘qilgan' : `${qs.length} test`;
    return `<li class="${read ? 'done' : ''}"><a href="#${encodeURIComponent(id)}">${escapeHtml(l.title)}</a> <span class="badge ${read || quizDone ? 'ok' : ''}">${badge}</span></li>`;
  }).join('')}</ol>${g.project ? `<div class="stage-project"><b>Mini-loyiha</b><p>${escapeHtml(g.project)}</p></div>` : ''}</section>`).join('');
  content.innerHTML = `<span class="eyebrow">O‘QUV YO‘LI</span><h1>Bosqichma-bosqich.</h1>
  <p class="lead">${lessons.length} mavzu, ${groups.length} bosqich: oddiydan murakkabga. Har bosqich oxirida mini-loyiha qiling. O‘qilgan belgilar asosida AI test yaratiladi.</p>${html}`;
}

// ============================================================
// 5. LESSON — "O'qilgan deb belgilash" tugmasi
// ============================================================
function buildLessonSteps(lesson) {
  const text = value => `<p class="lesson-text">${escapeHtml(value)}</p>`;
  const code = value => `<pre><code>${escapeHtml(value)}</code></pre>`;
  const steps = [{ title: 'Mavzu bilan tanishish', html: `<div class="card"><b>Bu mavzuda nimani o‘rganamiz?</b>${text(lesson.question)}</div>${text(lesson.explanation || '')}` }];
  (lesson.sections || []).forEach(s => steps.push({
    title: s.title,
    html: `${s.text ? text(s.text) : ''}${s.code ? `<h3>Kodni o‘qing</h3>${code(s.code)}` : ''}${s.note ? `<div class="card"><b>Izoh va eslatma</b>${text(s.note)}</div>` : ''}`
  }));
  if (lesson.code) steps.push({ title: 'Kod misolini tahlil qilish', html: `${code(lesson.code)}${lesson.result ? `<h3>Natija</h3>${text(lesson.result)}` : ''}` });
  else if (lesson.result) steps.push({ title: 'Natijani tushunish', html: text(lesson.result) });
  if (lesson.comparison) steps.push({ title: 'var, let va const — taqqoslash', html: '<div class="table-wrap"><table><thead><tr><th>Xususiyat</th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>Scope</td><td>Function yoki global</td><td>Block</td><td>Block</td></tr><tr><td>Qayta qiymat berish</td><td>Ha</td><td>Ha</td><td>Yo‘q</td></tr><tr><td>Bir scope ichida qayta e’lon</td><td>var bilan mumkin*</td><td>Yo‘q</td><td>Yo‘q</td></tr><tr><td>Deklaratsiyadan oldin o‘qish</td><td>undefined</td><td>ReferenceError</td><td>ReferenceError</td></tr></tbody></table></div><p>* Shu scope ichidagi let yoki const nomini var bilan ham qayta e’lon qilib bo‘lmaydi. const obyektining ichki xususiyatlari o‘zgarishi mumkin; o‘zgaruvchining o‘ziga boshqa qiymat berib bo‘lmaydi.</p>' });
  if (lesson.interactiveTruthy || lesson.interactiveScope) steps.push({ title: 'Amalda sinab ko‘ring', html: `${lesson.interactiveTruthy ? '<section id="truthy-demo" class="card"></section>' : ''}${lesson.interactiveScope ? '<section id="scope-demo" class="card"></section>' : ''}` });
  steps.push({ title: 'Xulosa va mustaqil mashq', html: `${lesson.takeaway ? `<div class="card"><b>Esda saqlang</b>${text(lesson.takeaway)}</div>` : ''}<h3>Endi o‘zingiz sinab ko‘ring</h3>${text(lesson.exercise || 'Mavzudagi kodlardan birini o‘zgartiring. Ishga tushirishdan oldin natijani taxmin qiling, keyin tekshiring.')}<p class="hint">Avval natijani o‘zingiz taxmin qiling. Keyin kodni ishga tushirib, nima uchun shunday bo‘lganini tushuntirib bering.</p>` });
  if (lesson.resources?.length) {
    steps[steps.length - 1].html += `<div class="lesson-resources"><h3>Qo‘shimcha o‘qish</h3><ul>${lesson.resources.map(r => `<li><a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.title)} ↗</a></li>`).join('')}</ul></div>`;
  }
  return steps;
}

function renderLesson(lesson) {
  const steps = buildLessonSteps(lesson);
  const savedStep = progress.lessonSteps[lesson.id];
  const current = Number.isInteger(savedStep) ? Math.max(0, Math.min(savedStep, steps.length - 1)) : 0;
  const last = current === steps.length - 1;
  const index = lessons.findIndex(l => l.id === lesson.id);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const qs = questions.filter(q => q.lessonId === lesson.id);
  const read = isDone(lesson.id);
  const stage = lessonStages.find(group => group.ids.includes(lesson.id));
  content.innerHTML = `<span class="eyebrow">${index + 1} / ${lessons.length} MAVZU${stage ? ` · ${escapeHtml(stage.title)}` : ''}</span><h1>${escapeHtml(lesson.title)}</h1>
  <div class="read-bar ${read ? 'is-done' : ''}">
    <button id="mark-done" class="mark-btn">${read ? '✓ O‘qilgan' : '○ O‘qilgan deb belgilash'}</button>
    <span>${read ? 'Bu mavzu AI testda ishtirok etadi.' : 'Qadamlarni o‘rganing. O‘qilgan deb belgilasangiz, mavzu AI testga qo‘shiladi.'}</span>
  </div>
  <div class="lesson-progress"><span>Qadam ${current + 1} / ${steps.length}</span><span>Har safar bitta kichik bo‘lim</span></div>
  <progress class="lesson-progress-track" value="${current + 1}" max="${steps.length}" aria-label="Mavzu qadamlari"></progress>
  <details class="lesson-outline"><summary>Mavzu rejasi</summary><ol>${steps.map((s, i) => `<li><button type="button" data-lesson-step="${i}" ${i === current ? 'aria-current="step"' : ''}>${escapeHtml(s.title)}</button></li>`).join('')}</ol></details>
  <section class="lesson-step" aria-labelledby="lesson-step-title"><h2 id="lesson-step-title" tabindex="-1">${escapeHtml(steps[current].title)}</h2>${steps[current].html}</section>
  <div class="lesson-step-controls">
    <button class="cta" id="lesson-step-back" ${current === 0 ? 'disabled' : ''}>← Oldingi qadam</button>
    ${!last ? '<button class="cta primary" id="lesson-step-next">Keyingi qadam →</button>' : `<button class="cta primary" id="lesson-complete">${next ? 'O‘qilgan deb belgilash va keyingi mavzu →' : 'O‘qilgan deb belgilash va yakunlash ✓'}</button>`}
  </div>
  ${last ? `<div class="lesson-actions">${qs.length ? `<a class="cta" href="#interview/${encodeURIComponent(lesson.id)}">Shu mavzu bo‘yicha ${qs.length} ta test →</a>` : ''}<a class="cta" href="#ai">🧠 O‘qilgan mavzulardan AI test</a></div>` : ''}
  <nav class="lesson-topic-nav" aria-label="Mavzular orasida o‘tish">
    ${previous ? `<a href="#${encodeURIComponent(previous.id)}">← ${escapeHtml(previous.title)}</a>` : '<span>Birinchi mavzu</span>'}
    ${next ? `<a href="#${encodeURIComponent(next.id)}">${escapeHtml(next.title)} →</a>` : '<span>Oxirgi mavzu</span>'}
  </nav>`;
  const setStep = value => {
    progress.lessonSteps[lesson.id] = value;
    saveProgress();
    renderLesson(lesson);
    scrollContentToTop();
    content.querySelector('#lesson-step-title').focus({ preventScroll: true });
  };
  content.querySelectorAll('[data-lesson-step]').forEach(button => {
    button.onclick = () => setStep(Number(button.dataset.lessonStep));
  });
  content.querySelector('#lesson-step-back').onclick = () => { if (current > 0) setStep(current - 1); };
  const nextStep = content.querySelector('#lesson-step-next');
  if (nextStep) nextStep.onclick = () => setStep(current + 1);
  content.querySelector('#mark-done').onclick = () => {
    if (isDone(lesson.id)) delete progress.completed[lesson.id];
    else progress.completed[lesson.id] = true;
    const stored = saveProgress();
    render();
    if (!stored) showLessonStorageError();
  };
  const complete = content.querySelector('#lesson-complete');
  if (complete) complete.onclick = () => {
    progress.completed[lesson.id] = true;
    progress.lessonSteps[lesson.id] = current;
    if (!saveProgress()) {
      render();
      showLessonStorageError();
      return;
    }
    go(next ? encodeURIComponent(next.id) : 'roadmap');
  };
  if (content.querySelector('#truthy-demo')) mountTruthyDemo(content.querySelector('#truthy-demo'));
  if (content.querySelector('#scope-demo')) mountScopeDemo(content.querySelector('#scope-demo'));
}

function showLessonStorageError() {
  const message = document.createElement('p');
  message.className = 'hint';
  message.setAttribute('role', 'status');
  message.textContent = 'Brauzer natijani saqlay olmadi. Belgi hozircha shu ochiq sahifada qoladi; brauzerda saqlashga ruxsat berilganini tekshiring.';
  content.querySelector('.read-bar').after(message);
}

// ============================================================
// 6. INTERVIEW TESTLARI (natijalar localStorage ga saqlanadi)
// ============================================================
function renderInterview(filterId) {
  let listQs;
  let heading = 'Kodni o‘qi,<br>variantni tanla.';
  let lead = 'Har bir savolda kod beriladi. A/B/C/D dan birini tanla, keyin tushuntirish va qadam-baqadam tahlilni ko‘r.';
  if (filterId === 'ai') {
    listQs = aiSession.questions.filter(q => isDone(q.lessonId));
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
  if (!done.length) {
    content.innerHTML = `<span class="eyebrow">AI TEST</span><h1>Avval dars o‘qi.</h1>
    <p class="lead">Test faqat <b>o‘qilgan deb belgilagan</b> darslaringdan yaratiladi. Belgilar shu brauzerda saqlanadi va qayta kirganda ham qoladi.</p>
    <section class="card"><b>Nima qilish kerak?</b><ol><li>Darsni och va o‘qi.</li><li>“O‘qilgan deb belgilash” tugmasini bos.</li><li>AI testga qaytib, Gemini yoki DeepSeek kaliting bilan test yarat.</li></ol></section>
    <button class="cta primary" onclick="location.hash='js-intro'">Birinchi darsni och →</button>`;
    return;
  }
  content.innerHTML = `<span class="eyebrow">AI TEST</span><h1>O‘qiganlaringdan yangi test.</h1>
  <p class="lead">Brauzerda <b>${done.length} ta o‘qilgan dars</b> saqlangan. AI faqat shu darslarning materiali asosida savollar yaratadi.</p>
  <section class="card">
    <h2 style="margin-top:0">Testga kiradigan darslar</h2>
    <div class="ai-done-list">${done.map(l => `<span class="badge">✓ ${escapeHtml(l.title)}</span>`).join('')}</div>
  </section>
  <section class="card">
    <h2 style="margin-top:0">AI bilan test yaratish</h2>
    <div class="ai-settings">
      <label>AI xizmati<select id="ai-provider">${Object.entries(AI_PROVIDERS).map(([id, p]) => `<option value="${id}" ${cfg.provider === id ? 'selected' : ''}>${p.name}</option>`).join('')}</select></label>
      <label id="ai-endpoint-label" hidden>Endpoint<input id="ai-endpoint" type="url"></label>
      <label>Model<input id="ai-model" type="text" autocomplete="off"></label>
      <label>API kalit<input id="ai-key" type="password" autocomplete="off" spellcheck="false"></label>
      <a id="ai-key-link" target="_blank" rel="noopener noreferrer">API kalit olish ↗</a>
    </div>
    <p class="ai-privacy">Kalit shu brauzerda saqlanadi. Test yaratishda kalit va tanlangan dars materiali tanlagan AI xizmatiga yuboriladi.</p>
    <div class="ai-controls">
      <button class="cta" id="ai-save">Sozlamalarni saqlash</button>
      <button class="cta" id="ai-clear-key">Saqlangan kalitni o‘chirish</button>
    </div>
    <div class="ai-controls">
      <label>Darslar<select id="ai-lesson"><option value="all">Barcha o‘qilgan darslar (${done.length})</option>${done.map(l => `<option value="${escapeHtml(l.id)}">${escapeHtml(l.title)}</option>`).join('')}</select></label>
      <label>Savol soni<select id="ai-generate-count"><option value="1">1 ta</option><option value="5" selected>5 ta</option><option value="10">10 ta</option></select></label>
      <button class="cta primary" id="ai-generate">✨ Yangi test yaratish</button>
      <button class="cta" id="ai-cancel" hidden>Bekor qilish</button>
    </div>
    <div id="ai-status" class="ai-status" role="status" aria-live="polite"></div>
  </section>
  <section class="card">
    <h2 style="margin-top:0">Kalitsiz mashq qilish</h2>
    <p>Saytdagi tayyor savollardan faqat o‘qigan darslaring bo‘yicha test tuziladi. Xato javob berilgan mavzularga ko‘proq e’tibor qaratiladi.</p>
    <div class="ai-controls">
      <label>Savol soni<select id="ai-count"><option value="5">5 ta</option><option value="10" selected>10 ta</option><option value="15">15 ta</option><option value="20">20 ta</option></select></label>
      <button class="cta" id="ai-start">Tayyor savollardan test</button>
    </div>
  </section>`;

  const providerSelect = content.querySelector('#ai-provider');
  const modelInput = content.querySelector('#ai-model');
  const keyInput = content.querySelector('#ai-key');
  const endpointInput = content.querySelector('#ai-endpoint');
  let selectedProvider = cfg.provider;
  const storeInputs = () => {
    cfg.accounts[selectedProvider] = { model: modelInput.value.trim(), key: keyInput.value.trim(), endpoint: endpointInput.value.trim() };
    cfg.provider = selectedProvider;
  };
  const showProvider = () => {
    const provider = AI_PROVIDERS[selectedProvider];
    const account = cfg.accounts[selectedProvider];
    modelInput.value = account.model;
    keyInput.value = account.key;
    keyInput.placeholder = provider.keyPlaceholder;
    endpointInput.value = account.endpoint;
    content.querySelector('#ai-endpoint-label').hidden = selectedProvider !== 'custom';
    const link = content.querySelector('#ai-key-link');
    link.hidden = !provider.keyUrl;
    if (provider.keyUrl) link.href = provider.keyUrl;
  };
  showProvider();
  providerSelect.onchange = () => {
    storeInputs();
    selectedProvider = providerSelect.value;
    cfg.provider = selectedProvider;
    showProvider();
    saveProgress();
    setAIStatus('', '');
  };
  content.querySelector('#ai-save').onclick = () => {
    storeInputs();
    setAIStatus(saveProgress() ? '✓ Sozlamalar shu brauzerda saqlandi.' : 'Brauzer saqlashga ruxsat bermadi. Sozlamalar hozircha faqat ochiq sahifada ishlaydi.', '');
  };
  content.querySelector('#ai-clear-key').onclick = () => {
    keyInput.value = '';
    storeInputs();
    saveProgress();
    setAIStatus('Kalit o‘chirildi.', 'ok');
  };
  content.querySelector('#ai-start').onclick = () => {
    aiSession = { questions: buildAdaptiveQuiz(Number(content.querySelector('#ai-count').value)), fromLesson: null };
    if (!aiSession.questions.length) return setAIStatus('Bu darslar uchun tayyor savol yo‘q. AI bilan yangi test yarating.', 'bad');
    go('interview/ai');
  };
  content.querySelector('#ai-generate').onclick = async () => {
    storeInputs();
    saveProgress();
    const lessonId = content.querySelector('#ai-lesson').value;
    const selected = doneLessons().filter(l => lessonId === 'all' || l.id === lessonId);
    const count = Number(content.querySelector('#ai-generate-count').value);
    const button = content.querySelector('#ai-generate');
    const cancel = content.querySelector('#ai-cancel');
    const controller = new AbortController();
    const started = Date.now();
    const providerName = AI_PROVIDERS[selectedProvider].name;
    let retryMessage = '';
    const status = content.querySelector('#ai-status');
    status.className = 'ai-status';
    const updateWaiting = () => {
      if (!button.isConnected) { controller.abort(); return; }
      const seconds = Math.floor((Date.now() - started) / 1000);
      status.textContent = `${retryMessage || providerName + ' javobi kutilmoqda'}: ${seconds} soniya. ${selected.length} ta darsdan ${count} ta savol so‘raldi. 90 soniyada javob kelmasa so‘rov to‘xtatiladi.`;
    };
    button.disabled = true;
    button.textContent = 'Yaratilyapti…';
    cancel.hidden = false;
    cancel.onclick = () => controller.abort();
    updateWaiting();
    const timer = setInterval(updateWaiting, 1000);
    try {
      const result = await generateAIQuestions(selected, count, { signal: controller.signal, onRetry: (attempt) => {
        retryMessage = `${providerName} vaqtincha band. Qayta urinish ${attempt}/3`;
        updateWaiting();
      } });
      if (!button.isConnected) return;
      if (result.error) return setAIStatus(result.error, 'bad');
      if (result.questions.some(q => !isDone(q.lessonId))) return setAIStatus('O‘qilgan darslar o‘zgardi. Testni qayta yarating.', 'bad');
      aiSession = { questions: result.questions, fromLesson: lessonId };
      go('interview/ai');
    } catch {
      if (button.isConnected) setAIStatus('Testni ochishda xato yuz berdi. Qayta urinib ko‘ring.', 'bad');
    } finally {
      clearInterval(timer);
      button.disabled = false;
      button.textContent = '✨ Yangi test yaratish';
      cancel.hidden = true;
    }
  };
}

function setAIStatus(message, kind) {
  const el = document.querySelector('#ai-status');
  if (el) { el.className = 'ai-status ' + kind; el.textContent = message; }
}

function validateAIQuiz(data, selected, count) {
  const validText = value => typeof value === 'string' && value.trim().length > 0;
  const allowed = new Map(selected.filter(l => isDone(l.id)).map(l => [l.id, l]));
  if (!Array.isArray(data?.questions) || data.questions.length !== count) throw new Error('AI kerakli miqdorda savol qaytarmadi. Qayta urinib ko‘ring.');
  const seen = new Set();
  const sessionId = crypto.randomUUID();
  return data.questions.map((q, i) => {
    if (!q || !allowed.has(q.lessonId) || !validText(q.question) || typeof q.code !== 'string' ||
        !Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(validText) ||
        new Set(q.options.map(o => o.trim())).size !== 4 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3 ||
        !validText(q.explain) || !Array.isArray(q.walkthrough) || q.walkthrough.length < 2 || !q.walkthrough.every(validText)) {
      throw new Error('AI javobi test talablariga mos kelmadi yoki o‘qilmagan darsdan savol keldi. Qayta urinib ko‘ring.');
    }
    const fingerprint = q.question.trim() + '\n' + q.code.trim();
    if (seen.has(fingerprint)) throw new Error('AI takroriy savol qaytardi. Qayta urinib ko‘ring.');
    seen.add(fingerprint);
    return { ...q, id: `ai-${sessionId}-${i}`, topic: allowed.get(q.lessonId).title, level: 'AI' };
  });
}

function waitForAIRetry(ms, signal) {
  return new Promise((resolve, reject) => {
    const abort = () => {
      clearTimeout(timer);
      signal.removeEventListener('abort', abort);
      const error = new Error('Request aborted');
      error.name = 'AbortError';
      reject(error);
    };
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', abort);
      resolve();
    }, ms);
    signal.addEventListener('abort', abort, { once: true });
    if (signal.aborted) abort();
  });
}

async function fetchAIWithRetry(url, init, onRetry = () => {}) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    if (init.signal.aborted) {
      const error = new Error('Request aborted');
      error.name = 'AbortError';
      throw error;
    }
    const response = await fetch(url, init);
    if (![500, 502, 503, 504].includes(response.status) || attempt === 3) return response;
    onRetry(attempt + 1);
    const retryAfter = Number(response.headers?.get('Retry-After'));
    const delay = Math.max(2000 * 2 ** (attempt - 1) + Math.random() * 250, Number.isFinite(retryAfter) ? Math.min(retryAfter * 1000, 30000) : 0);
    await waitForAIRetry(delay, init.signal);
  }
}

async function generateAIQuestions(selected, count, { signal, onRetry } = {}) {
  const provider = progress.ai.provider;
  const cfg = { ...progress.ai.accounts[provider] };
  if (!cfg.key) return { error: 'Avval tanlagan AI xizmatingizning API kalitini kiriting.' };
  if (!cfg.model) return { error: 'Model nomini kiriting.' };
  if (!selected.length || selected.some(l => !isDone(l.id)) || ![1, 5, 10].includes(count)) return { error: 'Avval darsni o‘qilgan deb belgilang va savol sonini tanlang.' };
  const materials = selected.map(l => ({
    lessonId: l.id, title: l.title, weight: lessonWeight(l.id),
    material: [l.question, l.explanation, l.code, l.result, l.takeaway,
      ...(l.sections || []).map(s => `${s.title}\n${s.text || ''}\n${s.code || ''}\n${s.note || ''}`)
    ].filter(Boolean).join('\n').slice(0, 8000)
  }));
  const prompt = `Sen JavaScript o‘qituvchisisan. Faqat quyidagi O‘QILGAN darslar materialidan ${count} ta yangi, bir-biridan farqli A/B/C/D test savoli yarat. Savol, variant, izoh va qadamlar o‘zbek tilida bo‘lsin.
Faqat berilgan lessonId qiymatlaridan foydalan. O‘qilmagan mavzuni so‘rama. Imkon qadar darslarni qamrab ol; weight katta bo‘lgan mavzularga ko‘proq e’tibor ber. Har savolda bitta aniq to‘g‘ri javob bo‘lsin. Kod kerak bo‘lmasa code bo‘sh satr bo‘lsin. answer 0–3 indeksi; options aynan 4 ta turli matn; walkthrough kamida 2 qadam.
Faqat shu ko‘rinishda JSON qaytar: {"questions":[{"lessonId":"dars-id","question":"Savol?","code":"console.log(1)","options":["1","2","3","4"],"answer":0,"explain":"Izoh","walkthrough":["Birinchi qadam","Ikkinchi qadam"]}]}.
DARS MATERIALLARI:\n${JSON.stringify(materials)}`;
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) abort();
  signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(abort, 90000);
  try {
    let url, headers = { 'Content-Type': 'application/json' }, body;
    if (provider === 'gemini') {
      url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(cfg.model)}:generateContent`;
      headers['x-goog-api-key'] = cfg.key;
      body = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', maxOutputTokens: 16384 } };
    } else {
      url = provider === 'deepseek' ? 'https://api.deepseek.com/chat/completions' : cfg.endpoint;
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || parsed.username || parsed.password) throw new Error('Endpoint https:// bilan boshlanishi kerak.');
      headers.Authorization = 'Bearer ' + cfg.key;
      body = { model: cfg.model, messages: [{ role: 'user', content: prompt }], response_format: { type: 'json_object' }, max_tokens: 16384 };
      if (provider === 'deepseek') body.thinking = { type: 'disabled' };
    }
    const res = await fetchAIWithRetry(url, { method: 'POST', headers, body: JSON.stringify(body), signal: controller.signal }, onRetry);
    if (!res.ok) {
      const errors = { 400: 'So‘rov qabul qilinmadi. Model nomi va API kalitini tekshiring.', 401: 'API kaliti noto‘g‘ri yoki muddati tugagan.', 402: 'AI hisobingizda mablag‘ yetarli emas.', 403: 'Bu kalit bilan modeldan foydalanishga ruxsat yo‘q.', 404: 'Model yoki endpoint topilmadi. Model nomini tekshiring.', 429: 'AI limiti tugadi yoki so‘rovlar ko‘paydi. Birozdan keyin qayta urining.', 503: 'AI xizmati hozir band (503). 3 marta urinishdan keyin ham javob olinmadi. Keyinroq qayta urining yoki DeepSeek xizmatini tanlang.' };
      let detail = '';
      try {
        const data = await res.json();
        if (typeof data.error?.message === 'string') detail = data.error.message.split(cfg.key).join('[kalit]').slice(0, 240);
      } catch { /* The service may return an empty or non-JSON error. */ }
      throw new Error((errors[res.status] || `AI xizmati xatosi (${res.status}). Keyinroq qayta urining.`) + (detail ? ` Xizmat javobi: ${detail}` : ''));
    }
    const data = await res.json();
    const candidate = data.candidates?.[0];
    const choice = data.choices?.[0];
    if (candidate?.finishReason === 'MAX_TOKENS' || choice?.finish_reason === 'length') throw new Error('AI javobi tugallanmay qoldi. Kamroq savol tanlang.');
    const text = provider === 'gemini'
      ? (candidate?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('')
      : choice?.message?.content;
    if (typeof text !== 'string' || !text.trim()) throw new Error('AI bo‘sh javob qaytardi. Qayta urinib ko‘ring.');
    const clean = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    let quiz;
    try { quiz = JSON.parse(clean); } catch { throw new Error('AI javobini o‘qib bo‘lmadi. Qayta urinib ko‘ring.'); }
    return { questions: validateAIQuiz(quiz, selected, count) };
  } catch (e) {
    return { error: e.name === 'AbortError' ? (signal?.aborted ? 'So‘rov bekor qilindi. Qaytadan test yaratishingiz mumkin.' : '90 soniyada AI javobi kelmadi, so‘rov to‘xtatildi. 1 ta savol bilan qayta urinib ko‘ring yoki boshqa model tanlang.') : e instanceof TypeError ? 'AI xizmatiga ulanib bo‘lmadi. Internet va xizmatga brauzerdan ulanish imkonini tekshiring.' : e.message };
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
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
function scrollContentToTop() {
  const main = document.querySelector('main');
  if (window.innerWidth > 760) main.scrollTo(0, 0);
  else {
    main.style.scrollMarginTop = `${topNav.offsetHeight + 12}px`;
    main.scrollIntoView({ block: 'start' });
  }
}

window.addEventListener('hashchange', () => {
  render();
  scrollContentToTop();
});
render();
if (location.hash) scrollContentToTop();
