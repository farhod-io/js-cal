// JS CORE — 1-qism: sonlar, stringlar, operatorlar, shartlar, tsikllar.
// Har dars noldan boshlanadi va kodni o'qish ko'nikmasini maqsad qiladi.
window.lessons.push(
  {
    id: 'numbers-math',
    title: 'Sonlar va Math: noldan',
    question: 'JavaScript sonlari qanday saqlanadi? NaN, Infinity, parseInt va Math nima?',
    explanation: 'JavaScript’da barcha sonlar bitta tur: number. Butun son va kasr son o‘rtasida farq yo‘q. Sonlar 64-bit formatda saqlanadi, shuning uchun katta sonlar va kasrlar bilan ehtiyot bo‘lish kerak. Kod o‘qiyotganda avval “bu sonmi yoki stringmi?” degan savolni ber.',
    sections: [
      {
        title: '1. Son yaratish va turi',
        text: 'Son yozish uchun ixtiyoriy raqam, nuqta yoki eksponent ishlatiladi. typeof har qanday son uchun "number" qaytaradi. 5 va 5.0 bir xil son.',
        code: 'let a = 10;\nlet b = 3.14;\nlet c = 1e3;      // 1000\nconsole.log(typeof a); // "number"\nconsole.log(typeof b); // "number"\nconsole.log(a === 10.0); // true',
        note: '1e3 — ilmiy yozuv: 1 × 10³. Katta va kichik sonlarni qisqa yozish uchun ishlatiladi.'
      },
      {
        title: '2. Hisoblash va operatorlar',
        text: '+, -, *, /, % (qoldiq), ** (daraja) mavjud. % bo‘linishdan qolgan qoldiqni beradi: juft/tok tekshirishda ishlatiladi. ** — daraja, masalan 2 ** 3 = 8.',
        code: 'console.log(7 + 3);  // 10\nconsole.log(7 / 2);  // 3.5\nconsole.log(7 % 2);  // 1 (qoldiq)\nconsole.log(2 ** 3); // 8\nconsole.log(10 % 2 === 0); // true (juft)'
      },
      {
        title: '3. NaN — son emas',
        text: 'NaN (Not a Number) — hisoblash natijasi son bo‘lmaganda chiqadi. G‘alati joyi: typeof NaN ham "number" qaytaradi. NaN hech narsaga teng emas, hatto o‘ziga ham. Tekshirish uchun Number.isNaN ishlatiladi.',
        code: 'console.log(typeof NaN); // "number"\nconsole.log(NaN === NaN); // false\nconsole.log(Number.isNaN(NaN)); // true\nconsole.log("abc" * 2); // NaN\nconsole.log(0 / 0); // NaN',
        note: 'Eski global isNaN() qiymatni avval son ga o‘zgartiradi, shuning uchun isNaN("abc") true beradi. Number.isNaN esa faqat haqiqiy NaN ni topadi.'
      },
      {
        title: '4. Infinity va nol bilan bo‘linish',
        text: 'Son chegarasidan oshsa Infinity yoki -Infinity chiqadi. 1/0 = Infinity, -1/0 = -Infinity. Bu xato emas, maxsus qiymat.',
        code: 'console.log(1 / 0);  // Infinity\nconsole.log(-1 / 0); // -Infinity\nconsole.log(Infinity - Infinity); // NaN\nconsole.log(Number.isFinite(1 / 0)); // false'
      },
      {
        title: '5. Stringni songa o‘zgartirish',
        text: 'Number() butun qiymatni o‘zgartiradi: bo‘sh string 0, "abc" esa NaN bo‘ladi. parseInt satr boshidagi sonlarni oladi, oxiridagi matnni e’tiborga olmaydi. parseFloat kasrni saqlaydi.',
        code: 'console.log(Number("42"));   // 42\nconsole.log(Number(""));      // 0\nconsole.log(Number("abc"));   // NaN\nconsole.log(parseInt("42px")); // 42\nconsole.log(parseFloat("3.14 son")); // 3.14',
        note: 'parseInt("08") ba’zi muhitlarda 8, ba’zida 0 bo‘lishi mumkin — shuning uchun ikkinchi argument sifatida asosni berish yaxshi: parseInt("08", 10).'
      },
      {
        title: '6. Aniqlik muammosi',
        text: '0.1 + 0.2 = 0.3 bo‘lmaydi. Bu JavaScript kamchiligi emas, balki ikkilik sanoq tizimining xususiyati. Pul hisoblarida butun birliklarda (masalan, sent) ishlash yoki kichik xatolikni hisobga olish kerak.',
        code: 'console.log(0.1 + 0.2); // 0.30000000000000004\nconsole.log((0.1 + 0.2).toFixed(2)); // "0.30"\nconsole.log(Number((0.1 + 0.2).toFixed(2))); // 0.3'
      },
      {
        title: '7. Math obyekti',
        text: 'Math — sonlar bilan ishlash uchun tayyor metodlar to‘plami: Math.round (yaxlitlash), Math.floor (pastga), Math.ceil (yuqoriga), Math.max/min, Math.random (0 dan 1 gacha tasodifiy son).',
        code: 'console.log(Math.round(3.6)); // 4\nconsole.log(Math.floor(3.9)); // 3\nconsole.log(Math.ceil(3.1));  // 4\nconsole.log(Math.max(1, 5, 2)); // 5\nconsole.log(Math.random()); // 0 va 1 orasida\n\n// 1 dan 10 gacha tasodifiy butun son:\nconsole.log(Math.floor(Math.random() * 10) + 1);'
      }
    ],
    takeaway: 'Barcha sonlar bitta "number" turida.\nNaN son turiga kiradi, lekin hech narsaga teng emas — Number.isNaN bilan tekshir.\n1/0 xato emas: Infinity.\nparseInt satr boshidagi sonni oladi, Number butun satrni o‘zgartiradi.\n0.1 + 0.2 aniq 0.3 emas — pul hisoblarida ehtiyot bo‘l.\nMath yaxlitlash, maksimum va tasodifiy son metodlarini beradi.',
    exercise: 'Kodni o‘qimasdan javob ber:\n1) typeof NaN nima?\n2) NaN === NaN natijasi?\n3) parseInt("12abc") + 1 nima?\n4) 1 / 0 natijasi xatomi?\n5) 0.1 + 0.2 === 0.3 ni nega ishlatmaslik kerak?'
  },
  {
    id: 'strings',
    title: 'Stringlar: noldan',
    question: 'String qanday yaratiladi, nima uchun o‘zgartirib bo‘lmaydi va qaysi metodlar ishlatiladi?',
    explanation: 'String — matn qiymati. U primitive: bir marta yaratilgach ichi o‘zgartirilmaydi. Har qanday "o‘zgartirish" aslida yangi string yaratadi. Kod o‘qiyotganda satrning uzunligini, indeksini va metod qaytargan yangi qiymatni kuzat.',
    sections: [
      {
        title: '1. Yaratish va uzunlik',
        text: "Stringni ' yoki \" yoki ` (backtick) bilan yozish mumkin. .length xususiyati belgilar sonini beradi. Bo‘sh string uzunligi 0.",
        code: "const a = 'Salom';\nconst b = \"Dunyo\";\nconst c = `Assalom`;\nconsole.log(a.length); // 5\nconsole.log(''.length); // 0",
        note: 'Backtick bilan yozilgan stringga template literal deyiladi: ichiga ${...} bilan o‘zgaruvchi qo‘yish mumkin.'
      },
      {
        title: '2. String o‘zgarmas (immutable)',
        text: 'String ichidagi belgini almashtirib bo‘lmaydi. str[0] = "X" yozilsa xato bo‘lmaydi (oddiy rejimda), lekin hech narsa o‘zgar maydi. Yangi string yaratish uchun metodlar ishlatiladi.',
        code: "const s = 'Ali';\n// s[0] = 'B'; // ishlamaydi\nconsole.log(s[0]); // 'A'\nconsole.log(s); // 'Ali' — o'zgarmadi",
        note: 'const bo‘lmasa ham string o‘zgarmaydi: bu turining xususiyati.'
      },
      {
        title: '3. Template literal',
        text: 'Backtick ichida ${} bilan ifoda qo‘yish mumkin. Bu satr birlashtirishni (+) osonlashtiradi. Ichida hisoblash ham ishlaydi.',
        code: "const ism = 'Ali';\nconst yosh = 20;\nconsole.log(`Men ${ism}, ${yosh} yoshman.`);\nconsole.log(`Keyingi yil ${yosh + 1} bo'laman.`);"
      },
      {
        title: '4. Ko‘p ishlatiladigan metodlar',
        text: 'Metodlar yangi string qaytaradi, aslni o‘zgartirmaydi: toUpperCase/toLowerCase, trim (chetdagi bo‘shliqlarni olib tashlash), includes, startsWith, endsWith, indexOf, slice, replace, split, repeat.',
        code: "const s = '  Salom Dunyo  ';\nconsole.log(s.trim()); // 'Salom Dunyo'\nconsole.log(s.trim().toUpperCase()); // 'SALOM DUNYO'\nconsole.log(s.includes('Dunyo')); // true\nconsole.log(s.startsWith('Salom')); // false (boshida bo'shliq bor)\nconsole.log('Ali'.slice(1)); // 'li'\nconsole.log('a,b,c'.split(',')); // ['a','b','c']"
      },
      {
        title: '5. indexOf va qidirish',
        text: 'indexOf qidirilgan satrning birinchi indeksini qaytaradi, topmasa -1. includes esa true/false qaytaradi. Kod o‘qiyotganda "topilganmi?" degan savolga javob kerak bo‘lsa includes qulay.',
        code: "const s = 'JavaScript';\nconsole.log(s.indexOf('Script')); // 6\nconsole.log(s.indexOf('python')); // -1\nconsole.log(s.includes('Script')); // true\nconsole.log(s.indexOf('a')); // 1 (birinchi 'a')"
      },
      {
        title: '6. String va son aralash',
        text: '+ operatori agar operandlardan biri string bo‘lsa, birlashtiradi. Shuning uchun "5" + 1 = "51", lekin "5" - 1 = 4 (son ga o‘zgartiriladi). Bu ko‘p xatolarga sabab bo‘ladi.',
        code: "console.log('5' + 1); // '51'\nconsole.log('5' - 1); // 4\nconsole.log('5' + +'1'); // '51' (oldin +'1' → 1, keyin birlashtirish)\nconsole.log(Number('5') + 1); // 6",
        note: 'Unary + qiymatni songa o‘zgartiradi: +"1" = 1. Lekin bu usulni tushunish qiyin, Number() yaxshiroq.'
      }
    ],
    takeaway: 'String primitive va o‘zgarmas: ichi hech qachon o‘zgar maydi.\n.length uzunlik, [indeks] bitta belgi beradi.\nTemplate literal ${} bilan o‘zgaruvchi qo‘yadi.\nMetodlar yangi string qaytaradi: trim, toUpperCase, includes, slice, split.\nindexOf topmasa -1 qaytaradi.\n"5" + 1 = "51", "5" - 1 = 4 — + birlashtiradi, - son ga o‘zgartiradi.',
    exercise: '1) const s = "Ali"; s[0] = "B"; natijada s nima?\n2) "5" + 3 va "5" - 3 natijalari?\n3) "JavaScript".indexOf("Script") nima?\n4) "  salom  ".trim().toUpperCase() nima?\n5) "a,b,c".split(",") qanday massiv beradi?'
  },
  {
    id: 'operators',
    title: 'Operatorlar: noldan',
    question: 'Arifmetik, taqsimlash, mantiqiy va shart operatorlari qanday ishlaydi?',
    explanation: 'Operatorlar qiymatlar ustida amal bajaradi. Kod o‘qiyotganda avval operator turini aniqla, keyin qiymatlarning turini tekshir: natija ko‘pincha turga bog‘liq. Mantiqiy operatorlar qiymatni emas, ba’zan operandning o‘zini qaytaradi.',
    sections: [
      {
        title: '1. Arifmetik operatorlar',
        text: '+ (qo‘shish/birlashtirish), - (ayirish), * (ko‘paytirish), / (bo‘linish), % (qoldiq), ** (daraja). Faqat + ikki xil ishlaydi: sonlar uchun qo‘shadi, string bor bo‘lsa birlashtiradi.',
        code: 'console.log(2 + 3); // 5\nconsole.log("2" + 3); // "23"\nconsole.log(10 % 3); // 1\nconsole.log(3 ** 2); // 9'
      },
      {
        title: '2. Taqsimlash (assignment)',
        text: '= qiymat beradi. +=, -=, *=, /=, %= qisqa yozuv: x += 2 x = x + 2 bilan bir xil. Bu o‘zgaruvchining qiymatini o‘zgartiradi.',
        code: 'let x = 5;\nx += 2; // x = x + 2 → 7\nx *= 3; // x = x * 3 → 21\nconsole.log(x); // 21'
      },
      {
        title: '3. Inkrement va dekrement',
        text: '++ qiymatni 1 ga oshiradi, -- kamaytiradi. Prefix (++x) avval oshirib, keyin qiymatni beradi; postfix (x++) avval qiymatni berib, keyin oshiradi. Bu farq kod o‘qishda muhim.',
        code: 'let a = 5;\nconsole.log(a++); // 5 (eski qiymat), keyin a = 6\nconsole.log(a); // 6\n\nlet b = 5;\nconsole.log(++b); // 6 (yangi qiymat)\nconsole.log(b); // 6'
      },
      {
        title: '4. Mantiqiy operatorlar',
        text: '&& (VA), || (YOKI), ! (INKOR). && va || qisqa baholash (short-circuit) qiladi: && chap qiymat falsy bo‘lsa o‘ngni hisoblamaydi; || chap truthy bo‘lsa o‘ngni hisoblamaydi. Ular boolean emas, operandlardan birini qaytaradi.',
        code: 'console.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!0); // true\nconsole.log("Ali" && 5); // 5 (oxirgi truthy)\nconsole.log(0 && 5); // 0 (chap falsy, o‘ng hisoblanmadi)\nconsole.log("Ali" || "Vali"); // "Ali"',
        note: 'Kod o‘qiyotganda "qaysi operand qaytadi?" deb so‘ra: && oxirgi truthy yoki birinchi falsy, || birinchi truthy yoki oxirgi falsy.'
      },
      {
        title: '5. Shart (ternary) operatori',
        text: 'shart ? ha : yo‘q — if/else ning qisqa shakli. Shart truthy bo‘lsa birinchi, aks holda ikkinchi qiymat qaytadi.',
        code: 'const yosh = 18;\nconsole.log(yosh >= 18 ? "kattaman" : "yoshman"); // kattaman\n\nconst x = 0;\nconsole.log(x ? "bor" : "yo\'q"); // yo\'q'
      },
      {
        title: '6. Operator ustunligi',
        text: 'Avval qavs, keyin **, keyin *, /, %, so‘ngra +, -, oxirida taqqoslash va mantiqiy. Qavs qo‘yish eng xavfsiz: hisoblash tartibini eshlash shart emas.',
        code: 'console.log(2 + 3 * 4); // 14 (avval 3*4)\nconsole.log((2 + 3) * 4); // 20\nconsole.log(2 ** 3 ** 2); // 512 (2 ** (3 ** 2))\nconsole.log(1 + 2 + "3"); // "33" (chapdan o‘ngga)'
      },
      {
        title: '7. typeof, void va vergul',
        text: 'typeof qiymat turini string sifatida beradi. void ifodani bajarib undefined qaytaradi (kamdan kam ishlatiladi). Vergul operatori oxirgi ifodani qaytaradi: (1, 2, 3) → 3.',
        code: 'console.log(typeof 5); // "number"\nconsole.log(typeof "5"); // "string"\nconsole.log(void 5); // undefined\nconsole.log((1, 2, 3)); // 3'
      }
    ],
    takeaway: '+ sonlarni qo‘shadi, string bo‘lsa birlashtiradi.\n++ va -- prefix/postfix farqi natijani o‘zgartiradi.\n&& va || boolean emas, operand qaytaradi va qisqa baholaydi.\nTernary ? : — if/else qisqa shakli.\nQavs qo‘yish hisoblash tartibini aniq qiladi.\ntur va qiymatni har doim ajratib o‘qish kerak.',
    exercise: '1) console.log("3" + 2) natijasi?\n2) let x = 1; console.log(x++); console.log(x) natijalari?\n3) "Ali" || "Vali" nima qaytaradi?\n4) 0 && 5 nima va nega 5 hisoblanmaydi?\n5) 2 + 3 * 4 natijasi?'
  },
  {
    id: 'conditionals',
    title: 'Shart operatorlari: if, else, switch',
    question: 'if/else, else if, switch va ternary qanday ishlaydi? Qaysi holatda qaysi birini tanlash kerak?',
    explanation: 'Shart operatori kodning qaysi qismi bajarilishini hal qiladi. JavaScript shartni truthy/falsy qoidasi bilan baholaydi: boolean ga o‘zgartiradi. Kod o‘qiyotganda har bir shartni alohida hisoblab, qaysi tarmoq tanlanishini kuzat.',
    sections: [
      {
        title: '1. if va else',
        text: 'if (shart) truthy bo‘lsa, keyingi block bajariladi. else esa shart falsy bo‘lganda ishlaydi. Faqat bitta tarmoq tanlanadi.',
        code: 'const yosh = 18;\nif (yosh >= 18) {\n  console.log("Kattaman");\n} else {\n  console.log("Yoshman");\n}\n// Natija: Kattaman'
      },
      {
        title: '2. else if zanjiri',
        text: 'Bir nechta shartni ketma-ket tekshirish uchun else if ishlatiladi. Birinchi mos kelgan tarmoq bajarilib, qolganlari tekshirilmaydi. Shuning uchun shartlar tartibi muhim.',
        code: 'const ball = 85;\nif (ball >= 90) {\n  console.log("A");\n} else if (ball >= 70) {\n  console.log("B");\n} else {\n  console.log("C");\n}\n// Natija: B'
      },
      {
        title: '3. Truthy/falsy shart',
        text: 'Shart boolean bo‘lishi shart emas: har qanday qiymat truthy yoki falsy hisoblanadi. 0, "", null, undefined, NaN, false — falsy. Qolgan hammasi, jumladan [] va {} — truthy.',
        code: 'const items = [];\nif (items) {\n  console.log("truthy"); // bu chiqadi\n}\n\nif (items.length > 0) {\n  console.log("element bor"); // bu chiqmaydi\n} else {\n  console.log("bo\'sh"); // bu chiqadi\n}',
        note: 'Bo‘sh massiv truthy. Element borligini tekshirish uchun items.length > 0 kerak.'
      },
      {
        title: '4. switch',
        text: 'switch qiymatni bir nechta holat (case) bilan solishtiradi. Solishtirish === bilan qilinadi (qat’iy tenglik). break bo‘lmasa, keyingi case ga "tushib qoladi" (fall-through).',
        code: 'const kun = "dushanba";\nswitch (kun) {\n  case "dushanba":\n    console.log("Birinchi kun");\n    break;\n  case "juma":\n    console.log("Oxirgi ish kuni");\n    break;\n  default:\n    console.log("Boshqa kun");\n}\n// Natija: Birinchi kun'
      },
      {
        title: '5. break unutish tuzog‘i',
        text: 'Agar case ichida break yo‘q bo‘lsa, bajarilish keyingi case ga davom etadi. Bu ba’zan foydali, lekin ko‘pincha xato bo‘ladi.',
        code: 'const x = 1;\nswitch (x) {\n  case 1:\n    console.log("bir");\n  case 2:\n    console.log("ikki");\n    break;\n  default:\n    console.log("boshqa");\n}\n// Natija: bir, ikki (break yo\'q edi)'
      },
      {
        title: '6. Ternary va qisqa baholash',
        text: 'Oddiy shartni ternary bilan qisqa yozish mumkin. Bir nechta shartni zanjirlab ham yozish mumkin, lekin o‘qilishi qiyinlashadi. && va || ham shart sifatida ishlatiladi.',
        code: 'const yosh = 20;\nconst xabar = yosh >= 18 ? "katta" : "yosh";\nconsole.log(xabar); // katta\n\n// qisqa baholash bilan:\nconst nom = xabar && xabar.toUpperCase();\nconsole.log(nom); // KATTA'
      }
    ],
    takeaway: 'if/else — ikki tarmoq; else if — ko‘p tarmoq, birinchi mos kelsa to‘xtaydi.\nShart truthy/falsy qoidasi bilan baholanadi.\n[] va {} truthy, bo‘shligi muhim emas.\nswitch === bilan solishtiradi, break bo‘lmasa keyingi case ga o‘tadi.\nTernary oddiy shart uchun qisqa yozuv.',
    exercise: '1) const x = 0; if (x) ... qaysi tarmoq?\n2) switch da break unutilsa nima bo‘ladi?\n3) [] truthy mi? Element borligini qanday tekshirasiz?\n4) ball = 85 bo‘lsa, yuqoridagi else if zanjirida nima chiqadi?'
  },
  {
    id: 'loops',
    title: 'Tsikllar: for, while, for...of, for...in',
    question: 'Tsikllar qanday ishlaydi? for, while, for...of va for...in farqi nima? break/continue nima qiladi?',
    explanation: 'Tsikl bir amalni bir necha marta takrorlaydi. Kod o‘qiyotganda uch narsani kuzat: boshlang‘ich qiymat, to‘xtash sharti va har qadamda o‘zgarish. noto‘g‘ri shart cheksiz tsiklga olib keladi.',
    sections: [
      {
        title: '1. Oddiy for',
        text: 'for (boshlash; shart; o‘zgartirish) tuzilmasiga ega. Har takrorlashda avval shart tekshiriladi, so‘ng block bajariladi, keyin o‘zgartirish amalga oshiriladi.',
        code: 'for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n// Natija: 0, 1, 2\n\nfor (let i = 3; i > 0; i--) {\n  console.log(i);\n}\n// Natija: 3, 2, 1'
      },
      {
        title: '2. while va do...while',
        text: 'while shart truthy ekan takrorlaydi. do...while esa blockni kamida bir marta bajaradi, keyin shartni tekshiradi.',
        code: 'let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}\n// 0, 1, 2\n\nlet j = 10;\ndo {\n  console.log(j); // kamida bir marta bajariladi\n} while (j < 3);\n// 10'
      },
      {
        title: '3. break va continue',
        text: 'break tsiklni to‘liq to‘xtatadi. continue faqat joriy takrorlashni o‘tkazib, keyingisiga o‘tadi.',
        code: 'for (let i = 0; i < 5; i++) {\n  if (i === 2) continue; // 2 ni o\'tkazamiz\n  if (i === 4) break;    // 4 da to\'xtaymiz\n  console.log(i);\n}\n// Natija: 0, 1, 3'
      },
      {
        title: '4. for...of — qiymatlar bo‘yicha',
        text: 'for...of massiv, string, Map, Set kabi iteratsiya qilinadigan obyektlarning qiymatlarini beradi. Massiv indeksini emas, elementni oladi.',
        code: 'const sonlar = [10, 20, 30];\nfor (const son of sonlar) {\n  console.log(son); // 10, 20, 30\n}\n\nfor (const harf of "Ali") {\n  console.log(harf); // A, l, i\n}'
      },
      {
        title: '5. for...in — kalitlar bo‘yicha',
        text: 'for...in obyektning o‘z va meros qilingan sanab o‘tiladigan (enumerable) kalitlarini beradi. Massivda ham ishlaydi, lekin indekslarni string sifatida beradi. Massiv uchun for...of yaxshiroq.',
        code: 'const user = { ism: "Ali", yosh: 20 };\nfor (const kalit in user) {\n  console.log(kalit, user[kalit]);\n}\n// ism Ali, yosh 20\n\nconst arr = [10, 20];\nfor (const i in arr) {\n  console.log(typeof i); // "string" — indeks string!\n}'
      },
      {
        title: '6. Har qadamda yangi scope',
        text: 'for (let i = ...) da har bir takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.',
        code: 'for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2 (let)\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3 (var — bitta j)'
      },
      {
        title: '7. Cheksiz tsikl tuzog‘i',
        text: 'Agar o‘zgartirish qismi yo‘q bo‘lsa yoki shart hech qachon falsy bo‘lmasa, tsikl to‘xtamaydi. Kod o‘qiyotganda "bu tsikl qachon to‘xtaydi?" degan savolga javob topish shart.',
        code: '// let i = 0;\n// while (i < 3) {\n//   console.log(i); // i o\'zgarmaydi → cheksiz\n// }\n\nlet k = 0;\nwhile (k < 3) {\n  console.log(k);\n  k += 1; // to\'g\'ri: har qadam oshadi\n}'
      }
    ],
    takeaway: 'for: boshlash/shart/o‘zgartirish; shart avval tekshiriladi.\nwhile shart truthy ekan, do...while kamida bir marta bajaradi.\nbreak to‘xtatadi, continue keyingi qadamga o‘tadi.\nfor...of qiymat, for...in kalit (string) beradi.\nlet har takrorlashda yangi scope yaratadi, var esa bitta.\nHar tsiklda "qachon to‘xtaydi?" deb so‘ra.',
    exercise: '1) for (let i=0; i<3; i++) necha marta bajariladi va qanday qiymatlar chiqadi?\n2) break va continue farqi?\n3) for...of va for...in farqi nima?\n4) let o‘rniga var ishlatilsa setTimeout misolida nima chiqadi?'
  }
);
