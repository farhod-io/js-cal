window.lessons = [
  {
    "id": "var-let-const",
    "title": "var, let va const farqi",
    "question": "Scope, qayta deklaratsiya, hoisting, TDZ xatosi va block nima?",
    "explanation": "Uchovlon ham o‘zgaruvchi e’lon qiladi. Asosiy farq: nomning qayerda ko‘rinishi, uni qayta e’lon qilish va unga yangi qiymat berish qoidalarida. Har bir kod misolini alohida sinab ko‘ring. Izohdagi xato satrlari ataylab o‘chirib qo‘yilgan.",
    "comparison": true,
    "sections": [
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
    "question": "typeof qanday ishlaydi? Nega null va [] uchun \"object\" qaytaradi?",
    "explanation": "typeof qiymatning turini bildiradigan string qaytaradi. typeof 10 natijasi \"number\" — bu natijaning o‘zi ham string. typeof x va typeof(x) shakllari ishlaydi; typeof operator, oddiy funksiya emas.",
    "sections": [
      {
        "title": "1. Asosiy turlar",
        "text": "number, string, boolean, undefined, bigint va symbol qiymatlari quyidagicha tekshiriladi. NaN va Infinity ham number turiga kiradi.",
        "code": "console.log(typeof 10);        // \"number\"\nconsole.log(typeof \"Hello\");   // \"string\"\nconsole.log(typeof true);      // \"boolean\"\nconsole.log(typeof undefined); // \"undefined\"\nconsole.log(typeof 123n);      // \"bigint\"\nconsole.log(typeof Symbol());  // \"symbol\"\nconsole.log(typeof NaN);       // \"number\"\nconsole.log(typeof Infinity);  // \"number\"\nconsole.log(typeof typeof 10); // \"string\""
      },
      {
        "title": "2. null: tarixiy g‘alati holat",
        "text": "null — qiymat ataylab yo‘qligini bildiruvchi primitive qiymat. Ammo typeof null \"object\" qaytaradi. Bu JavaScript’ning dastlabki implementatsiyasidan qolgan tarixiy xususiyat; null aslida obyekt degani emas. null’ni aniq tekshirish uchun === null ishlat.",
        "code": "const user = null;\n\nconsole.log(typeof user);  // \"object\"\nconsole.log(user === null); // true"
      },
      {
        "title": "3. Massiv: obyektning maxsus ko‘rinishi",
        "text": "[] uchun \"object\" chiqishi xato emas: massiv JavaScript’da obyektning maxsus ko‘rinishi. typeof massivni oddiy obyektdan ajratmaydi. Buning uchun Array.isArray ishlatiladi.",
        "code": "console.log(typeof []);           // \"object\"\nconsole.log(typeof {});           // \"object\"\nconsole.log(Array.isArray([]));   // true\nconsole.log(Array.isArray({}));   // false\nconsole.log(Array.isArray(null)); // false",
        "note": "Demak, null va [] bir xil sababdan \"object\" qaytarmaydi: null — tarixiy g‘alati holat; massiv esa haqiqatan obyekt."
      },
      {
        "title": "4. Funksiya uchun alohida natija",
        "text": "Funksiyalar ham obyektlar, lekin typeof ularni \"function\" deb ajratib ko‘rsatadi.",
        "code": "function salom() {}\nconsole.log(typeof salom);       // \"function\"\nconsole.log(typeof (() => {})); // \"function\""
      },
      {
        "title": "5. E’lon qilinmagan nom va TDZ farqi",
        "text": "typeof oddiy e’lon qilinmagan nom uchun \"undefined\" qaytaradi. Lekin shu scope ichidagi let/const nomi hali TDZ’da bo‘lsa, typeof ham ReferenceError beradi.",
        "code": "console.log(typeof mavjudEmas); // \"undefined\"\n\n{\n  // console.log(typeof yosh); // ReferenceError\n  let yosh = 20;\n  console.log(typeof yosh);   // \"number\"\n}"
      },
      {
        "title": "6. Natijani string bilan solishtir",
        "text": "typeof natijasi har doim string bo‘lgani uchun uni \"number\", \"string\" kabi matn bilan solishtiramiz. typeof umumiy turni aytadi; qiymat to‘g‘riligini to‘liq tekshirmaydi. Masalan, NaN ham \"number\".",
        "code": "const yosh = 20;\nconsole.log(typeof yosh === \"number\"); // true\n\nconst qiymat = NaN;\nconsole.log(typeof qiymat);         // \"number\"\nconsole.log(Number.isNaN(qiymat));  // true\nconsole.log(Number.isFinite(20));   // true\nconsole.log(Number.isFinite(NaN));  // false\nconsole.log(Number.isFinite(Infinity)); // false"
      }
    ],
    "takeaway": "typeof → string qaytaradi.\nnull’ni tekshirish → qiymat === null.\nMassivni tekshirish → Array.isArray(qiymat).\nFunksiya → typeof qiymat === \"function\".\nTDZ ichida typeof ham ReferenceError beradi.\nNaN ham number, shuning uchun typeof yagona validatsiya vositasi emas.",
    "exercise": "Natijalarni taxmin qil:\n\n1) typeof \"10\"\n2) typeof null\n3) Array.isArray([1, 2])\n4) typeof typeof true\n5) typeof NaN\n\nQo‘shimcha: null bilan bo‘sh massivni qanday ajratasan?"
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
  }
];
