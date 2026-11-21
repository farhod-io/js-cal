// Qo'shimcha darslar: intervyuda eng ko'p so'raladigan mavzular.
// lessons.js massiviga qo'shadi, tartib muhim: app.js dan oldin yuklanadi.
window.lessons.push(
  {
    id: 'functions',
    title: 'Funksiyalar: declaration, expression, arrow',
    question: 'Function declaration bilan function expression / arrow farqi nima? Parametrlar qanday ishlaydi?',
    explanation: 'Declaration butun scope boshida tayyor bo\'ladi, shuning uchun uni e\'lon qilishdan oldin ham chaqirish mumkin. Expression va arrow esa o\'z satriga yetgandagina mavjud bo\'ladi — oldin o\'qisang TDZ sabab ReferenceError. Arrow funksiyada o\'z this va arguments yo\'q.',
    sections: [
      {
        title: '1. Declaration vs expression',
        text: 'Declaration: function salom() {}. U hoisting qilinadi — nom va tanasi birga tayyor. Expression: const salom = function() {} yoki const salom = () => {}. Bular const bilan e\'lon qilingani uchun TDZ ichida bo\'ladi.',
        code: 'console.log(a()); // Salom\nfunction a() { return "Salom"; }\n\n// console.log(b()); // ReferenceError\nconst b = () => "Salom";'
      },
      {
        title: '2. Default parametrlar',
        text: 'Parametrga qiymat berilsa, argument yuborilmagan yoki undefined yuborilganda ishlatiladi. Lekin null defaultni ishga solmaydi: null ataylab berilgan qiymat hisoblanadi.',
        code: 'function poz(n = 5) { return n; }\nconsole.log(poz());       // 5\nconsole.log(poz(undefined)); // 5\nconsole.log(poz(null));   // null'
      },
      {
        title: '3. Rest parametrlar',
        text: '...params qolgan argumentlarni massivga yig\'adi. Rest parametri oxirida turishi shart. Bu spread bilan aralashtirib yuborilmasin: spread massivni elementlarga tarqatadi, rest esa elementlarni massivga yig\'adi.',
        code: 'function yig(first, ...rest) {\n  return first + rest.length;\n}\nconsole.log(yig(1, 2, 3, 4)); // 4\n\nconst sonlar = [1, 2];\nconsole.log(...sonlar); // 1 2 (spread)'
      },
      {
        title: '4. Arrow va oddiy funksiya',
        text: 'Arrow o\'z this ga ega emas: u atrof-dagi this ni oladi. Shuning uchun obyekt metodini arrow bilan yozish noto\'g\'ri bo\'ladi. Arrow ni new bilan chaqirib bo\'lmaydi va unda arguments obyekti yo\'q.',
        code: 'const obyekt = {\n  x: 10,\n  oddiy() { return this.x; }, // 10\n  arrow: () => this.x         // noto\'g\'ri ishlatish\n};\nconsole.log(obyekt.oddiy());\n\n// const F = () => {};\n// new F(); // TypeError'
      }
    ],
    takeaway: 'Declaration oldin chaqirilsa ishlaydi; expression/arrow — ReferenceError.\nundefined default parameterni ishga soladi, null — yo\'q.\nRest yig\'adi, spread tarqatadi.\nArrow o\'z this/arguments ga ega emas va new bilan ishlamaydi.',
    exercise: '1) console.log(salom()); function salom(){ return 1; } natijasi?\n2) const f = () => this; ni obyekt metodi sifatida ishlatish nega xato?\n3) function f(a, ...rest) { return rest; } f(1,2,3) nima qaytaradi?'
  },
  {
    id: 'this-keyword',
    title: 'this: metod, arrow, call/apply/bind',
    question: 'this qanday aniqlanadi? Nega arrow funksiyada this boshqacha?',
    explanation: 'Oddiy funksiyada this chaqirish usuliga bog\'liq: obyekt.method() qilsang this = obyekt; mustaqil chaqirsang this = undefined (strict mode) yoki global. Arrow esa this ni o\'ziga olmaydi, yaratilgan joyidagi this ni ishlatadi.',
    sections: [
      {
        title: '1. this chaqirishga bog\'liq',
        text: 'Bir xil funksiyani turli usulda chaqirsang this farq qiladi. Obyekt orqali chaqirish this ni shu obyektga bog\'laydi. Funksiyani o\'zgaruvchiga olib, mustaqil chaqirsang bu bog\'lanish yo\'qoladi.',
        code: 'const user = {\n  ism: "Ali",\n  salom() { return this.ism; }\n};\nconsole.log(user.salom()); // Ali\n\nconst f = user.salom;\n// console.log(f()); // strict mode: TypeError'
      },
      {
        title: '2. call, apply va bind',
        text: 'call(thisArg, ...args) va apply(thisArg, [args]) funksiyani berilgan this bilan darhol chaqiradi. bind(thisArg, ...args) esa chaqirmaydi, yangi bog\'langan funksiya qaytaradi.',
        code: 'function salom() { return this.ism; }\nconsole.log(salom.call({ ism: "Vali" })); // Vali\nconsole.log(salom.apply({ ism: "Hasan" })); // Hasan\n\nconst bog = salom.bind({ ism: "Ali" });\nconsole.log(bog()); // Ali'
      },
      {
        title: '3. Arrow this ni meros qilib oladi',
        text: 'Arrow funksiya yaratilgan paytdagi this ni saqlaydi. Klass va oddiy funksiya ichida callback sifatida ishlatilganda aynan shu xususiyat qulay: this ni saqlash uchun .bind(this) yozish shart emas.',
        code: 'function F() {\n  this.x = 1;\n  const ichki = () => this.x;\n  return ichki;\n}\nconsole.log(new F()()); // 1\n\nconst obyekt = {\n  x: 10,\n  oddiy: function() { return this.x; },\n  arrow: () => this.x // bu yerda this obyekt emas\n};'
      }
    ],
    takeaway: 'this — chaqirish usuli bilan aniqlanadi (oddiy funksiya).\nobj.method() → this = obj.\ncall/apply darhol chaqiradi, bind yangi funksiya qaytaradi.\nArrow o\'z this ga ega emas: yaratilgan joydagi this ni ishlatadi.',
    exercise: '1) const f = obj.method; f() qilsa this nima bo\'ladi?\n2) call va apply farqi nima?\n3) Nega obyekt metodini arrow bilan yozish xato?'
  },
  {
    id: 'array-methods',
    title: 'Array metodlari: map, filter, reduce va boshqalar',
    question: 'map, filter, reduce, sort, find, some, every qanday ishlaydi? Qaysilari massivni o\'zgartiradi?',
    explanation: 'map har elementni yangisiga almashtirib yangi massiv qaytaradi. filter shartga moslarini ajratadi. reduce massivni bitta qiymatga yig\'adi. sort, reverse, push, splice esa asl massivni o\'zgartiradi (mutating).',
    sections: [
      {
        title: '1. map va filter',
        text: 'Ikkalasi ham yangi massiv qaytaradi, asl massivni o\'zgartirmaydi. map natija massivi uzunligi har doim asl massiv bilan bir xil. filter esa faqat shart true bo\'lgan elementlarni oladi.',
        code: 'const sonlar = [1, 2, 3];\nconsole.log(sonlar.map(x => x * 2)); // [2, 4, 6]\nconsole.log(sonlar.filter(x => x % 2 === 0)); // [2]\nconsole.log(sonlar); // [1, 2, 3] — o\'zgarmadi'
      },
      {
        title: '2. reduce',
        text: 'reduce akkumulyator va joriy element bilan ishlaydi. Ikkinchi argument — boshlang\'ich qiymat. Uni bermasang birinchi element boshlang\'ich qiymat bo\'ladi va iteratsiya 2-elementdan boshlanadi.',
        code: 'console.log([1, 2, 3].reduce((a, b) => a + b, 0)); // 6\nconsole.log([1, 2, 3].reduce((a, b) => a + b)); // 6\nconsole.log([].reduce((a, b) => a + b, 0)); // 0'
      },
      {
        title: '3. sort tuzog\'i',
        text: 'sort() elementlarni string sifatida, Unicode tartibida solishtiradi. Shuning uchun [10, 2, 1].sort() natijasi [1, 10, 2] bo\'ladi. Sonlarni to\'g\'ri tartiblash uchun solishtirish funksiyasi berish kerak. sort asl massivni o\'zgartiradi.',
        code: 'console.log([10, 2, 1].sort()); // [1, 10, 2]\nconsole.log([10, 2, 1].sort((a, b) => a - b)); // [1, 2, 10]\n\nconst a = [3, 1, 2];\na.sort();\nconsole.log(a); // [1, 2, 3] — asl massiv o\'zgardi'
      },
      {
        title: '4. find, some, every, includes',
        text: 'find mos kelgan birinchi elementni (yoki undefined) qaytaradi. some — hech bo\'lmaganda bittasi mos kelsa true. every — hammasi mos kelsa true. includes qiymat borligini tekshiradi.',
        code: 'console.log([1, 2, 3].find(x => x > 1)); // 2\nconsole.log([1, 2, 3].some(x => x > 2)); // true\nconsole.log([1, 2, 3].every(x => x > 0)); // true\nconsole.log([1, 2, 3].includes(2)); // true'
      }
    ],
    takeaway: 'map/filter/slice/concat — yangi massiv, asl o\'zgarmaydi.\nsort/reverse/push/splice — asl massivni o\'zgartiradi.\nsort default bo\'yicha string sifatida solishtiradi: (a,b)=>a-b kerak.\nreduce bitta qiymatga yig\'adi; find elementni, some/every boolean qaytaradi.',
    exercise: '1) [10,2,1].sort() natijasi nima va nega?\n2) map va forEach farqi nima?\n3) [1,2,3].reduce((a,b)=>a+b, 10) natijasi?'
  },
  {
    id: 'destructuring-spread',
    title: 'Destructuring, spread, optional chaining',
    question: 'const { a } = obj, ...rest, ?. va ?? qanday ishlaydi?',
    explanation: 'Destructuring obyekt yoki massivdan qiymatlarni olib, o\'zgaruvchilarga tarqatadi. Spread ... massiv/obyektni elementlariga tarqatadi. Optional chaining ?. ichki xususiyat yo\'q bo\'lsa xato o\'rniga undefined qaytaradi. Nullish coalescing ?? faqat null/undefined da zaxira qiymat oladi.',
    sections: [
      {
        title: '1. Obyekt destructuring va default',
        text: 'const { a, b = 2 } = obj: agar b yo\'q yoki undefined bo\'lsa, 2 ishlatiladi. Yangi nom bilan olish uchun const { a: boshqaNom } = obj yoziladi.',
        code: 'const { a, b = 2 } = { a: 1 };\nconsole.log(a, b); // 1 2\n\nconst { ism: nom } = { ism: "Ali" };\nconsole.log(nom); // Ali'
      },
      {
        title: '2. Spread',
        text: 'Massivda [...a, 3] yangi massiv yaratadi. Obyektda { ...a, x: 1 } yangi obyekt yaratadi. E\'tibor: bu yuzaki nusxa — ichki obyektlar umumiy qoladi.',
        code: 'const a = [1, 2];\nconst b = [...a, 3];\nconsole.log(a.length, b.length); // 2 3\n\nconst o = { x: 1 };\nconst n = { ...o, y: 2 };\nconsole.log(n); // { x: 1, y: 2 }'
      },
      {
        title: '3. Optional chaining va nullish coalescing',
        text: 'user?.ism — user null yoki undefined bo\'lsa undefined qaytaradi, xato emas. ?? esa faqat null/undefined da o\'ng tomondagi qiymatni oladi. || bilan farqi: || 0, "", false ni ham zaxira deb hisoblaydi.',
        code: 'const user = null;\nconsole.log(user?.ism); // undefined\nconsole.log(user?.ism ?? "yo\'q"); // yo\'q\n\nconsole.log(0 ?? 5); // 0\nconsole.log(0 || 5); // 5\nconsole.log("" ?? "boshqa"); // ""'
      }
    ],
    takeaway: 'Destructuring qiymatlarni nomlarga tarqatadi; default faqat undefined da ishlaydi.\nSpread yangi massiv/obyekt yaratadi, lekin yuzaki.\n?. xato o\'rniga undefined qaytaradi.\n?? faqat null/undefined ni almashtiradi, || esa barcha falsy ni.',
    exercise: '1) const { x = 1 } = { x: null } natijasi nima?\n2) 0 || 5 va 0 ?? 5 farqi?\n3) user?.ism?.first qanday ishlaydi?'
  },
  {
    id: 'promises-async',
    title: 'Promise va async/await',
    question: 'Promise holatlari, .then zanjiri, async/await va xatolik qanday ishlaydi?',
    explanation: 'Promise uch holatda: pending, fulfilled, rejected. .then muvaffaqiyatni, .catch xatoni tutadi. async funksiyalar har doim Promise qaytaradi; await shu Promise bajarilguncha kutadi, lekin butun dasturni to\'xtatmaydi.',
    sections: [
      {
        title: '1. Promise holatlari',
        text: 'Yangi Promise yaratilganda pending bo\'ladi. resolve chaqirilsa fulfilled, reject chaqirilsa rejected. Bir marta holat o\'zgargach qayta o\'zgarmaydi.',
        code: 'const p = new Promise((resolve, reject) => {\n  resolve("tayyor");\n});\np.then(x => console.log(x)); // tayyor\n\nPromise.reject("xato").catch(e => console.log(e)); // xato'
      },
      {
        title: '2. .then zanjiri va tartib',
        text: '.then callbacklari har doim mikrovazifa sifatida, hozirgi sinxron kod tugagandan keyin bajariladi. Shuning uchun console.log(2) avval chiqadi.',
        code: 'Promise.resolve(1).then(x => console.log(x));\nconsole.log(2);\n// natija: 2, keyin 1'
      },
      {
        title: '3. async/await',
        text: 'async funksiya har doim Promise qaytaradi, hatto oddiy qiymat qaytarsang ham. await faqat async ichida ishlaydi va Promise natijasini oladi. Xatoni try/catch yoki .catch bilan tutish mumkin.',
        code: 'async function f() { return 5; }\nf().then(x => console.log(x)); // 5\nconsole.log(1); // avval 1 chiqadi\n\nasync function xato() {\n  throw new Error("buzildi");\n}\nxato().catch(e => console.log(e.message)); // buzildi'
      },
      {
        title: '4. Promise.all va Promise.allSettled',
        text: 'Promise.all barchasi bajarilsa natijalar massivini qaytaradi; bittasi rad etilsa butun zanjir rad etiladi. Promise.allSettled esa hammasini kutib, har birining holatini qaytaradi.',
        code: 'Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n]).then(r => console.log(r)); // [1, 2]'
      }
    ],
    takeaway: 'Promise: pending → fulfilled yoki rejected, bir marta.\n.then/.catch mikrovazifa sifatida sinxron koddan keyin ishlaydi.\nasync har doim Promise qaytaradi; await uni ochadi.\nPromise.all bitta xatoda rad etiladi; allSettled hammasini kutadi.',
    exercise: '1) Promise.resolve(1).then(...) va keyingi console.log(2) qaysi avval chiqadi?\n2) async function f(){ return 1 } f() nima qaytaradi?\n3) Promise.all dagi bitta reject nima bo\'ladi?'
  },
  {
    id: 'event-loop',
    title: 'Event loop: microtask va macrotask',
    question: 'setTimeout(0) bilan Promise.then qaysi avval ishlaydi? Nega?',
    explanation: 'Sinxron kod avval bajariladi. Keyin barcha mikrovazifalar (.then, queueMicrotask) navbat bilan tugatiladi. Faqat undan keyin makrovazifalar (setTimeout, setInterval) olinadi. Shuning uchun Promise.then har doim setTimeout(0) dan oldin chiqadi.',
    sections: [
      {
        title: '1. Tartib',
        text: 'Call stack bo\'shagach, event loop avval microtask queue ni to\'liq bo\'shatadi, keyin bir makrotask oladi. Bu qoida setTimeout(0) va Promise.then farqini tushuntiradi.',
        code: 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n// A, D, C, B'
      },
      {
        title: '2. Mikrovazifa ichida yaratilgan mikrovazifa',
        text: 'Mikrovazifa ichida yangi mikrovazifa qo\'shilsa, u ham shu navbatda bajariladi. Event loop keyingi makrotaskka o\'tishdan oldin butun mikrovazifa navbatini tugatadi.',
        code: 'Promise.resolve().then(() => {\n  console.log("birinchi");\n  Promise.resolve().then(() => console.log("ikkinchi"));\n});\nsetTimeout(() => console.log("uchinchi"), 0);\n// birinchi, ikkinchi, uchinchi'
      },
      {
        title: '3. setTimeout(0) 0 ms degani emas',
        text: '0 — minimal kutish vaqti, lekin callback darhol bajarilmaydi: u makrovazifa navbatiga qo\'yiladi va stack bo\'shaganda, mikrovazifalardan keyin olinadi.',
        code: 'setTimeout(() => console.log(1), 0);\nconsole.log(2);\n// 2, keyin 1'
      }
    ],
    takeaway: 'Tartib: sinxron kod → barcha mikrovazifalar → bitta makrotask.\nMicrotask: .then, .catch, queueMicrotask.\nMacrotask: setTimeout, setInterval.\nsetTimeout(0) hech qachon .then dan oldin bajarilmaydi.',
    exercise: '1) console.log("A"); setTimeout(()=>console.log("B"),0); Promise.resolve().then(()=>console.log("C")); console.log("D") tartibi?\n2) Nega setTimeout(0) darhol ishlamaydi?'
  },
  {
    id: 'dom-basics',
    title: 'DOM asoslari: tanlash, matn va event',
    question: 'querySelector, textContent, innerHTML va addEventListener qanday ishlaydi?',
    explanation: 'querySelector bitta elementni, querySelectorAll barcha mos elementlarni NodeList sifatida qaytaradi. textContent matn qo\'yadi va HTML sifatida pars qilmaydi; innerHTML pars qiladi (xavfsizlik xavfi bor). addEventListener elementga hodisa bog\'laydi.',
    sections: [
      {
        title: '1. Elementlarni tanlash',
        text: 'querySelector CSS selektori bo\'yicha birinchi mos elementni yoki null qaytaradi. querySelectorAll esa NodeList qaytaradi; u massiv emas, lekin forEach bor.',
        code: 'const el = document.querySelector("#ism");\nif (el) el.textContent = "Ali";\n\ndocument.querySelectorAll("li").forEach(li => {\n  console.log(li.textContent);\n});'
      },
      {
        title: '2. textContent vs innerHTML',
        text: 'textContent faqat matn qo\'yadi: <b>Ali</b> yozsang aynan shunday ko\'rinadi. innerHTML esa HTML deb pars qiladi va qalin yozuv chiqaradi. Foydalanuvchi kiritgan ma\'lumotni innerHTML ga qo\'yish XSS xavfiga olib keladi.',
        code: 'el.textContent = "<b>Ali</b>"; // matn sifatida ko\'rinadi\nel.innerHTML = "<b>Ali</b>";   // qalin Ali\n\n// Xavfsiz: foydalanuvchi kiritganini textContent ga qo\'y'
      },
      {
        title: '3. Event va dataset',
        text: 'addEventListener(type, callback) hodisa yuz berganda chaqiriladi. data-* atributlari element.dataset orqali o\'qiladi (data-user-id → dataset.userId).',
        code: 'const btn = document.querySelector("#btn");\nbtn.addEventListener("click", (e) => {\n  console.log(e.target.dataset.userId);\n});\n// <button id="btn" data-user-id="7">Bos</button>'
      }
    ],
    takeaway: 'querySelector → bitta element yoki null; querySelectorAll → NodeList.\ntextContent matn, innerHTML HTML pars qiladi (XSS xavfi).\naddEventListener hodisa bog\'laydi; data-* → element.dataset.',
    exercise: '1) querySelector hech narsa topmasa nima qaytaradi?\n2) Foydalanuvchi kiritgan matnni qaysi xususiyat bilan qo\'yish xavfsiz?\n3) data-user-id qanday o\'qiladi?'
  }
);
