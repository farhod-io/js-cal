const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const source = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync('data.js','utf8'), source);
const lessons = source.window.lessons.slice(6).filter(l => !l.coreReading && !l.coreInterviewPillar);
const encode = v => v === undefined ? {$undefined:true} : typeof v === 'number' && Number.isNaN(v) ? {$nan:true} : typeof v === 'bigint' ? {$bigint:String(v)} : Array.isArray(v) ? Array.from(v,encode) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k,x])=>[k,encode(x)])) : v;
function cases() {
  return lessons.flatMap(l => [
    ...l.sections.filter(s => s.expectedOutput).map(s => ({lesson:l.id,title:s.title,code:s.code,expected:s.expectedOutput,runtime:s.exampleRuntime})),
    {lesson:l.id,title:'Yakuniy mashq',code:l.exerciseCode,expected:l.exerciseExpected,runtime:l.exerciseRuntime}
  ]);
}
test('all requested 56 topics have full beginner lessons, projects, sources and explained exercises', () => {
  assert.equal(lessons.length,56);
  for(const l of lessons) {
    assert.equal(l.courseExpanded,1,l.id);
    assert.equal(l.fullTextDefault,true,l.id);
    assert.ok(l.sections.length >= 6,l.id);
    assert.ok(l.sections.some(s=>s.title.includes('Birinchi misol')),l.id);
    assert.ok(l.sections.some(s=>s.title.includes('Kichik amaliy loyiha')),l.id);
    assert.ok(l.sections.some(s=>s.title.includes('Ko‘p uchraydigan xatolar')),l.id);
    assert.ok(l.exerciseAnswer.includes('Loyihani yechish yo‘li'),l.id);
    assert.ok(l.exerciseCode && l.exerciseExpected.length,l.id);
    assert.ok(l.resources.length,l.id);
    assert.ok(!l.exerciseAnswer.includes('$undefined'),l.id);
  }
});
test('all new standalone JavaScript, asynchronous and Node examples produce their documented results', async () => {
  let checked=0;
  const allowed=new Set(['node:path','path','node:events','events','node:stream','node:stream/promises','node:buffer','node:util','node:assert/strict','node:fs/promises','node:os','node:string_decoder']);
  for(const example of cases()) {
    if(['browser','module','terminal'].includes(example.runtime))continue;
    const logs=[];
    const context={
      console:{log:(...args)=>logs.push(args.length===1?encode(args[0]):args.map(encode)),error:(...a)=>logs.push(a.map(encode))},
      structuredClone,Buffer,URL,URLSearchParams,AbortController,Response,Request,TextEncoder,TextDecoder,Intl,
      setTimeout,clearTimeout,setInterval,clearInterval,queueMicrotask,
      fetch:()=>{throw Error('This example must not make real network requests');},
      require:name=>{assert.ok(allowed.has(name),name);return require(name);},
      process:{argv:['node','demo.cjs','Ali'],env:{NODE_ENV:'test'},platform:'linux',cwd:()=>'/project'}
    };
    const result=vm.runInNewContext(example.code,context,{timeout:1000});
    if(result&&typeof result.then==='function')await result;
    else if(example.runtime==='async')await new Promise(resolve=>setTimeout(resolve,20));
    assert.deepEqual(logs,encode(example.expected),example.lesson+': '+example.title);
    checked++;
  }
  assert.equal(checked,138);
});
test('ES module examples run from separate real files and preserve live bindings', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'js-course-modules-'));
  const run=(file,code)=>{fs.writeFileSync(path.join(dir,file),code);return execFileSync(process.execPath,[path.join(dir,file)],{cwd:dir,encoding:'utf8',timeout:5000}).trim();};
  try {
    const moduleLesson=lessons.find(l=>l.id==='modules');
    assert.equal(run('exercise.mjs',moduleLesson.exerciseCode),'6\nundefined');
    fs.writeFileSync(path.join(dir,'math.mjs'),'export function qosh(a,b){return a+b;}');
    assert.equal(run('named.mjs','import {qosh} from "./math.mjs";console.log(qosh(2,3));'),'5');
    fs.writeFileSync(path.join(dir,'counter.mjs'),'export let n=0;export function oshir(){n++;}');
    assert.equal(run('live.mjs','import {n,oshir} from "./counter.mjs";oshir();console.log(n);'),'1');
    fs.writeFileSync(path.join(dir,'dynamic.mjs'),'export default (a,b)=>a+b;');
    assert.equal(run('import.mjs','const m=await import("./dynamic.mjs");console.log(m.default(2,3));'),'5');
    const bridge=lessons.find(l=>l.id==='node-basics').sections.find(s=>s.title.includes('Ikki tizim')).code;
    assert.equal(run('bridge.mjs',bridge),'.cjs');
  } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
