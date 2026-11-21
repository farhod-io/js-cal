// JS INTERMEDIATE — 1-qism: prototype, class, callback, iterator/generator, Map/Set, regex.
window.lessons.push(
  {
    id: 'prototypes',
    title: 'Prototype va prototip zanjiri: noldan',
    question: 'Har bir obyekt qayerdan metod oladi? __proto__, prototype va prototip zanjiri nima?',
    explanation: 'JavaScript’da har bir obyekt boshqa obyektdan xususiyat meros qilib oladi. Bu mexanizm prototip zanjiri deb ataladi. Kod o‘qiyotganda obyektda kalit topilmasa, qidiruv yuqoriga — prototipga davom etadi.',
    sections: [
      {
        title: '1. Prototip zanjiri',
        text: 'Obyektda xususiyat topilmasa, JavaScript uning prototipida qidiradi, u yerda yo‘q bo‘lsa yana yuqoriga chiqadi. Zanjir oxirida null turadi. Shuning uchun oddiy obyekt toString metodiga ega bo‘ladi.',
        code: 'const o = {};\nconsole.log(o.toString()); // [object Object]\nconsole.log(o.__proto__ === Object.prototype); // true\nconsole.log(Object.prototype.__proto__); // null',
        note: '__proto__ eski usul; zamonaviy kodda Object.getPrototypeOf(o) ishlatiladi.'
      },
      {
        title: '2. Funksiya va prototype',
        text: 'Har bir funksiyada prototype xususiyati bor. new bilan obyekt yaratilganda, uning prototipi shu funksiyaning prototype obyektiga bog‘lanadi.',
        code: 'function F() {}\nconst o = new F();\nconsole.log(Object.getPrototypeOf(o) === F.prototype); // true'
      },
      {
        title: '3. Metodlarni prototype ga qo‘yish',
        text: 'Agar metodni har bir obyekt ichiga yozsak, har biri uchun alohida nusxa yaratiladi. Prototype ga qo‘ysak, barcha obyektlar bitta metodni ulashadi.',
        code: 'function User(ism) {\n  this.ism = ism;\n}\nUser.prototype.salom = function () {\n  return "Salom, " + this.ism;\n};\n\nconst a = new User("Ali");\nconst b = new User("Vali");\nconsole.log(a.salom()); // Salom, Ali\nconsole.log(a.salom === b.salom); // true (bitta metod)'
      },
      {
        title: '4. new operatori qanday ishlaydi',
        text: 'new F() to‘rt ish qiladi: yangi bo‘sh obyekt yaratadi; uning prototipini F.prototype ga bog‘laydi; F ni this bilan chaqiradi; agar F obyekt qaytarmasa, yangi obyektni qaytaradi.',
        code: 'function F(x) {\n  this.x = x;\n}\nconst o = new F(5);\nconsole.log(o.x); // 5\nconsole.log(o instanceof F); // true',
        note: 'instanceof obyekt prototip zanjirida F.prototype borligini tekshiradi.'
      },
      {
        title: '5. Xususiyat yozish va prototip',
        text: 'Obyektga yangi xususiyat yozilsa, u har doim obyektning o‘ziga qo‘yiladi, prototipga emas. Prototipdagi xususiyat soyada qoladi (shadowing).',
        code: 'function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log(o.x); // 1 (prototipdan)\no.x = 2;\nconsole.log(o.x); // 2 (o‘ziga yozildi)\nconsole.log(F.prototype.x); // 1 (prototip o‘zgarmadi)'
      },
      {
        title: '6. hasOwn va zanjir',
        text: 'in operatori ham o‘z, ham prototip xususiyatlarini topadi. Object.hasOwn faqat obyektning o‘zidagini tekshiradi.',
        code: 'function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log("x" in o); // true\nconsole.log(Object.hasOwn(o, "x")); // false\nconsole.log(Object.hasOwn(o, "toString")); // false'
      }
    ],
    takeaway: 'Qidiruv obyektdan prototipga, oxirida null gacha davom etadi.\nF.prototype — new bilan yaratilgan obyektlarning prototipi.\nMetodlarga prototype orqali bitta nusxa berish yaxshi.\nnew: obyekt yaratadi, prototip bog‘laydi, this bilan chaqiradi.\nYozish har doim obyektning o‘ziga bo‘ladi.\nin zanjirni, Object.hasOwn faqat o‘zini tekshiradi.',
    exercise: '1) o.toString() qayerdan keldi?\n2) new F() qanday 4 ish qiladi?\n3) "x" in o va Object.hasOwn(o,"x") farqi?\n4) Prototype ga metod qo‘yish nega yaxshi?'
  },
  {
    id: 'classes',
    title: 'Class va meros: noldan',
    question: 'class nima? constructor, metodlar, extends va super qanday ishlaydi?',
    explanation: 'class — prototype mexanizmining qulay yozuv shakli. U yangi tur yaratmaydi, balki funksiya va prototip ustiga qurilgan sintaksis shakaridir. Kod o‘qiyotganda constructor va super chaqiruvlarini kuzat.',
    sections: [
      {
        title: '1. Oddiy class',
        text: 'class ichida constructor yoziladi: u new bilan obyekt yaratilganda chaqiriladi. this yangi obyektni ko‘rsatadi. Metodlar class ichida yozilsa, avtomatik prototype ga qo‘yiladi.',
        code: 'class User {\n  constructor(ism) {\n    this.ism = ism;\n  }\n  salom() {\n    return "Salom, " + this.ism;\n  }\n}\nconst u = new User("Ali");\nconsole.log(u.salom()); // Salom, Ali\nconsole.log(typeof User); // "function"'
      },
      {
        title: '2. new bo‘lmasa xato',
        text: 'Class funksiyalardan farqli ravishda new bo‘lmasa chaqirilmaydi: TypeError chiqadi. Bu xatolardan saqlaydi.',
        code: 'class F {}\n// F(); // TypeError: Class constructor cannot be invoked without "new"\nconsole.log(new F() instanceof F); // true'
      },
      {
        title: '3. extends va super',
        text: 'extends bilan boshqa classdan meros olinadi.Constructor ichida super() chaqirilishi shart: u ota class constructorini bajaradi va this ni yaratadi.',
        code: 'class Hayvon {\n  constructor(ism) { this.ism = ism; }\n  ovoz() { return "..."; }\n}\nclass It extends Hayvon {\n  constructor(ism) {\n    super(ism); // ota constructor chaqiruvi\n  }\n  ovoz() { return "Hav-hav"; }\n}\nconst it = new It("Rex");\nconsole.log(it.ovoz()); // Hav-hav\nconsole.log(it.ism); // Rex'
      },
      {
        title: '4. Metodni qayta yozish (override)',
        text: 'Bola classdagi metod ota classdagi metodni soyada qoldiradi. Ota metodini chaqirish uchun super.ovoz() ishlatiladi.',
        code: 'class Bola extends Ota {\n  salom() {\n    return super.salom() + " va bola";\n  }\n}'
      },
      {
        title: '5. Static metodlar',
        text: 'static bilan e’lon qilingan metod obyektga emas, classning o‘ziga tegishli. new bilan yaratilgan obyektda ko‘rinmaydi.',
        code: 'class F {\n  static yarat() { return new F(); }\n}\nconst o = F.yarat();\n// o.yarat(); // TypeError: metod yo\'q'
      },
      {
        title: '6. Getter va setter',
        text: 'get/set bilan xususiyatga murojaat qilishda funksiya chaqiriladi. get qiymat qaytaradi, set esa qiymat oladi. Tashqaridan oddiy xususiyat kabi ko‘rinadi.',
        code: 'class User {\n  constructor(ism) { this._ism = ism; }\n  get ism() { return this._ism.toUpperCase(); }\n  set ism(v) { this._ism = v; }\n}\nconst u = new User("ali");\nconsole.log(u.ism); // ALI\nu.ism = "vali";\nconsole.log(u.ism); // VALI'
      }
    ],
    takeaway: 'class — prototype ustiga qurilgan sintaksis; typeof class = "function".\nconstructor new bilan chaqiriladi; this yangi obyekt.\nextends meros, super() ota constructorini chaqiradi.\nMetod override qilinganda super.metod() bilan ota metodiga murojaat.\nstatic metod classga tegishli, obyektga emas.\nget/set xususiyat kabi ko‘rinib, funksiya chaqiradi.',
    exercise: '1) class ni new bo‘lmasa chaqirsang nima bo‘ladi?\n2) super() nega shart?\n3) static metod obyektda ko‘rinadimi?\n4) get ism() qanday chaqiriladi?'
  },
  {
    id: 'callbacks',
    title: 'Callback va yuqori darajali funksiyalar: noldan',
    question: 'Callback nima? Funksiyani boshqa funksiyaga argument qilib berish qanday ishlaydi?',
    explanation: 'Callback — keyincha chaqirish uchun boshqa funksiyaga berilgan funksiya. JavaScript’da funksiyalar birinchi darajali qiymat: ularni o‘zgaruvchiga saqlash, argument qilish va qaytarish mumkin. Bu ko‘p metodlarning (map, filter, setTimeout) asosi.',
    sections: [
      {
        title: '1. Funksiya — qiymat',
        text: 'Funksiyani o‘zgaruvchiga saqlash mumkin. Uni chaqirish uchun nomi bilan () qo‘yiladi. Funksiya qaytarish ham mumkin.',
        code: 'const salom = function () { return "Salom"; };\nconsole.log(salom()); // Salom\n\nfunction tashqi() {\n  return function () { return "ichki"; };\n}\nconsole.log(tashqi()()); // ichki'
      },
      {
        title: '2. Callback sifatida berish',
        text: 'Funksiyani boshqa funksiyaga argument qilib berish mumkin. Qabul qiluvchi funksiya uni kerak paytda chaqiradi.',
        code: 'function ishla(callback) {\n  console.log("boshlandi");\n  callback();\n  console.log("tugadi");\n}\nishla(() => console.log("callback ishladi"));\n// boshlandi, callback ishladi, tugadi'
      },
      {
        title: '3. setTimeout bilan callback',
        text: 'setTimeout ikkinchi argument sifatida funksiya oladi va uni keyincha chaqiradi. Funksiyani darhol chaqirib yubormaslik kerak: setTimeout(fn, 0) to‘g‘ri, setTimeout(fn(), 0) noto‘g‘ri.',
        code: 'const fn = () => console.log("keyin");\nsetTimeout(fn, 1000); // to\'g\'ri: funksiya berildi\n// setTimeout(fn(), 1000); // noto\'g\'ri: natijasi berildi',
        note: 'fn() yozilsa funksiya darhol bajarilib, uning natijasi (undefined) setTimeout ga beriladi.'
      },
      {
        title: '4. Array metodlarida callback',
        text: 'map, filter, reduce, forEach callback oladi. Callback har element uchun chaqiriladi. uning qaytargan qiymati metod natijasiga ta’sir qiladi.',
        code: 'const a = [1, 2, 3];\na.forEach(x => console.log(x)); // yon ta\'sir\nconst b = a.map(x => x * 2); // qaytargan qiymat ishlatiladi\nconsole.log(b); // [2,4,6]'
      },
      {
        title: '5. Callback tartibi va this',
        text: 'Oddiy funksiya callback sifatida berilsa, ichidagi this yo‘qolishi mumkin. Arrow funksiya yaratilgan joydagi this ni saqlaydi, shuning uchun ko‘pincha qulay.',
        code: 'const o = {\n  x: 10,\n  ishla() {\n    [1].forEach(function () { console.log(this); }); // undefined (strict)\n    [1].forEach(() => console.log(this.x)); // 10\n  }\n};\no.ishla();'
      },
      {
        title: '6. Callback hell',
        text: 'Bir nechta callback ichma-ich yozilsa, kod o‘qish qiyinlashadi (callback hell). Buning o‘rniga Promise va async/await ishlatiladi.',
        code: '// qiyin o\'qiladi:\nsetTimeout(() => {\n  setTimeout(() => {\n    setTimeout(() => console.log("tugadi"), 100);\n  }, 100);\n}, 100);\n\n// zamonaviy:\nasync function ketma() {\n  await new Promise(r => setTimeout(r, 100));\n  console.log("tugadi");\n}'
      }
    ],
    takeaway: 'Funksiya — oddiy qiymat: saqlash, berish, qaytarish mumkin.\nCallback keyincha chaqirish uchun beriladi.\nsetTimeout(fn, 0) to‘g‘ri; setTimeout(fn(), 0) noto‘g‘ri.\nmap/filter/forEach callback qaytargan qiymatni turli ishlatadi.\nArrow callback this ni saqlaydi.\nIchma-ich callback o‘rniga Promise/async yaxshi.',
    exercise: '1) setTimeout(fn, 0) va setTimeout(fn(), 0) farqi?\n2) map va forEach callback natijasini qanday ishlatadi?\n3) Nega arrow callback this ni saqlaydi?\n4) Callback hell nima va unga yechim?'
  },
  {
    id: 'iterators-generators',
    title: 'Iterator va generator: noldan',
    question: 'for...of qanday ishlaydi? Symbol.iterator, next() va function* nima?',
    explanation: 'for...of faqat iteratsiya qilinadigan obyektlarda ishlaydi. Bunday obyektning Symbol.iterator metodi bor: u iterator qaytaradi, iterator esa next() bilan ketma-ket qiymatlar beradi. Generator shu mexanizmni oson yozish usulidir.',
    sections: [
      {
        title: '1. Iterator qanday ishlaydi',
        text: 'Iterator next() metodi bilan { value, done } qaytaradi. done true bo‘lganda tugagan hisoblanadi. for...of aynan shu metodlarni chaqiradi.',
        code: 'const a = [10, 20];\nconst it = a[Symbol.iterator]();\nconsole.log(it.next()); // { value: 10, done: false }\nconsole.log(it.next()); // { value: 20, done: false }\nconsole.log(it.next()); // { value: undefined, done: true }'
      },
      {
        title: '2. Qaysi obyektlar iteratsiya qilinadi?',
        text: 'Massiv, string, Map, Set iteratsiya qilinadi. Oddiy obyekt esa yo‘q: for...in bilan kalitlarni olish mumkin, lekin for...of ishlamaydi.',
        code: '// for (const x of { a: 1 }) {} // TypeError\nfor (const x of "Ali") console.log(x); // A, l, i\nfor (const x of new Set([1, 2])) console.log(x); // 1, 2'
      },
      {
        title: '3. Generator',
        text: 'function* va yield bilan o‘zi iterator yaratish mumkin. Generator chaqirilganda darhol bajarilmaydi: next() chaqirilganda yield gacha bajarilib to‘xtaydi.',
        code: 'function* sonlar() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = sonlar();\nconsole.log(g.next()); // { value: 1, done: false }\nconsole.log([...g]); // [2, 3] — qolganlari'
      },
      {
        title: '4. Cheksiz ketma-ketlik',
        text: 'Generator bilan cheksiz ketma-ketlik yaratish mumkin: faqat kerakli qiymatlar olinadi. Lekin [...g] cheksiz bo‘lsa, hech tugamaydi — ehtiyot bo‘lish kerak.',
        code: 'function* cheksiz() {\n  let i = 1;\n  while (true) yield i++;\n}\nconst g = cheksiz();\nconsole.log(g.next().value); // 1\nconsole.log(g.next().value); // 2\n// console.log([...g]); // cheksiz — hech qachon tugamaydi'
      },
      {
        title: '5. yield bilan ma’lumot olish',
        text: 'next(argument) berilgan qiymat oxirgi yield natijasiga aylanadi. Bu generatorga tashqaridan ma’lumot yuborish imkonini beradi.',
        code: 'function* suhbat() {\n  const ism = yield "Ismingiz?";\n  return "Salom, " + ism;\n}\nconst g = suhbat();\nconsole.log(g.next().value); // Ismingiz?\nconsole.log(g.next("Ali").value); // Salom, Ali'
      }
    ],
    takeaway: 'for...of Symbol.iterator va next() asosida ishlaydi.\nnext() { value, done } qaytaradi.\nMassiv/string/Map/Set iteratsiya qilinadi, oddiy obyekt yo‘q.\nfunction* + yield generator yaratadi; u next() bilan qadam-baqadam ishlaydi.\nCheksiz generator bilan ehtiyot bo‘l.',
    exercise: '1) [1][Symbol.iterator]().next() nima qaytaradi?\n2) Nega for...of oddiy obyektda ishlamaydi?\n3) Generator chaqirilganda darhol bajariladimi?\n4) yield nima qiladi?'
  },
  {
    id: 'map-set',
    title: 'Map va Set: noldan',
    question: 'Map va Set nima? Oddiy obyekt va massivdan farqi nima?',
    explanation: 'Map — ixtiyoriy turdagi kalitlarga ega kalit-qiymat to‘plami. Set — noyob qiymatlar to‘plami. Ularning oddiy obyekt va massivdan farqi: kalit turi, tartib va qidirish tezligi.',
    sections: [
      {
        title: '1. Map asoslari',
        text: 'new Map() bilan yaratiladi. set(kalit, qiymat) qo‘shadi, get(kalit) oladi, has(kalit) tekshiradi, delete o‘chiradi. Kalit ixtiyoriy tur bo‘lishi mumkin: obyekt ham.',
        code: 'const m = new Map();\nm.set("ism", "Ali");\nm.set(1, "son");\nconsole.log(m.get("ism")); // Ali\nconsole.log(m.has(1)); // true\nconsole.log(m.size); // 2'
      },
      {
        title: '2. Map vs obyekt',
        text: 'Obyekt kalitlari faqat string/symbol bo‘ladi. Map da ixtiyoriy kalit bo‘ladi. Map tartibni saqlaydi va size xususiyatiga ega. Obyekt esa kalitlarni prototip zanjiri bilan aralashtirishi mumkin.',
        code: 'const k = { id: 1 };\nconst m = new Map();\nm.set(k, "foydalanuvchi");\nconsole.log(m.get(k)); // ishlaydi — obyekt kalit\n\nconst o = {};\no[k] = "foydalanuvchi";\nconsole.log(o["[object Object]"]); // obyekt stringga aylandi'
      },
      {
        title: '3. Set asoslari',
        text: 'Set faqat noyob qiymatlar saqlaydi. Bir xil qiymat ikkinchi marta qo‘shilsa, e’tiborga olinmaydi. Takrorlarni olib tashlash uchun juda qulay.',
        code: 'const s = new Set([1, 2, 2, 3]);\nconsole.log(s); // Set { 1, 2, 3 }\nconsole.log(s.size); // 3\ns.add(4);\nconsole.log(s.has(3)); // true'
      },
      {
        title: '4. Takrorlarni olib tashlash',
        text: 'Massivdagi takrorlarni [...new Set(arr)] bilan olib tashlash mumkin. E’tibor: obyektlar reference bo‘yicha solishtiriladi, shuning uchun tarkibi bir xil ikki obyekt ikki xil hisoblanadi.',
        code: 'console.log([...new Set([1, 2, 2, 3])]); // [1,2,3]\nconsole.log(new Set([{ a: 1 }, { a: 1 }]).size); // 2'
      },
      {
        title: '5. Iteratsiya',
        text: 'Map va Set for...of bilan ishlaydi. Map har bir qadamda [kalit, qiymat] juftligini beradi. Shuningdek, forEach metodi ham bor.',
        code: 'const m = new Map([["a", 1], ["b", 2]]);\nfor (const [k, v] of m) console.log(k, v);\n\nconst s = new Set([1, 2]);\nfor (const v of s) console.log(v);'
      },
      {
        title: '6. Qachon nima tanlash?',
        text: 'Kalit-qiymat va ixtiyoriy kalit kerak bo‘lsa Map. Faqat noyob qiymatlar kerak bo‘lsa Set. Oddiy ma’lumot va kalitlar string bo‘lsa, obyekt yetarli.',
        code: '// oddiy sozlamalar — obyekt yetarli\nconst sozlamalar = { til: "uz", mavzu: "qorong\'u" };\n// tez-tez qo\'shish/o\'chirish va obyekt kalit — Map\nconst keshlash = new Map();'
      }
    ],
    takeaway: 'Map — ixtiyoriy kalitli kalit-qiymat to‘plami, size bor.\nSet — noyob qiymatlar to‘plami.\n[...new Set(arr)] takrorlarni olib tashlaydi.\nMap/Set for...of bilan iteratsiya qilinadi.\nObyektlar Set da reference bo‘yicha solishtiriladi.',
    exercise: '1) Map va obyekt farqi nima?\n2) new Set([1,2,2]).size nima?\n3) new Set([{a:1},{a:1}]).size nima va nega?\n4) Takrorlarni qanday olib tashlaysiz?'
  },
  {
    id: 'regex-basics',
    title: 'Regex: noldan',
    question: 'Regex nima? test, match, replace va asosiy naqsh belgilari.',
    explanation: 'Regex (regular expression) — matn ichida naqsh qidirish uchun maxsus til. Kod o‘qiyotganda /.../ ichidagi belgilarni kichik qismlarga ajratib o‘qish kerak. Bu murakkab ko‘rinadi, lekin asosiy belgilarni bilsang tushunish oson.',
    sections: [
      {
        title: '1. Yaratish va test',
        text: 'Regex /naqsh/ bilan yoki new RegExp("naqsh") bilan yaratiladi. .test(string) mos kelishini true/false qaytaradi.',
        code: 'const r = /Ali/;\nconsole.log(r.test("Salom Ali")); // true\nconsole.log(r.test("Salom Vali")); // false'
      },
      {
        title: '2. Asosiy belgilar',
        text: '. — ixtiyoriy bitta belgi; \\d — raqam; \\w — harf/raqam/_; \\s — bo‘shliq; ^ — satr boshi; $ — satr oxiri; + — bir yoki undan ko‘p; * — nol yoki undan ko‘p; ? — nol yoki bitta.',
        code: 'console.log(/\\d/.test("abc1")); // true (raqam bor)\nconsole.log(/^Ali/.test("Ali vali")); // true (boshida)\nconsole.log(/ali$/i.test("Salom Ali")); // true (oxiri, i — kichik katta harf farqini yo\'q qiladi)\nconsole.log(/a+/.test("aaa")); // true'
      },
      {
        title: '3. Kvadrat qavs va oraliq',
        text: '[abc] — a, b yoki c; [0-9] — raqam; [a-z] — kichik harf; [^0-9] — raqam bo‘lmagan. {3} — aynan 3 marta, {2,5} — 2 dan 5 gacha.',
        code: 'console.log(/[0-9]{3}/.test("a123b")); // true\nconsole.log(/^[a-z]+$/.test("salom")); // true (faqat kichik harflar)\nconsole.log(/[^0-9]/.test("123")); // false'
      },
      {
        title: '4. match va replace',
        text: 'string.match(regex) mosliklarni qaytaradi (g flag bo‘lsa hammasini). string.replace(regex, yangi) moslarni almashtiradi.',
        code: 'console.log("a1 b2 c3".match(/\\d/g)); // ["1","2","3"]\nconsole.log("ali vali".replace(/ali/gi, "Ali")); // "Ali Vali"\nconsole.log("a,b,c".replace(/,/g, ";")); // "a;b;c"'
      },
      {
        title: '5. Guruhlar',
        text: 'Qavs (...) guruh yaratadi. Ular match natijasida alohida ko‘rinadi va replace da $1, $2 bilan ishlatiladi.',
        code: 'const m = "2026-11-21".match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(m[1], m[2], m[3]); // 2026 11 21\nconsole.log("Ali Vali".replace(/(\\w+) (\\w+)/, "$2 $1")); // "Vali Ali"'
      },
      {
        title: '6. Ehtiyot bo‘lish',
        text: 'Regex kuchli, lekin o‘qish qiyin. Oddiy tekshirish uchun includes, startsWith kabi metodlar yetarli. Foydalanuvchi kiritgan matndan regex yaratishda ehtiyot bo‘lish kerak.',
        code: '// oddiy holatda regex kerak emas:\nconsole.log("salom".includes("sal")); // true\nconsole.log("fayl.txt".endsWith(".txt")); // true'
      }
    ],
    takeaway: '/naqsh/ va .test() moslikni tekshiradi.\n\\d raqam, \\w harf/raqam, ^ bosh, $ oxir, + bir yoki ko‘p.\n[0-9] raqam, {3} aynan 3 marta, i flag katta-kichikni farqlamaydi.\nmatch mosliklarni, replace almashtiradi; g — barcha mosliklar.\nQavs guruh yaratadi: $1, $2 bilan ishlatiladi.',
    exercise: '1) /\\d/.test("abc") nima?\n2) ^ va $ nima anglatadi?\n3) "a1b2".match(/\\d/g) natijasi?\n4) g flag nima qiladi?'
  }
);
