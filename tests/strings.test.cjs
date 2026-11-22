const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const data = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync('data.js','utf8'),data);
const lesson = data.window.lessons.find(l => l.id === 'strings');
function output(code) {
  const logs = [];
  vm.runInNewContext(code, { console: { log: value => logs.push(structuredClone(value)) } }, { timeout: 1000 });
  return logs;
}
test('all 20 string lesson examples match their explained outputs', () => {
  const expected = [
    ['Ali','string','string'],
    [true,0,1],
    ['U "Salom" dedi.',"Bu Ali'ning kitobi.",'Birinchi\nIkkinchi','Ism:\tAli','C:\\darslar'],
    [5,'S','a','m','m'],
    ['i','l',undefined,undefined,undefined,''],
    ['Vli','Ali','Vali'],
    ['Salom, Ali!','Men Ali, 20 yoshman.','Keyingi yil 21 yosh.','Salom, ${ism}','Birinchi satr\nIkkinchi satr'],
    ['51',4,'33','123',6,'20','null'],
    ['SALOM','salom','Salom','ali@misol.uz'],
    ['Salom Dunyo','Salom Dunyo  ','  Salom Dunyo','salom dunyo','  Salom Dunyo  '],
    [true,false,true,true,true],
    [4,0,-1,1,3,true],
    ['Java','Script','Script','','Java','Java'],
    ['anor olma','anor anor','olma olma','b-b'],
    [['olma','anor','uzum'],'olma | anor | uzum',['A','l','i'],['a','','b']],
    ['hahaha','','007','Ali..','1234'],
    [true,false,true,false,true],
    [1,2,1,false,true],
    [11,7,1,128512,'😀'],
    ['  ALI  ','ali','']
  ];
  assert.equal(lesson.sections.length, expected.length);
  lesson.sections.forEach((section,i) => assert.deepEqual(output(section.code),expected[i],section.title));
});
test('all 15 final exercise answers and mini-project result are correct', () => {
  assert.equal(lesson.fullTextDefault,true);
  assert.deepEqual(output(lesson.exerciseCode),['Ali',7,'A','i',4,false,'Java','b-a','b-b','a-b','007','51',6,2,undefined]);
  assert.deepEqual(output('const toza = "  Ali Valiyev  ".trim(); const qismlar = toza.split(" "); console.log(toza.toUpperCase()); console.log(qismlar[0][0] + "." + qismlar[1][0] + ".");'),['ALI VALIYEV','A.V.']);
});
