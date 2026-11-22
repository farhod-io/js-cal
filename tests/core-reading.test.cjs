const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ctx=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync('data.js','utf8'),ctx);
const {lessons,lessonStages,codeLabs,interviewQuestions}=ctx.window;
const core=lessons.filter(l=>l.coreReading);
const encode=v=>v===undefined?{$undefined:true}:typeof v==='number'&&Number.isNaN(v)?{$nan:true}:Array.isArray(v)?Array.from(v,encode):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,encode(x)])):v;
const normalize=v=>JSON.parse(JSON.stringify(v));
function run(code){
 const logs=[];
 vm.runInNewContext(code,{console:{log:(...a)=>logs.push(a.length===1?encode(a[0]):a.map(encode))}},{timeout:1000});
 return logs;
}
test('eight core lessons have execution tables, quizzes and runnable annotated labs',()=>{
 assert.equal(core.length,8);
 assert.deepEqual(normalize(lessonStages[10].ids),normalize(core.map(l=>l.id)));
 assert.equal(codeLabs.length, 24);
 assert.equal(interviewQuestions.length, 80);
 for(const l of core){
  assert.ok(l.fullTextDefault,l.id);
  assert.ok(l.sections.length>=7,l.id);
  const table=l.sections.find(s=>s.table).table;
  assert.equal(table.headers.length,3,l.id);
  assert.ok(table.rows.length>=4,l.id);
  for(const row of table.rows)assert.equal(row.length,3,l.id);
  const q=interviewQuestions.find(q=>q.lessonId===l.id);
  assert.ok(q&&q.explain&&q.walkthrough.length,l.id);
  assert.equal(q.options.length,4,l.id);
  assert.ok(q.answer>=0&&q.answer<4,l.id);
  const lab=codeLabs.find(x=>x.id==='lab-'+l.id);
  assert.ok(lab&&lab.lines.every(line=>line.note),l.id);
  assert.deepEqual(run(lab.lines.map(line=>line.code).join('\n')),normalize(l.sections[0].expectedOutput),l.id);
 }
 assert.equal(new Set(codeLabs.map(l=>l.id)).size, 24);
});
test('every standalone core example, prediction and repair matches its explanation',()=>{
 let count=0;
 for(const l of core){
  for(const s of l.sections.filter(s=>s.expectedOutput)){
   assert.deepEqual(run(s.code),normalize(s.expectedOutput),l.id+': '+s.title);count++;
  }
  assert.deepEqual(run(l.exerciseCode),normalize(l.exerciseExpected),l.id+': prediction');
  const d=l.learningPractice.debug;
  assert.deepEqual(run(d.fixedCode),normalize(d.expectedOutput),l.id+': repair');
  count+=2;
 }
 assert.ok(count>=45,count);
});
