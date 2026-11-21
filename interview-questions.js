// Intervyu savollari: har biri bitta darsga bog'langan.
// Har savolda: kod (ixtiyoriy), A/B/C/D variantlar, to'g'ri javob,
// qisqa tushuntirish va "kodni o'qish" bosqichlari.
window.interviewQuestions = [
  {
    id: 'q-var-let-const-1',
    lessonId: 'var-let-const',
    topic: 'var / let / const',
    level: 'oson',
    question: 'Bu kod qanday natija beradi?',
    code: 'var a = 1;\n{\n  var a = 2;\n}\nconsole.log(a);',
    options: ['1', '2', 'undefined', 'ReferenceError'],
    answer: 1,
    explain: 'var block scope\'ga ega emas. Ichkaridagi var a = 2 tashqaridagi a bilan bir xil o\'zgaruvchini yangilaydi. Shuning uchun 2 chiqadi.',
    walkthrough: [
      'var a = 1 → global (yoki funksiya) scope\'da a yaratildi, qiymati 1.',
      '{ } oddiy block, lekin var uchun chegara emas.',
      'Ichkaridagi var a = 2 shu a ga yangi qiymat yozadi.',
      'console.log(a) → 2.'
    ]
  },
  {
    id: 'q-var-let-const-2',
    lessonId: 'var-let-const',
    topic: 'var / let / const',
    level: 'o\'rta',
    question: 'Qaysi satr xato beradi?',
    code: 'const user = { name: "Ali" };\nuser.name = "Vali";\nuser = { name: "Hasan" };\nconsole.log(user.name);',
    options: [
      '2-satr (user.name = "Vali")',
      '3-satr (user = ...)',
      'Hech qaysi satr xato bermaydi',
      '1-satr (const deklaratsiya)'
    ],
    answer: 1,
    explain: 'const o\'zgaruvchiga yangi obyekt biriktirishni taqiqlaydi, lekin mavjud obyektning ichki xususiyatlarini o\'zgartirishga ruxsat beradi. 2-satr ishlaydi, 3-satr TypeError beradi.',
    walkthrough: [
      'const user = { name: "Ali" } → user obyektga ishora qiladi.',
      'user.name = "Vali" → obyekt ichi o\'zgaradi, bunga ruxsat bor.',
      'user = { ... } → yangi obyekt biriktirishga urinish, const buni rad etadi (TypeError).',
      'Shuning uchun xato 3-satrda.'
    ]
  },
  {
    id: 'q-var-let-const-3',
    lessonId: 'var-let-const',
    topic: 'var / let / const',
    level: 'oson',
    question: 'Qaysi deklaratsiya keyinchalik qiymatni o\'zgartirishga imkon beradi?',
    options: ['Faqat var', 'var va let', 'Faqat const', 'var, let va const'],
    answer: 1,
    explain: 'var va let ga yangi qiymat berish mumkin. const esa deklaratsiyada berilgan qiymatni qayta biriktirishga yo\'l qo\'ymaydi.',
    walkthrough: [
      'var son = 1; son = 2; → ishlaydi.',
      'let son = 1; son = 2; → ishlaydi.',
      'const son = 1; son = 2; → TypeError.',
      'To\'g\'ri javob: var va let.'
    ]
  },
  {
    id: 'q-scope-1',
    lessonId: 'scope',
    topic: 'Scope',
    level: 'o\'rta',
    question: 'console.log nima chiqaradi?',
    code: 'const x = "global";\nfunction f() {\n  const x = "ichki";\n  if (true) {\n    console.log(x);\n  }\n}\nf();',
    options: ['global', 'ichki', 'undefined', 'ReferenceError'],
    answer: 1,
    explain: 'if blocki ichida o\'z x e\'lon qilinmagan. Scope chain bo\'yicha qidiruv avval funksiya scope\'ga yetib boradi va u yerdagi "ichki" ni topadi.',
    walkthrough: [
      'console.log ichkarida, if blockida turibdi.',
      'Bu blockda x yo\'q → tashqi funksiya scope\'ga chiqamiz.',
      'Funksiyada const x = "ichki" bor → topildi.',
      'Natija: "ichki". Global x soyada qoladi.'
    ]
  },
  {
    id: 'q-scope-2',
    lessonId: 'scope',
    topic: 'Scope',
    level: 'oson',
    question: 'Bu kodda qaysi nom funksiya tashqarisida ko\'rinadi?',
    code: 'function sinov() {\n  var a = 1;\n  let b = 2;\n  const c = 3;\n}\nsinov();',
    options: ['Faqat a', 'Faqat b va c', 'Hammasi', 'Hech biri'],
    answer: 3,
    explain: 'Funksiya ichida e\'lon qilingan barcha nomlar (var, let, const) shu funksiyaning mahalliy nomlaridir. Tashqaridan hech biri ko\'rinmaydi.',
    walkthrough: [
      'var a funksiya scope\'ida, tashqarida yo\'q.',
      'let b va const c ham funksiya tanasi bilan chegaralangan.',
      'sinov() chaqirilganda ular yaratilib, tugaganda yo\'qoladi.',
      'To\'g\'ri javob: hech biri.'
    ]
  },
  {
    id: 'q-hoisting-1',
    lessonId: 'hoisting-tdz',
    topic: 'Hoisting / TDZ',
    level: 'o\'rta',
    question: 'Bu ikki console.log qanday natija beradi?',
    code: 'console.log(a);\nvar a = 5;\nconsole.log(b);\nlet b = 10;',
    options: [
      'undefined, undefined',
      '5, 10',
      'undefined, ReferenceError',
      'ReferenceError, ReferenceError'
    ],
    answer: 2,
    explain: 'var nomi oldindan yaratilib undefined bilan boshlanadi. let nomi ham mavjud, lekin TDZ sabab deklaratsiyagacha o\'qish ReferenceError beradi.',
    walkthrough: [
      'Birinchi console.log(a) → var hoisting tufayli undefined.',
      'var a = 5 bajarilib, a = 5 bo\'ladi.',
      'console.log(b) → b TDZ ichida, ReferenceError.',
      'Kod shu yerda to\'xtaydi; 3-variant to\'g\'ri.'
    ]
  },
  {
    id: 'q-hoisting-2',
    lessonId: 'hoisting-tdz',
    topic: 'Hoisting / TDZ',
    level: 'qiyin',
    question: 'Nega ikkinchi console.log ReferenceError beradi?',
    code: 'let x = 5;\n{\n  console.log(x);\n  let x = 10;\n}',
    options: [
      'Chunki tashqi x o\'chirilgan',
      'Chunki ichki let x block boshidanoq x nomini o\'ziga olgan, tashqariga qidirilmaydi',
      'Chunki let hoisting qilinmaydi',
      'Chunki console.log faqat global nomlarni ko\'radi'
    ],
    answer: 1,
    explain: 'Ichki blockda let x borligi uchun bu block boshidanoq x ichki nom hisoblanadi. console.log uni TDZ ichida o\'qishga urinadi va tashqi x ga chiqmaydi.',
    walkthrough: [
      'Tashqi let x = 5 mavjud.',
      'Ichki block boshlanishi bilan x nomi ichki scope\'ga tegishli bo\'ladi.',
      'console.log(x) ichki x ni o\'qiydi, lekin u hali TDZ ichida.',
      'Natija: ReferenceError. Tashqi 5 o\'qilmaydi.'
    ]
  },
  {
    id: 'q-typeof-1',
    lessonId: 'typeof',
    topic: 'typeof',
    level: 'oson',
    question: 'typeof null qanday natija beradi?',
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    answer: 1,
    explain: 'Bu JavaScript tarixiy xatosi: typeof null "object" qaytaradi. null ni to\'g\'ri tekshirish uchun qiymat === null bilan solishtiring.',
    walkthrough: [
      'typeof operatori ko\'p turlarni to\'g\'ri ko\'rsatadi.',
      'Lekin null uchun "object" qaytaradi (eski xato).',
      'Shuning uchun if (x === null) ishlatish xavfsiz.',
      'To\'g\'ri javob: "object".'
    ]
  },
  {
    id: 'q-typeof-2',
    lessonId: 'typeof',
    topic: 'typeof',
    level: 'o\'rta',
    question: 'Natijalar qanday ketma-ketlikda bo\'ladi?',
    code: 'console.log(typeof []);\nconsole.log(typeof function(){});\nconsole.log(typeof yozilmagan);',
    options: [
      '"object", "function", "undefined"',
      '"array", "function", "undefined"',
      '"object", "object", "ReferenceError"',
      '"object", "function", "ReferenceError"'
    ],
    answer: 0,
    explain: 'Massiv ham obyekt → "object". Funksiya uchun alohida "function". E\'lon qilinmagan, lekin o\'qiladigan nom uchun typeof "undefined" qaytaradi (ReferenceError emas).',
    walkthrough: [
      'typeof [] → "object" (massivlar obyekt hisoblanadi).',
      'typeof function(){} → "function".',
      'typeof yozilmagan → "undefined" (typeof bu holatda xavfsiz).',
      'To\'g\'ri javob: 1-variant.'
    ]
  },
  {
    id: 'q-coercion-1',
    lessonId: 'coercion-equality',
    topic: 'Coercion / == vs ===',
    level: 'oson',
    question: 'Qaysi taqqoslash true qaytaradi?',
    code: 'console.log("5" == 5);\nconsole.log("5" === 5);',
    options: [
      'Faqat birinchi',
      'Faqat ikkinchi',
      'Ikkalasi ham',
      'Hech biri'
    ],
    answer: 0,
    explain: '== turlarni moslashtirib (coercion) solishtiradi: "5" son 5 ga aylanadi → true. === esa turga ham qaraydi: string va number teng emas → false.',
    walkthrough: [
      '"5" == 5 → string son ga o\'zgartiriladi, 5 == 5 → true.',
      '"5" === 5 → tur farqi (string vs number) → false.',
      'Amaliyotda === ishlatish tavsiya etiladi.',
      'To\'g\'ri javob: faqat birinchi.'
    ]
  },
  {
    id: 'q-coercion-2',
    lessonId: 'coercion-equality',
    topic: 'Coercion / == vs ===',
    level: 'qiyin',
    question: 'Bu ifoda qanday natija beradi?',
    code: 'console.log([] == false);\nconsole.log("0" == false);',
    options: ['true, true', 'false, false', 'true, false', 'false, true'],
    answer: 0,
    explain: 'Bo\'sh massiv avval "" ga, keyin 0 ga aylanadi → 0 == 0 → true. "0" ham son 0 ga aylanadi → true. Shu sabab == bilan ehtiyot bo\'lish kerak.',
    walkthrough: [
      '[] == false → [] → "" → 0; false → 0; 0 == 0 → true.',
      '"0" == false → "0" → 0; false → 0; true.',
      'Bu misollar == ning kutilmagan tomonlarini ko\'rsatadi.',
      'To\'g\'ri javob: true, true.'
    ]
  },
  {
    id: 'q-truthy-1',
    lessonId: 'truthy-falsy',
    topic: 'Truthy / Falsy',
    level: 'oson',
    question: 'Qaysi qiymatlar falsy hisoblanadi?',
    options: [
      '0, "", null, undefined, NaN, false',
      '0, "", null, undefined, [], {}',
      'Faqat false va null',
      '"0", [], {}'
    ],
    answer: 0,
    explain: 'Falsy ro\'yxati: false, 0, -0, 0n, "", null, undefined, NaN. Bo\'sh massiv [] va bo\'sh obyekt {} esa truthy.',
    walkthrough: [
      'Falsy: false, 0, "", null, undefined, NaN (va -0, 0n).',
      '[] va {} obyekt bo\'lgani uchun truthy, bo\'shlig\'i muhim emas.',
      '"0" bo\'sh bo\'lmagan string → truthy.',
      'To\'g\'ri javob: birinchi variant.'
    ]
  },
  {
    id: 'q-truthy-2',
    lessonId: 'truthy-falsy',
    topic: 'Truthy / Falsy',
    level: 'o\'rta',
    question: 'if sharti bajariladimi?',
    code: 'const items = [];\nif (items) {\n  console.log("bor");\n} else {\n  console.log("yo\'q");\n}',
    options: ['"bor"', '"yo\'q"', 'Xato', 'Hech narsa'],
    answer: 0,
    explain: 'Bo\'sh massiv ham obyekt va truthy. if (items) har doim bajariladi. Element borligini items.length > 0 bilan tekshirish kerak.',
    walkthrough: [
      'items = [] → bo\'sh massiv, lekin obyekt.',
      'Boolean([]) → true.',
      'if sharti bajarilib "bor" chiqadi.',
      'To\'g\'ri javob: "bor".'
    ]
  },
  {
    id: 'q-reference-1',
    lessonId: 'object-reference',
    topic: 'Object Reference',
    level: 'o\'rta',
    question: 'console.log nima chiqaradi?',
    code: 'const a = { x: 1 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);',
    options: ['1', '2', 'undefined', 'ReferenceError'],
    answer: 1,
    explain: 'a va b bir xil obyektga ishora qiladi. b.x = 2 orqali obyekt ichi o\'zgardi, shuning uchun a.x ham 2 bo\'ldi.',
    walkthrough: [
      'const a = { x: 1 } → bitta obyekt yaratildi.',
      'const b = a → b ham shu obyektga ishora (yangi nusxa emas).',
      'b.x = 2 → obyektning x xususiyati o\'zgaradi.',
      'a.x → 2.'
    ]
  },
  {
    id: 'q-reference-2',
    lessonId: 'object-reference',
    topic: 'Object Reference',
    level: 'qiyin',
    question: 'Ikkita obyekt teng hisoblanadimi?',
    code: 'console.log({ a: 1 } === { a: 1 });\nconsole.log([] === []);',
    options: ['true, true', 'false, false', 'true, false', 'false, true'],
    answer: 1,
    explain: 'Obyekt va massivlar reference bo\'yicha solishtiriladi: ikki xil obyekt hech qachon === bo\'lmaydi, tarkibi bir xil bo\'lsa ham.',
    walkthrough: [
      '{ a: 1 } === { a: 1 } → ikki alohida obyekt → false.',
      '[] === [] → ikki alohida massiv → false.',
      'Tarkibni solishtirish uchun qiymatlarni alohida tekshirish kerak.',
      'To\'g\'ri javob: false, false.'
    ]
  }
];
