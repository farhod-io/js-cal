// Barcha o'quv ma'lumotlari bitta faylda: 62 dars, 66 test, 10 kod labi.
// Tartib: darslar 0 dan boshlab bosqichma-bosqich joylashtirilgan.

window.lessons = [
  {
    "id": "var-let-const",
    "title": "var, let va const farqi",
    "question": "Scope, qayta deklaratsiya, hoisting, TDZ xatosi va block nima?",
    "explanation": "Uchovlon ham o‘zgaruvchi e’lon qiladi. Asosiy farq: nomning qayerda ko‘rinishi, uni qayta e’lon qilish va unga yangi qiymat berish qoidalarida. Har bir kod misolini alohida sinab ko‘ring. Izohdagi xato satrlari ataylab o‘chirib qo‘yilgan.",
    "comparison": true,
    "sections": [
      {
        "title": "Avval: o‘zgaruvchi nima?",
        "text": "O‘zgaruvchi — qiymatga berilgan nom. Masalan, yosh nomida 20 qiymatini saqlash mumkin. let bilan keyin yangi qiymat berasiz; qayta qiymat berganda let yana yozilmaydi. const bilan yaratilgan o‘zgaruvchiga boshqa qiymat berib bo‘lmaydi. var ham o‘zgaruvchi yaratadi; keyingi qadamlarda uning farqlarini ko‘ramiz.",
        "code": "let yosh = 20;\nyosh = 21;\nconsole.log(yosh); // 21\n\nconst yil = 2026;\n// yil = 2027; // TypeError: const ga qayta qiymat berib bo‘lmaydi",
        "note": "Mashq: let son = 5; son = son + 3; son = son * 2; console.log(son); — natijani avval o‘zingiz toping. Keyin kodni ishga tushirib tekshiring."
      },
      {
        "title": "1. Deklaratsiya va qayta qiymat berish",
        "text": "Deklaratsiya — o‘zgaruvchini e’lon qilish. Qayta qiymat berish — mavjud o‘zgaruvchining qiymatini yangilash. Qayta deklaratsiya esa bir nomni o‘sha scope ichida yana e’lon qilishdir.",
        "code": "let yosh = 20; // deklaratsiya\nyosh = 21;     // qayta qiymat berish\n\nvar son = 1;\nvar son = 2;   // mumkin: qayta deklaratsiya\n\n// Quyidagilarni alohida sinab ko‘ring:\nlet ism = \"Ali\";\nlet ism = \"Vali\"; // SyntaxError: bir scope ichida takroriy nom",
        "note": "let va const bilan bir scope ichida shu nomni qayta e’lon qilib bo‘lmaydi. var ham shu scope ichidagi let yoki const nomini takrorlay olmaydi."
      },
      {
        "title": "2. Block nima?",
        "text": "Block — bir nechta buyruqni guruhlaydigan { } oralig‘i. Masalan, if yoki for tanasi. Alohida yozilgan { } ham block bo‘lishi mumkin. Har qanday { } block emas: const user = { name: \"Ali\" } ichidagi qavslar obyekt yaratadi.",
        "code": "if (true) {\n  let xabar = \"Salom\";\n  console.log(xabar); // Salom\n} // block tugadi"
      },
      {
        "title": "3. Scope — qayerdan foydalanish mumkin?",
        "text": "Scope — o‘zgaruvchi nomi ko‘rinadigan hudud. Ichki hudud tashqaridagi nomga murojaat qila oladi; tashqi hudud esa ichkaridagi mahalliy nomni ko‘ra olmaydi. let va const block bilan chegaralanadi. var esa oddiy if yoki for blockiga bog‘lanmaydi, uni o‘rab turgan funksiyaga bog‘lanadi.",
        "code": "function tekshir() {\n  if (true) {\n    var a = 10;\n    let b = 20;\n    const c = 30;\n    console.log(b, c); // 20 30\n  }\n  console.log(a); // 10\n  // console.log(b); // ReferenceError\n  // console.log(c); // ReferenceError\n}\ntekshir();\n// console.log(a); // ReferenceError: a funksiya ichida",
        "note": "Funksiyadan tashqaridagi deklaratsiyalar global yoki modul scope’ida bo‘lishi mumkin. Shuning uchun “var doim hamma joyda ko‘rinadi” deyish noto‘g‘ri."
      },
      {
        "title": "4. Boshqa blockda bir xil nom",
        "text": "Yangi ichki blockda let yoki const bilan shu nomni e’lon qilish mumkin. Bu qayta deklaratsiya emas, alohida o‘zgaruvchi: ichki nom tashqi nomni vaqtincha soyada qoldiradi (shadowing).",
        "code": "let son = 1;\n{\n  let son = 2;\n  console.log(son); // 2\n}\nconsole.log(son);   // 1"
      },
      {
        "title": "5. Hoisting nima?",
        "text": "Hoisting — kod bajarilishidan oldin deklaratsiyalar uchun nomlar tayyorlanishini tushuntiradigan atama. Kod satrlari haqiqatan tepaga ko‘chirilmaydi. var nomi oldindan yaratiladi va undefined bilan boshlanadi. let va const nomlari ham scope boshidan mavjud bo‘ladi, ammo deklaratsiya bajarilguncha ulardan foydalanib bo‘lmaydi.",
        "code": "console.log(a); // undefined\nvar a = 10;\nconsole.log(a); // 10\n\n// Alohida misol:\nconsole.log(b); // ReferenceError (TDZ)\nlet b = 20;",
        "note": "var uchun faqat deklaratsiya oldindan tayyorlanadi, “= 10” qiymat berilishi o‘z satriga kelganda bajariladi. Jadvaldagi “hammasida hoisting bor” degani hammasini oldindan o‘qish mumkin degani emas."
      },
      {
        "title": "6. TDZ va uning xatosi",
        "text": "TDZ — Temporal Dead Zone, ya’ni vaqtinchalik foydalanib bo‘lmaydigan davr. let yoki const joylashgan scope’ga kirishdan deklaratsiya bajarilguncha davom etadi. Shu oraliqda nomni o‘qish yoki unga qiymat berish ReferenceError keltirib chiqaradi. “TDZError” degan alohida xato turi yo‘q.",
        "code": "{\n  // Shu yerda narx TDZ ichida.\n  // console.log(narx); // ReferenceError\n  let narx = 100; // TDZ tugadi\n  console.log(narx); // 100\n}\n\nlet x = 5;\n{\n  // console.log(x); // ReferenceError! Tashqi 5 o‘qilmaydi.\n  let x = 10;\n}\n\nlet tayyor;\nconsole.log(tayyor); // undefined: deklaratsiya bajarilgan",
        "note": "Ichkarida let x borligi uchun bu block boshidanoq x ichki nomga tegishli. Hatto typeof x ham TDZ vaqtida ReferenceError beradi."
      },
      {
        "title": "7. const nimani o‘zgartirmaydi?",
        "text": "const deklaratsiya vaqtida qiymat talab qiladi va keyin o‘zgaruvchiga boshqa qiymat biriktirishga ruxsat bermaydi. Lekin obyekt yoki massivning ichki tarkibi o‘zgarishi mumkin.",
        "code": "const yosh = 20;\n// yosh = 21; // TypeError\n// const nom; // SyntaxError (oddiy deklaratsiyada)\n\nconst user = { ism: \"Ali\" };\nuser.ism = \"Vali\"; // mumkin\n// user = { ism: \"Hasan\" }; // TypeError\n\nconst sonlar = [1, 2];\nsonlar.push(3); // mumkin: [1, 2, 3]",
        "note": "Oddiy qoida: avval const ishlat. Keyin boshqa qiymat biriktirish kerak bo‘lsa let tanla. Eski koddagi var qanday ishlashini ham bilib ol."
      }
    ],
    "takeaway": "var — function scope, qayta qiymat va var bilan qayta deklaratsiya mumkin.\nlet — block scope, qayta qiymat mumkin, bir scope ichida qayta deklaratsiya yo‘q.\nconst — block scope, qayta qiymat ham, bir scope ichida qayta deklaratsiya ham yo‘q.\nvar deklaratsiyadan oldin undefined; let/const esa TDZ sabab ReferenceError beradi.",
    "exercise": "Kodni ishga tushirmasdan javob ber:\n\nlet a = 1;\n{\n  let a = 2;\n  console.log(a);\n}\nconsole.log(a);\n\n1) Ikkala console.log nima chiqaradi?\n2) Ichki let a o‘rniga var a yozilsa nima bo‘ladi?\n3) const list = []; list.push(1) mumkinmi? Nega?"
  },
  {
    "id": "scope",
    "title": "Scope: global, function va block",
    "question": "Scope nima? Global scope, function scope va block scope qanday ishlaydi?",
    "explanation": "Scope — kodning ma’lum joyidan qaysi o‘zgaruvchi nomlarini ishlata olishimizni belgilaydigan hudud. Buni uyga o‘xshat: global — umumiy hovli, funksiya — xona, block — xona ichidagi kichik hudud. Ichkaridan tashqaridagi nomlarni topish mumkin; tashqaridan ichkaridagi mahalliy nomlar ko‘rinmaydi. Misollar deklaratsiyalar bajarilganidan keyingi holatni ko‘rsatadi.",
    "interactiveScope": true,
    "sections": [
      {
        "title": "1. Global scope",
        "text": "Funksiya va blocklardan tashqarida, oddiy scriptning yuqori darajasida e’lon qilingan nom global scope’da bo‘ladi. Shu muhitdagi ichki funksiyalar va blocklar unga murojaat qilishi mumkin. Global degani barcha fayllar yoki barcha brauzer tablarida avtomatik mavjud degani emas.",
        "code": "const til = \"JavaScript\";\n\nfunction salom() {\n  console.log(til); // JavaScript\n}\nsalom();\nconsole.log(til);   // JavaScript",
        "note": "Bu misol oddiy script uchun. type=\"module\" faylining yuqori darajasidagi nomlar modul scope’ida bo‘ladi. Brauzerda global let/const window xususiyati bo‘lib qolmaydi."
      },
      {
        "title": "2. Function scope",
        "text": "Funksiya ichida e’lon qilingan mahalliy nomni tashqaridan ishlatib bo‘lmaydi. var eng yaqin funksiyaga bog‘lanadi. let va const ham funksiya tanasida mahalliy, lekin qo‘shimcha ichki block bilan chegaralanishi mumkin.",
        "code": "function tanish() {\n  var ism = \"Ali\";\n  console.log(ism); // Ali\n}\n\ntanish();\n// console.log(ism); // ReferenceError\n// Funksiyani chaqirish uning mahalliy nomini global qilmaydi."
      },
      {
        "title": "3. Block scope",
        "text": "if, for yoki alohida { } ichida let/const bilan yaratilgan nom shu block ichida va uning ichki hududlarida ko‘rinadi. var oddiy block chegarasiga bo‘ysunmaydi.",
        "code": "function misol() {\n  if (true) {\n    let yosh = 20;\n    const shahar = \"Toshkent\";\n    var ball = 100;\n    console.log(yosh, shahar); // 20 Toshkent\n  }\n  console.log(ball); // 100: var funksiya ichida qoladi\n  // console.log(yosh); // ReferenceError\n}\nmisol();"
      },
      {
        "title": "4. Scope chain — nom qayerdan qidiriladi?",
        "text": "JavaScript avval hozirgi scope’dan qidiradi. Topilmasa, tashqi scope’ga chiqadi va shu tartibda davom etadi. Globalgacha topilmasa, oddiy o‘qishda ReferenceError bo‘ladi. Ichkaridagi bir xil nom tashqaridagini soyada qoldiradi (shadowing).",
        "code": "const ism = \"Global Ali\";\nfunction salom() {\n  const ism = \"Mahalliy Vali\";\n  {\n    console.log(ism); // Mahalliy Vali\n  }\n}\nsalom();\nconsole.log(ism); // Global Ali",
        "note": "Scope funksiya qayerda yozilganiga bog‘liq (lexical scope), qayerdan chaqirilganiga emas. Nom topilsa-yu TDZ ichida bo‘lsa, qidiruv tashqariga davom etmaydi — ReferenceError chiqadi."
      }
    ],
    "code": "const til = \"JS\";          // global\n\nfunction dars() {\n  var ism = \"Ali\";         // function\n\n  if (true) {\n    let yosh = 20;        // block\n    console.log(til);     // JS\n    console.log(ism);     // Ali\n    console.log(yosh);    // 20\n  }\n\n  console.log(ism);       // Ali\n  // console.log(yosh);   // ReferenceError\n}\n\ndars();\nconsole.log(til);         // JS\n// console.log(ism);      // ReferenceError",
    "takeaway": "Global → tashqi umumiy hudud (oddiy script misolida).\nFunction → funksiyaning mahalliy hududi.\nBlock → { } ichidagi let/const hududi.\nNom qidirish yo‘nalishi: ichkaridan tashqariga.",
    "exercise": "Interaktiv misolda avval Global, so‘ng Function, keyin Block tugmasini bos. Har birida qaysi nomlar ko‘rinishini oldindan taxmin qil.\n\nEndi o‘yla: let yosh o‘rniga var yosh yozsak, funksiya ichida if’dan keyin yosh ko‘rinadimi? Funksiyadan tashqarida-chi?"
  },
  {
    "id": "hoisting-tdz",
    "title": "Hoisting va Temporal Dead Zone (TDZ)",
    "question": "Hoisting nima? Uning muhim joylari va TDZ qanday ishlaydi?",
    "explanation": "Hoisting — kod bajarilishidan oldin deklaratsiyalar uchun nomlar tayyorlanishini tushuntiradigan atama. Kod satrlari haqiqatan tepaga ko‘chmaydi. Muhim savol: nom tayyorlanganda u foydalanishga ham tayyormi? var uchun boshlang‘ich qiymat undefined; let va const uchun esa deklaratsiya bajarilguncha foydalanish taqiqlangan.",
    "sections": [
      {
        "title": "1. var: nom tayyor, qiymat hali berilmagan",
        "text": "var nomi o‘z scope’i tayyorlanganda yaratiladi va undefined bilan boshlanadi. Lekin = 10 kabi qiymat berish faqat shu satr bajarilganda sodir bo‘ladi.",
        "code": "console.log(son); // undefined\nvar son = 10;\nconsole.log(son); // 10",
        "note": "undefined xato emas, bu qiymat. Umuman e’lon qilinmagan nomni oddiy o‘qish esa ReferenceError beradi."
      },
      {
        "title": "2. let va const: nom bor, foydalanish hali mumkin emas",
        "text": "let va const ham o‘z scope’i boshidan nomni band qiladi. Ammo ular dastlab initialization qilinmagan, ya’ni foydalanishga tayyor emas. Deklaratsiya bajarilguncha ularga murojaat ReferenceError beradi.",
        "code": "// Har bir misolni alohida ishga tushiring.\nconsole.log(yosh); // ReferenceError\nlet yosh = 20;\n\n// Alohida misol:\nconsole.log(PI); // ReferenceError\nconst PI = 3.14;",
        "note": "“let va const hoisting bo‘lmaydi” deyish chalg‘itadi. Aniq farq: var undefined bilan tayyor; let va const esa TDZ ichida."
      },
      {
        "title": "3. TDZ — vaqtinchalik foydalanish taqiqlangan oraliq",
        "text": "Temporal Dead Zone scope’ga kirilgan paytdan let yoki const deklaratsiyasi bajarilib, nom foydalanishga tayyor bo‘lguncha davom etadi. TDZ faqat deklaratsiyadan bitta oldingi satr emas — scope boshidan boshlanadi.",
        "code": "{\n  // ↓ TDZ boshlandi\n  // console.log(narx); // ReferenceError\n  // narx = 50;         // ReferenceError\n\n  let narx = 100;       // TDZ tugadi\n  console.log(narx);    // 100\n}\n\nlet tayyor;            // deklaratsiya bajarildi: undefined\nconsole.log(tayyor);   // undefined, TDZ emas",
        "note": "TDZError degan alohida xato turi yo‘q. TDZ sabab chiqadigan xato — ReferenceError. Xato ushlanmasa, joriy bajarilish to‘xtaydi; pastdagi satrlar davom etmaydi."
      },
      {
        "title": "4. Ichki nom tashqi nomni scope boshidanoq soyada qoldiradi",
        "text": "JavaScript ichki scope’da nomni topsa, tashqaridagi shu nomga o‘tib ketmaydi. Ichki nom TDZ ichida bo‘lsa, xato beradi.",
        "code": "let son = 5;\n\n{\n  // console.log(son); // ReferenceError, tashqi 5 emas!\n  let son = 10;\n  console.log(son);    // 10\n}\nconsole.log(son);      // 5"
      },
      {
        "title": "5. typeof ham TDZ’dan qutqarmaydi",
        "text": "typeof umuman mavjud bo‘lmagan oddiy nom uchun \"undefined\" satrini qaytaradi. Ammo TDZ ichidagi nomga typeof ishlatish ham ReferenceError beradi.",
        "code": "console.log(typeof mavjudEmas); // \"undefined\"\n\n{\n  // console.log(typeof yosh); // ReferenceError\n  let yosh = 20;\n}"
      },
      {
        "title": "6. Function declaration va function expression farqi",
        "text": "Oddiy function declaration scope tayyorlanganda funksiyaning o‘zi bilan tayyor bo‘ladi: uni deklaratsiyadan oldin chaqirish mumkin. Funksiya let/const/var ga qiymat sifatida berilsa, o‘sha o‘zgaruvchining qoidalari ishlaydi. Bu misollar block ichidagi function declaration’larning muhitga bog‘liq holatlarini qamramaydi.",
        "code": "salom(); // Salom\nfunction salom() {\n  console.log(\"Salom\");\n}\n\n// Quyidagi misollarni alohida sinang:\n// kutibOl(); // ReferenceError: const TDZ ichida\nconst kutibOl = () => console.log(\"Salom\");\n\n// xayr(); // TypeError: undefined funksiya emas\nvar xayr = function () {\n  console.log(\"Xayr\");\n};",
        "note": "var bilan funksiya ifodasi: nomni o‘qish mumkin, qiymati undefined; uni chaqirish TypeError beradi. const bilan funksiya ifodasi: nomni deklaratsiyadan oldin o‘qishning o‘zi ReferenceError."
      }
    ],
    "takeaway": "1. Hoisting kodni haqiqatan tepaga ko‘chirmaydi.\n2. var oldindan undefined bilan tayyorlanadi; qiymat berish ko‘tarilmaydi.\n3. let/const deklaratsiya bajarilguncha TDZ ichida.\n4. TDZ’da o‘qish, qiymat berish va typeof — ReferenceError.\n5. Function declaration’ni oldin chaqirish mumkin; function expression o‘zgaruvchi qoidasiga bo‘ysunadi.\n6. Amaliy odat: o‘zgaruvchini ishlatishdan oldin e’lon qil.",
    "exercise": "Har birini alohida misol deb ol. Javoblarni taxmin qil:\n\nA) console.log(a); var a = 7;\nB) console.log(b); let b = 7;\nC) let c; console.log(c);\nD) ish(); var ish = () => 7;\n\nQaysi biri undefined, qaysi biri ReferenceError, qaysi biri TypeError beradi?"
  },
  {
    "id": "typeof",
    "title": "typeof operatori",
    "question": "typeof nima qiladi? 20 bilan \"20\" ning turi nega boshqa? Qiymat va uning turini qanday ajrataman?",
    "explanation": "typeof — qiymatning turini aniqlaydigan operator. Buni “bu qiymat sonmi, matnmi yoki boshqa turmi?” degan savol sifatida tushuning. Avval qiymatning o‘zini ko‘rishni, keyin uning turini ko‘rishni o‘rganamiz. Pastda barcha tushuntirishlar ketma-ket berilgan. Kodlarni alohida konsolda sinab ko‘ring.",
    "sections": [
      {
        "title": "1. Qiymat bilan tur bir xil narsa emas",
        "text": "let yosh = 20 satrida yosh — nom, 20 — uning qiymati. console.log(yosh) qiymatni chiqaradi. console.log(typeof yosh) esa shu qiymat qaysi turga tegishli ekanini aytadi. number inglizcha “son” degani.",
        "code": "let yosh = 20;\n\nconsole.log(yosh);        // 20 — qiymati\nconsole.log(typeof yosh); // \"number\" — turi",
        "note": "1. yosh nomli o‘zgaruvchiga 20 berildi.\n2. yosh ni o‘qisak 20 olinadi.\n3. typeof yosh ni hisoblasak \"number\" matni olinadi.\n4. console.log shu natijani ko‘rsatadi. typeof qiymatni o‘zgartirmaydi."
      },
      {
        "title": "2. Qo‘shtirnoq turga ta’sir qiladi",
        "text": "20 — qo‘shtirnoqsiz son. \"20\" esa raqamlardan tuzilgan matn. typeof qiymatning qanday ko‘rinishiga emas, qaysi turga tegishli ekaniga qaraydi. string — matn degani.",
        "code": "console.log(typeof 20);   // \"number\"\nconsole.log(typeof \"20\"); // \"string\"\nconsole.log(typeof \"Ali\"); // \"string\"",
        "note": "\"20\" ichida raqamlar bo‘lishi uni number qilib qo‘ymaydi. Matn qo‘shtirnoq bilan yaratilgan. O‘zgaruvchi yosh deb nomlangani uchun ham uning turi avtomatik number bo‘lmaydi: let yosh = \"20\" bo‘lsa, typeof yosh natijasi \"string\"."
      },
      {
        "title": "3. true bilan \"true\" ham farq qiladi",
        "text": "Qo‘shtirnoqsiz true va false — boolean qiymatlar. Ular rost yoki yolg‘onni bildiradi. \"true\" yoki \"false\" qo‘shtirnoqda yozilsa, oddiy string bo‘ladi.",
        "code": "let talaba = true;\nlet javob = \"false\";\n\nconsole.log(typeof talaba); // \"boolean\"\nconsole.log(typeof javob);  // \"string\"\nconsole.log(typeof false);  // \"boolean\"",
        "note": "typeof javob qiymati false yoki true ekanini tekshirmaydi. U qiymatning turini aytadi. \"false\" so‘zining ma’nosi yolg‘on bo‘lsa ham, qo‘shtirnoqda yozilgani uchun uning turi string."
      },
      {
        "title": "4. Qiymat berilmagan o‘zgaruvchi",
        "text": "O‘zgaruvchini yaratib, unga qiymat bermasak, qiymati undefined bo‘ladi. typeof bunday qiymat uchun \"undefined\" matnini qaytaradi.",
        "code": "let ism;\n\nconsole.log(ism);        // undefined — qiymati\nconsole.log(typeof ism); // \"undefined\" — turining nomi",
        "note": "console.log dagi natijalar o‘xshab ko‘rinsa ham, undefined qiymati bilan \"undefined\" matni boshqa-boshqa narsalar."
      },
      {
        "title": "5. typeof javobi doim matn bo‘ladi",
        "text": "typeof 20 natijasi \"number\". Bu javobning o‘zi matn. Uni o‘zgaruvchiga saqlab ko‘rsak, farq yanada aniq bo‘ladi. typeof operator bo‘lib, typeof qiymat va typeof(qiymat) yozuvlari ishlaydi.",
        "code": "const tur = typeof 20;\n\nconsole.log(tur);        // \"number\"\nconsole.log(typeof tur); // \"string\"\nconsole.log(typeof(20)); // \"number\"",
        "note": "Ikkinchi qatordagi typeof tur sonni emas, tur ichidagi \"number\" matnini tekshiryapti. Shuning uchun \"string\" chiqadi. typeof typeof 20 ham shu tartibda hisoblanadi."
      },
      {
        "title": "6. Barcha asosiy natijalarni bir joyda ko‘rish",
        "text": "Oddiy holatlarni tushungach, quyidagi jadval bilan turlarni takrorlang. typeof natijalari kichik harflar bilan yoziladi. NaN va Infinity ham number turiga kiradi; ularning xususiyatini keyinroq ko‘ramiz.",
        "code": "console.log(typeof 10);        // \"number\"\nconsole.log(typeof \"Hello\");   // \"string\"\nconsole.log(typeof true);      // \"boolean\"\nconsole.log(typeof undefined); // \"undefined\"\nconsole.log(typeof 123n);      // \"bigint\"\nconsole.log(typeof Symbol());  // \"symbol\"\nconsole.log(typeof NaN);       // \"number\"\nconsole.log(typeof Infinity);  // \"number\"\nconsole.log(typeof typeof 10); // \"string\"",
        "table": {
          "headers": [
            "Qiymat",
            "typeof natijasi"
          ],
          "rows": [
            [
              "20",
              "\"number\""
            ],
            [
              "\"Ali\"",
              "\"string\""
            ],
            [
              "true yoki false",
              "\"boolean\""
            ],
            [
              "undefined",
              "\"undefined\""
            ],
            [
              "123n",
              "\"bigint\""
            ],
            [
              "Symbol(\"id\")",
              "\"symbol\""
            ],
            [
              "null",
              "\"object\" — maxsus holat"
            ],
            [
              "{} yoki []",
              "\"object\""
            ],
            [
              "funksiya",
              "\"function\""
            ]
          ]
        }
      },
      {
        "title": "7. null: tarixiy g‘alati holat",
        "text": "null — qiymat ataylab yo‘qligini bildiruvchi primitive qiymat. Ammo typeof null \"object\" qaytaradi. Bu JavaScript’ning dastlabki implementatsiyasidan qolgan tarixiy xususiyat; null aslida obyekt degani emas. null’ni aniq tekshirish uchun === null ishlat.",
        "code": "const user = null;\n\nconsole.log(typeof user);  // \"object\"\nconsole.log(user === null); // true"
      },
      {
        "title": "8. Massiv: obyektning maxsus ko‘rinishi",
        "text": "[] uchun \"object\" chiqishi xato emas: massiv JavaScript’da obyektning maxsus ko‘rinishi. typeof massivni oddiy obyektdan ajratmaydi. Buning uchun Array.isArray ishlatiladi.",
        "code": "console.log(typeof []);           // \"object\"\nconsole.log(typeof {});           // \"object\"\nconsole.log(Array.isArray([]));   // true\nconsole.log(Array.isArray({}));   // false\nconsole.log(Array.isArray(null)); // false",
        "note": "Demak, null va [] bir xil sababdan \"object\" qaytarmaydi: null — tarixiy g‘alati holat; massiv esa haqiqatan obyekt."
      },
      {
        "title": "9. Funksiya uchun alohida natija",
        "text": "Funksiyalar ham obyektlar, lekin typeof ularni \"function\" deb ajratib ko‘rsatadi.",
        "code": "function salom() {}\nconsole.log(typeof salom);       // \"function\"\nconsole.log(typeof (() => {})); // \"function\""
      },
      {
        "title": "10. E’lon qilinmagan nom va TDZ farqi",
        "text": "typeof oddiy e’lon qilinmagan nom uchun \"undefined\" qaytaradi. Lekin shu scope ichidagi let/const nomi hali TDZ’da bo‘lsa, typeof ham ReferenceError beradi.",
        "code": "console.log(typeof mavjudEmas); // \"undefined\"\n\n{\n  // console.log(typeof yosh); // ReferenceError\n  let yosh = 20;\n  console.log(typeof yosh);   // \"number\"\n}"
      },
      {
        "title": "11. Natijani string bilan solishtir",
        "text": "typeof natijasi har doim string bo‘lgani uchun uni \"number\", \"string\" kabi matn bilan solishtiramiz. typeof umumiy turni aytadi; qiymat to‘g‘riligini to‘liq tekshirmaydi. Masalan, NaN ham \"number\".",
        "code": "const yosh = 20;\nconsole.log(typeof yosh === \"number\"); // true\n\nconst qiymat = NaN;\nconsole.log(typeof qiymat);         // \"number\"\nconsole.log(Number.isNaN(qiymat));  // true\nconsole.log(Number.isFinite(20));   // true\nconsole.log(Number.isFinite(NaN));  // false\nconsole.log(Number.isFinite(Infinity)); // false"
      }
    ],
    "takeaway": "console.log(qiymat) — qiymatning o‘zini chiqaradi.\ntypeof qiymat — uning turini matn qilib qaytaradi.\n20 → \"number\"; \"20\" → \"string\"; true → \"boolean\".\nnull → \"object\" — tarixiy maxsus holat, null obyekt emas.\nMassiv uchun typeof ham \"object\" qaytaradi; aniq tekshirish uchun Array.isArray ishlatiladi.\nNaN ham \"number\". typeof qiymatning to‘g‘riligini to‘liq tekshirmaydi.\nlet/const TDZ ichida typeof ham ReferenceError berishi mumkin.",
    "exercise": "Har bir qatorda nima chiqishini avval o‘zingiz yozing. Qo‘shtirnoq bor-yo‘qligiga e’tibor bering. Keyin javobni ochib sababini tekshiring.",
    "fullTextDefault": true,
    "exerciseCode": "let yosh = 20;\nlet matn = \"20\";\nlet javob = \"false\";\nlet ism;\n\nconsole.log(typeof yosh);        // 1: ?\nconsole.log(typeof matn);        // 2: ?\nconsole.log(typeof javob);       // 3: ?\nconsole.log(typeof true);        // 4: ?\nconsole.log(typeof ism);         // 5: ?\nconsole.log(typeof null);        // 6: ?\nconsole.log(Array.isArray([]));  // 7: ?\nconsole.log(typeof typeof 20);   // 8: ?",
    "exerciseAnswer": "1. \"number\" — 20 son.\n2. \"string\" — \"20\" qo‘shtirnoqdagi matn.\n3. \"string\" — \"false\" ham matn.\n4. \"boolean\" — true qo‘shtirnoqsiz boolean qiymat.\n5. \"undefined\" — ism ga hali qiymat berilmagan.\n6. \"object\" — null uchun tarixiy maxsus natija; null aslida primitive qiymat.\n7. true — [] massiv, Array.isArray shuni tekshiradi.\n8. \"string\" — ichki typeof 20 avval \"number\" matnini beradi, tashqi typeof shu matnning turini tekshiradi."
  },
  {
    "id": "coercion-equality",
    "title": "Type coercion, == va === qoidalari",
    "question": "Avtomatik tur o‘zgartirish qanday ishlaydi? Ikki teng va uch teng farqi, batafsil qoidalari qanday?",
    "explanation": "Type coercion — amal bajarilayotganda JavaScript qiymatni kerakli turga avtomatik aylantirishi. Masalan, \"5\" - 2 sonli hisoblash uchun 5 - 2 bo‘ladi. Number(\"5\") esa o‘zing aniq yozgan tur o‘zgartirish (explicit conversion). Bu amallar boshlang‘ich o‘zgaruvchi qiymatini o‘z-o‘zidan almashtirmaydi.",
    "sections": [
      {
        "title": "1. +: son qo‘shish yoki matn birlashtirish",
        "text": "Avval operandlar primitive qiymatga keltiriladi. Shundan so‘ng bittasi string bo‘lsa, ikkinchisi ham string qilinib birlashtiriladi. Aks holda sonli qo‘shish bajariladi. Bir qatordagi + amallari chapdan o‘ngga hisoblanadi.",
        "code": "console.log(\"5\" + 2);     // \"52\"\nconsole.log(5 + 2);       // 7\nconsole.log(1 + 2 + \"3\"); // \"33\": 3 + \"3\"\nconsole.log(\"1\" + 2 + 3); // \"123\": \"12\" + 3\nconsole.log(true + 1);    // 2\nconsole.log(null + 1);    // 1",
        "note": "BigInt bilan Number’ni arifmetik amalda aralashtirish TypeError beradi: 1n + 1. Ammo \"1\" + 1n matn birlashtirish bo‘lib \"11\" qaytaradi."
      },
      {
        "title": "2. -, *, /: sonli hisoblash",
        "text": "Bu operatorlar matn birlashtirmaydi. Qiymatlar sonli turga aylantiriladi. Oddiy raqamli string son bo‘ladi; son sifatida o‘qib bo‘lmaydigan matn NaN beradi.",
        "code": "console.log(\"5\" - 2);    // 3\nconsole.log(\"5\" * 2);    // 10\nconsole.log(\"10\" / 2);   // 5\nconsole.log(\"salom\" - 2); // NaN\nconsole.log(\"\" - 0);     // 0\nconsole.log(\"   \" - 0);  // 0\nconsole.log(true * 5);   // 5\nconsole.log(null - 0);   // 0\nconsole.log(undefined - 0); // NaN"
      },
      {
        "title": "3. ===: birinchi navbatda tur",
        "text": "=== tur o‘zgartirmaydi. Turlar farq qilsa false. Turlar bir xil bo‘lsa, shu turga mos tenglik qoidasi ishlaydi. Number uchun NaN hech narsaga, hatto o‘ziga teng emas; +0 va -0 teng. String belgilar ketma-ketligi bo‘yicha teng. Obyektlar tarkibi bilan emas, aynan bitta obyekt ekanligi bilan tekshiriladi.",
        "code": "console.log(5 === \"5\");    // false: number va string\nconsole.log(5 === 5);      // true\nconsole.log(\"Ali\" === \"Ali\"); // true\nconsole.log(\"Ali\" === \"ali\"); // false\nconsole.log(true === 1);   // false\nconsole.log(null === null); // true\nconsole.log(undefined === undefined); // true\nconsole.log(NaN === NaN);  // false\nconsole.log(+0 === -0);    // true"
      },
      {
        "title": "4. ==: asosiy qoidalar ketma-ketligi",
        "text": "== hamma narsani bitta turga ko‘r-ko‘rona aylantirmaydi. Muayyan juftliklarga qarab qoida tanlaydi. Quyidagi holatlarni tartib bilan o‘rgan:\n\n1) Turlar bir xil bo‘lsa → === kabi taqqoslanadi.\n2) null va undefined juftligi → true. Ularni bu tekshiruvda 0 ga aylantirmaydi.\n3) Number va String → string songa aylantiriladi, qayta solishtiriladi.\n4) Operandlardan biri Boolean bo‘lsa → true 1 ga, false 0 ga aylanadi; solishtirish davom etadi.\n5) Obyekt va String/Number/BigInt/Symbol bo‘lsa → obyekt primitive qiymatga keltiriladi; solishtirish davom etadi.\n6) BigInt va String → string butun BigInt sifatida o‘qilsa solishtiriladi; yaroqsiz string bo‘lsa false.\n7) BigInt va Number → sonli qiymatlar matematik teng bo‘lsa true; Number kasr, NaN yoki Infinity bo‘lsa false.\n8) Mos qoida bo‘lmasa → false.",
        "code": "console.log(5 == \"5\");    // true: 5 == 5\nconsole.log(false == 0);  // true: 0 == 0\nconsole.log(true == \"1\"); // true: 1 == \"1\" → 1 == 1\nconsole.log(null == undefined); // true: maxsus qoida\nconsole.log(null == 0);   // false\nconsole.log(undefined == 0); // false",
        "note": "Brauzerdagi eski document.all obyektining null/undefined bilan == uchun maxsus tarixiy istisnosi bor. Oddiy dastur qiymatlarida null == undefined juftligi qoidasiga tayansa bo‘ladi."
      },
      {
        "title": "5. Eng ko‘p adashtiradigan holat: false va string",
        "text": "false == \"0\" tekshiruvi string’ni Boolean’ga aylantirmaydi. Avval false → 0, so‘ng \"0\" → 0. Shuning uchun natija true. Boolean(\"0\") esa true, chunki bu bo‘sh bo‘lmagan string. Tenglik qoidasi bilan truthy/falsy qoidasi bir xil emas.",
        "code": "console.log(false == \"0\");  // true: 0 == 0\nconsole.log(Boolean(\"0\"));   // true\nconsole.log(false === \"0\"); // false\n\nconsole.log(0 == \"\");       // true: 0 == 0\nconsole.log(0 == \"   \");    // true: 0 == 0\nconsole.log(false == \"false\"); // false: 0 == NaN\nconsole.log(true == 2);      // false: 1 == 2"
      },
      {
        "title": "6. null, undefined va NaN",
        "text": "null va undefined == bilan o‘zaro teng, lekin 0, false yoki bo‘sh stringga teng emas. NaN esa == va === bilan hech qachon o‘ziga teng bo‘lmaydi. NaN’ni Number.isNaN bilan tekshir.",
        "code": "console.log(null == undefined);  // true\nconsole.log(null === undefined); // false\nconsole.log(null == false);      // false\nconsole.log(null == \"\");         // false\nconsole.log(undefined == false); // false\nconsole.log(NaN == NaN);         // false\nconsole.log(Number.isNaN(NaN));  // true"
      },
      {
        "title": "7. Obyekt va massiv: tarkib tengligi emas",
        "text": "Ikkala operand ham obyekt bo‘lsa, == ham === ham aynan bitta obyektni ko‘rsatayaptimi deb tekshiradi. Yangi yaratilgan ikkita massiv ichidagi qiymatlar bir xil bo‘lsa ham teng emas. Bitta obyekt va primitive solishtirilganda esa == obyektni primitive’ga aylantirishi mumkin.",
        "code": "const a = [1];\nconst b = a;\nconsole.log(a === b);    // true: bitta massiv\nconsole.log(a == b);     // true\nconsole.log([1] === [1]); // false: ikki massiv\nconsole.log([1] == [1]);  // false\n\nconsole.log([] == 0);    // true: [] → \"\" → 0\nconsole.log([5] == 5);   // true: [5] → \"5\" → 5\nconsole.log([] === 0);   // false",
        "note": "Oddiy massivlarda primitive’ga aylanish odatda matn orqali bo‘ladi. Maxsus obyektlarda Symbol.toPrimitive/valueOf/toString natijani belgilashi mumkin; obyekt doim oddiy string bo‘ladi deb o‘ylama."
      },
      {
        "title": "8. BigInt va Symbol — qo‘shimcha qoidalar",
        "text": "== BigInt bilan boshqa ayrim turlarni qiymat bo‘yicha solishtira oladi. === esa tur farq qilsa false. Alohida yaratilgan Symbol qiymatlari tavsifi bir xil bo‘lsa ham bir xil emas.",
        "code": "console.log(5n == 5);      // true\nconsole.log(5n === 5);     // false\nconsole.log(5n == \"5\");    // true\nconsole.log(5n == \"5.0\");  // false: yaroqli BigInt matni emas\nconsole.log(5n == 5.1);    // false\n\nconst s = Symbol(\"id\");\nconsole.log(s === s);      // true\nconsole.log(Symbol(\"id\") == Symbol(\"id\")); // false"
      },
      {
        "title": "9. =, ==, === va amaliy tanlov",
        "text": "= qiymat beradi. == tur o‘zgartirish qoidalari bilan tenglikni tekshiradi. === tur o‘zgartirmasdan tenglikni tekshiradi. Odatda === tanla, tashqaridan kelgan ma’lumotni kerakli turga aniq aylantir. != — == natijasining teskarisi; !== — === natijasining teskarisi.",
        "code": "let yosh = 20; // qiymat berish\nconsole.log(yosh == \"20\");  // true\nconsole.log(yosh === \"20\"); // false\nconsole.log(yosh !== \"20\"); // true\n\nconst input = \"20\";\nconst son = Number(input);\nif (Number.isFinite(son) && son === 20) {\n  console.log(\"Yosh 20\");\n}\n\nconst qiymat = null;\nconsole.log(qiymat == null);\n// true: null yoki undefined tekshiruvi\nconsole.log(qiymat === null || qiymat === undefined);\n// Yuqoridagi maqsadning ochiq yozilishi",
        "note": "Number(\"\") va Number(\"   \") ham 0 beradi. Forma uchun bo‘sh kiritishni son qilib aylantirishdan oldin alohida tekshir. == null ishlatish — ikkala yo‘qlik qiymatini qasddan qamrash usuli."
      }
    ],
    "takeaway": "===: tur o‘zgarmaydi; turlar farq qilsa false.\n==: juftlikka mos qoida ishlaydi, ba’zan bir necha bosqichda.\nBoolean tenglikda songa aylanadi; ikkinchi qiymatni Boolean qilish shart emas.\nnull == undefined → true, null == 0 → false.\nIkkita obyekt har ikki operator bilan identiklik bo‘yicha tekshiriladi.\nNaN == NaN va NaN === NaN → false.\nOdatda === va aniq tur o‘zgartirish ishlat.",
    "exercise": "Har biriga natija va sabab yoz:\n1) \"\" == false\n2) \"0\" === 0\n3) null == 0\n4) undefined == null\n5) [] == false\n6) [] === []\n7) \"2\" + 1 + 1\n8) \"2\" - 1 + 1\n\nFaqat true/false demasdan, qaysi qiymat qaysi turga o‘tganini ham ayt."
  },
  {
    "id": "truthy-falsy",
    "title": "Truthy va Falsy",
    "question": "Truthy va falsy nima? Boolean([]) nega true, Boolean(\"\") nega false?",
    "explanation": "Boolean(qiymat) berilgan qiymatni true yoki false ga aylantirib natija qaytaradi. Bu tekshiruv “ichida ma’lumot bormi?” degani emas: JavaScript qiymatning turiga mos boolean qoidasini qo‘llaydi. Truthy — true ga, falsy — false ga aylanadigan qiymat. Bu alohida ma’lumot turi emas va tekshirish asl qiymatni o‘zgartirmaydi.",
    "sections": [
      {
        "title": "Avval sen so‘ragan ikkita misol",
        "text": "[] — bo‘sh massiv. Massiv obyekt hisoblanadi va oddiy obyektlar boolean kontekstda har doim truthy: ichidagi elementlar soni tekshirilmaydi. \"\" esa uzunligi 0 bo‘lgan bo‘sh string; u falsy ro‘yxatiga kiradi. Shuning uchun natijalar farqli.",
        "code": "console.log(Boolean([])); // true\nconsole.log(Boolean(\"\")); // false",
        "note": "[] va \"\" ikkalasi kundalik tilda “bo‘sh” bo‘lishi mumkin. Lekin JavaScript uchun ular boshqa turlar: biri massiv-obyekt, ikkinchisi string. Boolean barcha turlar uchun umumiy “bo‘shlik tekshiruvi” emas."
      },
      {
        "title": "Boolean qanday qaror qiladi?",
        "text": "Boolean qiymatni baholaydi: falsy qiymatlardan birimi? Ha bo‘lsa false; qolgan oddiy qiymatlar uchun true. Massivning length qiymatini, obyektning kalitlarini yoki stringdagi yozuvning ma’nosini avtomatik tekshirmaydi.",
        "code": "Boolean([])       // true: massiv-obyekt\nBoolean([0])      // true: massiv-obyekt\nBoolean([false])  // true: massiv-obyekt\nBoolean({})       // true: obyekt\n\nBoolean(\"\")       // false: 0 ta belgi\nBoolean(\" \")      // true: bitta bo‘sh joy belgisi\nBoolean(\"0\")      // true: bitta belgi\nBoolean(\"false\")  // true: beshta belgi"
      },
      {
        "title": "Bir xil massiv, ikki xil savol",
        "text": "Boolean(list) — massivning boolean bahosi qanday? list.length > 0 — massivda element bormi? Bu boshqa-boshqa savollar, shuning uchun javoblar farq qilishi tabiiy.",
        "code": "const list = [];\n\nconsole.log(Boolean(list));        // true\nconsole.log(list.length);          // 0\nconsole.log(Boolean(list.length)); // false\nconsole.log(list.length > 0);      // false\n\nlist.push(\"Olma\");\nconsole.log(Boolean(list));        // true: oldin ham true edi\nconsole.log(list.length > 0);      // true: endi element bor"
      },
      {
        "title": "if, Boolean va !! bog‘liqligi",
        "text": "if shart bajarilishini tanlash uchun boolean baholashdan foydalanadi. Boolean(x) va !!x shu bahoni true/false qiymati sifatida beradi. ! esa bahoni teskarilaydi.",
        "code": "if ([]) {\n  console.log(\"A ishlaydi\");\n}\n\nif (\"\") {\n  console.log(\"B ishlamaydi\");\n} else {\n  console.log(\"C ishlaydi\");\n}\n\nconsole.log(!![]); // true\nconsole.log(![]);  // false\nconsole.log(!!\"\"); // false\nconsole.log(!\"\");  // true"
      },
      {
        "title": "1. Falsy qiymatlar: yodlab oladigan ro‘yxat",
        "text": "Oddiy JavaScript qiymatlaridan false, 0, -0, 0n, bo‘sh string (\"\"), null, undefined va NaN boolean kontekstda false bo‘ladi. Qolgan oddiy qiymatlar truthy. BigInt’da -0n ham aynan 0n qiymatidir.",
        "code": "console.log(Boolean(false));     // false\nconsole.log(Boolean(0));         // false\nconsole.log(Boolean(-0));        // false\nconsole.log(Boolean(0n));        // false\nconsole.log(Boolean(\"\"));        // false\nconsole.log(Boolean(null));      // false\nconsole.log(Boolean(undefined)); // false\nconsole.log(Boolean(NaN));       // false",
        "note": "Brauzerdagi eski document.all — falsy bo‘ladigan maxsus tarixiy istisno. Odatdagi kod uchun yuqoridagi ro‘yxatni bilish yetarli."
      },
      {
        "title": "2. Truthy: bo‘sh bo‘lmagan string va obyektlar",
        "text": "\"0\" va \"false\" — boolean emas, bo‘sh bo‘lmagan stringlar. Hatto faqat bo‘sh joydan iborat string ham truthy. Massiv yoki obyektning ichi bo‘shligi uning boolean bahosini o‘zgartirmaydi. Manfiy sonlar ham 0 bo‘lmasa truthy.",
        "code": "console.log(Boolean(\"Hello\")); // true\nconsole.log(Boolean(\"0\"));     // true\nconsole.log(Boolean(\"false\")); // true\nconsole.log(Boolean(\" \"));     // true\nconsole.log(Boolean([]));      // true\nconsole.log(Boolean({}));      // true\nconsole.log(Boolean(-1));      // true\nconsole.log(Boolean(() => {})); // true"
      },
      {
        "title": "3. if ichida qanday ishlaydi?",
        "text": "if qiymatni boolean sifatida baholaydi. Qiymatning o‘zi esa o‘z turida qoladi. ! natijani teskarilaydi; !! esa Boolean(...) bilan bir xil boolean natija beradi.",
        "code": "const xabar = \"Hello\";\nif (xabar) {\n  console.log(\"Truthy\"); // ishlaydi\n}\nconsole.log(typeof xabar); // \"string\" — o‘zgarmadi\n\nconsole.log(!\"Hello\");  // false\nconsole.log(!!\"Hello\"); // true\nconsole.log(!!0);       // false"
      },
      {
        "title": "4. if (qiymat) va qiymat == false bir xil emas",
        "text": "if va Boolean qiymatni bevosita boolean sifatida baholaydi. == esa tenglikning tur o‘zgartirish qoidalarini ishlatadi. Shu sabab bitta qiymat truthy bo‘lib, ayni paytda == false tekshiruvida true berishi mumkin.",
        "code": "console.log(Boolean([])); // true\nconsole.log([] == false); // true\n// false → 0\n// [] → \"\"\n// \"\" → 0\n// 0 == 0 → true\n\nconsole.log(Boolean(\"0\")); // true\nconsole.log(\"0\" == false); // true\n\nif ([]) {\n  console.log(\"Massiv truthy\"); // ishlaydi\n}",
        "note": "Truthy degani qiymat === true degani ham emas: Boolean(\"Hello\") true, lekin \"Hello\" === true false."
      },
      {
        "title": "5. Bo‘sh massiv va bo‘sh obyektni aniq tekshir",
        "text": "if (list) massiv borligini boolean baholaydi; unda element borligini tekshirmaydi. Massiv uchun length, oddiy obyektning o‘ziga tegishli enumerable string kalitlari uchun Object.keys(...).length ishlat. Object.keys barcha turdagi obyektlar uchun universal bo‘shlik tekshiruvi emas.",
        "code": "const list = [];\nif (list) console.log(\"Truthy\"); // ishlaydi\nconsole.log(list.length > 0);    // false\n\nconst user = {};\nconsole.log(Object.keys(user).length > 0); // false\n\nconst input = \"   \";\nconsole.log(Boolean(input));     // true\nconsole.log(input.trim() !== \"\"); // false: faqat bo‘sh joy"
      },
      {
        "title": "6. 0 yo‘q qiymat degani emas",
        "text": "if (!qiymat) barcha falsy qiymatlarni birga ushlaydi. Lekin 0, false yoki bo‘sh string loyihada yaroqli qiymat bo‘lishi mumkin. Faqat null/undefined tekshirilishi kerak bo‘lsa, shuni aniq yoz. || barcha falsy qiymatlarda zaxirani tanlaydi; ?? esa faqat null/undefined uchun.",
        "code": "const ball = 0;\nconsole.log(ball || 100); // 100\nconsole.log(ball ?? 100); // 0\n\nconst ism = \"\";\nconsole.log(ism || \"Mehmon\"); // \"Mehmon\"\nconsole.log(ism ?? \"Mehmon\"); // \"\"\n\nconst qiymat = 0;\nif (qiymat !== null && qiymat !== undefined) {\n  console.log(\"Qiymat mavjud\"); // ishlaydi\n}",
        "note": "|| va ?? har doim boolean qaytarmaydi: ular operandlardan birining asl qiymatini qaytaradi."
      }
    ],
    "takeaway": "Falsy ro‘yxatni yodla; qolgan oddiy qiymatlar truthy.\n\"0\", \"false\", \" \" — truthy.\n[] va {} bo‘sh bo‘lsa ham truthy.\nBoolean(x), !!x va if (x) bir xil boolean baholashga asoslanadi.\nTruthy/falsy tekshiruvi == false bilan bir xil emas.\n0 ni saqlab qolish kerak bo‘lsa, zaxira qiymat uchun ?? ni ko‘rib chiq.",
    "exercise": "Natija va sababini ayt:\n1) Boolean([])\n2) Boolean(\"\")\n3) Boolean(\" \")\n4) Boolean([false])\n5) Boolean([].length)\n6) Boolean(\"0\")\n7) Boolean(0)\n\nAmaliy mashq: const mahsulotlar = []; uchun faqat element bo‘lganda “Mahsulot bor” chiqaradigan if yoz.",
    "interactiveTruthy": true
  },
  {
    "id": "object-reference",
    "title": "Object Reference — noldan",
    "question": "Object reference nima? O‘zgaruvchi, obyekt, mutation va nusxalashni noldan tushuntir.",
    "explanation": "Avval ikkita narsani ajrat: o‘zgaruvchi — koddagi nom; obyekt — xususiyatlar saqlanadigan qiymat. Reference — o‘sha obyektga murojaat qilish imkonini beradigan qiymat. Uni yo‘llanma deb tasavvur qilish mumkin. Bu o‘xshatish, JavaScript orqali ko‘rinadigan xotira manzili emas.",
    "sections": [
      {
        "title": "0. Obyekt nima?",
        "text": "Obyekt bir-biriga bog‘liq ma’lumotlarni xususiyat nomlari bilan saqlaydi. Quyida user — o‘zgaruvchi nomi, { ... } — yangi obyekt, ism va yosh — uning xususiyatlari. user.ism shu obyektning ism xususiyatini o‘qiydi.",
        "code": "const user = {\n  ism: \"Ali\",\n  yosh: 20\n};\n\nconsole.log(user.ism); // Ali\nconsole.log(user.yosh); // 20"
      },
      {
        "title": "Bitta obyektga ikkita nom orqali murojaat",
        "text": "const boshqa = user yozilganda, { ... } qayta ishlatilmayapti va yangi obyekt yaratilmayapti. user ichidagi reference qiymati boshqa o‘zgaruvchisiga beriladi. Ikkalasi bitta obyektga murojaat qiladi. Buni ikki odamda bitta uyga kirish kaliti borligiga o‘xshat: kalitlar ikkita, uy bitta.",
        "code": "const user = { ism: \"Ali\" }; // 1 ta obyekt\nconst boshqa = user;        // yangi obyekt yo‘q\n\n// user   ──→ { ism: \"Ali\" }\n// boshqa ──↗\n\nboshqa.ism = \"Vali\";\nconsole.log(user.ism); // Vali\n// Ikkalasi o‘sha o‘zgargan obyektni ko‘radi."
      },
      {
        "title": "Yangi obyekt qachon yaratiladi?",
        "text": "Har bir alohida bajarilgan obyekt literali ({ ... }) yangi obyekt yaratadi. Ichidagi yozuv bir xil bo‘lishi ularni bitta obyekt qilmaydi. Faqat boshqa o‘zgaruvchini biriktirish esa yangi obyekt yaratmaydi.",
        "code": "const a = { ism: \"Ali\" }; // birinchi obyekt\nconst b = { ism: \"Ali\" }; // ikkinchi obyekt\nconst c = a;              // birinchi obyektga reference\n\nconsole.log(a === b); // false\nconsole.log(a === c); // true\n\nb.ism = \"Vali\";\nconsole.log(a.ism); // Ali: a va b mustaqil"
      },
      {
        "title": "1. Primitive: qiymatlar mustaqil",
        "text": "Number, string, boolean, bigint, symbol, null va undefined primitive qiymatlardir. Bir o‘zgaruvchidan boshqasiga berilganda, birini keyin almashtirish ikkinchisiga ta’sir qilmaydi.",
        "code": "let a = 10;\nlet b = a;\nb = 20;\n\nconsole.log(a); // 10\nconsole.log(b); // 20"
      },
      {
        "title": "2. Obyekt: bitta obyektga ikki yo‘llanma",
        "text": "b = a yangi obyekt yaratmaydi. a va b orqali bitta obyektning xususiyatlariga murojaat qilamiz. Shu sabab b.ism ni o‘zgartirish a.ism orqali ham ko‘rinadi.",
        "code": "const a = { ism: \"Ali\" };\nconst b = a;\n\nb.ism = \"Vali\";\n\nconsole.log(a.ism); // Vali\nconsole.log(b.ism); // Vali\nconsole.log(a === b); // true",
        "note": "Tasavvur: a → bitta obyekt ← b. Ikkita o‘zgaruvchi bor, lekin obyekt bitta. Massivlarda ham shu qoida ishlaydi."
      },
      {
        "title": "3. Mutation va reassignment farqi",
        "text": "Mutation — mavjud obyektning ichini o‘zgartirish. Reassignment — o‘zgaruvchini boshqa qiymatga biriktirish. b ni yangi obyektga biriktirish a ning yo‘llanmasini o‘zgartirmaydi.",
        "code": "let a = { son: 1 };\nlet b = a;\n\nb.son = 2; // mutation: umumiy obyekt o‘zgardi\nconsole.log(a.son); // 2\n\nb = { son: 3 }; // reassignment: yangi obyekt\nconsole.log(a.son); // 2\nconsole.log(b.son); // 3\nconsole.log(a === b); // false"
      },
      {
        "title": "4. Nega const obyekt o‘zgaradi?",
        "text": "const o‘zgaruvchini boshqa qiymatga qayta biriktirishni taqiqlaydi. U obyektning xususiyatlarini avtomatik muzlatmaydi.",
        "code": "const user = { ism: \"Ali\" };\nuser.ism = \"Vali\"; // mumkin: mutation\n\n// user = { ism: \"Hasan\" }; // TypeError: reassignment\n\nconst list = [1, 2];\nlist.push(3); // mumkin\n// list = []; // TypeError"
      },
      {
        "title": "5. Tenglik: tarkib emas, aynan bitta obyekt",
        "text": "Ikki alohida obyekt ichidagi ma’lumotlar bir xil bo‘lsa ham, ular ikkita turli obyekt. Ikkala operand obyekt bo‘lganda == va === identiklikni tekshiradi.",
        "code": "const a = { son: 1 };\nconst b = { son: 1 };\nconst c = a;\n\nconsole.log(a === b); // false\nconsole.log(a == b);  // false\nconsole.log(a === c); // true\nconsole.log([] === []); // false"
      },
      {
        "title": "6. Spread: yuzaki nusxa (shallow copy)",
        "text": "{ ...a } yangi tashqi obyekt yaratadi. Yuqori darajadagi primitive xususiyatlar mustaqil, lekin ichki obyektlar uchun reference ko‘chiriladi. Shu sabab ichma-ich obyektlar hali umumiy bo‘lishi mumkin. Oddiy ma’lumot obyektlari misolida ko‘ramiz.",
        "code": "const a = {\n  ism: \"Ali\",\n  manzil: { shahar: \"Toshkent\" }\n};\nconst b = { ...a };\n\nb.ism = \"Vali\";\nconsole.log(a.ism); // Ali\n\nb.manzil.shahar = \"Samarqand\";\nconsole.log(a.manzil.shahar); // Samarqand!\n\nconsole.log(a === b); // false\nconsole.log(a.manzil === b.manzil); // true",
        "note": "[...list] va Object.assign({}, obj) ham yuzaki nusxa qiladi. Spread barcha xususiyat va prototiplarni aynan saqlaydigan universal klon emas."
      },
      {
        "title": "7. Ichki obyektni ham mustaqil nusxalash",
        "text": "Ma’lum tuzilma uchun kerakli ichki qatlamlarni ham spread bilan nusxalash mumkin. Chuqurroq mos ma’lumotlarni mustaqil nusxalash uchun structuredClone ishlatiladi.",
        "code": "const a = {\n  ism: \"Ali\",\n  manzil: { shahar: \"Toshkent\" }\n};\n\nconst b = { ...a, manzil: { ...a.manzil } };\nb.manzil.shahar = \"Buxoro\";\nconsole.log(a.manzil.shahar); // Toshkent\n\nconst c = structuredClone(a);\nc.manzil.shahar = \"Xiva\";\nconsole.log(a.manzil.shahar); // Toshkent",
        "note": "structuredClone barcha qiymatlarni klonlamaydi: masalan, funksiya yoki DOM element kiritilsa DataCloneError chiqadi. Oddiy ma’lumotlar uchun qulay. JSON.parse(JSON.stringify(...)) ham universal nusxalash usuli emas: ayrim turlar yo‘qoladi yoki o‘zgaradi."
      },
      {
        "title": "8. Funksiya argumenti: reference qiymati nusxalanadi",
        "text": "JavaScript argumentlarni qiymat orqali uzatadi. Obyekt argumentida uzatiladigan qiymat obyektga reference bo‘lgani uchun funksiya ham o‘sha obyektga murojaat qiladi. Xususiyatini o‘zgartirish tashqarida ko‘rinadi; parametrni yangi obyektga qayta biriktirish tashqi o‘zgaruvchini almashtirmaydi.",
        "code": "const user = { ism: \"Ali\" };\n\nfunction yangila(obj) {\n  obj.ism = \"Vali\"; // umumiy obyektni o‘zgartiradi\n}\nyangila(user);\nconsole.log(user.ism); // Vali\n\nfunction almashtir(obj) {\n  obj = { ism: \"Hasan\" }; // faqat mahalliy parametr\n}\nalmashtir(user);\nconsole.log(user.ism); // Vali",
        "note": "“Obyektlar pass-by-reference orqali uzatiladi” degan jumla chalg‘itadi. Aniqrog‘i: obyektga reference qiymati nusxalanib uzatiladi."
      }
    ],
    "takeaway": "O‘zgaruvchi — nom, obyekt — qiymat.\nconst b = a obyektni klonlamaydi: reference qiymatini ko‘chiradi.\nb.ism = ... → mavjud obyektni o‘zgartirish (mutation).\nb = {...} → b ni yangi obyektga biriktirish (reassignment).\nconst qayta biriktirishni taqiqlaydi, xususiyatlarni o‘zgartirishni emas.\n{ ...a } yangi tashqi obyekt yaratadi; ichki obyektlar reference’i umumiy qolishi mumkin.\nObyektlar === bilan ichidagi ma’lumot bo‘yicha emas, identiklik bo‘yicha solishtiriladi.",
    "exercise": "Avval faqat shu misolni yech:\n\nconst a = { son: 1 };\nconst b = a;\nb.son = 7;\nconsole.log(a.son);\n\n1) Natija nima?\n2) Bu yerda nechta obyekt yaratilgan?\n\nKeyingi bosqich:\nconst c = { ...a };\nc.son = 9;\nconsole.log(a.son);\nconsole.log(c.son);\nconsole.log(a === c);"
  },
  {
    "id": "functions",
    "title": "Funksiyalar: declaration, expression, arrow",
    "question": "Function declaration bilan function expression / arrow farqi nima? Parametrlar qanday ishlaydi?",
    "explanation": "Declaration butun scope boshida tayyor bo'ladi, shuning uchun uni e'lon qilishdan oldin ham chaqirish mumkin. Expression va arrow esa o'z satriga yetgandagina mavjud bo'ladi — oldin o'qisang TDZ sabab ReferenceError. Arrow funksiyada o'z this va arguments yo'q.",
    "sections": [
      {
        "title": "1. Declaration vs expression",
        "text": "Declaration: function salom() {}. U hoisting qilinadi — nom va tanasi birga tayyor. Expression: const salom = function() {} yoki const salom = () => {}. Bular const bilan e'lon qilingani uchun TDZ ichida bo'ladi.",
        "code": "console.log(a()); // Salom\nfunction a() { return \"Salom\"; }\n\n// console.log(b()); // ReferenceError\nconst b = () => \"Salom\";"
      },
      {
        "title": "2. Default parametrlar",
        "text": "Parametrga qiymat berilsa, argument yuborilmagan yoki undefined yuborilganda ishlatiladi. Lekin null defaultni ishga solmaydi: null ataylab berilgan qiymat hisoblanadi.",
        "code": "function poz(n = 5) { return n; }\nconsole.log(poz());       // 5\nconsole.log(poz(undefined)); // 5\nconsole.log(poz(null));   // null"
      },
      {
        "title": "3. Rest parametrlar",
        "text": "...params qolgan argumentlarni massivga yig'adi. Rest parametri oxirida turishi shart. Bu spread bilan aralashtirib yuborilmasin: spread massivni elementlarga tarqatadi, rest esa elementlarni massivga yig'adi.",
        "code": "function yig(first, ...rest) {\n  return first + rest.length;\n}\nconsole.log(yig(1, 2, 3, 4)); // 4\n\nconst sonlar = [1, 2];\nconsole.log(...sonlar); // 1 2 (spread)"
      },
      {
        "title": "4. Arrow va oddiy funksiya",
        "text": "Arrow o'z this ga ega emas: u atrof-dagi this ni oladi. Shuning uchun obyekt metodini arrow bilan yozish noto'g'ri bo'ladi. Arrow ni new bilan chaqirib bo'lmaydi va unda arguments obyekti yo'q.",
        "code": "const obyekt = {\n  x: 10,\n  oddiy() { return this.x; }, // 10\n  arrow: () => this.x         // noto'g'ri ishlatish\n};\nconsole.log(obyekt.oddiy());\n\n// const F = () => {};\n// new F(); // TypeError"
      }
    ],
    "takeaway": "Declaration oldin chaqirilsa ishlaydi; expression/arrow — ReferenceError.\nundefined default parameterni ishga soladi, null — yo'q.\nRest yig'adi, spread tarqatadi.\nArrow o'z this/arguments ga ega emas va new bilan ishlamaydi.",
    "exercise": "1) console.log(salom()); function salom(){ return 1; } natijasi?\n2) const f = () => this; ni obyekt metodi sifatida ishlatish nega xato?\n3) function f(a, ...rest) { return rest; } f(1,2,3) nima qaytaradi?"
  },
  {
    "id": "this-keyword",
    "title": "this: metod, arrow, call/apply/bind",
    "question": "this qanday aniqlanadi? Nega arrow funksiyada this boshqacha?",
    "explanation": "Oddiy funksiyada this chaqirish usuliga bog'liq: obyekt.method() qilsang this = obyekt; mustaqil chaqirsang this = undefined (strict mode) yoki global. Arrow esa this ni o'ziga olmaydi, yaratilgan joyidagi this ni ishlatadi.",
    "sections": [
      {
        "title": "1. this chaqirishga bog'liq",
        "text": "Bir xil funksiyani turli usulda chaqirsang this farq qiladi. Obyekt orqali chaqirish this ni shu obyektga bog'laydi. Funksiyani o'zgaruvchiga olib, mustaqil chaqirsang bu bog'lanish yo'qoladi.",
        "code": "const user = {\n  ism: \"Ali\",\n  salom() { return this.ism; }\n};\nconsole.log(user.salom()); // Ali\n\nconst f = user.salom;\n// console.log(f()); // strict mode: TypeError"
      },
      {
        "title": "2. call, apply va bind",
        "text": "call(thisArg, ...args) va apply(thisArg, [args]) funksiyani berilgan this bilan darhol chaqiradi. bind(thisArg, ...args) esa chaqirmaydi, yangi bog'langan funksiya qaytaradi.",
        "code": "function salom() { return this.ism; }\nconsole.log(salom.call({ ism: \"Vali\" })); // Vali\nconsole.log(salom.apply({ ism: \"Hasan\" })); // Hasan\n\nconst bog = salom.bind({ ism: \"Ali\" });\nconsole.log(bog()); // Ali"
      },
      {
        "title": "3. Arrow this ni meros qilib oladi",
        "text": "Arrow funksiya yaratilgan paytdagi this ni saqlaydi. Klass va oddiy funksiya ichida callback sifatida ishlatilganda aynan shu xususiyat qulay: this ni saqlash uchun .bind(this) yozish shart emas.",
        "code": "function F() {\n  this.x = 1;\n  const ichki = () => this.x;\n  return ichki;\n}\nconsole.log(new F()()); // 1\n\nconst obyekt = {\n  x: 10,\n  oddiy: function() { return this.x; },\n  arrow: () => this.x // bu yerda this obyekt emas\n};"
      }
    ],
    "takeaway": "this — chaqirish usuli bilan aniqlanadi (oddiy funksiya).\nobj.method() → this = obj.\ncall/apply darhol chaqiradi, bind yangi funksiya qaytaradi.\nArrow o'z this ga ega emas: yaratilgan joydagi this ni ishlatadi.",
    "exercise": "1) const f = obj.method; f() qilsa this nima bo'ladi?\n2) call va apply farqi nima?\n3) Nega obyekt metodini arrow bilan yozish xato?"
  },
  {
    "id": "array-methods",
    "title": "Array metodlari: map, filter, reduce va boshqalar",
    "question": "map, filter, reduce, sort, find, some, every qanday ishlaydi? Qaysilari massivni o'zgartiradi?",
    "explanation": "map har elementni yangisiga almashtirib yangi massiv qaytaradi. filter shartga moslarini ajratadi. reduce massivni bitta qiymatga yig'adi. sort, reverse, push, splice esa asl massivni o'zgartiradi (mutating).",
    "sections": [
      {
        "title": "1. map va filter",
        "text": "Ikkalasi ham yangi massiv qaytaradi, asl massivni o'zgartirmaydi. map natija massivi uzunligi har doim asl massiv bilan bir xil. filter esa faqat shart true bo'lgan elementlarni oladi.",
        "code": "const sonlar = [1, 2, 3];\nconsole.log(sonlar.map(x => x * 2)); // [2, 4, 6]\nconsole.log(sonlar.filter(x => x % 2 === 0)); // [2]\nconsole.log(sonlar); // [1, 2, 3] — o'zgarmadi"
      },
      {
        "title": "2. reduce",
        "text": "reduce akkumulyator va joriy element bilan ishlaydi. Ikkinchi argument — boshlang'ich qiymat. Uni bermasang birinchi element boshlang'ich qiymat bo'ladi va iteratsiya 2-elementdan boshlanadi.",
        "code": "console.log([1, 2, 3].reduce((a, b) => a + b, 0)); // 6\nconsole.log([1, 2, 3].reduce((a, b) => a + b)); // 6\nconsole.log([].reduce((a, b) => a + b, 0)); // 0"
      },
      {
        "title": "3. sort tuzog'i",
        "text": "sort() elementlarni string sifatida, Unicode tartibida solishtiradi. Shuning uchun [10, 2, 1].sort() natijasi [1, 10, 2] bo'ladi. Sonlarni to'g'ri tartiblash uchun solishtirish funksiyasi berish kerak. sort asl massivni o'zgartiradi.",
        "code": "console.log([10, 2, 1].sort()); // [1, 10, 2]\nconsole.log([10, 2, 1].sort((a, b) => a - b)); // [1, 2, 10]\n\nconst a = [3, 1, 2];\na.sort();\nconsole.log(a); // [1, 2, 3] — asl massiv o'zgardi"
      },
      {
        "title": "4. find, some, every, includes",
        "text": "find mos kelgan birinchi elementni (yoki undefined) qaytaradi. some — hech bo'lmaganda bittasi mos kelsa true. every — hammasi mos kelsa true. includes qiymat borligini tekshiradi.",
        "code": "console.log([1, 2, 3].find(x => x > 1)); // 2\nconsole.log([1, 2, 3].some(x => x > 2)); // true\nconsole.log([1, 2, 3].every(x => x > 0)); // true\nconsole.log([1, 2, 3].includes(2)); // true"
      }
    ],
    "takeaway": "map/filter/slice/concat — yangi massiv, asl o'zgarmaydi.\nsort/reverse/push/splice — asl massivni o'zgartiradi.\nsort default bo'yicha string sifatida solishtiradi: (a,b)=>a-b kerak.\nreduce bitta qiymatga yig'adi; find elementni, some/every boolean qaytaradi.",
    "exercise": "1) [10,2,1].sort() natijasi nima va nega?\n2) map va forEach farqi nima?\n3) [1,2,3].reduce((a,b)=>a+b, 10) natijasi?"
  },
  {
    "id": "destructuring-spread",
    "title": "Destructuring, spread, optional chaining",
    "question": "const { a } = obj, ...rest, ?. va ?? qanday ishlaydi?",
    "explanation": "Destructuring obyekt yoki massivdan qiymatlarni olib, o'zgaruvchilarga tarqatadi. Spread ... massiv/obyektni elementlariga tarqatadi. Optional chaining ?. ichki xususiyat yo'q bo'lsa xato o'rniga undefined qaytaradi. Nullish coalescing ?? faqat null/undefined da zaxira qiymat oladi.",
    "sections": [
      {
        "title": "1. Obyekt destructuring va default",
        "text": "const { a, b = 2 } = obj: agar b yo'q yoki undefined bo'lsa, 2 ishlatiladi. Yangi nom bilan olish uchun const { a: boshqaNom } = obj yoziladi.",
        "code": "const { a, b = 2 } = { a: 1 };\nconsole.log(a, b); // 1 2\n\nconst { ism: nom } = { ism: \"Ali\" };\nconsole.log(nom); // Ali"
      },
      {
        "title": "2. Spread",
        "text": "Massivda [...a, 3] yangi massiv yaratadi. Obyektda { ...a, x: 1 } yangi obyekt yaratadi. E'tibor: bu yuzaki nusxa — ichki obyektlar umumiy qoladi.",
        "code": "const a = [1, 2];\nconst b = [...a, 3];\nconsole.log(a.length, b.length); // 2 3\n\nconst o = { x: 1 };\nconst n = { ...o, y: 2 };\nconsole.log(n); // { x: 1, y: 2 }"
      },
      {
        "title": "3. Optional chaining va nullish coalescing",
        "text": "user?.ism — user null yoki undefined bo'lsa undefined qaytaradi, xato emas. ?? esa faqat null/undefined da o'ng tomondagi qiymatni oladi. || bilan farqi: || 0, \"\", false ni ham zaxira deb hisoblaydi.",
        "code": "const user = null;\nconsole.log(user?.ism); // undefined\nconsole.log(user?.ism ?? \"yo'q\"); // yo'q\n\nconsole.log(0 ?? 5); // 0\nconsole.log(0 || 5); // 5\nconsole.log(\"\" ?? \"boshqa\"); // \"\""
      }
    ],
    "takeaway": "Destructuring qiymatlarni nomlarga tarqatadi; default faqat undefined da ishlaydi.\nSpread yangi massiv/obyekt yaratadi, lekin yuzaki.\n?. xato o'rniga undefined qaytaradi.\n?? faqat null/undefined ni almashtiradi, || esa barcha falsy ni.",
    "exercise": "1) const { x = 1 } = { x: null } natijasi nima?\n2) 0 || 5 va 0 ?? 5 farqi?\n3) user?.ism?.first qanday ishlaydi?"
  },
  {
    "id": "promises-async",
    "title": "Promise va async/await",
    "question": "Promise holatlari, .then zanjiri, async/await va xatolik qanday ishlaydi?",
    "explanation": "Promise uch holatda: pending, fulfilled, rejected. .then muvaffaqiyatni, .catch xatoni tutadi. async funksiyalar har doim Promise qaytaradi; await shu Promise bajarilguncha kutadi, lekin butun dasturni to'xtatmaydi.",
    "sections": [
      {
        "title": "1. Promise holatlari",
        "text": "Yangi Promise yaratilganda pending bo'ladi. resolve chaqirilsa fulfilled, reject chaqirilsa rejected. Bir marta holat o'zgargach qayta o'zgarmaydi.",
        "code": "const p = new Promise((resolve, reject) => {\n  resolve(\"tayyor\");\n});\np.then(x => console.log(x)); // tayyor\n\nPromise.reject(\"xato\").catch(e => console.log(e)); // xato"
      },
      {
        "title": "2. .then zanjiri va tartib",
        "text": ".then callbacklari har doim mikrovazifa sifatida, hozirgi sinxron kod tugagandan keyin bajariladi. Shuning uchun console.log(2) avval chiqadi.",
        "code": "Promise.resolve(1).then(x => console.log(x));\nconsole.log(2);\n// natija: 2, keyin 1"
      },
      {
        "title": "3. async/await",
        "text": "async funksiya har doim Promise qaytaradi, hatto oddiy qiymat qaytarsang ham. await faqat async ichida ishlaydi va Promise natijasini oladi. Xatoni try/catch yoki .catch bilan tutish mumkin.",
        "code": "async function f() { return 5; }\nf().then(x => console.log(x)); // 5\nconsole.log(1); // avval 1 chiqadi\n\nasync function xato() {\n  throw new Error(\"buzildi\");\n}\nxato().catch(e => console.log(e.message)); // buzildi"
      },
      {
        "title": "4. Promise.all va Promise.allSettled",
        "text": "Promise.all barchasi bajarilsa natijalar massivini qaytaradi; bittasi rad etilsa butun zanjir rad etiladi. Promise.allSettled esa hammasini kutib, har birining holatini qaytaradi.",
        "code": "Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n]).then(r => console.log(r)); // [1, 2]"
      }
    ],
    "takeaway": "Promise: pending → fulfilled yoki rejected, bir marta.\n.then/.catch mikrovazifa sifatida sinxron koddan keyin ishlaydi.\nasync har doim Promise qaytaradi; await uni ochadi.\nPromise.all bitta xatoda rad etiladi; allSettled hammasini kutadi.",
    "exercise": "1) Promise.resolve(1).then(...) va keyingi console.log(2) qaysi avval chiqadi?\n2) async function f(){ return 1 } f() nima qaytaradi?\n3) Promise.all dagi bitta reject nima bo'ladi?"
  },
  {
    "id": "event-loop",
    "title": "Event loop: microtask va macrotask",
    "question": "setTimeout(0) bilan Promise.then qaysi avval ishlaydi? Nega?",
    "explanation": "Sinxron kod avval bajariladi. Keyin barcha mikrovazifalar (.then, queueMicrotask) navbat bilan tugatiladi. Faqat undan keyin makrovazifalar (setTimeout, setInterval) olinadi. Shuning uchun Promise.then har doim setTimeout(0) dan oldin chiqadi.",
    "sections": [
      {
        "title": "1. Tartib",
        "text": "Call stack bo'shagach, event loop avval microtask queue ni to'liq bo'shatadi, keyin bir makrotask oladi. Bu qoida setTimeout(0) va Promise.then farqini tushuntiradi.",
        "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");\n// A, D, C, B"
      },
      {
        "title": "2. Mikrovazifa ichida yaratilgan mikrovazifa",
        "text": "Mikrovazifa ichida yangi mikrovazifa qo'shilsa, u ham shu navbatda bajariladi. Event loop keyingi makrotaskka o'tishdan oldin butun mikrovazifa navbatini tugatadi.",
        "code": "Promise.resolve().then(() => {\n  console.log(\"birinchi\");\n  Promise.resolve().then(() => console.log(\"ikkinchi\"));\n});\nsetTimeout(() => console.log(\"uchinchi\"), 0);\n// birinchi, ikkinchi, uchinchi"
      },
      {
        "title": "3. setTimeout(0) 0 ms degani emas",
        "text": "0 — minimal kutish vaqti, lekin callback darhol bajarilmaydi: u makrovazifa navbatiga qo'yiladi va stack bo'shaganda, mikrovazifalardan keyin olinadi.",
        "code": "setTimeout(() => console.log(1), 0);\nconsole.log(2);\n// 2, keyin 1"
      }
    ],
    "takeaway": "Tartib: sinxron kod → barcha mikrovazifalar → bitta makrotask.\nMicrotask: .then, .catch, queueMicrotask.\nMacrotask: setTimeout, setInterval.\nsetTimeout(0) hech qachon .then dan oldin bajarilmaydi.",
    "exercise": "1) console.log(\"A\"); setTimeout(()=>console.log(\"B\"),0); Promise.resolve().then(()=>console.log(\"C\")); console.log(\"D\") tartibi?\n2) Nega setTimeout(0) darhol ishlamaydi?"
  },
  {
    "id": "dom-basics",
    "title": "DOM asoslari: tanlash, matn va event",
    "question": "querySelector, textContent, innerHTML va addEventListener qanday ishlaydi?",
    "explanation": "querySelector bitta elementni, querySelectorAll barcha mos elementlarni NodeList sifatida qaytaradi. textContent matn qo'yadi va HTML sifatida pars qilmaydi; innerHTML pars qiladi (xavfsizlik xavfi bor). addEventListener elementga hodisa bog'laydi.",
    "sections": [
      {
        "title": "1. Elementlarni tanlash",
        "text": "querySelector CSS selektori bo'yicha birinchi mos elementni yoki null qaytaradi. querySelectorAll esa NodeList qaytaradi; u massiv emas, lekin forEach bor.",
        "code": "const el = document.querySelector(\"#ism\");\nif (el) el.textContent = \"Ali\";\n\ndocument.querySelectorAll(\"li\").forEach(li => {\n  console.log(li.textContent);\n});"
      },
      {
        "title": "2. textContent vs innerHTML",
        "text": "textContent faqat matn qo'yadi: <b>Ali</b> yozsang aynan shunday ko'rinadi. innerHTML esa HTML deb pars qiladi va qalin yozuv chiqaradi. Foydalanuvchi kiritgan ma'lumotni innerHTML ga qo'yish XSS xavfiga olib keladi.",
        "code": "el.textContent = \"<b>Ali</b>\"; // matn sifatida ko'rinadi\nel.innerHTML = \"<b>Ali</b>\";   // qalin Ali\n\n// Xavfsiz: foydalanuvchi kiritganini textContent ga qo'y"
      },
      {
        "title": "3. Event va dataset",
        "text": "addEventListener(type, callback) hodisa yuz berganda chaqiriladi. data-* atributlari element.dataset orqali o'qiladi (data-user-id → dataset.userId).",
        "code": "const btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", (e) => {\n  console.log(e.target.dataset.userId);\n});\n// <button id=\"btn\" data-user-id=\"7\">Bos</button>"
      }
    ],
    "takeaway": "querySelector → bitta element yoki null; querySelectorAll → NodeList.\ntextContent matn, innerHTML HTML pars qiladi (XSS xavfi).\naddEventListener hodisa bog'laydi; data-* → element.dataset.",
    "exercise": "1) querySelector hech narsa topmasa nima qaytaradi?\n2) Foydalanuvchi kiritgan matnni qaysi xususiyat bilan qo'yish xavfsiz?\n3) data-user-id qanday o'qiladi?"
  },
  {
    "id": "numbers-math",
    "title": "Sonlar va Math: noldan",
    "question": "Sonni qanday yozamiz va hisoblaymiz? Math nima qiladi? Matnni songa aylantirish, yaxlitlash va tasodifiy son olish qanday ishlaydi?",
    "explanation": "Bu darsda oddiy sonlardan boshlaymiz. Avval 20, 3.5 va -5 qanday qiymat ekanini ko‘ramiz. Keyin qo‘shish, ayirish, bo‘lish va ko‘paytirishni sinaymiz. Shundan so‘ng JavaScript’ning tayyor hisoblash yordamchisi — Math bilan ishlaymiz. Har bir kod bo‘lagini alohida konsolda bajaring va natijani avval o‘zingiz taxmin qiling.",
    "sections": [
      {
        "title": "1. Son nima va qanday yoziladi?",
        "text": "Number — son turi. Butun son, kasr va manfiy sonni qo‘shtirnoqsiz yozamiz. Kasr uchun vergul emas, nuqta ishlatiladi. let yosh = 20 deganda yosh nomida 20 sonini saqlaymiz. console.log qiymatni, typeof esa turini ko‘rsatadi.",
        "code": "let yosh = 20;\nlet narx = 3.5;\nlet harorat = -5;\n\nconsole.log(yosh);        // 20\nconsole.log(narx);        // 3.5\nconsole.log(harorat);     // -5\nconsole.log(typeof yosh); // \"number\"\nconsole.log(typeof narx); // \"number\"",
        "note": "20 va 20.0 bir xil son. JavaScript’da oddiy butun va kasr sonlar number turida; juda katta butun sonlar uchun bigint degan alohida tur ham bor. Uni keyin alohida o‘rganamiz."
      },
      {
        "title": "2. Qo‘shish, ayirish, ko‘paytirish va bo‘lish",
        "text": "+ qo‘shadi, - ayiradi, * ko‘paytiradi, / bo‘ladi. Kompyuterda ko‘paytirish uchun × emas, * belgisi yoziladi. Natijani o‘zgaruvchiga saqlab ham ishlatish mumkin.",
        "code": "console.log(7 + 3); // 10\nconsole.log(7 - 3); // 4\nconsole.log(7 * 3); // 21\nconsole.log(7 / 2); // 3.5\n\nconst dona = 3;\nconst narx = 5000;\nconst jami = dona * narx;\nconsole.log(jami); // 15000",
        "note": "7 / 2 natijasi 3 emas, 3.5: JavaScript kasr qismini avtomatik tashlab yubormaydi."
      },
      {
        "title": "3. Qaysi amal avval bajariladi?",
        "text": "Ko‘paytirish va bo‘lish qo‘shish va ayirishdan oldin bajariladi. Qavs ichidagi ifoda esa avval hisoblanadi. Kodni o‘qiyotganda birinchi bajariladigan qismni toping.",
        "code": "console.log(2 + 3 * 4);   // 14\nconsole.log((2 + 3) * 4); // 20",
        "note": "Birinchi qatorda: 3 * 4 = 12, keyin 2 + 12 = 14.\nIkkinchi qatorda: 2 + 3 = 5, keyin 5 * 4 = 20."
      },
      {
        "title": "4. Qoldiq va daraja",
        "text": "% bo‘lishdan qolgan qoldiqni beradi. Masalan, 7 ni 2 ga bo‘lsak, 1 ortib qoladi. ** darajaga oshiradi: 2 ** 3 degani 2 * 2 * 2.",
        "code": "console.log(7 % 2);  // 1\nconsole.log(8 % 2);  // 0\nconsole.log(2 ** 3); // 8\n\nconsole.log(8 % 2 === 0); // true — 8 juft",
        "note": "% foizni hisoblash belgisi emas. 200 ning 10 foizi: 200 * 10 / 100 = 20. Musbat butun sonning 2 ga bo‘linish qoldig‘i 0 bo‘lsa, u juft."
      },
      {
        "title": "5. \"20\" bilan 20 ning farqi",
        "text": "20 — son. \"20\" — matn. + matn bilan ishlaganda birlashtirishi mumkin. Matndagi son bilan hisoblash uchun avval Number orqali songa aylantiring.",
        "code": "const yosh = \"20\";\nconsole.log(yosh + 1); // \"201\"\n\nconst son = Number(yosh);\nconsole.log(son + 1);      // 21\nconsole.log(typeof son);   // \"number\"\nconsole.log(Number(\"\"));    // 0\nconsole.log(Number(\"abc\")); // NaN",
        "note": "Number(\"abc\") yaroqli son chiqara olmaydi, shuning uchun NaN beradi. Bo‘sh string esa 0 ga aylanadi: formadan kelgan bo‘sh maydonni son deb qabul qilishdan oldin alohida tekshiring."
      },
      {
        "title": "6. parseInt va parseFloat nima qiladi?",
        "text": "Number butun matnni son sifatida o‘qishga harakat qiladi. parseInt matn boshidagi butun son qismini, parseFloat esa kasr qismini ham o‘qiydi. Ular son bo‘la olmaydigan belgiga yetganda to‘xtaydi.",
        "code": "console.log(Number(\"42px\"));          // NaN\nconsole.log(parseInt(\"42px\", 10));    // 42\nconsole.log(parseInt(\"3.14\", 10));    // 3\nconsole.log(parseFloat(\"3.14 son\"));  // 3.14\nconsole.log(parseInt(\"08\", 10));      // 8\nconsole.log(parseInt(\"abc12\", 10));   // NaN",
        "note": "parseInt dagi 10 — o‘nlik sanoq asosini bildiradi. Zamonaviy JavaScript’da parseInt(\"08\") ham 8 beradi. parseInt yaxlitlash vositasi emas: u matnni o‘qish uchun ishlatiladi."
      },
      {
        "title": "7. Math — tayyor hisoblash yordamchisi",
        "text": "Math — JavaScript’da tayyor berilgan obyekt. Uning ichida hisoblash metodlari bor. Metod — obyekt orqali chaqiriladigan funksiya. Math.max(2, 9, 4) deganda eng katta sonni topish metodiga uchta son beramiz.",
        "code": "console.log(Math.max(2, 9, 4)); // 9 — eng kattasi\nconsole.log(Math.min(2, 9, 4)); // 2 — eng kichigi\nconsole.log(Math.abs(-5));      // 5 — modul\nconsole.log(Math.sqrt(16));     // 4 — kvadrat ildiz\nconsole.log(Math.PI);           // 3.141592653589793",
        "note": "Math ni o‘rnatish yoki new Math() qilish kerak emas. Math.max — metodning nomi, qavs ichidagilar — unga berilayotgan qiymatlar."
      },
      {
        "title": "8. Kasrni butun songa aylantirish",
        "text": "Math.round eng yaqin butun songa yaxlitlaydi. Math.floor pastki butun songa, Math.ceil yuqorigi butun songa olib boradi. Math.trunc esa kasr qismini olib tashlaydi. Manfiy sonlarda “pastga” kichikroq songa qarab yurishni bildiradi.",
        "code": "console.log(Math.round(3.6)); // 4\nconsole.log(Math.floor(3.6)); // 3\nconsole.log(Math.ceil(3.6));  // 4\nconsole.log(Math.trunc(3.6)); // 3\n\nconsole.log(Math.floor(-3.6)); // -4\nconsole.log(Math.ceil(-3.6));  // -3\nconsole.log(Math.trunc(-3.6)); // -3",
        "note": "floor bilan trunc bir xil emas. -4 soni -3.6 dan kichik, shuning uchun floor(-3.6) → -4. trunc(-3.6) esa kasrni olib tashlab -3 beradi."
      },
      {
        "title": "9. Tasodifiy son: Math.random",
        "text": "Math.random() har chaqirilganda 0 ga teng yoki undan katta, lekin 1 dan kichik son beradi. Natija oldindan aniq emas. 1 dan 10 gacha butun son olish uchun uchta ish qilamiz: 10 ga ko‘paytiramiz, floor qilamiz, 1 qo‘shamiz.",
        "code": "const tasodifiy = Math.random();\nconsole.log(tasodifiy); // 0 <= natija < 1\n\nconst son = Math.floor(Math.random() * 10) + 1;\nconsole.log(son); // 1 dan 10 gacha butun son",
        "note": "1. random * 10 → 0 dan 10 gacha, 10 ning o‘zi kirmaydi.\n2. Math.floor → 0, 1, 2, ... 9.\n3. + 1 → 1, 2, 3, ... 10.\nKoddagi izoh tasodifiy aniq javobni emas, mumkin bo‘lgan oraliqni bildiradi."
      },
      {
        "title": "10. toFixed: kasrdan keyin nechta raqam?",
        "text": "toFixed(2) sonni kasrdan keyin ikkita raqam bilan ko‘rsatadigan matn qaytaradi. Masalan, 3.5 qiymati \"3.50\" ko‘rinishiga keladi. Bu ko‘rsatish uchun qulay, ammo natija number emas.",
        "code": "const narx = 3.5;\nconst matn = narx.toFixed(2);\n\nconsole.log(matn);        // \"3.50\"\nconsole.log(typeof matn); // \"string\"\nconsole.log(matn + 1);    // \"3.501\"\nconsole.log(Number(matn) + 1); // 4.5",
        "note": "toFixed asl narx o‘zgaruvchisini o‘zgartirmaydi. Stringga aylangan natija bilan hisoblashdan oldin uni kerak bo‘lsa Number bilan qayta aylantiramiz."
      },
      {
        "title": "11. NaN va Infinity",
        "text": "NaN yaroqli sonli natija olinmaganini bildiruvchi maxsus number qiymatidir. Infinity esa cheksizlikni bildiruvchi maxsus qiymat. Masalan, number turidagi 1 ni 0 ga bo‘lish Infinity beradi; 0 / 0 esa NaN.",
        "code": "console.log(Number(\"abc\")); // NaN\nconsole.log(0 / 0);         // NaN\nconsole.log(typeof NaN);    // \"number\"\nconsole.log(NaN === NaN);   // false\nconsole.log(Number.isNaN(NaN)); // true\n\nconsole.log(1 / 0);          // Infinity\nconsole.log(-1 / 0);         // -Infinity\nconsole.log(Number.isFinite(20));       // true\nconsole.log(Number.isFinite(Infinity)); // false\nconsole.log(Number.isFinite(NaN));      // false",
        "note": "NaN ni qiymat === NaN bilan topib bo‘lmaydi. Number.isNaN ishlating. Number.isFinite qiymat number ekanini va NaN yoki cheksizlik emasligini tekshiradi; matnni avtomatik songa aylantirmaydi."
      },
      {
        "title": "12. Kasrlar va katta sonlarning aniqligi",
        "text": "Number sonlarni ikkilik formatda saqlaydi. Ba’zi o‘nlik kasrlar shu formatda aniq ifodalanmaydi. Shuning uchun 0.1 + 0.2 natijasi kutilganidan juda oz farq qiladi. Juda katta butun sonlar ham aniqlikni yo‘qotishi mumkin.",
        "code": "console.log(0.1 + 0.2);         // 0.30000000000000004\nconsole.log(0.1 + 0.2 === 0.3); // false\nconsole.log((0.1 + 0.2).toFixed(2)); // \"0.30\"\n\nconsole.log(Number.MAX_SAFE_INTEGER); // 9007199254740991\nconsole.log(Number.isSafeInteger(100)); // true",
        "note": "toFixed ko‘rinishni formatlaydi, barcha hisoblashlarni avtomatik aniq qilib qo‘ymaydi. Sonni 64-bit number shaklida saqlashning chegaralari bor. Katta butun sonlar uchun BigInt keyingi mavzularda ko‘riladi."
      }
    ],
    "takeaway": "Son qo‘shtirnoqsiz yoziladi; \"20\" esa matn.\n+, -, *, / — asosiy hisoblashlar; % — qoldiq, ** — daraja.\nNumber matnni songa aylantiradi.\nMath.max/min — katta/kichik son; Math.abs — modul.\nround — eng yaqin, floor — pastga, ceil — yuqoriga, trunc — kasrni olib tashlash.\nMath.random natijasida 0 qatnashishi mumkin, 1 esa qatnashmaydi.\ntoFixed natijasi string. NaN ni Number.isNaN bilan tekshiring.",
    "exercise": "Har bir qatordagi natijani avval o‘zingiz yozing. Matn bilan sonni farqlang, so‘ng yaxlitlash qoidalarini qo‘llang. Keyin javobni ochib tekshiring.",
    "fullTextDefault": true,
    "exerciseCode": "console.log(7 + 3);                     // 1: ?\nconsole.log(7 / 2);                     // 2: ?\nconsole.log(7 % 2);                     // 3: ?\nconsole.log(2 ** 3);                    // 4: ?\nconsole.log(\"20\" + 1);                  // 5: ?\nconsole.log(Number(\"20\") + 1);          // 6: ?\nconsole.log(Math.round(3.6));           // 7: ?\nconsole.log(Math.floor(-3.6));          // 8: ?\nconsole.log(Math.ceil(3.1));            // 9: ?\nconsole.log((0.1 + 0.2).toFixed(2));     // 10: ?\nconsole.log(Number.isNaN(Number(\"abc\"))); // 11: ?\nconsole.log(1 / 0);                     // 12: ?",
    "exerciseAnswer": "1. 10 — qo‘shish.\n2. 3.5 — bo‘lish kasrni saqlaydi.\n3. 1 — bo‘lishdan qolgan qoldiq.\n4. 8 — 2 * 2 * 2.\n5. \"201\" — matn va 1 birlashtiriladi.\n6. 21 — avval \"20\" songa aylanadi, keyin 1 qo‘shiladi.\n7. 4 — 3.6 ga eng yaqin butun son.\n8. -4 — -3.6 dan pastdagi butun son.\n9. 4 — 3.1 dan yuqoridagi butun son.\n10. \"0.30\" — toFixed ikki kasr xonali string qaytaradi.\n11. true — Number(\"abc\") NaN bo‘ladi.\n12. Infinity — number qiymatini nolga bo‘lishdagi maxsus natija."
  },
  {
    "id": "strings",
    "title": "Stringlar: noldan",
    "question": "String qanday yaratiladi, nima uchun o‘zgartirib bo‘lmaydi va qaysi metodlar ishlatiladi?",
    "explanation": "String — matn qiymati. U primitive: bir marta yaratilgach ichi o‘zgartirilmaydi. Har qanday \"o‘zgartirish\" aslida yangi string yaratadi. Kod o‘qiyotganda satrning uzunligini, indeksini va metod qaytargan yangi qiymatni kuzat.",
    "sections": [
      {
        "title": "1. Yaratish va uzunlik",
        "text": "Stringni ' yoki \" yoki ` (backtick) bilan yozish mumkin. .length xususiyati belgilar sonini beradi. Bo‘sh string uzunligi 0.",
        "code": "const a = 'Salom';\nconst b = \"Dunyo\";\nconst c = `Assalom`;\nconsole.log(a.length); // 5\nconsole.log(''.length); // 0",
        "note": "Backtick bilan yozilgan stringga template literal deyiladi: ichiga ${...} bilan o‘zgaruvchi qo‘yish mumkin."
      },
      {
        "title": "2. String o‘zgarmas (immutable)",
        "text": "String ichidagi belgini almashtirib bo‘lmaydi. str[0] = \"X\" yozilsa xato bo‘lmaydi (oddiy rejimda), lekin hech narsa o‘zgar maydi. Yangi string yaratish uchun metodlar ishlatiladi.",
        "code": "const s = 'Ali';\n// s[0] = 'B'; // ishlamaydi\nconsole.log(s[0]); // 'A'\nconsole.log(s); // 'Ali' — o'zgarmadi",
        "note": "const bo‘lmasa ham string o‘zgarmaydi: bu turining xususiyati."
      },
      {
        "title": "3. Template literal",
        "text": "Backtick ichida ${} bilan ifoda qo‘yish mumkin. Bu satr birlashtirishni (+) osonlashtiradi. Ichida hisoblash ham ishlaydi.",
        "code": "const ism = 'Ali';\nconst yosh = 20;\nconsole.log(`Men ${ism}, ${yosh} yoshman.`);\nconsole.log(`Keyingi yil ${yosh + 1} bo'laman.`);"
      },
      {
        "title": "4. Ko‘p ishlatiladigan metodlar",
        "text": "Metodlar yangi string qaytaradi, aslni o‘zgartirmaydi: toUpperCase/toLowerCase, trim (chetdagi bo‘shliqlarni olib tashlash), includes, startsWith, endsWith, indexOf, slice, replace, split, repeat.",
        "code": "const s = '  Salom Dunyo  ';\nconsole.log(s.trim()); // 'Salom Dunyo'\nconsole.log(s.trim().toUpperCase()); // 'SALOM DUNYO'\nconsole.log(s.includes('Dunyo')); // true\nconsole.log(s.startsWith('Salom')); // false (boshida bo'shliq bor)\nconsole.log('Ali'.slice(1)); // 'li'\nconsole.log('a,b,c'.split(',')); // ['a','b','c']"
      },
      {
        "title": "5. indexOf va qidirish",
        "text": "indexOf qidirilgan satrning birinchi indeksini qaytaradi, topmasa -1. includes esa true/false qaytaradi. Kod o‘qiyotganda \"topilganmi?\" degan savolga javob kerak bo‘lsa includes qulay.",
        "code": "const s = 'JavaScript';\nconsole.log(s.indexOf('Script')); // 6\nconsole.log(s.indexOf('python')); // -1\nconsole.log(s.includes('Script')); // true\nconsole.log(s.indexOf('a')); // 1 (birinchi 'a')"
      },
      {
        "title": "6. String va son aralash",
        "text": "+ operatori agar operandlardan biri string bo‘lsa, birlashtiradi. Shuning uchun \"5\" + 1 = \"51\", lekin \"5\" - 1 = 4 (son ga o‘zgartiriladi). Bu ko‘p xatolarga sabab bo‘ladi.",
        "code": "console.log('5' + 1); // '51'\nconsole.log('5' - 1); // 4\nconsole.log('5' + +'1'); // '51' (oldin +'1' → 1, keyin birlashtirish)\nconsole.log(Number('5') + 1); // 6",
        "note": "Unary + qiymatni songa o‘zgartiradi: +\"1\" = 1. Lekin bu usulni tushunish qiyin, Number() yaxshiroq."
      }
    ],
    "takeaway": "String primitive va o‘zgarmas: ichi hech qachon o‘zgar maydi.\n.length uzunlik, [indeks] bitta belgi beradi.\nTemplate literal ${} bilan o‘zgaruvchi qo‘yadi.\nMetodlar yangi string qaytaradi: trim, toUpperCase, includes, slice, split.\nindexOf topmasa -1 qaytaradi.\n\"5\" + 1 = \"51\", \"5\" - 1 = 4 — + birlashtiradi, - son ga o‘zgartiradi.",
    "exercise": "1) const s = \"Ali\"; s[0] = \"B\"; natijada s nima?\n2) \"5\" + 3 va \"5\" - 3 natijalari?\n3) \"JavaScript\".indexOf(\"Script\") nima?\n4) \"  salom  \".trim().toUpperCase() nima?\n5) \"a,b,c\".split(\",\") qanday massiv beradi?"
  },
  {
    "id": "operators",
    "title": "Operatorlar: noldan",
    "question": "Arifmetik, taqsimlash, mantiqiy va shart operatorlari qanday ishlaydi?",
    "explanation": "Operatorlar qiymatlar ustida amal bajaradi. Kod o‘qiyotganda avval operator turini aniqla, keyin qiymatlarning turini tekshir: natija ko‘pincha turga bog‘liq. Mantiqiy operatorlar qiymatni emas, ba’zan operandning o‘zini qaytaradi.",
    "sections": [
      {
        "title": "1. Arifmetik operatorlar",
        "text": "+ (qo‘shish/birlashtirish), - (ayirish), * (ko‘paytirish), / (bo‘linish), % (qoldiq), ** (daraja). Faqat + ikki xil ishlaydi: sonlar uchun qo‘shadi, string bor bo‘lsa birlashtiradi.",
        "code": "console.log(2 + 3); // 5\nconsole.log(\"2\" + 3); // \"23\"\nconsole.log(10 % 3); // 1\nconsole.log(3 ** 2); // 9"
      },
      {
        "title": "2. Taqsimlash (assignment)",
        "text": "= qiymat beradi. +=, -=, *=, /=, %= qisqa yozuv: x += 2 x = x + 2 bilan bir xil. Bu o‘zgaruvchining qiymatini o‘zgartiradi.",
        "code": "let x = 5;\nx += 2; // x = x + 2 → 7\nx *= 3; // x = x * 3 → 21\nconsole.log(x); // 21"
      },
      {
        "title": "3. Inkrement va dekrement",
        "text": "++ qiymatni 1 ga oshiradi, -- kamaytiradi. Prefix (++x) avval oshirib, keyin qiymatni beradi; postfix (x++) avval qiymatni berib, keyin oshiradi. Bu farq kod o‘qishda muhim.",
        "code": "let a = 5;\nconsole.log(a++); // 5 (eski qiymat), keyin a = 6\nconsole.log(a); // 6\n\nlet b = 5;\nconsole.log(++b); // 6 (yangi qiymat)\nconsole.log(b); // 6"
      },
      {
        "title": "4. Mantiqiy operatorlar",
        "text": "&& (VA), || (YOKI), ! (INKOR). && va || qisqa baholash (short-circuit) qiladi: && chap qiymat falsy bo‘lsa o‘ngni hisoblamaydi; || chap truthy bo‘lsa o‘ngni hisoblamaydi. Ular boolean emas, operandlardan birini qaytaradi.",
        "code": "console.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!0); // true\nconsole.log(\"Ali\" && 5); // 5 (oxirgi truthy)\nconsole.log(0 && 5); // 0 (chap falsy, o‘ng hisoblanmadi)\nconsole.log(\"Ali\" || \"Vali\"); // \"Ali\"",
        "note": "Kod o‘qiyotganda \"qaysi operand qaytadi?\" deb so‘ra: && oxirgi truthy yoki birinchi falsy, || birinchi truthy yoki oxirgi falsy."
      },
      {
        "title": "5. Shart (ternary) operatori",
        "text": "shart ? ha : yo‘q — if/else ning qisqa shakli. Shart truthy bo‘lsa birinchi, aks holda ikkinchi qiymat qaytadi.",
        "code": "const yosh = 18;\nconsole.log(yosh >= 18 ? \"kattaman\" : \"yoshman\"); // kattaman\n\nconst x = 0;\nconsole.log(x ? \"bor\" : \"yo'q\"); // yo'q"
      },
      {
        "title": "6. Operator ustunligi",
        "text": "Avval qavs, keyin **, keyin *, /, %, so‘ngra +, -, oxirida taqqoslash va mantiqiy. Qavs qo‘yish eng xavfsiz: hisoblash tartibini eshlash shart emas.",
        "code": "console.log(2 + 3 * 4); // 14 (avval 3*4)\nconsole.log((2 + 3) * 4); // 20\nconsole.log(2 ** 3 ** 2); // 512 (2 ** (3 ** 2))\nconsole.log(1 + 2 + \"3\"); // \"33\" (chapdan o‘ngga)"
      },
      {
        "title": "7. typeof, void va vergul",
        "text": "typeof qiymat turini string sifatida beradi. void ifodani bajarib undefined qaytaradi (kamdan kam ishlatiladi). Vergul operatori oxirgi ifodani qaytaradi: (1, 2, 3) → 3.",
        "code": "console.log(typeof 5); // \"number\"\nconsole.log(typeof \"5\"); // \"string\"\nconsole.log(void 5); // undefined\nconsole.log((1, 2, 3)); // 3"
      }
    ],
    "takeaway": "+ sonlarni qo‘shadi, string bo‘lsa birlashtiradi.\n++ va -- prefix/postfix farqi natijani o‘zgartiradi.\n&& va || boolean emas, operand qaytaradi va qisqa baholaydi.\nTernary ? : — if/else qisqa shakli.\nQavs qo‘yish hisoblash tartibini aniq qiladi.\ntur va qiymatni har doim ajratib o‘qish kerak.",
    "exercise": "1) console.log(\"3\" + 2) natijasi?\n2) let x = 1; console.log(x++); console.log(x) natijalari?\n3) \"Ali\" || \"Vali\" nima qaytaradi?\n4) 0 && 5 nima va nega 5 hisoblanmaydi?\n5) 2 + 3 * 4 natijasi?"
  },
  {
    "id": "conditionals",
    "title": "Shart operatorlari: if, else, switch",
    "question": "if/else, else if, switch va ternary qanday ishlaydi? Qaysi holatda qaysi birini tanlash kerak?",
    "explanation": "Shart operatori kodning qaysi qismi bajarilishini hal qiladi. JavaScript shartni truthy/falsy qoidasi bilan baholaydi: boolean ga o‘zgartiradi. Kod o‘qiyotganda har bir shartni alohida hisoblab, qaysi tarmoq tanlanishini kuzat.",
    "sections": [
      {
        "title": "1. if va else",
        "text": "if (shart) truthy bo‘lsa, keyingi block bajariladi. else esa shart falsy bo‘lganda ishlaydi. Faqat bitta tarmoq tanlanadi.",
        "code": "const yosh = 18;\nif (yosh >= 18) {\n  console.log(\"Kattaman\");\n} else {\n  console.log(\"Yoshman\");\n}\n// Natija: Kattaman"
      },
      {
        "title": "2. else if zanjiri",
        "text": "Bir nechta shartni ketma-ket tekshirish uchun else if ishlatiladi. Birinchi mos kelgan tarmoq bajarilib, qolganlari tekshirilmaydi. Shuning uchun shartlar tartibi muhim.",
        "code": "const ball = 85;\nif (ball >= 90) {\n  console.log(\"A\");\n} else if (ball >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}\n// Natija: B"
      },
      {
        "title": "3. Truthy/falsy shart",
        "text": "Shart boolean bo‘lishi shart emas: har qanday qiymat truthy yoki falsy hisoblanadi. 0, \"\", null, undefined, NaN, false — falsy. Qolgan hammasi, jumladan [] va {} — truthy.",
        "code": "const items = [];\nif (items) {\n  console.log(\"truthy\"); // bu chiqadi\n}\n\nif (items.length > 0) {\n  console.log(\"element bor\"); // bu chiqmaydi\n} else {\n  console.log(\"bo'sh\"); // bu chiqadi\n}",
        "note": "Bo‘sh massiv truthy. Element borligini tekshirish uchun items.length > 0 kerak."
      },
      {
        "title": "4. switch",
        "text": "switch qiymatni bir nechta holat (case) bilan solishtiradi. Solishtirish === bilan qilinadi (qat’iy tenglik). break bo‘lmasa, keyingi case ga \"tushib qoladi\" (fall-through).",
        "code": "const kun = \"dushanba\";\nswitch (kun) {\n  case \"dushanba\":\n    console.log(\"Birinchi kun\");\n    break;\n  case \"juma\":\n    console.log(\"Oxirgi ish kuni\");\n    break;\n  default:\n    console.log(\"Boshqa kun\");\n}\n// Natija: Birinchi kun"
      },
      {
        "title": "5. break unutish tuzog‘i",
        "text": "Agar case ichida break yo‘q bo‘lsa, bajarilish keyingi case ga davom etadi. Bu ba’zan foydali, lekin ko‘pincha xato bo‘ladi.",
        "code": "const x = 1;\nswitch (x) {\n  case 1:\n    console.log(\"bir\");\n  case 2:\n    console.log(\"ikki\");\n    break;\n  default:\n    console.log(\"boshqa\");\n}\n// Natija: bir, ikki (break yo'q edi)"
      },
      {
        "title": "6. Ternary va qisqa baholash",
        "text": "Oddiy shartni ternary bilan qisqa yozish mumkin. Bir nechta shartni zanjirlab ham yozish mumkin, lekin o‘qilishi qiyinlashadi. && va || ham shart sifatida ishlatiladi.",
        "code": "const yosh = 20;\nconst xabar = yosh >= 18 ? \"katta\" : \"yosh\";\nconsole.log(xabar); // katta\n\n// qisqa baholash bilan:\nconst nom = xabar && xabar.toUpperCase();\nconsole.log(nom); // KATTA"
      }
    ],
    "takeaway": "if/else — ikki tarmoq; else if — ko‘p tarmoq, birinchi mos kelsa to‘xtaydi.\nShart truthy/falsy qoidasi bilan baholanadi.\n[] va {} truthy, bo‘shligi muhim emas.\nswitch === bilan solishtiradi, break bo‘lmasa keyingi case ga o‘tadi.\nTernary oddiy shart uchun qisqa yozuv.",
    "exercise": "1) const x = 0; if (x) ... qaysi tarmoq?\n2) switch da break unutilsa nima bo‘ladi?\n3) [] truthy mi? Element borligini qanday tekshirasiz?\n4) ball = 85 bo‘lsa, yuqoridagi else if zanjirida nima chiqadi?"
  },
  {
    "id": "loops",
    "title": "Tsikllar: for, while, for...of, for...in",
    "question": "Tsikllar qanday ishlaydi? for, while, for...of va for...in farqi nima? break/continue nima qiladi?",
    "explanation": "Tsikl bir amalni bir necha marta takrorlaydi. Kod o‘qiyotganda uch narsani kuzat: boshlang‘ich qiymat, to‘xtash sharti va har qadamda o‘zgarish. noto‘g‘ri shart cheksiz tsiklga olib keladi.",
    "sections": [
      {
        "title": "1. Oddiy for",
        "text": "for (boshlash; shart; o‘zgartirish) tuzilmasiga ega. Har takrorlashda avval shart tekshiriladi, so‘ng block bajariladi, keyin o‘zgartirish amalga oshiriladi.",
        "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n// Natija: 0, 1, 2\n\nfor (let i = 3; i > 0; i--) {\n  console.log(i);\n}\n// Natija: 3, 2, 1"
      },
      {
        "title": "2. while va do...while",
        "text": "while shart truthy ekan takrorlaydi. do...while esa blockni kamida bir marta bajaradi, keyin shartni tekshiradi.",
        "code": "let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}\n// 0, 1, 2\n\nlet j = 10;\ndo {\n  console.log(j); // kamida bir marta bajariladi\n} while (j < 3);\n// 10"
      },
      {
        "title": "3. break va continue",
        "text": "break tsiklni to‘liq to‘xtatadi. continue faqat joriy takrorlashni o‘tkazib, keyingisiga o‘tadi.",
        "code": "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue; // 2 ni o'tkazamiz\n  if (i === 4) break;    // 4 da to'xtaymiz\n  console.log(i);\n}\n// Natija: 0, 1, 3"
      },
      {
        "title": "4. for...of — qiymatlar bo‘yicha",
        "text": "for...of massiv, string, Map, Set kabi iteratsiya qilinadigan obyektlarning qiymatlarini beradi. Massiv indeksini emas, elementni oladi.",
        "code": "const sonlar = [10, 20, 30];\nfor (const son of sonlar) {\n  console.log(son); // 10, 20, 30\n}\n\nfor (const harf of \"Ali\") {\n  console.log(harf); // A, l, i\n}"
      },
      {
        "title": "5. for...in — kalitlar bo‘yicha",
        "text": "for...in obyektning o‘z va meros qilingan sanab o‘tiladigan (enumerable) kalitlarini beradi. Massivda ham ishlaydi, lekin indekslarni string sifatida beradi. Massiv uchun for...of yaxshiroq.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nfor (const kalit in user) {\n  console.log(kalit, user[kalit]);\n}\n// ism Ali, yosh 20\n\nconst arr = [10, 20];\nfor (const i in arr) {\n  console.log(typeof i); // \"string\" — indeks string!\n}"
      },
      {
        "title": "6. Har qadamda yangi scope",
        "text": "for (let i = ...) da har bir takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2 (let)\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3 (var — bitta j)"
      },
      {
        "title": "7. Cheksiz tsikl tuzog‘i",
        "text": "Agar o‘zgartirish qismi yo‘q bo‘lsa yoki shart hech qachon falsy bo‘lmasa, tsikl to‘xtamaydi. Kod o‘qiyotganda \"bu tsikl qachon to‘xtaydi?\" degan savolga javob topish shart.",
        "code": "// let i = 0;\n// while (i < 3) {\n//   console.log(i); // i o'zgarmaydi → cheksiz\n// }\n\nlet k = 0;\nwhile (k < 3) {\n  console.log(k);\n  k += 1; // to'g'ri: har qadam oshadi\n}"
      }
    ],
    "takeaway": "for: boshlash/shart/o‘zgartirish; shart avval tekshiriladi.\nwhile shart truthy ekan, do...while kamida bir marta bajaradi.\nbreak to‘xtatadi, continue keyingi qadamga o‘tadi.\nfor...of qiymat, for...in kalit (string) beradi.\nlet har takrorlashda yangi scope yaratadi, var esa bitta.\nHar tsiklda \"qachon to‘xtaydi?\" deb so‘ra.",
    "exercise": "1) for (let i=0; i<3; i++) necha marta bajariladi va qanday qiymatlar chiqadi?\n2) break va continue farqi?\n3) for...of va for...in farqi nima?\n4) let o‘rniga var ishlatilsa setTimeout misolida nima chiqadi?"
  },
  {
    "id": "objects-basics",
    "title": "Obyektlar: noldan",
    "question": "Obyekt nima? Kalit-qiymat, nuqta va kvadrat notatsiya, ichki obyektlar.",
    "explanation": "Obyekt — kalit (property) va qiymatlar to‘plami. U ko‘p ma’lumotni bitta nom ostida saqlash uchun ishlatiladi. Kod o‘qiyotganda avval “bu obyektning qaysi kaliti o‘qilyapti?” degan savolni ber. Kalit har doim string (yoki symbol), qiymat esa ixtiyoriy tur bo‘lishi mumkin.",
    "sections": [
      {
        "title": "1. Obyekt yaratish",
        "text": "Eng keng tarqalgan usul — { } ichida kalit: qiymat yozish. Kalitlarni o‘qish uchun nuqta (obj.kalit) yoki kvadrat (obj[\"kalit\"]) notatsiya ishlatiladi.",
        "code": "const user = {\n  ism: \"Ali\",\n  yosh: 20,\n  shahar: \"Toshkent\"\n};\nconsole.log(user.ism); // Ali\nconsole.log(user[\"yosh\"]); // 20"
      },
      {
        "title": "2. Nuqta va kvadrat notatsiya farqi",
        "text": "Nuqta notatsiyasida kalit o‘zgarmas nom bo‘ladi. Kvadrat notatsiyada kalit ifoda bo‘lishi mumkin: o‘zgaruvchi yoki hisoblash natijasi. Kalit nomida bo‘shliq yoki chiziqcha bo‘lsa, faqat kvadrat notatsiya ishlaydi.",
        "code": "const user = { \"ism-familya\": \"Ali\", yosh: 20 };\n// console.log(user.ism-familya); // xato (ayirish deb o‘qiladi)\nconsole.log(user[\"ism-familya\"]); // Ali\n\nconst kalit = \"yosh\";\nconsole.log(user[kalit]); // 20"
      },
      {
        "title": "3. Qiymat qo‘shish va o‘zgartirish",
        "text": "Yo‘q kalitga qiymat yozilsa, u yaratiladi. Bor kalitga yangi qiymat yozilsa, eskisi almashtiriladi. O‘chirish uchun delete ishlatiladi.",
        "code": "const user = { ism: \"Ali\" };\nuser.yosh = 20; // yangi kalit\nuser.ism = \"Vali\"; // o'zgartirish\nconsole.log(user); // { ism: \"Vali\", yosh: 20 }\n\ndelete user.yosh;\nconsole.log(user.yosh); // undefined"
      },
      {
        "title": "4. Ichki obyektlar va ierarxiya",
        "text": "Obyekt qiymati sifatida boshqa obyekt bo‘lishi mumkin. Bunday tuzilmada bir necha nuqta bilan chuqurroq o‘qish mumkin: user.manzil.shahar.",
        "code": "const user = {\n  ism: \"Ali\",\n  manzil: {\n    shahar: \"Toshkent\",\n    kocha: \"Navoiy\"\n  }\n};\nconsole.log(user.manzil.shahar); // Toshkent\nconsole.log(user.manzil.kocha); // Navoiy",
        "note": "Agar oraliq obyekt yo‘q bo‘lsa, user.manzil.shahar xato beradi. Optional chaining bilan xavfsiz: user.manzil?.shahar."
      },
      {
        "title": "5. Kalitlar va qiymatlar ro‘yxati",
        "text": "Object.keys obyekt kalitlari massivini, Object.values qiymatlar massivini, Object.entries esa [kalit, qiymat] juftliklari massivini qaytaradi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconsole.log(Object.keys(user)); // [\"ism\", \"yosh\"]\nconsole.log(Object.values(user)); // [\"Ali\", 20]\nconsole.log(Object.entries(user)); // [[\"ism\",\"Ali\"],[\"yosh\",20]]"
      },
      {
        "title": "6. Kalit borligini tekshirish",
        "text": "obj.kalit !== undefined degan tekshirish xato bo‘lishi mumkin: kalit bor, lekin qiymati undefined bo‘lsa. To‘g‘ri usul — \"kalit\" in obj yoki Object.hasOwn(obj, \"kalit\").",
        "code": "const o = { x: undefined };\nconsole.log(o.x !== undefined); // false (noto'g'ri xulosa)\nconsole.log(\"x\" in o); // true\nconsole.log(Object.hasOwn(o, \"x\")); // true\nconsole.log(\"y\" in o); // false"
      },
      {
        "title": "7. Obyekt ichida metod",
        "text": "Obyekt xususiyati sifatida funksiya saqlash mumkin. Bunday funksiyaga metod deyiladi. Ichida this obyektni ko‘rsatadi.",
        "code": "const user = {\n  ism: \"Ali\",\n  salom() {\n    return \"Salom, \" + this.ism;\n  }\n};\nconsole.log(user.salom()); // Salom, Ali"
      }
    ],
    "takeaway": "Obyekt — kalit: qiymat to‘plami.\nNuqta notatsiya o‘zgarmas kalit, kvadrat notatsiya ifoda qabul qiladi.\nYo‘q kalitga yozish uni yaratadi; delete o‘chiradi.\nIchki obyektlarni nuqta zanjiri bilan o‘qish mumkin.\nObject.keys/values/entries kalit va qiymatlarni massiv qiladi.\nKalit borligini \"x\" in obj yoki Object.hasOwn bilan tekshir.",
    "exercise": "1) const o = {a:1}; o.b = 2; o.a = 3; natijada o nima?\n2) \"x\" in o va o.x !== undefined farqi nima?\n3) user.manzil.shahar qachon xato beradi?\n4) Object.keys({a:1,b:2}) nima qaytaradi?"
  },
  {
    "id": "arrays-basics",
    "title": "Massivlar: noldan",
    "question": "Massiv nima? Indeks, length, qo‘shish/o‘chirish va ko‘p uchraydigan metodlar.",
    "explanation": "Massiv — tartiblangan qiymatlar ro‘yxati. Har elementning indeksi bor (0 dan boshlanadi). Massiv ham obyekt, lekin uning maxsus xususiyati — length. Kod o‘qiyotganda indeks va uzunlikni kuzat: ko‘p xatolar shular bilan bog‘liq.",
    "sections": [
      {
        "title": "1. Yaratish va o‘qish",
        "text": "Massiv [ ] ichida elementlar bilan yaratiladi. Elementga indeks orqali murojaat qilinadi: arr[0] birinchi, arr[arr.length - 1] oxirgi element.",
        "code": "const sonlar = [10, 20, 30];\nconsole.log(sonlar[0]); // 10\nconsole.log(sonlar[1]); // 20\nconsole.log(sonlar.length); // 3\nconsole.log(sonlar[sonlar.length - 1]); // 30 (oxirgi)"
      },
      {
        "title": "2. Yo‘q indeksga murojaat",
        "text": "Massivda yo‘q indeksni o‘qish undefined qaytaradi, xato emas. Bu obyektlarga o‘xshash: massiv ham obyekt.",
        "code": "const a = [1, 2];\nconsole.log(a[5]); // undefined\nconsole.log(a[-1]); // undefined"
      },
      {
        "title": "3. Qo‘shish va o‘chirish",
        "text": "push oxiriga qo‘shadi, pop oxirgisini olib tashlaydi, unshift boshiga qo‘shadi, shift birinchi elementni olib tashlaydi. Barchasi asl massivni o‘zgartiradi.",
        "code": "const a = [1, 2];\na.push(3); // [1,2,3]\na.pop();   // [1,2]\na.unshift(0); // [0,1,2]\na.shift(); // [1,2]\nconsole.log(a); // [1,2]"
      },
      {
        "title": "4. splice — istalgan joyga qo‘shish/o‘chirish",
        "text": "splice(start, deleteCount, ...elements) berilgan joydan boshlab elementlarni o‘chiradi va yangilarini qo‘shadi. Asl massivni o‘zgartiradi va o‘chirilgan elementlarni qaytaradi.",
        "code": "const a = [1, 2, 3, 4];\nconsole.log(a.splice(1, 2)); // [2,3] o'chirildi\nconsole.log(a); // [1,4]\n\na.splice(1, 0, 9); // 1-indeksga 9 qo'shamiz\nconsole.log(a); // [1,9,4]"
      },
      {
        "title": "5. slice — qismni nusxalash",
        "text": "slice(start, end) berilgan oraliqdagi elementlardan yangi massiv yaratadi. Asl massiv o‘zgartirilmaydi. end indeksi kiritilmaydi.",
        "code": "const a = [1, 2, 3, 4];\nconsole.log(a.slice(1, 3)); // [2,3]\nconsole.log(a.slice(2)); // [3,4]\nconsole.log(a); // [1,2,3,4] — o'zgarmadi"
      },
      {
        "title": "6. indexOf, includes, join",
        "text": "indexOf element indeksini (topmasa -1), includes bor-yo‘qligini (true/false), join esa elementlarni stringga birlashtiradi.",
        "code": "const a = [10, 20, 30];\nconsole.log(a.indexOf(20)); // 1\nconsole.log(a.indexOf(99)); // -1\nconsole.log(a.includes(30)); // true\nconsole.log(a.join(\", \")); // \"10, 20, 30\""
      },
      {
        "title": "7. Massiv va obyekt farqi",
        "text": "Massiv — tartibli ro‘yxat, uzunligi bor. Obyekt — kalitlar to‘plami. Lekin massiv ham obyekt: uning indekslari kalit, length xususiyati bor. Shuning uchun typeof [] === \"object\" bo‘ladi.",
        "code": "console.log(typeof []); // \"object\"\nconsole.log(Array.isArray([])); // true — to'g'ri tekshirish\nconsole.log(Array.isArray({})); // false"
      }
    ],
    "takeaway": "Indeks 0 dan boshlanadi; oxirgi element arr[arr.length-1].\nYo‘q indeks undefined qaytaradi, xato emas.\npush/pop/unshift/shift/splice aslni o‘zgartiradi.\nslice yangi massiv qaytaradi, aslni saqlaydi.\nindexOf topmasa -1, includes true/false qaytaradi.\nMassiv turini Array.isArray bilan tekshir.",
    "exercise": "1) [1,2,3][5] nima?\n2) push va unshift farqi?\n3) splice va slice farqi nima?\n4) [10,20].indexOf(99) nima?\n5) typeof [] nima va to‘g‘ri tekshirish qanday?"
  },
  {
    "id": "json-basics",
    "title": "JSON: noldan",
    "question": "JSON nima? JSON.stringify va JSON.parse qanday ishlaydi? Nima yo‘qoladi?",
    "explanation": "JSON (JavaScript Object Notation) — ma’lumot almashish uchun matn formati. U JavaScript obyektiga o‘xshaydi, lekin faqat ma’lumot: funksiya, undefined, Symbol bo‘lmaydi. Kod o‘qiyotganda stringify/parse juftligini ko‘rsang, “tur o‘zgarishini” kuzat.",
    "sections": [
      {
        "title": "1. JSON nima?",
        "text": "JSON — matn. Obyektni matnga aylantirish uchun JSON.stringify, matnni obyektga qaytarish uchun JSON.parse ishlatiladi. Bu ikki funksiya teskari amal qiladi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconst matn = JSON.stringify(user);\nconsole.log(matn); // '{\"ism\":\"Ali\",\"yosh\":20}'\nconsole.log(typeof matn); // \"string\"\nconsole.log(JSON.parse(matn)); // obyekt qaytdi"
      },
      {
        "title": "2. Qaysi qiymatlar yo‘qoladi?",
        "text": "JSON.stringify obyektdagi funksiya, undefined va Symbol xususiyatlarini tashlab yuboradi. NaN va Infinity null ga aylanadi. Date esa ISO string ga aylanadi.",
        "code": "const o = {\n  a: 1,\n  b: undefined,\n  f: () => 2,\n  c: NaN\n};\nconsole.log(JSON.stringify(o)); // {\"a\":1,\"c\":null}\nconsole.log(JSON.stringify(new Date(\"2026-01-01\"))); // \"2026-01-01T00:00:00.000Z\""
      },
      {
        "title": "3. JSON.parse xatolari",
        "text": "Noto‘g‘ri formatdagi matnni parse qilsang, SyntaxError chiqadi. Shuning uchun tashqi manbadan kelgan ma’lumotni try/catch bilan o‘qish kerak.",
        "code": "// JSON.parse(\"{noto'g'ri}\"); // SyntaxError\ntry {\n  JSON.parse(\"{noto'g'ri}\");\n} catch (e) {\n  console.log(\"Xato:\", e.message);\n}"
      },
      {
        "title": "4. Chuqur nusxa olish usuli sifatida",
        "text": "JSON.parse(JSON.stringify(obj)) chuqur nusxa yaratadi, lekin universal emas: funksiya, undefined, Symbol yo‘qoladi; Date stringga aylanadi; tsiklik bog‘lanish xato beradi. structuredClone ko‘p hollarda yaxshiroq.",
        "code": "const a = { x: 1, ichki: { y: 2 } };\nconst b = JSON.parse(JSON.stringify(a));\nb.ichki.y = 9;\nconsole.log(a.ichki.y); // 2 — asl saqlangan\n\nconst c = structuredClone(a); // zamonaviy usul"
      },
      {
        "title": "5. 3-argument va replacer",
        "text": "JSON.stringify(obj, replacer, space) uchinchi argument bilan chiroyli formatlanadi. Ikkinchi argument sifatida funksiya yoki massiv berib, qaysi kalitlarni kiritishni boshqarish mumkin.",
        "code": "const o = { ism: \"Ali\", yosh: 20 };\nconsole.log(JSON.stringify(o, null, 2));\n// {\n//   \"ism\": \"Ali\",\n//   \"yosh\": 20\n// }\nconsole.log(JSON.stringify(o, [\"ism\"])); // {\"ism\":\"Ali\"}"
      }
    ],
    "takeaway": "JSON matn; stringify obyekt→matn, parse matn→obyekt.\nfunksiya/undefined/Symbol yo‘qoladi; NaN/Infinity → null.\nNoto‘g‘ri matn parse qilinsa SyntaxError.\nJSON.parse(JSON.stringify()) chuqur nusxa, lekin universal emas.\nstructuredClone zamonaviy va xavfsizroq.",
    "exercise": "1) JSON.stringify({a: undefined, b: NaN}) nima beradi?\n2) JSON.parse(\"xato\") nima qiladi?\n3) Nega JSON usuli bilan chuqur nusxa olish har doim ham yaxshi emas?"
  },
  {
    "id": "errors-try-catch",
    "title": "Xatolar: try/catch, throw, finally",
    "question": "Xato qanday yuz beradi? try/catch/finally va throw qanday ishlaydi?",
    "explanation": "Xato — kod bajarilishini to‘xtatadigan hodisa. try ichida xato yuz bersa, bajarilish catch ga o‘tadi. finally esa har qanday holatda bajariladi. Kod o‘qiyotganda “bu yer xato berishi mumkinmi?” deb so‘ra.",
    "sections": [
      {
        "title": "1. Xato turlari",
        "text": "Keng tarqalgan xatolar: ReferenceError (nom yo‘q), TypeError (noto‘g‘ri tur bilan amal), SyntaxError (noto‘g‘ri kod), RangeError (chegaradan oshish). Xato obyektining message va name xususiyati bor.",
        "code": "// nomTopilmadi; // ReferenceError\n// null.ism; // TypeError\n// JSON.parse(\"xato\"); // SyntaxError\n\ntry {\n  null.ism;\n} catch (e) {\n  console.log(e.name); // TypeError\n  console.log(e.message);\n}"
      },
      {
        "title": "2. try/catch",
        "text": "try ichidagi kod xato bersa, qolgan satrlar bajarilmaydi va to‘g‘ridan-to‘g‘ri catch ga o‘tadi. catch ichida xato obyekti olinadi.",
        "code": "try {\n  console.log(\"boshlandi\");\n  JSON.parse(\"noto'g'ri\");\n  console.log(\"bu satr bajarilmaydi\");\n} catch (e) {\n  console.log(\"tutildi:\", e.name);\n}\nconsole.log(\"davom etadi\");"
      },
      {
        "title": "3. finally",
        "text": "finally bloki xato bo‘lsa ham, bo‘lmasa ham bajariladi. Resurslarni tozalash uchun ishlatiladi. catch bo‘lmasa ham finally yozish mumkin.",
        "code": "try {\n  console.log(\"ish\");\n} catch (e) {\n  console.log(\"xato\");\n} finally {\n  console.log(\"har doim bajariladi\");\n}"
      },
      {
        "title": "4. throw — o‘z xatoni yaratish",
        "text": "throw bilan ixtiyoriy qiymatni xato sifatida tashlash mumkin. Ko‘pincha Error obyekti ishlatiladi. Xato tashlansa, u tutulmaguncha yuqoriga tarqaladi.",
        "code": "function bolish(a, b) {\n  if (b === 0) throw new Error(\"Nolga bo'lib bo'lmaydi\");\n  return a / b;\n}\n\ntry {\n  bolish(5, 0);\n} catch (e) {\n  console.log(e.message); // Nolga bo'lib bo'lmaydi\n}"
      },
      {
        "title": "5. Xatoni yutmaslik",
        "text": "Bo‘sh catch bloki xatoni yashiradi: muammo borligini bilmay qolasan. Kamida log qil yoki qayta tashla (throw e).",
        "code": "// Yomon:\ntry { JSON.parse(\"xato\"); } catch (e) {}\n\n// Yaxshi:\ntry { JSON.parse(\"xato\"); }\ncatch (e) { console.error(e); }\n\n// Qayta tashlash:\ntry { JSON.parse(\"xato\"); }\ncatch (e) { throw e; }"
      }
    ],
    "takeaway": "Xato bajarilishni to‘xtatadi; catch uni tutadi.\nReferenceError, TypeError, SyntaxError eng ko‘p uchraydi.\nfinally har qanday holatda bajariladi.\nthrow new Error(...) bilan o‘z xatongni yaratasan.\nBo‘sh catch xatoni yashiradi — yomon odat.",
    "exercise": "1) null.ism qanday xato beradi?\n2) try ichida xato bo‘lsa, keyingi satr bajariladimi?\n3) finally qachon bajariladi?\n4) Nega bo‘sh catch yomon?"
  },
  {
    "id": "modules",
    "title": "Modullar: import/export",
    "question": "ES modullari qanday ishlaydi? import, export, default va named farqi?",
    "explanation": "Modul — alohida fayl. U o‘z o‘zgaruvchilarini yashiradi va faqat eksport qilinganlarini boshqa faylga beradi. Kod o‘qiyotganda import satridan boshla: qayerdan nima olinayotganini bilish butun faylni tushunishga yordam beradi.",
    "sections": [
      {
        "title": "1. Named export",
        "text": "export const yoki export function bilan bir nechta nom eksport qilinadi. Import qilishda nomlar qavs ichida yoziladi va nomlar mos bo‘lishi shart.",
        "code": "// math.js\nexport const PI = 3.14;\nexport function yig(a, b) { return a + b; }\n\n// app.js\nimport { PI, yig } from \"./math.js\";\nconsole.log(yig(1, 2), PI);",
        "note": "Brauzerda modul ulash uchun <script type=\"module\" src=\"app.js\"></script> kerak."
      },
      {
        "title": "2. Default export",
        "text": "Har bir modulda bitta default eksport bo‘ladi. Uni import qilishda ixtiyoriy nom berish mumkin.",
        "code": "// user.js\nexport default function salom(ism) {\n  return \"Salom, \" + ism;\n}\n\n// app.js\nimport salomlashish from \"./user.js\";\nconsole.log(salomlashish(\"Ali\"));"
      },
      {
        "title": "3. Nomlarni o‘zgartirish",
        "text": "as dan keyin import qilingan nomga yangi nom berish mumkin. Eksport qilishda ham as ishlatiladi.",
        "code": "import { yig as qoshuvchi } from \"./math.js\";\nconsole.log(qoshuvchi(2, 3)); // 5\n\n// export { ichkiNom as tashqiNom };"
      },
      {
        "title": "4. Hamma narsani import qilish",
        "text": "import * as nom barcha eksportlarni obyekt sifatida beradi. Bu ko‘p eksport bor bo‘lganda qulay.",
        "code": "import * as math from \"./math.js\";\nconsole.log(math.PI);\nconsole.log(math.yig(1, 2));"
      },
      {
        "title": "5. Modul scope’i",
        "text": "Moduldagi yuqori darajadagi o‘zgaruvchilar global bo‘lmaydi: faqat shu modul ichida ko‘rinadi. Eksport qilinmagan narsa tashqaridan ko‘rinmaydi.",
        "code": "// counter.js\nlet hisob = 0; // faqat modul ichida\nexport function oshir() { return ++hisob; }\n\n// app.js\nimport { oshir } from \"./counter.js\";\nconsole.log(oshir()); // 1\n// console.log(hisob); // ReferenceError: ko'rinmaydi"
      },
      {
        "title": "6. import hoisting va yon ta’sir",
        "text": "Importlar fayl boshida turadi va boshqa kodlardan oldin bajariladi. Faqat eksport uchun emas, modulni yuklash uchun ham import qilish mumkin: import \"./styles.js\".",
        "code": "import \"./init.js\"; // yon ta'sir uchun (masalan, sozlash)\nconsole.log(\"asosiy kod\");\n// init.js avval bajariladi"
      }
    ],
    "takeaway": "Modul o‘z nomlarini yashiradi; faqat eksport qilinganlar ko‘rinadi.\nnamed export: import { nom }; default: import nom.\nas bilan nomni o‘zgartirish mumkin.\nimport * as nom barcha eksportlarni obyekt qiladi.\nImportlar kod boshlanishidan oldin bajariladi.",
    "exercise": "1) Named va default export farqi nima?\n2) import { yig as q } nima qiladi?\n3) Eksport qilinmagan o‘zgaruvchi boshqa faylda ko‘rinadimi?\n4) import * as math nima beradi?"
  },
  {
    "id": "closures",
    "title": "Closure: noldan",
    "question": "Closure nima? Funksiya nega o‘z yaratilgan joyidagi o‘zgaruvchilarni eslaydi?",
    "explanation": "Closure — funksiya va uning atrofidagi o‘zgaruvchilarning birgalikda saqlanishi. Funksiya boshqa joyda chaqirilsa ham, yaratilgan paytdagi scope’ga murojaat qila oladi. Bu ko‘p intervyu savollarining asosi.",
    "sections": [
      {
        "title": "1. Eng oddiy closure",
        "text": "Ichki funksiya tashqi funksiyaning o‘zgaruvchisiga murojaat qilsa, tashqi funksiya tugagach ham u o‘zgaruvchi saqlanib qoladi.",
        "code": "function tashqi() {\n  const x = 10;\n  return function ichki() {\n    console.log(x); // tashqi x ni eslaydi\n  };\n}\nconst f = tashqi();\nf(); // 10",
        "note": "tashqi() tugadi, lekin x yo‘qolmadi: ichki funksiya uni ushlab turibdi."
      },
      {
        "title": "2. Har chaqirishda yangi scope",
        "text": "Tashqi funksiya har chaqirilganda yangi x yaratiladi. Shuning uchun ikki funksiya bir-biridan mustaqil hisoblagich bo‘ladi.",
        "code": "function hisoblagich() {\n  let son = 0;\n  return () => ++son;\n}\nconst a = hisoblagich();\nconst b = hisoblagich();\nconsole.log(a()); // 1\nconsole.log(a()); // 2\nconsole.log(b()); // 1 (mustaqil)"
      },
      {
        "title": "3. Closure va tsikl",
        "text": "for (let i = ...) da har takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3"
      },
      {
        "title": "4. Ma’lumotni yashirish",
        "text": "Closure bilan tashqaridan o‘zgartirib bo‘lmaydigan holat yaratish mumkin. Faqat qaytarilgan metodlar orqali murojaat qilinadi.",
        "code": "function yarat() {\n  let hisob = 0;\n  return {\n    oshir() { return ++hisob; },\n    qiymat() { return hisob; }\n  };\n}\nconst o = yarat();\no.oshir();\nconsole.log(o.qiymat()); // 1\n// o.hisob — yo'q, tashqaridan ko'rinmaydi"
      },
      {
        "title": "5. Keng tarqalgan xato",
        "text": "Tsikl ichida var bilan yaratilgan funksiyalar oxirgi qiymatni ko‘radi. Bu closure tufayli, lekin noto‘g‘ri ko‘rinadi. Yechim: let ishlatish yoki IIFE bilan yangi scope yaratish.",
        "code": "// Eski usul (IIFE):\nfor (var i = 0; i < 3; i++) {\n  (function (n) {\n    setTimeout(() => console.log(n), 0);\n  })(i);\n}\n// 0, 1, 2"
      }
    ],
    "takeaway": "Closure — funksiya + yaratilgan joyidagi o‘zgaruvchilar.\nTashqi funksiya tugasa ham, ichki funksiya uning o‘zgaruvchisini ushlab turadi.\nHar chaqirishda yangi scope → mustaqil holat.\nlet tsiklda har qadam uchun alohida o‘zgaruvchi yaratadi.\nClosure bilan ma’lumotni yashirish mumkin.",
    "exercise": "1) function f(){ let x=1; return ()=>x; } f()() nima beradi?\n2) Ikki hisoblagich mustaqil bo‘lishi nega?\n3) var bilan tsiklda 3,3,3 chiqishi nega?\n4) Closure bilan ma’lumotni qanday yashirasiz?"
  },
  {
    "id": "prototypes",
    "title": "Prototype va prototip zanjiri: noldan",
    "question": "Har bir obyekt qayerdan metod oladi? __proto__, prototype va prototip zanjiri nima?",
    "explanation": "JavaScript’da har bir obyekt boshqa obyektdan xususiyat meros qilib oladi. Bu mexanizm prototip zanjiri deb ataladi. Kod o‘qiyotganda obyektda kalit topilmasa, qidiruv yuqoriga — prototipga davom etadi.",
    "sections": [
      {
        "title": "1. Prototip zanjiri",
        "text": "Obyektda xususiyat topilmasa, JavaScript uning prototipida qidiradi, u yerda yo‘q bo‘lsa yana yuqoriga chiqadi. Zanjir oxirida null turadi. Shuning uchun oddiy obyekt toString metodiga ega bo‘ladi.",
        "code": "const o = {};\nconsole.log(o.toString()); // [object Object]\nconsole.log(o.__proto__ === Object.prototype); // true\nconsole.log(Object.prototype.__proto__); // null",
        "note": "__proto__ eski usul; zamonaviy kodda Object.getPrototypeOf(o) ishlatiladi."
      },
      {
        "title": "2. Funksiya va prototype",
        "text": "Har bir funksiyada prototype xususiyati bor. new bilan obyekt yaratilganda, uning prototipi shu funksiyaning prototype obyektiga bog‘lanadi.",
        "code": "function F() {}\nconst o = new F();\nconsole.log(Object.getPrototypeOf(o) === F.prototype); // true"
      },
      {
        "title": "3. Metodlarni prototype ga qo‘yish",
        "text": "Agar metodni har bir obyekt ichiga yozsak, har biri uchun alohida nusxa yaratiladi. Prototype ga qo‘ysak, barcha obyektlar bitta metodni ulashadi.",
        "code": "function User(ism) {\n  this.ism = ism;\n}\nUser.prototype.salom = function () {\n  return \"Salom, \" + this.ism;\n};\n\nconst a = new User(\"Ali\");\nconst b = new User(\"Vali\");\nconsole.log(a.salom()); // Salom, Ali\nconsole.log(a.salom === b.salom); // true (bitta metod)"
      },
      {
        "title": "4. new operatori qanday ishlaydi",
        "text": "new F() to‘rt ish qiladi: yangi bo‘sh obyekt yaratadi; uning prototipini F.prototype ga bog‘laydi; F ni this bilan chaqiradi; agar F obyekt qaytarmasa, yangi obyektni qaytaradi.",
        "code": "function F(x) {\n  this.x = x;\n}\nconst o = new F(5);\nconsole.log(o.x); // 5\nconsole.log(o instanceof F); // true",
        "note": "instanceof obyekt prototip zanjirida F.prototype borligini tekshiradi."
      },
      {
        "title": "5. Xususiyat yozish va prototip",
        "text": "Obyektga yangi xususiyat yozilsa, u har doim obyektning o‘ziga qo‘yiladi, prototipga emas. Prototipdagi xususiyat soyada qoladi (shadowing).",
        "code": "function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log(o.x); // 1 (prototipdan)\no.x = 2;\nconsole.log(o.x); // 2 (o‘ziga yozildi)\nconsole.log(F.prototype.x); // 1 (prototip o‘zgarmadi)"
      },
      {
        "title": "6. hasOwn va zanjir",
        "text": "in operatori ham o‘z, ham prototip xususiyatlarini topadi. Object.hasOwn faqat obyektning o‘zidagini tekshiradi.",
        "code": "function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log(\"x\" in o); // true\nconsole.log(Object.hasOwn(o, \"x\")); // false\nconsole.log(Object.hasOwn(o, \"toString\")); // false"
      }
    ],
    "takeaway": "Qidiruv obyektdan prototipga, oxirida null gacha davom etadi.\nF.prototype — new bilan yaratilgan obyektlarning prototipi.\nMetodlarga prototype orqali bitta nusxa berish yaxshi.\nnew: obyekt yaratadi, prototip bog‘laydi, this bilan chaqiradi.\nYozish har doim obyektning o‘ziga bo‘ladi.\nin zanjirni, Object.hasOwn faqat o‘zini tekshiradi.",
    "exercise": "1) o.toString() qayerdan keldi?\n2) new F() qanday 4 ish qiladi?\n3) \"x\" in o va Object.hasOwn(o,\"x\") farqi?\n4) Prototype ga metod qo‘yish nega yaxshi?"
  },
  {
    "id": "classes",
    "title": "Class va meros: noldan",
    "question": "class nima? constructor, metodlar, extends va super qanday ishlaydi?",
    "explanation": "class — prototype mexanizmining qulay yozuv shakli. U yangi tur yaratmaydi, balki funksiya va prototip ustiga qurilgan sintaksis shakaridir. Kod o‘qiyotganda constructor va super chaqiruvlarini kuzat.",
    "sections": [
      {
        "title": "1. Oddiy class",
        "text": "class ichida constructor yoziladi: u new bilan obyekt yaratilganda chaqiriladi. this yangi obyektni ko‘rsatadi. Metodlar class ichida yozilsa, avtomatik prototype ga qo‘yiladi.",
        "code": "class User {\n  constructor(ism) {\n    this.ism = ism;\n  }\n  salom() {\n    return \"Salom, \" + this.ism;\n  }\n}\nconst u = new User(\"Ali\");\nconsole.log(u.salom()); // Salom, Ali\nconsole.log(typeof User); // \"function\""
      },
      {
        "title": "2. new bo‘lmasa xato",
        "text": "Class funksiyalardan farqli ravishda new bo‘lmasa chaqirilmaydi: TypeError chiqadi. Bu xatolardan saqlaydi.",
        "code": "class F {}\n// F(); // TypeError: Class constructor cannot be invoked without \"new\"\nconsole.log(new F() instanceof F); // true"
      },
      {
        "title": "3. extends va super",
        "text": "extends bilan boshqa classdan meros olinadi.Constructor ichida super() chaqirilishi shart: u ota class constructorini bajaradi va this ni yaratadi.",
        "code": "class Hayvon {\n  constructor(ism) { this.ism = ism; }\n  ovoz() { return \"...\"; }\n}\nclass It extends Hayvon {\n  constructor(ism) {\n    super(ism); // ota constructor chaqiruvi\n  }\n  ovoz() { return \"Hav-hav\"; }\n}\nconst it = new It(\"Rex\");\nconsole.log(it.ovoz()); // Hav-hav\nconsole.log(it.ism); // Rex"
      },
      {
        "title": "4. Metodni qayta yozish (override)",
        "text": "Bola classdagi metod ota classdagi metodni soyada qoldiradi. Ota metodini chaqirish uchun super.ovoz() ishlatiladi.",
        "code": "class Bola extends Ota {\n  salom() {\n    return super.salom() + \" va bola\";\n  }\n}"
      },
      {
        "title": "5. Static metodlar",
        "text": "static bilan e’lon qilingan metod obyektga emas, classning o‘ziga tegishli. new bilan yaratilgan obyektda ko‘rinmaydi.",
        "code": "class F {\n  static yarat() { return new F(); }\n}\nconst o = F.yarat();\n// o.yarat(); // TypeError: metod yo'q"
      },
      {
        "title": "6. Getter va setter",
        "text": "get/set bilan xususiyatga murojaat qilishda funksiya chaqiriladi. get qiymat qaytaradi, set esa qiymat oladi. Tashqaridan oddiy xususiyat kabi ko‘rinadi.",
        "code": "class User {\n  constructor(ism) { this._ism = ism; }\n  get ism() { return this._ism.toUpperCase(); }\n  set ism(v) { this._ism = v; }\n}\nconst u = new User(\"ali\");\nconsole.log(u.ism); // ALI\nu.ism = \"vali\";\nconsole.log(u.ism); // VALI"
      }
    ],
    "takeaway": "class — prototype ustiga qurilgan sintaksis; typeof class = \"function\".\nconstructor new bilan chaqiriladi; this yangi obyekt.\nextends meros, super() ota constructorini chaqiradi.\nMetod override qilinganda super.metod() bilan ota metodiga murojaat.\nstatic metod classga tegishli, obyektga emas.\nget/set xususiyat kabi ko‘rinib, funksiya chaqiradi.",
    "exercise": "1) class ni new bo‘lmasa chaqirsang nima bo‘ladi?\n2) super() nega shart?\n3) static metod obyektda ko‘rinadimi?\n4) get ism() qanday chaqiriladi?"
  },
  {
    "id": "callbacks",
    "title": "Callback va yuqori darajali funksiyalar: noldan",
    "question": "Callback nima? Funksiyani boshqa funksiyaga argument qilib berish qanday ishlaydi?",
    "explanation": "Callback — keyincha chaqirish uchun boshqa funksiyaga berilgan funksiya. JavaScript’da funksiyalar birinchi darajali qiymat: ularni o‘zgaruvchiga saqlash, argument qilish va qaytarish mumkin. Bu ko‘p metodlarning (map, filter, setTimeout) asosi.",
    "sections": [
      {
        "title": "1. Funksiya — qiymat",
        "text": "Funksiyani o‘zgaruvchiga saqlash mumkin. Uni chaqirish uchun nomi bilan () qo‘yiladi. Funksiya qaytarish ham mumkin.",
        "code": "const salom = function () { return \"Salom\"; };\nconsole.log(salom()); // Salom\n\nfunction tashqi() {\n  return function () { return \"ichki\"; };\n}\nconsole.log(tashqi()()); // ichki"
      },
      {
        "title": "2. Callback sifatida berish",
        "text": "Funksiyani boshqa funksiyaga argument qilib berish mumkin. Qabul qiluvchi funksiya uni kerak paytda chaqiradi.",
        "code": "function ishla(callback) {\n  console.log(\"boshlandi\");\n  callback();\n  console.log(\"tugadi\");\n}\nishla(() => console.log(\"callback ishladi\"));\n// boshlandi, callback ishladi, tugadi"
      },
      {
        "title": "3. setTimeout bilan callback",
        "text": "setTimeout ikkinchi argument sifatida funksiya oladi va uni keyincha chaqiradi. Funksiyani darhol chaqirib yubormaslik kerak: setTimeout(fn, 0) to‘g‘ri, setTimeout(fn(), 0) noto‘g‘ri.",
        "code": "const fn = () => console.log(\"keyin\");\nsetTimeout(fn, 1000); // to'g'ri: funksiya berildi\n// setTimeout(fn(), 1000); // noto'g'ri: natijasi berildi",
        "note": "fn() yozilsa funksiya darhol bajarilib, uning natijasi (undefined) setTimeout ga beriladi."
      },
      {
        "title": "4. Array metodlarida callback",
        "text": "map, filter, reduce, forEach callback oladi. Callback har element uchun chaqiriladi. uning qaytargan qiymati metod natijasiga ta’sir qiladi.",
        "code": "const a = [1, 2, 3];\na.forEach(x => console.log(x)); // yon ta'sir\nconst b = a.map(x => x * 2); // qaytargan qiymat ishlatiladi\nconsole.log(b); // [2,4,6]"
      },
      {
        "title": "5. Callback tartibi va this",
        "text": "Oddiy funksiya callback sifatida berilsa, ichidagi this yo‘qolishi mumkin. Arrow funksiya yaratilgan joydagi this ni saqlaydi, shuning uchun ko‘pincha qulay.",
        "code": "const o = {\n  x: 10,\n  ishla() {\n    [1].forEach(function () { console.log(this); }); // undefined (strict)\n    [1].forEach(() => console.log(this.x)); // 10\n  }\n};\no.ishla();"
      },
      {
        "title": "6. Callback hell",
        "text": "Bir nechta callback ichma-ich yozilsa, kod o‘qish qiyinlashadi (callback hell). Buning o‘rniga Promise va async/await ishlatiladi.",
        "code": "// qiyin o'qiladi:\nsetTimeout(() => {\n  setTimeout(() => {\n    setTimeout(() => console.log(\"tugadi\"), 100);\n  }, 100);\n}, 100);\n\n// zamonaviy:\nasync function ketma() {\n  await new Promise(r => setTimeout(r, 100));\n  console.log(\"tugadi\");\n}"
      }
    ],
    "takeaway": "Funksiya — oddiy qiymat: saqlash, berish, qaytarish mumkin.\nCallback keyincha chaqirish uchun beriladi.\nsetTimeout(fn, 0) to‘g‘ri; setTimeout(fn(), 0) noto‘g‘ri.\nmap/filter/forEach callback qaytargan qiymatni turli ishlatadi.\nArrow callback this ni saqlaydi.\nIchma-ich callback o‘rniga Promise/async yaxshi.",
    "exercise": "1) setTimeout(fn, 0) va setTimeout(fn(), 0) farqi?\n2) map va forEach callback natijasini qanday ishlatadi?\n3) Nega arrow callback this ni saqlaydi?\n4) Callback hell nima va unga yechim?"
  },
  {
    "id": "iterators-generators",
    "title": "Iterator va generator: noldan",
    "question": "for...of qanday ishlaydi? Symbol.iterator, next() va function* nima?",
    "explanation": "for...of faqat iteratsiya qilinadigan obyektlarda ishlaydi. Bunday obyektning Symbol.iterator metodi bor: u iterator qaytaradi, iterator esa next() bilan ketma-ket qiymatlar beradi. Generator shu mexanizmni oson yozish usulidir.",
    "sections": [
      {
        "title": "1. Iterator qanday ishlaydi",
        "text": "Iterator next() metodi bilan { value, done } qaytaradi. done true bo‘lganda tugagan hisoblanadi. for...of aynan shu metodlarni chaqiradi.",
        "code": "const a = [10, 20];\nconst it = a[Symbol.iterator]();\nconsole.log(it.next()); // { value: 10, done: false }\nconsole.log(it.next()); // { value: 20, done: false }\nconsole.log(it.next()); // { value: undefined, done: true }"
      },
      {
        "title": "2. Qaysi obyektlar iteratsiya qilinadi?",
        "text": "Massiv, string, Map, Set iteratsiya qilinadi. Oddiy obyekt esa yo‘q: for...in bilan kalitlarni olish mumkin, lekin for...of ishlamaydi.",
        "code": "// for (const x of { a: 1 }) {} // TypeError\nfor (const x of \"Ali\") console.log(x); // A, l, i\nfor (const x of new Set([1, 2])) console.log(x); // 1, 2"
      },
      {
        "title": "3. Generator",
        "text": "function* va yield bilan o‘zi iterator yaratish mumkin. Generator chaqirilganda darhol bajarilmaydi: next() chaqirilganda yield gacha bajarilib to‘xtaydi.",
        "code": "function* sonlar() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = sonlar();\nconsole.log(g.next()); // { value: 1, done: false }\nconsole.log([...g]); // [2, 3] — qolganlari"
      },
      {
        "title": "4. Cheksiz ketma-ketlik",
        "text": "Generator bilan cheksiz ketma-ketlik yaratish mumkin: faqat kerakli qiymatlar olinadi. Lekin [...g] cheksiz bo‘lsa, hech tugamaydi — ehtiyot bo‘lish kerak.",
        "code": "function* cheksiz() {\n  let i = 1;\n  while (true) yield i++;\n}\nconst g = cheksiz();\nconsole.log(g.next().value); // 1\nconsole.log(g.next().value); // 2\n// console.log([...g]); // cheksiz — hech qachon tugamaydi"
      },
      {
        "title": "5. yield bilan ma’lumot olish",
        "text": "next(argument) berilgan qiymat oxirgi yield natijasiga aylanadi. Bu generatorga tashqaridan ma’lumot yuborish imkonini beradi.",
        "code": "function* suhbat() {\n  const ism = yield \"Ismingiz?\";\n  return \"Salom, \" + ism;\n}\nconst g = suhbat();\nconsole.log(g.next().value); // Ismingiz?\nconsole.log(g.next(\"Ali\").value); // Salom, Ali"
      }
    ],
    "takeaway": "for...of Symbol.iterator va next() asosida ishlaydi.\nnext() { value, done } qaytaradi.\nMassiv/string/Map/Set iteratsiya qilinadi, oddiy obyekt yo‘q.\nfunction* + yield generator yaratadi; u next() bilan qadam-baqadam ishlaydi.\nCheksiz generator bilan ehtiyot bo‘l.",
    "exercise": "1) [1][Symbol.iterator]().next() nima qaytaradi?\n2) Nega for...of oddiy obyektda ishlamaydi?\n3) Generator chaqirilganda darhol bajariladimi?\n4) yield nima qiladi?"
  },
  {
    "id": "map-set",
    "title": "Map va Set: noldan",
    "question": "Map va Set nima? Oddiy obyekt va massivdan farqi nima?",
    "explanation": "Map — ixtiyoriy turdagi kalitlarga ega kalit-qiymat to‘plami. Set — noyob qiymatlar to‘plami. Ularning oddiy obyekt va massivdan farqi: kalit turi, tartib va qidirish tezligi.",
    "sections": [
      {
        "title": "1. Map asoslari",
        "text": "new Map() bilan yaratiladi. set(kalit, qiymat) qo‘shadi, get(kalit) oladi, has(kalit) tekshiradi, delete o‘chiradi. Kalit ixtiyoriy tur bo‘lishi mumkin: obyekt ham.",
        "code": "const m = new Map();\nm.set(\"ism\", \"Ali\");\nm.set(1, \"son\");\nconsole.log(m.get(\"ism\")); // Ali\nconsole.log(m.has(1)); // true\nconsole.log(m.size); // 2"
      },
      {
        "title": "2. Map vs obyekt",
        "text": "Obyekt kalitlari faqat string/symbol bo‘ladi. Map da ixtiyoriy kalit bo‘ladi. Map tartibni saqlaydi va size xususiyatiga ega. Obyekt esa kalitlarni prototip zanjiri bilan aralashtirishi mumkin.",
        "code": "const k = { id: 1 };\nconst m = new Map();\nm.set(k, \"foydalanuvchi\");\nconsole.log(m.get(k)); // ishlaydi — obyekt kalit\n\nconst o = {};\no[k] = \"foydalanuvchi\";\nconsole.log(o[\"[object Object]\"]); // obyekt stringga aylandi"
      },
      {
        "title": "3. Set asoslari",
        "text": "Set faqat noyob qiymatlar saqlaydi. Bir xil qiymat ikkinchi marta qo‘shilsa, e’tiborga olinmaydi. Takrorlarni olib tashlash uchun juda qulay.",
        "code": "const s = new Set([1, 2, 2, 3]);\nconsole.log(s); // Set { 1, 2, 3 }\nconsole.log(s.size); // 3\ns.add(4);\nconsole.log(s.has(3)); // true"
      },
      {
        "title": "4. Takrorlarni olib tashlash",
        "text": "Massivdagi takrorlarni [...new Set(arr)] bilan olib tashlash mumkin. E’tibor: obyektlar reference bo‘yicha solishtiriladi, shuning uchun tarkibi bir xil ikki obyekt ikki xil hisoblanadi.",
        "code": "console.log([...new Set([1, 2, 2, 3])]); // [1,2,3]\nconsole.log(new Set([{ a: 1 }, { a: 1 }]).size); // 2"
      },
      {
        "title": "5. Iteratsiya",
        "text": "Map va Set for...of bilan ishlaydi. Map har bir qadamda [kalit, qiymat] juftligini beradi. Shuningdek, forEach metodi ham bor.",
        "code": "const m = new Map([[\"a\", 1], [\"b\", 2]]);\nfor (const [k, v] of m) console.log(k, v);\n\nconst s = new Set([1, 2]);\nfor (const v of s) console.log(v);"
      },
      {
        "title": "6. Qachon nima tanlash?",
        "text": "Kalit-qiymat va ixtiyoriy kalit kerak bo‘lsa Map. Faqat noyob qiymatlar kerak bo‘lsa Set. Oddiy ma’lumot va kalitlar string bo‘lsa, obyekt yetarli.",
        "code": "// oddiy sozlamalar — obyekt yetarli\nconst sozlamalar = { til: \"uz\", mavzu: \"qorong'u\" };\n// tez-tez qo'shish/o'chirish va obyekt kalit — Map\nconst keshlash = new Map();"
      }
    ],
    "takeaway": "Map — ixtiyoriy kalitli kalit-qiymat to‘plami, size bor.\nSet — noyob qiymatlar to‘plami.\n[...new Set(arr)] takrorlarni olib tashlaydi.\nMap/Set for...of bilan iteratsiya qilinadi.\nObyektlar Set da reference bo‘yicha solishtiriladi.",
    "exercise": "1) Map va obyekt farqi nima?\n2) new Set([1,2,2]).size nima?\n3) new Set([{a:1},{a:1}]).size nima va nega?\n4) Takrorlarni qanday olib tashlaysiz?"
  },
  {
    "id": "regex-basics",
    "title": "Regex: noldan",
    "question": "Regex nima? test, match, replace va asosiy naqsh belgilari.",
    "explanation": "Regex (regular expression) — matn ichida naqsh qidirish uchun maxsus til. Kod o‘qiyotganda /.../ ichidagi belgilarni kichik qismlarga ajratib o‘qish kerak. Bu murakkab ko‘rinadi, lekin asosiy belgilarni bilsang tushunish oson.",
    "sections": [
      {
        "title": "1. Yaratish va test",
        "text": "Regex /naqsh/ bilan yoki new RegExp(\"naqsh\") bilan yaratiladi. .test(string) mos kelishini true/false qaytaradi.",
        "code": "const r = /Ali/;\nconsole.log(r.test(\"Salom Ali\")); // true\nconsole.log(r.test(\"Salom Vali\")); // false"
      },
      {
        "title": "2. Asosiy belgilar",
        "text": ". — ixtiyoriy bitta belgi; \\d — raqam; \\w — harf/raqam/_; \\s — bo‘shliq; ^ — satr boshi; $ — satr oxiri; + — bir yoki undan ko‘p; * — nol yoki undan ko‘p; ? — nol yoki bitta.",
        "code": "console.log(/\\d/.test(\"abc1\")); // true (raqam bor)\nconsole.log(/^Ali/.test(\"Ali vali\")); // true (boshida)\nconsole.log(/ali$/i.test(\"Salom Ali\")); // true (oxiri, i — kichik katta harf farqini yo'q qiladi)\nconsole.log(/a+/.test(\"aaa\")); // true"
      },
      {
        "title": "3. Kvadrat qavs va oraliq",
        "text": "[abc] — a, b yoki c; [0-9] — raqam; [a-z] — kichik harf; [^0-9] — raqam bo‘lmagan. {3} — aynan 3 marta, {2,5} — 2 dan 5 gacha.",
        "code": "console.log(/[0-9]{3}/.test(\"a123b\")); // true\nconsole.log(/^[a-z]+$/.test(\"salom\")); // true (faqat kichik harflar)\nconsole.log(/[^0-9]/.test(\"123\")); // false"
      },
      {
        "title": "4. match va replace",
        "text": "string.match(regex) mosliklarni qaytaradi (g flag bo‘lsa hammasini). string.replace(regex, yangi) moslarni almashtiradi.",
        "code": "console.log(\"a1 b2 c3\".match(/\\d/g)); // [\"1\",\"2\",\"3\"]\nconsole.log(\"ali vali\".replace(/ali/gi, \"Ali\")); // \"Ali Vali\"\nconsole.log(\"a,b,c\".replace(/,/g, \";\")); // \"a;b;c\""
      },
      {
        "title": "5. Guruhlar",
        "text": "Qavs (...) guruh yaratadi. Ular match natijasida alohida ko‘rinadi va replace da $1, $2 bilan ishlatiladi.",
        "code": "const m = \"2026-11-21\".match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(m[1], m[2], m[3]); // 2026 11 21\nconsole.log(\"Ali Vali\".replace(/(\\w+) (\\w+)/, \"$2 $1\")); // \"Vali Ali\""
      },
      {
        "title": "6. Ehtiyot bo‘lish",
        "text": "Regex kuchli, lekin o‘qish qiyin. Oddiy tekshirish uchun includes, startsWith kabi metodlar yetarli. Foydalanuvchi kiritgan matndan regex yaratishda ehtiyot bo‘lish kerak.",
        "code": "// oddiy holatda regex kerak emas:\nconsole.log(\"salom\".includes(\"sal\")); // true\nconsole.log(\"fayl.txt\".endsWith(\".txt\")); // true"
      }
    ],
    "takeaway": "/naqsh/ va .test() moslikni tekshiradi.\n\\d raqam, \\w harf/raqam, ^ bosh, $ oxir, + bir yoki ko‘p.\n[0-9] raqam, {3} aynan 3 marta, i flag katta-kichikni farqlamaydi.\nmatch mosliklarni, replace almashtiradi; g — barcha mosliklar.\nQavs guruh yaratadi: $1, $2 bilan ishlatiladi.",
    "exercise": "1) /\\d/.test(\"abc\") nima?\n2) ^ va $ nima anglatadi?\n3) \"a1b2\".match(/\\d/g) natijasi?\n4) g flag nima qiladi?"
  },
  {
    "id": "dates",
    "title": "Date va vaqt bilan ishlash: noldan",
    "question": "Date obyekti qanday yaratiladi? Timestamp, ISO va formatlash qanday ishlaydi?",
    "explanation": "Date — sana va vaqtni saqlaydigan obyekt. Ichida 1970-yil 1-yanvardan (Unix epoch) o‘tgan millisekundlar saqlanadi. Vaqt bilan ishlashda eng ko‘p xato — vaqt zonalari bilan bog‘liq. Kod o‘qiyotganda “bu mahalliy vaqtmi yoki UTCmi?” deb so‘ra.",
    "sections": [
      {
        "title": "1. Date yaratish",
        "text": "new Date() hozirgi vaqtni beradi. new Date(\"2026-11-21\") satrdan, new Date(2026, 10, 21) esa yil/oy/kun beradi. Oylar 0 dan boshlanadi: 0 — yanvar, 10 — noyabr.",
        "code": "const hozir = new Date();\nconsole.log(hozir);\nconst sana = new Date(\"2026-11-21\");\nconst sana2 = new Date(2026, 10, 21); // noyabr\nconsole.log(sana.getFullYear()); // 2026\nconsole.log(sana.getMonth()); // 10 (noyabr, 0 dan boshlanadi)"
      },
      {
        "title": "2. Timestamp",
        "text": "Date.getTime() millisekundlarni qaytaradi. Date.now() ham hozirgi vaqtni millisekund sifatida beradi. Bu sonlar bilan vaqt farqini hisoblash qulay.",
        "code": "console.log(Date.now()); // masalan 1763700000000\nconst a = new Date(\"2026-01-01\");\nconst b = new Date(\"2026-01-03\");\nconsole.log((b - a) / (1000 * 60 * 60)); // 48 (soatlar)",
        "note": "Ikki Date ni ayirsang, millisekundlar farqi chiqadi: 2 kun = 172800000 ms."
      },
      {
        "title": "3. Mahalliy vaqt va UTC",
        "text": "getFullYear/getMonth/getDate mahalliy vaqt bo‘yicha, getUTCFullYear/getUTCMonth/getUTCDate esa UTC bo‘yicha qiymatlar beradi. \"2026-11-21\" satri UTC sifatida talqin qilinadi, shuning uchun mahalliy vaqtda boshqa kun bo‘lishi mumkin.",
        "code": "const d = new Date(\"2026-11-21\");\nconsole.log(d.getUTCDate()); // 21\nconsole.log(d.getDate()); // sening zonangga qarab 20 yoki 21 bo'lishi mumkin"
      },
      {
        "title": "4. Formatlash",
        "text": "toISOString() standart ISO satr qaytaradi. toLocaleDateString() esa foydalanuvchi tiliga mos format beradi.",
        "code": "const d = new Date(\"2026-11-21T10:30:00Z\");\nconsole.log(d.toISOString()); // 2026-11-21T10:30:00.000Z\nconsole.log(d.toLocaleDateString(\"uz-UZ\")); // 21.11.2026 kabi"
      },
      {
        "title": "5. O‘zgartirish",
        "text": "setFullYear, setMonth, setDate kabi metodlar obyektni o‘zgartiradi (mutating). Kun qo‘shish uchun avval nusxa olib, keyin o‘zgartirish yaxshi.",
        "code": "const d = new Date(\"2026-11-21\");\nd.setDate(d.getDate() + 7);\nconsole.log(d.toISOString().slice(0, 10)); // 2026-11-28\n\nconst nusxa = new Date(d); // nusxa olish"
      },
      {
        "title": "6. Amaliy: kunlar farqi",
        "text": "Ikki sana orasidagi kunlar sonini topish uchun millisekund farini bir kunlik millisekundga bo‘ling.",
        "code": "const kun = 24 * 60 * 60 * 1000;\nconst bosh = new Date(\"2026-01-01\");\nconst oxir = new Date(\"2026-01-10\");\nconsole.log((oxir - bosh) / kun); // 9"
      }
    ],
    "takeaway": "Date ichida millisekund saqlaydi (1970-yildan).\nOylar 0 dan boshlanadi: 10 — noyabr.\ngetTime()/Date.now() timestamp beradi; farini hisoblash qulay.\nMahalliy vaqt va UTC farqini bilish kerak.\ntoISOString() standart format beradi.\nset* metodlar obyektni o‘zgartiradi — nusxa olib ishlash yaxshi.",
    "exercise": "1) new Date(2026, 0, 1) qaysi oy?\n2) Ikki Date ni ayirsak nima chiqadi?\n3) getDate va getUTCDate farqi nima?\n4) 2 kun necha millisekund?"
  },
  {
    "id": "fetch-api",
    "title": "Fetch API: noldan",
    "question": "fetch qanday ishlaydi? Response, json(), async/await va xatoliklar.",
    "explanation": "fetch — tarmoq orqali ma’lumot olish uchun zamonaviy API. U har doim Promise qaytaradi. Muhim: fetch faqat tarmoq xatosida rad etiladi, 404/500 statusda emas — ularni response.ok bilan tekshirish kerak.",
    "sections": [
      {
        "title": "1. Oddiy fetch",
        "text": "fetch(url) Promise qaytaradi. Birinchi .then Response obyektini beradi. response.json() ham Promise qaytaradi, shuning uchun ikkinchi .then kerak.",
        "code": "fetch(\"https://api.example.com/user\")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(e => console.error(\"Xato:\", e));"
      },
      {
        "title": "2. async/await bilan",
        "text": "async funksiya ichida await bilan kutish o‘qish osonroq. try/catch xatolarni tutadi.",
        "code": "async function olish() {\n  try {\n    const response = await fetch(\"/api/user\");\n    const data = await response.json();\n    console.log(data);\n  } catch (e) {\n    console.error(\"Xato:\", e);\n  }\n}\nolish();"
      },
      {
        "title": "3. Status tekshirish",
        "text": "fetch 404 yoki 500 qaytarsa ham rad etilmaydi. response.ok — status 200-299 bo‘lsa true. Shuning uchun har doim tekshirish kerak.",
        "code": "const response = await fetch(\"/api/user\");\nconsole.log(response.status); // 404 bo'lishi mumkin\nconsole.log(response.ok); // false\nif (!response.ok) {\n  throw new Error(\"HTTP xato: \" + response.status);\n}"
      },
      {
        "title": "4. POST va sozlamalar",
        "text": "Ikkinchi argument bilan method, headers va body berish mumkin. JSON yuborish uchun Content-Type header va JSON.stringify kerak.",
        "code": "const response = await fetch(\"/api/user\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ ism: \"Ali\" })\n});\nconst natija = await response.json();"
      },
      {
        "title": "5. response.json() bir marta ishlaydi",
        "text": "Response tanasi faqat bir marta o‘qiladi. Ikkinchi marta response.json() chaqirsang xato beradi. Shuning uchun natijani o‘zgaruvchiga saqlash kerak.",
        "code": "const response = await fetch(\"/api/user\");\nconst data = await response.json();\nconsole.log(data);\n// await response.json(); // xato: tanasi allaqachon o'qilgan"
      },
      {
        "title": "6. CORS tushunchasi",
        "text": "Brauzer boshqa domenga fetch qilganda CORS qoidasi ishlaydi. Server mos Access-Control-Allow-Origin header bermasa, javob o‘qilmaydi. Bu fetch xatosi emas, brauzer xavfsizligi.",
        "code": "// Boshqa domenga so'rov:\n// fetch(\"https://boshqa-sayt.com/api\") — CORS xatosi bo'lishi mumkin\n// Yechim: server ruxsat berishi kerak"
      }
    ],
    "takeaway": "fetch har doim Promise qaytaradi.\nresponse.json() ham Promise — ikki bosqichli o‘qish.\n404/500 fetch ni rad etmaydi: response.ok ni tekshir.\nPOST uchun method/headers/body beriladi.\nResponse tanasi faqat bir marta o‘qiladi.\nCORS — brauzer xavfsizligi, server ruxsati kerak.",
    "exercise": "1) fetch 404 qaytarsa rad etiladimi?\n2) Nega ikki .then kerak?\n3) response.json() ni ikki marta chaqirsang nima?\n4) CORS nima?"
  },
  {
    "id": "events-advanced",
    "title": "Eventlar: chuqurroq",
    "question": "addEventListener, event obyekti, bubbling, capturing va delegatsiya nima?",
    "explanation": "Event — foydalanuvchi yoki brauzer harakati (click, input, submit). Hodisa elementdan yuqoriga tarqaladi (bubbling). Event delegatsiya shu xususiyatdan foydalanib, bitta listener bilan ko‘p elementlarni boshqaradi.",
    "sections": [
      {
        "title": "1. addEventListener",
        "text": "element.addEventListener(\"click\", fn) hodisa yuz berganda fn ni chaqiradi. Bir elementga bir nechta listener qo‘shish mumkin. removeEventListener bilan olib tashlash uchun aynan shu funksiya kerak.",
        "code": "const btn = document.querySelector(\"button\");\nconst fn = () => console.log(\"bosildi\");\nbtn.addEventListener(\"click\", fn);\n// btn.removeEventListener(\"click\", fn); // aynan fn kerak"
      },
      {
        "title": "2. Event obyekti",
        "text": "Callback event obyektini oladi: target (hodisa kelgan element), currentTarget (listener bog‘langan element), type, key (klaviatura), preventDefault() va stopPropagation().",
        "code": "btn.addEventListener(\"click\", (e) => {\n  console.log(e.target); // bosilgan element\n  console.log(e.currentTarget); // listener bog'langan element\n  console.log(e.type); // \"click\"\n});"
      },
      {
        "title": "3. preventDefault",
        "text": "Ba’zi elementlarning standart harakati bor: form yuborish, havola ochish. preventDefault() uni to‘xtatadi.",
        "code": "document.querySelector(\"form\").addEventListener(\"submit\", (e) => {\n  e.preventDefault(); // sahifa yangilanmaydi\n  console.log(\"forma yuborildi\");\n});"
      },
      {
        "title": "4. Bubbling va capturing",
        "text": "Hodisa avval yuqoridan pastga (capturing), keyin pastdan yuqoriga (bubbling) tarqaladi. addEventListener ning uchinchi argumenti true bo‘lsa, capturing bosqichida ishlaydi.",
        "code": "document.addEventListener(\"click\", () => console.log(\"document\"));\ndocument.querySelector(\"button\").addEventListener(\"click\", () => console.log(\"button\"));\n// bosilsa: button, keyin document (bubbling)"
      },
      {
        "title": "5. stopPropagation",
        "text": "stopPropagation() hodisaning keyingi elementlarga tarqalishini to‘xtatadi. Ehtiyot bilan ishlatish kerak: yuqori listenerlarni o‘chirib qo‘yadi.",
        "code": "btn.addEventListener(\"click\", (e) => {\n  e.stopPropagation(); // document listener ishlamaydi\n});"
      },
      {
        "title": "6. Event delegatsiya",
        "text": "Ko‘p elementlarga alohida listener qo‘yish o‘rniga, ularning umumiy ota elementiga bitta listener qo‘yish mumkin. e.target orqali qaysi element bosilganini aniqlash mumkin. Yangi elementlar qo‘shilsa ham ishlaydi.",
        "code": "document.querySelector(\"#list\").addEventListener(\"click\", (e) => {\n  const li = e.target.closest(\"li\");\n  if (li) console.log(li.dataset.id);\n});"
      }
    ],
    "takeaway": "addEventListener bilan hodisa bog‘lanadi; olib tashlash uchun aynan funksiya kerak.\ne.target — kelgan element, currentTarget — listener bog‘langan element.\npreventDefault standart harakatni to‘xtatadi.\nBubbling: pastdan yuqoriga; capturing: yuqoridan pastga.\nstopPropagation tarqalishni to‘xtatadi.\nDelegatsiya bitta listener bilan ko‘p elementni boshqaradi.",
    "exercise": "1) target va currentTarget farqi nima?\n2) preventDefault nima qiladi?\n3) Bubbling qaysi yo‘nalishda?\n4) Event delegatsiya nega foydali?"
  },
  {
    "id": "storage",
    "title": "localStorage va sessionStorage: noldan",
    "question": "Brauzerda ma’lumot qanday saqlanadi? localStorage, sessionStorage va cookie farqi?",
    "explanation": "localStorage va sessionStorage brauzerda kalit-qiymat ko‘rinishida ma’lumot saqlaydi. Faqat string saqlanadi, shuning uchun obyekt uchun JSON kerak. localStorage doimiy, sessionStorage faqat tab ochikligida.",
    "sections": [
      {
        "title": "1. Asosiy metodlar",
        "text": "setItem(kalit, qiymat), getItem(kalit), removeItem(kalit), clear(). Hammasi faqat string bilan ishlaydi.",
        "code": "localStorage.setItem(\"ism\", \"Ali\");\nconsole.log(localStorage.getItem(\"ism\")); // \"Ali\"\nlocalStorage.removeItem(\"ism\");\n// localStorage.clear(); // hammasini o'chiradi"
      },
      {
        "title": "2. Obyekt saqlash",
        "text": "Obyektni to‘g‘ridan-to‘g‘ri saqlasang, \"[object Object]\" bo‘lib qoladi. JSON.stringify bilan saqlab, JSON.parse bilan o‘qish kerak.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));\nconst saqlangan = JSON.parse(localStorage.getItem(\"user\"));\nconsole.log(saqlangan.ism); // Ali",
        "note": "getItem topmasa null qaytaradi. JSON.parse(null) → null, xato emas."
      },
      {
        "title": "3. localStorage vs sessionStorage",
        "text": "localStorage brauzer qayta ochilsa ham saqlanadi. sessionStorage faqat shu tab (session) uchun: tab yopilsa o‘chadi.",
        "code": "localStorage.setItem(\"a\", \"1\"); // doimiy\nsessionStorage.setItem(\"b\", \"2\"); // tab yopilsa yo'qoladi"
      },
      {
        "title": "4. Xatolar va cheklovlar",
        "text": "Storage hajmi cheklangan (odatda ~5 MB). To‘lsa yoki brauzer bloklasa, setItem xato beradi. Shuning uchun try/catch bilan yozish yaxshi.",
        "code": "try {\n  localStorage.setItem(\"kalit\", \"qiymat\");\n} catch (e) {\n  console.log(\"Saqlab bo'lmadi:\", e.message);\n}"
      },
      {
        "title": "5. storage hodisasi",
        "text": "Boshqa tabda localStorage o‘zgartirilsa, shu sahifada storage hodisasi yuz beradi. Bu bir nechta tab o‘rtasida sinxronlash uchun ishlatiladi.",
        "code": "window.addEventListener(\"storage\", (e) => {\n  console.log(e.key, e.newValue);\n});"
      },
      {
        "title": "6. Cookie bilan farqi",
        "text": "Cookie har so‘rovda serverga yuboriladi, hajmi kichik (~4 KB) va muddati bor. localStorage esa faqat brauzerda, serverga yuborilmaydi. Maxfiy ma’lumotni localStorage da saqlash xavfsiz emas.",
        "code": "// maxfiy ma'lumotni localStorage ga qo'ymang:\n// localStorage.setItem(\"token\", \"...\"); // XSS xavfi"
      }
    ],
    "takeaway": "Storage faqat string saqlaydi; obyekt uchun JSON.stringify/parse.\nlocalStorage doimiy, sessionStorage tab bilan tugaydi.\ngetItem topmasa null qaytaradi.\nHajm cheklangan, xato berishi mumkin — try/catch.\nCookie serverga yuboriladi, localStorage yo‘q.\nMaxfiy ma’lumotni localStorage da saqlash xavfli.",
    "exercise": "1) localStorage va sessionStorage farqi?\n2) Obyektni qanday saqlaysiz?\n3) getItem topmasa nima qaytaradi?\n4) Nega maxfiy tokenni localStorage ga qo‘ymaslik kerak?"
  },
  {
    "id": "web-apis",
    "title": "Foydali Web API lar: noldan",
    "question": "setTimeout, setInterval, requestAnimationFrame, URL, Intl va boshqa API lar nima qiladi?",
    "explanation": "Brauzer JavaScript’ga ko‘p tayyor API beradi. Ular tilning bir qismi emas, balki muhit (browser) tomonidan taqdim etiladi. Kod o‘qiyotganda qaysi API ishlatilganini aniqlash, uning qaytargan qiymatini kuzatish muhim.",
    "sections": [
      {
        "title": "1. setTimeout va setInterval",
        "text": "setTimeout fn ni bir marta, setInterval esa har doim takrorlaydi. Ikkalasi ham timer ID qaytaradi; clearTimeout/clearInterval bilan bekor qilinadi.",
        "code": "const id = setTimeout(() => console.log(\"bir marta\"), 1000);\nclearTimeout(id); // bekor qilindi\n\nconst interval = setInterval(() => console.log(\"har 1 soniyada\"), 1000);\n// clearInterval(interval); // to'xtatish"
      },
      {
        "title": "2. requestAnimationFrame",
        "text": "Animatsiya uchun setTimeout o‘rniga requestAnimationFrame ishlatiladi: u ekran yangilanishiga moslashadi va fon tabda to‘xtaydi.",
        "code": "function anim() {\n  console.log(\"frame\");\n  requestAnimationFrame(anim);\n}\nrequestAnimationFrame(anim);"
      },
      {
        "title": "3. URL va URLSearchParams",
        "text": "URL obyekti bilan manzilni pars qilish mumkin. URLSearchParams query parametrlari bilan ishlaydi.",
        "code": "const u = new URL(\"https://example.com/sahifa?x=1&y=2\");\nconsole.log(u.pathname); // /sahifa\nconsole.log(u.searchParams.get(\"x\")); // \"1\"\nu.searchParams.set(\"x\", \"5\");\nconsole.log(u.toString()); // ...?x=5&y=2"
      },
      {
        "title": "4. Intl — formatlash",
        "text": "Intl.NumberFormat va Intl.DateTimeFormat tilga mos format beradi. Pul va sana ko‘rsatishda ishlatiladi.",
        "code": "console.log(new Intl.NumberFormat(\"uz-UZ\").format(1234567));\nconsole.log(new Intl.NumberFormat(\"en-US\", {\n  style: \"currency\", currency: \"USD\"\n}).format(10)); // $10.00"
      },
      {
        "title": "5. structuredClone",
        "text": "Chuqur nusxa olish uchun zamonaviy usul. JSON usulidan farqli: Date, Map, Set saqlanadi, tsiklik bog‘lanish ishlaydi. Lekin funksiya va DOM element klonlanmaydi.",
        "code": "const a = { d: new Date(), m: new Map([[\"x\", 1]]) };\nconst b = structuredClone(a);\nconsole.log(b.d instanceof Date); // true\nconsole.log(b.m.get(\"x\")); // 1"
      },
      {
        "title": "6. AbortController",
        "text": "fetch yoki listenerni bekor qilish uchun ishlatiladi. signal berilib, keyin abort() chaqirilsa, so‘rov to‘xtatiladi.",
        "code": "const controller = new AbortController();\nfetch(\"/api\", { signal: controller.signal });\ncontroller.abort(); // so'rov bekor qilindi"
      }
    ],
    "takeaway": "setTimeout bir marta, setInterval takrorlaydi; ID bilan bekor qilinadi.\nrequestAnimationFrame animatsiya uchun ekranga moslashadi.\nURL/URLSearchParams manzil va parametrlar bilan ishlaydi.\nIntl tilga mos format beradi.\nstructuredClone chuqur nusxa, JSON dan kuchliroq.\nAbortController so‘rovni bekor qiladi.",
    "exercise": "1) setTimeout va setInterval farqi?\n2) Animatsiya uchun nega requestAnimationFrame yaxshi?\n3) structuredClone JSON usulidan nima bilan yaxshi?\n4) AbortController nima qiladi?"
  },
  {
    "id": "proxy-reflect",
    "title": "Proxy va Reflect: noldan",
    "question": "Proxy obyekt harakatlarini qanday ushlaydi? get, set va Reflect nima?",
    "explanation": "Proxy obyekt oldiga “vositachi” qo‘yadi: uning o‘qish, yozish va boshqa harakatlarini ushlab, o‘zgartirish mumkin. Reflect esa obyekt ustida standart amallarni bajarish uchun yordamchi metodlar beradi. Bu ilg‘or mavzu, lekin intervyuda so‘ralishi mumkin.",
    "sections": [
      {
        "title": "1. Oddiy Proxy",
        "text": "new Proxy(target, handler) bilan yaratiladi. handler.get(target, prop) xususiyat o‘qilganda chaqiriladi.",
        "code": "const target = { ism: \"Ali\" };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    console.log(\"o'qildi:\", prop);\n    return t[prop];\n  }\n});\nconsole.log(proxy.ism); // log + Ali"
      },
      {
        "title": "2. set ushlagichi",
        "text": "set(target, prop, value) xususiyatga yozilganda chaqiriladi. Qiymatni tekshirib, rad etish yoki o‘zgartirish mumkin.",
        "code": "const proxy = new Proxy({}, {\n  set(t, prop, value) {\n    if (prop === \"yosh\" && value < 0) {\n      throw new Error(\"Yosh manfiy bo'lmaydi\");\n    }\n    t[prop] = value;\n    return true; // muvaffaqiyat belgisi\n  }\n});\nproxy.yosh = 20; // OK\n// proxy.yosh = -1; // xato"
      },
      {
        "title": "3. Reflect nima?",
        "text": "Reflect obyekt ustidagi standart amallarni (get, set, has, deleteProperty) funksiya sifatida beradi. Proxy ichida Reflect ishlatish eng to‘g‘ri usul: standart xatti-harakatni saqlaydi.",
        "code": "const proxy = new Proxy({}, {\n  get(t, prop, receiver) {\n    return Reflect.get(t, prop, receiver);\n  }\n});\nconsole.log(Reflect.has({ a: 1 }, \"a\")); // true"
      },
      {
        "title": "4. Nega Reflect kerak?",
        "text": "Reflect metodlari muvaffaqiyatni true/false bilan qaytaradi (xato tashlamaydi, delete kabi). Shuningdek, receiver argumenti this ni to‘g‘ri saqlaydi.",
        "code": "const o = { a: 1 };\nconsole.log(Reflect.set(o, \"b\", 2)); // true\nconsole.log(o.b); // 2\nconsole.log(Reflect.deleteProperty(o, \"a\")); // true"
      },
      {
        "title": "5. Amaliy: kuzatuvchi obyekt",
        "text": "Proxy bilan obyekt o‘zgarishlarini kuzatish mumkin. Bu reaktiv tizimlarning (Vue kabi) asosiy mexanizmlaridan biri.",
        "code": "function kuzat(o, callback) {\n  return new Proxy(o, {\n    set(t, prop, value) {\n      const eski = t[prop];\n      t[prop] = value;\n      callback(prop, eski, value);\n      return true;\n    }\n  });\n}\nconst s = kuzat({ x: 1 }, (k, e, y) => console.log(k, e, \"→\", y));\ns.x = 5; // x 1 → 5"
      }
    ],
    "takeaway": "Proxy obyekt harakatlarini ushlaydi: get, set va boshqalar.\nset true qaytarmasa, yozish muvaffaqiyatsiz hisoblanadi.\nReflect standart amallarni funksiya sifatida beradi.\nProxy ichida Reflect ishlatish to‘g‘ri usul.\nProxy reaktiv tizimlarning asosi.",
    "exercise": "1) Proxy nima qiladi?\n2) set ushlagichi nima qaytarishi kerak?\n3) Nega Proxy ichida Reflect ishlatiladi?\n4) Proxy qayerda ishlatiladi?"
  },
  {
    "id": "common-pitfalls",
    "title": "Ko‘p uchraydigan xatolar va tuzoqlar",
    "question": "JS da eng ko‘p qilingan xatolar: ==, falsy, this, closure, mutatsiya, NaN.",
    "explanation": "Bu dars oldingi mavzularni birlashtiradi va kod o‘qishda eng ko‘p uchraydigan tuzoqlarni to‘plam sifatida ko‘rsatadi. Maqsad: kod ko‘rganda darhol “bu yer tuzoq bor” deya olish.",
    "sections": [
      {
        "title": "1. == o‘rniga ===",
        "text": "== turlarni o‘zgartiradi: \"\" == 0, [] == false, null == undefined true. === hech qachon o‘zgartirmaydi. Amaliyotda === ishlatish xavfsiz.",
        "code": "console.log(\"\" == 0); // true\nconsole.log([] == false); // true\nconsole.log(null == undefined); // true\nconsole.log(\"\" === 0); // false"
      },
      {
        "title": "2. Falsy bilan noto‘g‘ri tekshirish",
        "text": "Bo‘sh massiv va bo‘sh obyekt truthy. 0 esa to‘g‘ri qiymat bo‘lishi mumkin, lekin if (x) uni yo‘q deb hisoblaydi.",
        "code": "const son = 0;\nif (!son) console.log(\"yo'q deb o'ylaymiz\"); // bu chiqadi, lekin 0 to'g'ri qiymat\n\nconst items = [];\nif (items) console.log(\"truthy\"); // chiqadi\nconsole.log(items.length > 0); // to'g'ri tekshirish"
      },
      {
        "title": "3. this yo‘qolishi",
        "text": "Metodni o‘zgaruvchiga olib chaqirsang yoki callback sifatida bersang, this yo‘qoladi. Arrow yoki bind bilan saqlash mumkin.",
        "code": "const o = { x: 1, f() { return this.x; } };\nconst g = o.f;\n// g(); // TypeError (strict)\nconsole.log(o.f.call(o)); // 1\nconsole.log(o.f.bind(o)()); // 1"
      },
      {
        "title": "4. Mutatsiya kutilmaganda",
        "text": "sort, reverse, push, splice asl massivni o‘zgartiradi. const obyekt ichi o‘zgaradi. Bu ikki holat eng ko‘p chalkashtiriladi.",
        "code": "const a = [3, 1, 2];\nconst b = a.sort(); // a ham o'zgardi!\nconsole.log(a === b); // true\n\nconst o = { x: 1 };\no.x = 2; // const bo'lsa ham ishlaydi"
      },
      {
        "title": "5. NaN va noto‘g‘ri hisob",
        "text": "NaN === NaN false. \"abc\" * 2 → NaN. Number(\"\") → 0. Bularni bilmaslik noto‘g‘ri natijaga olib keladi.",
        "code": "console.log(NaN === NaN); // false\nconsole.log(Number.isNaN(\"abc\" * 2)); // true\nconsole.log(Number(\"\")); // 0\nconsole.log(parseInt(\"12px\")); // 12"
      },
      {
        "title": "6. Asinxronlik tartibi",
        "text": "setTimeout va Promise.then darhol bajarilmaydi. Sinxron kod avval, keyin mikrovazifa, oxirida makrovazifa.",
        "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");\n// A, D, C, B"
      },
      {
        "title": "7. Kod o‘qish algoritmi",
        "text": "Har qanday kodni o‘qishda quyidagi tartib yordam beradi: 1) o‘zgaruvchi turlarini aniqla; 2) har bir operatsiya natijasini yoz; 3) shartlarni hisobla; 4) asinxron navbatni esla; 5) oxirgi chiqishni yig.",
        "code": "// Misol:\nconst x = \"5\";\nconsole.log(x + 1); // \"51\" (string birlashdi)\nconsole.log(x - 1); // 4 (songa o'zgartirildi)\nconsole.log(typeof x); // \"string\" (x o'zgarmadi)"
      }
    ],
    "takeaway": "== turlarni o‘zgartiradi, === qat’iy.\n[] va {} truthy; 0 falsy, lekin to‘g‘ri qiymat bo‘lishi mumkin.\nthis chaqirish usuliga bog‘liq; yo‘qolsa call/bind/arrow.\nsort/push/splice aslni o‘zgartiradi; const obyekt ichi o‘zgaradi.\nNaN hech narsaga teng emas.\nSinxron → mikro → makro tartibi.\nHar kodni turlar → natijalar → shartlar → navbat tartibida o‘qi.",
    "exercise": "1) \"\" == 0 va \"\" === 0 natijalari?\n2) if ([]) bajariladimi?\n3) const o = {x:1}; o.x=2 ishlaydimi?\n4) A, setTimeout, Promise.then, D tartibi qanday?\n5) Kod o‘qish algoritmining 5 bosqichini yoz."
  },
  {
    "id": "recursion",
    "title": "Rekursiya: noldan",
    "question": "Funksiya o‘zini o‘zi chaqirsa nima bo‘ladi? Bazis va rekursiv qadam nima?",
    "explanation": "Rekursiya — funksiyaning o‘zini o‘zi chaqirishi. Har bir rekursiv chaqirish yangi scope yaratadi va masalani kichikroq qismga ajratadi. To‘xtash sharti (bazis) bo‘lmasa, cheksiz chaqirish va stack overflow yuz beradi. Kod o‘qiyotganda avval bazisni top.",
    "sections": [
      {
        "title": "1. Eng oddiy rekursiya",
        "text": "Funksiya o‘zini chaqiradi, lekin har safar argument kichiklashadi. n = 0 ga yetganda to‘xtaydi. Bu bazis holati.",
        "code": "function hisobla(n) {\n  if (n === 0) return 0; // bazis\n  return n + hisobla(n - 1); // rekursiv qadam\n}\nconsole.log(hisobla(3)); // 6 (3+2+1+0)",
        "note": "hisobla(3) → 3 + hisobla(2) → 3 + 2 + hisobla(1) → ... → 6."
      },
      {
        "title": "2. Bazis shart nima uchun shart?",
        "text": "Bazis bo‘lmasa, funksiya hech qachon to‘xtamaydi va call stack to‘ladi: RangeError: Maximum call stack size exceeded.",
        "code": "// function cheksiz(n) {\n//   return cheksiz(n + 1); // to'xtash yo'q\n// }\n// cheksiz(1); // RangeError"
      },
      {
        "title": "3. Faktorial",
        "text": "Klassik misol: n! = n × (n-1)!, 0! = 1. Bazis n === 0. Har qadam n ni 1 ga kamaytiradi.",
        "code": "function faktorial(n) {\n  if (n === 0) return 1;\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(5)); // 120"
      },
      {
        "title": "4. Rekursiya va tsikl",
        "text": "Ko‘p masalalarni ham rekursiya, ham tsikl bilan yechish mumkin. Tsikl odatda tezroq va xotirani kamroq ishlatadi; rekursiya esa ba’zi tuzilmalar (daraxt) uchun qulayroq.",
        "code": "// tsikl bilan yig'indi:\nfunction yigindi(n) {\n  let s = 0;\n  for (let i = 1; i <= n; i++) s += i;\n  return s;\n}\nconsole.log(yigindi(3)); // 6"
      },
      {
        "title": "5. Ichki obyektlarda rekursiya",
        "text": "Rekursiya ierarxik ma’lumotlarda (daraxt, ichki obyektlar) juda qulay. Har qadam ichki obyektga o‘tadi.",
        "code": "const tuzilma = {\n  nom: \"bosh\",\n  bolalar: [\n    { nom: \"bir\", bolalar: [] },\n    { nom: \"ikki\", bolalar: [] }\n  ]\n};\nfunction chiqar(o) {\n  console.log(o.nom);\n  o.bolalar.forEach(chiqar);\n}\nchiqar(tuzilma); // bosh, bir, ikki"
      },
      {
        "title": "6. Stack chuqurligi",
        "text": "Har bir chaqirish stack da joy oladi. Chuqur rekursiya (masalan 10000 qadam) stack overflow beradi. Bunday hollarda tsikl yoki trampolin usuli ishlatiladi.",
        "code": "// function chuqur(n) {\n//   if (n === 0) return 0;\n//   return chuqur(n - 1);\n// }\n// chuqur(20000); // RangeError (muhitga qarab)"
      }
    ],
    "takeaway": "Rekursiya — funksiyaning o‘zini chaqirishi.\nBazis shart bo‘lmasa cheksiz chaqirish va RangeError.\nHar qadam masalani kichiklashtirishi shart.\nTsikl tezroq, rekursiya ierarxiya uchun qulay.\nChuqur rekursiya stack overflow ga olib keladi.",
    "exercise": "1) faktorial(0) nima qaytaradi va nega?\n2) Bazis shart bo‘lmasa nima bo‘ladi?\n3) 3 + hisobla(2) qanday ochiladi?\n4) Rekursiya va tsiklni qachon tanlaysiz?"
  },
  {
    "id": "debounce-throttle",
    "title": "Debounce va Throttle: noldan",
    "question": "Debounce va throttle farqi nima? Qayerda ishlatiladi?",
    "explanation": "Ikkalasi ham tez-tez chaqiriladigan funksiyani boshqarish usullari. Debounce — oxirgi chaqiruvdan keyin ma’lum vaqt o‘tganda bajaradi (qidirish maydoni). Throttle — har vaqt oralig‘ida bir marta bajaradi (scroll, resize). Bu intervyuda juda ko‘p so‘raladi.",
    "sections": [
      {
        "title": "1. Muammo",
        "text": "Foydalanuvchi har belgi yozganda yoki har scroll pikselida funksiya chaqirilsa, juda ko‘p ish bajariladi. Buni cheklash kerak.",
        "code": "// yomon: har harfda so'rov yuboriladi\ninput.addEventListener(\"input\", () => {\n  fetch(\"/qidir?x=\" + input.value);\n});"
      },
      {
        "title": "2. Debounce",
        "text": "Har chaqiruvda oldingi timer bekor qilinadi va yangisi qo‘yiladi. Faqat foydalanuvchi to‘xtagandan keyin bajariladi. setTimeout + clearTimeout asosida ishlaydi.",
        "code": "function debounce(fn, ms) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n\nconst qidir = debounce((x) => console.log(\"so'rov:\", x), 300);\nqidir(\"a\"); qidir(\"ab\"); qidir(\"abc\");\n// faqat: so'rov: abc"
      },
      {
        "title": "3. Throttle",
        "text": "Har bir vaqt oralig‘ida bir marta bajariladi. Oraliq ichidagi qo‘shimcha chaqiruvlar e’tiborga olinmaydi. Scroll va resize hodisalarida ishlatiladi.",
        "code": "function throttle(fn, ms) {\n  let oxirgi = 0;\n  return function (...args) {\n    const hozir = Date.now();\n    if (hozir - oxirgi >= ms) {\n      oxirgi = hozir;\n      fn(...args);\n    }\n  };\n}\n\nconst harakat = throttle(() => console.log(\"scroll\"), 200);"
      },
      {
        "title": "4. Asosiy farq",
        "text": "Debounce — oxirgi chaqiruvdan keyin kutadi. Throttle — birinchi chaqiruvda bajaradi va keyingilarni vaqt oralig‘igacha o‘tkazadi. Qidirish uchun debounce, scroll uchun throttle.",
        "code": "// tez-tez chaqirish: a, b, c (har 50ms)\n// debounce(300): faqat oxirgisidan 300ms keyin\n// throttle(200): 0ms da bir, 200ms da bir"
      },
      {
        "title": "5. Amaliy misol",
        "text": "Kod o‘qiyotganda closure ichidagi timer/oxirgi o‘zgaruvchisiga e’tibor ber: u chaqiruvlar orasida saqlanadi.",
        "code": "const input = document.querySelector(\"#qidir\");\ninput.addEventListener(\"input\", debounce((e) => {\n  console.log(e.target.value);\n}, 400));"
      }
    ],
    "takeaway": "Debounce — oxirgi chaqiruvdan keyin bajaradi (qidirish).\nThrottle — har vaqt oralig‘ida bir marta (scroll/resize).\nDebounce clearTimeout + setTimeout bilan yoziladi.\nThrottle Date.now() farqi bilan yoziladi.\nIkkalasi ham closure ichida holat saqlaydi.",
    "exercise": "1) Qidirish maydoni uchun qaysi usul yaxshi?\n2) Scroll hodisasi uchun-chi?\n3) Debounce da nima uchun clearTimeout kerak?\n4) Throttle va debounce asosiy farqi nima?"
  },
  {
    "id": "currying",
    "title": "Currying va qisman qo‘llash: noldan",
    "question": "Currying nima? f(a,b,c) ni f(a)(b)(c) ga aylantirish qanday ishlaydi?",
    "explanation": "Currying — ko‘p argumentli funksiyani bir argumentli funksiyalar zanjiriga aylantirish. Har bir funksiya keyingisini qaytaradi. Qisman qo‘llash (partial application) esa ba’zi argumentlarni oldindan mahkamlash. Ikkalasi ham closure asosida ishlaydi.",
    "sections": [
      {
        "title": "1. Currying misoli",
        "text": "Oddiy funksiyani currying shakliga o‘zgartirish: har bir qadam keyingi funksiyani qaytaradi, oxirgisida hisoblash bajariladi.",
        "code": "function qosh(a) {\n  return function (b) {\n    return a + b;\n  };\n}\nconsole.log(qosh(2)(3)); // 5\n\nconst beshQosh = qosh(5);\nconsole.log(beshQosh(10)); // 15",
        "note": "qosh(2) chaqirilganda a = 2 saqlanadi (closure), keyin qosh(2)(3) da b = 3."
      },
      {
        "title": "2. Arrow bilan qisqa",
        "text": "Arrow funksiyalar bilan currying juda qisqa yoziladi.",
        "code": "const kopaytir = a => b => c => a * b * c;\nconsole.log(kopaytir(2)(3)(4)); // 24"
      },
      {
        "title": "3. Umumiy curry funksiyasi",
        "text": "Rest parametrlar bilan ixtiyoriy funksiyani currying qilish mumkin. Argumentlar yetarli bo‘lguncha funksiya qaytarilaveradi.",
        "code": "function curry(fn) {\n  return function yig(...args) {\n    if (args.length >= fn.length) return fn(...args);\n    return (...keyin) => yig(...args, ...keyin);\n  };\n}\nconst yig3 = curry((a, b, c) => a + b + c);\nconsole.log(yig3(1)(2)(3)); // 6\nconsole.log(yig3(1, 2)(3)); // 6"
      },
      {
        "title": "4. Qisman qo‘llash",
        "text": "Partial application ba’zi argumentlarni oldindan berib, qolganlarini keyin olish. bind va closure bilan yoziladi.",
        "code": "function salomlash(kim, xabar) {\n  return kim + \", \" + xabar;\n}\nconst aliGa = salomlash.bind(null, \"Ali\");\nconsole.log(aliGa(\"Salom\")); // Ali, Salom"
      },
      {
        "title": "5. Nega foydali?",
        "text": "Currying funksiyalarni qayta ishlatish va kompozitsiya qilishni osonlashtiradi: oldindan sozlangan funksiya yaratish.",
        "code": "const kutil = ms => fn => setTimeout(fn, ms);\nkutil(1000)(() => console.log(\"1 soniyadan keyin\"));"
      }
    ],
    "takeaway": "Currying: f(a,b) → f(a)(b), har funksiya keyingisini qaytaradi.\nClosure har qadam argumentni saqlaydi.\nArrow bilan qisqa: a => b => a+b.\nPartial application ba’zi argumentlarni oldindan mahkamlaydi.\nbind ham qisman qo‘llash usuli.",
    "exercise": "1) qosh(2)(3) qanday ishlaydi?\n2) const f = a => b => a+b; f(1)(2) nima?\n3) Currying va partial application farqi?\n4) bind bilan qanday qisman qo‘llash mumkin?"
  },
  {
    "id": "memoization",
    "title": "Memoization: noldan",
    "question": "Memoization nima? Natijalar qanday keshlanadi va qachon foydali?",
    "explanation": "Memoization — funksiya natijasini saqlab, keyingi chaqiruvda hisoblash o‘rniga tayyor natijani qaytarish usuli. Kuchli hisoblashlar va rekursiya (masalan Fibonacci) uchun juda foydali. Closure va Map/Object bilan yoziladi.",
    "sections": [
      {
        "title": "1. Muammo",
        "text": "Oddiy rekursiv Fibonacci bir xil qiymatlarni qayta-qayta hisoblaydi: juda sekin.",
        "code": "function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n// fib(40) juda uzoq ishlaydi — takroriy hisoblar tufayli"
      },
      {
        "title": "2. Kesh bilan yechim",
        "text": "Hisoblangan natijani obyektga saqlaymiz. Keyingi chaqiruvda keshda borsa, darhol qaytaramiz.",
        "code": "function fibTez(n, kesh = {}) {\n  if (n < 2) return n;\n  if (kesh[n] !== undefined) return kesh[n];\n  kesh[n] = fibTez(n - 1, kesh) + fibTez(n - 2, kesh);\n  return kesh[n];\n}\nconsole.log(fibTez(40)); // tez chiqadi"
      },
      {
        "title": "3. Umumiy memoize funksiyasi",
        "text": "Har qanday funksiyani keshlab qo‘yish mumkin. Argumentlar kalit sifatida ishlatiladi.",
        "code": "function memoize(fn) {\n  const kesh = new Map();\n  return function (...args) {\n    const kalit = JSON.stringify(args);\n    if (kesh.has(kalit)) return kesh.get(kalit);\n    const natija = fn(...args);\n    kesh.set(kalit, natija);\n    return natija;\n  };\n}\nconst kvadrat = memoize(x => x * x);\nconsole.log(kvadrat(5), kvadrat(5)); // ikkinchisi keshdan"
      },
      {
        "title": "4. E’tibor: faqat sof funksiyalar",
        "text": "Memoization faqat bir xil argumentga doim bir xil natija qaytaradigan (sof/pure) funksiyalar uchun xavfsiz. Yon ta’siri bor funksiyani keshlamang.",
        "code": "// yomon: natija har safar farq qiladi\n// memoize(() => Date.now()) — noto'g'ri ishlatish\n\n// yaxshi: bir xil kirish → bir xil chiqish\nmemoize(x => x * 2);"
      },
      {
        "title": "5. Kesh xotirasi",
        "text": "Kesh o‘sib boradi: har xil argument uchun yangi yozuv. Katta ma’lumotlarda eskirgan yozuvlarni o‘chirish (LRU) kerak bo‘lishi mumkin.",
        "code": "const kesh = new Map();\nkesh.set(\"a\", 1);\n// kesh.clear(); // butunlash o'chirish"
      }
    ],
    "takeaway": "Memoization — natijani keshlab, qayta hisoblamaslik.\nRekursiv hisoblashlarda juda tezlashtiradi.\nClosure yoki Map bilan yoziladi.\nFaqat sof funksiyalarga qo‘llash xavfsiz.\nKesh hajmini nazorat qilish kerak.",
    "exercise": "1) Nega oddiy fib(40) sekin?\n2) Kesh qanday ishlaydi?\n3) Nega faqat sof funksiyalarni keshlash kerak?\n4) Map o‘rniga obyekt ishlatish mumkinmi?"
  },
  {
    "id": "symbol-bigint",
    "title": "Symbol va BigInt: noldan",
    "question": "Symbol nima? BigInt qachon kerak? Nega ularni boshqa turlar bilan aralashtirib bo‘lmaydi?",
    "explanation": "Symbol — noyob va o‘zgaruvchan identifikator yaratadigan primitive tur. Obyekt kaliti sifatida ishlatiladi. BigInt — katta butun sonlar uchun tur: Number aniqlik yo‘qotadi, BigInt esa yo‘q. Ikkalasi ham maxsus qoidalarga ega.",
    "sections": [
      {
        "title": "1. Symbol",
        "text": "Symbol() har chaqirilganda yangi noyob qiymat yaratadi. Hatto tavsif bir xil bo‘lsa ham teng emas. Obyektga yashirin kalit qo‘yish uchun ishlatiladi.",
        "code": "const a = Symbol(\"id\");\nconst b = Symbol(\"id\");\nconsole.log(a === b); // false\nconsole.log(typeof a); // \"symbol\"\n\nconst o = { [a]: 1 };\nconsole.log(o[a]); // 1\nconsole.log(Object.keys(o)); // [] — ko'rinmaydi"
      },
      {
        "title": "2. Symbol.iterator va well-known",
        "text": "JavaScript ichida ba’zi Symbol lar maxsus ma’noga ega: Symbol.iterator, Symbol.toPrimitive. Ular obyektning ichki xatti-harakatini o‘zgartiradi.",
        "code": "const massiv = [1, 2];\nconsole.log(typeof massiv[Symbol.iterator]); // \"function\"\nconsole.log([...massiv]); // iterator yordamida"
      },
      {
        "title": "3. BigInt",
        "text": "Katta butun sonlar uchun: son oxiriga n qo‘yiladi yoki BigInt() chaqiriladi. Number bilan aralashtirib hisoblab bo‘lmaydi: TypeError.",
        "code": "const katta = 9007199254740993n;\nconsole.log(typeof katta); // \"bigint\"\nconsole.log(katta + 1n); // 9007199254740994n\n// console.log(katta + 1); // TypeError",
        "note": "Number 9007199254740993 ni 9007199254740992 qilib qo‘yadi (aniqlik yo‘qotish). BigInt buni to‘g‘ri saqlaydi."
      },
      {
        "title": "4. BigInt va taqqoslash",
        "text": "BigInt va Number keng tarqalgan taqqoslashda ishlaydi (==, <, >), lekin qat’iy tenglik (===) har doim false, chunki turlar farq qiladi.",
        "code": "console.log(1n == 1); // true\nconsole.log(1n === 1); // false\nconsole.log(1n < 2); // true\nconsole.log(BigInt(5)); // 5n"
      },
      {
        "title": "5. JSON va BigInt",
        "text": "JSON.stringify BigInt ni qo‘llab-quvvatlamaydi: TypeError. Uni avval stringga aylantirish kerak.",
        "code": "// JSON.stringify({ x: 1n }); // TypeError\nconsole.log(JSON.stringify({ x: \"1\" })); // ishlaydi"
      }
    ],
    "takeaway": "Symbol noyob identifikator; bir xil tavsif bilan ham teng emas.\nSymbol kalitlari Object.keys da ko'rinmaydi.\nSymbol.iterator for...of mexanizmi.\nBigInt katta butun sonlar uchun: 123n.\nBigInt va Number aralash hisoblanmaydi (TypeError).\nJSON.stringify BigInt ni qo'llab-quvvatlamaydi.",
    "exercise": "1) Symbol(\"a\") === Symbol(\"a\") nima?\n2) Nega Symbol kalit Object.keys da yo'q?\n3) 1n + 1 nima beradi?\n4) 1n === 1 va 1n == 1 farqi?"
  },
  {
    "id": "weakmap-weakset",
    "title": "WeakMap va WeakSet: noldan",
    "question": "WeakMap/WeakSet Map/Set dan qanday farq qiladi? Nega “weak”?",
    "explanation": "WeakMap va WeakSet faqat obyekt kalitlari/qiymatlarini saqlaydi va ularga “zaif” (weak) bog‘lanish qiladi. Agar obyekt boshqa joyda ishlatilmasa, chiqindi yig‘uvchi (garbage collector) uni olib tashlaydi. Bu xotira sizishining oldini oladi.",
    "sections": [
      {
        "title": "1. WeakMap asoslari",
        "text": "Kalit faqat obyekt bo‘lishi mumkin. size xususiyati yo‘q, iteratsiya qilib bo‘lmaydi. get/set/has/delete metodlari bor.",
        "code": "const wm = new WeakMap();\nconst obyekt = {};\nwm.set(obyekt, \"ma'lumot\");\nconsole.log(wm.get(obyekt)); // ma'lumot\nconsole.log(wm.has(obyekt)); // true\n// wm.size — yo'q; for...of — ishlamaydi"
      },
      {
        "title": "2. Nega “weak”?",
        "text": "Map obyektni qattiq ushlab turadi: u hech qayerda ishlatilmasa ham o‘chirilmaydi. WeakMap esa ushlab turmaydi: obyekt boshqa joyda yo‘qolsa, avtomatik o‘chadi.",
        "code": "let o = {};\nconst wm = new WeakMap();\nwm.set(o, 1);\no = null; // endi obyektga hech kim murojaat qilmaydi\n// WeakMap dagi yozuv ham avtomatik yo'qoladi"
      },
      {
        "title": "3. WeakSet",
        "text": "WeakSet faqat obyektlarni saqlaydi, takrorlarsiz. add/delete/has bor, iteratsiya yo‘q.",
        "code": "const ws = new WeakSet();\nconst o = {};\nws.add(o);\nconsole.log(ws.has(o)); // true\n// ws.add(1); // TypeError: faqat obyekt"
      },
      {
        "title": "4. Qayerda ishlatiladi?",
        "text": "Obyektga qo‘shimcha ma’lumot biriktirish (masalan, kesh yoki “ishlangan” belgisi) va DOM elementlariga tegishli holat saqlash. Element DOM dan o‘chirilsa, ma’lumot ham o‘chadi.",
        "code": "const ishlangan = new WeakSet();\nfunction ishla(element) {\n  if (ishlangan.has(element)) return;\n  ishlangan.add(element);\n  // ishlash...\n}"
      },
      {
        "title": "5. Cheklovlar",
        "text": "Iteratsiya yo‘q, size yo‘q, kalit faqat obyekt. Shuning uchun Map/Set o‘rniga faqat xotira muhim bo‘lganda tanlanadi.",
        "code": "// wm.forEach — yo'q\n// [...wm] — ishlamaydi\n// wm.keys() — yo'q"
      }
    ],
    "takeaway": "WeakMap kaliti faqat obyekt; WeakSet faqat obyekt saqlaydi.\nZaif bog‘lanish: obyekt yo‘qolsa, yozuv ham o‘chadi.\nsize va iteratsiya yo‘q.\nXotira sizishining oldini oladi.\nDOM elementlariga holat biriktirish uchun qulay.",
    "exercise": "1) WeakMap va Map farqi nima?\n2) Nega size yo‘q?\n3) wm.set(1, \"x\") ishlaydimi?\n4) WeakMap qayerda foydali?"
  },
  {
    "id": "object-descriptors",
    "title": "Obyekt descriptorlari: freeze, seal, defineProperty",
    "question": "Xususiyatni o‘chirib bo‘lmaslik, faqat o‘qish, Object.freeze va seal nima qiladi?",
    "explanation": "Har bir obyekt xususiyatining descriptorlari bor: value, writable, enumerable, configurable. Ularni Object.defineProperty bilan boshqarish mumkin. freeze va seal shu mexanizm ustiga qurilgan. Kod o‘qiyotganda “bu xususiyat o‘zgartirilishi mumkinmi?” deb so‘ra.",
    "sections": [
      {
        "title": "1. Descriptor nima?",
        "text": "Object.getOwnPropertyDescriptor obyekt xususiyati haqida ma’lumot beradi: qiymat, yozish mumkinmi, sanab o‘tiladimi, o‘chirish mumkinmi.",
        "code": "const o = { x: 1 };\nconsole.log(Object.getOwnPropertyDescriptor(o, \"x\"));\n// { value: 1, writable: true, enumerable: true, configurable: true }"
      },
      {
        "title": "2. defineProperty",
        "text": "Xususiyatni maxsus qoidalar bilan yaratish yoki o‘zgartirish. writable: false — qiymat o‘zgartirilmaydi (strict mode da TypeError).",
        "code": "const o = {};\nObject.defineProperty(o, \"x\", {\n  value: 1,\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\nconsole.log(o.x); // 1\n// o.x = 2; // strict mode da TypeError"
      },
      {
        "title": "3. Faqat o‘qish uchun",
        "text": "writable: false va configurable: false bilan o‘zgarmas xususiyat yaratiladi. Lekin obyekt ichidagi obyektlar o‘zgarishi mumkin (yuzaki).",
        "code": "const o = {};\nObject.defineProperty(o, \"konstanta\", { value: 42 });\n// default: writable: false, enumerable: false, configurable: false\nconsole.log(o.konstanta); // 42\nconsole.log(Object.keys(o)); // [] — sanab o'tilmaydi"
      },
      {
        "title": "4. Object.freeze",
        "text": "freeze barcha xususiyatlarni yozish va o‘chirishdan qulflaydi. Lekin chuqur emas: ichki obyektlar o‘zgaradi.",
        "code": "const o = { x: 1, ichki: { y: 2 } };\nObject.freeze(o);\no.x = 5; // ishlamaydi\no.ichki.y = 9; // ishlaydi — yuzaki\nconsole.log(Object.isFrozen(o)); // true"
      },
      {
        "title": "5. Object.seal",
        "text": "seal yangi xususiyat qo‘shish va o‘chirishni taqiqlaydi, lekin mavjudlarini o‘zgartirishga ruxsat beradi.",
        "code": "const o = { x: 1 };\nObject.seal(o);\no.x = 2; // ishlaydi\no.y = 3; // ishlamaydi\ndelete o.x; // ishlamaydi\nconsole.log(Object.isSealed(o)); // true"
      },
      {
        "title": "6. preventExtensions",
        "text": "Faqat yangi xususiyat qo‘shishni taqiqlaydi. Mavjudlari o‘zgaradi va o‘chiriladi.",
        "code": "const o = { x: 1 };\nObject.preventExtensions(o);\no.y = 2; // ishlamaydi\ndelete o.x; // ishlaydi"
      }
    ],
    "takeaway": "Descriptor: value, writable, enumerable, configurable.\ndefineProperty bilan xususiyat qoidalarini belgilash mumkin.\nfreeze — yozish va o‘chirishni taqiqlaydi, lekin yuzaki.\nseal — qo‘shish/o‘chirishni taqiqlaydi, o‘zgartirishga ruxsat.\npreventExtensions — faqat yangi qo‘shishni taqiqlaydi.",
    "exercise": "1) freeze dan keyin ichki obyekt o‘zgaradimi?\n2) seal va freeze farqi?\n3) defineProperty da default writable nima?\n4) preventExtensions nima taqiqlaydi?"
  },
  {
    "id": "dynamic-import-async-iteration",
    "title": "Dynamic import va async iteratsiya",
    "question": "import() nima? for await...of qanday ishlaydi?",
    "explanation": "Oddiy import statik: fayl yuklanishida bajariladi. Dynamic import() — funksiya sifatida, kerak paytda modulni yuklaydi va Promise qaytaradi. for await...of esa asinxron iteratorlarni ketma-ket o‘qish uchun ishlatiladi.",
    "sections": [
      {
        "title": "1. Dynamic import",
        "text": "import(\"./modul.js\") chaqirilganda modul yuklanadi va Promise qaytaradi. Kodning faqat kerakli qismida yuklash (lazy loading) uchun ishlatiladi.",
        "code": "async function yukla() {\n  const modul = await import(\"./math.js\");\n  console.log(modul.yig(1, 2));\n}\nyukla();\n\n// yoki:\nimport(\"./math.js\").then(m => console.log(m.PI));"
      },
      {
        "title": "2. Nega foydali?",
        "text": "Katta modullarni dastlab yuklamay, faqat foydalanuvchi kerak qilganda olish: dastlabki yuklanish tezlashadi. Shartli yuklash ham mumkin.",
        "code": "if (kerak) {\n  const { ishla } = await import(\"./kattamodul.js\");\n  ishla();\n}"
      },
      {
        "title": "3. Async generator",
        "text": "async function* bilan asinxron generator yaratiladi. yield bilan qiymat beriladi, lekin await ham ishlatish mumkin.",
        "code": "async function* sonlar() {\n  yield 1;\n  await new Promise(r => setTimeout(r, 100));\n  yield 2;\n}\nconst g = sonlar();\nconsole.log(await g.next()); // { value: 1, done: false }"
      },
      {
        "title": "4. for await...of",
        "text": "Asinxron iteratorni ketma-ket o‘qish uchun. Har qadam Promise bajarilishini kutadi. Oddiy for...of asinxron iteratorni to‘g‘ri o‘qiy olmaydi.",
        "code": "async function* ketma() {\n  yield Promise.resolve(1);\n  yield Promise.resolve(2);\n}\nfor await (const qiymat of ketma()) {\n  console.log(qiymat); // 1, keyin 2\n}"
      },
      {
        "title": "5. Amaliy: fayl oqimi",
        "text": "Node.js da oqimlar (stream) va brauzerda katta ma’lumotlar bilan ishlashda for await...of qulay.",
        "code": "// for await (const bolak of readStream) {\n//   ishla(bolak);\n// }"
      }
    ],
    "takeaway": "import() modulni kerak paytda yuklaydi va Promise qaytaradi.\nLazy loading va shartli yuklash uchun ishlatiladi.\nasync function* asinxron generator yaratadi.\nfor await...of asinxron iteratorni ketma-ket o‘qiydi.\nOddiy for...of asinxron iterator uchun yaramaydi.",
    "exercise": "1) import() va oddiy import farqi?\n2) import() nima qaytaradi?\n3) for await...of qachon kerak?\n4) async function* nima yaratadi?"
  },
  {
    "id": "promise-combinators",
    "title": "Promise kombinatorlari: all, race, allSettled, any",
    "question": "Promise.all, race, allSettled va any farqi nima? Qaysi birini qachon ishlatish kerak?",
    "explanation": "Bu metodlar bir nechta Promise ni birlashtiradi. Farqi: qachon bajariladi va xatoga qanday munosabat qiladi. Intervyuda to‘rttasini farqlash ko‘p so‘raladi.",
    "sections": [
      {
        "title": "1. Promise.all",
        "text": "Barchasi bajarilsa, natijalar massivini qaytaradi. Birortasi rad etilsa, darhol shu xato bilan rad etiladi.",
        "code": "console.log(await Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n])); // [1, 2]\n\n// Promise.all([Promise.resolve(1), Promise.reject(\"xato\")])\n// → rad etiladi: \"xato\""
      },
      {
        "title": "2. Promise.race",
        "text": "Birinchisi tugagan (bajarilgan yoki rad etilgan) natijani qaytaradi. Qolganlar kutilmaydi. Timeout bilan ishlatish uchun qulay.",
        "code": "const sekin = new Promise(r => setTimeout(() => r(\"sekin\"), 100));\nconst tez = new Promise(r => setTimeout(() => r(\"tez\"), 10));\nconsole.log(await Promise.race([sekin, tez])); // tez"
      },
      {
        "title": "3. Promise.allSettled",
        "text": "Barchasini kutadi, lekin xatolarda rad etilmaydi. Har birining holati va natijasini qaytaradi: { status: \"fulfilled\", value } yoki { status: \"rejected\", reason }.",
        "code": "console.log(await Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(\"xato\")\n]));\n// [{status:\"fulfilled\",value:1}, {status:\"rejected\",reason:\"xato\"}]"
      },
      {
        "title": "4. Promise.any",
        "text": "Birinchisi muvaffaqiyatli bajarilgan natijani qaytaradi. Hammasi rad etilsa, AggregateError beradi. race dan farqi: rad etishlarni e'tiborga olmaydi.",
        "code": "console.log(await Promise.any([\n  Promise.reject(\"birinchi xato\"),\n  Promise.resolve(\"muvaffaqiyat\")\n])); // muvaffaqiyat"
      },
      {
        "title": "5. Timeout namunasi",
        "text": "race bilan so‘rovga vaqt cheklovi qo‘yish mumkin: vaqt tugasa, rad etilgan Promise yutadi.",
        "code": "const timeout = new Promise((_, reject) =>\n  setTimeout(() => reject(new Error(\"vaqt tugadi\")), 1000)\n);\ntry {\n  await Promise.race([fetch(\"/api\"), timeout]);\n} catch (e) {\n  console.log(e.message); // vaqt tugadi bo'lishi mumkin\n}"
      }
    ],
    "takeaway": "all — hammasi bajarilsa natija, bitta xato → rad.\nrace — birinchisi tugagani (xato ham bo'lishi mumkin).\nallSettled — hammasini kutadi, holatlarni qaytaradi.\nany — birinchisi muvaffaqiyatli bo'lgani; hammasi xato → AggregateError.\nrace bilan timeout yozish qulay.",
    "exercise": "1) all va allSettled farqi?\n2) race va any farqi nima?\n3) Hammasi rad etilsa, any nima beradi?\n4) Timeout uchun qaysi kombinator ishlatiladi?"
  },
  {
    "id": "node-basics",
    "title": "Node.js asoslari: require, ESM, process",
    "question": "Node.js nima? CommonJS va ESM farqi? process va global obyektlar nima?",
    "explanation": "Node.js — JavaScript’ni brauzersiz, serverda ishga tushiradigan muhit. Uning o‘z global obyektlari bor: process, Buffer, require. Kod o‘qiyotganda avval modul tizimini aniqla: require (CommonJS) yoki import (ESM).",
    "sections": [
      {
        "title": "1. CommonJS: require va module.exports",
        "text": "Node.js ning eski va hali ham keng tarqalgan modul tizimi. module.exports bilan eksport qilinadi, require() bilan olinadi. require sinxron bajariladi.",
        "code": "// math.js\nmodule.exports = { yig(a, b) { return a + b; } };\n\n// app.js\nconst math = require(\"./math.js\");\nconsole.log(math.yig(1, 2)); // 3"
      },
      {
        "title": "2. ESM: import va export",
        "text": "Zamonaviy standart. Fayl .mjs bo‘lsa yoki package.json da \"type\": \"module\" bo‘lsa ishlaydi. import asinxron yuklanadi va faqat yuqorida yoziladi.",
        "code": "// package.json: { \"type\": \"module\" }\n// math.js\nexport const yig = (a, b) => a + b;\n\n// app.js\nimport { yig } from \"./math.js\";\nconsole.log(yig(1, 2));"
      },
      {
        "title": "3. Ikki tizimni aralashtirmaslik",
        "text": "Bir faylda require va import ni birga ishlatish xato beradi. Loyihada bitta tizim tanlanadi.",
        "code": "// import x from \"x\";\n// const y = require(\"y\"); // SyntaxError"
      },
      {
        "title": "4. process obyekti",
        "text": "process — joriy Node.js jarayoni. process.argv komanda satri argumentlari, process.env muhit o‘zgaruvchilari, process.exit() jarayonni tugatadi.",
        "code": "console.log(process.argv); // [node, fayl, arg1, ...]\nconsole.log(process.env.NODE_ENV); // \"production\" bo'lishi mumkin\nconsole.log(process.platform); // \"darwin\", \"win32\", \"linux\"\n// process.exit(1); // xato kodi bilan tugatish"
      },
      {
        "title": "5. __dirname va __filename",
        "text": "CommonJS da joriy fayl va papka yo‘li bor. ESM da ular yo‘q: import.meta.url ishlatiladi.",
        "code": "// CommonJS:\nconsole.log(__dirname);\nconsole.log(__filename);\n\n// ESM:\nconsole.log(import.meta.url);"
      }
    ],
    "takeaway": "CommonJS: require + module.exports, sinxron.\nESM: import + export, asinxron, package.json type module.\nIkkisini bir faylda aralashtirib bo'lmaydi.\nprocess argv/env/exit/platform beradi.\n__dirname CommonJS da, ESM da import.meta.url.",
    "exercise": "1) require va import farqi nima?\n2) process.argv nima beradi?\n3) ESM da __dirname o'rniga nima ishlatiladi?\n4) Nega ikki tizimni aralashtirish xato?"
  },
  {
    "id": "node-fs-path",
    "title": "Node.js: fs va path bilan ishlash",
    "question": "Fayl o‘qish/yozish qanday? sync, callback va Promise farqi? path nima qiladi?",
    "explanation": "fs moduli fayllar bilan ishlaydi: o‘qish, yozish, o‘chirish. Har bir amal uchun uch xil shakl bor: sinxron (Sync), callback va Promise (fs/promises). path esa yo‘llarni boshqarish uchun, turli OS larda to‘g‘ri ishlaydi.",
    "sections": [
      {
        "title": "1. Uch usul",
        "text": "readFileSync darhol natija qaytaradi va boshqa kodni bloklaydi. readFile callback oladi. fs/promises dagi readFile Promise qaytaradi — zamonaviy usul.",
        "code": "const fs = require(\"fs\");\n\n// sinxron (bloklaydi):\nconst matn = fs.readFileSync(\"fayl.txt\", \"utf8\");\n\n// callback:\nfs.readFile(\"fayl.txt\", \"utf8\", (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Promise (zamonaviy):\nconst fsProm = require(\"fs/promises\");\nconst data = await fsProm.readFile(\"fayl.txt\", \"utf8\");"
      },
      {
        "title": "2. Yozish",
        "text": "writeFile faylga yozadi. Agar fayl bor bo‘lsa, ustiga yozadi. flags bilan qo‘shimcha qilish mumkin.",
        "code": "await fsProm.writeFile(\"natija.txt\", \"Salom\");\nawait fsProm.appendFile(\"natija.txt\", \"\\nYana satr\");\nawait fsProm.mkdir(\"papka\", { recursive: true });\nawait fsProm.unlink(\"fayl.txt\"); // o'chirish"
      },
      {
        "title": "3. Xatolarni tekshirish",
        "text": "Fayl yo‘q bo‘lsa, xato yuz beradi. Callback da err birinchi argument, Promise da try/catch ishlatiladi.",
        "code": "try {\n  const d = await fsProm.readFile(\"yoq.txt\", \"utf8\");\n} catch (e) {\n  console.log(e.code); // ENOENT\n}"
      },
      {
        "title": "4. path moduli",
        "text": "path.join qismlarni to‘g‘ri ajratgich bilan birlashtiradi. path.resolve mutlaq yo‘l yaratadi. path.extname kengaytmani oladi.",
        "code": "const path = require(\"path\");\nconsole.log(path.join(\"papka\", \"fayl.txt\")); // papka/fayl.txt\nconsole.log(path.resolve(\"fayl.txt\")); // /to/liq/yol/fayl.txt\nconsole.log(path.extname(\"fayl.txt\")); // \".txt\"\nconsole.log(path.basename(\"/a/b/fayl.txt\")); // \"fayl.txt\""
      },
      {
        "title": "5. Nega join kerak?",
        "text": "Windows da \"\\\", macOS/Linux da \"/\" ishlatiladi. path.join har tizimda to‘g‘ri ajratgich qo‘yadi.",
        "code": "// noto'g'ri:\nconst p = \"papka/\" + \"fayl.txt\";\n// to'g'ri:\nconst p2 = path.join(\"papka\", \"fayl.txt\");"
      }
    ],
    "takeaway": "fs: readFileSync, readFile(callback), fs/promises (zamonaviy).\nwriteFile/appendFile/mkdir/unlink asosiy amallar.\nXatoni callback da err, Promise da try/catch bilan tut.\npath.join yo‘llarni OS ga mos birlashtiradi.\npath.resolve mutlaq yo‘l, extname kengaytma.",
    "exercise": "1) Uch o'qish usuli farqi nima?\n2) ENOENT nima?\n3) Nega path.join ishlatish kerak?\n4) path.extname(\"a.txt\") nima beradi?"
  },
  {
    "id": "node-streams",
    "title": "Node.js: stream va event emitter",
    "question": "Stream nima? Nega katta fayllarda readFile yomon? pipe va EventEmitter qanday ishlaydi?",
    "explanation": "Stream — ma’lumotni qismlarga (chunk) oqim sifatida o‘qish/yozish usuli. Katta faylni to‘liq xotiraga olish o‘rniga, qism-qism ishlaydi. EventEmitter — hodisalar asosida ishlash mexanizmi, Node.js ning ko‘p qismi shunga asoslangan.",
    "sections": [
      {
        "title": "1. Nega stream?",
        "text": "readFile butun faylni xotiraga oladi. 10 GB faylda xotira tugaydi. Stream esa har qismni alohida qayta ishlaydi.",
        "code": "const fs = require(\"fs\");\n// yomon: butun fayl xotirada\n// const data = fs.readFileSync(\"katta.txt\");\n\n// yaxshi: qism-qism\nconst stream = fs.createReadStream(\"katta.txt\", \"utf8\");\nstream.on(\"data\", chunk => console.log(chunk.length));\nstream.on(\"end\", () => console.log(\"tugadi\"));"
      },
      {
        "title": "2. pipe",
        "text": "pipe o‘qish oqimini yozish oqimiga ulaydi. Katta faylni nusxalash uchun eng qisqa usul.",
        "code": "const oqish = fs.createReadStream(\"kirish.txt\");\nconst chiqish = fs.createWriteStream(\"chiqish.txt\");\noqish.pipe(chiqish);\nchiqish.on(\"finish\", () => console.log(\"nusxalandi\"));"
      },
      {
        "title": "3. EventEmitter",
        "text": "EventEmitter hodisa chiqarish va tinglash uchun. on() tinglaydi, emit() chiqaradi. Node.js da ko‘p obyektlar undan meros oladi.",
        "code": "const EventEmitter = require(\"events\");\nconst e = new EventEmitter();\ne.on(\"salom\", ism => console.log(\"Salom\", ism));\ne.emit(\"salom\", \"Ali\"); // Salom Ali"
      },
      {
        "title": "4. Xato hodisasi",
        "text": "Stream da error hodisasi bor. Uni tinglamasang, jarayon o‘chib qolishi mumkin.",
        "code": "const s = fs.createReadStream(\"yoq.txt\");\ns.on(\"error\", err => console.log(\"Xato:\", err.code));"
      },
      {
        "title": "5. To‘rtta stream turi",
        "text": "Readable (o‘qish), Writable (yozish), Duplex (ikkisi ham), Transform (o‘zgartirib o‘tadi).",
        "code": "const { Transform } = require(\"stream\");\nconst katta = new Transform({\n  transform(chunk, enc, cb) {\n    cb(null, chunk.toString().toUpperCase());\n  }\n});\nfs.createReadStream(\"a.txt\").pipe(katta).pipe(fs.createWriteStream(\"b.txt\"));"
      }
    ],
    "takeaway": "Stream ma’lumotni qism-qism ishlaydi, xotirani tejaydi.\npipe o‘qishni yozishga ulaydi.\nEventEmitter: on() tingla, emit() chiqar.\nerror hodisasini tinglash shart.\nReadable, Writable, Duplex, Transform — to‘rt tur.",
    "exercise": "1) Nega katta faylda readFile yomon?\n2) pipe nima qiladi?\n3) on va emit farqi?\n4) Stream da error ni tinglamasang nima bo'ladi?"
  },
  {
    "id": "design-patterns",
    "title": "Design patternlar: Factory, Singleton, Observer, Module",
    "question": "Eng ko‘p so‘raladigan patternlar nima? Qachon qaysi birini ishlatish kerak?",
    "explanation": "Design pattern — takrorlanadigan muammolarga tasdiqlangan yechim shabloni. Bu kod yozish retsepti emas, balki tuzilma g‘oyasi. Intervyuda ko‘pincha \"bu kod qaysi pattern?\" yoki \"shu muammoni qanday hal qilasiz?\" deb so‘rashadi.",
    "sections": [
      {
        "title": "1. Factory",
        "text": "Obyekt yaratishni alohida funksiyaga o‘tkazadi. Qaysi tur yaratilishi parametrgabog‘liq. new bilan to‘g‘ridan-to‘g‘ri yaratish o‘rniga ishlatiladi.",
        "code": "function yarat(tur, ism) {\n  if (tur === \"user\") return { ism, rol: \"user\" };\n  if (tur === \"admin\") return { ism, rol: \"admin\" };\n  throw new Error(\"Noma'lum tur\");\n}\nconst u = yarat(\"admin\", \"Ali\");\nconsole.log(u.rol); // admin"
      },
      {
        "title": "2. Singleton",
        "text": "Bir klassdan faqat bitta obyekt bo‘lishini kafolatlaydi. Birinchi chaqirishda yaratilib, keyingilarida shu obyekt qaytariladi.",
        "code": "class Sozlamalar {\n  static instance;\n  constructor() {\n    if (Sozlamalar.instance) return Sozlamalar.instance;\n    this.til = \"uz\";\n    Sozlamalar.instance = this;\n  }\n}\nconst a = new Sozlamalar();\nconst b = new Sozlamalar();\nconsole.log(a === b); // true"
      },
      {
        "title": "3. Observer (kuzatuvchi)",
        "text": "Bir obyekt holati o‘zgarganda, unga bog‘langan barcha kuzatuvchilarga xabar beradi. EventEmitter va reaktiv tizimlarning asosi.",
        "code": "class Kuzatuvchi {\n  constructor() { this.tinglovchilar = []; }\n  qosh(fn) { this.tinglovchilar.push(fn); }\n  xabar(v) { this.tinglovchilar.forEach(fn => fn(v)); }\n}\nconst k = new Kuzatuvchi();\nk.qosh(x => console.log(\"bir:\", x));\nk.qosh(x => console.log(\"ikki:\", x));\nk.xabar(\"yangi\");"
      },
      {
        "title": "4. Module pattern",
        "text": "Closure bilan ochiq va yopiq qismlarni ajratadi. Faqat qaytarilgan metodlar tashqariga ko‘rinadi.",
        "code": "const hisob = (function () {\n  let son = 0; // yopiq\n  return {\n    oshir() { return ++son; },\n    qiymat() { return son; }\n  };\n})();\nhisob.oshir();\nconsole.log(hisob.qiymat()); // 1\n// hisob.son — ko'rinmaydi"
      },
      {
        "title": "5. Qachon qaysi?",
        "text": "Factory — turga qarab obyekt yaratish. Singleton — bitta umumiy holat (sozlamalar, kesh). Observer — holat o‘zgarishini tarqatish. Module — ma’lumotni yashirish.",
        "code": "// umumiy qoida: patternni muammo talab qilsa qo'llan\n// \"har joyda pattern ishlatish\" — yomon odat"
      }
    ],
    "takeaway": "Factory yaratishni funksiyaga o‘tkazadi.\nSingleton bitta obyekt kafolatlaydi.\nObserver holat o‘zgarishini kuzatuvchilarga yetkazadi.\nModule closure bilan ma’lumot yashiradi.\nPattern muammoga yechim, o‘z maqsadi emas.",
    "exercise": "1) Factory va new farqi nima?\n2) Singleton nega bitta obyekt qaytaradi?\n3) Observer qayerda ishlatiladi?\n4) Module pattern ma’lumotni qanday yashiradi?"
  },
  {
    "id": "testing-basics",
    "title": "Testing: unit test, Jest va Vitest asoslari",
    "question": "Unit test nima? test/expect qanday yoziladi? Nega test muhim?",
    "explanation": "Test — kod to‘g‘ri ishlashini avtomatik tekshirish. Unit test bitta funksiyani sinaydi. Jest va Vitest eng mashhur ramkalar: ular test() va expect() beradi. Kod o‘qiyotganda test nomi nimani tekshirishini aytib beradi.",
    "sections": [
      {
        "title": "1. Oddiy test",
        "text": "test(nom, fn) bitta holatni sinaydi. expect(natija).toBe(kutilgan) qat’iy tenglikni tekshiradi.",
        "code": "function yig(a, b) { return a + b; }\n\ntest(\"1 + 2 = 3\", () => {\n  expect(yig(1, 2)).toBe(3);\n});"
      },
      {
        "title": "2. Ko‘p keng tarqalgan matcherlar",
        "text": "toBe qat’iy tenglik, toEqual tarkibni solishtirish (obyekt/massiv), toBeTruthy, toBeFalsy, toContain, toThrow.",
        "code": "expect([1, 2]).toEqual([1, 2]); // tarkib\nexpect({ a: 1 }).toEqual({ a: 1 });\nexpect([]).toBeTruthy();\nexpect([1, 2]).toContain(1);\nexpect(() => { throw new Error(\"x\"); }).toThrow();"
      },
      {
        "title": "3. Guruh va tayyorgarlik",
        "text": "describe bilan testlarni guruhlash. beforeEach har testdan oldin bajariladi, afterEach keyin.",
        "code": "describe(\"hisob\", () => {\n  let hisob;\n  beforeEach(() => { hisob = 0; });\n  test(\"oshirish\", () => { expect(++hisob).toBe(1); });\n});"
      },
      {
        "title": "4. Sof funksiyalar testi oson",
        "text": "Yon ta’siri yo‘q funksiyani sinash oson: kirish berasan, chiqishni tekshirasan. Tashqi holatga bog‘liq funksiyani sinash qiyin.",
        "code": "// yaxshi: sof\nexpect(yig(2, 3)).toBe(5);\n\n// qiyin: tashqi holat va vaqtga bog'liq\n// expect(Date.now()).toBe(...) — ishonchsiz"
      },
      {
        "title": "5. Qamrov (coverage)",
        "text": "Coverage kodning necha foizi test bilan qoplanganini ko‘rsatadi. 100% har doim ham kerak emas: muhim yo‘llarga e’tibor berish yaxshiroq.",
        "code": "// npx vitest run --coverage\n// npx jest --coverage"
      }
    ],
    "takeaway": "Unit test bitta funksiyani sinaydi.\ntest() + expect().toBe() / toEqual() asosiy shakl.\ndescribe guruh, beforeEach tayyorgarlik.\nSof funksiyalarni sinash oson.\nCoverage foiz emas, muhim yo'llar muhim.",
    "exercise": "1) toBe va toEqual farqi nima?\n2) beforeEach qachon ishlaydi?\n3) Nega sof funksiyani test qilish oson?\n4) Coverage 100% bo'lishi shartmi?"
  }
];

window.interviewQuestions = [
  {
    "id": "q-var-let-const-1",
    "lessonId": "var-let-const",
    "topic": "var / let / const",
    "level": "oson",
    "question": "Bu kod qanday natija beradi?",
    "code": "var a = 1;\n{\n  var a = 2;\n}\nconsole.log(a);",
    "options": [
      "1",
      "2",
      "undefined",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "var block scope'ga ega emas. Ichkaridagi var a = 2 tashqaridagi a bilan bir xil o'zgaruvchini yangilaydi. Shuning uchun 2 chiqadi.",
    "walkthrough": [
      "var a = 1 → global (yoki funksiya) scope'da a yaratildi, qiymati 1.",
      "{ } oddiy block, lekin var uchun chegara emas.",
      "Ichkaridagi var a = 2 shu a ga yangi qiymat yozadi.",
      "console.log(a) → 2."
    ]
  },
  {
    "id": "q-var-let-const-2",
    "lessonId": "var-let-const",
    "topic": "var / let / const",
    "level": "o'rta",
    "question": "Qaysi satr xato beradi?",
    "code": "const user = { name: \"Ali\" };\nuser.name = \"Vali\";\nuser = { name: \"Hasan\" };\nconsole.log(user.name);",
    "options": [
      "2-satr (user.name = \"Vali\")",
      "3-satr (user = ...)",
      "Hech qaysi satr xato bermaydi",
      "1-satr (const deklaratsiya)"
    ],
    "answer": 1,
    "explain": "const o'zgaruvchiga yangi obyekt biriktirishni taqiqlaydi, lekin mavjud obyektning ichki xususiyatlarini o'zgartirishga ruxsat beradi. 2-satr ishlaydi, 3-satr TypeError beradi.",
    "walkthrough": [
      "const user = { name: \"Ali\" } → user obyektga ishora qiladi.",
      "user.name = \"Vali\" → obyekt ichi o'zgaradi, bunga ruxsat bor.",
      "user = { ... } → yangi obyekt biriktirishga urinish, const buni rad etadi (TypeError).",
      "Shuning uchun xato 3-satrda."
    ]
  },
  {
    "id": "q-var-let-const-3",
    "lessonId": "var-let-const",
    "topic": "var / let / const",
    "level": "oson",
    "question": "Qaysi deklaratsiya keyinchalik qiymatni o'zgartirishga imkon beradi?",
    "options": [
      "Faqat var",
      "var va let",
      "Faqat const",
      "var, let va const"
    ],
    "answer": 1,
    "explain": "var va let ga yangi qiymat berish mumkin. const esa deklaratsiyada berilgan qiymatni qayta biriktirishga yo'l qo'ymaydi.",
    "walkthrough": [
      "var son = 1; son = 2; → ishlaydi.",
      "let son = 1; son = 2; → ishlaydi.",
      "const son = 1; son = 2; → TypeError.",
      "To'g'ri javob: var va let."
    ]
  },
  {
    "id": "q-scope-1",
    "lessonId": "scope",
    "topic": "Scope",
    "level": "o'rta",
    "question": "console.log nima chiqaradi?",
    "code": "const x = \"global\";\nfunction f() {\n  const x = \"ichki\";\n  if (true) {\n    console.log(x);\n  }\n}\nf();",
    "options": [
      "global",
      "ichki",
      "undefined",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "if blocki ichida o'z x e'lon qilinmagan. Scope chain bo'yicha qidiruv avval funksiya scope'ga yetib boradi va u yerdagi \"ichki\" ni topadi.",
    "walkthrough": [
      "console.log ichkarida, if blockida turibdi.",
      "Bu blockda x yo'q → tashqi funksiya scope'ga chiqamiz.",
      "Funksiyada const x = \"ichki\" bor → topildi.",
      "Natija: \"ichki\". Global x soyada qoladi."
    ]
  },
  {
    "id": "q-scope-2",
    "lessonId": "scope",
    "topic": "Scope",
    "level": "oson",
    "question": "Bu kodda qaysi nom funksiya tashqarisida ko'rinadi?",
    "code": "function sinov() {\n  var a = 1;\n  let b = 2;\n  const c = 3;\n}\nsinov();",
    "options": [
      "Faqat a",
      "Faqat b va c",
      "Hammasi",
      "Hech biri"
    ],
    "answer": 3,
    "explain": "Funksiya ichida e'lon qilingan barcha nomlar (var, let, const) shu funksiyaning mahalliy nomlaridir. Tashqaridan hech biri ko'rinmaydi.",
    "walkthrough": [
      "var a funksiya scope'ida, tashqarida yo'q.",
      "let b va const c ham funksiya tanasi bilan chegaralangan.",
      "sinov() chaqirilganda ular yaratilib, tugaganda yo'qoladi.",
      "To'g'ri javob: hech biri."
    ]
  },
  {
    "id": "q-hoisting-1",
    "lessonId": "hoisting-tdz",
    "topic": "Hoisting / TDZ",
    "level": "o'rta",
    "question": "Bu ikki console.log qanday natija beradi?",
    "code": "console.log(a);\nvar a = 5;\nconsole.log(b);\nlet b = 10;",
    "options": [
      "undefined, undefined",
      "5, 10",
      "undefined, ReferenceError",
      "ReferenceError, ReferenceError"
    ],
    "answer": 2,
    "explain": "var nomi oldindan yaratilib undefined bilan boshlanadi. let nomi ham mavjud, lekin TDZ sabab deklaratsiyagacha o'qish ReferenceError beradi.",
    "walkthrough": [
      "Birinchi console.log(a) → var hoisting tufayli undefined.",
      "var a = 5 bajarilib, a = 5 bo'ladi.",
      "console.log(b) → b TDZ ichida, ReferenceError.",
      "Kod shu yerda to'xtaydi; 3-variant to'g'ri."
    ]
  },
  {
    "id": "q-hoisting-2",
    "lessonId": "hoisting-tdz",
    "topic": "Hoisting / TDZ",
    "level": "qiyin",
    "question": "Nega ikkinchi console.log ReferenceError beradi?",
    "code": "let x = 5;\n{\n  console.log(x);\n  let x = 10;\n}",
    "options": [
      "Chunki tashqi x o'chirilgan",
      "Chunki ichki let x block boshidanoq x nomini o'ziga olgan, tashqariga qidirilmaydi",
      "Chunki let hoisting qilinmaydi",
      "Chunki console.log faqat global nomlarni ko'radi"
    ],
    "answer": 1,
    "explain": "Ichki blockda let x borligi uchun bu block boshidanoq x ichki nom hisoblanadi. console.log uni TDZ ichida o'qishga urinadi va tashqi x ga chiqmaydi.",
    "walkthrough": [
      "Tashqi let x = 5 mavjud.",
      "Ichki block boshlanishi bilan x nomi ichki scope'ga tegishli bo'ladi.",
      "console.log(x) ichki x ni o'qiydi, lekin u hali TDZ ichida.",
      "Natija: ReferenceError. Tashqi 5 o'qilmaydi."
    ]
  },
  {
    "id": "q-typeof-1",
    "lessonId": "typeof",
    "topic": "typeof",
    "level": "oson",
    "question": "typeof null qanday natija beradi?",
    "options": [
      "\"null\"",
      "\"object\"",
      "\"undefined\"",
      "\"boolean\""
    ],
    "answer": 1,
    "explain": "Bu JavaScript tarixiy xatosi: typeof null \"object\" qaytaradi. null ni to'g'ri tekshirish uchun qiymat === null bilan solishtiring.",
    "walkthrough": [
      "typeof operatori ko'p turlarni to'g'ri ko'rsatadi.",
      "Lekin null uchun \"object\" qaytaradi (eski xato).",
      "Shuning uchun if (x === null) ishlatish xavfsiz.",
      "To'g'ri javob: \"object\"."
    ]
  },
  {
    "id": "q-typeof-2",
    "lessonId": "typeof",
    "topic": "typeof",
    "level": "o'rta",
    "question": "Natijalar qanday ketma-ketlikda bo'ladi?",
    "code": "console.log(typeof []);\nconsole.log(typeof function(){});\nconsole.log(typeof yozilmagan);",
    "options": [
      "\"object\", \"function\", \"undefined\"",
      "\"array\", \"function\", \"undefined\"",
      "\"object\", \"object\", \"ReferenceError\"",
      "\"object\", \"function\", \"ReferenceError\""
    ],
    "answer": 0,
    "explain": "Massiv ham obyekt → \"object\". Funksiya uchun alohida \"function\". E'lon qilinmagan, lekin o'qiladigan nom uchun typeof \"undefined\" qaytaradi (ReferenceError emas).",
    "walkthrough": [
      "typeof [] → \"object\" (massivlar obyekt hisoblanadi).",
      "typeof function(){} → \"function\".",
      "typeof yozilmagan → \"undefined\" (typeof bu holatda xavfsiz).",
      "To'g'ri javob: 1-variant."
    ]
  },
  {
    "id": "q-coercion-1",
    "lessonId": "coercion-equality",
    "topic": "Coercion / == vs ===",
    "level": "oson",
    "question": "Qaysi taqqoslash true qaytaradi?",
    "code": "console.log(\"5\" == 5);\nconsole.log(\"5\" === 5);",
    "options": [
      "Faqat birinchi",
      "Faqat ikkinchi",
      "Ikkalasi ham",
      "Hech biri"
    ],
    "answer": 0,
    "explain": "== turlarni moslashtirib (coercion) solishtiradi: \"5\" son 5 ga aylanadi → true. === esa turga ham qaraydi: string va number teng emas → false.",
    "walkthrough": [
      "\"5\" == 5 → string son ga o'zgartiriladi, 5 == 5 → true.",
      "\"5\" === 5 → tur farqi (string vs number) → false.",
      "Amaliyotda === ishlatish tavsiya etiladi.",
      "To'g'ri javob: faqat birinchi."
    ]
  },
  {
    "id": "q-coercion-2",
    "lessonId": "coercion-equality",
    "topic": "Coercion / == vs ===",
    "level": "qiyin",
    "question": "Bu ifoda qanday natija beradi?",
    "code": "console.log([] == false);\nconsole.log(\"0\" == false);",
    "options": [
      "true, true",
      "false, false",
      "true, false",
      "false, true"
    ],
    "answer": 0,
    "explain": "Bo'sh massiv avval \"\" ga, keyin 0 ga aylanadi → 0 == 0 → true. \"0\" ham son 0 ga aylanadi → true. Shu sabab == bilan ehtiyot bo'lish kerak.",
    "walkthrough": [
      "[] == false → [] → \"\" → 0; false → 0; 0 == 0 → true.",
      "\"0\" == false → \"0\" → 0; false → 0; true.",
      "Bu misollar == ning kutilmagan tomonlarini ko'rsatadi.",
      "To'g'ri javob: true, true."
    ]
  },
  {
    "id": "q-truthy-1",
    "lessonId": "truthy-falsy",
    "topic": "Truthy / Falsy",
    "level": "oson",
    "question": "Qaysi qiymatlar falsy hisoblanadi?",
    "options": [
      "0, \"\", null, undefined, NaN, false",
      "0, \"\", null, undefined, [], {}",
      "Faqat false va null",
      "\"0\", [], {}"
    ],
    "answer": 0,
    "explain": "Falsy ro'yxati: false, 0, -0, 0n, \"\", null, undefined, NaN. Bo'sh massiv [] va bo'sh obyekt {} esa truthy.",
    "walkthrough": [
      "Falsy: false, 0, \"\", null, undefined, NaN (va -0, 0n).",
      "[] va {} obyekt bo'lgani uchun truthy, bo'shlig'i muhim emas.",
      "\"0\" bo'sh bo'lmagan string → truthy.",
      "To'g'ri javob: birinchi variant."
    ]
  },
  {
    "id": "q-truthy-2",
    "lessonId": "truthy-falsy",
    "topic": "Truthy / Falsy",
    "level": "o'rta",
    "question": "if sharti bajariladimi?",
    "code": "const items = [];\nif (items) {\n  console.log(\"bor\");\n} else {\n  console.log(\"yo'q\");\n}",
    "options": [
      "\"bor\"",
      "\"yo'q\"",
      "Xato",
      "Hech narsa"
    ],
    "answer": 0,
    "explain": "Bo'sh massiv ham obyekt va truthy. if (items) har doim bajariladi. Element borligini items.length > 0 bilan tekshirish kerak.",
    "walkthrough": [
      "items = [] → bo'sh massiv, lekin obyekt.",
      "Boolean([]) → true.",
      "if sharti bajarilib \"bor\" chiqadi.",
      "To'g'ri javob: \"bor\"."
    ]
  },
  {
    "id": "q-reference-1",
    "lessonId": "object-reference",
    "topic": "Object Reference",
    "level": "o'rta",
    "question": "console.log nima chiqaradi?",
    "code": "const a = { x: 1 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);",
    "options": [
      "1",
      "2",
      "undefined",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "a va b bir xil obyektga ishora qiladi. b.x = 2 orqali obyekt ichi o'zgardi, shuning uchun a.x ham 2 bo'ldi.",
    "walkthrough": [
      "const a = { x: 1 } → bitta obyekt yaratildi.",
      "const b = a → b ham shu obyektga ishora (yangi nusxa emas).",
      "b.x = 2 → obyektning x xususiyati o'zgaradi.",
      "a.x → 2."
    ]
  },
  {
    "id": "q-reference-2",
    "lessonId": "object-reference",
    "topic": "Object Reference",
    "level": "qiyin",
    "question": "Ikkita obyekt teng hisoblanadimi?",
    "code": "console.log({ a: 1 } === { a: 1 });\nconsole.log([] === []);",
    "options": [
      "true, true",
      "false, false",
      "true, false",
      "false, true"
    ],
    "answer": 1,
    "explain": "Obyekt va massivlar reference bo'yicha solishtiriladi: ikki xil obyekt hech qachon === bo'lmaydi, tarkibi bir xil bo'lsa ham.",
    "walkthrough": [
      "{ a: 1 } === { a: 1 } → ikki alohida obyekt → false.",
      "[] === [] → ikki alohida massiv → false.",
      "Tarkibni solishtirish uchun qiymatlarni alohida tekshirish kerak.",
      "To'g'ri javob: false, false."
    ]
  },
  {
    "id": "q-functions-1",
    "lessonId": "functions",
    "topic": "Funksiyalar",
    "level": "oson",
    "question": "Bu kod ishlaydimi?",
    "code": "console.log(salom());\nfunction salom() { return \"Salom\"; }",
    "options": [
      "Ha, \"Salom\" chiqadi",
      "ReferenceError",
      "undefined chiqadi",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Function declaration hoisting qilinadi: nom va tana kod bajarilishidan oldin tayyor bo'ladi. Shuning uchun e'lon qilishdan oldin chaqirish ishlaydi.",
    "walkthrough": [
      "Function declaration topilgach, nom butun scope boshida mavjud bo'ladi.",
      "console.log(salom()) chaqirish ishlaydi.",
      "Funksiya \"Salom\" qaytaradi.",
      "Natija: \"Salom\"."
    ]
  },
  {
    "id": "q-functions-2",
    "lessonId": "functions",
    "topic": "Funksiyalar",
    "level": "o'rta",
    "question": "Nega ikkinchi chaqirish xato beradi?",
    "code": "console.log(a()); // ishlaydi\nfunction a() { return 1; }\nconsole.log(b()); // xato\nconst b = () => 2;",
    "options": [
      "Chunki b o'zgaruvchi hali TDZ da",
      "Chunki arrow funksiya hoisting qilinmaydi",
      "Chunki b noto'g'ri yozilgan",
      "Chunki const bilan chaqirib bo'lmaydi"
    ],
    "answer": 0,
    "explain": "const b = () => 2 — bu o'zgaruvchi deklaratsiyasi. b nomi TDZ ichida, deklaratsiya satriga yetguncha o'qish ReferenceError beradi.",
    "walkthrough": [
      "a() declaration — oldin tayyor, ishlaydi.",
      "b — const o'zgaruvchi, TDZ ichida.",
      "console.log(b()) deklaratsiyadan oldin o'qishga urinish.",
      "Natija: ReferenceError."
    ]
  },
  {
    "id": "q-functions-3",
    "lessonId": "functions",
    "topic": "Funksiyalar",
    "level": "o'rta",
    "question": "Default parametr qachon ishlatiladi?",
    "code": "function f(x = 5) { return x; }\nconsole.log(f(), f(undefined), f(null));",
    "options": [
      "5 5 5",
      "5 5 null",
      "undefined 5 null",
      "5 undefined null"
    ],
    "answer": 1,
    "explain": "Argument berilmaganda va undefined berilganda default ishlaydi. null esa ataylab berilgan qiymat, default ishga tushmaydi.",
    "walkthrough": [
      "f() → argument yo'q → 5.",
      "f(undefined) → default ishlaydi → 5.",
      "f(null) → null qiymat sifatida qabul qilinadi.",
      "Natija: 5 5 null."
    ]
  },
  {
    "id": "q-functions-4",
    "lessonId": "functions",
    "topic": "Funksiyalar",
    "level": "qiyin",
    "question": "Rest parametr natijasi nima?",
    "code": "function f(a, ...rest) { return [a, rest]; }\nconsole.log(JSON.stringify(f(1, 2, 3)));",
    "options": [
      "[1,[2,3]]",
      "[1,2,3]",
      "[1,[3]]",
      "Xato"
    ],
    "answer": 0,
    "explain": "a birinchi argumentni oladi, ...rest qolganlarini massivga yig'adi. Natija: [1, [2, 3]].",
    "walkthrough": [
      "a = 1.",
      "...rest = [2, 3].",
      "Funksiya [a, rest] qaytaradi.",
      "Natija: [1,[2,3]]."
    ]
  },
  {
    "id": "q-this-1",
    "lessonId": "this-keyword",
    "topic": "this",
    "level": "o'rta",
    "question": "Ikkinchi console.log nima chiqaradi?",
    "code": "const user = { ism: \"Ali\", salom() { return this.ism; } };\nconst f = user.salom;\nconsole.log(user.salom());\nconsole.log(f());",
    "options": [
      "Ali, Ali",
      "Ali, undefined",
      "Ali, xato",
      "undefined, undefined"
    ],
    "answer": 2,
    "explain": "user.salom() da this = user. Funksiyani f ga olib mustaqil chaqirsang, strict mode da this = undefined va this.ism xato beradi.",
    "walkthrough": [
      "user.salom() → this obyektga bog'langan → \"Ali\".",
      "const f = user.salom → faqat funksiya ko'chirildi, bog'lanish yo'q.",
      "f() → strict mode da this = undefined.",
      "this.ism → TypeError."
    ]
  },
  {
    "id": "q-this-2",
    "lessonId": "this-keyword",
    "topic": "this",
    "level": "o'rta",
    "question": "call va bind farqi nima?",
    "code": "function f() { return this.x; }\nconst o = { x: 1 };\nconsole.log(f.call(o));\nconst g = f.bind(o);\nconsole.log(g());",
    "options": [
      "Ikkalasi ham 1 chiqaradi va xuddi shunday ishlaydi",
      "Ikkalasi ham 1 chiqaradi, lekin call darhol chaqiradi, bind yangi funksiya qaytaradi",
      "call 1, bind xato",
      "call yangi funksiya qaytaradi, bind darhol chaqiradi"
    ],
    "answer": 1,
    "explain": "call berilgan this bilan funksiyani darhol chaqiradi. bind esa chaqirmaydi, this bog'langan yangi funksiyani qaytaradi.",
    "walkthrough": [
      "f.call(o) → this = o, darhol bajarilib 1 qaytaradi.",
      "f.bind(o) → yangi funksiya g yaratildi, hali chaqirilmadi.",
      "g() → this = o, natija 1.",
      "Farq: call darhol, bind keyincha."
    ]
  },
  {
    "id": "q-this-3",
    "lessonId": "this-keyword",
    "topic": "this",
    "level": "qiyin",
    "question": "Arrow funksiyada this qanday aniqlanadi?",
    "options": [
      "Chaqirish usuliga qarab",
      "Yaratilgan joyidagi this olinadi",
      "Har doim undefined",
      "Har doim global obyekt"
    ],
    "answer": 1,
    "explain": "Arrow funksiya o'z this ga ega emas. U yaratilgan kontekstdagi this ni meros qilib oladi va uni chaqirish usuli o'zgartira olmaydi.",
    "walkthrough": [
      "Arrow o'z this yaratmaydi.",
      "U atrofdagi this ni oladi.",
      "call/bind bilan ham o'zgartirib bo'lmaydi.",
      "To'g'ri javob: yaratilgan joyidagi this."
    ]
  },
  {
    "id": "q-array-1",
    "lessonId": "array-methods",
    "topic": "Array metodlari",
    "level": "oson",
    "question": "Qaysi metodlar asl massivni o'zgartiradi?",
    "options": [
      "map, filter, slice",
      "sort, reverse, push, splice",
      "concat, map, find",
      "filter, reduce, every"
    ],
    "answer": 1,
    "explain": "sort, reverse, push, pop, shift, unshift, splice asl massivni o'zgartiradi (mutating). map, filter, slice, concat esa yangi massiv qaytaradi.",
    "walkthrough": [
      "map/filter/slice/concat yangi massiv beradi.",
      "sort/reverse/push/splice asl massivni o'zgartiradi.",
      "Bu farq intervyuda tez-tez so'raladi.",
      "To'g'ri javob: ikkinchi variant."
    ]
  },
  {
    "id": "q-array-2",
    "lessonId": "array-methods",
    "topic": "Array metodlari",
    "level": "o'rta",
    "question": "sort natijasi nima?",
    "code": "console.log([10, 2, 1].sort());\nconsole.log([10, 2, 1].sort((a, b) => a - b));",
    "options": [
      "[1,2,10], [1,2,10]",
      "[1,10,2], [1,2,10]",
      "[10,2,1], [1,2,10]",
      "[1,10,2], [1,10,2]"
    ],
    "answer": 1,
    "explain": "sort() default bo'yicha elementlarni string sifatida solishtiradi: \"10\" < \"2\", shuning uchun [1,10,2]. Solishtirish funksiyasi (a,b)=>a-b bilan son tartibi to'g'ri bo'ladi.",
    "walkthrough": [
      "sort() → string solishtirish → [1,10,2].",
      "sort((a,b)=>a-b) → son farqi → [1,2,10].",
      "To'g'ri javob: [1,10,2], [1,2,10]."
    ]
  },
  {
    "id": "q-array-3",
    "lessonId": "array-methods",
    "topic": "Array metodlari",
    "level": "o'rta",
    "question": "reduce natijasi nima?",
    "code": "console.log([1, 2, 3].reduce((a, b) => a + b, 10));",
    "options": [
      "6",
      "10",
      "16",
      "13"
    ],
    "answer": 2,
    "explain": "Boshlang'ich qiymat 10. 10+1=11, 11+2=13, 13+3=16. Natija 16.",
    "walkthrough": [
      "a = 10 (boshlang'ich qiymat).",
      "10 + 1 = 11.",
      "11 + 2 = 13.",
      "13 + 3 = 16."
    ]
  },
  {
    "id": "q-array-4",
    "lessonId": "array-methods",
    "topic": "Array metodlari",
    "level": "oson",
    "question": "find va filter farqi nima?",
    "options": [
      "find bitta elementni, filter yangi massivni qaytaradi",
      "Ikkalasi ham massiv qaytaradi",
      "find massivni o'zgartiradi, filter yo'q",
      "filter bitta elementni, find massivni qaytaradi"
    ],
    "answer": 0,
    "explain": "find shartga mos birinchi elementni yoki undefined qaytaradi. filter esa mos barcha elementlardan yangi massiv yaratadi.",
    "walkthrough": [
      "[1,2,3].find(x=>x>1) → 2.",
      "[1,2,3].filter(x=>x>1) → [2,3].",
      "find bitta, filter barchasi.",
      "To'g'ri javob: birinchi variant."
    ]
  },
  {
    "id": "q-destructuring-1",
    "lessonId": "destructuring-spread",
    "topic": "Destructuring / Spread",
    "level": "o'rta",
    "question": "Default parametr qanday natija beradi?",
    "code": "const { x = 1 } = { x: null };\nconsole.log(x);",
    "options": [
      "1",
      "null",
      "undefined",
      "Xato"
    ],
    "answer": 1,
    "explain": "Destructuring default qiymati faqat xususiyat yo'q yoki undefined bo'lganda ishlaydi. null ataylab berilgan qiymat, shuning uchun x = null.",
    "walkthrough": [
      "obyektda x bor va u null.",
      "Default faqat undefined da ishga tushadi.",
      "x = null.",
      "Natija: null."
    ]
  },
  {
    "id": "q-destructuring-2",
    "lessonId": "destructuring-spread",
    "topic": "Destructuring / Spread",
    "level": "o'rta",
    "question": "?? va || farqi nima?",
    "code": "console.log(0 ?? 5);\nconsole.log(0 || 5);\nconsole.log(\"\" ?? \"boshqa\");",
    "options": [
      "0, 5, \"\"",
      "5, 5, \"boshqa\"",
      "0, 0, \"\"",
      "5, 0, \"boshqa\""
    ],
    "answer": 0,
    "explain": "?? faqat null/undefined da o'ng qiymatni oladi: 0 va \"\" saqlanadi. || barcha falsy qiymatlarda o'ng qiymatni oladi.",
    "walkthrough": [
      "0 ?? 5 → 0 (0 null/undefined emas).",
      "0 || 5 → 5 (0 falsy).",
      "\"\" ?? \"boshqa\" → \"\" (bo'sh string null emas).",
      "Natija: 0, 5, \"\"."
    ]
  },
  {
    "id": "q-destructuring-3",
    "lessonId": "destructuring-spread",
    "topic": "Destructuring / Spread",
    "level": "qiyin",
    "question": "Spread yuzaki nusxa qiladimi?",
    "code": "const a = { manzil: { shahar: \"Toshkent\" } };\nconst b = { ...a };\nb.manzil.shahar = \"Samarqand\";\nconsole.log(a.manzil.shahar);",
    "options": [
      "Toshkent",
      "Samarqand",
      "undefined",
      "Xato"
    ],
    "answer": 1,
    "explain": "Spread faqat yuqori qatlamni nusxalaydi. Ichki manzil obyekti a va b da umumiy bo'lgani uchun o'zgarish ikkalasida ko'rinadi.",
    "walkthrough": [
      "{ ...a } yangi tashqi obyekt yaratadi.",
      "Lekin manzil ichki obyekti bir xil reference.",
      "b.manzil.shahar o'zgarishi asl obyektga ham ta'sir qiladi.",
      "Natija: Samarqand."
    ]
  },
  {
    "id": "q-promise-1",
    "lessonId": "promises-async",
    "topic": "Promise / async",
    "level": "oson",
    "question": "Promise qaysi holatlarda bo'ladi?",
    "options": [
      "pending, fulfilled, rejected",
      "start, done, error",
      "waiting, success, fail",
      "open, closed"
    ],
    "answer": 0,
    "explain": "Promise uch holatda: pending (kutmoqda), fulfilled (bajarildi, resolve) yoki rejected (rad etildi, reject).",
    "walkthrough": [
      "Yaratilganda pending.",
      "resolve chaqirilsa fulfilled.",
      "reject chaqirilsa rejected.",
      "Holat bir marta o'zgargach qayta o'zgarmaydi."
    ]
  },
  {
    "id": "q-promise-2",
    "lessonId": "promises-async",
    "topic": "Promise / async",
    "level": "o'rta",
    "question": "Qaysi avval chiqadi?",
    "code": "Promise.resolve(1).then(x => console.log(x));\nconsole.log(2);",
    "options": [
      "1, keyin 2",
      "2, keyin 1",
      "Faqat 1",
      "Faqat 2"
    ],
    "answer": 1,
    "explain": ".then callbacki mikrovazifa sifatida hozirgi sinxron kod tugagandan keyin bajariladi. Shuning uchun 2 avval, 1 keyin chiqadi.",
    "walkthrough": [
      "Promise.resolve() darhol bajarilgan Promise yaratadi.",
      ".then navbatga qo'yiladi, hozir chaqirilmaydi.",
      "console.log(2) sinxron bajarilib 2 chiqadi.",
      "Keyin mikrovazifa: 1."
    ]
  },
  {
    "id": "q-promise-3",
    "lessonId": "promises-async",
    "topic": "Promise / async",
    "level": "o'rta",
    "question": "async funksiya nima qaytaradi?",
    "code": "async function f() { return 5; }\nconsole.log(f() instanceof Promise);",
    "options": [
      "true",
      "false",
      "5",
      "undefined"
    ],
    "answer": 0,
    "explain": "async funksiya har doim Promise qaytaradi, hatto oddiy qiymat qaytarsang ham. 5 shu Promise ning natijasiga aylanadi.",
    "walkthrough": [
      "async funksiya chaqirilganda Promise qaytaradi.",
      "return 5 shu Promise ni 5 bilan bajaradi.",
      "instanceof Promise → true.",
      "Foydalanish: f().then(x => ...)."
    ]
  },
  {
    "id": "q-promise-4",
    "lessonId": "promises-async",
    "topic": "Promise / async",
    "level": "qiyin",
    "question": "Promise.all dagi bitta reject nima bo'ladi?",
    "options": [
      "Boshqalari ham rad etiladi",
      "Butun Promise.all rad etiladi",
      "Qolganlar bajarilishini kutadi",
      "Xato e'tiborga olinmaydi"
    ],
    "answer": 1,
    "explain": "Promise.all barchasi muvaffaqiyatli bo'lgandagina natija massivini qaytaradi. Birortasi rad etilsa, butun Promise.all shu xato bilan rad etiladi.",
    "walkthrough": [
      "Promise.all barcha Promise larni kutadi.",
      "Bittasi reject bo'lsa, umumiy natija rad etiladi.",
      "Qolganlarning natijasi kutilmaydi.",
      "Hammasini kutish uchun allSettled ishlatiladi."
    ]
  },
  {
    "id": "q-eventloop-1",
    "lessonId": "event-loop",
    "topic": "Event loop",
    "level": "o'rta",
    "question": "Chiqish tartibi qanday?",
    "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");",
    "options": [
      "A, B, C, D",
      "A, D, B, C",
      "A, D, C, B",
      "A, C, D, B"
    ],
    "answer": 2,
    "explain": "Sinxron A va D avval chiqadi. Keyin mikrovazifa C, oxirida makrovazifa B. Tartib: A, D, C, B.",
    "walkthrough": [
      "A va D sinxron bajariladi.",
      "Promise.then mikrovazifa navbatiga qo'yildi.",
      "setTimeout makrovazifa navbatiga qo'yildi.",
      "Stack bo'shagach: C, keyin B."
    ]
  },
  {
    "id": "q-eventloop-2",
    "lessonId": "event-loop",
    "topic": "Event loop",
    "level": "qiyin",
    "question": "Mikrovazifa ichida qo'shilgan mikrovazifa qachon bajariladi?",
    "code": "Promise.resolve().then(() => {\n  console.log(\"1\");\n  Promise.resolve().then(() => console.log(\"2\"));\n});\nsetTimeout(() => console.log(\"3\"), 0);",
    "options": [
      "1, 3, 2",
      "1, 2, 3",
      "3, 1, 2",
      "1, 2 yoki 3 tasodifiy"
    ],
    "answer": 1,
    "explain": "Event loop makrotaskka o'tishdan oldin butun mikrovazifa navbatini bo'shatadi. Shuning uchun 2 ham 3 dan oldin chiqadi.",
    "walkthrough": [
      "Birinchi mikrovazifa 1 ni chiqaradi.",
      "U ichida yangi mikrovazifa qo'shiladi.",
      "Event loop uni ham shu navbatda bajaradi: 2.",
      "Faqat keyin makrotask: 3."
    ]
  },
  {
    "id": "q-eventloop-3",
    "lessonId": "event-loop",
    "topic": "Event loop",
    "level": "oson",
    "question": "setTimeout(fn, 0) darhol bajariladimi?",
    "options": [
      "Ha, darhol",
      "Yo'q, makrovazifa navbatiga qo'yiladi",
      "Faqat Promise bo'lmasa",
      "Faqat brauzerda"
    ],
    "answer": 1,
    "explain": "0 minimal kutish vaqtini bildiradi, lekin callback darhol chaqirilmaydi: u makrovazifa sifatida navbatga qo'yilib, sinxron kod va mikrovazifalardan keyin olinadi.",
    "walkthrough": [
      "setTimeout callback makrotask hisoblanadi.",
      "Hozirgi stack tugaguncha kutadi.",
      "Mikrovazifalar ham avval bajariladi.",
      "Shuning uchun 0 ham \"keyincha\" degani."
    ]
  },
  {
    "id": "q-dom-1",
    "lessonId": "dom-basics",
    "topic": "DOM",
    "level": "oson",
    "question": "querySelector topmasa nima qaytaradi?",
    "options": [
      "undefined",
      "null",
      "false",
      "Xato"
    ],
    "answer": 1,
    "explain": "querySelector mos element topmasa null qaytaradi. Shuning uchun ishlatishdan oldin tekshirish yoki optional chaining kerak.",
    "walkthrough": [
      "querySelector bitta element yoki null qaytaradi.",
      "Topilmasa null.",
      "el.textContent yozishdan oldin if (el) tekshirish kerak.",
      "To'g'ri javob: null."
    ]
  },
  {
    "id": "q-dom-2",
    "lessonId": "dom-basics",
    "topic": "DOM",
    "level": "o'rta",
    "question": "Foydalanuvchi kiritgan matnni qaysi xususiyat bilan qo'yish xavfsiz?",
    "options": [
      "innerHTML",
      "textContent",
      "outerHTML",
      "insertAdjacentHTML"
    ],
    "answer": 1,
    "explain": "textContent matn sifatida qo'yadi va HTML pars qilmaydi. innerHTML kiritilgan <script> yoki boshqa belgilarni HTML sifatida bajarishi mumkin (XSS).",
    "walkthrough": [
      "innerHTML kiritilgan satrni HTML deb pars qiladi.",
      "Bu XSS xavfiga olib keladi.",
      "textContent faqat matn qo'yadi, xavfsiz.",
      "To'g'ri javob: textContent."
    ]
  },
  {
    "id": "q-dom-3",
    "lessonId": "dom-basics",
    "topic": "DOM",
    "level": "o'rta",
    "question": "data-user-id atributi qanday o'qiladi?",
    "options": [
      "el.data.userId",
      "el.dataset.userId",
      "el.getAttribute(\"dataset.userId\")",
      "el.dataset.user-id"
    ],
    "answer": 1,
    "explain": "data-* atributlari element.dataset obyektida saqlanadi. data-user-id → dataset.userId (kamelCase).",
    "walkthrough": [
      "data-user-id=\"7\" atributi bor.",
      "element.dataset.userId → \"7\".",
      "data-user-name → dataset.userName.",
      "To'g'ri javob: el.dataset.userId."
    ]
  },
  {
    "id": "q-functions-5",
    "lessonId": "functions",
    "topic": "Funksiyalar",
    "level": "oson",
    "question": "map va forEach farqi nima?",
    "options": [
      "map yangi massiv qaytaradi, forEach esa yo'q",
      "Ikkalasi ham yangi massiv qaytaradi",
      "forEach yangi massiv qaytaradi, map esa yo'q",
      "Ikkalasi ham asl massivni o'zgartiradi"
    ],
    "answer": 0,
    "explain": "map har element natijasidan yangi massiv yaratadi. forEach faqat har element uchun callback chaqiradi va hech narsa qaytarmaydi (undefined).",
    "walkthrough": [
      "[1,2].map(x=>x*2) → [2,4].",
      "[1,2].forEach(x=>x*2) → undefined.",
      "forEach yon ta'sir (console.log) uchun ishlatiladi.",
      "To'g'ri javob: birinchi variant."
    ]
  },
  {
    "id": "q-recursion-1",
    "lessonId": "recursion",
    "topic": "Rekursiya",
    "level": "o'rta",
    "question": "Bu funksiya nima chiqaradi?",
    "code": "function f(n) {\n  if (n === 0) return 0;\n  return n + f(n - 1);\n}\nconsole.log(f(4));",
    "options": [
      "4",
      "10",
      "0",
      "RangeError"
    ],
    "answer": 1,
    "explain": "4 + 3 + 2 + 1 + 0 = 10. Har qadam n kamayadi, n=0 da bazis ishlaydi.",
    "walkthrough": [
      "f(4) → 4 + f(3).",
      "f(3) → 3 + f(2).",
      "f(2) → 2 + f(1), f(1) → 1 + f(0).",
      "f(0) → 0; jami 10."
    ]
  },
  {
    "id": "q-debounce-1",
    "lessonId": "debounce-throttle",
    "topic": "Debounce / Throttle",
    "level": "o'rta",
    "question": "Qidirish maydoni uchun qaysi usul to‘g‘ri?",
    "options": [
      "Throttle",
      "Debounce",
      "Ikkalasi ham bir xil",
      "Hech biri"
    ],
    "answer": 1,
    "explain": "Debounce foydalanuvchi yozishni to‘xtatgandan keyin bajariladi: faqat oxirgi matn bo‘yicha bitta so‘rov yuboriladi.",
    "walkthrough": [
      "Har harfda so‘rov yuborish samarasiz.",
      "Debounce oldingi timerni bekor qilib, yangisini qo‘yadi.",
      "Faqat to‘xtagandan keyin bajariladi.",
      "Scroll uchun esa throttle ishlatiladi."
    ]
  },
  {
    "id": "q-debounce-2",
    "lessonId": "debounce-throttle",
    "topic": "Debounce / Throttle",
    "level": "qiyin",
    "question": "Debounce ichida nima uchun clearTimeout kerak?",
    "options": [
      "Timer tezlashtirish uchun",
      "Oldingi rejalashtirilgan chaqiruvni bekor qilish uchun",
      "Xatolarni tutish uchun",
      "Bu shart emas"
    ],
    "answer": 1,
    "explain": "Har yangi chaqiruvda oldingi timer bekor qilinadi. Aks holda har bir harf uchun alohida so‘rov yuborilar edi.",
    "walkthrough": [
      "Har chaqiruvda yangi setTimeout qo‘yiladi.",
      "clearTimeout oldingisini o‘chiradi.",
      "Faqat oxirgi timer tirik qoladi.",
      "Natija: bitta chaqiruv."
    ]
  },
  {
    "id": "q-currying-1",
    "lessonId": "currying",
    "topic": "Currying",
    "level": "o'rta",
    "question": "Natija nima?",
    "code": "const f = a => b => a + b;\nconsole.log(f(2)(3));",
    "options": [
      "5",
      "NaN",
      "function",
      "Xato"
    ],
    "answer": 0,
    "explain": "f(2) a=2 ni saqlab, b ni oladigan funksiyani qaytaradi. f(2)(3) = 2+3 = 5.",
    "walkthrough": [
      "f(2) → a = 2, keyingi funksiya qaytarildi.",
      "Unga 3 berildi: b = 3.",
      "2 + 3 = 5.",
      "Bu currying shakli."
    ]
  },
  {
    "id": "q-memo-1",
    "lessonId": "memoization",
    "topic": "Memoization",
    "level": "o'rta",
    "question": "Memoization qachon xavfsiz?",
    "options": [
      "Har qanday funksiyada",
      "Faqat sof (pure) funksiyalarda",
      "Faqat async funksiyalarda",
      "Faqat rekursiv funksiyalarda"
    ],
    "answer": 1,
    "explain": "Bir xil argumentga doim bir xil natija qaytaradigan sof funksiyalarni keshlash xavfsiz. Date.now() kabi funksiyalarni keshlash noto‘g‘ri.",
    "walkthrough": [
      "Kesh argument bo‘yicha natijani saqlaydi.",
      "Agar natija vaqt yoki holatga bog‘liq bo‘lsa, eski natija qaytariladi.",
      "Sof funksiyada bunday muammo yo‘q.",
      "To‘g‘ri javob: faqat sof funksiyalar."
    ]
  },
  {
    "id": "q-symbol-1",
    "lessonId": "symbol-bigint",
    "topic": "Symbol / BigInt",
    "level": "o'rta",
    "question": "Natijalar qanday?",
    "code": "console.log(Symbol(\"a\") === Symbol(\"a\"));\nconsole.log(1n === 1);\nconsole.log(1n == 1);",
    "options": [
      "false, false, true",
      "true, false, true",
      "false, true, true",
      "false, false, false"
    ],
    "answer": 0,
    "explain": "Har Symbol noyob. 1n va 1 turlari farq qiladi (=== false), lekin == da moslashtiriladi (true).",
    "walkthrough": [
      "Symbol(\"a\") ikki xil obyekt emas, ikki xil noyob qiymat → false.",
      "1n === 1 → tur farqi → false.",
      "1n == 1 → qiymat teng → true.",
      "To‘g‘ri javob: false, false, true."
    ]
  },
  {
    "id": "q-weakmap-1",
    "lessonId": "weakmap-weakset",
    "topic": "WeakMap",
    "level": "qiyin",
    "question": "WeakMap ning asosiy xususiyati nima?",
    "options": [
      "Kalit ixtiyoriy tur bo‘ladi",
      "size bor va iteratsiya qilinadi",
      "Obyekt yo‘qolsa, yozuv avtomatik o‘chadi",
      "Faqat string kalit ishlatadi"
    ],
    "answer": 2,
    "explain": "WeakMap obyektga zaif bog‘lanish qiladi: obyekt boshqa joyda ishlatilmasa, chiqindi yig‘uvchi uni va yozuvni o‘chiradi.",
    "walkthrough": [
      "Kalit faqat obyekt bo‘ladi.",
      "size va iteratsiya yo‘q.",
      "Zaif bog‘lanish xotira sizishining oldini oladi.",
      "To‘g‘ri javob: uchinchi variant."
    ]
  },
  {
    "id": "q-descriptor-1",
    "lessonId": "object-descriptors",
    "topic": "Descriptor",
    "level": "o'rta",
    "question": "Object.freeze nima qiladi?",
    "options": [
      "Faqat yangi kalit qo‘shishni taqiqlaydi",
      "Barcha xususiyatlarni o‘zgartirish va o‘chirishni taqiqlaydi",
      "Chuqur nusxa yaratadi",
      "Faqat o‘qish uchun yangi obyekt qaytaradi"
    ],
    "answer": 1,
    "explain": "freeze mavjud xususiyatlarni yozish va o‘chirishdan qulflaydi, lekin yuzaki: ichki obyektlar o‘zgarishi mumkin.",
    "walkthrough": [
      "freeze obyektning o‘z xususiyatlarini qulflaydi.",
      "Yangi qo‘shish ham, o‘chirish ham, o‘zgartirish ham ishlamaydi.",
      "Lekin ichki obyektlar o‘zgaradi.",
      "To‘g‘ri javob: ikkinchi variant."
    ]
  },
  {
    "id": "q-combinators-1",
    "lessonId": "promise-combinators",
    "topic": "Promise kombinatorlari",
    "level": "qiyin",
    "question": "Qaysi kombinator hamma natijalarni, shu jumladan xatolarni ham kutadi?",
    "options": [
      "Promise.all",
      "Promise.race",
      "Promise.allSettled",
      "Promise.any"
    ],
    "answer": 2,
    "explain": "Promise.allSettled barcha Promise larning bajarilishini kutadi va har birining holatini qaytaradi, xatoda rad etilmaydi.",
    "walkthrough": [
      "all bitta xatoda rad etiladi.",
      "race birinchisi tugaganda tugaydi.",
      "any birinchi muvaffaqiyatni oladi.",
      "allSettled hammasini kutib holatlarni beradi."
    ]
  },
  {
    "id": "q-combinators-2",
    "lessonId": "promise-combinators",
    "topic": "Promise kombinatorlari",
    "level": "o'rta",
    "question": "Timeout uchun qaysi kombinator qulay?",
    "options": [
      "Promise.all",
      "Promise.race",
      "Promise.allSettled",
      "Promise.any"
    ],
    "answer": 1,
    "explain": "Promise.race birinchisi tugagan natijani qaytaradi. Vaqt tugashini rad etuvchi Promise bilan birga berilsa, so‘rov uzoq kutsa xato chiqadi.",
    "walkthrough": [
      "Timeout Promise ma’lum vaqtdan keyin rad etiladi.",
      "race ikki Promise ni solishtiradi.",
      "Qaysi birinchi tugasa, shuni qaytaradi.",
      "Shuning uchun timeout ishlaydi."
    ]
  },
  {
    "id": "q-node-1",
    "lessonId": "node-basics",
    "topic": "Node.js",
    "level": "o'rta",
    "question": "CommonJS va ESM farqi nima?",
    "options": [
      "CommonJS require/module.exports, ESM import/export",
      "Ikkalari bir xil, faqat nomi farq",
      "ESM faqat brauzerda ishlaydi",
      "CommonJS asinxron, ESM sinxron"
    ],
    "answer": 0,
    "explain": "CommonJS require() va module.exports ishlatadi, sinxron. ESM import/export ishlatadi va asinxron yuklanadi.",
    "walkthrough": [
      "CommonJS: const x = require(\"./x\").",
      "ESM: import x from \"./x.js\".",
      "Bir faylda ikkalasini aralashtirish xato.",
      "To'g'ri javob: birinchi variant."
    ]
  },
  {
    "id": "q-node-2",
    "lessonId": "node-fs-path",
    "topic": "Node.js fs",
    "level": "o'rta",
    "question": "Katta faylni o'qish uchun qaysi usul yaxshi?",
    "options": [
      "readFileSync",
      "readFile callback",
      "createReadStream",
      "JSON.parse"
    ],
    "answer": 2,
    "explain": "createReadStream faylni qism-qism o‘qiydi va xotirani tejaydi. readFileSync/readFile butun faylni xotiraga oladi.",
    "walkthrough": [
      "Katta faylni to'liq o'qish xotira tugashiga olib keladi.",
      "Stream qism-qism ishlaydi.",
      "pipe bilan yozish oqimiga ulash mumkin.",
      "To'g'ri javob: createReadStream."
    ]
  },
  {
    "id": "q-node-3",
    "lessonId": "node-streams",
    "topic": "Stream",
    "level": "qiyin",
    "question": "Stream da error hodisasini tinglamasang nima bo'ladi?",
    "options": [
      "Hech narsa",
      "Jarayon o'chib qolishi mumkin",
      "Avtomatik qayta urinadi",
      "Xato logga yoziladi"
    ],
    "answer": 1,
    "explain": "Stream dagi xato \"error\" hodisasi sifatida chiqadi. Uni tinglamasang, xato ishlov berilmagan holda jarayonni to‘xtatadi.",
    "walkthrough": [
      "Stream xato berganda error hodisasi chiqaradi.",
      "Agar tinglovchi yo'q bo'lsa, xato tarqaladi.",
      "Natija: jarayon o'chishi mumkin.",
      "Shuning uchun stream.on(\"error\", ...) kerak."
    ]
  },
  {
    "id": "q-pattern-1",
    "lessonId": "design-patterns",
    "topic": "Patternlar",
    "level": "o'rta",
    "question": "Singleton pattern nima kafolatlaydi?",
    "options": [
      "Har chaqirishda yangi obyekt",
      "Faqat bitta obyekt mavjudligi",
      "Obyektlar tartibli yaratiladi",
      "Barcha metodlar static bo'ladi"
    ],
    "answer": 1,
    "explain": "Singleton bir klassdan faqat bitta obyekt yaratilishini ta’minlaydi: keyingi chaqirishlarda shu obyekt qaytariladi.",
    "walkthrough": [
      "Birinchi new da obyekt yaratiladi.",
      "Keyingi new da mavjud obyekt qaytariladi.",
      "a === true bo'ladi.",
      "To'g'ri javob: ikkinchi variant."
    ]
  },
  {
    "id": "q-pattern-2",
    "lessonId": "design-patterns",
    "topic": "Patternlar",
    "level": "o'rta",
    "question": "Observer pattern qayerda ishlatiladi?",
    "options": [
      "Faqat hisoblashda",
      "Holat o'zgarishini bir nechta kuzatuvchiga yetkazishda",
      "Fayl o'qishda",
      "Massiv tartiblashda"
    ],
    "answer": 1,
    "explain": "Observer — obyekt holati o‘zgarganda bog‘langan kuzatuvchilarga xabar berish. EventEmitter va reaktiv tizimlar shu pattern asosida.",
    "walkthrough": [
      "Kuzatuvchilar ro'yxatga olinadi.",
      "Holat o'zgarganda hammasiga xabar yuboriladi.",
      "Bu EventEmitter asosi.",
      "To'g'ri javob: ikkinchi variant."
    ]
  },
  {
    "id": "q-testing-1",
    "lessonId": "testing-basics",
    "topic": "Testing",
    "level": "oson",
    "question": "toBe va toEqual farqi nima?",
    "options": [
      "toBe qat'iy tenglik, toEqual tarkibni solishtiradi",
      "Ikkalasi bir xil",
      "toBe faqat sonlar uchun, toEqual faqat string",
      "toEqual faqat obyekt uchun, toBe faqat massiv"
    ],
    "answer": 0,
    "explain": "toBe Object.is bilan qat’iy solishtiradi (reference ham muhim). toEqual obyekt/massiv tarkibini solishtiradi.",
    "walkthrough": [
      "expect({a:1}).toBe({a:1}) → false (ikki obyekt).",
      "expect({a:1}).toEqual({a:1}) → true (tarkib bir xil).",
      "Primitive qiymatlarda ikkalasi ko'pincha bir xil natija beradi.",
      "To'g'ri javob: birinchi variant."
    ]
  }
];

window.codeLabs = [
  {
    "id": "lab-1",
    "title": "1-misol: qiymat o'zgaradimi?",
    "hint": "Avval o'zgaruvchining turiga (primitive yoki obyekt) qara.",
    "lines": [
      {
        "code": "let son = 1;",
        "note": "Primitive qiymat. son = 2 qilsak yangi qiymat yoziladi."
      },
      {
        "code": "const obyekt = { x: 1 };",
        "note": "const faqat biriktirishni qulflaydi, ichi ochiq."
      },
      {
        "code": "obyekt.x = 2;",
        "note": "Bu ishlaydi: obyekt ichi o'zgaradi."
      },
      {
        "code": "// obyekt = { x: 3 };",
        "note": "Bu satr ochilsa TypeError: yangi obyekt biriktirib bo'lmaydi."
      },
      {
        "code": "console.log(son, obyekt.x);",
        "note": "Natija: 1 2"
      }
    ],
    "takeaway": "O'qish qoidasi: const ko'rsang \"ichi o'zgarishi mumkinmi?\" deb so'ra. Primitive bo'lsa yo'q, obyekt bo'lsa ha."
  },
  {
    "id": "lab-2",
    "title": "2-misol: scope chain qaerda to'xtaydi?",
    "hint": "Har bir console.log uchun \"bu nom shu blockdami?\" deb boshla.",
    "lines": [
      {
        "code": "const ism = \"Global\";",
        "note": "1-qavat: global nom."
      },
      {
        "code": "function salom() {",
        "note": "Funksiya scope boshlanadi."
      },
      {
        "code": "  const ism = \"Mahalliy\";",
        "note": "2-qavat: ichki ism tashqaridagini soyada qoldiradi."
      },
      {
        "code": "  if (true) {",
        "note": "3-qavat: block boshlanadi, lekin ichida ism yo'q."
      },
      {
        "code": "    console.log(ism);",
        "note": "Qidiruv: block → funksiya → topildi. Natija: Mahalliy"
      },
      {
        "code": "  }",
        "note": "Block tugadi."
      },
      {
        "code": "}",
        "note": "Funksiya tugadi."
      },
      {
        "code": "salom();",
        "note": "Chaqirish natijasi: Mahalliy"
      }
    ],
    "takeaway": "Nom qidirish doim ichkaridan tashqariga. Birinchi topilgan nom yutadi (shadowing)."
  },
  {
    "id": "lab-3",
    "title": "3-misol: == bilan tuzoq",
    "hint": "Har bir taqqoslashda turlarni yozib chiq, keyin coercion qoidasini qo'llan.",
    "lines": [
      {
        "code": "console.log(\"5\" == 5);",
        "note": "string → number: 5 == 5 → true."
      },
      {
        "code": "console.log(\"5\" === 5);",
        "note": "Tur farqi → false. === hech qachon o'zgartirmaydi."
      },
      {
        "code": "console.log([] == false);",
        "note": "[] → \"\" → 0; false → 0 → true. Kutilmagan, lekin qoida shunday."
      },
      {
        "code": "console.log(null == undefined);",
        "note": "Faqat bu ikki bir-biriga == teng → true."
      },
      {
        "code": "console.log(NaN === NaN);",
        "note": "NaN hech narsaga teng emas, hatto o'ziga ham → false."
      }
    ],
    "takeaway": "Intervyuda === ishlat. == so'ralsa, avval tur o'zgarishini og'zaki aytib ber."
  },
  {
    "id": "lab-4",
    "title": "4-misol: TDZ qayerda boshlanadi?",
    "hint": "let/const bo'lgan blockning boshidan deklaratsiyagacha bo'lgan oraliqni belgila.",
    "lines": [
      {
        "code": "let a = 1;",
        "note": "Tashqi a tayyor."
      },
      {
        "code": "{",
        "note": "Block boshlanadi. Ichkarida let a borligi uchun yangi a shu yerdan \"band\"."
      },
      {
        "code": "  // console.log(a);",
        "note": "Agar ochilsa: ReferenceError. Tashqi 1 o'qilmaydi, ichki a hali TDZ da."
      },
      {
        "code": "  let a = 2;",
        "note": "TDZ tugadi, ichki a = 2."
      },
      {
        "code": "  console.log(a);",
        "note": "Natija: 2"
      },
      {
        "code": "}",
        "note": "Block tugadi."
      },
      {
        "code": "console.log(a);",
        "note": "Tashqi a yana ko'rinadi. Natija: 1"
      }
    ],
    "takeaway": "TDZ block boshidan boshlanadi, satrdan emas. Ichki nom bo'lsa, tashqariga qidirilmaydi."
  },
  {
    "id": "lab-5",
    "title": "5-misol: reference bilan nusxa farqi",
    "hint": "Funksiyaga obyekt berilganda nima nusxalanishini esla.",
    "lines": [
      {
        "code": "function o'zgartir(obj) {",
        "note": "obj parametr — asl obyektga ishora qiymatining nusxasi."
      },
      {
        "code": "  obj.x = 99;",
        "note": "Asl obyekt ichi o'zgaradi, chunki bir xil obyekt."
      },
      {
        "code": "  obj = { x: 0 };",
        "note": "Faqat lokal ishora yangi obyektga buriladi, asl obyektga ta'sir qilmaydi."
      },
      {
        "code": "}",
        "note": ""
      },
      {
        "code": "const user = { x: 1 };",
        "note": "Asl obyekt."
      },
      {
        "code": "o'zgartir(user);",
        "note": "Chaqirish."
      },
      {
        "code": "console.log(user.x);",
        "note": "Natija: 99 (0 emas)."
      }
    ],
    "takeaway": "Funksiyaga obyekt berganda ichki o'zgarish tashqariga ko'rinadi; parametrni qayta biriktirish esa ko'rinmaydi."
  },
  {
    "id": "lab-6",
    "title": "6-misol: event loop tartibini o'qish",
    "hint": "Avval sinxron satrlarni ajrat, keyin .then, oxirida setTimeout.",
    "lines": [
      {
        "code": "console.log(\"A\");",
        "note": "Sinxron → darhol A chiqadi."
      },
      {
        "code": "setTimeout(() => console.log(\"B\"), 0);",
        "note": "Makrovazifa navbatiga qo'yildi, hali bajarilmaydi."
      },
      {
        "code": "Promise.resolve().then(() => console.log(\"C\"));",
        "note": "Mikrovazifa navbatiga qo'yildi."
      },
      {
        "code": "console.log(\"D\");",
        "note": "Sinxron → darhol D chiqadi."
      },
      {
        "code": "// Natija: A, D, C, B",
        "note": "Sinxron → mikro → makro qoidasi."
      }
    ],
    "takeaway": "Kodni o'qishda avval \"bu satr darhol bajariladimi yoki navbatgami?\" deb so'ra."
  },
  {
    "id": "lab-7",
    "title": "7-misol: this ni kuzatish",
    "hint": "Har bir chaqirishda \"kim chaqiryapti?\" deb so'ra.",
    "lines": [
      {
        "code": "const user = {",
        "note": "Obyekt yaratilyapti."
      },
      {
        "code": "  ism: \"Ali\",",
        "note": "Oddiy xususiyat."
      },
      {
        "code": "  salom() { return this.ism; }",
        "note": "Oddiy metod: this chaqirgan obyekt bo'ladi."
      },
      {
        "code": "};",
        "note": ""
      },
      {
        "code": "console.log(user.salom());",
        "note": "user chaqirdi → this = user → \"Ali\"."
      },
      {
        "code": "const f = user.salom;",
        "note": "Funksiya ajratildi, bog'lanish yo'q."
      },
      {
        "code": "// f();",
        "note": "Ochilsa: strict mode da this = undefined → TypeError."
      }
    ],
    "takeaway": "this metod qayerda yozilganiga emas, qanday chaqirilganiga bog'liq."
  },
  {
    "id": "lab-8",
    "title": "8-misol: massiv metodlarini farqlash",
    "hint": "Har bir satrda \"asl massiv o'zgaradimi yoki yangi massivmi?\" deb belgila.",
    "lines": [
      {
        "code": "const a = [3, 1, 2];",
        "note": "Asl massiv."
      },
      {
        "code": "const b = a.map(x => x * 2);",
        "note": "Yangi massiv [6,2,4], a o'zgarmadi."
      },
      {
        "code": "const c = a.filter(x => x > 1);",
        "note": "Yangi massiv [3,2], a o'zgarmadi."
      },
      {
        "code": "a.sort((x, y) => x - y);",
        "note": "Asl massiv o'zgaradi → a = [1,2,3]."
      },
      {
        "code": "console.log(a, b, c);",
        "note": "[1,2,3], [6,2,4], [3,2]"
      }
    ],
    "takeaway": "map/filter yangi beradi; sort/reverse/push/splice aslni o'zgartiradi."
  },
  {
    "id": "lab-9",
    "title": "9-misol: debounce kodini o'qish",
    "hint": "timer o'zgaruvchisi chaqiruvlar orasida saqlanishini kuzat.",
    "lines": [
      {
        "code": "function debounce(fn, ms) {",
        "note": "Kelajakda chaqirish uchun funksiya yaratiladi."
      },
      {
        "code": "  let timer;",
        "note": "Closure: bu o'zgaruvchi barcha chaqiruvlar orasida yashaydi."
      },
      {
        "code": "  return (...args) => {",
        "note": "Har chaqirishda quyidagi kod ishlaydi."
      },
      {
        "code": "    clearTimeout(timer);",
        "note": "Oldingi rejalashtirilgan chaqiruv bekor qilinadi."
      },
      {
        "code": "    timer = setTimeout(() => fn(...args), ms);",
        "note": "Yangi timer qo'yiladi, faqat oxirgisi tirik qoladi."
      },
      {
        "code": "  };",
        "note": ""
      },
      {
        "code": "}",
        "note": ""
      }
    ],
    "takeaway": "Debounce = closure + clearTimeout + setTimeout. Oxirgi chaqiruvgina bajariladi."
  },
  {
    "id": "lab-10",
    "title": "10-misol: Promise.allSettled natijasi",
    "hint": "Har bir Promise holatini alohida o'qi.",
    "lines": [
      {
        "code": "const natijalar = await Promise.allSettled([",
        "note": "Barchasini kutamiz, xatoda to'xtamaymiz."
      },
      {
        "code": "  Promise.resolve(1),",
        "note": "Bajarildi: status fulfilled, value 1."
      },
      {
        "code": "  Promise.reject(\"xato\")",
        "note": "Rad etildi: status rejected, reason \"xato\"."
      },
      {
        "code": "]);",
        "note": ""
      },
      {
        "code": "console.log(natijalar[0].status); // fulfilled",
        "note": "Birinchi natija holati."
      },
      {
        "code": "console.log(natijalar[1].reason); // xato",
        "note": "Ikkinchisining xato sababi."
      }
    ],
    "takeaway": "allSettled hech qachon rad etilmaydi: har bir elementda status va value/reason bor."
  }
];

// 10 bosqichli o‘quv tartibi. Mavzu ID lari eski belgilar bilan mos qoladi.
window.lessons.push(...[
  {
    "id": "js-intro",
    "title": "JavaScript nima va qanday ishlaydi",
    "question": "Brauzer, console va script nima? Birinchi kodni qayerga yozaman?",
    "explanation": "JavaScript — kompyuterga ketma-ket buyruqlar berish uchun dasturlash tili. Saytda tugma bosilganda matnni almashtirish, hisoblash va ma’lumot olish kabi ishlarni bajaradi. HTML sahifaning tuzilishini, CSS ko‘rinishini, JavaScript esa harakatini belgilaydi.",
    "sections": [
      {
        "title": "1. Birinchi buyruq",
        "text": "Brauzerda Developer Tools ni ochib, Console bo‘limini tanlang. Kodni yozib Enter bosing. console.log qiymatni konsolga chiqaradi; u sahifaning o‘ziga matn yozmaydi. // dan keyingi qism izoh bo‘lib, bajarilmaydi.",
        "code": "console.log(\"Salom, JavaScript!\"); // Salom, JavaScript!\nconsole.log(2 + 3); // 5",
        "note": "Console oxirida undefined ham ko‘rinishi mumkin: bu console.log chaqirig‘ining qaytish qiymati, xato emas."
      },
      {
        "title": "2. HTML ichiga ulash",
        "text": "Quyidagi matnni index.html fayliga yozib, brauzerda oching. script ichidagi kod JavaScript sifatida bajariladi. Natijani Console bo‘limida ko‘rasiz.",
        "code": "<!doctype html>\n<html lang=\"uz\">\n<body>\n  <h1>Birinchi sahifam</h1>\n  <script>\n    console.log(\"Sahifa ochildi\");\n  </script>\n</body>\n</html>"
      },
      {
        "title": "3. Alohida JavaScript fayli",
        "text": "Kattaroq loyiha uchun kodni app.js fayliga yozing. HTML dagi src shu faylning yo‘lini bildiradi. defer tashqi skriptni HTML tahlili tugagandan keyin ishga tushiradi.",
        "code": "<!-- index.html ning head qismiga -->\n<script src=\"app.js\" defer></script>\n\n// app.js fayliga alohida yozing:\nconsole.log(\"Alohida fayl ishladi\");",
        "note": "HTML va JS misollarini tegishli alohida fayllarga yozing. src bilan ulangan faylda script teglari bo‘lmaydi."
      },
      {
        "title": "4. Kodni satrma-satr o‘qish",
        "text": "Oddiy buyruqlar yuqoridan pastga bajariladi. Matn qo‘shtirnoqda, son esa qo‘shtirnoqsiz yoziladi. Xato ko‘rsangiz, konsoldagi fayl va satrni tekshiring.",
        "code": "console.log(\"Boshladik\");\nconsole.log(10 - 4);\nconsole.log(\"Tugatdik\");",
        "note": "Natija: Boshladik, 6, Tugatdik. O‘zgaruvchilarni keyingi mavzuda o‘rganamiz."
      }
    ],
    "takeaway": "Kodni konsolda sinang, natijani kuzating va nima uchun shunday chiqqanini tushuntiring. Brauzer va Node.js bir xil tilni turli muhitlarda bajaradi.",
    "exercise": "Konsolda ismingizni, 7 + 8 natijasini va “Men JavaScript o‘rganyapman” matnini uchta alohida console.log bilan chiqaring. Keyin kodni app.js ga ko‘chiring.",
    "resources": [
      {
        "title": "MDN: JavaScript bilan boshlash",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
      }
    ]
  },
  {
    "id": "data-types",
    "fullTextDefault": true,
    "title": "Ma’lumot turlari: primitive va reference",
    "question": "Qiymat nima? Matn, son va rost/yolg‘on qanday saqlanadi? Nega ba’zi nusxalar bir-biriga ta’sir qiladi?",
    "explanation": "Bu darsni noldan boshlaymiz. Avval qiymat va o‘zgaruvchi nima ekanini ko‘ramiz. Keyin matn, son, rost/yolg‘on hamda qiymat yo‘qligini o‘rganamiz. Shundan so‘ng primitive va reference so‘zlarini sodda misollar bilan tushunamiz. Har qadamdagi kodni alohida brauzer konsolida sinab ko‘ring: avval nima chiqishini taxmin qiling, keyin natijani tekshiring.",
    "sections": [
      {
        "title": "1. Qiymat va o‘zgaruvchi nima?",
        "text": "Dastur ma’lumot bilan ishlaydi. 20 — son qiymat, \"Ali\" — matn qiymat. O‘zgaruvchi shu qiymatga nom berishga yordam beradi. Quyidagi satrni o‘ngdan tushuning: 20 qiymatini yosh nomi bilan saqlaymiz.",
        "code": "let yosh = 20;",
        "note": "let — o‘zgaruvchi yaratish uchun yoziladi.\nyosh — biz tanlagan nom.\n= — o‘ngdagi qiymatni chapdagi o‘zgaruvchiga berish.\n20 — saqlanayotgan qiymat.\n; — shu buyruq tugaganini bildiradi. = bu yerda matematik tenglikni tekshirish emas."
      },
      {
        "title": "2. Qiymatni qanday ko‘ramiz?",
        "text": "console.log qiymatni brauzerning Console oynasiga chiqaradi. Qavs ichiga o‘zgaruvchining nomini bersak, uning ichidagi qiymat ko‘rinadi. Qo‘shtirnoq bilan yozsak, nomning o‘zi matn bo‘lib chiqadi.",
        "code": "let yosh = 20;\n\nconsole.log(yosh);   // 20\nconsole.log(\"yosh\"); // \"yosh\"",
        "note": "Birinchi console.log yosh nomidagi qiymatni o‘qidi. Ikkinchisi esa qo‘shtirnoqdagi tayyor matnni chiqardi. Misollarni bir konsolda qayta sinaganda let nomini qayta e’lon qilish xatosi chiqsa, sahifani yangilab sinang yoki boshqa nom tanlang."
      },
      {
        "title": "3. String — matn qiymat",
        "text": "String matnni bildiradi. Ism, shahar va yozuvlar matn bo‘lishi mumkin. Matnni bir yoki ikki qo‘shtirnoq ichida yozamiz. Raqamni ham qo‘shtirnoqqa olsak, u matn bo‘ladi.",
        "code": "let ism = \"Ali\";\nlet shahar = 'Samarqand';\nlet yozuv = \"20\";\n\nconsole.log(ism);    // \"Ali\"\nconsole.log(shahar); // \"Samarqand\"",
        "note": "\"20\" ko‘rinishida raqamlar yozilgan bo‘lsa ham, qiymatning turi string. Konsolda matn qo‘shtirnoqsiz ko‘rinishi ham mumkin; koddagi qo‘shtirnoqlar matn chegarasini belgilaydi."
      },
      {
        "title": "4. Number — son qiymat",
        "text": "Number hisoblash uchun ishlatiladigan son. Sonni qo‘shtirnoqsiz yozamiz. Butun, kasr va manfiy sonlar number bo‘lishi mumkin. + sonlarni qo‘shadi, lekin string bilan ishlaganda matnlarni birlashtirishi mumkin.",
        "code": "let yosh = 20;\nlet narx = 3.5;\nlet harorat = -5;\n\nconsole.log(yosh + 1); // 21\nconsole.log(\"20\" + 1); // \"201\"",
        "note": "20 + 1 — ikkita son, natija 21.\n\"20\" + 1 — chapda matn bor, + birlashtiradi, natija \"201\".\n20 va \"20\" bir xil turdagi qiymat emas."
      },
      {
        "title": "5. Boolean — rost yoki yolg‘on",
        "text": "Boolean turida faqat ikkita qiymat bor: true — rost, false — yolg‘on. Buni “ha yoki yo‘q” ma’lumoti deb tasavvur qiling. Masalan, foydalanuvchi talaba ekanini yoki chiroq yoqilganini saqlash mumkin.",
        "code": "let talaba = true;\nlet chiroqYoniq = false;\n\nconsole.log(talaba);      // true\nconsole.log(chiroqYoniq); // false",
        "note": "true va false qo‘shtirnoqsiz yoziladi. \"true\" esa boolean emas, to‘rtta harfdan iborat string. Savol: let tayyor = false; dagi qiymat matnmi yoki booleanmi? Javob: boolean."
      },
      {
        "title": "6. undefined va null",
        "text": "O‘zgaruvchini yaratib, unga hali qiymat bermasak, uning qiymati undefined bo‘ladi. null esa ataylab “hozircha qiymat yo‘q” deb belgilash uchun yoziladi.",
        "code": "let javob;\nlet user = null;\n\nconsole.log(javob); // undefined\nconsole.log(user);  // null",
        "note": "undefined — bu misolda qiymat hali berilmagan. null — qiymat yo‘qligi ataylab belgilangan. Ular alohida primitive turlardir."
      },
      {
        "title": "7. Yettita primitive tur",
        "text": "Hozir ko‘rgan string, number, boolean, undefined va null — primitive qiymatlar. Primitive so‘zini “oddiy, o‘zgarmas qiymat” deb tushuning. Jami yettita primitive tur bor. BigInt va Symbol uchun hozircha nomi va nima uchun ishlatilishini bilish yetarli; keyin alohida darslari bor.",
        "table": {
          "headers": [
            "Tur",
            "Misol",
            "Ma’nosi"
          ],
          "rows": [
            [
              "string",
              "\"Ali\"",
              "Matn"
            ],
            [
              "number",
              "20, 3.5",
              "Son"
            ],
            [
              "boolean",
              "true, false",
              "Rost yoki yolg‘on"
            ],
            [
              "undefined",
              "let ism;",
              "Hali qiymat berilmagan"
            ],
            [
              "null",
              "let user = null;",
              "Ataylab qiymat yo‘qligi belgilangan"
            ],
            [
              "bigint",
              "12345678901234567890n",
              "Katta butun son"
            ],
            [
              "symbol",
              "Symbol(\"id\")",
              "Noyob identifikator"
            ]
          ]
        },
        "note": "Primitive qiymatning o‘zini tahrirlamaymiz. let bilan yaratilgan o‘zgaruvchiga esa boshqa qiymat bera olamiz. Buning farqini keyingi qadamdagi a va b misolida ko‘ramiz."
      },
      {
        "title": "8. Primitive qiymatning nusxasi",
        "text": "Primitive qiymatni boshqa o‘zgaruvchiga bersak, qiymat nusxalanadi. Keyin ikkinchi o‘zgaruvchiga boshqa qiymat berish birinchisiga ta’sir qilmaydi.",
        "code": "let a = 5;\nlet b = a;\n\nb = 10;\n\nconsole.log(a); // 5\nconsole.log(b); // 10",
        "note": "1. a ga 5 berildi.\n2. b ga ham 5 qiymati olindi.\n3. b ning qiymati 10 ga almashtirildi.\n4. a o‘zgarishsiz, 5 bo‘lib qoldi. Primitive qiymatning o‘zi o‘zgartirilmadi; b ga yangi qiymat berildi."
      },
      {
        "title": "9. Obyekt: bir nechta ma’lumot birga",
        "text": "Obyekt bir nechta ma’lumotni birlashtiradi. Masalan, bitta odamning ismi va yoshini bitta obyektga joylaymiz. Obyekt ichidagi ism va yosh uning xususiyatlari deyiladi. user.ism yozuvi ism xususiyatini o‘qiydi.",
        "code": "const user = {\n  ism: \"Ali\",\n  yosh: 20\n};\n\nconsole.log(user.ism); // \"Ali\"\nconsole.log(user.yosh); // 20"
      },
      {
        "title": "10. Reference: bitta obyektga ikkita ishora",
        "text": "Reference — obyektga ishora. user va boshqa ni bitta daftarni ko‘rsatayotgan ikkita belgi deb tasavvur qiling. Daftardagi ismni o‘zgartirsak, ikkala belgi bilan ham yangilangan ismni ko‘ramiz. const boshqa = user yozuvi ikkinchi mustaqil obyekt yaratmaydi; ayni obyektga ishora qiymatini nusxalaydi.",
        "code": "const user = { ism: \"Ali\" };\nconst boshqa = user;\n\nboshqa.ism = \"Vali\";\n\nconsole.log(user.ism);   // \"Vali\"\nconsole.log(boshqa.ism); // \"Vali\"",
        "diagram": "user   ───┐\n          ├──→ { ism: \"Vali\" }\nboshqa ───┘",
        "note": "boshqa orqali umumiy obyektning ism xususiyati yangilandi. user ham shu obyektga ishora qilgani uchun yangi qiymatni ko‘radi. const o‘zgaruvchiga boshqa qiymat berishni cheklaydi; obyekt ichidagi xususiyatni o‘zgartirishni cheklamaydi. JavaScript argumentlarni ham qiymat bo‘yicha uzatadi; obyekt uchun shu qiymat reference hisoblanadi."
      },
      {
        "title": "11. Massiv ham obyekt",
        "text": "Massiv — bir nechta qiymatni tartib bilan saqlaydigan obyekt. Massivni = bilan boshqa o‘zgaruvchiga bersak ham ayni massivga ishora nusxalanadi. push oxiriga yangi element qo‘shadi.",
        "code": "const a = [1, 2];\nconst b = a;\n\nb.push(3);\n\nconsole.log(a); // [1, 2, 3]\nconsole.log(b); // [1, 2, 3]",
        "note": "Faqat b nomi orqali o‘zgartirish kiritdik, lekin a va b bitta massivga qarayotgani uchun ikkalasida ham uchta element ko‘rinadi. Funksiyalar ham obyekt hisoblanadi."
      }
    ],
    "takeaway": "String — matn; number — son; boolean — true yoki false. undefined va null qiymat yo‘qligini turlicha bildiradi. Bular primitive qiymatlar. Primitive nusxasiga boshqa qiymat berish asl o‘zgaruvchini o‘zgartirmaydi. Obyekt va massivni = bilan olganda esa bir obyektga reference nusxalanadi: uning ichidagi o‘zgarishni ikkala nom orqali ham ko‘rish mumkin.",
    "exercise": "1. Birinchi console.log dagi a ning qiymati nima?\n2. Ikkinchi console.log dagi x.son ning qiymati nima?\nHar ikkala javobni va sababini o‘zingiz ayting. Keyin pastdagi javobni ochib solishtiring.",
    "resources": [
      {
        "title": "MDN: ma’lumot turlari",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
      }
    ],
    "exerciseCode": "let a = 10;\nlet b = a;\nb = 30;\n\nconst x = { son: 10 };\nconst y = x;\ny.son = 30;\n\nconsole.log(a);     // ?\nconsole.log(x.son); // ?",
    "exerciseAnswer": "Birinchi natija: 10. Ikkinchi natija: 30.\n\na dagi 10 primitive qiymati b ga nusxalandi. b ga 30 berish a ni o‘zgartirmadi.\n\nx va y esa bitta obyektga ishora qiladi. y.son = 30 umumiy obyektning son xususiyatini o‘zgartirdi, shuning uchun x.son ham 30."
  },
  {
    "id": "iife-pure",
    "title": "IIFE va pure function tushunchasi",
    "question": "Darhol chaqiriladigan va sof funksiya qanday ishlaydi?",
    "explanation": "Funksiyalarni endi ikki tomondan ko‘ramiz: qachon chaqirilishi va tashqi holatga ta’siri. IIFE — yaratilishi bilan chaqiriladigan ifoda. Pure function — bir xil argumentlarga bir xil natija berib, tashqi holatni o‘zgartirmaydigan funksiya.",
    "sections": [
      {
        "title": "1. IIFE nima?",
        "text": "Funksiya ifodasini qavs ichiga olib, oxiriga () yozsak darhol chaqiriladi. Ichki o‘zgaruvchi tashqariga chiqmaydi.",
        "code": "(function () {\n  const xabar = \"Bir marta ishladi\";\n  console.log(xabar);\n})();\n// console.log(xabar); // ReferenceError"
      },
      {
        "title": "2. Sof funksiya",
        "text": "Natija faqat argumentlarga bog‘liq. Funksiya tashqi o‘zgaruvchini, berilgan massivni yoki sahifani o‘zgartirmaydi. Hisoblangan qiymat return bilan qaytariladi.",
        "code": "function jami(a, b) {\n  return a + b;\n}\nconsole.log(jami(2, 3)); // 5\nconsole.log(jami(2, 3)); // 5"
      },
      {
        "title": "3. Yon ta’sirni ko‘rish",
        "text": "Tashqi o‘zgaruvchini yangilash — yon ta’sir. Natija har chaqirishda oldingi holatga bog‘liq bo‘ladi. Bunday ishlar ilovada kerak bo‘lishi mumkin, lekin hisoblashni ulardan ajratish tekshirishni osonlashtiradi.",
        "code": "let sanoq = 0;\nfunction oshir() {\n  sanoq += 1;\n  return sanoq;\n}\nconsole.log(oshir()); // 1\nconsole.log(oshir()); // 2"
      },
      {
        "title": "4. Massivni o‘zgartirmasdan natija olish",
        "text": "push kirish massivini o‘zgartiradi. Spread bilan yangi massiv qaytarish tashqi massivni o‘zgartirmaydi. Bu yerda elementlar oddiy sonlar bo‘lgani uchun yuzaki nusxa yetarli.",
        "code": "function qosh(sonlar, son) {\n  return [...sonlar, son];\n}\nconst asl = [1, 2];\nconsole.log(qosh(asl, 3)); // [1, 2, 3]\nconsole.log(asl);         // [1, 2]"
      }
    ],
    "takeaway": "IIFE darhol ishlaydi; pure function tashqi holatni o‘zgartirmaydi. Math.random va hozirgi vaqtga bog‘liq natija odatda sof bo‘lmaydi.",
    "exercise": "Berilgan narx va chegirma foizidan yakuniy narxni hisoblaydigan sof funksiya yozing. Argumentlarni o‘zgartirmasin va tashqaridagi o‘zgaruvchini ishlatmasin.",
    "resources": [
      {
        "title": "MDN: IIFE",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
      }
    ]
  },
  {
    "id": "git-npm",
    "title": "Git va npm asoslari",
    "question": "Loyihani qanday saqlaymiz va paketlar bilan qanday ishlaymiz?",
    "explanation": "Git fayllardagi o‘zgarishlar tarixini yuritadi. npm JavaScript paketlarini o‘rnatish va loyiha buyruqlarini ishga tushirishga yordam beradi. Quyidagi buyruqlar JavaScript konsolida emas, loyiha papkasida ochilgan terminalda bajariladi. Git, Node.js va npm o‘rnatilgan bo‘lishi kerak.",
    "sections": [
      {
        "title": "1. Loyiha va package.json",
        "text": "Alohida papka oching. npm init -y boshlang‘ich package.json yaratadi. Unda loyiha nomi, buyruqlar va paketlar haqidagi ma’lumot turadi.",
        "code": "mkdir js-mashq\ncd js-mashq\nnpm init -y",
        "note": "node --version va npm --version bilan o‘rnatilganini tekshirishingiz mumkin."
      },
      {
        "title": "2. Git bilan holatni ko‘rish",
        "text": "git init shu papkada tarix yuritishni boshlaydi. git status o‘zgargan fayllarni ko‘rsatadi. Faylni index.html nomida yaratgandan keyin uni commitga tayyorlang.",
        "code": "git init -b main\ngit status\ngit add index.html\ngit commit -m \"Birinchi sahifa\"",
        "note": "Commit mahalliy tarixga yoziladi. GitHub’ga yuborish alohida push amalidir. Birinchi commitda Git ism va emailingizni sozlashni so‘rashi mumkin."
      },
      {
        "title": "3. Paket o‘rnatish",
        "text": "npm install paketni o‘rnatadi. --save-dev paket faqat ishlab chiqish vositasi ekanini bildiradi. node_modules o‘rnatilgan fayllar, package-lock.json esa aniq versiyalar va bog‘liqliklarni qayd etadi.",
        "code": "npm install --save-dev --save-exact prettier\nnpx prettier --check index.html",
        "note": "node_modules ni Gitga qo‘shmang: .gitignore fayliga node_modules/ yozing. package.json va package-lock.json ni saqlang."
      },
      {
        "title": "4. Loyiha buyruqlari",
        "text": "package.json ichidagi scripts ga nomlangan buyruq yozish mumkin. Quyidagi JSON bo‘lagi scripts maydoniga tegishli. npm run format uni ishga tushiradi.",
        "code": "\"scripts\": {\n  \"format\": \"prettier --write .\"\n}\n\n# Terminalda:\nnpm run format",
        "note": "Git o‘zgarishlar tarixini saqlaydi; npm run esa buyruq bajaradi. Bu ikkisi bir xil vosita emas."
      }
    ],
    "takeaway": "Terminal buyruqlarini loyiha papkasida bajaring. Commitdan oldin git status va git diff bilan nimalar o‘zgarganini ko‘ring.",
    "exercise": "js-mashq papkasida package.json va index.html yarating. .gitignore ga node_modules/ kiriting. git status bilan fayllarni ko‘rib, birinchi commitni yarating.",
    "resources": [
      {
        "title": "npm: package.json",
        "url": "https://docs.npmjs.com/creating-a-package-json-file/"
      },
      {
        "title": "Git qo‘llanmasi",
        "url": "https://git-scm.com/docs/gittutorial"
      }
    ]
  },
  {
    "id": "dom-forms",
    "title": "DOM elementlar yaratish va formalar bilan ishlash",
    "question": "Forma qiymatini qanday o‘qiyman va yangi element qo‘shaman?",
    "explanation": "DOM — brauzer HTML sahifani ifodalaydigan obyektlar daraxti. Element tanlashni o‘rgandik; endi yangi element yaratish va forma yuborilishini boshqaramiz. HTML misolini index.html ga, JavaScript misolini defer bilan ulangan app.js ga yozing.",
    "sections": [
      {
        "title": "1. Forma va natija ro‘yxati",
        "text": "form qiymatlarni birga yuborish uchun. label dagi for input ning id qiymatiga mos keladi. required bo‘sh qiymatni yuborishga yo‘l qo‘ymaydi.",
        "code": "<form id=\"todo-form\">\n  <label for=\"todo-input\">Vazifa</label>\n  <input id=\"todo-input\" required>\n  <button type=\"submit\">Qo‘shish</button>\n</form>\n<ul id=\"todos\"></ul>\n<script src=\"app.js\" defer></script>"
      },
      {
        "title": "2. Element yaratish",
        "text": "createElement yangi element yaratadi, lekin u hali sahifada yo‘q. textContent matnni beradi, append esa ota elementga qo‘shadi.",
        "code": "const royxat = document.querySelector(\"#todos\");\nconst band = document.createElement(\"li\");\nband.textContent = \"JavaScript o‘rganish\";\nroyxat.append(band);",
        "note": "Natija: ro‘yxatda JavaScript o‘rganish yozuvi paydo bo‘ladi. Foydalanuvchi kiritgan matn uchun textContent ishlating."
      },
      {
        "title": "3. submit hodisasini tutish",
        "text": "submit tugma bosilganda ham, inputda Enter bosilganda ham ishlaydi. preventDefault sahifaning odatiy qayta yuborilishini to‘xtatadi. trim chetdagi bo‘sh joylarni olib tashlaydi.",
        "code": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todos\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const matn = input.value.trim();\n  if (!matn) return;\n  const li = document.createElement(\"li\");\n  li.textContent = matn;\n  list.append(li);\n  form.reset();\n  input.focus();\n});"
      },
      {
        "title": "4. Sonli input ham matn qaytaradi",
        "text": "input.value odatda string bo‘ladi. Hisoblashdan oldin Number bilan aylantiring. Bo‘sh maydonni alohida tekshiring: Number(\"\") natijasi 0.",
        "code": "const qiymat = \"12\"; // input.value kabi\nconst son = Number(qiymat);\nconsole.log(son + 3); // 15\nconsole.log(qiymat + 3); // \"123\""
      }
    ],
    "takeaway": "Forma bilan submit hodisasida ishlang. createElement → textContent → append orqali matnni sahifaga chiqaring.",
    "exercise": "Yuqoridagi todo formasini yarating. Vazifa yoniga “O‘chirish” tugmasi qo‘shing; bosilganda o‘sha li elementini remove() qilsin.",
    "resources": [
      {
        "title": "MDN: forma submit hodisasi",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event"
      }
    ]
  },
  {
    "id": "async-timers",
    "title": "Sinxron va asinxron kod, setTimeout/setInterval",
    "question": "Kod qaysi tartibda ishlaydi? Kutish vaqtida sahifa to‘xtab qoladimi?",
    "explanation": "Sinxron kod ketma-ket bajariladi: oldingi ish tugamaguncha keyingisi boshlanmaydi. Brauzer taymer va tarmoq kutishini o‘zi boshqaradi; JavaScript esa keyingi kodni davom ettiradi. Kutish tugagach tegishli funksiya bajarishga tayyor bo‘ladi.",
    "sections": [
      {
        "title": "1. Sinxron tartib",
        "text": "Oddiy console.log chaqiriqlari yozilgan tartibda bajariladi. Juda uzoq sinxron hisoblash sahifa javob berishini sekinlashtirishi mumkin.",
        "code": "console.log(\"A\");\nconsole.log(\"B\");\nconsole.log(\"C\"); // tartib: A, B, C"
      },
      {
        "title": "2. setTimeout bir marta chaqiradi",
        "text": "setTimeout funksiyani darhol bajarmaydi: keyinroq bajarishga rejalashtiradi. Vaqt millisekundda: 1000 ms = 1 soniya. Ko‘rsatilgan muddat eng kam kutishdir, aniq bajarilish vaqti emas.",
        "code": "console.log(\"Boshlanish\");\nsetTimeout(() => {\n  console.log(\"Keyinroq\");\n}, 1000);\nconsole.log(\"Davom etadi\");",
        "note": "Natija: Boshlanish, Davom etadi, keyin Keyinroq. setTimeout dagi funksiya — callback."
      },
      {
        "title": "3. Nol vaqt ham keyin bajariladi",
        "text": "0 millisekund yozish hozirgi kodni bo‘lmaydi. Callback joriy bajarilish tugagach ishga tushishi mumkin. Event loop mavzusida sababini chuqurroq ko‘ramiz.",
        "code": "console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3); // tartib: 1, 3, 2"
      },
      {
        "title": "4. Bekor qilish va takrorlash",
        "text": "clearTimeout hali ishlamagan taymerni bekor qiladi. setInterval takroriy callback rejalashtiradi; kerak bo‘lmaganda clearInterval bilan to‘xtating.",
        "code": "const kutish = setTimeout(() => console.log(\"Bu chiqmaydi\"), 1000);\nclearTimeout(kutish);\n\nlet sanoq = 0;\nconst interval = setInterval(() => {\n  sanoq += 1;\n  console.log(sanoq);\n  if (sanoq === 3) clearInterval(interval);\n}, 1000);",
        "note": "Interval misoli taxminan har soniyada 1, 2, 3 chiqaradi, keyin to‘xtaydi."
      }
    ],
    "takeaway": "Taymer kutish paytida keyingi kod bajariladi. Asinxron rejalashtirish og‘ir sinxron hisoblashni avtomatik ravishda boshqa oqimga ko‘chirmaydi.",
    "exercise": "Avval A chiqaring, 500 ms dan keyin B chiqishini rejalashtiring, keyin C chiqaring. Natija tartibini oldindan yozing. So‘ng 5 gacha sanaydigan va to‘xtaydigan interval yarating.",
    "resources": [
      {
        "title": "MDN: setTimeout",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout"
      }
    ]
  },
  {
    "id": "class-private",
    "title": "Getter, setter va private maydonlar (#)",
    "question": "Obyekt ichki holatini qanday boshqaramiz?",
    "explanation": "Getter xususiyatni o‘qishda, setter unga qiymat berishda ishlaydi. # bilan yozilgan private maydonga class tashqarisidan to‘g‘ridan-to‘g‘ri murojaat qilib bo‘lmaydi. Bu class ichidagi qoidalarni saqlashga yordam beradi.",
    "sections": [
      {
        "title": "1. Getter: xususiyat kabi o‘qish",
        "text": "get nomidan keyin funksiya tanasi yoziladi, lekin uni o‘qishda () ishlatilmaydi. Natija ichki qiymatlardan hisoblanishi mumkin.",
        "code": "class Odam {\n  constructor(ism, familiya) {\n    this.ism = ism;\n    this.familiya = familiya;\n  }\n  get toliqIsm() {\n    return `${this.ism} ${this.familiya}`;\n  }\n}\nconst odam = new Odam(\"Ali\", \"Valiyev\");\nconsole.log(odam.toliqIsm); // Ali Valiyev"
      },
      {
        "title": "2. Private maydon",
        "text": "Maydon class tanasida # bilan e’lon qilinadi. Class metodlari uni this.#nom bilan ishlatishi mumkin. Tashqaridan yozishga urinish sintaksis xatosi bo‘ladi.",
        "code": "class Hisob {\n  #balans = 0;\n  get balans() { return this.#balans; }\n}\nconst hisob = new Hisob();\nconsole.log(hisob.balans); // 0\n// console.log(hisob.#balans); // SyntaxError"
      },
      {
        "title": "3. Setter bilan tekshirish",
        "text": "set bitta qiymat qabul qiladi. Ichki qiymatni yozishdan oldin talablarni tekshiramiz. Getter va setter uchun bir xil ochiq nomdan foydalanish mumkin.",
        "code": "class Hamyon {\n  #pul = 0;\n  get pul() { return this.#pul; }\n  set pul(qiymat) {\n    if (!Number.isFinite(qiymat) || qiymat < 0) {\n      throw new Error(\"Musbat son yoki 0 kiriting\");\n    }\n    this.#pul = qiymat;\n  }\n}\nconst h = new Hamyon();\nh.pul = 50;\nconsole.log(h.pul); // 50",
        "note": "Setter ichida this.pul = qiymat yozmang: u o‘zini qayta-qayta chaqiradi. Bu misolda ichki #pul ga yoziladi."
      }
    ],
    "takeaway": "Getter o‘qishni, setter qiymat berishni boshqaradi. #maydonni faqat uni e’lon qilgan class kodi bevosita ishlata oladi.",
    "exercise": "Harorat classini yarating. #c maydonini getter/setter orqali o‘qing va yangilang. Setter faqat chekli sonni qabul qilsin, get fahrenheit esa Selsiydan Farengeytga hisoblasin.",
    "resources": [
      {
        "title": "MDN: private elementlar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements"
      }
    ]
  },
  {
    "id": "memory-management",
    "title": "Garbage collection va xotira boshqaruvi",
    "question": "Keraksiz obyektlar xotiradan qachon o‘chadi? Memory leak nima?",
    "explanation": "JavaScript qiymatlar uchun xotira ajratadi. Garbage collector dastur foydalana olmaydigan obyektlarning xotirasini avtomatik bo‘shatishi mumkin. Muhim tushuncha — obyektga faol koddan yetib borish mumkinmi, ya’ni u reachable holatdami.",
    "sections": [
      {
        "title": "1. Reference qolsa obyekt yashaydi",
        "text": "Bir o‘zgaruvchini null qilish obyektni darhol o‘chirish buyrug‘i emas. Boshqa reference bo‘lsa, obyektga hali murojaat qilish mumkin.",
        "code": "let user = { ism: \"Ali\" };\nlet nusxa = user;\nuser = null;\nconsole.log(nusxa.ism); // Ali\nnusxa = null; // Endi bu misolda obyektga reference qolmadi.",
        "note": "Garbage collection qachon bo‘lishini odatda dastur aniq belgilamaydi. null yozish darhol xotira bo‘shashini kafolatlamaydi."
      },
      {
        "title": "2. Cheksiz yig‘iladigan ma’lumot",
        "text": "Uzoq yashaydigan massiv yoki Map ichida keraksiz obyektlarni ushlab turish xotirani ko‘paytiradi. Keshga hajm chegarasi yoki tozalash qoidasi kerak.",
        "code": "const kesh = new Map();\nkesh.set(\"user-1\", { ism: \"Ali\" });\n// Endi kerak bo‘lmasa:\nkesh.delete(\"user-1\");\n// Barcha yozuvlarni olib tashlash:\nkesh.clear();"
      },
      {
        "title": "3. Taymer va listenerni tozalash",
        "text": "Taymer callbacki va hodisa listeneri o‘zlari ishlatayotgan qiymatlarga reference saqlashi mumkin. Ish tugaganda taymer va listenerni olib tashlang.",
        "code": "const id = setInterval(() => console.log(\"tekshirish\"), 1000);\n// Bu ish endi kerak bo‘lmasa:\nclearInterval(id);\n\nfunction oynaOzgardi() { console.log(\"resize\"); }\nwindow.addEventListener(\"resize\", oynaOzgardi);\nwindow.removeEventListener(\"resize\", oynaOzgardi);",
        "note": "removeEventListener uchun o‘sha funksiya reference’i va mos capture qiymati kerak."
      },
      {
        "title": "4. Aylanma reference o‘zi leak degani emas",
        "text": "Zamonaviy collector faqat reference sonini hisoblamaydi. Bir-biriga qaragan obyektlar guruhiga tashqi faol reference qolmasa, ular ham yig‘ilishi mumkin.",
        "code": "let a = {};\nlet b = {};\na.b = b;\nb.a = a;\na = null;\nb = null; // Yopiq guruhga tashqaridan yo‘l qolmadi."
      }
    ],
    "takeaway": "Keraksiz ma’lumotni uzoq yashaydigan tuzilmalarda saqlamang. Taymer, listener va keshlarning hayot muddatini boshqaring.",
    "exercise": "Har soniyada yozuv chiqaradigan start() funksiya va uni to‘xtatadigan stop() funksiya yarating. start() ikki marta chaqirilsa, ikkita interval ochilib ketmasin.",
    "resources": [
      {
        "title": "MDN: xotira boshqaruvi",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management"
      }
    ]
  },
  {
    "id": "node-http",
    "title": "Node.js da oddiy HTTP server: Express ga kirish",
    "question": "Brauzer so‘roviga JavaScript qanday javob beradi?",
    "explanation": "HTTP server so‘rovni qabul qilib, status, sarlavhalar va javob tanasini qaytaradi. Node.js ning node:http moduli bilan paket o‘rnatmasdan boshlash mumkin. Kod Node.js o‘rnatilgan kompyuter terminalida bajariladi; brauzer konsolida emas.",
    "sections": [
      {
        "title": "1. Birinchi server",
        "text": "Quyidagi kodni server.cjs fayliga yozing. Terminalda node server.cjs bilan ishga tushiring. Keyin brauzerda http://127.0.0.1:3000 ni oching.",
        "code": "const { createServer } = require(\"node:http\");\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain; charset=utf-8\" });\n  res.end(\"Salom, server!\");\n});\nserver.listen(3000, \"127.0.0.1\", () => {\n  console.log(\"http://127.0.0.1:3000\");\n});",
        "note": "Terminalda Ctrl+C serverni to‘xtatadi. 3000 porti band bo‘lsa, avval o‘sha serverni to‘xtating yoki boshqa port tanlang."
      },
      {
        "title": "2. So‘rov va javob",
        "text": "req.url so‘ralgan yo‘lni, req.method usulni bildiradi. res.end javobni yakunlaydi. Bu misol birinchi serverdagi callback tanasi o‘rniga yoziladi.",
        "code": "if (req.url === \"/api/salom\" && req.method === \"GET\") {\n  res.writeHead(200, { \"Content-Type\": \"application/json; charset=utf-8\" });\n  res.end(JSON.stringify({ xabar: \"Salom\" }));\n} else {\n  res.writeHead(404, { \"Content-Type\": \"text/plain; charset=utf-8\" });\n  res.end(\"Topilmadi\");\n}",
        "note": "200 — muvaffaqiyat; 404 — mos manzil topilmadi. URL query bilan kelsa, yo‘lni URL orqali ajratish talab etiladi."
      },
      {
        "title": "3. Express bilan tanishish",
        "text": "Express yo‘llar va javoblarni yozishni soddalashtiradi. Alohida loyiha papkasida npm init -y, keyin npm install express buyrug‘ini bajaring. Quyidagi kodni app.cjs ga yozib node app.cjs bilan oching.",
        "code": "const express = require(\"express\");\nconst app = express();\napp.get(\"/\", (req, res) => {\n  res.send(\"Bosh sahifa\");\n});\napp.get(\"/api/salom\", (req, res) => {\n  res.json({ xabar: \"Salom\" });\n});\napp.listen(3000, \"127.0.0.1\");",
        "note": "Sinashdan oldin oldingi node:http serverini to‘xtating: ikkisi bir xil portni egallay olmaydi."
      }
    ],
    "takeaway": "Server doimiy ishlaydi va so‘rov kutadi. Express ham Node.js ustida ishlaydigan paket. Kalitlarni brauzerga berish o‘rniga serverda saqlash mumkin.",
    "exercise": "GET /api/vaqt yo‘lini qo‘shing. U { vaqt: yangi ISO sana } JSON javobini qaytarsin. Noma’lum yo‘l uchun 404 javob qaytishini ham tekshiring.",
    "resources": [
      {
        "title": "Node.js: birinchi server",
        "url": "https://nodejs.org/learn/getting-started/introduction-to-nodejs"
      },
      {
        "title": "Express: birinchi ilova",
        "url": "https://expressjs.com/en/starter/hello-world/"
      }
    ]
  },
  {
    "id": "lint-format",
    "title": "ESLint va Prettier: kod sifati",
    "question": "Koddagi muammolarni topish va formatni bir xil qilish qanday ishlaydi?",
    "explanation": "ESLint qoidalarga zid yoki shubhali kodni aniqlaydi. Prettier chekinish, qavs va satrlarni bir xil formatga keltiradi. Ular testlarning o‘rnini bosmaydi: hisoblash natijasi to‘g‘riligini test bilan tekshiramiz. Buyruqlar Node.js va npm bor loyiha papkasida bajariladi.",
    "sections": [
      {
        "title": "1. ESLint ni sozlash",
        "text": "Loyihada package.json bo‘lmasa npm init -y bajaring. So‘ng rasmiy sozlash yordamchisini ishga tushiring va kodingiz qayerda ishlashini tanlang: browser yoki Node.js.",
        "code": "npm init @eslint/config@latest\nnpx eslint .",
        "note": "Yordamchi loyiha uchun eslint.config.* faylini yaratadi. Uning savollariga loyiha turiga mos javob bering."
      },
      {
        "title": "2. ESLint qanday muammo topadi?",
        "text": "Aniq qoidalar konfiguratsiyaga bog‘liq. Masalan, e’lon qilinmagan nomni ishlatish no-undef, ishlatilmagan o‘zgaruvchi esa no-unused-vars bilan belgilanadi. Avval xabarni o‘qing, keyin sababini tuzating.",
        "code": "const ism = \"Ali\";\nconsole.log(ismm); // ism deb yozilishi kerak",
        "note": "Linter nom xatosini topishi mumkin. Ammo algoritmingiz biznes talabiga to‘g‘ri javob berishini bilmaydi."
      },
      {
        "title": "3. Prettier o‘rnatish",
        "text": "Prettier ni loyiha ichiga devDependency sifatida o‘rnating. --check formatni tekshiradi, --write esa fayllarni qayta formatlaydi.",
        "code": "npm install --save-dev --save-exact prettier\nnpx prettier . --check\nnpx prettier . --write",
        "note": "Formatlashdan keyin git diff bilan o‘zgarishlarni ko‘ring. Paketning aniq versiyasi loyihada qayd etiladi."
      },
      {
        "title": "4. Birgalikda ishlatish",
        "text": "package.json ning scripts maydoniga quyidagi buyruqlarni yozish mumkin. Tekshirish buyruqlarini loyiha topshirishdan oldin ishlating.",
        "code": "\"scripts\": {\n  \"lint\": \"eslint .\",\n  \"format\": \"prettier . --write\",\n  \"format:check\": \"prettier . --check\"\n}\n\n# Terminalda:\nnpm run lint\nnpm run format:check",
        "note": "ESLint dagi format qoidalari Prettier bilan to‘qnashsa, rasmiy integratsiya yo‘riqnomasiga qarab moslang."
      }
    ],
    "takeaway": "Linter muammolarni izlaydi, formatter ko‘rinishni bir xil qiladi, test esa kutilgan xulqni tekshiradi.",
    "exercise": "Alohida kichik loyihada ESLint va Prettier ni sozlang. Noto‘g‘ri yozilgan o‘zgaruvchi nomini linter topishini, chekinishlarni formatter tuzatishini tekshiring.",
    "resources": [
      {
        "title": "ESLint: boshlash",
        "url": "https://eslint.org/docs/latest/use/getting-started/"
      },
      {
        "title": "Prettier: o‘rnatish",
        "url": "https://prettier.io/docs/install"
      }
    ]
  }
]);
window.lessonStages = [
  {
    "title": "1-bosqich: Boshlash",
    "desc": "Brauzerda birinchi koddan shart va tsikllargacha.",
    "project": "Konsolda ishlaydigan narx va chegirma hisoblagich.",
    "ids": [
      "js-intro",
      "var-let-const",
      "data-types",
      "typeof",
      "numbers-math",
      "strings",
      "operators",
      "coercion-equality",
      "truthy-falsy",
      "conditionals",
      "loops"
    ]
  },
  {
    "title": "2-bosqich: Ma’lumot tuzilmalari",
    "desc": "Obyekt, massiv va ularning qiymatlari bilan ishlash.",
    "project": "Todo vazifalarini massivda saqlang, filter va map bilan boshqaring. DOM ni o‘rgangach unga sahifa qo‘shing.",
    "ids": [
      "objects-basics",
      "arrays-basics",
      "object-reference",
      "array-methods",
      "destructuring-spread",
      "json-basics",
      "map-set"
    ]
  },
  {
    "title": "3-bosqich: Funksiyalar va scope",
    "desc": "Parametr va return dan closure, this va sof funksiyalargacha.",
    "project": "Hisob-kitob yordamchilari: jami, chegirma va qidiruv funksiyalarini yozing.",
    "ids": [
      "functions",
      "scope",
      "hoisting-tdz",
      "callbacks",
      "closures",
      "this-keyword",
      "recursion",
      "iife-pure"
    ]
  },
  {
    "title": "4-bosqich: Xatolar va modullar",
    "desc": "Xatoni boshqarish, fayllarni ajratish va loyiha vositalari.",
    "project": "Hisoblagichni modullarga ajrating, noto‘g‘ri kirishni tekshiring va Gitda saqlang.",
    "ids": [
      "errors-try-catch",
      "common-pitfalls",
      "modules",
      "git-npm"
    ]
  },
  {
    "title": "5-bosqich: Brauzer va DOM",
    "desc": "Sahifa, forma, eventlar va brauzer xotirasi.",
    "project": "Forma orqali qo‘shiladigan, o‘chiriladigan va localStorage da saqlanadigan todo ro‘yxati.",
    "ids": [
      "dom-basics",
      "events-advanced",
      "dom-forms",
      "storage",
      "dates",
      "regex-basics",
      "web-apis"
    ]
  },
  {
    "title": "6-bosqich: Asinxron JavaScript",
    "desc": "Taymer, Promise, Fetch va event loop.",
    "project": "API ma’lumotlarini ko‘rsatadigan ilova: yuklanish, xato va bo‘sh natija holatlarini ham ko‘rsating.",
    "ids": [
      "async-timers",
      "promises-async",
      "fetch-api",
      "event-loop",
      "promise-combinators",
      "dynamic-import-async-iteration",
      "debounce-throttle"
    ]
  },
  {
    "title": "7-bosqich: OOP",
    "desc": "Prototype va class orqali obyektlar tuzish.",
    "project": "Private balansli Hamyon classi va uning vorisini yarating.",
    "ids": [
      "prototypes",
      "classes",
      "class-private",
      "object-descriptors"
    ]
  },
  {
    "title": "8-bosqich: Chuqur mavzular",
    "desc": "Iteratsiya, maxsus turlar, reference va xotira.",
    "project": "Hajmi chegaralangan memoization keshi yozing va keraksiz yozuvlarni tozalang.",
    "ids": [
      "iterators-generators",
      "symbol-bigint",
      "weakmap-weakset",
      "proxy-reflect",
      "currying",
      "memoization",
      "memory-management"
    ]
  },
  {
    "title": "9-bosqich: Node.js",
    "desc": "Server muhiti, fayllar, stream va HTTP.",
    "project": "Fayldan o‘qilgan ma’lumotni JSON qilib qaytaradigan kichik HTTP server.",
    "ids": [
      "node-basics",
      "node-fs-path",
      "node-streams",
      "node-http"
    ]
  },
  {
    "title": "10-bosqich: Patternlar va test",
    "desc": "Kod tuzilishi, testlar va sifat vositalari.",
    "project": "Oldingi loyihaga unit testlar, ESLint va Prettier tekshiruvlarini qo‘shing.",
    "ids": [
      "design-patterns",
      "testing-basics",
      "lint-format"
    ]
  }
];
{
  const byId = new Map(window.lessons.map(lesson => [lesson.id, lesson]));
  window.lessons = window.lessonStages.flatMap(stage => stage.ids.map(id => byId.get(id)));
}
{
  const additions = {
  "functions": [
    {
      "title": "Avval: funksiya, parametr va return",
      "text": "Funksiya — keyin chaqirish uchun nom berilgan ishlar to‘plami. Parametr kiruvchi qiymat uchun nom. Chaqirishda berilgan qiymat argument deyiladi. return natijani qaytaradi va funksiya ishini shu joyda tugatadi.",
      "code": "function qosh(a, b) {\n  return a + b;\n}\nconst natija = qosh(2, 3);\nconsole.log(natija); // 5",
      "note": "console.log natijani ko‘rsatadi; return esa qiymatni chaqirgan kodga qaytaradi. return yozilmasa odatda undefined qaytadi."
    }
  ],
  "destructuring-spread": [
    {
      "title": "4. Rest: qolgan qiymatlarni yig‘ish",
      "text": "Destructuringdagi rest qolgan elementlarni yangi massiv yoki obyektga yig‘adi. Funksiya parametridagi rest esa qolgan argumentlarni yig‘adi. Spread tayyor to‘plamni yoyadi.",
      "code": "const [birinchi, ...qolgan] = [1, 2, 3];\nconsole.log(qolgan); // [2, 3]\nfunction jami(...sonlar) {\n  return sonlar.reduce((sum, son) => sum + son, 0);\n}\nconsole.log(jami(1, 2, 3)); // 6"
    }
  ],
  "conditionals": [
    {
      "title": "7. &&, || va ?? farqi",
      "text": "&& birinchi falsy qiymatni, bunday qiymat bo‘lmasa oxirgisini qaytaradi. || birinchi truthy qiymatni, bo‘lmasa oxirgisini qaytaradi. ?? faqat chapdagi qiymat null yoki undefined bo‘lganda o‘ngdagini oladi. Ular doim boolean qaytarmaydi.",
      "code": "console.log(0 || 10); // 10\nconsole.log(0 ?? 10); // 0\nconsole.log(null ?? 10); // 10\nconsole.log(\"Ali\" && \"Salom\"); // Salom",
      "note": "Bu operatorlar qisqa baholanadi: natija ma’lum bo‘lgach o‘ng tomondagi ifoda bajarilmasligi mumkin."
    }
  ]
};
  for (const [id, sections] of Object.entries(additions)) {
    const lesson = window.lessons.find(item => item.id === id);
    if (id === 'functions') lesson.sections.unshift(...sections);
    else lesson.sections.push(...sections);
  }
  const titles = {
    functions: 'Funksiyalar: declaration, expression, arrow',
    'destructuring-spread': 'Destructuring, spread, optional chaining va rest',
    'testing-basics': 'Testing: unit test, Jest va Vitest asoslari'
  };
  for (const [id, title] of Object.entries(titles)) window.lessons.find(l => l.id === id).title = title;
}
window.interviewQuestions.push(...[
  {
    "id": "curriculum-js-intro",
    "lessonId": "js-intro",
    "topic": "JavaScript nima va qanday ishlaydi",
    "level": "Asosiy",
    "question": "Bu kod konsolga nima chiqaradi?",
    "code": "console.log(2 + 3);",
    "options": [
      "5",
      "23",
      "undefined matni chiqadi, boshqa natija yo‘q",
      "Xato"
    ],
    "answer": 0,
    "explain": "+ ikkita sonni qo‘shadi. console.log hisoblangan 5 ni chiqaradi.",
    "walkthrough": [
      "2 va 3 sonlar.",
      "Ular qo‘shiladi va 5 konsolga beriladi."
    ]
  },
  {
    "id": "curriculum-data-types",
    "lessonId": "data-types",
    "topic": "Ma’lumot turlari: primitive va reference",
    "level": "Asosiy",
    "question": "Natija nima?",
    "code": "const a = { son: 1 };\nconst b = a;\nb.son = 2;\nconsole.log(a.son);",
    "options": [
      "1",
      "2",
      "undefined",
      "TypeError"
    ],
    "answer": 1,
    "explain": "a va b bitta obyektga ishora qiladi. const obyekt ichidagi xususiyatni o‘zgartirishni taqiqlamaydi.",
    "walkthrough": [
      "b ga a dagi reference qiymati ko‘chadi.",
      "b.son yangilanganda shu umumiy obyekt o‘zgaradi."
    ]
  },
  {
    "id": "curriculum-iife-pure",
    "lessonId": "iife-pure",
    "topic": "IIFE va pure function tushunchasi",
    "level": "Asosiy",
    "question": "Bu funksiya nega sof?",
    "code": "function ikkiBaravar(x) { return x * 2; }",
    "options": [
      "Tashqi holatni yangilaydi",
      "Faqat bir marta chaqiriladi",
      "Natija argumentga bog‘liq va tashqi holat o‘zgarmaydi",
      "Console ishlatadi"
    ],
    "answer": 2,
    "explain": "Funksiya bir xil x uchun bir xil natija qaytaradi va tashqi qiymatlarni o‘zgartirmaydi.",
    "walkthrough": [
      "Faqat x argumenti o‘qiladi.",
      "Hisoblangan yangi qiymat return bilan qaytariladi."
    ]
  },
  {
    "id": "curriculum-git-npm",
    "lessonId": "git-npm",
    "topic": "Git va npm asoslari",
    "level": "Asosiy",
    "question": "Qaysi buyruq fayllardagi o‘zgarishlar holatini ko‘rsatadi?",
    "code": "",
    "options": [
      "npm init -y",
      "git status",
      "npm install",
      "node --version"
    ],
    "answer": 1,
    "explain": "git status joriy ishchi papkadagi o‘zgargan va commitga tayyorlangan fayllar holatini ko‘rsatadi.",
    "walkthrough": [
      "Git repozitoriysiga kiriladi.",
      "git status bilan joriy o‘zgarishlar ko‘riladi."
    ]
  },
  {
    "id": "curriculum-dom-forms",
    "lessonId": "dom-forms",
    "topic": "DOM elementlar yaratish va formalar bilan ishlash",
    "level": "Asosiy",
    "question": "Yangi li ni sahifadagi list elementiga qanday qo‘shamiz?",
    "code": "const li = document.createElement(\"li\");\nli.textContent = \"Dars\";",
    "options": [
      "list.append(li)",
      "li.append(list)",
      "li = list",
      "console.log(li)"
    ],
    "answer": 0,
    "explain": "append bola elementni ota element ichiga joylaydi.",
    "walkthrough": [
      "li yaratilgan, lekin hali sahifada emas.",
      "list.append(li) uni ro‘yxatga qo‘shadi."
    ]
  },
  {
    "id": "curriculum-async-timers",
    "lessonId": "async-timers",
    "topic": "Sinxron va asinxron kod, setTimeout/setInterval",
    "level": "Asosiy",
    "question": "Natijalar qanday tartibda chiqadi?",
    "code": "console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3);",
    "options": [
      "1, 2, 3",
      "2, 1, 3",
      "1, 3, 2",
      "3, 2, 1"
    ],
    "answer": 2,
    "explain": "Taymer callbacki joriy sinxron kod tugagandan keyin ishlaydi.",
    "walkthrough": [
      "1 konsolga chiqadi, taymer rejalashtiriladi.",
      "3 chiqadi, keyin taymerdagi 2 chiqadi."
    ]
  },
  {
    "id": "curriculum-class-private",
    "lessonId": "class-private",
    "topic": "Getter, setter va private maydonlar (#)",
    "level": "Asosiy",
    "question": "Natija nima?",
    "code": "class Hisob {\n  #pul = 10;\n  get pul() { return this.#pul; }\n}\nconst h = new Hisob();\nconsole.log(h.pul);",
    "options": [
      "10",
      "undefined",
      "Funksiya matni",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Getter xususiyat kabi o‘qiladi va class ichidagi private maydonni qaytaradi.",
    "walkthrough": [
      "new yangi Hisob yaratadi, #pul qiymati 10.",
      "h.pul getter orqali 10 ni qaytaradi."
    ]
  },
  {
    "id": "curriculum-memory-management",
    "lessonId": "memory-management",
    "topic": "Garbage collection va xotira boshqaruvi",
    "level": "Asosiy",
    "question": "Obyektga hali murojaat qilish mumkinmi?",
    "code": "let a = { son: 1 };\nlet b = a;\na = null;",
    "options": [
      "Yo‘q, null uni darhol o‘chiradi",
      "Ha, b orqali",
      "Faqat garbage collector orqali",
      "Kod sintaksis xato beradi"
    ],
    "answer": 1,
    "explain": "b reference saqlagani uchun obyektga hali yetib borish mumkin.",
    "walkthrough": [
      "a va b bitta obyektga bog‘langan.",
      "a ning qiymati almashtiriladi, b esa reference saqlaydi."
    ]
  },
  {
    "id": "curriculum-node-http",
    "lessonId": "node-http",
    "topic": "Node.js da oddiy HTTP server: Express ga kirish",
    "level": "Asosiy",
    "question": "HTTP javobini node:http da qaysi metod yakunlaydi?",
    "code": "",
    "options": [
      "req.url",
      "res.end()",
      "server.listen()",
      "require()"
    ],
    "answer": 1,
    "explain": "res.end javobni yakunlaydi; listen esa serverni so‘rov kutishga o‘tkazadi.",
    "walkthrough": [
      "Server callbacki so‘rovni qabul qiladi.",
      "Sarlavha va tana tayyorlangach res.end bilan javob tugatiladi."
    ]
  },
  {
    "id": "curriculum-lint-format",
    "lessonId": "lint-format",
    "topic": "ESLint va Prettier: kod sifati",
    "level": "Asosiy",
    "question": "Qaysi moslik to‘g‘ri?",
    "code": "",
    "options": [
      "ESLint — server, Prettier — ma’lumotlar bazasi",
      "ESLint — shubhali kodni tekshirish, Prettier — formatlash",
      "Prettier — unit test, ESLint — paket o‘rnatish",
      "Ikkalasi ham faqat GitHub ga push qiladi"
    ],
    "answer": 1,
    "explain": "ESLint qoidalar asosida muammolarni izlaydi. Prettier kod formatini bir xil qiladi.",
    "walkthrough": [
      "Kod sifati qoidalari ESLint bilan tekshiriladi.",
      "Chekinish va satrlar Prettier bilan formatlanadi."
    ]
  }
]);

{
  const testing = window.lessons.find(l => l.id === "testing-basics");
  testing.sections.push({
  "title": "6. Jest yoki Vitest ni ishga tushirish",
  "text": "Testlar brauzer konsolida emas, test runner ichida ishlaydi. Jest uchun npm install --save-dev jest va npx jest buyruqlaridan foydalaniladi. Quyidagi Vitest misoli uchun npm install --save-dev vitest bajaring, kodni hisob.test.js fayliga saqlang, so‘ng npx vitest run yozing. Muhitingiz tanlangan vositaning Node.js talablari bilan mos bo‘lsin.",
  "code": "import { test, expect } from \"vitest\";\n\nfunction qosh(a, b) { return a + b; }\n\ntest(\"2 va 3 yig‘indisi 5\", () => {\n  expect(qosh(2, 3)).toBe(5);\n});",
  "note": "Jestning odatiy CommonJS muhitida test va expect global beriladi; Vitest misolida ular import qilindi. Ikkita runnerni aralashtirmasdan bittasini tanlang."
});
  testing.resources = [{ title: "Vitest: boshlash", url: "https://vitest.dev/guide/" }, { title: "Jest: boshlash", url: "https://jestjs.io/docs/getting-started" }];
}
