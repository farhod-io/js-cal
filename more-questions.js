// Qo'shimcha 25 ta intervyu testi (jami 40).
window.interviewQuestions.push(
  {
    id: 'q-functions-1', lessonId: 'functions', topic: 'Funksiyalar', level: 'oson',
    question: 'Bu kod ishlaydimi?',
    code: 'console.log(salom());\nfunction salom() { return "Salom"; }',
    options: ['Ha, "Salom" chiqadi', 'ReferenceError', 'undefined chiqadi', 'SyntaxError'],
    answer: 0,
    explain: 'Function declaration hoisting qilinadi: nom va tana kod bajarilishidan oldin tayyor bo\'ladi. Shuning uchun e\'lon qilishdan oldin chaqirish ishlaydi.',
    walkthrough: ['Function declaration topilgach, nom butun scope boshida mavjud bo\'ladi.', 'console.log(salom()) chaqirish ishlaydi.', 'Funksiya "Salom" qaytaradi.', 'Natija: "Salom".']
  },
  {
    id: 'q-functions-2', lessonId: 'functions', topic: 'Funksiyalar', level: 'o\'rta',
    question: 'Nega ikkinchi chaqirish xato beradi?',
    code: 'console.log(a()); // ishlaydi\nfunction a() { return 1; }\nconsole.log(b()); // xato\nconst b = () => 2;',
    options: ['Chunki b o\'zgaruvchi hali TDZ da', 'Chunki arrow funksiya hoisting qilinmaydi', 'Chunki b noto\'g\'ri yozilgan', 'Chunki const bilan chaqirib bo\'lmaydi'],
    answer: 0,
    explain: 'const b = () => 2 — bu o\'zgaruvchi deklaratsiyasi. b nomi TDZ ichida, deklaratsiya satriga yetguncha o\'qish ReferenceError beradi.',
    walkthrough: ['a() declaration — oldin tayyor, ishlaydi.', 'b — const o\'zgaruvchi, TDZ ichida.', 'console.log(b()) deklaratsiyadan oldin o\'qishga urinish.', 'Natija: ReferenceError.']
  },
  {
    id: 'q-functions-3', lessonId: 'functions', topic: 'Funksiyalar', level: 'o\'rta',
    question: 'Default parametr qachon ishlatiladi?',
    code: 'function f(x = 5) { return x; }\nconsole.log(f(), f(undefined), f(null));',
    options: ['5 5 5', '5 5 null', 'undefined 5 null', '5 undefined null'],
    answer: 1,
    explain: 'Argument berilmaganda va undefined berilganda default ishlaydi. null esa ataylab berilgan qiymat, default ishga tushmaydi.',
    walkthrough: ['f() → argument yo\'q → 5.', 'f(undefined) → default ishlaydi → 5.', 'f(null) → null qiymat sifatida qabul qilinadi.', 'Natija: 5 5 null.']
  },
  {
    id: 'q-functions-4', lessonId: 'functions', topic: 'Funksiyalar', level: 'qiyin',
    question: 'Rest parametr natijasi nima?',
    code: 'function f(a, ...rest) { return [a, rest]; }\nconsole.log(JSON.stringify(f(1, 2, 3)));',
    options: ['[1,[2,3]]', '[1,2,3]', '[1,[3]]', 'Xato'],
    answer: 0,
    explain: 'a birinchi argumentni oladi, ...rest qolganlarini massivga yig\'adi. Natija: [1, [2, 3]].',
    walkthrough: ['a = 1.', '...rest = [2, 3].', 'Funksiya [a, rest] qaytaradi.', 'Natija: [1,[2,3]].']
  },
  {
    id: 'q-this-1', lessonId: 'this-keyword', topic: 'this', level: 'o\'rta',
    question: 'Ikkinchi console.log nima chiqaradi?',
    code: 'const user = { ism: "Ali", salom() { return this.ism; } };\nconst f = user.salom;\nconsole.log(user.salom());\nconsole.log(f());',
    options: ['Ali, Ali', 'Ali, undefined', 'Ali, xato', 'undefined, undefined'],
    answer: 2,
    explain: 'user.salom() da this = user. Funksiyani f ga olib mustaqil chaqirsang, strict mode da this = undefined va this.ism xato beradi.',
    walkthrough: ['user.salom() → this obyektga bog\'langan → "Ali".', 'const f = user.salom → faqat funksiya ko\'chirildi, bog\'lanish yo\'q.', 'f() → strict mode da this = undefined.', 'this.ism → TypeError.']
  },
  {
    id: 'q-this-2', lessonId: 'this-keyword', topic: 'this', level: 'o\'rta',
    question: 'call va bind farqi nima?',
    code: 'function f() { return this.x; }\nconst o = { x: 1 };\nconsole.log(f.call(o));\nconst g = f.bind(o);\nconsole.log(g());',
    options: ['Ikkalasi ham 1 chiqaradi va xuddi shunday ishlaydi', 'Ikkalasi ham 1 chiqaradi, lekin call darhol chaqiradi, bind yangi funksiya qaytaradi', 'call 1, bind xato', 'call yangi funksiya qaytaradi, bind darhol chaqiradi'],
    answer: 1,
    explain: 'call berilgan this bilan funksiyani darhol chaqiradi. bind esa chaqirmaydi, this bog\'langan yangi funksiyani qaytaradi.',
    walkthrough: ['f.call(o) → this = o, darhol bajarilib 1 qaytaradi.', 'f.bind(o) → yangi funksiya g yaratildi, hali chaqirilmadi.', 'g() → this = o, natija 1.', 'Farq: call darhol, bind keyincha.']
  },
  {
    id: 'q-this-3', lessonId: 'this-keyword', topic: 'this', level: 'qiyin',
    question: 'Arrow funksiyada this qanday aniqlanadi?',
    options: ['Chaqirish usuliga qarab', 'Yaratilgan joyidagi this olinadi', 'Har doim undefined', 'Har doim global obyekt'],
    answer: 1,
    explain: 'Arrow funksiya o\'z this ga ega emas. U yaratilgan kontekstdagi this ni meros qilib oladi va uni chaqirish usuli o\'zgartira olmaydi.',
    walkthrough: ['Arrow o\'z this yaratmaydi.', 'U atrofdagi this ni oladi.', 'call/bind bilan ham o\'zgartirib bo\'lmaydi.', 'To\'g\'ri javob: yaratilgan joyidagi this.']
  },
  {
    id: 'q-array-1', lessonId: 'array-methods', topic: 'Array metodlari', level: 'oson',
    question: 'Qaysi metodlar asl massivni o\'zgartiradi?',
    options: ['map, filter, slice', 'sort, reverse, push, splice', 'concat, map, find', 'filter, reduce, every'],
    answer: 1,
    explain: 'sort, reverse, push, pop, shift, unshift, splice asl massivni o\'zgartiradi (mutating). map, filter, slice, concat esa yangi massiv qaytaradi.',
    walkthrough: ['map/filter/slice/concat yangi massiv beradi.', 'sort/reverse/push/splice asl massivni o\'zgartiradi.', 'Bu farq intervyuda tez-tez so\'raladi.', 'To\'g\'ri javob: ikkinchi variant.']
  },
  {
    id: 'q-array-2', lessonId: 'array-methods', topic: 'Array metodlari', level: 'o\'rta',
    question: 'sort natijasi nima?',
    code: 'console.log([10, 2, 1].sort());\nconsole.log([10, 2, 1].sort((a, b) => a - b));',
    options: ['[1,2,10], [1,2,10]', '[1,10,2], [1,2,10]', '[10,2,1], [1,2,10]', '[1,10,2], [1,10,2]'],
    answer: 1,
    explain: 'sort() default bo\'yicha elementlarni string sifatida solishtiradi: "10" < "2", shuning uchun [1,10,2]. Solishtirish funksiyasi (a,b)=>a-b bilan son tartibi to\'g\'ri bo\'ladi.',
    walkthrough: ['sort() → string solishtirish → [1,10,2].', 'sort((a,b)=>a-b) → son farqi → [1,2,10].', 'To\'g\'ri javob: [1,10,2], [1,2,10].']
  },
  {
    id: 'q-array-3', lessonId: 'array-methods', topic: 'Array metodlari', level: 'o\'rta',
    question: 'reduce natijasi nima?',
    code: 'console.log([1, 2, 3].reduce((a, b) => a + b, 10));',
    options: ['6', '10', '16', '13'],
    answer: 2,
    explain: 'Boshlang\'ich qiymat 10. 10+1=11, 11+2=13, 13+3=16. Natija 16.',
    walkthrough: ['a = 10 (boshlang\'ich qiymat).', '10 + 1 = 11.', '11 + 2 = 13.', '13 + 3 = 16.']
  },
  {
    id: 'q-array-4', lessonId: 'array-methods', topic: 'Array metodlari', level: 'oson',
    question: 'find va filter farqi nima?',
    options: [
      'find bitta elementni, filter yangi massivni qaytaradi',
      'Ikkalasi ham massiv qaytaradi',
      'find massivni o\'zgartiradi, filter yo\'q',
      'filter bitta elementni, find massivni qaytaradi'
    ],
    answer: 0,
    explain: 'find shartga mos birinchi elementni yoki undefined qaytaradi. filter esa mos barcha elementlardan yangi massiv yaratadi.',
    walkthrough: ['[1,2,3].find(x=>x>1) → 2.', '[1,2,3].filter(x=>x>1) → [2,3].', 'find bitta, filter barchasi.', 'To\'g\'ri javob: birinchi variant.']
  },
  {
    id: 'q-destructuring-1', lessonId: 'destructuring-spread', topic: 'Destructuring / Spread', level: 'o\'rta',
    question: 'Default parametr qanday natija beradi?',
    code: 'const { x = 1 } = { x: null };\nconsole.log(x);',
    options: ['1', 'null', 'undefined', 'Xato'],
    answer: 1,
    explain: 'Destructuring default qiymati faqat xususiyat yo\'q yoki undefined bo\'lganda ishlaydi. null ataylab berilgan qiymat, shuning uchun x = null.',
    walkthrough: ['obyektda x bor va u null.', 'Default faqat undefined da ishga tushadi.', 'x = null.', 'Natija: null.']
  },
  {
    id: 'q-destructuring-2', lessonId: 'destructuring-spread', topic: 'Destructuring / Spread', level: 'o\'rta',
    question: '?? va || farqi nima?',
    code: 'console.log(0 ?? 5);\nconsole.log(0 || 5);\nconsole.log("" ?? "boshqa");',
    options: ['0, 5, ""', '5, 5, "boshqa"', '0, 0, ""', '5, 0, "boshqa"'],
    answer: 0,
    explain: '?? faqat null/undefined da o\'ng qiymatni oladi: 0 va "" saqlanadi. || barcha falsy qiymatlarda o\'ng qiymatni oladi.',
    walkthrough: ['0 ?? 5 → 0 (0 null/undefined emas).', '0 || 5 → 5 (0 falsy).', '"" ?? "boshqa" → "" (bo\'sh string null emas).', 'Natija: 0, 5, "".']
  },
  {
    id: 'q-destructuring-3', lessonId: 'destructuring-spread', topic: 'Destructuring / Spread', level: 'qiyin',
    question: 'Spread yuzaki nusxa qiladimi?',
    code: 'const a = { manzil: { shahar: "Toshkent" } };\nconst b = { ...a };\nb.manzil.shahar = "Samarqand";\nconsole.log(a.manzil.shahar);',
    options: ['Toshkent', 'Samarqand', 'undefined', 'Xato'],
    answer: 1,
    explain: 'Spread faqat yuqori qatlamni nusxalaydi. Ichki manzil obyekti a va b da umumiy bo\'lgani uchun o\'zgarish ikkalasida ko\'rinadi.',
    walkthrough: ['{ ...a } yangi tashqi obyekt yaratadi.', 'Lekin manzil ichki obyekti bir xil reference.', 'b.manzil.shahar o\'zgarishi asl obyektga ham ta\'sir qiladi.', 'Natija: Samarqand.']
  },
  {
    id: 'q-promise-1', lessonId: 'promises-async', topic: 'Promise / async', level: 'oson',
    question: 'Promise qaysi holatlarda bo\'ladi?',
    options: ['pending, fulfilled, rejected', 'start, done, error', 'waiting, success, fail', 'open, closed'],
    answer: 0,
    explain: 'Promise uch holatda: pending (kutmoqda), fulfilled (bajarildi, resolve) yoki rejected (rad etildi, reject).',
    walkthrough: ['Yaratilganda pending.', 'resolve chaqirilsa fulfilled.', 'reject chaqirilsa rejected.', 'Holat bir marta o\'zgargach qayta o\'zgarmaydi.']
  },
  {
    id: 'q-promise-2', lessonId: 'promises-async', topic: 'Promise / async', level: 'o\'rta',
    question: 'Qaysi avval chiqadi?',
    code: 'Promise.resolve(1).then(x => console.log(x));\nconsole.log(2);',
    options: ['1, keyin 2', '2, keyin 1', 'Faqat 1', 'Faqat 2'],
    answer: 1,
    explain: '.then callbacki mikrovazifa sifatida hozirgi sinxron kod tugagandan keyin bajariladi. Shuning uchun 2 avval, 1 keyin chiqadi.',
    walkthrough: ['Promise.resolve() darhol bajarilgan Promise yaratadi.', '.then navbatga qo\'yiladi, hozir chaqirilmaydi.', 'console.log(2) sinxron bajarilib 2 chiqadi.', 'Keyin mikrovazifa: 1.']
  },
  {
    id: 'q-promise-3', lessonId: 'promises-async', topic: 'Promise / async', level: 'o\'rta',
    question: 'async funksiya nima qaytaradi?',
    code: 'async function f() { return 5; }\nconsole.log(f() instanceof Promise);',
    options: ['true', 'false', '5', 'undefined'],
    answer: 0,
    explain: 'async funksiya har doim Promise qaytaradi, hatto oddiy qiymat qaytarsang ham. 5 shu Promise ning natijasiga aylanadi.',
    walkthrough: ['async funksiya chaqirilganda Promise qaytaradi.', 'return 5 shu Promise ni 5 bilan bajaradi.', 'instanceof Promise → true.', 'Foydalanish: f().then(x => ...).']
  },
  {
    id: 'q-promise-4', lessonId: 'promises-async', topic: 'Promise / async', level: 'qiyin',
    question: 'Promise.all dagi bitta reject nima bo\'ladi?',
    options: ['Boshqalari ham rad etiladi', 'Butun Promise.all rad etiladi', 'Qolganlar bajarilishini kutadi', 'Xato e\'tiborga olinmaydi'],
    answer: 1,
    explain: 'Promise.all barchasi muvaffaqiyatli bo\'lgandagina natija massivini qaytaradi. Birortasi rad etilsa, butun Promise.all shu xato bilan rad etiladi.',
    walkthrough: ['Promise.all barcha Promise larni kutadi.', 'Bittasi reject bo\'lsa, umumiy natija rad etiladi.', 'Qolganlarning natijasi kutilmaydi.', 'Hammasini kutish uchun allSettled ishlatiladi.']
  },
  {
    id: 'q-eventloop-1', lessonId: 'event-loop', topic: 'Event loop', level: 'o\'rta',
    question: 'Chiqish tartibi qanday?',
    code: 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");',
    options: ['A, B, C, D', 'A, D, B, C', 'A, D, C, B', 'A, C, D, B'],
    answer: 2,
    explain: 'Sinxron A va D avval chiqadi. Keyin mikrovazifa C, oxirida makrovazifa B. Tartib: A, D, C, B.',
    walkthrough: ['A va D sinxron bajariladi.', 'Promise.then mikrovazifa navbatiga qo\'yildi.', 'setTimeout makrovazifa navbatiga qo\'yildi.', 'Stack bo\'shagach: C, keyin B.']
  },
  {
    id: 'q-eventloop-2', lessonId: 'event-loop', topic: 'Event loop', level: 'qiyin',
    question: 'Mikrovazifa ichida qo\'shilgan mikrovazifa qachon bajariladi?',
    code: 'Promise.resolve().then(() => {\n  console.log("1");\n  Promise.resolve().then(() => console.log("2"));\n});\nsetTimeout(() => console.log("3"), 0);',
    options: ['1, 3, 2', '1, 2, 3', '3, 1, 2', '1, 2 yoki 3 tasodifiy'],
    answer: 1,
    explain: 'Event loop makrotaskka o\'tishdan oldin butun mikrovazifa navbatini bo\'shatadi. Shuning uchun 2 ham 3 dan oldin chiqadi.',
    walkthrough: ['Birinchi mikrovazifa 1 ni chiqaradi.', 'U ichida yangi mikrovazifa qo\'shiladi.', 'Event loop uni ham shu navbatda bajaradi: 2.', 'Faqat keyin makrotask: 3.']
  },
  {
    id: 'q-eventloop-3', lessonId: 'event-loop', topic: 'Event loop', level: 'oson',
    question: 'setTimeout(fn, 0) darhol bajariladimi?',
    options: ['Ha, darhol', 'Yo\'q, makrovazifa navbatiga qo\'yiladi', 'Faqat Promise bo\'lmasa', 'Faqat brauzerda'],
    answer: 1,
    explain: '0 minimal kutish vaqtini bildiradi, lekin callback darhol chaqirilmaydi: u makrovazifa sifatida navbatga qo\'yilib, sinxron kod va mikrovazifalardan keyin olinadi.',
    walkthrough: ['setTimeout callback makrotask hisoblanadi.', 'Hozirgi stack tugaguncha kutadi.', 'Mikrovazifalar ham avval bajariladi.', 'Shuning uchun 0 ham "keyincha" degani.']
  },
  {
    id: 'q-dom-1', lessonId: 'dom-basics', topic: 'DOM', level: 'oson',
    question: 'querySelector topmasa nima qaytaradi?',
    options: ['undefined', 'null', 'false', 'Xato'],
    answer: 1,
    explain: 'querySelector mos element topmasa null qaytaradi. Shuning uchun ishlatishdan oldin tekshirish yoki optional chaining kerak.',
    walkthrough: ['querySelector bitta element yoki null qaytaradi.', 'Topilmasa null.', 'el.textContent yozishdan oldin if (el) tekshirish kerak.', 'To\'g\'ri javob: null.']
  },
  {
    id: 'q-dom-2', lessonId: 'dom-basics', topic: 'DOM', level: 'o\'rta',
    question: 'Foydalanuvchi kiritgan matnni qaysi xususiyat bilan qo\'yish xavfsiz?',
    options: ['innerHTML', 'textContent', 'outerHTML', 'insertAdjacentHTML'],
    answer: 1,
    explain: 'textContent matn sifatida qo\'yadi va HTML pars qilmaydi. innerHTML kiritilgan <script> yoki boshqa belgilarni HTML sifatida bajarishi mumkin (XSS).',
    walkthrough: ['innerHTML kiritilgan satrni HTML deb pars qiladi.', 'Bu XSS xavfiga olib keladi.', 'textContent faqat matn qo\'yadi, xavfsiz.', 'To\'g\'ri javob: textContent.']
  },
  {
    id: 'q-dom-3', lessonId: 'dom-basics', topic: 'DOM', level: 'o\'rta',
    question: 'data-user-id atributi qanday o\'qiladi?',
    options: ['el.data.userId', 'el.dataset.userId', 'el.getAttribute("dataset.userId")', 'el.dataset.user-id'],
    answer: 1,
    explain: 'data-* atributlari element.dataset obyektida saqlanadi. data-user-id → dataset.userId (kamelCase).',
    walkthrough: ['data-user-id="7" atributi bor.', 'element.dataset.userId → "7".', 'data-user-name → dataset.userName.', 'To\'g\'ri javob: el.dataset.userId.']
  },
  {
    id: 'q-functions-5', lessonId: 'functions', topic: 'Funksiyalar', level: 'oson',
    question: 'map va forEach farqi nima?',
    options: [
      'map yangi massiv qaytaradi, forEach esa yo\'q',
      'Ikkalasi ham yangi massiv qaytaradi',
      'forEach yangi massiv qaytaradi, map esa yo\'q',
      'Ikkalasi ham asl massivni o\'zgartiradi'
    ],
    answer: 0,
    explain: 'map har element natijasidan yangi massiv yaratadi. forEach faqat har element uchun callback chaqiradi va hech narsa qaytarmaydi (undefined).',
    walkthrough: ['[1,2].map(x=>x*2) → [2,4].', '[1,2].forEach(x=>x*2) → undefined.', 'forEach yon ta\'sir (console.log) uchun ishlatiladi.', 'To\'g\'ri javob: birinchi variant.']
  }
);
