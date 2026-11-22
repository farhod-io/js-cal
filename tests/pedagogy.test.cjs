const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const os=require('node:os');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const ctx=vm.createContext({window:{addEventListener(){}},document:{querySelector:()=>({addEventListener(){}})},localStorage:{getItem:()=>null,setItem(){}}});
vm.runInContext(fs.readFileSync('data.js','utf8'),ctx);
vm.runInContext(fs.readFileSync('app.js','utf8').replace(/render\(\);\s*if \(location\.hash\) scrollContentToTop\(\);\s*$/,'')+'\nglobalThis.steps=buildLessonSteps;',ctx);
const lessons=ctx.window.lessons;
const normalize=v=>JSON.parse(JSON.stringify(v));
test('all 70 lessons have earlier prerequisites, plain glossary and three graduated exercises',()=>{
 for(const [i,l] of lessons.entries()){
  const g=l.learningGuide,p=l.learningPractice;
  assert.ok(g.goal && g.terms.length>=2,l.id);
  for(const id of g.prerequisites)assert.ok(lessons.findIndex(x=>x.id===id)>=0&&lessons.findIndex(x=>x.id===id)<i,l.id+': '+id);
  for(const t of g.terms)assert.ok(t.term&&t.meaning,l.id);
  assert.ok(!l.learningWriting,l.id);
  assert.ok(l.exerciseCode&&l.exerciseAnswer,l.id);
  assert.ok(p.debug.brokenCode!==p.debug.fixedCode&&p.debug.explanation,l.id);
  assert.ok(p.write.task&&p.write.hint&&p.write.criteria.length>=3,l.id);
  const html=ctx.steps(l).map(s=>s.html).join('');
  assert.equal((html.match(/class="practice-level"/g)||[]).length,3,l.id);
  assert.ok(html.includes('card learning-guide'),l.id);
  assert.equal((html.match(/<details class="exercise-answer[^>]*\bopen\b/g)||[]).length,0,l.id);
 }
});
test('corrected exercises and prerequisite warmups produce documented results',async()=>{
 let checked=0;
 for(const l of lessons){
  const examples=[{code:l.learningPractice.debug.fixedCode,...l.learningPractice.debug},...(l.learningGuide.warmup?[l.learningGuide.warmup]:[])];
  for(const e of examples){
   if(['browser','terminal','module'].includes(e.runtime))continue;
   const out=[];
   const result=vm.runInNewContext(e.code,{console:{log:(...a)=>out.push(normalize(a.length===1?a[0]:a))},URL,Response,Buffer,setTimeout,clearTimeout,queueMicrotask,require:name=>{assert.ok(['node:events','node:assert/strict'].includes(name));return require(name);},process:{argv:['node','demo.cjs','Ali']}},{timeout:1000});
   if(result&&typeof result.then==='function')await result;
   else if(e.runtime==='async')await new Promise(r=>setTimeout(r,25));
   assert.deepEqual(out,normalize(e.expectedOutput),l.id);
   checked++;
  }
 }
 assert.ok(checked>=60,checked);
});
test('module repair works as a real ES module',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'lesson-repair-'));
 try{
  const e=lessons.find(l=>l.id==='modules').learningPractice.debug;
  const file=path.join(dir,'repair.mjs');fs.writeFileSync(file,e.fixedCode);
  assert.equal(execFileSync(process.execPath,[file],{encoding:'utf8'}).trim(),e.expectedOutput.join('\n'));
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
