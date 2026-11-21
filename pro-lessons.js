// Node.js + Design patternlar + Testing: intervyuda keyingi eng ko'p tushadigan mavzular.
window.lessons.push(
  {
    id: 'node-basics',
    title: 'Node.js asoslari: require, ESM, process',
    question: 'Node.js nima? CommonJS va ESM farqi? process va global obyektlar nima?',
    explanation: 'Node.js — JavaScript’ni brauzersiz, serverda ishga tushiradigan muhit. Uning o‘z global obyektlari bor: process, Buffer, require. Kod o‘qiyotganda avval modul tizimini aniqla: require (CommonJS) yoki import (ESM).',
    sections: [
      {
        title: '1. CommonJS: require va module.exports',
        text: 'Node.js ning eski va hali ham keng tarqalgan modul tizimi. module.exports bilan eksport qilinadi, require() bilan olinadi. require sinxron bajariladi.',
        code: '// math.js\nmodule.exports = { yig(a, b) { return a + b; } };\n\n// app.js\nconst math = require("./math.js");\nconsole.log(math.yig(1, 2)); // 3'
      },
      {
        title: '2. ESM: import va export',
        text: 'Zamonaviy standart. Fayl .mjs bo‘lsa yoki package.json da "type": "module" bo‘lsa ishlaydi. import asinxron yuklanadi va faqat yuqorida yoziladi.',
        code: '// package.json: { "type": "module" }\n// math.js\nexport const yig = (a, b) => a + b;\n\n// app.js\nimport { yig } from "./math.js";\nconsole.log(yig(1, 2));'
      },
      {
        title: '3. Ikki tizimni aralashtirmaslik',
        text: 'Bir faylda require va import ni birga ishlatish xato beradi. Loyihada bitta tizim tanlanadi.',
        code: '// import x from "x";\n// const y = require("y"); // SyntaxError'
      },
      {
        title: '4. process obyekti',
        text: 'process — joriy Node.js jarayoni. process.argv komanda satri argumentlari, process.env muhit o‘zgaruvchilari, process.exit() jarayonni tugatadi.',
        code: 'console.log(process.argv); // [node, fayl, arg1, ...]\nconsole.log(process.env.NODE_ENV); // "production" bo\'lishi mumkin\nconsole.log(process.platform); // "darwin", "win32", "linux"\n// process.exit(1); // xato kodi bilan tugatish'
      },
      {
        title: '5. __dirname va __filename',
        text: 'CommonJS da joriy fayl va papka yo‘li bor. ESM da ular yo‘q: import.meta.url ishlatiladi.',
        code: '// CommonJS:\nconsole.log(__dirname);\nconsole.log(__filename);\n\n// ESM:\nconsole.log(import.meta.url);'
      }
    ],
    takeaway: 'CommonJS: require + module.exports, sinxron.\nESM: import + export, asinxron, package.json type module.\nIkkisini bir faylda aralashtirib bo\'lmaydi.\nprocess argv/env/exit/platform beradi.\n__dirname CommonJS da, ESM da import.meta.url.',
    exercise: '1) require va import farqi nima?\n2) process.argv nima beradi?\n3) ESM da __dirname o\'rniga nima ishlatiladi?\n4) Nega ikki tizimni aralashtirish xato?'
  },
  {
    id: 'node-fs-path',
    title: 'Node.js: fs va path bilan ishlash',
    question: 'Fayl o‘qish/yozish qanday? sync, callback va Promise farqi? path nima qiladi?',
    explanation: 'fs moduli fayllar bilan ishlaydi: o‘qish, yozish, o‘chirish. Har bir amal uchun uch xil shakl bor: sinxron (Sync), callback va Promise (fs/promises). path esa yo‘llarni boshqarish uchun, turli OS larda to‘g‘ri ishlaydi.',
    sections: [
      {
        title: '1. Uch usul',
        text: 'readFileSync darhol natija qaytaradi va boshqa kodni bloklaydi. readFile callback oladi. fs/promises dagi readFile Promise qaytaradi — zamonaviy usul.',
        code: 'const fs = require("fs");\n\n// sinxron (bloklaydi):\nconst matn = fs.readFileSync("fayl.txt", "utf8");\n\n// callback:\nfs.readFile("fayl.txt", "utf8", (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Promise (zamonaviy):\nconst fsProm = require("fs/promises");\nconst data = await fsProm.readFile("fayl.txt", "utf8");'
      },
      {
        title: '2. Yozish',
        text: 'writeFile faylga yozadi. Agar fayl bor bo‘lsa, ustiga yozadi. flags bilan qo‘shimcha qilish mumkin.',
        code: 'await fsProm.writeFile("natija.txt", "Salom");\nawait fsProm.appendFile("natija.txt", "\\nYana satr");\nawait fsProm.mkdir("papka", { recursive: true });\nawait fsProm.unlink("fayl.txt"); // o\'chirish'
      },
      {
        title: '3. Xatolarni tekshirish',
        text: 'Fayl yo‘q bo‘lsa, xato yuz beradi. Callback da err birinchi argument, Promise da try/catch ishlatiladi.',
        code: 'try {\n  const d = await fsProm.readFile("yoq.txt", "utf8");\n} catch (e) {\n  console.log(e.code); // ENOENT\n}'
      },
      {
        title: '4. path moduli',
        text: 'path.join qismlarni to‘g‘ri ajratgich bilan birlashtiradi. path.resolve mutlaq yo‘l yaratadi. path.extname kengaytmani oladi.',
        code: 'const path = require("path");\nconsole.log(path.join("papka", "fayl.txt")); // papka/fayl.txt\nconsole.log(path.resolve("fayl.txt")); // /to/liq/yol/fayl.txt\nconsole.log(path.extname("fayl.txt")); // ".txt"\nconsole.log(path.basename("/a/b/fayl.txt")); // "fayl.txt"'
      },
      {
        title: '5. Nega join kerak?',
        text: 'Windows da "\\", macOS/Linux da "/" ishlatiladi. path.join har tizimda to‘g‘ri ajratgich qo‘yadi.',
        code: '// noto\'g\'ri:\nconst p = "papka/" + "fayl.txt";\n// to\'g\'ri:\nconst p2 = path.join("papka", "fayl.txt");'
      }
    ],
    takeaway: 'fs: readFileSync, readFile(callback), fs/promises (zamonaviy).\nwriteFile/appendFile/mkdir/unlink asosiy amallar.\nXatoni callback da err, Promise da try/catch bilan tut.\npath.join yo‘llarni OS ga mos birlashtiradi.\npath.resolve mutlaq yo‘l, extname kengaytma.',
    exercise: '1) Uch o\'qish usuli farqi nima?\n2) ENOENT nima?\n3) Nega path.join ishlatish kerak?\n4) path.extname("a.txt") nima beradi?'
  },
  {
    id: 'node-streams',
    title: 'Node.js: stream va event emitter',
    question: 'Stream nima? Nega katta fayllarda readFile yomon? pipe va EventEmitter qanday ishlaydi?',
    explanation: 'Stream — ma’lumotni qismlarga (chunk) oqim sifatida o‘qish/yozish usuli. Katta faylni to‘liq xotiraga olish o‘rniga, qism-qism ishlaydi. EventEmitter — hodisalar asosida ishlash mexanizmi, Node.js ning ko‘p qismi shunga asoslangan.',
    sections: [
      {
        title: '1. Nega stream?',
        text: 'readFile butun faylni xotiraga oladi. 10 GB faylda xotira tugaydi. Stream esa har qismni alohida qayta ishlaydi.',
        code: 'const fs = require("fs");\n// yomon: butun fayl xotirada\n// const data = fs.readFileSync("katta.txt");\n\n// yaxshi: qism-qism\nconst stream = fs.createReadStream("katta.txt", "utf8");\nstream.on("data", chunk => console.log(chunk.length));\nstream.on("end", () => console.log("tugadi"));'
      },
      {
        title: '2. pipe',
        text: 'pipe o‘qish oqimini yozish oqimiga ulaydi. Katta faylni nusxalash uchun eng qisqa usul.',
        code: 'const oqish = fs.createReadStream("kirish.txt");\nconst chiqish = fs.createWriteStream("chiqish.txt");\noqish.pipe(chiqish);\nchiqish.on("finish", () => console.log("nusxalandi"));'
      },
      {
        title: '3. EventEmitter',
        text: 'EventEmitter hodisa chiqarish va tinglash uchun. on() tinglaydi, emit() chiqaradi. Node.js da ko‘p obyektlar undan meros oladi.',
        code: 'const EventEmitter = require("events");\nconst e = new EventEmitter();\ne.on("salom", ism => console.log("Salom", ism));\ne.emit("salom", "Ali"); // Salom Ali'
      },
      {
        title: '4. Xato hodisasi',
        text: 'Stream da error hodisasi bor. Uni tinglamasang, jarayon o‘chib qolishi mumkin.',
        code: 'const s = fs.createReadStream("yoq.txt");\ns.on("error", err => console.log("Xato:", err.code));'
      },
      {
        title: '5. To‘rtta stream turi',
        text: 'Readable (o‘qish), Writable (yozish), Duplex (ikkisi ham), Transform (o‘zgartirib o‘tadi).',
        code: 'const { Transform } = require("stream");\nconst katta = new Transform({\n  transform(chunk, enc, cb) {\n    cb(null, chunk.toString().toUpperCase());\n  }\n});\nfs.createReadStream("a.txt").pipe(katta).pipe(fs.createWriteStream("b.txt"));'
      }
    ],
    takeaway: 'Stream ma’lumotni qism-qism ishlaydi, xotirani tejaydi.\npipe o‘qishni yozishga ulaydi.\nEventEmitter: on() tingla, emit() chiqar.\nerror hodisasini tinglash shart.\nReadable, Writable, Duplex, Transform — to‘rt tur.',
    exercise: '1) Nega katta faylda readFile yomon?\n2) pipe nima qiladi?\n3) on va emit farqi?\n4) Stream da error ni tinglamasang nima bo\'ladi?'
  },
  {
    id: 'design-patterns',
    title: 'Design patternlar: Factory, Singleton, Observer, Module',
    question: 'Eng ko‘p so‘raladigan patternlar nima? Qachon qaysi birini ishlatish kerak?',
    explanation: 'Design pattern — takrorlanadigan muammolarga tasdiqlangan yechim shabloni. Bu kod yozish retsepti emas, balki tuzilma g‘oyasi. Intervyuda ko‘pincha "bu kod qaysi pattern?" yoki "shu muammoni qanday hal qilasiz?" deb so‘rashadi.',
    sections: [
      {
        title: '1. Factory',
        text: 'Obyekt yaratishni alohida funksiyaga o‘tkazadi. Qaysi tur yaratilishi parametrgabog‘liq. new bilan to‘g‘ridan-to‘g‘ri yaratish o‘rniga ishlatiladi.',
        code: 'function yarat(tur, ism) {\n  if (tur === "user") return { ism, rol: "user" };\n  if (tur === "admin") return { ism, rol: "admin" };\n  throw new Error("Noma\'lum tur");\n}\nconst u = yarat("admin", "Ali");\nconsole.log(u.rol); // admin'
      },
      {
        title: '2. Singleton',
        text: 'Bir klassdan faqat bitta obyekt bo‘lishini kafolatlaydi. Birinchi chaqirishda yaratilib, keyingilarida shu obyekt qaytariladi.',
        code: 'class Sozlamalar {\n  static instance;\n  constructor() {\n    if (Sozlamalar.instance) return Sozlamalar.instance;\n    this.til = "uz";\n    Sozlamalar.instance = this;\n  }\n}\nconst a = new Sozlamalar();\nconst b = new Sozlamalar();\nconsole.log(a === b); // true'
      },
      {
        title: '3. Observer (kuzatuvchi)',
        text: 'Bir obyekt holati o‘zgarganda, unga bog‘langan barcha kuzatuvchilarga xabar beradi. EventEmitter va reaktiv tizimlarning asosi.',
        code: 'class Kuzatuvchi {\n  constructor() { this.tinglovchilar = []; }\n  qosh(fn) { this.tinglovchilar.push(fn); }\n  xabar(v) { this.tinglovchilar.forEach(fn => fn(v)); }\n}\nconst k = new Kuzatuvchi();\nk.qosh(x => console.log("bir:", x));\nk.qosh(x => console.log("ikki:", x));\nk.xabar("yangi");'
      },
      {
        title: '4. Module pattern',
        text: 'Closure bilan ochiq va yopiq qismlarni ajratadi. Faqat qaytarilgan metodlar tashqariga ko‘rinadi.',
        code: 'const hisob = (function () {\n  let son = 0; // yopiq\n  return {\n    oshir() { return ++son; },\n    qiymat() { return son; }\n  };\n})();\nhisob.oshir();\nconsole.log(hisob.qiymat()); // 1\n// hisob.son — ko\'rinmaydi'
      },
      {
        title: '5. Qachon qaysi?',
        text: 'Factory — turga qarab obyekt yaratish. Singleton — bitta umumiy holat (sozlamalar, kesh). Observer — holat o‘zgarishini tarqatish. Module — ma’lumotni yashirish.',
        code: '// umumiy qoida: patternni muammo talab qilsa qo\'llan\n// "har joyda pattern ishlatish" — yomon odat'
      }
    ],
    takeaway: 'Factory yaratishni funksiyaga o‘tkazadi.\nSingleton bitta obyekt kafolatlaydi.\nObserver holat o‘zgarishini kuzatuvchilarga yetkazadi.\nModule closure bilan ma’lumot yashiradi.\nPattern muammoga yechim, o‘z maqsadi emas.',
    exercise: '1) Factory va new farqi nima?\n2) Singleton nega bitta obyekt qaytaradi?\n3) Observer qayerda ishlatiladi?\n4) Module pattern ma’lumotni qanday yashiradi?'
  },
  {
    id: 'testing-basics',
    title: 'Testing: unit test, Jest va Vitest asoslari',
    question: 'Unit test nima? test/expect qanday yoziladi? Nega test muhim?',
    explanation: 'Test — kod to‘g‘ri ishlashini avtomatik tekshirish. Unit test bitta funksiyani sinaydi. Jest va Vitest eng mashhur ramkalar: ular test() va expect() beradi. Kod o‘qiyotganda test nomi nimani tekshirishini aytib beradi.',
    sections: [
      {
        title: '1. Oddiy test',
        text: 'test(nom, fn) bitta holatni sinaydi. expect(natija).toBe(kutilgan) qat’iy tenglikni tekshiradi.',
        code: 'function yig(a, b) { return a + b; }\n\ntest("1 + 2 = 3", () => {\n  expect(yig(1, 2)).toBe(3);\n});'
      },
      {
        title: '2. Ko‘p keng tarqalgan matcherlar',
        text: 'toBe qat’iy tenglik, toEqual tarkibni solishtirish (obyekt/massiv), toBeTruthy, toBeFalsy, toContain, toThrow.',
        code: 'expect([1, 2]).toEqual([1, 2]); // tarkib\nexpect({ a: 1 }).toEqual({ a: 1 });\nexpect([]).toBeTruthy();\nexpect([1, 2]).toContain(1);\nexpect(() => { throw new Error("x"); }).toThrow();'
      },
      {
        title: '3. Guruh va tayyorgarlik',
        text: 'describe bilan testlarni guruhlash. beforeEach har testdan oldin bajariladi, afterEach keyin.',
        code: 'describe("hisob", () => {\n  let hisob;\n  beforeEach(() => { hisob = 0; });\n  test("oshirish", () => { expect(++hisob).toBe(1); });\n});'
      },
      {
        title: '4. Sof funksiyalar testi oson',
        text: 'Yon ta’siri yo‘q funksiyani sinash oson: kirish berasan, chiqishni tekshirasan. Tashqi holatga bog‘liq funksiyani sinash qiyin.',
        code: '// yaxshi: sof\nexpect(yig(2, 3)).toBe(5);\n\n// qiyin: tashqi holat va vaqtga bog\'liq\n// expect(Date.now()).toBe(...) — ishonchsiz'
      },
      {
        title: '5. Qamrov (coverage)',
        text: 'Coverage kodning necha foizi test bilan qoplanganini ko‘rsatadi. 100% har doim ham kerak emas: muhim yo‘llarga e’tibor berish yaxshiroq.',
        code: '// npx vitest run --coverage\n// npx jest --coverage'
      }
    ],
    takeaway: 'Unit test bitta funksiyani sinaydi.\ntest() + expect().toBe() / toEqual() asosiy shakl.\ndescribe guruh, beforeEach tayyorgarlik.\nSof funksiyalarni sinash oson.\nCoverage foiz emas, muhim yo\'llar muhim.',
    exercise: '1) toBe va toEqual farqi nima?\n2) beforeEach qachon ishlaydi?\n3) Nega sof funksiyani test qilish oson?\n4) Coverage 100% bo\'lishi shartmi?'
  }
);
