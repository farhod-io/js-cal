// Node.js + pattern + testing bo'yicha 6 test.
window.interviewQuestions.push(
  {
    id: 'q-node-1', lessonId: 'node-basics', topic: 'Node.js', level: 'o\'rta',
    question: 'CommonJS va ESM farqi nima?',
    options: [
      'CommonJS require/module.exports, ESM import/export',
      'Ikkalari bir xil, faqat nomi farq',
      'ESM faqat brauzerda ishlaydi',
      'CommonJS asinxron, ESM sinxron'
    ],
    answer: 0,
    explain: 'CommonJS require() va module.exports ishlatadi, sinxron. ESM import/export ishlatadi va asinxron yuklanadi.',
    walkthrough: ['CommonJS: const x = require("./x").', 'ESM: import x from "./x.js".', 'Bir faylda ikkalasini aralashtirish xato.', 'To\'g\'ri javob: birinchi variant.']
  },
  {
    id: 'q-node-2', lessonId: 'node-fs-path', topic: 'Node.js fs', level: 'o\'rta',
    question: 'Katta faylni o\'qish uchun qaysi usul yaxshi?',
    options: ['readFileSync', 'readFile callback', 'createReadStream', 'JSON.parse'],
    answer: 2,
    explain: 'createReadStream faylni qism-qism o‘qiydi va xotirani tejaydi. readFileSync/readFile butun faylni xotiraga oladi.',
    walkthrough: ['Katta faylni to\'liq o\'qish xotira tugashiga olib keladi.', 'Stream qism-qism ishlaydi.', 'pipe bilan yozish oqimiga ulash mumkin.', 'To\'g\'ri javob: createReadStream.']
  },
  {
    id: 'q-node-3', lessonId: 'node-streams', topic: 'Stream', level: 'qiyin',
    question: 'Stream da error hodisasini tinglamasang nima bo\'ladi?',
    options: ['Hech narsa', 'Jarayon o\'chib qolishi mumkin', 'Avtomatik qayta urinadi', 'Xato logga yoziladi'],
    answer: 1,
    explain: 'Stream dagi xato "error" hodisasi sifatida chiqadi. Uni tinglamasang, xato ishlov berilmagan holda jarayonni to‘xtatadi.',
    walkthrough: ['Stream xato berganda error hodisasi chiqaradi.', 'Agar tinglovchi yo\'q bo\'lsa, xato tarqaladi.', 'Natija: jarayon o\'chishi mumkin.', 'Shuning uchun stream.on("error", ...) kerak.']
  },
  {
    id: 'q-pattern-1', lessonId: 'design-patterns', topic: 'Patternlar', level: 'o\'rta',
    question: 'Singleton pattern nima kafolatlaydi?',
    options: ['Har chaqirishda yangi obyekt', 'Faqat bitta obyekt mavjudligi', 'Obyektlar tartibli yaratiladi', 'Barcha metodlar static bo\'ladi'],
    answer: 1,
    explain: 'Singleton bir klassdan faqat bitta obyekt yaratilishini ta’minlaydi: keyingi chaqirishlarda shu obyekt qaytariladi.',
    walkthrough: ['Birinchi new da obyekt yaratiladi.', 'Keyingi new da mavjud obyekt qaytariladi.', 'a === true bo\'ladi.', 'To\'g\'ri javob: ikkinchi variant.']
  },
  {
    id: 'q-pattern-2', lessonId: 'design-patterns', topic: 'Patternlar', level: 'o\'rta',
    question: 'Observer pattern qayerda ishlatiladi?',
    options: ['Faqat hisoblashda', 'Holat o\'zgarishini bir nechta kuzatuvchiga yetkazishda', 'Fayl o\'qishda', 'Massiv tartiblashda'],
    answer: 1,
    explain: 'Observer — obyekt holati o‘zgarganda bog‘langan kuzatuvchilarga xabar berish. EventEmitter va reaktiv tizimlar shu pattern asosida.',
    walkthrough: ['Kuzatuvchilar ro\'yxatga olinadi.', 'Holat o\'zgarganda hammasiga xabar yuboriladi.', 'Bu EventEmitter asosi.', 'To\'g\'ri javob: ikkinchi variant.']
  },
  {
    id: 'q-testing-1', lessonId: 'testing-basics', topic: 'Testing', level: 'oson',
    question: 'toBe va toEqual farqi nima?',
    options: [
      'toBe qat\'iy tenglik, toEqual tarkibni solishtiradi',
      'Ikkalasi bir xil',
      'toBe faqat sonlar uchun, toEqual faqat string',
      'toEqual faqat obyekt uchun, toBe faqat massiv'
    ],
    answer: 0,
    explain: 'toBe Object.is bilan qat’iy solishtiradi (reference ham muhim). toEqual obyekt/massiv tarkibini solishtiradi.',
    walkthrough: ['expect({a:1}).toBe({a:1}) → false (ikki obyekt).', 'expect({a:1}).toEqual({a:1}) → true (tarkib bir xil).', 'Primitive qiymatlarda ikkalasi ko\'pincha bir xil natija beradi.', 'To\'g\'ri javob: birinchi variant.']
  }
);
