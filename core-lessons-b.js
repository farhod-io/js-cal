// JS CORE — 2-qism: obyektlar, massivlar, JSON, xatolar, modullar, closure.
window.lessons.push(
  {
    id: 'objects-basics',
    title: 'Obyektlar: noldan',
    question: 'Obyekt nima? Kalit-qiymat, nuqta va kvadrat notatsiya, ichki obyektlar.',
    explanation: 'Obyekt — kalit (property) va qiymatlar to‘plami. U ko‘p ma’lumotni bitta nom ostida saqlash uchun ishlatiladi. Kod o‘qiyotganda avval “bu obyektning qaysi kaliti o‘qilyapti?” degan savolni ber. Kalit har doim string (yoki symbol), qiymat esa ixtiyoriy tur bo‘lishi mumkin.',
    sections: [
      {
        title: '1. Obyekt yaratish',
        text: 'Eng keng tarqalgan usul — { } ichida kalit: qiymat yozish. Kalitlarni o‘qish uchun nuqta (obj.kalit) yoki kvadrat (obj["kalit"]) notatsiya ishlatiladi.',
        code: 'const user = {\n  ism: "Ali",\n  yosh: 20,\n  shahar: "Toshkent"\n};\nconsole.log(user.ism); // Ali\nconsole.log(user["yosh"]); // 20'
      },
      {
        title: '2. Nuqta va kvadrat notatsiya farqi',
        text: 'Nuqta notatsiyasida kalit o‘zgarmas nom bo‘ladi. Kvadrat notatsiyada kalit ifoda bo‘lishi mumkin: o‘zgaruvchi yoki hisoblash natijasi. Kalit nomida bo‘shliq yoki chiziqcha bo‘lsa, faqat kvadrat notatsiya ishlaydi.',
        code: 'const user = { "ism-familya": "Ali", yosh: 20 };\n// console.log(user.ism-familya); // xato (ayirish deb o‘qiladi)\nconsole.log(user["ism-familya"]); // Ali\n\nconst kalit = "yosh";\nconsole.log(user[kalit]); // 20'
      },
      {
        title: '3. Qiymat qo‘shish va o‘zgartirish',
        text: 'Yo‘q kalitga qiymat yozilsa, u yaratiladi. Bor kalitga yangi qiymat yozilsa, eskisi almashtiriladi. O‘chirish uchun delete ishlatiladi.',
        code: 'const user = { ism: "Ali" };\nuser.yosh = 20; // yangi kalit\nuser.ism = "Vali"; // o\'zgartirish\nconsole.log(user); // { ism: "Vali", yosh: 20 }\n\ndelete user.yosh;\nconsole.log(user.yosh); // undefined'
      },
      {
        title: '4. Ichki obyektlar va ierarxiya',
        text: 'Obyekt qiymati sifatida boshqa obyekt bo‘lishi mumkin. Bunday tuzilmada bir necha nuqta bilan chuqurroq o‘qish mumkin: user.manzil.shahar.',
        code: 'const user = {\n  ism: "Ali",\n  manzil: {\n    shahar: "Toshkent",\n    kocha: "Navoiy"\n  }\n};\nconsole.log(user.manzil.shahar); // Toshkent\nconsole.log(user.manzil.kocha); // Navoiy',
        note: 'Agar oraliq obyekt yo‘q bo‘lsa, user.manzil.shahar xato beradi. Optional chaining bilan xavfsiz: user.manzil?.shahar.'
      },
      {
        title: '5. Kalitlar va qiymatlar ro‘yxati',
        text: 'Object.keys obyekt kalitlari massivini, Object.values qiymatlar massivini, Object.entries esa [kalit, qiymat] juftliklari massivini qaytaradi.',
        code: 'const user = { ism: "Ali", yosh: 20 };\nconsole.log(Object.keys(user)); // ["ism", "yosh"]\nconsole.log(Object.values(user)); // ["Ali", 20]\nconsole.log(Object.entries(user)); // [["ism","Ali"],["yosh",20]]'
      },
      {
        title: '6. Kalit borligini tekshirish',
        text: 'obj.kalit !== undefined degan tekshirish xato bo‘lishi mumkin: kalit bor, lekin qiymati undefined bo‘lsa. To‘g‘ri usul — "kalit" in obj yoki Object.hasOwn(obj, "kalit").',
        code: 'const o = { x: undefined };\nconsole.log(o.x !== undefined); // false (noto\'g\'ri xulosa)\nconsole.log("x" in o); // true\nconsole.log(Object.hasOwn(o, "x")); // true\nconsole.log("y" in o); // false'
      },
      {
        title: '7. Obyekt ichida metod',
        text: 'Obyekt xususiyati sifatida funksiya saqlash mumkin. Bunday funksiyaga metod deyiladi. Ichida this obyektni ko‘rsatadi.',
        code: 'const user = {\n  ism: "Ali",\n  salom() {\n    return "Salom, " + this.ism;\n  }\n};\nconsole.log(user.salom()); // Salom, Ali'
      }
    ],
    takeaway: 'Obyekt — kalit: qiymat to‘plami.\nNuqta notatsiya o‘zgarmas kalit, kvadrat notatsiya ifoda qabul qiladi.\nYo‘q kalitga yozish uni yaratadi; delete o‘chiradi.\nIchki obyektlarni nuqta zanjiri bilan o‘qish mumkin.\nObject.keys/values/entries kalit va qiymatlarni massiv qiladi.\nKalit borligini "x" in obj yoki Object.hasOwn bilan tekshir.',
    exercise: '1) const o = {a:1}; o.b = 2; o.a = 3; natijada o nima?\n2) "x" in o va o.x !== undefined farqi nima?\n3) user.manzil.shahar qachon xato beradi?\n4) Object.keys({a:1,b:2}) nima qaytaradi?'
  },
  {
    id: 'arrays-basics',
    title: 'Massivlar: noldan',
    question: 'Massiv nima? Indeks, length, qo‘shish/o‘chirish va ko‘p uchraydigan metodlar.',
    explanation: 'Massiv — tartiblangan qiymatlar ro‘yxati. Har elementning indeksi bor (0 dan boshlanadi). Massiv ham obyekt, lekin uning maxsus xususiyati — length. Kod o‘qiyotganda indeks va uzunlikni kuzat: ko‘p xatolar shular bilan bog‘liq.',
    sections: [
      {
        title: '1. Yaratish va o‘qish',
        text: 'Massiv [ ] ichida elementlar bilan yaratiladi. Elementga indeks orqali murojaat qilinadi: arr[0] birinchi, arr[arr.length - 1] oxirgi element.',
        code: 'const sonlar = [10, 20, 30];\nconsole.log(sonlar[0]); // 10\nconsole.log(sonlar[1]); // 20\nconsole.log(sonlar.length); // 3\nconsole.log(sonlar[sonlar.length - 1]); // 30 (oxirgi)'
      },
      {
        title: '2. Yo‘q indeksga murojaat',
        text: 'Massivda yo‘q indeksni o‘qish undefined qaytaradi, xato emas. Bu obyektlarga o‘xshash: massiv ham obyekt.',
        code: 'const a = [1, 2];\nconsole.log(a[5]); // undefined\nconsole.log(a[-1]); // undefined'
      },
      {
        title: '3. Qo‘shish va o‘chirish',
        text: 'push oxiriga qo‘shadi, pop oxirgisini olib tashlaydi, unshift boshiga qo‘shadi, shift birinchi elementni olib tashlaydi. Barchasi asl massivni o‘zgartiradi.',
        code: 'const a = [1, 2];\na.push(3); // [1,2,3]\na.pop();   // [1,2]\na.unshift(0); // [0,1,2]\na.shift(); // [1,2]\nconsole.log(a); // [1,2]'
      },
      {
        title: '4. splice — istalgan joyga qo‘shish/o‘chirish',
        text: 'splice(start, deleteCount, ...elements) berilgan joydan boshlab elementlarni o‘chiradi va yangilarini qo‘shadi. Asl massivni o‘zgartiradi va o‘chirilgan elementlarni qaytaradi.',
        code: 'const a = [1, 2, 3, 4];\nconsole.log(a.splice(1, 2)); // [2,3] o\'chirildi\nconsole.log(a); // [1,4]\n\na.splice(1, 0, 9); // 1-indeksga 9 qo\'shamiz\nconsole.log(a); // [1,9,4]'
      },
      {
        title: '5. slice — qismni nusxalash',
        text: 'slice(start, end) berilgan oraliqdagi elementlardan yangi massiv yaratadi. Asl massiv o‘zgartirilmaydi. end indeksi kiritilmaydi.',
        code: 'const a = [1, 2, 3, 4];\nconsole.log(a.slice(1, 3)); // [2,3]\nconsole.log(a.slice(2)); // [3,4]\nconsole.log(a); // [1,2,3,4] — o\'zgarmadi'
      },
      {
        title: '6. indexOf, includes, join',
        text: 'indexOf element indeksini (topmasa -1), includes bor-yo‘qligini (true/false), join esa elementlarni stringga birlashtiradi.',
        code: 'const a = [10, 20, 30];\nconsole.log(a.indexOf(20)); // 1\nconsole.log(a.indexOf(99)); // -1\nconsole.log(a.includes(30)); // true\nconsole.log(a.join(", ")); // "10, 20, 30"'
      },
      {
        title: '7. Massiv va obyekt farqi',
        text: 'Massiv — tartibli ro‘yxat, uzunligi bor. Obyekt — kalitlar to‘plami. Lekin massiv ham obyekt: uning indekslari kalit, length xususiyati bor. Shuning uchun typeof [] === "object" bo‘ladi.',
        code: 'console.log(typeof []); // "object"\nconsole.log(Array.isArray([])); // true — to\'g\'ri tekshirish\nconsole.log(Array.isArray({})); // false'
      }
    ],
    takeaway: 'Indeks 0 dan boshlanadi; oxirgi element arr[arr.length-1].\nYo‘q indeks undefined qaytaradi, xato emas.\npush/pop/unshift/shift/splice aslni o‘zgartiradi.\nslice yangi massiv qaytaradi, aslni saqlaydi.\nindexOf topmasa -1, includes true/false qaytaradi.\nMassiv turini Array.isArray bilan tekshir.',
    exercise: '1) [1,2,3][5] nima?\n2) push va unshift farqi?\n3) splice va slice farqi nima?\n4) [10,20].indexOf(99) nima?\n5) typeof [] nima va to‘g‘ri tekshirish qanday?'
  },
  {
    id: 'json-basics',
    title: 'JSON: noldan',
    question: 'JSON nima? JSON.stringify va JSON.parse qanday ishlaydi? Nima yo‘qoladi?',
    explanation: 'JSON (JavaScript Object Notation) — ma’lumot almashish uchun matn formati. U JavaScript obyektiga o‘xshaydi, lekin faqat ma’lumot: funksiya, undefined, Symbol bo‘lmaydi. Kod o‘qiyotganda stringify/parse juftligini ko‘rsang, “tur o‘zgarishini” kuzat.',
    sections: [
      {
        title: '1. JSON nima?',
        text: 'JSON — matn. Obyektni matnga aylantirish uchun JSON.stringify, matnni obyektga qaytarish uchun JSON.parse ishlatiladi. Bu ikki funksiya teskari amal qiladi.',
        code: 'const user = { ism: "Ali", yosh: 20 };\nconst matn = JSON.stringify(user);\nconsole.log(matn); // \'{"ism":"Ali","yosh":20}\'\nconsole.log(typeof matn); // "string"\nconsole.log(JSON.parse(matn)); // obyekt qaytdi'
      },
      {
        title: '2. Qaysi qiymatlar yo‘qoladi?',
        text: 'JSON.stringify obyektdagi funksiya, undefined va Symbol xususiyatlarini tashlab yuboradi. NaN va Infinity null ga aylanadi. Date esa ISO string ga aylanadi.',
        code: 'const o = {\n  a: 1,\n  b: undefined,\n  f: () => 2,\n  c: NaN\n};\nconsole.log(JSON.stringify(o)); // {"a":1,"c":null}\nconsole.log(JSON.stringify(new Date("2026-01-01"))); // "2026-01-01T00:00:00.000Z"'
      },
      {
        title: '3. JSON.parse xatolari',
        text: 'Noto‘g‘ri formatdagi matnni parse qilsang, SyntaxError chiqadi. Shuning uchun tashqi manbadan kelgan ma’lumotni try/catch bilan o‘qish kerak.',
        code: '// JSON.parse("{noto\'g\'ri}"); // SyntaxError\ntry {\n  JSON.parse("{noto\'g\'ri}");\n} catch (e) {\n  console.log("Xato:", e.message);\n}'
      },
      {
        title: '4. Chuqur nusxa olish usuli sifatida',
        text: 'JSON.parse(JSON.stringify(obj)) chuqur nusxa yaratadi, lekin universal emas: funksiya, undefined, Symbol yo‘qoladi; Date stringga aylanadi; tsiklik bog‘lanish xato beradi. structuredClone ko‘p hollarda yaxshiroq.',
        code: 'const a = { x: 1, ichki: { y: 2 } };\nconst b = JSON.parse(JSON.stringify(a));\nb.ichki.y = 9;\nconsole.log(a.ichki.y); // 2 — asl saqlangan\n\nconst c = structuredClone(a); // zamonaviy usul'
      },
      {
        title: '5. 3-argument va replacer',
        text: 'JSON.stringify(obj, replacer, space) uchinchi argument bilan chiroyli formatlanadi. Ikkinchi argument sifatida funksiya yoki massiv berib, qaysi kalitlarni kiritishni boshqarish mumkin.',
        code: 'const o = { ism: "Ali", yosh: 20 };\nconsole.log(JSON.stringify(o, null, 2));\n// {\n//   "ism": "Ali",\n//   "yosh": 20\n// }\nconsole.log(JSON.stringify(o, ["ism"])); // {"ism":"Ali"}'
      }
    ],
    takeaway: 'JSON matn; stringify obyekt→matn, parse matn→obyekt.\nfunksiya/undefined/Symbol yo‘qoladi; NaN/Infinity → null.\nNoto‘g‘ri matn parse qilinsa SyntaxError.\nJSON.parse(JSON.stringify()) chuqur nusxa, lekin universal emas.\nstructuredClone zamonaviy va xavfsizroq.',
    exercise: '1) JSON.stringify({a: undefined, b: NaN}) nima beradi?\n2) JSON.parse("xato") nima qiladi?\n3) Nega JSON usuli bilan chuqur nusxa olish har doim ham yaxshi emas?'
  },
  {
    id: 'errors-try-catch',
    title: 'Xatolar: try/catch, throw, finally',
    question: 'Xato qanday yuz beradi? try/catch/finally va throw qanday ishlaydi?',
    explanation: 'Xato — kod bajarilishini to‘xtatadigan hodisa. try ichida xato yuz bersa, bajarilish catch ga o‘tadi. finally esa har qanday holatda bajariladi. Kod o‘qiyotganda “bu yer xato berishi mumkinmi?” deb so‘ra.',
    sections: [
      {
        title: '1. Xato turlari',
        text: 'Keng tarqalgan xatolar: ReferenceError (nom yo‘q), TypeError (noto‘g‘ri tur bilan amal), SyntaxError (noto‘g‘ri kod), RangeError (chegaradan oshish). Xato obyektining message va name xususiyati bor.',
        code: '// nomTopilmadi; // ReferenceError\n// null.ism; // TypeError\n// JSON.parse("xato"); // SyntaxError\n\ntry {\n  null.ism;\n} catch (e) {\n  console.log(e.name); // TypeError\n  console.log(e.message);\n}'
      },
      {
        title: '2. try/catch',
        text: 'try ichidagi kod xato bersa, qolgan satrlar bajarilmaydi va to‘g‘ridan-to‘g‘ri catch ga o‘tadi. catch ichida xato obyekti olinadi.',
        code: 'try {\n  console.log("boshlandi");\n  JSON.parse("noto\'g\'ri");\n  console.log("bu satr bajarilmaydi");\n} catch (e) {\n  console.log("tutildi:", e.name);\n}\nconsole.log("davom etadi");'
      },
      {
        title: '3. finally',
        text: 'finally bloki xato bo‘lsa ham, bo‘lmasa ham bajariladi. Resurslarni tozalash uchun ishlatiladi. catch bo‘lmasa ham finally yozish mumkin.',
        code: 'try {\n  console.log("ish");\n} catch (e) {\n  console.log("xato");\n} finally {\n  console.log("har doim bajariladi");\n}'
      },
      {
        title: '4. throw — o‘z xatoni yaratish',
        text: 'throw bilan ixtiyoriy qiymatni xato sifatida tashlash mumkin. Ko‘pincha Error obyekti ishlatiladi. Xato tashlansa, u tutulmaguncha yuqoriga tarqaladi.',
        code: 'function bolish(a, b) {\n  if (b === 0) throw new Error("Nolga bo\'lib bo\'lmaydi");\n  return a / b;\n}\n\ntry {\n  bolish(5, 0);\n} catch (e) {\n  console.log(e.message); // Nolga bo\'lib bo\'lmaydi\n}'
      },
      {
        title: '5. Xatoni yutmaslik',
        text: 'Bo‘sh catch bloki xatoni yashiradi: muammo borligini bilmay qolasan. Kamida log qil yoki qayta tashla (throw e).',
        code: '// Yomon:\ntry { JSON.parse("xato"); } catch (e) {}\n\n// Yaxshi:\ntry { JSON.parse("xato"); }\ncatch (e) { console.error(e); }\n\n// Qayta tashlash:\ntry { JSON.parse("xato"); }\ncatch (e) { throw e; }'
      }
    ],
    takeaway: 'Xato bajarilishni to‘xtatadi; catch uni tutadi.\nReferenceError, TypeError, SyntaxError eng ko‘p uchraydi.\nfinally har qanday holatda bajariladi.\nthrow new Error(...) bilan o‘z xatongni yaratasan.\nBo‘sh catch xatoni yashiradi — yomon odat.',
    exercise: '1) null.ism qanday xato beradi?\n2) try ichida xato bo‘lsa, keyingi satr bajariladimi?\n3) finally qachon bajariladi?\n4) Nega bo‘sh catch yomon?'
  },
  {
    id: 'modules',
    title: 'Modullar: import/export',
    question: 'ES modullari qanday ishlaydi? import, export, default va named farqi?',
    explanation: 'Modul — alohida fayl. U o‘z o‘zgaruvchilarini yashiradi va faqat eksport qilinganlarini boshqa faylga beradi. Kod o‘qiyotganda import satridan boshla: qayerdan nima olinayotganini bilish butun faylni tushunishga yordam beradi.',
    sections: [
      {
        title: '1. Named export',
        text: 'export const yoki export function bilan bir nechta nom eksport qilinadi. Import qilishda nomlar qavs ichida yoziladi va nomlar mos bo‘lishi shart.',
        code: '// math.js\nexport const PI = 3.14;\nexport function yig(a, b) { return a + b; }\n\n// app.js\nimport { PI, yig } from "./math.js";\nconsole.log(yig(1, 2), PI);',
        note: 'Brauzerda modul ulash uchun <script type="module" src="app.js"></script> kerak.'
      },
      {
        title: '2. Default export',
        text: 'Har bir modulda bitta default eksport bo‘ladi. Uni import qilishda ixtiyoriy nom berish mumkin.',
        code: '// user.js\nexport default function salom(ism) {\n  return "Salom, " + ism;\n}\n\n// app.js\nimport salomlashish from "./user.js";\nconsole.log(salomlashish("Ali"));'
      },
      {
        title: '3. Nomlarni o‘zgartirish',
        text: 'as dan keyin import qilingan nomga yangi nom berish mumkin. Eksport qilishda ham as ishlatiladi.',
        code: 'import { yig as qoshuvchi } from "./math.js";\nconsole.log(qoshuvchi(2, 3)); // 5\n\n// export { ichkiNom as tashqiNom };'
      },
      {
        title: '4. Hamma narsani import qilish',
        text: 'import * as nom barcha eksportlarni obyekt sifatida beradi. Bu ko‘p eksport bor bo‘lganda qulay.',
        code: 'import * as math from "./math.js";\nconsole.log(math.PI);\nconsole.log(math.yig(1, 2));'
      },
      {
        title: '5. Modul scope’i',
        text: 'Moduldagi yuqori darajadagi o‘zgaruvchilar global bo‘lmaydi: faqat shu modul ichida ko‘rinadi. Eksport qilinmagan narsa tashqaridan ko‘rinmaydi.',
        code: '// counter.js\nlet hisob = 0; // faqat modul ichida\nexport function oshir() { return ++hisob; }\n\n// app.js\nimport { oshir } from "./counter.js";\nconsole.log(oshir()); // 1\n// console.log(hisob); // ReferenceError: ko\'rinmaydi'
      },
      {
        title: '6. import hoisting va yon ta’sir',
        text: 'Importlar fayl boshida turadi va boshqa kodlardan oldin bajariladi. Faqat eksport uchun emas, modulni yuklash uchun ham import qilish mumkin: import "./styles.js".',
        code: 'import "./init.js"; // yon ta\'sir uchun (masalan, sozlash)\nconsole.log("asosiy kod");\n// init.js avval bajariladi'
      }
    ],
    takeaway: 'Modul o‘z nomlarini yashiradi; faqat eksport qilinganlar ko‘rinadi.\nnamed export: import { nom }; default: import nom.\nas bilan nomni o‘zgartirish mumkin.\nimport * as nom barcha eksportlarni obyekt qiladi.\nImportlar kod boshlanishidan oldin bajariladi.',
    exercise: '1) Named va default export farqi nima?\n2) import { yig as q } nima qiladi?\n3) Eksport qilinmagan o‘zgaruvchi boshqa faylda ko‘rinadimi?\n4) import * as math nima beradi?'
  },
  {
    id: 'closures',
    title: 'Closure: noldan',
    question: 'Closure nima? Funksiya nega o‘z yaratilgan joyidagi o‘zgaruvchilarni eslaydi?',
    explanation: 'Closure — funksiya va uning atrofidagi o‘zgaruvchilarning birgalikda saqlanishi. Funksiya boshqa joyda chaqirilsa ham, yaratilgan paytdagi scope’ga murojaat qila oladi. Bu ko‘p intervyu savollarining asosi.',
    sections: [
      {
        title: '1. Eng oddiy closure',
        text: 'Ichki funksiya tashqi funksiyaning o‘zgaruvchisiga murojaat qilsa, tashqi funksiya tugagach ham u o‘zgaruvchi saqlanib qoladi.',
        code: 'function tashqi() {\n  const x = 10;\n  return function ichki() {\n    console.log(x); // tashqi x ni eslaydi\n  };\n}\nconst f = tashqi();\nf(); // 10',
        note: 'tashqi() tugadi, lekin x yo‘qolmadi: ichki funksiya uni ushlab turibdi.'
      },
      {
        title: '2. Har chaqirishda yangi scope',
        text: 'Tashqi funksiya har chaqirilganda yangi x yaratiladi. Shuning uchun ikki funksiya bir-biridan mustaqil hisoblagich bo‘ladi.',
        code: 'function hisoblagich() {\n  let son = 0;\n  return () => ++son;\n}\nconst a = hisoblagich();\nconst b = hisoblagich();\nconsole.log(a()); // 1\nconsole.log(a()); // 2\nconsole.log(b()); // 1 (mustaqil)'
      },
      {
        title: '3. Closure va tsikl',
        text: 'for (let i = ...) da har takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.',
        code: 'for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3'
      },
      {
        title: '4. Ma’lumotni yashirish',
        text: 'Closure bilan tashqaridan o‘zgartirib bo‘lmaydigan holat yaratish mumkin. Faqat qaytarilgan metodlar orqali murojaat qilinadi.',
        code: 'function yarat() {\n  let hisob = 0;\n  return {\n    oshir() { return ++hisob; },\n    qiymat() { return hisob; }\n  };\n}\nconst o = yarat();\no.oshir();\nconsole.log(o.qiymat()); // 1\n// o.hisob — yo\'q, tashqaridan ko\'rinmaydi'
      },
      {
        title: '5. Keng tarqalgan xato',
        text: 'Tsikl ichida var bilan yaratilgan funksiyalar oxirgi qiymatni ko‘radi. Bu closure tufayli, lekin noto‘g‘ri ko‘rinadi. Yechim: let ishlatish yoki IIFE bilan yangi scope yaratish.',
        code: '// Eski usul (IIFE):\nfor (var i = 0; i < 3; i++) {\n  (function (n) {\n    setTimeout(() => console.log(n), 0);\n  })(i);\n}\n// 0, 1, 2'
      }
    ],
    takeaway: 'Closure — funksiya + yaratilgan joyidagi o‘zgaruvchilar.\nTashqi funksiya tugasa ham, ichki funksiya uning o‘zgaruvchisini ushlab turadi.\nHar chaqirishda yangi scope → mustaqil holat.\nlet tsiklda har qadam uchun alohida o‘zgaruvchi yaratadi.\nClosure bilan ma’lumotni yashirish mumkin.',
    exercise: '1) function f(){ let x=1; return ()=>x; } f()() nima beradi?\n2) Ikki hisoblagich mustaqil bo‘lishi nega?\n3) var bilan tsiklda 3,3,3 chiqishi nega?\n4) Closure bilan ma’lumotni qanday yashirasiz?'
  }
);
