// Qolgan muhim JS mavzulari: rekursiya, debounce/throttle, currying,
// memoization, Symbol/BigInt, WeakMap, descriptorlar, dynamic import,
// Promise kombinatorlari va async iteratsiya. Har biri noldan.
window.lessons.push(
  {
    id: 'recursion',
    title: 'Rekursiya: noldan',
    question: 'Funksiya o‘zini o‘zi chaqirsa nima bo‘ladi? Bazis va rekursiv qadam nima?',
    explanation: 'Rekursiya — funksiyaning o‘zini o‘zi chaqirishi. Har bir rekursiv chaqirish yangi scope yaratadi va masalani kichikroq qismga ajratadi. To‘xtash sharti (bazis) bo‘lmasa, cheksiz chaqirish va stack overflow yuz beradi. Kod o‘qiyotganda avval bazisni top.',
    sections: [
      {
        title: '1. Eng oddiy rekursiya',
        text: 'Funksiya o‘zini chaqiradi, lekin har safar argument kichiklashadi. n = 0 ga yetganda to‘xtaydi. Bu bazis holati.',
        code: 'function hisobla(n) {\n  if (n === 0) return 0; // bazis\n  return n + hisobla(n - 1); // rekursiv qadam\n}\nconsole.log(hisobla(3)); // 6 (3+2+1+0)',
        note: 'hisobla(3) → 3 + hisobla(2) → 3 + 2 + hisobla(1) → ... → 6.'
      },
      {
        title: '2. Bazis shart nima uchun shart?',
        text: 'Bazis bo‘lmasa, funksiya hech qachon to‘xtamaydi va call stack to‘ladi: RangeError: Maximum call stack size exceeded.',
        code: '// function cheksiz(n) {\n//   return cheksiz(n + 1); // to\'xtash yo\'q\n// }\n// cheksiz(1); // RangeError'
      },
      {
        title: '3. Faktorial',
        text: 'Klassik misol: n! = n × (n-1)!, 0! = 1. Bazis n === 0. Har qadam n ni 1 ga kamaytiradi.',
        code: 'function faktorial(n) {\n  if (n === 0) return 1;\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(5)); // 120'
      },
      {
        title: '4. Rekursiya va tsikl',
        text: 'Ko‘p masalalarni ham rekursiya, ham tsikl bilan yechish mumkin. Tsikl odatda tezroq va xotirani kamroq ishlatadi; rekursiya esa ba’zi tuzilmalar (daraxt) uchun qulayroq.',
        code: '// tsikl bilan yig\'indi:\nfunction yigindi(n) {\n  let s = 0;\n  for (let i = 1; i <= n; i++) s += i;\n  return s;\n}\nconsole.log(yigindi(3)); // 6'
      },
      {
        title: '5. Ichki obyektlarda rekursiya',
        text: 'Rekursiya ierarxik ma’lumotlarda (daraxt, ichki obyektlar) juda qulay. Har qadam ichki obyektga o‘tadi.',
        code: 'const tuzilma = {\n  nom: "bosh",\n  bolalar: [\n    { nom: "bir", bolalar: [] },\n    { nom: "ikki", bolalar: [] }\n  ]\n};\nfunction chiqar(o) {\n  console.log(o.nom);\n  o.bolalar.forEach(chiqar);\n}\nchiqar(tuzilma); // bosh, bir, ikki'
      },
      {
        title: '6. Stack chuqurligi',
        text: 'Har bir chaqirish stack da joy oladi. Chuqur rekursiya (masalan 10000 qadam) stack overflow beradi. Bunday hollarda tsikl yoki trampolin usuli ishlatiladi.',
        code: '// function chuqur(n) {\n//   if (n === 0) return 0;\n//   return chuqur(n - 1);\n// }\n// chuqur(20000); // RangeError (muhitga qarab)'
      }
    ],
    takeaway: 'Rekursiya — funksiyaning o‘zini chaqirishi.\nBazis shart bo‘lmasa cheksiz chaqirish va RangeError.\nHar qadam masalani kichiklashtirishi shart.\nTsikl tezroq, rekursiya ierarxiya uchun qulay.\nChuqur rekursiya stack overflow ga olib keladi.',
    exercise: '1) faktorial(0) nima qaytaradi va nega?\n2) Bazis shart bo‘lmasa nima bo‘ladi?\n3) 3 + hisobla(2) qanday ochiladi?\n4) Rekursiya va tsiklni qachon tanlaysiz?'
  },
  {
    id: 'debounce-throttle',
    title: 'Debounce va Throttle: noldan',
    question: 'Debounce va throttle farqi nima? Qayerda ishlatiladi?',
    explanation: 'Ikkalasi ham tez-tez chaqiriladigan funksiyani boshqarish usullari. Debounce — oxirgi chaqiruvdan keyin ma’lum vaqt o‘tganda bajaradi (qidirish maydoni). Throttle — har vaqt oralig‘ida bir marta bajaradi (scroll, resize). Bu intervyuda juda ko‘p so‘raladi.',
    sections: [
      {
        title: '1. Muammo',
        text: 'Foydalanuvchi har belgi yozganda yoki har scroll pikselida funksiya chaqirilsa, juda ko‘p ish bajariladi. Buni cheklash kerak.',
        code: '// yomon: har harfda so\'rov yuboriladi\ninput.addEventListener("input", () => {\n  fetch("/qidir?x=" + input.value);\n});'
      },
      {
        title: '2. Debounce',
        text: 'Har chaqiruvda oldingi timer bekor qilinadi va yangisi qo‘yiladi. Faqat foydalanuvchi to‘xtagandan keyin bajariladi. setTimeout + clearTimeout asosida ishlaydi.',
        code: 'function debounce(fn, ms) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n\nconst qidir = debounce((x) => console.log("so\'rov:", x), 300);\nqidir("a"); qidir("ab"); qidir("abc");\n// faqat: so\'rov: abc'
      },
      {
        title: '3. Throttle',
        text: 'Har bir vaqt oralig‘ida bir marta bajariladi. Oraliq ichidagi qo‘shimcha chaqiruvlar e’tiborga olinmaydi. Scroll va resize hodisalarida ishlatiladi.',
        code: 'function throttle(fn, ms) {\n  let oxirgi = 0;\n  return function (...args) {\n    const hozir = Date.now();\n    if (hozir - oxirgi >= ms) {\n      oxirgi = hozir;\n      fn(...args);\n    }\n  };\n}\n\nconst harakat = throttle(() => console.log("scroll"), 200);'
      },
      {
        title: '4. Asosiy farq',
        text: 'Debounce — oxirgi chaqiruvdan keyin kutadi. Throttle — birinchi chaqiruvda bajaradi va keyingilarni vaqt oralig‘igacha o‘tkazadi. Qidirish uchun debounce, scroll uchun throttle.',
        code: '// tez-tez chaqirish: a, b, c (har 50ms)\n// debounce(300): faqat oxirgisidan 300ms keyin\n// throttle(200): 0ms da bir, 200ms da bir'
      },
      {
        title: '5. Amaliy misol',
        text: 'Kod o‘qiyotganda closure ichidagi timer/oxirgi o‘zgaruvchisiga e’tibor ber: u chaqiruvlar orasida saqlanadi.',
        code: 'const input = document.querySelector("#qidir");\ninput.addEventListener("input", debounce((e) => {\n  console.log(e.target.value);\n}, 400));'
      }
    ],
    takeaway: 'Debounce — oxirgi chaqiruvdan keyin bajaradi (qidirish).\nThrottle — har vaqt oralig‘ida bir marta (scroll/resize).\nDebounce clearTimeout + setTimeout bilan yoziladi.\nThrottle Date.now() farqi bilan yoziladi.\nIkkalasi ham closure ichida holat saqlaydi.',
    exercise: '1) Qidirish maydoni uchun qaysi usul yaxshi?\n2) Scroll hodisasi uchun-chi?\n3) Debounce da nima uchun clearTimeout kerak?\n4) Throttle va debounce asosiy farqi nima?'
  },
  {
    id: 'currying',
    title: 'Currying va qisman qo‘llash: noldan',
    question: 'Currying nima? f(a,b,c) ni f(a)(b)(c) ga aylantirish qanday ishlaydi?',
    explanation: 'Currying — ko‘p argumentli funksiyani bir argumentli funksiyalar zanjiriga aylantirish. Har bir funksiya keyingisini qaytaradi. Qisman qo‘llash (partial application) esa ba’zi argumentlarni oldindan mahkamlash. Ikkalasi ham closure asosida ishlaydi.',
    sections: [
      {
        title: '1. Currying misoli',
        text: 'Oddiy funksiyani currying shakliga o‘zgartirish: har bir qadam keyingi funksiyani qaytaradi, oxirgisida hisoblash bajariladi.',
        code: 'function qosh(a) {\n  return function (b) {\n    return a + b;\n  };\n}\nconsole.log(qosh(2)(3)); // 5\n\nconst beshQosh = qosh(5);\nconsole.log(beshQosh(10)); // 15',
        note: 'qosh(2) chaqirilganda a = 2 saqlanadi (closure), keyin qosh(2)(3) da b = 3.'
      },
      {
        title: '2. Arrow bilan qisqa',
        text: 'Arrow funksiyalar bilan currying juda qisqa yoziladi.',
        code: 'const kopaytir = a => b => c => a * b * c;\nconsole.log(kopaytir(2)(3)(4)); // 24'
      },
      {
        title: '3. Umumiy curry funksiyasi',
        text: 'Rest parametrlar bilan ixtiyoriy funksiyani currying qilish mumkin. Argumentlar yetarli bo‘lguncha funksiya qaytarilaveradi.',
        code: 'function curry(fn) {\n  return function yig(...args) {\n    if (args.length >= fn.length) return fn(...args);\n    return (...keyin) => yig(...args, ...keyin);\n  };\n}\nconst yig3 = curry((a, b, c) => a + b + c);\nconsole.log(yig3(1)(2)(3)); // 6\nconsole.log(yig3(1, 2)(3)); // 6'
      },
      {
        title: '4. Qisman qo‘llash',
        text: 'Partial application ba’zi argumentlarni oldindan berib, qolganlarini keyin olish. bind va closure bilan yoziladi.',
        code: 'function salomlash(kim, xabar) {\n  return kim + ", " + xabar;\n}\nconst aliGa = salomlash.bind(null, "Ali");\nconsole.log(aliGa("Salom")); // Ali, Salom'
      },
      {
        title: '5. Nega foydali?',
        text: 'Currying funksiyalarni qayta ishlatish va kompozitsiya qilishni osonlashtiradi: oldindan sozlangan funksiya yaratish.',
        code: 'const kutil = ms => fn => setTimeout(fn, ms);\nkutil(1000)(() => console.log("1 soniyadan keyin"));'
      }
    ],
    takeaway: 'Currying: f(a,b) → f(a)(b), har funksiya keyingisini qaytaradi.\nClosure har qadam argumentni saqlaydi.\nArrow bilan qisqa: a => b => a+b.\nPartial application ba’zi argumentlarni oldindan mahkamlaydi.\nbind ham qisman qo‘llash usuli.',
    exercise: '1) qosh(2)(3) qanday ishlaydi?\n2) const f = a => b => a+b; f(1)(2) nima?\n3) Currying va partial application farqi?\n4) bind bilan qanday qisman qo‘llash mumkin?'
  },
  {
    id: 'memoization',
    title: 'Memoization: noldan',
    question: 'Memoization nima? Natijalar qanday keshlanadi va qachon foydali?',
    explanation: 'Memoization — funksiya natijasini saqlab, keyingi chaqiruvda hisoblash o‘rniga tayyor natijani qaytarish usuli. Kuchli hisoblashlar va rekursiya (masalan Fibonacci) uchun juda foydali. Closure va Map/Object bilan yoziladi.',
    sections: [
      {
        title: '1. Muammo',
        text: 'Oddiy rekursiv Fibonacci bir xil qiymatlarni qayta-qayta hisoblaydi: juda sekin.',
        code: 'function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n// fib(40) juda uzoq ishlaydi — takroriy hisoblar tufayli'
      },
      {
        title: '2. Kesh bilan yechim',
        text: 'Hisoblangan natijani obyektga saqlaymiz. Keyingi chaqiruvda keshda borsa, darhol qaytaramiz.',
        code: 'function fibTez(n, kesh = {}) {\n  if (n < 2) return n;\n  if (kesh[n] !== undefined) return kesh[n];\n  kesh[n] = fibTez(n - 1, kesh) + fibTez(n - 2, kesh);\n  return kesh[n];\n}\nconsole.log(fibTez(40)); // tez chiqadi'
      },
      {
        title: '3. Umumiy memoize funksiyasi',
        text: 'Har qanday funksiyani keshlab qo‘yish mumkin. Argumentlar kalit sifatida ishlatiladi.',
        code: 'function memoize(fn) {\n  const kesh = new Map();\n  return function (...args) {\n    const kalit = JSON.stringify(args);\n    if (kesh.has(kalit)) return kesh.get(kalit);\n    const natija = fn(...args);\n    kesh.set(kalit, natija);\n    return natija;\n  };\n}\nconst kvadrat = memoize(x => x * x);\nconsole.log(kvadrat(5), kvadrat(5)); // ikkinchisi keshdan'
      },
      {
        title: '4. E’tibor: faqat sof funksiyalar',
        text: 'Memoization faqat bir xil argumentga doim bir xil natija qaytaradigan (sof/pure) funksiyalar uchun xavfsiz. Yon ta’siri bor funksiyani keshlamang.',
        code: '// yomon: natija har safar farq qiladi\n// memoize(() => Date.now()) — noto\'g\'ri ishlatish\n\n// yaxshi: bir xil kirish → bir xil chiqish\nmemoize(x => x * 2);'
      },
      {
        title: '5. Kesh xotirasi',
        text: 'Kesh o‘sib boradi: har xil argument uchun yangi yozuv. Katta ma’lumotlarda eskirgan yozuvlarni o‘chirish (LRU) kerak bo‘lishi mumkin.',
        code: 'const kesh = new Map();\nkesh.set("a", 1);\n// kesh.clear(); // butunlash o\'chirish'
      }
    ],
    takeaway: 'Memoization — natijani keshlab, qayta hisoblamaslik.\nRekursiv hisoblashlarda juda tezlashtiradi.\nClosure yoki Map bilan yoziladi.\nFaqat sof funksiyalarga qo‘llash xavfsiz.\nKesh hajmini nazorat qilish kerak.',
    exercise: '1) Nega oddiy fib(40) sekin?\n2) Kesh qanday ishlaydi?\n3) Nega faqat sof funksiyalarni keshlash kerak?\n4) Map o‘rniga obyekt ishlatish mumkinmi?'
  },
  {
    id: 'symbol-bigint',
    title: 'Symbol va BigInt: noldan',
    question: 'Symbol nima? BigInt qachon kerak? Nega ularni boshqa turlar bilan aralashtirib bo‘lmaydi?',
    explanation: 'Symbol — noyob va o‘zgaruvchan identifikator yaratadigan primitive tur. Obyekt kaliti sifatida ishlatiladi. BigInt — katta butun sonlar uchun tur: Number aniqlik yo‘qotadi, BigInt esa yo‘q. Ikkalasi ham maxsus qoidalarga ega.',
    sections: [
      {
        title: '1. Symbol',
        text: 'Symbol() har chaqirilganda yangi noyob qiymat yaratadi. Hatto tavsif bir xil bo‘lsa ham teng emas. Obyektga yashirin kalit qo‘yish uchun ishlatiladi.',
        code: 'const a = Symbol("id");\nconst b = Symbol("id");\nconsole.log(a === b); // false\nconsole.log(typeof a); // "symbol"\n\nconst o = { [a]: 1 };\nconsole.log(o[a]); // 1\nconsole.log(Object.keys(o)); // [] — ko\'rinmaydi'
      },
      {
        title: '2. Symbol.iterator va well-known',
        text: 'JavaScript ichida ba’zi Symbol lar maxsus ma’noga ega: Symbol.iterator, Symbol.toPrimitive. Ular obyektning ichki xatti-harakatini o‘zgartiradi.',
        code: 'const massiv = [1, 2];\nconsole.log(typeof massiv[Symbol.iterator]); // "function"\nconsole.log([...massiv]); // iterator yordamida'
      },
      {
        title: '3. BigInt',
        text: 'Katta butun sonlar uchun: son oxiriga n qo‘yiladi yoki BigInt() chaqiriladi. Number bilan aralashtirib hisoblab bo‘lmaydi: TypeError.',
        code: 'const katta = 9007199254740993n;\nconsole.log(typeof katta); // "bigint"\nconsole.log(katta + 1n); // 9007199254740994n\n// console.log(katta + 1); // TypeError',
        note: 'Number 9007199254740993 ni 9007199254740992 qilib qo‘yadi (aniqlik yo‘qotish). BigInt buni to‘g‘ri saqlaydi.'
      },
      {
        title: '4. BigInt va taqqoslash',
        text: 'BigInt va Number keng tarqalgan taqqoslashda ishlaydi (==, <, >), lekin qat’iy tenglik (===) har doim false, chunki turlar farq qiladi.',
        code: 'console.log(1n == 1); // true\nconsole.log(1n === 1); // false\nconsole.log(1n < 2); // true\nconsole.log(BigInt(5)); // 5n'
      },
      {
        title: '5. JSON va BigInt',
        text: 'JSON.stringify BigInt ni qo‘llab-quvvatlamaydi: TypeError. Uni avval stringga aylantirish kerak.',
        code: '// JSON.stringify({ x: 1n }); // TypeError\nconsole.log(JSON.stringify({ x: "1" })); // ishlaydi'
      }
    ],
    takeaway: 'Symbol noyob identifikator; bir xil tavsif bilan ham teng emas.\nSymbol kalitlari Object.keys da ko\'rinmaydi.\nSymbol.iterator for...of mexanizmi.\nBigInt katta butun sonlar uchun: 123n.\nBigInt va Number aralash hisoblanmaydi (TypeError).\nJSON.stringify BigInt ni qo\'llab-quvvatlamaydi.',
    exercise: '1) Symbol("a") === Symbol("a") nima?\n2) Nega Symbol kalit Object.keys da yo\'q?\n3) 1n + 1 nima beradi?\n4) 1n === 1 va 1n == 1 farqi?'
  },
  {
    id: 'weakmap-weakset',
    title: 'WeakMap va WeakSet: noldan',
    question: 'WeakMap/WeakSet Map/Set dan qanday farq qiladi? Nega “weak”?',
    explanation: 'WeakMap va WeakSet faqat obyekt kalitlari/qiymatlarini saqlaydi va ularga “zaif” (weak) bog‘lanish qiladi. Agar obyekt boshqa joyda ishlatilmasa, chiqindi yig‘uvchi (garbage collector) uni olib tashlaydi. Bu xotira sizishining oldini oladi.',
    sections: [
      {
        title: '1. WeakMap asoslari',
        text: 'Kalit faqat obyekt bo‘lishi mumkin. size xususiyati yo‘q, iteratsiya qilib bo‘lmaydi. get/set/has/delete metodlari bor.',
        code: 'const wm = new WeakMap();\nconst obyekt = {};\nwm.set(obyekt, "ma\'lumot");\nconsole.log(wm.get(obyekt)); // ma\'lumot\nconsole.log(wm.has(obyekt)); // true\n// wm.size — yo\'q; for...of — ishlamaydi'
      },
      {
        title: '2. Nega “weak”?',
        text: 'Map obyektni qattiq ushlab turadi: u hech qayerda ishlatilmasa ham o‘chirilmaydi. WeakMap esa ushlab turmaydi: obyekt boshqa joyda yo‘qolsa, avtomatik o‘chadi.',
        code: 'let o = {};\nconst wm = new WeakMap();\nwm.set(o, 1);\no = null; // endi obyektga hech kim murojaat qilmaydi\n// WeakMap dagi yozuv ham avtomatik yo\'qoladi'
      },
      {
        title: '3. WeakSet',
        text: 'WeakSet faqat obyektlarni saqlaydi, takrorlarsiz. add/delete/has bor, iteratsiya yo‘q.',
        code: 'const ws = new WeakSet();\nconst o = {};\nws.add(o);\nconsole.log(ws.has(o)); // true\n// ws.add(1); // TypeError: faqat obyekt'
      },
      {
        title: '4. Qayerda ishlatiladi?',
        text: 'Obyektga qo‘shimcha ma’lumot biriktirish (masalan, kesh yoki “ishlangan” belgisi) va DOM elementlariga tegishli holat saqlash. Element DOM dan o‘chirilsa, ma’lumot ham o‘chadi.',
        code: 'const ishlangan = new WeakSet();\nfunction ishla(element) {\n  if (ishlangan.has(element)) return;\n  ishlangan.add(element);\n  // ishlash...\n}'
      },
      {
        title: '5. Cheklovlar',
        text: 'Iteratsiya yo‘q, size yo‘q, kalit faqat obyekt. Shuning uchun Map/Set o‘rniga faqat xotira muhim bo‘lganda tanlanadi.',
        code: '// wm.forEach — yo\'q\n// [...wm] — ishlamaydi\n// wm.keys() — yo\'q'
      }
    ],
    takeaway: 'WeakMap kaliti faqat obyekt; WeakSet faqat obyekt saqlaydi.\nZaif bog‘lanish: obyekt yo‘qolsa, yozuv ham o‘chadi.\nsize va iteratsiya yo‘q.\nXotira sizishining oldini oladi.\nDOM elementlariga holat biriktirish uchun qulay.',
    exercise: '1) WeakMap va Map farqi nima?\n2) Nega size yo‘q?\n3) wm.set(1, "x") ishlaydimi?\n4) WeakMap qayerda foydali?'
  },
  {
    id: 'object-descriptors',
    title: 'Obyekt descriptorlari: freeze, seal, defineProperty',
    question: 'Xususiyatni o‘chirib bo‘lmaslik, faqat o‘qish, Object.freeze va seal nima qiladi?',
    explanation: 'Har bir obyekt xususiyatining descriptorlari bor: value, writable, enumerable, configurable. Ularni Object.defineProperty bilan boshqarish mumkin. freeze va seal shu mexanizm ustiga qurilgan. Kod o‘qiyotganda “bu xususiyat o‘zgartirilishi mumkinmi?” deb so‘ra.',
    sections: [
      {
        title: '1. Descriptor nima?',
        text: 'Object.getOwnPropertyDescriptor obyekt xususiyati haqida ma’lumot beradi: qiymat, yozish mumkinmi, sanab o‘tiladimi, o‘chirish mumkinmi.',
        code: 'const o = { x: 1 };\nconsole.log(Object.getOwnPropertyDescriptor(o, "x"));\n// { value: 1, writable: true, enumerable: true, configurable: true }'
      },
      {
        title: '2. defineProperty',
        text: 'Xususiyatni maxsus qoidalar bilan yaratish yoki o‘zgartirish. writable: false — qiymat o‘zgartirilmaydi (strict mode da TypeError).',
        code: 'const o = {};\nObject.defineProperty(o, "x", {\n  value: 1,\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\nconsole.log(o.x); // 1\n// o.x = 2; // strict mode da TypeError'
      },
      {
        title: '3. Faqat o‘qish uchun',
        text: 'writable: false va configurable: false bilan o‘zgarmas xususiyat yaratiladi. Lekin obyekt ichidagi obyektlar o‘zgarishi mumkin (yuzaki).',
        code: 'const o = {};\nObject.defineProperty(o, "konstanta", { value: 42 });\n// default: writable: false, enumerable: false, configurable: false\nconsole.log(o.konstanta); // 42\nconsole.log(Object.keys(o)); // [] — sanab o\'tilmaydi'
      },
      {
        title: '4. Object.freeze',
        text: 'freeze barcha xususiyatlarni yozish va o‘chirishdan qulflaydi. Lekin chuqur emas: ichki obyektlar o‘zgaradi.',
        code: 'const o = { x: 1, ichki: { y: 2 } };\nObject.freeze(o);\no.x = 5; // ishlamaydi\no.ichki.y = 9; // ishlaydi — yuzaki\nconsole.log(Object.isFrozen(o)); // true'
      },
      {
        title: '5. Object.seal',
        text: 'seal yangi xususiyat qo‘shish va o‘chirishni taqiqlaydi, lekin mavjudlarini o‘zgartirishga ruxsat beradi.',
        code: 'const o = { x: 1 };\nObject.seal(o);\no.x = 2; // ishlaydi\no.y = 3; // ishlamaydi\ndelete o.x; // ishlamaydi\nconsole.log(Object.isSealed(o)); // true'
      },
      {
        title: '6. preventExtensions',
        text: 'Faqat yangi xususiyat qo‘shishni taqiqlaydi. Mavjudlari o‘zgaradi va o‘chiriladi.',
        code: 'const o = { x: 1 };\nObject.preventExtensions(o);\no.y = 2; // ishlamaydi\ndelete o.x; // ishlaydi'
      }
    ],
    takeaway: 'Descriptor: value, writable, enumerable, configurable.\ndefineProperty bilan xususiyat qoidalarini belgilash mumkin.\nfreeze — yozish va o‘chirishni taqiqlaydi, lekin yuzaki.\nseal — qo‘shish/o‘chirishni taqiqlaydi, o‘zgartirishga ruxsat.\npreventExtensions — faqat yangi qo‘shishni taqiqlaydi.',
    exercise: '1) freeze dan keyin ichki obyekt o‘zgaradimi?\n2) seal va freeze farqi?\n3) defineProperty da default writable nima?\n4) preventExtensions nima taqiqlaydi?'
  },
  {
    id: 'dynamic-import-async-iteration',
    title: 'Dynamic import va async iteratsiya',
    question: 'import() nima? for await...of qanday ishlaydi?',
    explanation: 'Oddiy import statik: fayl yuklanishida bajariladi. Dynamic import() — funksiya sifatida, kerak paytda modulni yuklaydi va Promise qaytaradi. for await...of esa asinxron iteratorlarni ketma-ket o‘qish uchun ishlatiladi.',
    sections: [
      {
        title: '1. Dynamic import',
        text: 'import("./modul.js") chaqirilganda modul yuklanadi va Promise qaytaradi. Kodning faqat kerakli qismida yuklash (lazy loading) uchun ishlatiladi.',
        code: 'async function yukla() {\n  const modul = await import("./math.js");\n  console.log(modul.yig(1, 2));\n}\nyukla();\n\n// yoki:\nimport("./math.js").then(m => console.log(m.PI));'
      },
      {
        title: '2. Nega foydali?',
        text: 'Katta modullarni dastlab yuklamay, faqat foydalanuvchi kerak qilganda olish: dastlabki yuklanish tezlashadi. Shartli yuklash ham mumkin.',
        code: 'if (kerak) {\n  const { ishla } = await import("./kattamodul.js");\n  ishla();\n}'
      },
      {
        title: '3. Async generator',
        text: 'async function* bilan asinxron generator yaratiladi. yield bilan qiymat beriladi, lekin await ham ishlatish mumkin.',
        code: 'async function* sonlar() {\n  yield 1;\n  await new Promise(r => setTimeout(r, 100));\n  yield 2;\n}\nconst g = sonlar();\nconsole.log(await g.next()); // { value: 1, done: false }'
      },
      {
        title: '4. for await...of',
        text: 'Asinxron iteratorni ketma-ket o‘qish uchun. Har qadam Promise bajarilishini kutadi. Oddiy for...of asinxron iteratorni to‘g‘ri o‘qiy olmaydi.',
        code: 'async function* ketma() {\n  yield Promise.resolve(1);\n  yield Promise.resolve(2);\n}\nfor await (const qiymat of ketma()) {\n  console.log(qiymat); // 1, keyin 2\n}'
      },
      {
        title: '5. Amaliy: fayl oqimi',
        text: 'Node.js da oqimlar (stream) va brauzerda katta ma’lumotlar bilan ishlashda for await...of qulay.',
        code: '// for await (const bolak of readStream) {\n//   ishla(bolak);\n// }'
      }
    ],
    takeaway: 'import() modulni kerak paytda yuklaydi va Promise qaytaradi.\nLazy loading va shartli yuklash uchun ishlatiladi.\nasync function* asinxron generator yaratadi.\nfor await...of asinxron iteratorni ketma-ket o‘qiydi.\nOddiy for...of asinxron iterator uchun yaramaydi.',
    exercise: '1) import() va oddiy import farqi?\n2) import() nima qaytaradi?\n3) for await...of qachon kerak?\n4) async function* nima yaratadi?'
  },
  {
    id: 'promise-combinators',
    title: 'Promise kombinatorlari: all, race, allSettled, any',
    question: 'Promise.all, race, allSettled va any farqi nima? Qaysi birini qachon ishlatish kerak?',
    explanation: 'Bu metodlar bir nechta Promise ni birlashtiradi. Farqi: qachon bajariladi va xatoga qanday munosabat qiladi. Intervyuda to‘rttasini farqlash ko‘p so‘raladi.',
    sections: [
      {
        title: '1. Promise.all',
        text: 'Barchasi bajarilsa, natijalar massivini qaytaradi. Birortasi rad etilsa, darhol shu xato bilan rad etiladi.',
        code: 'console.log(await Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n])); // [1, 2]\n\n// Promise.all([Promise.resolve(1), Promise.reject("xato")])\n// → rad etiladi: "xato"'
      },
      {
        title: '2. Promise.race',
        text: 'Birinchisi tugagan (bajarilgan yoki rad etilgan) natijani qaytaradi. Qolganlar kutilmaydi. Timeout bilan ishlatish uchun qulay.',
        code: 'const sekin = new Promise(r => setTimeout(() => r("sekin"), 100));\nconst tez = new Promise(r => setTimeout(() => r("tez"), 10));\nconsole.log(await Promise.race([sekin, tez])); // tez'
      },
      {
        title: '3. Promise.allSettled',
        text: 'Barchasini kutadi, lekin xatolarda rad etilmaydi. Har birining holati va natijasini qaytaradi: { status: "fulfilled", value } yoki { status: "rejected", reason }.',
        code: 'console.log(await Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject("xato")\n]));\n// [{status:"fulfilled",value:1}, {status:"rejected",reason:"xato"}]'
      },
      {
        title: '4. Promise.any',
        text: 'Birinchisi muvaffaqiyatli bajarilgan natijani qaytaradi. Hammasi rad etilsa, AggregateError beradi. race dan farqi: rad etishlarni e\'tiborga olmaydi.',
        code: 'console.log(await Promise.any([\n  Promise.reject("birinchi xato"),\n  Promise.resolve("muvaffaqiyat")\n])); // muvaffaqiyat'
      },
      {
        title: '5. Timeout namunasi',
        text: 'race bilan so‘rovga vaqt cheklovi qo‘yish mumkin: vaqt tugasa, rad etilgan Promise yutadi.',
        code: 'const timeout = new Promise((_, reject) =>\n  setTimeout(() => reject(new Error("vaqt tugadi")), 1000)\n);\ntry {\n  await Promise.race([fetch("/api"), timeout]);\n} catch (e) {\n  console.log(e.message); // vaqt tugadi bo\'lishi mumkin\n}'
      }
    ],
    takeaway: 'all — hammasi bajarilsa natija, bitta xato → rad.\nrace — birinchisi tugagani (xato ham bo\'lishi mumkin).\nallSettled — hammasini kutadi, holatlarni qaytaradi.\nany — birinchisi muvaffaqiyatli bo\'lgani; hammasi xato → AggregateError.\nrace bilan timeout yozish qulay.',
    exercise: '1) all va allSettled farqi?\n2) race va any farqi nima?\n3) Hammasi rad etilsa, any nima beradi?\n4) Timeout uchun qaysi kombinator ishlatiladi?'
  }
);
