const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup(saved = {}) {
  const ctx = vm.createContext({
    window: { addEventListener() {} },
    document: { querySelector: () => ({ addEventListener() {} }) },
    localStorage: { getItem: () => JSON.stringify(saved), setItem() {} }
  });
  vm.runInContext(fs.readFileSync('data.js', 'utf8'), ctx);
  vm.runInContext(fs.readFileSync('app.js', 'utf8').replace(/render\(\);\s*if \(location\.hash\) scrollContentToTop\(\);\s*$/, '') + '\nglobalThis.api = { buildLessonSteps, progress, escapeHtml };', ctx);
  return ctx;
}
test('every topic retains explanation, section text, code, notes and exercises in sequential steps', () => {
  const ctx = setup();
  for (const lesson of ctx.window.lessons) {
    const steps = ctx.api.buildLessonSteps(lesson);
    assert.ok(steps.length >= 3, lesson.id);
    assert.equal(steps[0].title, 'Mavzu bilan tanishish');
    assert.equal(steps.at(-1).title, 'Xulosa va mustaqil mashq');
    const html = steps.map(s => s.html).join('');
    for (const value of [lesson.explanation, lesson.code, lesson.result, lesson.takeaway, lesson.exercise,
      ...(lesson.sections || []).flatMap(s => [s.title,s.text,s.code,s.note])].filter(Boolean)) {
      assert.ok((html + steps.map(s => ctx.api.escapeHtml(s.title)).join('')).includes(ctx.api.escapeHtml(value)), lesson.id);
    }
    if (lesson.interactiveScope) assert.ok(html.includes('id="scope-demo"'));
    if (lesson.interactiveTruthy) assert.ok(html.includes('id="truthy-demo"'));
  }
});
test('restores per-topic steps together with existing read markers and AI credentials', () => {
  const ctx = setup({ lessonSteps: { scope: 3 }, completed: { scope: true }, ai: { key: 'fake-key', model: 'old-model' } });
  assert.equal(ctx.api.progress.lessonSteps.scope, 3);
  assert.equal(ctx.api.progress.completed.scope, true);
  assert.equal(ctx.api.progress.ai.accounts.custom.key, 'fake-key');
  assert.equal(Object.keys(setup().api.progress.lessonSteps).length, 0);
});

test('curriculum preserves the original 62 topics and adds an eight-topic core reading stage', () => {
  const ctx = setup();
  const stages = ctx.window.lessonStages;
  const expected = [
    'js-intro,var-let-const,data-types,typeof,numbers-math,strings,operators,coercion-equality,truthy-falsy,conditionals,loops',
    'objects-basics,arrays-basics,object-reference,array-methods,destructuring-spread,json-basics,map-set',
    'functions,scope,hoisting-tdz,callbacks,closures,this-keyword,recursion,iife-pure',
    'errors-try-catch,common-pitfalls,modules,git-npm',
    'dom-basics,events-advanced,dom-forms,storage,dates,regex-basics,web-apis',
    'async-timers,promises-async,fetch-api,event-loop,promise-combinators,dynamic-import-async-iteration,debounce-throttle',
    'prototypes,classes,class-private,object-descriptors',
    'iterators-generators,symbol-bigint,weakmap-weakset,proxy-reflect,currying,memoization,memory-management',
    'node-basics,node-fs-path,node-streams,node-http',
    'design-patterns,testing-basics,lint-format',
    'expressions-statements,execution-context-stack,lexical-environment,evaluation-order,functions-as-values,strict-mode-asi,object-to-primitive,debugger-code-reading',
    'core-event-loop-deep,core-hoisting-tdz-deep,core-scope-closure-loops,core-this-arrow-deep,core-type-coercion-deep,core-pass-by-ref-deep',
    'mdn-prototypes-deep,mdn-memory-management,mdn-typed-arrays,mdn-resource-management,mdn-intl,mdn-operators-deep,mdn-statements-declarations,mdn-functions-deep'
  ];
  assert.equal(stages.length, 13);
  assert.equal(ctx.window.lessons.length, 84);
  assert.equal(new Set(ctx.window.lessons.map(l => l.id)).size, 84);
  stages.forEach((stage, i) => {
    assert.equal(stage.ids.join(','), expected[i]);
    assert.ok(stage.project);
  });
  assert.equal(ctx.window.lessons.map(l => l.id).join(','), expected.join(','));
});
test('new lessons have substantial content, exercises, official resources and valid quizzes', () => {
  const ctx = setup();
  for (const id of ['js-intro','data-types','iife-pure','git-npm','dom-forms','async-timers','class-private','memory-management','node-http','lint-format']) {
    const lesson = ctx.window.lessons.find(l => l.id === id);
    assert.ok(lesson.sections.length >= 3, id);
    assert.ok(lesson.sections.some(s => s.code), id);
    assert.ok(lesson.exercise && lesson.takeaway && lesson.resources.length, id);
    const qs = ctx.window.interviewQuestions.filter(q => q.lessonId === id);
    assert.ok(qs.length, id);
    for (const q of qs) {
      assert.equal(q.options.length, 4);
      assert.ok(q.answer >= 0 && q.answer < 4);
      assert.ok(q.explain && q.walkthrough.length >= 2);
    }
  }
  const ids = new Set(ctx.window.lessons.map(l => l.id));
  for (const q of ctx.window.interviewQuestions) assert.ok(ids.has(q.lessonId), q.id);
  assert.equal(new Set(ctx.window.interviewQuestions.map(q => q.id)).size, ctx.window.interviewQuestions.length);
});
