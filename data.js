// Barcha o'quv ma'lumotlari bitta faylda: 86 dars, 116 test, 24 kod labi.
// Tartib: darslar 0 dan boshlab bosqichma-bosqich joylashtirilgan.

window.lessons = [
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
    ],
    "learningGuide": {
      "goal": "Kodni Console da sinab, HTML ga alohida JavaScript faylini ulay olasiz.",
      "prerequisites": [],
      "terms": [
        {
          "term": "Buyruq",
          "meaning": "Kompyuter bajarishi kerak bo‘lgan ish."
        },
        {
          "term": "Console",
          "meaning": "Kod yozish va natija yoki xatoni ko‘rish oynasi."
        },
        {
          "term": "Script",
          "meaning": "JavaScript buyruqlari yozilgan fayl yoki HTML bo‘lagi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ali matni chiqishi kerak. Nega bu yozuv nom qidiryapti?",
        "brokenCode": "console.log(Ali);",
        "fixedCode": "console.log(\"Ali\");",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "Qo‘shtirnoqsiz Ali o‘zgaruvchi nomi deb o‘qiladi. Matn uchun qo‘shtirnoq qo‘yildi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Ismingizni va 7 + 8 natijasini Console ga chiqaring. Keyin shu kodni app.js fayliga yozib HTML ga ulang.",
        "criteria": [
          "Console da ism va hisob natijasi ko‘rinadi.",
          "HTML app.js faylini topadi; konsolda ulanish xatosi yo‘q.",
          "Koddagi bir sonni o‘zgartirganda yangi natijani tushuntirasiz."
        ],
        "hint": "console.log(\"Ismingiz\"); console.log(7 + 8); yozing. HTML da <script src=\"app.js\" defer></script> bilan aynan shu faylni ulang. Brauzerda sahifani yangilang."
      }
    },
    "exerciseCode": "console.log(\"Salom\");\nconsole.log(2 + 3);\nconsole.log(\"2 + 3\");",
    "exerciseAnswer": "1. \"Salom\" — tayyor matn.\n2. 5 — sonlar qo‘shildi.\n3. \"2 + 3\" — qo‘shtirnoqdagi yozuv hisoblanmaydi.",
    "exerciseExpected": [
      "Salom",
      5,
      "2 + 3"
    ],
    "exerciseRuntime": "javascript"
  },
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
    "exercise": "Kodni ishga tushirmasdan javob ber:\n\nlet a = 1;\n{\n  let a = 2;\n  console.log(a);\n}\nconsole.log(a);\n\n1) Ikkala console.log nima chiqaradi?\n2) Ichki let a o‘rniga var a yozilsa nima bo‘ladi?\n3) const list = []; list.push(1) mumkinmi? Nega?",
    "learningGuide": {
      "goal": "Qiymatni nom bilan saqlab, let bilan yangilaysiz va qachon const tanlashni ayta olasiz.",
      "prerequisites": [
        "js-intro"
      ],
      "terms": [
        {
          "term": "O‘zgaruvchi",
          "meaning": "Qiymatga murojaat qilish uchun nom."
        },
        {
          "term": "Deklaratsiya",
          "meaning": "let, const yoki var bilan yangi nom yaratish."
        },
        {
          "term": "Qayta qiymat berish",
          "meaning": "Bor nomga boshqa qiymat yozish: yosh = 21."
        },
        {
          "term": "Blok",
          "meaning": "if yoki for tanasidagi kabi { } bilan ajratilgan kod hududi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Sanoq 2 dan 3 ga yangilanishi kerak. Nima uchun const bilan bu ishlamaydi?",
        "brokenCode": "const sanoq = 2;\nsanoq = 3;\nconsole.log(sanoq);",
        "fixedCode": "let sanoq = 2;\nsanoq = 3;\nconsole.log(sanoq);",
        "expectedOutput": [
          3
        ],
        "explanation": "Bu vazifada nomga yangi qiymat berish kerak; let shu imkonni beradi. const ga qayta biriktirish xato.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Mahsulotning doimiy nomi va o‘zgaradigan donasini yarating. Dona sonini oshiring, so‘ng console.log bilan chiqaring.",
        "criteria": [
          "let qiymati yangilanganda log yangi qiymatni beradi.",
          "const ni qayta biriktirish mumkin emasligini tushuntirasiz.",
          "Obyekt ichidagi maydonni yangilash bilan o‘zgaruvchiga yangi obyekt berishni farqlaysiz."
        ],
        "hint": "Nom uchun const nom = \"Kitob\", dona uchun let dona = 2 ishlating. dona = dona + 1 yoki dona += 1 bilan yangilang. Hali scope/hoistingni mukammal bilish bu mashq uchun shart emas."
      }
    },
    "exerciseCode": "let son = 2;\nson += 3;\nconsole.log(son);\nconst ism = \"Ali\";\nconsole.log(ism);",
    "exerciseAnswer": "1. 5 — let qiymati 2 ga 3 qo‘shildi.\n2. \"Ali\" — const da saqlangan matn o‘qildi.",
    "exerciseExpected": [
      5,
      "Ali"
    ],
    "exerciseRuntime": "javascript"
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
    "exerciseAnswer": "Birinchi natija: 10. Ikkinchi natija: 30.\n\na dagi 10 primitive qiymati b ga nusxalandi. b ga 30 berish a ni o‘zgartirmadi.\n\nx va y esa bitta obyektga ishora qiladi. y.son = 30 umumiy obyektning son xususiyatini o‘zgartirdi, shuning uchun x.son ham 30.",
    "learningGuide": {
      "goal": "Matn, son va boolean ni farqlab, primitive nusxasi bilan umumiy obyektga ishora farqini tushuntirasiz.",
      "prerequisites": [
        "var-let-const"
      ],
      "terms": [
        {
          "term": "Tur",
          "meaning": "Qiymat qanday qiymat ekanini bildiradi: matn, son va hokazo."
        },
        {
          "term": "Primitive",
          "meaning": "Obyekt bo‘lmagan oddiy, o‘zgarmas qiymat."
        },
        {
          "term": "Obyekt",
          "meaning": "Nomlangan xususiyatlarni birga saqlaydigan qiymat."
        },
        {
          "term": "Reference",
          "meaning": "Obyektga olib boradigan ishora qiymati; nusxalansa ham o‘sha obyektni ko‘rsatishi mumkin."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "javob boolean false bo‘lishi kerak. Hozir qaysi tur saqlanyapti?",
        "brokenCode": "const javob = \"false\";\nconsole.log(typeof javob);",
        "fixedCode": "const javob = false;\nconsole.log(typeof javob);\nconsole.log(javob);",
        "expectedOutput": [
          "boolean",
          false
        ],
        "explanation": "\"false\" matn. Boolean qiymat kerak bo‘lsa false qo‘shtirnoqsiz yoziladi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Ism, yosh va talabalik holatini mos turlarda saqlang. Keyin bitta user obyektini boshqa nomga bering va ism maydonini yangilang.",
        "criteria": [
          "Matn qo‘shtirnoqda, son va boolean qo‘shtirnoqsiz yoziladi.",
          "Primitive nusxasiga yangi qiymat berish aslini o‘zgartirmaydi.",
          "Umumiy obyektning maydonini o‘zgartirish ikkala nom orqali ko‘rinadi."
        ],
        "hint": "const ism=\"Ali\", yosh=20, talaba=true kabi qiymatlardan boshlang. const user={ism}; const boshqa=user; boshqa.ism=\"Vali\" misolini primitive a va b nusxasi bilan solishtiring."
      }
    }
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
    "exerciseAnswer": "1. \"number\" — 20 son.\n2. \"string\" — \"20\" qo‘shtirnoqdagi matn.\n3. \"string\" — \"false\" ham matn.\n4. \"boolean\" — true qo‘shtirnoqsiz boolean qiymat.\n5. \"undefined\" — ism ga hali qiymat berilmagan.\n6. \"object\" — null uchun tarixiy maxsus natija; null aslida primitive qiymat.\n7. true — [] massiv, Array.isArray shuni tekshiradi.\n8. \"string\" — ichki typeof 20 avval \"number\" matnini beradi, tashqi typeof shu matnning turini tekshiradi.",
    "learningGuide": {
      "goal": "Qiymat bilan uning turini ajratasiz va typeof yetarli bo‘lmaydigan null/massiv holatlarini bilasiz.",
      "prerequisites": [
        "data-types"
      ],
      "terms": [
        {
          "term": "Operator",
          "meaning": "Qiymat ustida amal bajarib natija chiqaradigan belgi yoki kalit so‘z."
        },
        {
          "term": "typeof natijasi",
          "meaning": "\"number\" kabi tur nomini saqlovchi string."
        },
        {
          "term": "Array.isArray",
          "meaning": "Qiymat massiv ekanini true/false bilan tekshiradigan tayyor funksiya."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Son ekanini tekshiruvchi shart true berishi kerak. Number bilan \"number\" farqini toping.",
        "brokenCode": "const yosh = 20;\nconsole.log(typeof yosh === Number);",
        "fixedCode": "const yosh = 20;\nconsole.log(typeof yosh === \"number\");",
        "expectedOutput": [
          true
        ],
        "explanation": "typeof matn qaytaradi. Number esa tayyor funksiya; tur nomini \"number\" stringi bilan solishtiramiz.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Son, matn, null va massiv uchun tur natijalarini chiqaradigan kichik tekshiruv yozing.",
        "criteria": [
          "20 uchun number, \"20\" uchun string chiqadi.",
          "null ning typeof natijasini uning haqiqiy primitive ekanligi bilan adashtirmaysiz.",
          "Massivni Array.isArray bilan ajratasiz."
        ],
        "hint": "console.log(typeof qiymat) bilan boshlang. Null uchun qiymat === null, massiv uchun Array.isArray(qiymat) tekshiruvini alohida ishlating. === tenglikni tur o‘zgartirmasdan tekshiradi."
      }
    }
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
    "exerciseAnswer": "1. 10 — qo‘shish.\n2. 3.5 — bo‘lish kasrni saqlaydi.\n3. 1 — bo‘lishdan qolgan qoldiq.\n4. 8 — 2 * 2 * 2.\n5. \"201\" — matn va 1 birlashtiriladi.\n6. 21 — avval \"20\" songa aylanadi, keyin 1 qo‘shiladi.\n7. 4 — 3.6 ga eng yaqin butun son.\n8. -4 — -3.6 dan pastdagi butun son.\n9. 4 — 3.1 dan yuqoridagi butun son.\n10. \"0.30\" — toFixed ikki kasr xonali string qaytaradi.\n11. true — Number(\"abc\") NaN bo‘ladi.\n12. Infinity — number qiymatini nolga bo‘lishdagi maxsus natija.",
    "learningGuide": {
      "goal": "Matnni songa aylantirib hisoblaysiz, kerakli yaxlitlash usulini tanlaysiz va NaN ni tekshirasiz.",
      "prerequisites": [
        "typeof"
      ],
      "terms": [
        {
          "term": "Operand",
          "meaning": "Amal qatnashchisi: 2 + 3 da 2 va 3."
        },
        {
          "term": "Metod",
          "meaning": "Obyekt yoki qiymat orqali chaqiriladigan tayyor funksiya: Math.round(...)."
        },
        {
          "term": "NaN",
          "meaning": "Number turidagi, yaroqli sonli natija olinmaganini bildiruvchi maxsus qiymat."
        },
        {
          "term": "Yaxlitlash",
          "meaning": "Kasrli sonni tanlangan qoida bilan yaqin butun qiymatga olib borish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Natija 21 bo‘lishi kerak, lekin \"201\" chiqyapti.",
        "brokenCode": "const yosh = \"20\";\nconsole.log(yosh + 1);",
        "fixedCode": "const yosh = \"20\";\nconsole.log(Number(yosh) + 1);",
        "expectedOutput": [
          21
        ],
        "explanation": "Avval matn songa aylantirildi. Shundan keyin + sonlarni qo‘shadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Matn sifatidagi narx va dona qiymatlaridan jami summani hisoblang. Natijani ikki kasr xonali matn sifatida ko‘rsating.",
        "criteria": [
          "Narx va dona uchun qo‘shish emas ko‘paytirish ishlatiladi.",
          "String kirish bilan noto‘g‘ri birlashtirish yuz bermaydi.",
          "Bo‘sh yoki yaroqsiz kirishni alohida tekshirasiz."
        ],
        "hint": "Avval bo‘sh matnni ajrating. Number bilan aylantirib Number.isFinite tekshiring, keyin ko‘paytiring. Ko‘rsatish uchun toFixed(2) ishlating; u string qaytarishini unutmang."
      }
    }
  },
  {
    "id": "strings",
    "title": "Stringlar: noldan",
    "question": "String nima? Matnni qanday yaratamiz, o‘qiymiz, qidiramiz va o‘zgartirilgan nusxasini olamiz? Metodlar nimani qaytaradi?",
    "explanation": "String — matn qiymati. Ism, xabar, telefon raqami yoki foydalanuvchi yozgan izohni matn sifatida saqlash mumkin. Bu darsda oddiy qo‘shtirnoqdan boshlaymiz: avval matn va son farqi, keyin indeks, uzunlik va metodlarni o‘rganamiz. Har bir kod bo‘lagini alohida konsolda sinang. So‘nggi bo‘limlarda emoji va Unicode kabi chuqurroq holatlar bor; avval asosiy misollarni tushunib oling.",
    "sections": [
      {
        "title": "1. String — matn qiymat",
        "text": "let ism = \"Ali\" satrida ism — o‘zgaruvchi nomi, \"Ali\" — uning matn qiymati. console.log qiymatni ko‘rsatadi, typeof esa uning turini bildiradi. Raqamlar ham qo‘shtirnoqda yozilsa matn bo‘ladi.",
        "code": "let ism = \"Ali\";\nlet telefon = \"901234567\";\nlet yosh = \"20\";\n\nconsole.log(ism);        // \"Ali\"\nconsole.log(typeof ism); // \"string\"\nconsole.log(typeof yosh); // \"string\"",
        "note": "Telefon raqami yoki kodni har doim hisoblash uchun son qilish shart emas. \"007\" stringi boshidagi nollarni saqlaydi; Number(\"007\") esa 7 beradi."
      },
      {
        "title": "2. Uch xil qo‘shtirnoq va bo‘sh matn",
        "text": "Stringni bir qo‘shtirnoq, ikki qo‘shtirnoq yoki backtick (`) bilan yaratamiz. Boshlanish va tugash belgisi bir xil bo‘lishi kerak. Bo‘sh string — ichida hech qanday belgi yo‘q matn. Bo‘sh joy esa alohida belgi.",
        "code": "const a = 'Salom';\nconst b = \"Salom\";\nconst c = `Salom`;\nconst bosh = \"\";\nconst joy = \" \";\n\nconsole.log(a === b); // true\nconsole.log(bosh.length); // 0\nconsole.log(joy.length);  // 1",
        "note": "Kodga oddiy ' yoki \" yozing. Matn muharriri ularni “aqlli qo‘shtirnoq” belgilariga almashtirsa, ular JavaScript’da string chegarasi bo‘lib ishlamaydi."
      },
      {
        "title": "3. Qo‘shtirnoq, yangi satr va backslash",
        "text": "Matn ichiga tashqi qo‘shtirnoqning o‘zini yozish uchun oldiga backslash (\\) qo‘yish mumkin. \\n yangi satr, \\t tab, \\\\ esa bitta backslash belgisini bildiradi. Bular escape ketma-ketliklari deyiladi.",
        "code": "console.log(\"U \\\"Salom\\\" dedi.\");\nconsole.log('Bu Ali\\'ning kitobi.');\nconsole.log(\"Birinchi\\nIkkinchi\");\nconsole.log(\"Ism:\\tAli\");\nconsole.log(\"C:\\\\darslar\");",
        "note": "Birinchi misolda matn ichida \"Salom\" ko‘rinadi. \\n ikkita yozuv belgisi bilan ifodalansa ham, string ichida bitta yangi satr belgisi bo‘ladi."
      },
      {
        "title": "4. length va 0 dan boshlanadigan indeks",
        "text": "length — string uzunligi xususiyati; undan keyin () yozilmaydi. Belgining joyi indeks deyiladi va 0 dan boshlanadi. Oddiy lotin harflarida \"Salom\" uzunligi 5, oxirgi indeks esa 4. Emoji uchun farqni oxirroqda ko‘ramiz.",
        "code": "const matn = \"Salom\";\nconsole.log(matn.length); // 5\nconsole.log(matn[0]);     // \"S\"\nconsole.log(matn[1]);     // \"a\"\nconsole.log(matn[4]);     // \"m\"\nconsole.log(matn[matn.length - 1]); // \"m\"",
        "note": "S → 0, a → 1, l → 2, o → 3, m → 4. .length xususiyat, .trim() esa metod. Metod — qiymat bilan bajariladigan tayyor amal."
      },
      {
        "title": "5. at, charAt va mavjud bo‘lmagan indeks",
        "text": "at(-1) oxirgi birlikni, at(-2) undan oldingisini oladi. [] ichiga -1 berish esa oxirgi belgini qaytarmaydi. Chegaradan tashqarida [] va at undefined, charAt esa bo‘sh string qaytaradi.",
        "code": "const s = \"Ali\";\nconsole.log(s.at(-1));   // \"i\"\nconsole.log(s.at(-2));   // \"l\"\nconsole.log(s[-1]);      // undefined\nconsole.log(s[99]);      // undefined\nconsole.log(s.at(99));   // undefined\nconsole.log(s.charAt(99)); // \"\"",
        "note": "Bu usullar UTF-16 birliklari bilan ishlaydi. Bir ko‘rinadigan emoji bir nechta birlikdan iborat bo‘lishi mumkin."
      },
      {
        "title": "6. String o‘zgarmas, lekin let ga yangi qiymat berish mumkin",
        "text": "String primitive qiymat bo‘lib, ichidagi belgini joyida almashtirib bo‘lmaydi. Metodlar asl stringni tahrirlamaydi. let bilan yaratilgan o‘zgaruvchiga yangi string berish esa mumkin: bu ikki alohida ish.",
        "code": "let ism = \"Ali\";\n// ism[0] = \"V\"; // stringni joyida o‘zgartirmaydi\n\nconst yangi = \"V\" + ism.slice(1);\nconsole.log(yangi); // \"Vli\"\nconsole.log(ism);   // \"Ali\"\n\nism = \"Vali\";\nconsole.log(ism);   // \"Vali\"",
        "note": "Indeks orqali yozishga urinish oddiy rejimda e’tiborsiz qolishi, strict rejimda TypeError berishi mumkin. const ism bo‘lsa, ism ga yangi string ham berib bo‘lmaydi. Stringning o‘zgarmasligi faqat const ga bog‘liq emas."
      },
      {
        "title": "7. Birlashtirish va template literal",
        "text": "+ matnlarni birlashtiradi. Orada bo‘sh joy kerak bo‘lsa uni o‘zingiz yozasiz. Backtick ichidagi ${...} o‘zgaruvchi yoki ifoda qiymatini matnga qo‘shadi. Oddiy qo‘shtirnoq bu almashtirishni bajarmaydi.",
        "code": "const ism = \"Ali\";\nconst yosh = 20;\nconsole.log(\"Salom, \" + ism + \"!\"); // \"Salom, Ali!\"\nconsole.log(`Men ${ism}, ${yosh} yoshman.`);\nconsole.log(`Keyingi yil ${yosh + 1} yosh.`);\nconsole.log(\"Salom, ${ism}\"); // \"Salom, ${ism}\"\n\nconst xabar = `Birinchi satr\nIkkinchi satr`;\nconsole.log(xabar);",
        "note": "${yosh + 1} ichida avval hisoblash bajariladi, natija matnga joylanadi. Backtick haqiqiy yangi satrlarni ham saqlaydi."
      },
      {
        "title": "8. Son va stringni aniq aylantirish",
        "text": "String(qiymat) matnga, Number(matn) songa aylantiradi. + da matn bo‘lsa birlashtirish yuz berishi mumkin. Amallar chapdan o‘ngga bajarilishi ham natijaga ta’sir qiladi.",
        "code": "console.log(\"5\" + 1);       // \"51\"\nconsole.log(\"5\" - 1);       // 4\nconsole.log(1 + 2 + \"3\");   // \"33\"\nconsole.log(\"1\" + 2 + 3);   // \"123\"\nconsole.log(Number(\"5\") + 1); // 6\nconsole.log(String(20));    // \"20\"\nconsole.log(String(null));  // \"null\"",
        "note": "Number(\"\") natijasi 0, Number(\"abc\") esa NaN. String(null) bo‘sh matn bermaydi. new String(\"Ali\") odatiy string emas, obyekt yaratadi; matn uchun oddiy qo‘shtirnoq yoki String(...) yetarli."
      },
      {
        "title": "9. Katta va kichik harflar",
        "text": "toUpperCase() katta, toLowerCase() kichik harfli yangi matn qaytaradi. Natijani ishlatmasak, asl o‘zgaruvchi o‘zgarmaydi.",
        "code": "const asl = \"Salom\";\nconsole.log(asl.toUpperCase()); // \"SALOM\"\nconsole.log(asl.toLowerCase()); // \"salom\"\nconsole.log(asl);               // \"Salom\"\n\nconst email = \"ALI@MISOL.UZ\";\nconst kichik = email.toLowerCase();\nconsole.log(kichik); // \"ali@misol.uz\"",
        "note": "Ba’zi tillarda harf almashtirish locale ga bog‘liq. Tilga xos holatlarda toLocaleLowerCase va toLocaleUpperCase mavjud; oddiy lotin misollari uchun yuqoridagi metodlardan boshlang."
      },
      {
        "title": "10. trim, trimStart va trimEnd",
        "text": "trim() bosh va oxirdagi bo‘shliq belgilarini olib tashlaydi. O‘rtadagi bo‘shliqlarni o‘zgartirmaydi. trimStart faqat boshini, trimEnd faqat oxirini tozalaydi. Metodlarni ketma-ket chaqirish mumkin.",
        "code": "const matn = \"  Salom Dunyo  \";\nconsole.log(matn.trim());      // \"Salom Dunyo\"\nconsole.log(matn.trimStart()); // \"Salom Dunyo  \"\nconsole.log(matn.trimEnd());   // \"  Salom Dunyo\"\nconsole.log(matn.trim().toLowerCase()); // \"salom dunyo\"\nconsole.log(matn); // \"  Salom Dunyo  \"",
        "note": "String bo‘shligini tekshirish uchun matn.trim().length === 0 yozish mumkin. \"   \" ning asl length qiymati 3, tozalangan length esa 0."
      },
      {
        "title": "11. includes, startsWith va endsWith",
        "text": "includes matn ichida qidirilayotgan bo‘lak borligini aytadi. startsWith boshida, endsWith oxirida borligini tekshiradi. Ular boolean qaytaradi va katta-kichik harfni farqlaydi.",
        "code": "const matn = \"JavaScript\";\nconsole.log(matn.includes(\"Script\")); // true\nconsole.log(matn.includes(\"script\")); // false\nconsole.log(matn.startsWith(\"Java\")); // true\nconsole.log(matn.endsWith(\"Script\")); // true\nconsole.log(matn.toLowerCase().includes(\"script\")); // true",
        "note": "Bu metodlar yangi matn emas, true yoki false qaytaradi. includes(\"\") har qanday string uchun true; shu sababli bo‘sh qidiruv so‘zini kerak bo‘lsa oldin tekshiring."
      },
      {
        "title": "12. indexOf va lastIndexOf: qayerdan topildi?",
        "text": "indexOf birinchi mos bo‘lakning indeksini, lastIndexOf oxirgisining indeksini beradi. Topilmasa -1 qaytadi. 0 ham to‘g‘ri topilgan indeks: shunchaki boolean sifatida tekshirish xatoga olib kelishi mumkin.",
        "code": "const matn = \"JavaScript\";\nconsole.log(matn.indexOf(\"Script\")); // 4\nconsole.log(matn.indexOf(\"Java\"));   // 0\nconsole.log(matn.indexOf(\"Python\")); // -1\nconsole.log(matn.indexOf(\"a\"));      // 1\nconsole.log(matn.lastIndexOf(\"a\"));  // 3\nconsole.log(matn.indexOf(\"Java\") !== -1); // true",
        "note": "\"JavaScript\".indexOf(\"Script\") — 4, 6 emas. J → 0, a → 1, v → 2, a → 3, S → 4. Faqat “bor yoki yo‘qmi?” kerak bo‘lsa includes osonroq."
      },
      {
        "title": "13. slice va substring: bo‘lak ajratish",
        "text": "slice(boshi, oxiri) yangi bo‘lak qaytaradi. Boshlanish indeksi kiradi, oxirgi indeks kirmaydi. Oxirgi argument berilmasa, string oxirigacha olinadi. Manfiy indeks oxiridan sanaladi.",
        "code": "const s = \"JavaScript\";\nconsole.log(s.slice(0, 4)); // \"Java\"\nconsole.log(s.slice(4));    // \"Script\"\nconsole.log(s.slice(-6));   // \"Script\"\nconsole.log(s.slice(4, 0)); // \"\"\nconsole.log(s.substring(4, 0)); // \"Java\"\nconsole.log(s.substring(-4, 4)); // \"Java\"",
        "note": "substring manfiy indeksni 0 deb oladi, boshlanish oxiridan katta bo‘lsa ularni almashtiradi. slice bunday qilmaydi. Qaysi usulni tanlaganingizni bilib ishlating. Eski substr o‘rniga odatda slice ishlatiladi."
      },
      {
        "title": "14. replace va replaceAll: almashtirilgan nusxa",
        "text": "replace string bo‘lagini qidirganda faqat birinchi mos joyni almashtiradi. replaceAll barcha mos joylarni almashtiradi. Asl string o‘zgarmaydi.",
        "code": "const matn = \"olma olma\";\nconsole.log(matn.replace(\"olma\", \"anor\")); // \"anor olma\"\nconsole.log(matn.replaceAll(\"olma\", \"anor\")); // \"anor anor\"\nconsole.log(matn); // \"olma olma\"\nconsole.log(\"a-a\".replace(/a/g, \"b\")); // \"b-b\"",
        "note": "/a/g — muntazam ifoda (regex), g barcha mos joylarni olishni bildiradi. Regex alohida mavzuda chuqur o‘rganiladi. replaceAll ga regex berilganda unda g bayrog‘i bo‘lishi kerak. Qidiruv katta-kichik harfni farqlaydi."
      },
      {
        "title": "15. split va join: matn bilan massiv orasida",
        "text": "split ajratgich bo‘yicha stringni massivga bo‘ladi. join esa massiv elementlarini ajratgich bilan bitta matnga yig‘adi. join string metodi emas, massiv metodidir.",
        "code": "const mevalar = \"olma,anor,uzum\".split(\",\");\nconsole.log(mevalar); // [\"olma\", \"anor\", \"uzum\"]\nconsole.log(mevalar.join(\" | \")); // \"olma | anor | uzum\"\nconsole.log(\"Ali\".split(\"\")); // [\"A\", \"l\", \"i\"]\nconsole.log(\"a,,b\".split(\",\")); // [\"a\", \"\", \"b\"]",
        "note": "split(\"\") UTF-16 birliklariga ajratadi. Emoji yoki bir necha koddan tuzilgan belgilarni to‘g‘ri bo‘lish uchun bu usul yetarli emas; Unicode bo‘limini ko‘ring. Oddiy split murakkab CSV faylini ishonchli tahlil qiladigan vosita ham emas."
      },
      {
        "title": "16. repeat, padStart va padEnd",
        "text": "repeat matnni berilgan miqdorda takrorlaydi. padStart boshiga, padEnd oxiriga belgilar qo‘shib, kerakli uzunlikka yetkazadi. Asl matn yetarlicha uzun bo‘lsa kesib tashlamaydi.",
        "code": "console.log(\"ha\".repeat(3));     // \"hahaha\"\nconsole.log(\"ha\".repeat(0));     // \"\"\nconsole.log(\"7\".padStart(3, \"0\")); // \"007\"\nconsole.log(\"Ali\".padEnd(5, \".\")); // \"Ali..\"\nconsole.log(\"1234\".padStart(2, \"0\")); // \"1234\"",
        "note": "repeat manfiy yoki cheksiz miqdor bilan ishlamaydi: RangeError beradi. padStart(3, \"0\") 3 ta nol qo‘shish emas, jami uzunlikni kamida 3 ga yetkazish demak."
      },
      {
        "title": "17. Solishtirish va tilga mos tartiblash",
        "text": "=== ikkita stringdagi birliklar ketma-ketligi aynan tengligini tekshiradi. Katta-kichik harflar farq qiladi. < matnni son qilib emas, UTF-16 tartibida taqqoslaydi. Tilga mos tartiblashda localeCompare ishlatiladi: natijaning manfiy, musbat yoki 0 ekaniga qarang.",
        "code": "console.log(\"Ali\" === \"Ali\"); // true\nconsole.log(\"Ali\" === \"ali\"); // false\nconsole.log(\"10\" < \"2\");      // true\nconsole.log(Number(\"10\") < Number(\"2\")); // false\nconsole.log(\"a\".localeCompare(\"b\", \"uz\") < 0); // true",
        "note": "localeCompare har doim aynan -1 yoki 1 qaytarishini kutmang. Manfiy natija — oldin, musbat — keyin, 0 — tanlangan solishtirish qoidalariga ko‘ra teng."
      },
      {
        "title": "18. Unicode: length har doim ko‘rinadigan belgi soni emas",
        "text": "JavaScript stringlarni UTF-16 kod birliklari bilan ifodalaydi. Oddiy A bitta birlik, 😀 esa ikkita birlik egallaydi. Shu sababli length ni barcha matnlarda ekrandagi belgi soni deb qabul qilib bo‘lmaydi. Spread kodi Unicode code point larni ajratadi, ammo bu ham har doim ko‘rinadigan belgi bilan bir xil emas.",
        "code": "console.log(\"A\".length);     // 1\nconsole.log(\"😀\".length);    // 2\nconsole.log([...\"😀\"].length); // 1\n\nconst a = \"é\";\nconst b = \"e\\u0301\";\nconsole.log(a === b); // false\nconsole.log(a.normalize(\"NFC\") === b.normalize(\"NFC\")); // true",
        "note": "é bitta kod bilan ham, e va qo‘shiluvchi urg‘u belgisi bilan ham ifodalanishi mumkin. normalize(\"NFC\") mos ifodalarni bir ko‘rinishga keltirishga yordam beradi. Lekin u barcha o‘xshash yozuvlarni bir xil qilmaydi."
      },
      {
        "title": "19. Ko‘rinadigan belgilar va kod nuqtalari",
        "text": "Bir nechta code point birlashib bitta ko‘rinadigan belgi — grapheme hosil qilishi mumkin. Masalan, oilaviy emoji bir nechta qismdan tuzilgan. Zamonaviy muhitda Intl.Segmenter matnni grapheme bo‘yicha ajratishi mumkin. Bu boshlang‘ich metodlardan keyin o‘rganiladigan chuqurroq qism.",
        "code": "const oila = \"👨‍👩‍👧‍👦\";\nconsole.log(oila.length);      // 11 — UTF-16 birliklari\nconsole.log([...oila].length); // 7 — code point lar\n\nconst ajrat = new Intl.Segmenter(\"uz\", { granularity: \"grapheme\" });\nconsole.log([...ajrat.segment(oila)].length); // 1\nconsole.log(\"😀\".codePointAt(0)); // 128512\nconsole.log(String.fromCodePoint(128512)); // \"😀\"",
        "note": "charCodeAt UTF-16 kod birligini, codePointAt esa shu joydan boshlanadigan Unicode kod nuqtasini beradi. Eski muhitlarda Intl.Segmenter mavjudligini tekshirish yoki mos yordamchi kutubxona kerak bo‘lishi mumkin."
      },
      {
        "title": "20. Ko‘p uchraydigan xatolar va amaliy mashq",
        "text": "Natijani saqlamaslik, length ga () qo‘yish, indexOf ning 0 natijasini “topilmadi” deb olish va null ga metod chaqirish ko‘p uchraydi. Foydalanuvchi kiritgan qiymatni tozalashda qanday qiymat qabul qilinishi kerakligini oldin aniqlang.",
        "code": "let ism = \"  ALI  \";\nism.trim();\nconsole.log(ism); // \"  ALI  \" — o‘zgarmadi\n\nism = ism.trim().toLowerCase();\nconsole.log(ism); // \"ali\"\n\nconst kirish = null;\n// kirish.trim(); // TypeError\nconst xavfsizMatn = String(kirish ?? \"\").trim();\nconsole.log(xavfsizMatn); // \"\"",
        "note": "?? chapdagi qiymat null yoki undefined bo‘lsa o‘ngdagi bo‘sh matnni oladi. Bu misol boshqa turdagi qiymatlarni ham String bilan matnga aylantiradi; faqat matn qabul qilish kerak bo‘lsa typeof bilan alohida tekshiring. Mini-loyiha: \"  Ali Valiyev  \" ni tozalang, katta harfli ko‘rinishini va bosh harflarini A.V. shaklida oling."
      }
    ],
    "takeaway": "String — primitive va o‘zgarmas matn. let ga boshqa string berish mumkin.\nlength — xususiyat, trim() kabi yozuvlar — metod.\nIndeks 0 dan boshlanadi; slice oxirgi indeksni kiritmaydi.\nTemplate literal backtick va ${...} bilan yoziladi.\nMatn metodlarining qaytarish turlari har xil: includes → boolean, indexOf → number, split → massiv, trim → string.\nMetod natijasini saqlamasangiz, asl matn o‘zgarmaydi.\nindexOf topmasa -1; boshidan topsa 0.\nlength UTF-16 birliklarini sanaydi; emoji uchun ko‘rinadigan belgilar soniga teng bo‘lmasligi mumkin.",
    "exercise": "Quyidagi 15 ta natijani avval o‘zingiz toping. Har bir javobning turi string, number, boolean, massiv yoki undefined ekanini ham ayting. Keyin javoblarni ochib solishtiring. So‘ng 20-bo‘limdagi mini-loyihani bajaring.",
    "fullTextDefault": true,
    "exerciseCode": "const ism = \"  Ali  \";\nconsole.log(ism.trim());                 // 1: ?\nconsole.log(ism.length);                 // 2: ?\nconsole.log(\"Ali\"[0]);                   // 3: ?\nconsole.log(\"Ali\".at(-1));               // 4: ?\nconsole.log(\"JavaScript\".indexOf(\"Script\")); // 5: ?\nconsole.log(\"JavaScript\".includes(\"script\")); // 6: ?\nconsole.log(\"JavaScript\".slice(0, 4));    // 7: ?\nconsole.log(\"a-a\".replace(\"a\", \"b\"));     // 8: ?\nconsole.log(\"a-a\".replaceAll(\"a\", \"b\"));  // 9: ?\nconsole.log(\"a,b\".split(\",\").join(\"-\"));   // 10: ?\nconsole.log(\"7\".padStart(3, \"0\"));        // 11: ?\nconsole.log(\"5\" + 1);                    // 12: ?\nconsole.log(Number(\"5\") + 1);            // 13: ?\nconsole.log(\"😀\".length);                 // 14: ?\nconsole.log(\"Ali\"[99]);                  // 15: ?",
    "exerciseAnswer": "1. \"Ali\" — trim chetdagi bo‘shliqlarni olib tashladi.\n2. 7 — asl ism o‘zgarmagan: 2 bo‘shliq + 3 harf + 2 bo‘shliq.\n3. \"A\" — indeks 0 dan boshlanadi.\n4. \"i\" — at(-1) oxirgi birlik.\n5. 4 — Script qismi S harfidan, 4-indeksdan boshlanadi.\n6. false — kichik s katta S bilan mos emas.\n7. \"Java\" — 0 kiradi, 4 kirmaydi.\n8. \"b-a\" — faqat birinchi mos a almashtirildi.\n9. \"b-b\" — barcha mos a almashtirildi.\n10. \"a-b\" — split massiv yaratdi, join uni tire bilan yig‘di.\n11. \"007\" — jami uzunlik 3 ga yetkazildi.\n12. \"51\" — matn birlashtirish.\n13. 6 — avval songa aylantirish, keyin qo‘shish.\n14. 2 — 😀 ikkita UTF-16 kod birligi.\n15. undefined — 99-indeks mavjud emas.\n\nMini-loyiha yechimlaridan biri:\nconst toza = \"  Ali Valiyev  \".trim();\nconst qismlar = toza.split(\" \");\nconsole.log(toza.toUpperCase()); // \"ALI VALIYEV\"\nconsole.log(qismlar[0][0] + \".\" + qismlar[1][0] + \".\"); // \"A.V.\"\nBu sodda yechim aynan ikkita, bittadan bo‘shliq bilan ajratilgan ism uchun. Ko‘proq bo‘shliqlar va qismlar bo‘lsa, ajratish qoidalarini kengaytiring.",
    "resources": [
      {
        "title": "MDN: String va metodlar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
      },
      {
        "title": "MDN: length va UTF-16",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
      },
      {
        "title": "MDN: ko‘rinadigan belgilarni ajratish",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter"
      }
    ],
    "learningGuide": {
      "goal": "Matnni tozalab, kerakli bo‘lakni ajratasiz va metod qaytargan qiymat turini ayta olasiz.",
      "prerequisites": [
        "data-types",
        "typeof"
      ],
      "terms": [
        {
          "term": "Indeks",
          "meaning": "Qiymatning joylashuv raqami; stringda 0 dan boshlanadi."
        },
        {
          "term": "Metod",
          "meaning": "Matn ustida chaqiriladigan tayyor ish: trim(), slice(...)."
        },
        {
          "term": "Immutable",
          "meaning": "Qiymatning o‘zini joyida o‘zgartirib bo‘lmasligi; yangi string yaratish mumkin."
        },
        {
          "term": "Callback",
          "meaning": "Boshqa funksiya kerak paytda chaqirishi uchun berilgan funksiya; keyingi darslarda chuqurlashadi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Chet bo‘shliqlar olib tashlangan Ali chiqishi kerak. Nega asl matn qolgan?",
        "brokenCode": "const ism = \"  Ali  \";\nism.trim();\nconsole.log(ism);",
        "fixedCode": "const ism = \"  Ali  \";\nconst toza = ism.trim();\nconsole.log(toza);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "trim yangi string qaytaradi. Natijani alohida nomga oldik, asl stringni joyida o‘zgartirishga urinmadik.",
        "runtime": "javascript"
      },
      "write": {
        "task": "\"  Ali Valiyev  \" ni tozalang, katta harfli ko‘rinishini va bosh harflarini A.V. shaklida oling.",
        "criteria": [
          "\"  Ali Valiyev  \" dan chet bo‘shliqlarsiz matn chiqadi.",
          "Katta harfli ko‘rinish va A.V. bosh harflari chiqadi.",
          "Asl string va yangi natija farqini tushuntirasiz."
        ],
        "hint": "trim bilan tozalang, split(\" \") bilan ikkita qism oling, har qismning [0] belgisini nuqtalar bilan birlashtiring. Bu sodda yechim aynan ikkita, bitta bo‘shliq bilan ajratilgan ismga mos."
      }
    }
  },
  {
    "id": "operators",
    "title": "Operatorlar: noldan",
    "question": "Arifmetik, qiymat berish, taqqoslash, mantiqiy va shart operatorlari qanday ishlaydi?",
    "explanation": "Operator — qiymat ustida amal bajaradigan belgi. 2 + 3 misolida + operator, 2 va 3 esa operandlar. Ifoda natija beradi, = esa natijani o‘zgaruvchiga yozadi. Avval qiymatlarning turini, keyin amalni aniqlaymiz.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Avval narx 10, dona 3. Ko‘paytirish 30 beradi, lekin narx o‘zgarmaydi. narx += 2 o‘zgaruvchini 12 ga yangilaydi. console.log qiymatni ko‘rsatadi.",
        "code": "let narx = 10;\nconst dona = 3;\nconst jami = narx * dona;\nconsole.log(jami);\nnarx += 2;\nconsole.log(narx);",
        "expectedOutput": [
          30,
          12
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [30, 12]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Arifmetik operatorlar",
        "text": "+ (qo‘shish/birlashtirish), - (ayirish), * (ko‘paytirish), / (bo‘linish), % (qoldiq), ** (daraja). Faqat + ikki xil ishlaydi: sonlar uchun qo‘shadi, string bor bo‘lsa birlashtiradi.",
        "code": "console.log(2 + 3); // 5\nconsole.log(\"2\" + 3); // \"23\"\nconsole.log(10 % 3); // 1\nconsole.log(3 ** 2); // 9"
      },
      {
        "title": "3. Qiymat berish (assignment)",
        "text": "= qiymat beradi. +=, -=, *=, /=, %= qisqa yozuv: x += 2 x = x + 2 bilan bir xil. Bu o‘zgaruvchining qiymatini o‘zgartiradi.",
        "code": "let x = 5;\nx += 2; // x = x + 2 → 7\nx *= 3; // x = x * 3 → 21\nconsole.log(x); // 21"
      },
      {
        "title": "4. Inkrement va dekrement",
        "text": "++ qiymatni 1 ga oshiradi, -- kamaytiradi. Prefix (++x) avval oshirib, keyin qiymatni beradi; postfix (x++) avval qiymatni berib, keyin oshiradi. Bu farq kod o‘qishda muhim.",
        "code": "let a = 5;\nconsole.log(a++); // 5 (eski qiymat), keyin a = 6\nconsole.log(a); // 6\n\nlet b = 5;\nconsole.log(++b); // 6 (yangi qiymat)\nconsole.log(b); // 6"
      },
      {
        "title": "5. Mantiqiy operatorlar",
        "text": "&& (VA), || (YOKI), ! (INKOR). && va || qisqa baholash (short-circuit) qiladi: && chap qiymat falsy bo‘lsa o‘ngni hisoblamaydi; || chap truthy bo‘lsa o‘ngni hisoblamaydi. Ular boolean emas, operandlardan birini qaytaradi.",
        "code": "console.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!0); // true\nconsole.log(\"Ali\" && 5); // 5 (oxirgi truthy)\nconsole.log(0 && 5); // 0 (chap falsy, o‘ng hisoblanmadi)\nconsole.log(\"Ali\" || \"Vali\"); // \"Ali\"",
        "note": "Kod o‘qiyotganda \"qaysi operand qaytadi?\" deb so‘ra: && oxirgi truthy yoki birinchi falsy, || birinchi truthy yoki oxirgi falsy."
      },
      {
        "title": "6. Shart (ternary) operatori",
        "text": "shart ? ha : yo‘q — if/else ning qisqa shakli. Shart truthy bo‘lsa birinchi, aks holda ikkinchi qiymat qaytadi.",
        "code": "const yosh = 18;\nconsole.log(yosh >= 18 ? \"kattaman\" : \"yoshman\"); // kattaman\n\nconst x = 0;\nconsole.log(x ? \"bor\" : \"yo'q\"); // yo'q"
      },
      {
        "title": "7. Operator ustunligi",
        "text": "Avval qavs, keyin **, keyin *, /, %, so‘ngra +, -, oxirida taqqoslash va mantiqiy. Qavs qo‘yish eng xavfsiz: hisoblash tartibini eshlash shart emas.",
        "code": "console.log(2 + 3 * 4); // 14 (avval 3*4)\nconsole.log((2 + 3) * 4); // 20\nconsole.log(2 ** 3 ** 2); // 512 (2 ** (3 ** 2))\nconsole.log(1 + 2 + \"3\"); // \"33\" (chapdan o‘ngga)"
      },
      {
        "title": "8. typeof, void va vergul",
        "text": "typeof qiymat turini string sifatida beradi. void ifodani bajarib undefined qaytaradi (kamdan kam ishlatiladi). Vergul operatori oxirgi ifodani qaytaradi: (1, 2, 3) → 3.",
        "code": "console.log(typeof 5); // \"number\"\nconsole.log(typeof \"5\"); // \"string\"\nconsole.log(void 5); // undefined\nconsole.log((1, 2, 3)); // 3"
      },
      {
        "title": "9. Taqqoslash va yo‘q qiymat uchun zaxira",
        "text": ">, >=, <, <= tartibni, === va !== tur o‘zgartirmasdan tenglikni tekshiradi. ?? faqat null/undefined uchun zaxira tanlaydi. Mantiqiy assignment ham qiymatni faqat kerak bo‘lsa yozadi.",
        "code": "console.log(5 >= 5);\nconsole.log(5 !== \"5\");\nlet ball = 0;\nball ??= 100;\nconsole.log(ball);",
        "expectedOutput": [
          true,
          true,
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "10. Bitwise belgilarni tanish",
        "text": "& bitli VA, | bitli YOKI, ^ XOR, ~ bitlarni teskarilash, << va >> siljitishdir. Bular && va || bilan bir xil emas. Number bilan >>> natijani ishorasiz 32-bit ko‘rinishda beradi. BigInt bilan >>> ishlamaydi.",
        "code": "console.log(5 & 3);\nconsole.log(5 | 3);\nconsole.log(1 << 2);",
        "expectedOutput": [
          1,
          7,
          4
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "11. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "= bilan === ni aralashtirmang: biri yozadi, biri taqqoslaydi. % foiz emas, qoldiq. && va || doim boolean qaytarmaydi. ?? ni && yoki || bilan qavssiz aralashtirish SyntaxError. Bitwise operatorlar oddiy Number qiymatlarini ko‘pincha 32-bit butun songa keltiradi; ularni oddiy yaxlitlash o‘rniga ko‘r-ko‘rona ishlatmang."
      },
      {
        "title": "12. Kichik amaliy loyiha",
        "text": "Narx, dona va chegirma foizidan yakuniy summani hisoblang. Dona 0 bo‘lsa uni yo‘q qiymat deb almashtirmang. Hisoblash tartibini qavs bilan ko‘rsating."
      }
    ],
    "takeaway": "Operator — qiymat ustida amal bajaradigan belgi.\n= bilan === ni aralashtirmang: biri yozadi, biri taqqoslaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Narx, dona va chegirma foizidan yakuniy summani hisoblang. Dona 0 bo‘lsa uni yo‘q qiymat deb almashtirmang. Hisoblash tartibini qavs bilan ko‘rsating.\n\nQo‘shimcha savollar:\n1) console.log(\"3\" + 2) natijasi?\n2) let x = 1; console.log(x++); console.log(x) natijalari?\n3) \"Ali\" || \"Vali\" nima qaytaradi?\n4) 0 && 5 nima va nega 5 hisoblanmaydi?\n5) 2 + 3 * 4 natijasi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "let x = 2;\nconsole.log(x++);\nconsole.log(++x);\nconsole.log(\"3\" + 2);\nconsole.log(0 ?? 10);\nconsole.log(2 + 3 * 4);",
    "exerciseExpected": [
      2,
      4,
      "32",
      0,
      14
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — postfix avval eski 2 ni beradi, x keyin 3\n2. 4 — prefix x ni 4 qilib beradi\n3. \"32\" — string borligi uchun birlashtirish\n4. 0 — 0 null yoki undefined emas\n5. 14 — ko‘paytirish oldin\n\nLoyihani yechish yo‘li: jami = narx * dona; chegirma = jami * foiz / 100; natija = jami - chegirma. Kiritish son ekanini va diapazonlarini tekshiring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators"
      }
    ],
    "learningGuide": {
      "goal": "Amal ustunligi, qiymat berish va taqqoslash farqini bilib, to‘g‘ri hisoblash ifodasini yozasiz.",
      "prerequisites": [
        "numbers-math",
        "typeof"
      ],
      "terms": [
        {
          "term": "Ifoda",
          "meaning": "Hisoblanib bir qiymat beradigan kod: 2 + 3."
        },
        {
          "term": "Operand",
          "meaning": "Operator ishlaydigan qiymat: x * 2 da x va 2."
        },
        {
          "term": "Qisqa baholash",
          "meaning": "Natija ma’lum bo‘lsa o‘ng tomondagi ifoda bajarilmasligi."
        },
        {
          "term": "Ternary",
          "meaning": "Shartga qarab ikki qiymatdan birini tanlash: shart ? ha : yo‘q."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "200 ning 10 foizi 20 bo‘lishi kerak. Qoldiq bilan foizni adashtirmang.",
        "brokenCode": "const summa = 200;\nconsole.log(summa % 10);",
        "fixedCode": "const summa = 200;\nconsole.log(summa * 10 / 100);",
        "expectedOutput": [
          20
        ],
        "explanation": "% bo‘lish qoldig‘i. Foiz uchun asosiy summani foizga ko‘paytirib 100 ga bo‘lamiz.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Narx, dona va chegirma foizidan yakuniy summani hisoblang. Dona 0 bo‘lsa uni yo‘q qiymat deb almashtirmang. Hisoblash tartibini qavs bilan ko‘rsating.",
        "criteria": [
          "3 dona 10 lik mahsulot jami 30 bo‘ladi.",
          "10 foiz chegirma bilan natija 27 bo‘ladi.",
          "Dona 0 bo‘lganda zaxira bilan almashtirilmaydi."
        ],
        "hint": "jami = narx * dona; chegirma = jami * foiz / 100; natija = jami - chegirma. Kiritish son ekanini va diapazonlarini tekshiring."
      }
    }
  },
  {
    "id": "coercion-equality",
    "title": "Type coercion, == va === qoidalari",
    "question": "Avtomatik tur o‘zgartirish qanday ishlaydi? Ikki teng va uch teng farqi, batafsil qoidalari qanday?",
    "explanation": "Conversion — tur o‘zgartirish. Number(\"5\") ni o‘zingiz yozsangiz bu aniq aylantirish; \"5\" - 1 da JavaScriptning o‘zi aylantirsa coercion deyiladi. == va === ikkalasi tenglikni tekshiradi, lekin faqat == ayrim turlar uchun aylantirish qoidalarini qo‘llaydi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Kiritish boshida matn. === matn va sonni bir xil deb qabul qilmaydi. Number yangi son qaytaradi; asl kiritish o‘zgaruvchisi string bo‘lib qoladi.",
        "code": "const kiritish = \"20\";\nconsole.log(typeof kiritish);\nconsole.log(kiritish === 20);\nconst yosh = Number(kiritish);\nconsole.log(yosh === 20);",
        "expectedOutput": [
          "string",
          false,
          true
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"string\", false, true]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. +: son qo‘shish yoki matn birlashtirish",
        "text": "Avval operandlar primitive qiymatga keltiriladi. Shundan so‘ng bittasi string bo‘lsa, ikkinchisi ham string qilinib birlashtiriladi. Aks holda sonli qo‘shish bajariladi. Bir qatordagi + amallari chapdan o‘ngga hisoblanadi.",
        "code": "console.log(\"5\" + 2);     // \"52\"\nconsole.log(5 + 2);       // 7\nconsole.log(1 + 2 + \"3\"); // \"33\": 3 + \"3\"\nconsole.log(\"1\" + 2 + 3); // \"123\": \"12\" + 3\nconsole.log(true + 1);    // 2\nconsole.log(null + 1);    // 1",
        "note": "BigInt bilan Number’ni arifmetik amalda aralashtirish TypeError beradi: 1n + 1. Ammo \"1\" + 1n matn birlashtirish bo‘lib \"11\" qaytaradi."
      },
      {
        "title": "3. -, *, /: sonli hisoblash",
        "text": "Bu operatorlar matn birlashtirmaydi. Qiymatlar sonli turga aylantiriladi. Oddiy raqamli string son bo‘ladi; son sifatida o‘qib bo‘lmaydigan matn NaN beradi.",
        "code": "console.log(\"5\" - 2);    // 3\nconsole.log(\"5\" * 2);    // 10\nconsole.log(\"10\" / 2);   // 5\nconsole.log(\"salom\" - 2); // NaN\nconsole.log(\"\" - 0);     // 0\nconsole.log(\"   \" - 0);  // 0\nconsole.log(true * 5);   // 5\nconsole.log(null - 0);   // 0\nconsole.log(undefined - 0); // NaN"
      },
      {
        "title": "4. ===: birinchi navbatda tur",
        "text": "=== tur o‘zgartirmaydi. Turlar farq qilsa false. Turlar bir xil bo‘lsa, shu turga mos tenglik qoidasi ishlaydi. Number uchun NaN hech narsaga, hatto o‘ziga teng emas; +0 va -0 teng. String belgilar ketma-ketligi bo‘yicha teng. Obyektlar tarkibi bilan emas, aynan bitta obyekt ekanligi bilan tekshiriladi.",
        "code": "console.log(5 === \"5\");    // false: number va string\nconsole.log(5 === 5);      // true\nconsole.log(\"Ali\" === \"Ali\"); // true\nconsole.log(\"Ali\" === \"ali\"); // false\nconsole.log(true === 1);   // false\nconsole.log(null === null); // true\nconsole.log(undefined === undefined); // true\nconsole.log(NaN === NaN);  // false\nconsole.log(+0 === -0);    // true"
      },
      {
        "title": "5. ==: asosiy qoidalar ketma-ketligi",
        "text": "== hamma narsani bitta turga ko‘r-ko‘rona aylantirmaydi. Muayyan juftliklarga qarab qoida tanlaydi. Quyidagi holatlarni tartib bilan o‘rgan:\n\n1) Turlar bir xil bo‘lsa → === kabi taqqoslanadi.\n2) null va undefined juftligi → true. Ularni bu tekshiruvda 0 ga aylantirmaydi.\n3) Number va String → string songa aylantiriladi, qayta solishtiriladi.\n4) Operandlardan biri Boolean bo‘lsa → true 1 ga, false 0 ga aylanadi; solishtirish davom etadi.\n5) Obyekt va String/Number/BigInt/Symbol bo‘lsa → obyekt primitive qiymatga keltiriladi; solishtirish davom etadi.\n6) BigInt va String → string butun BigInt sifatida o‘qilsa solishtiriladi; yaroqsiz string bo‘lsa false.\n7) BigInt va Number → sonli qiymatlar matematik teng bo‘lsa true; Number kasr, NaN yoki Infinity bo‘lsa false.\n8) Mos qoida bo‘lmasa → false.",
        "code": "console.log(5 == \"5\");    // true: 5 == 5\nconsole.log(false == 0);  // true: 0 == 0\nconsole.log(true == \"1\"); // true: 1 == \"1\" → 1 == 1\nconsole.log(null == undefined); // true: maxsus qoida\nconsole.log(null == 0);   // false\nconsole.log(undefined == 0); // false",
        "note": "Brauzerdagi eski document.all obyektining null/undefined bilan == uchun maxsus tarixiy istisnosi bor. Oddiy dastur qiymatlarida null == undefined juftligi qoidasiga tayansa bo‘ladi."
      },
      {
        "title": "6. Eng ko‘p adashtiradigan holat: false va string",
        "text": "false == \"0\" tekshiruvi string’ni Boolean’ga aylantirmaydi. Avval false → 0, so‘ng \"0\" → 0. Shuning uchun natija true. Boolean(\"0\") esa true, chunki bu bo‘sh bo‘lmagan string. Tenglik qoidasi bilan truthy/falsy qoidasi bir xil emas.",
        "code": "console.log(false == \"0\");  // true: 0 == 0\nconsole.log(Boolean(\"0\"));   // true\nconsole.log(false === \"0\"); // false\n\nconsole.log(0 == \"\");       // true: 0 == 0\nconsole.log(0 == \"   \");    // true: 0 == 0\nconsole.log(false == \"false\"); // false: 0 == NaN\nconsole.log(true == 2);      // false: 1 == 2"
      },
      {
        "title": "7. null, undefined va NaN",
        "text": "null va undefined == bilan o‘zaro teng, lekin 0, false yoki bo‘sh stringga teng emas. NaN esa == va === bilan hech qachon o‘ziga teng bo‘lmaydi. NaN’ni Number.isNaN bilan tekshir.",
        "code": "console.log(null == undefined);  // true\nconsole.log(null === undefined); // false\nconsole.log(null == false);      // false\nconsole.log(null == \"\");         // false\nconsole.log(undefined == false); // false\nconsole.log(NaN == NaN);         // false\nconsole.log(Number.isNaN(NaN));  // true"
      },
      {
        "title": "8. Obyekt va massiv: tarkib tengligi emas",
        "text": "Ikkala operand ham obyekt bo‘lsa, == ham === ham aynan bitta obyektni ko‘rsatayaptimi deb tekshiradi. Yangi yaratilgan ikkita massiv ichidagi qiymatlar bir xil bo‘lsa ham teng emas. Bitta obyekt va primitive solishtirilganda esa == obyektni primitive’ga aylantirishi mumkin.",
        "code": "const a = [1];\nconst b = a;\nconsole.log(a === b);    // true: bitta massiv\nconsole.log(a == b);     // true\nconsole.log([1] === [1]); // false: ikki massiv\nconsole.log([1] == [1]);  // false\n\nconsole.log([] == 0);    // true: [] → \"\" → 0\nconsole.log([5] == 5);   // true: [5] → \"5\" → 5\nconsole.log([] === 0);   // false",
        "note": "Oddiy massivlarda primitive’ga aylanish odatda matn orqali bo‘ladi. Maxsus obyektlarda Symbol.toPrimitive/valueOf/toString natijani belgilashi mumkin; obyekt doim oddiy string bo‘ladi deb o‘ylama."
      },
      {
        "title": "9. BigInt va Symbol — qo‘shimcha qoidalar",
        "text": "== BigInt bilan boshqa ayrim turlarni qiymat bo‘yicha solishtira oladi. === esa tur farq qilsa false. Alohida yaratilgan Symbol qiymatlari tavsifi bir xil bo‘lsa ham bir xil emas.",
        "code": "console.log(5n == 5);      // true\nconsole.log(5n === 5);     // false\nconsole.log(5n == \"5\");    // true\nconsole.log(5n == \"5.0\");  // false: yaroqli BigInt matni emas\nconsole.log(5n == 5.1);    // false\n\nconst s = Symbol(\"id\");\nconsole.log(s === s);      // true\nconsole.log(Symbol(\"id\") == Symbol(\"id\")); // false"
      },
      {
        "title": "10. =, ==, === va amaliy tanlov",
        "text": "= qiymat beradi. == tur o‘zgartirish qoidalari bilan tenglikni tekshiradi. === tur o‘zgartirmasdan tenglikni tekshiradi. Odatda === tanla, tashqaridan kelgan ma’lumotni kerakli turga aniq aylantir. != — == natijasining teskarisi; !== — === natijasining teskarisi.",
        "code": "let yosh = 20; // qiymat berish\nconsole.log(yosh == \"20\");  // true\nconsole.log(yosh === \"20\"); // false\nconsole.log(yosh !== \"20\"); // true\n\nconst input = \"20\";\nconst son = Number(input);\nif (Number.isFinite(son) && son === 20) {\n  console.log(\"Yosh 20\");\n}\n\nconst qiymat = null;\nconsole.log(qiymat == null);\n// true: null yoki undefined tekshiruvi\nconsole.log(qiymat === null || qiymat === undefined);\n// Yuqoridagi maqsadning ochiq yozilishi",
        "note": "Number(\"\") va Number(\"   \") ham 0 beradi. Forma uchun bo‘sh kiritishni son qilib aylantirishdan oldin alohida tekshir. == null ishlatish — ikkala yo‘qlik qiymatini qasddan qamrash usuli."
      },
      {
        "title": "11. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Boolean(\"0\") true bo‘lsa ham \"0\" == false true chiqishi mumkin: boolean baholash bilan tenglik algoritmi boshqa. Obyektlarning == bilan solishtirilishi ham ularning maydonlarini solishtirmaydi. Number(\"\") 0 bo‘lgani uchun bo‘sh inputni oldin tekshiring. BigInt arifmetikasini Number bilan aralashtirish xato beradi."
      },
      {
        "title": "12. Kichik amaliy loyiha",
        "text": "Yosh qabul qiladigan funksiya yozing: bo‘sh matnni rad etsin, qolganini Number bilan aylantirsin va chekli, manfiy bo‘lmagan son ekanini tekshirsin."
      }
    ],
    "takeaway": "Conversion — tur o‘zgartirish.\nBoolean(\"0\") true bo‘lsa ham \"0\" == false true chiqishi mumkin: boolean baholash bilan tenglik algoritmi boshqa.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Yosh qabul qiladigan funksiya yozing: bo‘sh matnni rad etsin, qolganini Number bilan aylantirsin va chekli, manfiy bo‘lmagan son ekanini tekshirsin.\n\nQo‘shimcha savollar:\nHar biriga natija va sabab yoz:\n1) \"\" == false\n2) \"0\" === 0\n3) null == 0\n4) undefined == null\n5) [] == false\n6) [] === []\n7) \"2\" + 1 + 1\n8) \"2\" - 1 + 1\n\nFaqat true/false demasdan, qaysi qiymat qaysi turga o‘tganini ham ayt.",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(\"\" == false);\nconsole.log(\"0\" === 0);\nconsole.log(null == undefined);\nconsole.log([] === []);\nconsole.log(\"2\" - 1 + 1);",
    "exerciseExpected": [
      true,
      false,
      true,
      false,
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. true — false 0 ga, bo‘sh matn 0 ga aylanadi\n2. false — turlar boshqa\n3. true — == ning maxsus yo‘qlik juftligi\n4. false — ikkita mustaqil massiv\n5. 2 — minus sonli aylantirish qiladi, keyin 1 qo‘shiladi\n\nLoyihani yechish yo‘li: Avval input.trim() bo‘sh emasligini tekshiring. Number(input) dan keyin Number.isFinite va >= 0 tekshiruvini bajaring. Bu tekshiruvning o‘zi odam yoshini biznes qoidalariga mosligini kafolatlamaydi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
      }
    ],
    "learningGuide": {
      "goal": "Qaysi joyda tur avtomatik o‘zgarishini ko‘rib, == va === natijasini sabab bilan tushuntirasiz.",
      "prerequisites": [
        "operators",
        "data-types"
      ],
      "terms": [
        {
          "term": "Conversion",
          "meaning": "Qiymatni boshqa turga aylantirish."
        },
        {
          "term": "Coercion",
          "meaning": "Amal davomida JavaScriptning avtomatik tur aylantirishi."
        },
        {
          "term": "Qat’iy tenglik",
          "meaning": "=== tekshiruvi: turlarni avtomatik bir xil qilmaydi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Forma matnidan 20 sonini aniq tekshiring. Faqat == ga almashtirish o‘rniga kirishni aylantiring.",
        "brokenCode": "const input = \"20\";\nconsole.log(input === 20);",
        "fixedCode": "const input = \"20\";\nconsole.log(Number(input) === 20);",
        "expectedOutput": [
          true
        ],
        "explanation": "Kiritishning turi oldin aniq aylantirildi, keyin qat’iy tenglik tekshirildi. Haqiqiy formada bo‘sh kirish ham alohida tekshiriladi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Yosh qabul qiladigan funksiya yozing: bo‘sh matnni rad etsin, qolganini Number bilan aylantirsin va chekli, manfiy bo‘lmagan son ekanini tekshirsin.",
        "criteria": [
          "\"20\" kirishi yaroqli 20 soniga aylantiriladi.",
          "Bo‘sh kirish xato sifatida ajratiladi.",
          "NaN yoki manfiy qiymat qabul qilinmaydi."
        ],
        "hint": "Avval input.trim() bo‘sh emasligini tekshiring. Number(input) dan keyin Number.isFinite va >= 0 tekshiruvini bajaring. Bu tekshiruvning o‘zi odam yoshini biznes qoidalariga mosligini kafolatlamaydi."
      }
    }
  },
  {
    "id": "truthy-falsy",
    "title": "Truthy va Falsy",
    "question": "Truthy va falsy nima? Boolean([]) nega true, Boolean(\"\") nega false?",
    "explanation": "Truthy va falsy — yangi tur nomlari emas. Ular qiymat shart sifatida ishlatilganda true yoki false deb baholanishini bildiradi. Boolean(x) shu bahoni ko‘rsatadi. “Bo‘sh” degan kundalik so‘z bilan JavaScript bahosi doim mos kelmaydi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "royxat — obyekt bo‘lgani uchun truthy. Undagi elementlar soni 0, demak length > 0 false. Bo‘sh string esa falsy. Bular uchta turli tekshiruv.",
        "code": "const royxat = [];\nconsole.log(Boolean(royxat));\nconsole.log(royxat.length > 0);\nconsole.log(Boolean(\"\"));",
        "expectedOutput": [
          true,
          false,
          false
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [true, false, false]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Avval sen so‘ragan ikkita misol",
        "text": "[] — bo‘sh massiv. Massiv obyekt hisoblanadi va oddiy obyektlar boolean kontekstda har doim truthy: ichidagi elementlar soni tekshirilmaydi. \"\" esa uzunligi 0 bo‘lgan bo‘sh string; u falsy ro‘yxatiga kiradi. Shuning uchun natijalar farqli.",
        "code": "console.log(Boolean([])); // true\nconsole.log(Boolean(\"\")); // false",
        "note": "[] va \"\" ikkalasi kundalik tilda “bo‘sh” bo‘lishi mumkin. Lekin JavaScript uchun ular boshqa turlar: biri massiv-obyekt, ikkinchisi string. Boolean barcha turlar uchun umumiy “bo‘shlik tekshiruvi” emas."
      },
      {
        "title": "3. Boolean qanday qaror qiladi?",
        "text": "Boolean qiymatni baholaydi: falsy qiymatlardan birimi? Ha bo‘lsa false; qolgan oddiy qiymatlar uchun true. Massivning length qiymatini, obyektning kalitlarini yoki stringdagi yozuvning ma’nosini avtomatik tekshirmaydi.",
        "code": "Boolean([])       // true: massiv-obyekt\nBoolean([0])      // true: massiv-obyekt\nBoolean([false])  // true: massiv-obyekt\nBoolean({})       // true: obyekt\n\nBoolean(\"\")       // false: 0 ta belgi\nBoolean(\" \")      // true: bitta bo‘sh joy belgisi\nBoolean(\"0\")      // true: bitta belgi\nBoolean(\"false\")  // true: beshta belgi"
      },
      {
        "title": "4. Bir xil massiv, ikki xil savol",
        "text": "Boolean(list) — massivning boolean bahosi qanday? list.length > 0 — massivda element bormi? Bu boshqa-boshqa savollar, shuning uchun javoblar farq qilishi tabiiy.",
        "code": "const list = [];\n\nconsole.log(Boolean(list));        // true\nconsole.log(list.length);          // 0\nconsole.log(Boolean(list.length)); // false\nconsole.log(list.length > 0);      // false\n\nlist.push(\"Olma\");\nconsole.log(Boolean(list));        // true: oldin ham true edi\nconsole.log(list.length > 0);      // true: endi element bor"
      },
      {
        "title": "5. if, Boolean va !! bog‘liqligi",
        "text": "if shart bajarilishini tanlash uchun boolean baholashdan foydalanadi. Boolean(x) va !!x shu bahoni true/false qiymati sifatida beradi. ! esa bahoni teskarilaydi.",
        "code": "if ([]) {\n  console.log(\"A ishlaydi\");\n}\n\nif (\"\") {\n  console.log(\"B ishlamaydi\");\n} else {\n  console.log(\"C ishlaydi\");\n}\n\nconsole.log(!![]); // true\nconsole.log(![]);  // false\nconsole.log(!!\"\"); // false\nconsole.log(!\"\");  // true"
      },
      {
        "title": "6. Falsy qiymatlar: yodlab oladigan ro‘yxat",
        "text": "Oddiy JavaScript qiymatlaridan false, 0, -0, 0n, bo‘sh string (\"\"), null, undefined va NaN boolean kontekstda false bo‘ladi. Qolgan oddiy qiymatlar truthy. BigInt’da -0n ham aynan 0n qiymatidir.",
        "code": "console.log(Boolean(false));     // false\nconsole.log(Boolean(0));         // false\nconsole.log(Boolean(-0));        // false\nconsole.log(Boolean(0n));        // false\nconsole.log(Boolean(\"\"));        // false\nconsole.log(Boolean(null));      // false\nconsole.log(Boolean(undefined)); // false\nconsole.log(Boolean(NaN));       // false",
        "note": "Brauzerdagi eski document.all — falsy bo‘ladigan maxsus tarixiy istisno. Odatdagi kod uchun yuqoridagi ro‘yxatni bilish yetarli."
      },
      {
        "title": "7. Truthy: bo‘sh bo‘lmagan string va obyektlar",
        "text": "\"0\" va \"false\" — boolean emas, bo‘sh bo‘lmagan stringlar. Hatto faqat bo‘sh joydan iborat string ham truthy. Massiv yoki obyektning ichi bo‘shligi uning boolean bahosini o‘zgartirmaydi. Manfiy sonlar ham 0 bo‘lmasa truthy.",
        "code": "console.log(Boolean(\"Hello\")); // true\nconsole.log(Boolean(\"0\"));     // true\nconsole.log(Boolean(\"false\")); // true\nconsole.log(Boolean(\" \"));     // true\nconsole.log(Boolean([]));      // true\nconsole.log(Boolean({}));      // true\nconsole.log(Boolean(-1));      // true\nconsole.log(Boolean(() => {})); // true"
      },
      {
        "title": "8. if ichida qanday ishlaydi?",
        "text": "if qiymatni boolean sifatida baholaydi. Qiymatning o‘zi esa o‘z turida qoladi. ! natijani teskarilaydi; !! esa Boolean(...) bilan bir xil boolean natija beradi.",
        "code": "const xabar = \"Hello\";\nif (xabar) {\n  console.log(\"Truthy\"); // ishlaydi\n}\nconsole.log(typeof xabar); // \"string\" — o‘zgarmadi\n\nconsole.log(!\"Hello\");  // false\nconsole.log(!!\"Hello\"); // true\nconsole.log(!!0);       // false"
      },
      {
        "title": "9. if (qiymat) va qiymat == false bir xil emas",
        "text": "if va Boolean qiymatni bevosita boolean sifatida baholaydi. == esa tenglikning tur o‘zgartirish qoidalarini ishlatadi. Shu sabab bitta qiymat truthy bo‘lib, ayni paytda == false tekshiruvida true berishi mumkin.",
        "code": "console.log(Boolean([])); // true\nconsole.log([] == false); // true\n// false → 0\n// [] → \"\"\n// \"\" → 0\n// 0 == 0 → true\n\nconsole.log(Boolean(\"0\")); // true\nconsole.log(\"0\" == false); // true\n\nif ([]) {\n  console.log(\"Massiv truthy\"); // ishlaydi\n}",
        "note": "Truthy degani qiymat === true degani ham emas: Boolean(\"Hello\") true, lekin \"Hello\" === true false."
      },
      {
        "title": "10. Bo‘sh massiv va bo‘sh obyektni aniq tekshir",
        "text": "if (list) massiv borligini boolean baholaydi; unda element borligini tekshirmaydi. Massiv uchun length, oddiy obyektning o‘ziga tegishli enumerable string kalitlari uchun Object.keys(...).length ishlat. Object.keys barcha turdagi obyektlar uchun universal bo‘shlik tekshiruvi emas.",
        "code": "const list = [];\nif (list) console.log(\"Truthy\"); // ishlaydi\nconsole.log(list.length > 0);    // false\n\nconst user = {};\nconsole.log(Object.keys(user).length > 0); // false\n\nconst input = \"   \";\nconsole.log(Boolean(input));     // true\nconsole.log(input.trim() !== \"\"); // false: faqat bo‘sh joy"
      },
      {
        "title": "11. 0 yo‘q qiymat degani emas",
        "text": "if (!qiymat) barcha falsy qiymatlarni birga ushlaydi. Lekin 0, false yoki bo‘sh string loyihada yaroqli qiymat bo‘lishi mumkin. Faqat null/undefined tekshirilishi kerak bo‘lsa, shuni aniq yoz. || barcha falsy qiymatlarda zaxirani tanlaydi; ?? esa faqat null/undefined uchun.",
        "code": "const ball = 0;\nconsole.log(ball || 100); // 100\nconsole.log(ball ?? 100); // 0\n\nconst ism = \"\";\nconsole.log(ism || \"Mehmon\"); // \"Mehmon\"\nconsole.log(ism ?? \"Mehmon\"); // \"\"\n\nconst qiymat = 0;\nif (qiymat !== null && qiymat !== undefined) {\n  console.log(\"Qiymat mavjud\"); // ishlaydi\n}",
        "note": "|| va ?? har doim boolean qaytarmaydi: ular operandlardan birining asl qiymatini qaytaradi."
      },
      {
        "title": "12. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Bo‘sh massiv truthy ekanligi uning ichida element borligini anglatmaydi. \"false\" ham oddiy bo‘sh bo‘lmagan string. 0 yaroqli ball bo‘lsa || zaxirani noto‘g‘ri tanlashi mumkin; faqat null/undefined uchun ?? ishlating. document.all brauzerdagi tarixiy maxsus istisno, oddiy obyektlarga qoida sifatida ko‘chirmang."
      },
      {
        "title": "13. Kichik amaliy loyiha",
        "text": "Mahsulotlar ro‘yxati bo‘sh bo‘lsa “Hali mahsulot yo‘q”, element bo‘lsa sonini chiqaring. Qidiruv matni faqat bo‘sh joy bo‘lsa, uni ham bo‘sh deb qabul qiling."
      }
    ],
    "takeaway": "Truthy va falsy — yangi tur nomlari emas.\nBo‘sh massiv truthy ekanligi uning ichida element borligini anglatmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Mahsulotlar ro‘yxati bo‘sh bo‘lsa “Hali mahsulot yo‘q”, element bo‘lsa sonini chiqaring. Qidiruv matni faqat bo‘sh joy bo‘lsa, uni ham bo‘sh deb qabul qiling.\n\nQo‘shimcha savollar:\nNatija va sababini ayt:\n1) Boolean([])\n2) Boolean(\"\")\n3) Boolean(\" \")\n4) Boolean([false])\n5) Boolean([].length)\n6) Boolean(\"0\")\n7) Boolean(0)\n\nAmaliy mashq: const mahsulotlar = []; uchun faqat element bo‘lganda “Mahsulot bor” chiqaradigan if yoz.",
    "interactiveTruthy": true,
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(Boolean([]));\nconsole.log(Boolean(\" \"));\nconsole.log(Boolean(0n));\nconsole.log(0 || 100);\nconsole.log(0 ?? 100);",
    "exerciseExpected": [
      true,
      true,
      false,
      100,
      0
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. true — massiv obyekt\n2. true — bitta bo‘sh joy — bo‘sh bo‘lmagan string\n3. false — 0n falsy\n4. 100 — || barcha falsy qiymatda zaxirani oladi\n5. 0 — ?? 0 ni saqlaydi\n\nLoyihani yechish yo‘li: list.length === 0 bilan ro‘yxatni tekshiring. Matn uchun input.trim() === \"\" yozing. Qiymatning mavjudligi va tarkibning bo‘shligini alohida savollar sifatida ko‘ring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Truthy"
      }
    ],
    "learningGuide": {
      "goal": "Boolean baholashni tarkib bo‘shligi va tenglik bilan aralashtirmaysiz.",
      "prerequisites": [
        "operators",
        "coercion-equality"
      ],
      "terms": [
        {
          "term": "Boolean kontekst",
          "meaning": "if yoki ! kabi joyda qiymatning true/false sifatida baholanishi."
        },
        {
          "term": "Truthy",
          "meaning": "Boolean(qiymat) true beradigan qiymat."
        },
        {
          "term": "Falsy",
          "meaning": "Boolean(qiymat) false beradigan qiymat."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Bo‘sh ro‘yxat uchun “bo‘sh” chiqishi kerak.",
        "brokenCode": "const list = [];\nif (list) console.log(\"bor\"); else console.log(\"bo‘sh\");",
        "fixedCode": "const list = [];\nif (list.length > 0) console.log(\"bor\"); else console.log(\"bo‘sh\");",
        "expectedOutput": [
          "bo‘sh"
        ],
        "explanation": "Massivning boolean bahosi uning tarkibidagi elementlar sonini tekshirmaydi. length kerak.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Mahsulotlar ro‘yxati bo‘sh bo‘lsa “Hali mahsulot yo‘q”, element bo‘lsa sonini chiqaring. Qidiruv matni faqat bo‘sh joy bo‘lsa, uni ham bo‘sh deb qabul qiling.",
        "criteria": [
          "Bo‘sh massiv uchun “mahsulot yo‘q” chiqadi.",
          "Elementli massiv uchun elementlar soni chiqadi.",
          "Faqat bo‘sh joydan iborat qidiruv matni bo‘sh deb olinadi."
        ],
        "hint": "list.length === 0 bilan ro‘yxatni tekshiring. Matn uchun input.trim() === \"\" yozing. Qiymatning mavjudligi va tarkibning bo‘shligini alohida savollar sifatida ko‘ring."
      }
    }
  },
  {
    "id": "conditionals",
    "title": "Shart operatorlari: if, else, switch",
    "question": "if/else, else if, switch va ternary qanday ishlaydi? Qaysi holatda qaysi birini tanlash kerak?",
    "explanation": "Shart dasturga yo‘l tanlatadi. if ni “agar”, else ni “aks holda” deb o‘qing. Qavs ichidagi ifoda baholanadi; truthy bo‘lsa birinchi blok, falsy bo‘lsa else ishlaydi. Bir xil if/else zanjirida faqat bitta tarmoq tanlanadi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "17 >= 18 false. Shuning uchun if tanasi o‘tkaziladi, else ichidagi matn chiqadi. Sonni 18 ga o‘zgartirib, natija nega almashganini ayting.",
        "code": "const yosh = 17;\nif (yosh >= 18) {\n  console.log(\"Kirish mumkin\");\n} else {\n  console.log(\"Hali erta\");\n}",
        "expectedOutput": [
          "Hali erta"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Hali erta\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. if va else",
        "text": "if (shart) truthy bo‘lsa, keyingi block bajariladi. else esa shart falsy bo‘lganda ishlaydi. Faqat bitta tarmoq tanlanadi.",
        "code": "const yosh = 18;\nif (yosh >= 18) {\n  console.log(\"Kattaman\");\n} else {\n  console.log(\"Yoshman\");\n}\n// Natija: Kattaman"
      },
      {
        "title": "3. else if zanjiri",
        "text": "Bir nechta shartni ketma-ket tekshirish uchun else if ishlatiladi. Birinchi mos kelgan tarmoq bajarilib, qolganlari tekshirilmaydi. Shuning uchun shartlar tartibi muhim.",
        "code": "const ball = 85;\nif (ball >= 90) {\n  console.log(\"A\");\n} else if (ball >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}\n// Natija: B"
      },
      {
        "title": "4. Truthy/falsy shart",
        "text": "if shartni boolean baholaydi. Oddiy qiymatlardan false, 0, -0, 0n, \"\", null, undefined va NaN falsy. Qolgan oddiy qiymatlar truthy; brauzer document.all tarixiy istisno. Massivda element borligini length bilan alohida tekshiring.",
        "code": "const items = [];\nif (items) {\n  console.log(\"truthy\"); // bu chiqadi\n}\n\nif (items.length > 0) {\n  console.log(\"element bor\"); // bu chiqmaydi\n} else {\n  console.log(\"bo'sh\"); // bu chiqadi\n}",
        "note": "Bo‘sh massiv truthy. Element borligini tekshirish uchun items.length > 0 kerak."
      },
      {
        "title": "5. switch",
        "text": "switch qiymatni bir nechta holat (case) bilan solishtiradi. Solishtirish === bilan qilinadi (qat’iy tenglik). break bo‘lmasa, keyingi case ga \"tushib qoladi\" (fall-through).",
        "code": "const kun = \"dushanba\";\nswitch (kun) {\n  case \"dushanba\":\n    console.log(\"Birinchi kun\");\n    break;\n  case \"juma\":\n    console.log(\"Oxirgi ish kuni\");\n    break;\n  default:\n    console.log(\"Boshqa kun\");\n}\n// Natija: Birinchi kun"
      },
      {
        "title": "6. break unutish tuzog‘i",
        "text": "Agar case ichida break yo‘q bo‘lsa, bajarilish keyingi case ga davom etadi. Bu ba’zan foydali, lekin ko‘pincha xato bo‘ladi.",
        "code": "const x = 1;\nswitch (x) {\n  case 1:\n    console.log(\"bir\");\n  case 2:\n    console.log(\"ikki\");\n    break;\n  default:\n    console.log(\"boshqa\");\n}\n// Natija: bir, ikki (break yo'q edi)"
      },
      {
        "title": "7. Ternary va qisqa baholash",
        "text": "Oddiy shartni ternary bilan qisqa yozish mumkin. Bir nechta shartni zanjirlab ham yozish mumkin, lekin o‘qilishi qiyinlashadi. && va || ham shart sifatida ishlatiladi.",
        "code": "const yosh = 20;\nconst xabar = yosh >= 18 ? \"katta\" : \"yosh\";\nconsole.log(xabar); // katta\n\n// qisqa baholash bilan:\nconst nom = xabar && xabar.toUpperCase();\nconsole.log(nom); // KATTA"
      },
      {
        "title": "8. Erta qaytish: xato holatini oldin ajratish",
        "text": "Guard clause keraksiz ichma-ich if larni kamaytiradi. Funksiya ichidagi return shu funksiyani tugatadi.",
        "code": "function kirish(yosh) {\n  if (!Number.isFinite(yosh) || yosh < 0) return \"Xato\";\n  if (yosh < 18) return \"Hali erta\";\n  return \"Marhamat\";\n}\nconsole.log(kirish(20));",
        "expectedOutput": [
          "Marhamat"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. &&, || va ?? farqi",
        "text": "&& birinchi falsy qiymatni, bunday qiymat bo‘lmasa oxirgisini qaytaradi. || birinchi truthy qiymatni, bo‘lmasa oxirgisini qaytaradi. ?? faqat chapdagi qiymat null yoki undefined bo‘lganda o‘ngdagini oladi. Ular doim boolean qaytarmaydi.",
        "code": "console.log(0 || 10); // 10\nconsole.log(0 ?? 10); // 0\nconsole.log(null ?? 10); // 10\nconsole.log(\"Ali\" && \"Salom\"); // Salom",
        "note": "Bu operatorlar qisqa baholanadi: natija ma’lum bo‘lgach o‘ng tomondagi ifoda bajarilmasligi mumkin."
      },
      {
        "title": "10. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "if (x = 5) qiymat yozadi; taqqoslash uchun === kerak. if dan keyin ortiqcha ; blokni shartdan ajratib yuboradi. switch \"1\" va 1 ni teng deb olmaydi. Bir nechta case bir scope ni bo‘lishishi mumkin; let/const uchun case tanasini { } bilan ajrating."
      },
      {
        "title": "11. Kichik amaliy loyiha",
        "text": "0–100 ball uchun A/B/C baho chiqaring. Noto‘g‘ri tur, NaN yoki diapazondan tashqaridagi qiymatga alohida xabar yozing. Yuqori chegaralarni oldin tekshiring."
      }
    ],
    "takeaway": "Shart dasturga yo‘l tanlatadi.\nif (x = 5) qiymat yozadi; taqqoslash uchun === kerak.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: 0–100 ball uchun A/B/C baho chiqaring. Noto‘g‘ri tur, NaN yoki diapazondan tashqaridagi qiymatga alohida xabar yozing. Yuqori chegaralarni oldin tekshiring.\n\nQo‘shimcha savollar:\n1) const x = 0; if (x) ... qaysi tarmoq?\n2) switch da break unutilsa nima bo‘ladi?\n3) [] truthy mi? Element borligini qanday tekshirasiz?\n4) ball = 85 bo‘lsa, yuqoridagi else if zanjirida nima chiqadi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const ball = 85;\nconsole.log(ball >= 90 ? \"A\" : ball >= 70 ? \"B\" : \"C\");\nconsole.log(0 ?? 10);\nswitch (\"1\") {\n  case 1: console.log(\"son\"); break;\n  default: console.log(\"matn\");\n}",
    "exerciseExpected": [
      "B",
      0,
      "matn"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"B\" — 90 sharti false, 70 sharti true\n2. 0 — 0 yo‘q qiymat emas\n3. \"matn\" — switch qat’iy tenglikdan foydalanadi\n\nLoyihani yechish yo‘li: Avval Number.isFinite(ball), 0 <= ball va ball <= 100 ni tekshiring. Keyin >=90, >=70, qolgan holat tartibida if/else yozing.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
      }
    ],
    "learningGuide": {
      "goal": "if/else va switch bilan bitta mos yo‘lni tanlaysiz, kirish xatosini alohida ajratasiz.",
      "prerequisites": [
        "operators",
        "truthy-falsy"
      ],
      "terms": [
        {
          "term": "Shart",
          "meaning": "Qaysi kod yo‘li ishlashini belgilaydigan ifoda."
        },
        {
          "term": "Tarmoq",
          "meaning": "Shartga qarab bajariladigan kod qismi."
        },
        {
          "term": "Guard clause",
          "meaning": "Xato yoki istisno holatida funksiyadan erta qaytish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "95 ball A baho olishi kerak. Nega birinchi shart B ni tanlayapti?",
        "brokenCode": "const ball = 95;\nif (ball >= 70) console.log(\"B\");\nelse if (ball >= 90) console.log(\"A\");",
        "fixedCode": "const ball = 95;\nif (ball >= 90) console.log(\"A\");\nelse if (ball >= 70) console.log(\"B\");",
        "expectedOutput": [
          "A"
        ],
        "explanation": "Zanjir birinchi mos shartda to‘xtaydi. Yuqori chegara oldinga olindi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "0–100 ball uchun A/B/C baho chiqaring. Noto‘g‘ri tur, NaN yoki diapazondan tashqaridagi qiymatga alohida xabar yozing. Yuqori chegaralarni oldin tekshiring.",
        "criteria": [
          "95 uchun A, 85 uchun B chiqadi.",
          "Chegaraviy 0 va 100 yaroqli baholanadi.",
          "-1, 101, NaN yoki matn uchun aniq xato chiqadi."
        ],
        "hint": "Avval Number.isFinite(ball), 0 <= ball va ball <= 100 ni tekshiring. Keyin >=90, >=70, qolgan holat tartibida if/else yozing."
      }
    }
  },
  {
    "id": "loops",
    "title": "Tsikllar: for, while, for...of, for...in",
    "question": "Tsikllar qanday ishlaydi? for, while, for...of va for...in farqi nima? break/continue nima qiladi?",
    "explanation": "Tsikl — bir ishni takrorlash. Uch savolni aniqlang: qayerdan boshlanadi, qachongacha ishlaydi, har qadamda nima o‘zgaradi? Indekslar odatda 0 dan boshlanadi. for...of qiymatlarni, for...in esa sanab o‘tiladigan string kalitlarni beradi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "i avval 1: jami 1. Keyin i=2: jami 3. Keyin i=3: jami 6. i=4 bo‘lganda shart false va tsikl tugaydi.",
        "code": "let jami = 0;\nfor (let i = 1; i <= 3; i++) {\n  jami += i;\n}\nconsole.log(jami);",
        "expectedOutput": [
          6
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [6]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Oddiy for",
        "text": "for (boshlash; shart; o‘zgartirish) tuzilmasiga ega. Har takrorlashda avval shart tekshiriladi, so‘ng block bajariladi, keyin o‘zgartirish amalga oshiriladi.",
        "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n// Natija: 0, 1, 2\n\nfor (let i = 3; i > 0; i--) {\n  console.log(i);\n}\n// Natija: 3, 2, 1"
      },
      {
        "title": "3. while va do...while",
        "text": "while shart truthy ekan takrorlaydi. do...while esa blockni kamida bir marta bajaradi, keyin shartni tekshiradi.",
        "code": "let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}\n// 0, 1, 2\n\nlet j = 10;\ndo {\n  console.log(j); // kamida bir marta bajariladi\n} while (j < 3);\n// 10"
      },
      {
        "title": "4. break va continue",
        "text": "break tsiklni to‘liq to‘xtatadi. continue faqat joriy takrorlashni o‘tkazib, keyingisiga o‘tadi.",
        "code": "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue; // 2 ni o'tkazamiz\n  if (i === 4) break;    // 4 da to'xtaymiz\n  console.log(i);\n}\n// Natija: 0, 1, 3"
      },
      {
        "title": "5. for...of — qiymatlar bo‘yicha",
        "text": "for...of massiv, string, Map, Set kabi iteratsiya qilinadigan obyektlarning qiymatlarini beradi. Massiv indeksini emas, elementni oladi.",
        "code": "const sonlar = [10, 20, 30];\nfor (const son of sonlar) {\n  console.log(son); // 10, 20, 30\n}\n\nfor (const harf of \"Ali\") {\n  console.log(harf); // A, l, i\n}"
      },
      {
        "title": "6. for...in — kalitlar bo‘yicha",
        "text": "for...in obyektning o‘z va meros qilingan sanab o‘tiladigan (enumerable) kalitlarini beradi. Massivda ham ishlaydi, lekin indekslarni string sifatida beradi. Massiv uchun for...of yaxshiroq.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nfor (const kalit in user) {\n  console.log(kalit, user[kalit]);\n}\n// ism Ali, yosh 20\n\nconst arr = [10, 20];\nfor (const i in arr) {\n  console.log(typeof i); // \"string\" — indeks string!\n}"
      },
      {
        "title": "7. Har qadamda yangi scope",
        "text": "for (let i = ...) da har bir takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2 (let)\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3 (var — bitta j)"
      },
      {
        "title": "8. Cheksiz tsikl tuzog‘i",
        "text": "Agar o‘zgartirish qismi yo‘q bo‘lsa yoki shart hech qachon falsy bo‘lmasa, tsikl to‘xtamaydi. Kod o‘qiyotganda \"bu tsikl qachon to‘xtaydi?\" degan savolga javob topish shart.",
        "code": "// let i = 0;\n// while (i < 3) {\n//   console.log(i); // i o'zgarmaydi → cheksiz\n// }\n\nlet k = 0;\nwhile (k < 3) {\n  console.log(k);\n  k += 1; // to'g'ri: har qadam oshadi\n}"
      },
      {
        "title": "9. Ichma-ich tsikl va keraksiz takrorlash",
        "text": "Ichki tsikl tashqi tsiklning har qadamida qayta ishlaydi. 2 va 3 qadamli ikki tsikl jami 6 juftlik beradi. Katta ro‘yxatlar uchun takrorlash sonini hisoblang.",
        "code": "let sanoq = 0;\nfor (let i = 0; i < 2; i++) {\n  for (let j = 0; j < 3; j++) sanoq++;\n}\nconsole.log(sanoq);",
        "expectedOutput": [
          6
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "10. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "i <= list.length oxirida mavjud bo‘lmagan indeksga boradi: odatda i < list.length kerak. while ichida shartni o‘zgartiradigan qadam qolmasa cheksiz tsikl bo‘ladi. for...in meros kalitlarini ham olishi mumkin; kerak bo‘lsa Object.hasOwn bilan cheklang. forEach ichida return tashqi funksiyani yoki tsiklni break qilmaydi."
      },
      {
        "title": "11. Kichik amaliy loyiha",
        "text": "1 dan n gacha sonlar yig‘indisini va faqat juftlarini hisoblang. Keyin bir xil ro‘yxatni for va for...of bilan o‘qib natijalarni solishtiring."
      }
    ],
    "takeaway": "Tsikl — bir ishni takrorlash.\ni <= list.length oxirida mavjud bo‘lmagan indeksga boradi: odatda i < list.length kerak.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: 1 dan n gacha sonlar yig‘indisini va faqat juftlarini hisoblang. Keyin bir xil ro‘yxatni for va for...of bilan o‘qib natijalarni solishtiring.\n\nQo‘shimcha savollar:\n1) for (let i=0; i<3; i++) necha marta bajariladi va qanday qiymatlar chiqadi?\n2) break va continue farqi?\n3) for...of va for...in farqi nima?\n4) let o‘rniga var ishlatilsa setTimeout misolida nima chiqadi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const natija = [];\nfor (let i = 0; i < 4; i++) {\n  if (i === 2) continue;\n  natija.push(i);\n}\nconsole.log(natija);\nlet n = 5;\ndo { n++; } while (n < 3);\nconsole.log(n);\nconsole.log(Object.keys({ a: 1, b: 2 }));",
    "exerciseExpected": [
      [
        0,
        1,
        3
      ],
      6,
      [
        "a",
        "b"
      ]
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. [0, 1, 3] — continue 2 ni o‘tkazadi\n2. 6 — do tanasi shartdan oldin bir marta ishlaydi\n3. [\"a\", \"b\"] — obyektning o‘z enumerable string kalitlari\n\nLoyihani yechish yo‘li: jami va juftJami ni 0 dan boshlang. for i=1; i<=n; i++ ichida jami ga qo‘shing, i%2===0 bo‘lsa juftJami ga ham qo‘shing.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
      }
    ],
    "learningGuide": {
      "goal": "Takrorlashning boshlanishi, sharti va qadamini kuzatib, tugaydigan tsikl yozasiz.",
      "prerequisites": [
        "var-let-const",
        "conditionals"
      ],
      "terms": [
        {
          "term": "Iteratsiya",
          "meaning": "Tsiklning bitta takrorlanishi."
        },
        {
          "term": "Indeks",
          "meaning": "Ro‘yxatdagi joy raqami; birinchisi 0."
        },
        {
          "term": "Massiv",
          "meaning": "[] ichida tartib bilan saqlangan qiymatlar ro‘yxati."
        },
        {
          "term": "Kalit",
          "meaning": "Obyekt maydonining nomi; for...in nomlarni beradi."
        }
      ],
      "warmup": {
        "title": "for...of dan oldin: ro‘yxat nima?",
        "text": "Massiv qiymatlar ro‘yxati. [0] birinchisini, length uzunligini beradi. Hozir faqat shu ikki narsani bilish yetarli; massivlarning to‘liq darsi keyin keladi.",
        "code": "const sonlar = [10, 20];\nconsole.log(sonlar[0]);\nconsole.log(sonlar.length);",
        "expectedOutput": [
          10,
          2
        ],
        "explanation": "10 — birinchi qiymat. 2 — ro‘yxat uzunligi. for...of shu qiymatlarni navbat bilan oladi.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Faqat 10 va 20 chiqsin. Qaysi qadamda yo‘q indeks o‘qilyapti?",
        "brokenCode": "const a = [10, 20];\nfor (let i = 0; i <= a.length; i++) console.log(a[i]);",
        "fixedCode": "const a = [10, 20];\nfor (let i = 0; i < a.length; i++) console.log(a[i]);",
        "expectedOutput": [
          10,
          20
        ],
        "explanation": "Uzunlik 2, lekin mavjud indekslar 0 va 1. < oxirgi yo‘q indeksga borishni to‘xtatdi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "1 dan n gacha sonlar yig‘indisini va faqat juftlarini hisoblang. Keyin bir xil ro‘yxatni for va for...of bilan o‘qib natijalarni solishtiring.",
        "criteria": [
          "n=3 uchun umumiy yig‘indi 6 bo‘ladi.",
          "n=0 uchun ikkala yig‘indi 0 bo‘ladi.",
          "Juft yig‘indiga faqat 2 ga qoldiqsiz bo‘linadiganlar kiradi."
        ],
        "hint": "jami va juftJami ni 0 dan boshlang. for i=1; i<=n; i++ ichida jami ga qo‘shing, i%2===0 bo‘lsa juftJami ga ham qo‘shing."
      }
    }
  },
  {
    "id": "objects-basics",
    "title": "Obyektlar: noldan",
    "question": "Obyekt nima? Kalit-qiymat, nuqta va kvadrat notatsiya, ichki obyektlar.",
    "explanation": "Obyekt — bir narsaga tegishli ma’lumotlarni nomlar bilan birlashtirish. user ichida ism, yosh va manzil bo‘lishi mumkin. Har bir nom xususiyat kaliti, o‘ngdagi narsa qiymat. Nuqta bilan oldindan ma’lum nom, [] bilan hisoblangan nom o‘qiladi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Obyekt bir marta yaratildi. kalit o‘zgaruvchisining \"yosh\" qiymati [] ichida ishlatiladi. += shu obyektning yosh xususiyatini yangilaydi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconst kalit = \"yosh\";\nconsole.log(user.ism);\nconsole.log(user[kalit]);\nuser.yosh += 1;\nconsole.log(user.yosh);",
        "expectedOutput": [
          "Ali",
          20,
          21
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", 20, 21]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Obyekt yaratish",
        "text": "Eng keng tarqalgan usul — { } ichida kalit: qiymat yozish. Kalitlarni o‘qish uchun nuqta (obj.kalit) yoki kvadrat (obj[\"kalit\"]) notatsiya ishlatiladi.",
        "code": "const user = {\n  ism: \"Ali\",\n  yosh: 20,\n  shahar: \"Toshkent\"\n};\nconsole.log(user.ism); // Ali\nconsole.log(user[\"yosh\"]); // 20"
      },
      {
        "title": "3. Nuqta va kvadrat notatsiya farqi",
        "text": "Nuqta notatsiyasida kalit o‘zgarmas nom bo‘ladi. Kvadrat notatsiyada kalit ifoda bo‘lishi mumkin: o‘zgaruvchi yoki hisoblash natijasi. Kalit nomida bo‘shliq yoki chiziqcha bo‘lsa, faqat kvadrat notatsiya ishlaydi.",
        "code": "const user = { \"ism-familya\": \"Ali\", yosh: 20 };\n// console.log(user.ism-familya); // xato (ayirish deb o‘qiladi)\nconsole.log(user[\"ism-familya\"]); // Ali\n\nconst kalit = \"yosh\";\nconsole.log(user[kalit]); // 20"
      },
      {
        "title": "4. Qiymat qo‘shish va o‘zgartirish",
        "text": "Yo‘q kalitga qiymat yozilsa, u yaratiladi. Bor kalitga yangi qiymat yozilsa, eskisi almashtiriladi. O‘chirish uchun delete ishlatiladi.",
        "code": "const user = { ism: \"Ali\" };\nuser.yosh = 20; // yangi kalit\nuser.ism = \"Vali\"; // o'zgartirish\nconsole.log(user); // { ism: \"Vali\", yosh: 20 }\n\ndelete user.yosh;\nconsole.log(user.yosh); // undefined"
      },
      {
        "title": "5. Ichki obyektlar va ierarxiya",
        "text": "Obyekt qiymati sifatida boshqa obyekt bo‘lishi mumkin. Bunday tuzilmada bir necha nuqta bilan chuqurroq o‘qish mumkin: user.manzil.shahar.",
        "code": "const user = {\n  ism: \"Ali\",\n  manzil: {\n    shahar: \"Toshkent\",\n    kocha: \"Navoiy\"\n  }\n};\nconsole.log(user.manzil.shahar); // Toshkent\nconsole.log(user.manzil.kocha); // Navoiy",
        "note": "Agar oraliq obyekt yo‘q bo‘lsa, user.manzil.shahar xato beradi. Optional chaining bilan xavfsiz: user.manzil?.shahar."
      },
      {
        "title": "6. Kalitlar va qiymatlar ro‘yxati",
        "text": "Object.keys obyekt kalitlari massivini, Object.values qiymatlar massivini, Object.entries esa [kalit, qiymat] juftliklari massivini qaytaradi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconsole.log(Object.keys(user)); // [\"ism\", \"yosh\"]\nconsole.log(Object.values(user)); // [\"Ali\", 20]\nconsole.log(Object.entries(user)); // [[\"ism\",\"Ali\"],[\"yosh\",20]]"
      },
      {
        "title": "7. Kalit borligini tekshirish",
        "text": "obj.kalit !== undefined degan tekshirish xato bo‘lishi mumkin: kalit bor, lekin qiymati undefined bo‘lsa. To‘g‘ri usul — \"kalit\" in obj yoki Object.hasOwn(obj, \"kalit\").",
        "code": "const o = { x: undefined };\nconsole.log(o.x !== undefined); // false (noto'g'ri xulosa)\nconsole.log(\"x\" in o); // true\nconsole.log(Object.hasOwn(o, \"x\")); // true\nconsole.log(\"y\" in o); // false"
      },
      {
        "title": "8. Obyekt ichida metod",
        "text": "Obyekt xususiyati sifatida funksiya saqlash mumkin: bu metod. user.salom() kabi obyekt orqali chaqirilganda oddiy metodning this qiymati user bo‘ladi. Mustaqil chaqirishda bu bog‘lanish saqlanmasligi mumkin.",
        "code": "const user = {\n  ism: \"Ali\",\n  salom() {\n    return \"Salom, \" + this.ism;\n  }\n};\nconsole.log(user.salom()); // Salom, Ali"
      },
      {
        "title": "9. Qisqa yozuv va hisoblangan kalit",
        "text": "O‘zgaruvchi nomi bilan kalit bir xil bo‘lsa { ism } yoziladi. [ifoda] esa obyekt yaratish paytida kalitni hisoblaydi.",
        "code": "const ism = \"Ali\";\nconst maydon = \"ball\";\nconst o = { ism, [maydon]: 100 };\nconsole.log(o.ism);\nconsole.log(o.ball);",
        "expectedOutput": [
          "Ali",
          100
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "10. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "user.kalit literal “kalit” nomini qidiradi; user[kalit] o‘zgaruvchi qiymatini oladi. in meros xususiyatlarini ham ko‘radi, Object.hasOwn faqat o‘zini. Object.keys/values/entries symbol va sanab o‘tilmaydigan xususiyatlarni kiritmaydi. Metoddagi this obyekt orqali chaqirishga bog‘liq, uni ko‘chirib mustaqil chaqirish bu bog‘lanishni yo‘qotadi."
      },
      {
        "title": "11. Kichik amaliy loyiha",
        "text": "Mahsulot obyektini nom, narx, dona bilan yarating. Qiymatni yangilang, jami narxni hisoblaydigan metod yozing va kerakli kalit borligini tekshiring."
      }
    ],
    "takeaway": "Obyekt — bir narsaga tegishli ma’lumotlarni nomlar bilan birlashtirish.\nuser.kalit literal “kalit” nomini qidiradi; user[kalit] o‘zgaruvchi qiymatini oladi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Mahsulot obyektini nom, narx, dona bilan yarating. Qiymatni yangilang, jami narxni hisoblaydigan metod yozing va kerakli kalit borligini tekshiring.\n\nQo‘shimcha savollar:\n1) const o = {a:1}; o.b = 2; o.a = 3; natijada o nima?\n2) \"x\" in o va o.x !== undefined farqi nima?\n3) user.manzil.shahar qachon xato beradi?\n4) Object.keys({a:1,b:2}) nima qaytaradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const p = { nom: \"Kitob\", narx: 10 };\np.dona = 2;\nconsole.log(p.narx * p.dona);\nconsole.log(Object.hasOwn(p, \"nom\"));\nconsole.log(p.yoq);\nconsole.log(Object.keys(p).length);",
    "exerciseExpected": [
      20,
      true,
      {
        "$undefined": true
      },
      3
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 20 — narx va dona ko‘paytiriladi\n2. true — nom o‘ziga tegishli\n3. undefined — yo‘q xususiyat undefined\n4. 3 — uchta o‘z kaliti bor\n\nLoyihani yechish yo‘li: jami() { return this.narx * this.dona; } metodini qo‘shing. Metodni mahsulot.jami() shaklida chaqiring; Object.hasOwn bilan maydonlarni tekshiring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
      }
    ],
    "learningGuide": {
      "goal": "Kalit orqali ma’lumot o‘qiysiz, yangilaysiz va own property mavjudligini tekshirasiz.",
      "prerequisites": [
        "data-types",
        "conditionals"
      ],
      "terms": [
        {
          "term": "Xususiyat",
          "meaning": "Obyektdagi nom va qiymat juftligi."
        },
        {
          "term": "Kalit",
          "meaning": "Xususiyatning nomi; obj[\"ism\"] da ism."
        },
        {
          "term": "Metod",
          "meaning": "Obyekt ichida saqlangan va chaqiriladigan funksiya."
        },
        {
          "term": "Own property",
          "meaning": "Prototipdan kelmagan, obyektning o‘ziga tegishli maydon."
        }
      ],
      "warmup": {
        "title": "Metoddan oldin: () nimani bildiradi?",
        "text": "Funksiya — chaqirilganda bajariladigan ish. Parametr kirish nomi, return javobni qaytarish. Bu mavzuda to‘liq funksiyalar darsidan oldin shuncha tayyorgarlik yetarli.",
        "code": "function ikki(son) { return son * 2; }\nconsole.log(ikki(3));",
        "expectedOutput": [
          6
        ],
        "explanation": "ikki(3) ichida son=3 bo‘ladi. return 6 ni qaytaradi; console.log uni chiqaradi.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "O‘zgaruvchi ko‘rsatgan yosh maydonini o‘qing.",
        "brokenCode": "const user = { yosh: 20 };\nconst kalit = \"yosh\";\nconsole.log(user.kalit);",
        "fixedCode": "const user = { yosh: 20 };\nconst kalit = \"yosh\";\nconsole.log(user[kalit]);",
        "expectedOutput": [
          20
        ],
        "explanation": "Nuqtadan keyin literal nom o‘qiladi. [] ichida kalit o‘zgaruvchisining qiymati hisoblanadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Mahsulot obyektini nom, narx, dona bilan yarating. Qiymatni yangilang, jami narxni hisoblaydigan metod yozing va kerakli kalit borligini tekshiring.",
        "criteria": [
          "Nom, narx va dona obyekt ichida saqlanadi.",
          "jami metodi shu obyekt qiymatlaridan hisoblaydi.",
          "Yo‘q maydon bilan undefined qiymatli mavjud maydon ajratiladi."
        ],
        "hint": "jami() { return this.narx * this.dona; } metodini qo‘shing. Metodni mahsulot.jami() shaklida chaqiring; Object.hasOwn bilan maydonlarni tekshiring."
      }
    }
  },
  {
    "id": "arrays-basics",
    "title": "Massivlar: noldan",
    "question": "Massiv nima? Indeks, length, qo‘shish/o‘chirish va ko‘p uchraydigan metodlar.",
    "explanation": "Massiv — qiymatlarning tartibli ro‘yxati. [] yangi massiv yaratadi, elementlar vergul bilan ajratiladi. Indeks 0 dan boshlanadi; length elementlar uchun ajratilgan uzunlikni bildiradi. Oddiy zich massivdan boshlaymiz, siyrak massivdagi farqni keyin ko‘ramiz.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi element 0-indeksda. push massiv oxiriga yangi qiymat qo‘shadi. length 2 dan 3 ga chiqadi, at(-1) oxirgi elementni oladi.",
        "code": "const mevalar = [\"olma\", \"anor\"];\nconsole.log(mevalar[0]);\nmevalar.push(\"uzum\");\nconsole.log(mevalar.length);\nconsole.log(mevalar.at(-1));",
        "expectedOutput": [
          "olma",
          3,
          "uzum"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"olma\", 3, \"uzum\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Yaratish va o‘qish",
        "text": "Massiv [ ] ichida elementlar bilan yaratiladi. Elementga indeks orqali murojaat qilinadi: arr[0] birinchi, arr[arr.length - 1] oxirgi element.",
        "code": "const sonlar = [10, 20, 30];\nconsole.log(sonlar[0]); // 10\nconsole.log(sonlar[1]); // 20\nconsole.log(sonlar.length); // 3\nconsole.log(sonlar[sonlar.length - 1]); // 30 (oxirgi)"
      },
      {
        "title": "3. Yo‘q indeksga murojaat",
        "text": "Massivda yo‘q indeksni o‘qish undefined qaytaradi, xato emas. Bu obyektlarga o‘xshash: massiv ham obyekt.",
        "code": "const a = [1, 2];\nconsole.log(a[5]); // undefined\nconsole.log(a[-1]); // undefined"
      },
      {
        "title": "4. Qo‘shish va o‘chirish",
        "text": "push oxiriga qo‘shadi, pop oxirgisini olib tashlaydi, unshift boshiga qo‘shadi, shift birinchi elementni olib tashlaydi. Barchasi asl massivni o‘zgartiradi.",
        "code": "const a = [1, 2];\na.push(3); // [1,2,3]\na.pop();   // [1,2]\na.unshift(0); // [0,1,2]\na.shift(); // [1,2]\nconsole.log(a); // [1,2]"
      },
      {
        "title": "5. splice — istalgan joyga qo‘shish/o‘chirish",
        "text": "splice(start, deleteCount, ...elements) berilgan joydan boshlab elementlarni o‘chiradi va yangilarini qo‘shadi. Asl massivni o‘zgartiradi va o‘chirilgan elementlarni qaytaradi.",
        "code": "const a = [1, 2, 3, 4];\nconsole.log(a.splice(1, 2)); // [2,3] o'chirildi\nconsole.log(a); // [1,4]\n\na.splice(1, 0, 9); // 1-indeksga 9 qo'shamiz\nconsole.log(a); // [1,9,4]"
      },
      {
        "title": "6. slice — qismni nusxalash",
        "text": "slice(start, end) berilgan oraliqdagi elementlardan yangi massiv yaratadi. Asl massiv o‘zgartirilmaydi. end indeksi kiritilmaydi.",
        "code": "const a = [1, 2, 3, 4];\nconsole.log(a.slice(1, 3)); // [2,3]\nconsole.log(a.slice(2)); // [3,4]\nconsole.log(a); // [1,2,3,4] — o'zgarmadi"
      },
      {
        "title": "7. indexOf, includes, join",
        "text": "indexOf element indeksini (topmasa -1), includes bor-yo‘qligini (true/false), join esa elementlarni stringga birlashtiradi.",
        "code": "const a = [10, 20, 30];\nconsole.log(a.indexOf(20)); // 1\nconsole.log(a.indexOf(99)); // -1\nconsole.log(a.includes(30)); // true\nconsole.log(a.join(\", \")); // \"10, 20, 30\""
      },
      {
        "title": "8. Massiv va obyekt farqi",
        "text": "Massiv — tartibli ro‘yxat, uzunligi bor. Obyekt — kalitlar to‘plami. Lekin massiv ham obyekt: uning indekslari kalit, length xususiyati bor. Shuning uchun typeof [] === \"object\" bo‘ladi.",
        "code": "console.log(typeof []); // \"object\"\nconsole.log(Array.isArray([])); // true — to'g'ri tekshirish\nconsole.log(Array.isArray({})); // false"
      },
      {
        "title": "9. Teshik bilan undefined bir xil tuzilma emas",
        "text": "[,,] yoki katta indeksga yozish siyrak massiv yaratishi mumkin. length mavjud elementlar soni bilan teng bo‘lishi shart emas. includes undefined sifatida ko‘rishi mumkin, map esa bo‘sh joyni tashlab ketadi.",
        "code": "const a = new Array(3);\nconsole.log(a.length);\nconsole.log(0 in a);\nconsole.log(a.includes(undefined));",
        "expectedOutput": [
          3,
          false,
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "10. Yangi nusxa bilan ishlash",
        "text": "Spread, Array.from va slice yangi tashqi massiv beradi. toReversed va toSorted asl massivni o‘zgartirmaydigan zamonaviy usullardir.",
        "code": "const a = [3, 1, 2];\nconsole.log(a.toSorted((x, y) => x - y));\nconsole.log(a);",
        "expectedOutput": [
          [
            1,
            2,
            3
          ],
          [
            3,
            1,
            2
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "11. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "const massivning ichini muzlatmaydi. delete list[0] element o‘rnida teshik qoldiradi, uzunlikni kamaytirmaydi; odatda splice ishlating. push yangi uzunlikni, pop olib tashlangan elementni qaytaradi. slice nusxasi yuzaki: ichki obyektlar birga qoladi."
      },
      {
        "title": "12. Kichik amaliy loyiha",
        "text": "Vazifalar ro‘yxati yarating. Oxiriga qo‘shish, boshidan olib tashlash va bir qismini nusxalashni bajaring; asl ro‘yxat qachon o‘zgarganini yozing."
      }
    ],
    "takeaway": "Massiv — qiymatlarning tartibli ro‘yxati.\nconst massivning ichini muzlatmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Vazifalar ro‘yxati yarating. Oxiriga qo‘shish, boshidan olib tashlash va bir qismini nusxalashni bajaring; asl ro‘yxat qachon o‘zgarganini yozing.\n\nQo‘shimcha savollar:\n1) [1,2,3][5] nima?\n2) push va unshift farqi?\n3) splice va slice farqi nima?\n4) [10,20].indexOf(99) nima?\n5) typeof [] nima va to‘g‘ri tekshirish qanday?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = [10, 20];\nconsole.log(a.push(30));\nconsole.log(a.pop());\nconsole.log(a.length);\nconsole.log(a.slice(0, 1));\nconsole.log(a.at(-1));",
    "exerciseExpected": [
      3,
      30,
      2,
      [
        10
      ],
      20
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 3 — push yangi uzunlikni qaytaradi\n2. 30 — pop oxirgi 30 ni olib tashlaydi\n3. 2 — ikki element qoldi\n4. [10] — oxirgi indeks kirmaydi\n5. 20 — oxirgi qiymat 20\n\nLoyihani yechish yo‘li: push qaytargan qiymatni ro‘yxat deb qabul qilmang. shift() birinchi vazifani oladi, slice(0,2) ikki elementli yangi tashqi nusxa beradi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      }
    ],
    "learningGuide": {
      "goal": "Tartibli ro‘yxatdan qiymat olasiz va qaysi amal asl massivni o‘zgartirishini bilasiz.",
      "prerequisites": [
        "objects-basics",
        "loops"
      ],
      "terms": [
        {
          "term": "Element",
          "meaning": "Massivdagi bitta qiymat."
        },
        {
          "term": "Mutatsiya",
          "meaning": "Mavjud massiv yoki obyektning ichini o‘zgartirish."
        },
        {
          "term": "Yuzaki nusxa",
          "meaning": "Yangi tashqi massiv, ammo ichki obyektlarga ishoralar umumiy bo‘lishi mumkin."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Natijada yangi elementli massiv ko‘rinsin, uzunlik emas.",
        "brokenCode": "const a = [1, 2];\nconst natija = a.push(3);\nconsole.log(natija);",
        "fixedCode": "const a = [1, 2];\na.push(3);\nconsole.log(a);",
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "explanation": "push yangi uzunlik qaytaradi. Yangilangan ro‘yxatni ko‘rish uchun massivning o‘zini o‘qidik.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Vazifalar ro‘yxati yarating. Oxiriga qo‘shish, boshidan olib tashlash va bir qismini nusxalashni bajaring; asl ro‘yxat qachon o‘zgarganini yozing.",
        "criteria": [
          "Vazifa push bilan oxiriga qo‘shiladi.",
          "shift aynan birinchi elementni qaytaradi va olib tashlaydi.",
          "slice natijasini olish asl ro‘yxatni qisqartirmaydi."
        ],
        "hint": "push qaytargan qiymatni ro‘yxat deb qabul qilmang. shift() birinchi vazifani oladi, slice(0,2) ikki elementli yangi tashqi nusxa beradi."
      }
    }
  },
  {
    "id": "object-reference",
    "title": "Object Reference — noldan",
    "question": "Object reference nima? O‘zgaruvchi, obyekt, mutation va nusxalashni noldan tushuntir.",
    "explanation": "Reference — obyektga olib boruvchi ishora qiymati. Bitta uyga ikkita kalit bo‘lishi kabi, ikki o‘zgaruvchi bir obyektga qarashi mumkin. b = a yozuvi yangi obyekt yaratmaydi. Xususiyatni o‘zgartirish bilan o‘zgaruvchini yangi obyektga biriktirishni ajratamiz.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi yozuv umumiy obyekt ichini o‘zgartiradi. Keyingi { son: 3 } yangi obyekt yaratadi va faqat b ning ishorasini almashtiradi. a eski obyektga qarab qoladi.",
        "code": "let a = { son: 1 };\nlet b = a;\nb.son = 2;\nconsole.log(a.son);\nb = { son: 3 };\nconsole.log(a.son);\nconsole.log(b.son);",
        "expectedOutput": [
          2,
          2,
          3
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [2, 2, 3]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Obyekt nima?",
        "text": "Obyekt bir-biriga bog‘liq ma’lumotlarni xususiyat nomlari bilan saqlaydi. Quyida user — o‘zgaruvchi nomi, { ... } — yangi obyekt, ism va yosh — uning xususiyatlari. user.ism shu obyektning ism xususiyatini o‘qiydi.",
        "code": "const user = {\n  ism: \"Ali\",\n  yosh: 20\n};\n\nconsole.log(user.ism); // Ali\nconsole.log(user.yosh); // 20"
      },
      {
        "title": "3. Bitta obyektga ikkita nom orqali murojaat",
        "text": "const boshqa = user yozilganda, { ... } qayta ishlatilmayapti va yangi obyekt yaratilmayapti. user ichidagi reference qiymati boshqa o‘zgaruvchisiga beriladi. Ikkalasi bitta obyektga murojaat qiladi. Buni ikki odamda bitta uyga kirish kaliti borligiga o‘xshat: kalitlar ikkita, uy bitta.",
        "code": "const user = { ism: \"Ali\" }; // 1 ta obyekt\nconst boshqa = user;        // yangi obyekt yo‘q\n\n// user   ──→ { ism: \"Ali\" }\n// boshqa ──↗\n\nboshqa.ism = \"Vali\";\nconsole.log(user.ism); // Vali\n// Ikkalasi o‘sha o‘zgargan obyektni ko‘radi."
      },
      {
        "title": "4. Yangi obyekt qachon yaratiladi?",
        "text": "Har bir alohida bajarilgan obyekt literali ({ ... }) yangi obyekt yaratadi. Ichidagi yozuv bir xil bo‘lishi ularni bitta obyekt qilmaydi. Faqat boshqa o‘zgaruvchini biriktirish esa yangi obyekt yaratmaydi.",
        "code": "const a = { ism: \"Ali\" }; // birinchi obyekt\nconst b = { ism: \"Ali\" }; // ikkinchi obyekt\nconst c = a;              // birinchi obyektga reference\n\nconsole.log(a === b); // false\nconsole.log(a === c); // true\n\nb.ism = \"Vali\";\nconsole.log(a.ism); // Ali: a va b mustaqil"
      },
      {
        "title": "5. Primitive: qiymatlar mustaqil",
        "text": "Number, string, boolean, bigint, symbol, null va undefined primitive qiymatlardir. Bir o‘zgaruvchidan boshqasiga berilganda, birini keyin almashtirish ikkinchisiga ta’sir qilmaydi.",
        "code": "let a = 10;\nlet b = a;\nb = 20;\n\nconsole.log(a); // 10\nconsole.log(b); // 20"
      },
      {
        "title": "6. Obyekt: bitta obyektga ikki yo‘llanma",
        "text": "b = a yangi obyekt yaratmaydi. a va b orqali bitta obyektning xususiyatlariga murojaat qilamiz. Shu sabab b.ism ni o‘zgartirish a.ism orqali ham ko‘rinadi.",
        "code": "const a = { ism: \"Ali\" };\nconst b = a;\n\nb.ism = \"Vali\";\n\nconsole.log(a.ism); // Vali\nconsole.log(b.ism); // Vali\nconsole.log(a === b); // true",
        "note": "Tasavvur: a → bitta obyekt ← b. Ikkita o‘zgaruvchi bor, lekin obyekt bitta. Massivlarda ham shu qoida ishlaydi."
      },
      {
        "title": "7. Mutation va reassignment farqi",
        "text": "Mutation — mavjud obyektning ichini o‘zgartirish. Reassignment — o‘zgaruvchini boshqa qiymatga biriktirish. b ni yangi obyektga biriktirish a ning yo‘llanmasini o‘zgartirmaydi.",
        "code": "let a = { son: 1 };\nlet b = a;\n\nb.son = 2; // mutation: umumiy obyekt o‘zgardi\nconsole.log(a.son); // 2\n\nb = { son: 3 }; // reassignment: yangi obyekt\nconsole.log(a.son); // 2\nconsole.log(b.son); // 3\nconsole.log(a === b); // false"
      },
      {
        "title": "8. Nega const obyekt o‘zgaradi?",
        "text": "const o‘zgaruvchini boshqa qiymatga qayta biriktirishni taqiqlaydi. U obyektning xususiyatlarini avtomatik muzlatmaydi.",
        "code": "const user = { ism: \"Ali\" };\nuser.ism = \"Vali\"; // mumkin: mutation\n\n// user = { ism: \"Hasan\" }; // TypeError: reassignment\n\nconst list = [1, 2];\nlist.push(3); // mumkin\n// list = []; // TypeError"
      },
      {
        "title": "9. Tenglik: tarkib emas, aynan bitta obyekt",
        "text": "Ikki alohida obyekt ichidagi ma’lumotlar bir xil bo‘lsa ham, ular ikkita turli obyekt. Ikkala operand obyekt bo‘lganda == va === identiklikni tekshiradi.",
        "code": "const a = { son: 1 };\nconst b = { son: 1 };\nconst c = a;\n\nconsole.log(a === b); // false\nconsole.log(a == b);  // false\nconsole.log(a === c); // true\nconsole.log([] === []); // false"
      },
      {
        "title": "10. Spread: yuzaki nusxa (shallow copy)",
        "text": "{ ...a } yangi tashqi obyekt yaratadi. Yuqori darajadagi primitive xususiyatlar mustaqil, lekin ichki obyektlar uchun reference ko‘chiriladi. Shu sabab ichma-ich obyektlar hali umumiy bo‘lishi mumkin. Oddiy ma’lumot obyektlari misolida ko‘ramiz.",
        "code": "const a = {\n  ism: \"Ali\",\n  manzil: { shahar: \"Toshkent\" }\n};\nconst b = { ...a };\n\nb.ism = \"Vali\";\nconsole.log(a.ism); // Ali\n\nb.manzil.shahar = \"Samarqand\";\nconsole.log(a.manzil.shahar); // Samarqand!\n\nconsole.log(a === b); // false\nconsole.log(a.manzil === b.manzil); // true",
        "note": "[...list] va Object.assign({}, obj) ham yuzaki nusxa qiladi. Spread barcha xususiyat va prototiplarni aynan saqlaydigan universal klon emas."
      },
      {
        "title": "11. Ichki obyektni ham mustaqil nusxalash",
        "text": "Ma’lum tuzilma uchun kerakli ichki qatlamlarni ham spread bilan nusxalash mumkin. Chuqurroq mos ma’lumotlarni mustaqil nusxalash uchun structuredClone ishlatiladi.",
        "code": "const a = {\n  ism: \"Ali\",\n  manzil: { shahar: \"Toshkent\" }\n};\n\nconst b = { ...a, manzil: { ...a.manzil } };\nb.manzil.shahar = \"Buxoro\";\nconsole.log(a.manzil.shahar); // Toshkent\n\nconst c = structuredClone(a);\nc.manzil.shahar = \"Xiva\";\nconsole.log(a.manzil.shahar); // Toshkent",
        "note": "structuredClone barcha qiymatlarni klonlamaydi: masalan, funksiya yoki DOM element kiritilsa DataCloneError chiqadi. Oddiy ma’lumotlar uchun qulay. JSON.parse(JSON.stringify(...)) ham universal nusxalash usuli emas: ayrim turlar yo‘qoladi yoki o‘zgaradi."
      },
      {
        "title": "12. Funksiya argumenti: reference qiymati nusxalanadi",
        "text": "JavaScript argumentlarni qiymat orqali uzatadi. Obyekt argumentida uzatiladigan qiymat obyektga reference bo‘lgani uchun funksiya ham o‘sha obyektga murojaat qiladi. Xususiyatini o‘zgartirish tashqarida ko‘rinadi; parametrni yangi obyektga qayta biriktirish tashqi o‘zgaruvchini almashtirmaydi.",
        "code": "const user = { ism: \"Ali\" };\n\nfunction yangila(obj) {\n  obj.ism = \"Vali\"; // umumiy obyektni o‘zgartiradi\n}\nyangila(user);\nconsole.log(user.ism); // Vali\n\nfunction almashtir(obj) {\n  obj = { ism: \"Hasan\" }; // faqat mahalliy parametr\n}\nalmashtir(user);\nconsole.log(user.ism); // Vali",
        "note": "“Obyektlar pass-by-reference orqali uzatiladi” degan jumla chalg‘itadi. Aniqrog‘i: obyektga reference qiymati nusxalanib uzatiladi."
      },
      {
        "title": "13. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Spread va Object.assign chuqur nusxa emas. structuredClone ko‘p ma’lumot turlarini klonlaydi, ammo funksiyalarni yoki ixtiyoriy class xulqini to‘liq ko‘chirish vositasi emas. JSON orqali klonlash Date, undefined, BigInt va sikllar bilan muammoga uchraydi. Obyekt argumenti pass-by-reference emas: reference qiymati nusxalanadi."
      },
      {
        "title": "14. Kichik amaliy loyiha",
        "text": "Ichki manzilli user obyektidan nusxa oling. Avval yuzaki nusxada manzilni o‘zgartirib ta’sirni ko‘ring, keyin ichki manzilni ham nusxalab mustaqillikni ta’minlang."
      }
    ],
    "takeaway": "Reference — obyektga olib boruvchi ishora qiymati.\nSpread va Object.assign chuqur nusxa emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ichki manzilli user obyektidan nusxa oling. Avval yuzaki nusxada manzilni o‘zgartirib ta’sirni ko‘ring, keyin ichki manzilni ham nusxalab mustaqillikni ta’minlang.\n\nQo‘shimcha savollar:\nAvval faqat shu misolni yech:\n\nconst a = { son: 1 };\nconst b = a;\nb.son = 7;\nconsole.log(a.son);\n\n1) Natija nima?\n2) Bu yerda nechta obyekt yaratilgan?\n\nKeyingi bosqich:\nconst c = { ...a };\nc.son = 9;\nconsole.log(a.son);\nconsole.log(c.son);\nconsole.log(a === c);",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = { x: { n: 1 } };\nconst b = { ...a };\nb.x.n = 9;\nconsole.log(a.x.n);\nconsole.log(a === b);\nconsole.log(a.x === b.x);\nconst c = structuredClone(a);\nc.x.n = 5;\nconsole.log(a.x.n);",
    "exerciseExpected": [
      9,
      false,
      true,
      9
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 9 — ichki obyekt umumiy\n2. false — tashqi obyekt yangi\n3. true — ichki reference bir xil\n4. 9 — chuqur klon aslni o‘zgartirmadi\n\nLoyihani yechish yo‘li: const copy = { ...user, manzil: { ...user.manzil } }; keyin copy.manzil.shahar ni yangilang. Ko‘proq chuqurlik bo‘lsa, mos ma’lumot uchun structuredClone ni solishtiring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone"
      }
    ],
    "learningGuide": {
      "goal": "Obyektni yangilash, qayta biriktirish va chuqur/yuzaki nusxani ajratasiz.",
      "prerequisites": [
        "objects-basics",
        "arrays-basics"
      ],
      "terms": [
        {
          "term": "Reference",
          "meaning": "Aynan bir obyektga olib boradigan ishora qiymati."
        },
        {
          "term": "Mutation",
          "meaning": "Umumiy obyekt ichidagi maydonni yangilash."
        },
        {
          "term": "Reassignment",
          "meaning": "O‘zgaruvchini boshqa qiymatga biriktirish."
        },
        {
          "term": "Deep clone",
          "meaning": "Qo‘llab-quvvatlanadigan ichki ma’lumot qatlamlarini ham mustaqil nusxalash."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "b ichidagi n yangilanganda a ichidagi n 1 bo‘lib qolsin.",
        "brokenCode": "const a = { ichki: { n: 1 } };\nconst b = { ...a };\nb.ichki.n = 9;\nconsole.log(a.ichki.n);",
        "fixedCode": "const a = { ichki: { n: 1 } };\nconst b = { ...a, ichki: { ...a.ichki } };\nb.ichki.n = 9;\nconsole.log(a.ichki.n);\nconsole.log(b.ichki.n);",
        "expectedOutput": [
          1,
          9
        ],
        "explanation": "Faqat tashqi spread yetmaydi. Ma’lum ichki qatlam ham yangi obyekt qilib olindi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Ichki manzilli user obyektidan nusxa oling. Avval yuzaki nusxada manzilni o‘zgartirib ta’sirni ko‘ring, keyin ichki manzilni ham nusxalab mustaqillikni ta’minlang.",
        "criteria": [
          "Spread tashqi obyektni boshqa reference qiladi.",
          "Yuzaki nusxada ichki manzilning o‘zgarishi aslida ham ko‘rinadi.",
          "Ichki manzil nusxalangach asl shahar o‘zgarmaydi."
        ],
        "hint": "const copy = { ...user, manzil: { ...user.manzil } }; keyin copy.manzil.shahar ni yangilang. Ko‘proq chuqurlik bo‘lsa, mos ma’lumot uchun structuredClone ni solishtiring."
      }
    }
  },
  {
    "id": "array-methods",
    "title": "Array metodlari: map, filter, reduce va boshqalar",
    "question": "map, filter, reduce, sort, find, some, every qanday ishlaydi? Qaysilari massivni o'zgartiradi?",
    "explanation": "Massiv metodi ro‘yxat ustida tayyor ish bajaradi. map har elementdan yangi qiymat yaratadi, filter keraklilarni qoldiradi, reduce bitta yakuniy natija yig‘adi. x => x * 2 qisqa funksiya: x ni qabul qilib ikki baravarini qaytaradi; u callback deyiladi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "map 10,20,30 uchun 20,40,60 qaytaradi. filter sharti 20 va 30 ga mos. reduce jami=0 dan boshlaydi: 10, 30, 60.",
        "code": "const narxlar = [10, 20, 30];\nconst yangi = narxlar.map(n => n * 2);\nconsole.log(yangi);\nconsole.log(narxlar.filter(n => n >= 20));\nconsole.log(narxlar.reduce((jami, n) => jami + n, 0));",
        "expectedOutput": [
          [
            20,
            40,
            60
          ],
          [
            20,
            30
          ],
          60
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [[20, 40, 60], [20, 30], 60]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. map va filter",
        "text": "map natijalardan yangi tashqi massiv yaratadi va uzunligini saqlaydi; siyrak joylar uchun callback chaqirilmaydi. filter sharti truthy bo‘lgan mavjud elementlarni yig‘adi. Metodlarning o‘zi asl massivni joyida tahrirlamaydi, ammo callback yozgan mutatsiya tashqarida ko‘rinishi mumkin.",
        "code": "const sonlar = [1, 2, 3];\nconsole.log(sonlar.map(x => x * 2)); // [2, 4, 6]\nconsole.log(sonlar.filter(x => x % 2 === 0)); // [2]\nconsole.log(sonlar); // [1, 2, 3] — o'zgarmadi"
      },
      {
        "title": "3. reduce",
        "text": "reduce akkumulyator va joriy element bilan ishlaydi. Ikkinchi argument — boshlang'ich qiymat. Uni bermasang birinchi element boshlang'ich qiymat bo'ladi va iteratsiya 2-elementdan boshlanadi.",
        "code": "console.log([1, 2, 3].reduce((a, b) => a + b, 0)); // 6\nconsole.log([1, 2, 3].reduce((a, b) => a + b)); // 6\nconsole.log([].reduce((a, b) => a + b, 0)); // 0"
      },
      {
        "title": "4. sort tuzog'i",
        "text": "sort() elementlarni string sifatida, Unicode tartibida solishtiradi. Shuning uchun [10, 2, 1].sort() natijasi [1, 10, 2] bo'ladi. Sonlarni to'g'ri tartiblash uchun solishtirish funksiyasi berish kerak. sort asl massivni o'zgartiradi.",
        "code": "console.log([10, 2, 1].sort()); // [1, 10, 2]\nconsole.log([10, 2, 1].sort((a, b) => a - b)); // [1, 2, 10]\n\nconst a = [3, 1, 2];\na.sort();\nconsole.log(a); // [1, 2, 3] — asl massiv o'zgardi"
      },
      {
        "title": "5. find, some, every, includes",
        "text": "find mos kelgan birinchi elementni (yoki undefined) qaytaradi. some — hech bo'lmaganda bittasi mos kelsa true. every — hammasi mos kelsa true. includes qiymat borligini tekshiradi.",
        "code": "console.log([1, 2, 3].find(x => x > 1)); // 2\nconsole.log([1, 2, 3].some(x => x > 2)); // true\nconsole.log([1, 2, 3].every(x => x > 0)); // true\nconsole.log([1, 2, 3].includes(2)); // true"
      },
      {
        "title": "6. forEach bilan map farqi",
        "text": "forEach yon ta’sir uchun, qaytish qiymati undefined. map qaytargan qiymatlardan yangi massiv yaratadi. forEach natijasini yangi ro‘yxat deb olmang.",
        "code": "const a = [1, 2];\nconsole.log(a.forEach(() => {}));\nconsole.log(a.map(x => { return x * 2; }));",
        "expectedOutput": [
          {
            "$undefined": true
          },
          [
            2,
            4
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Mutatsiyasiz tartiblash va almashtirish",
        "text": "sort/reverse/splice asl massivni o‘zgartiradi. toSorted/toReversed/toSpliced va with yangisini qaytaradi. Sonli tartib uchun comparator kerak.",
        "code": "const a = [10, 2, 1];\nconsole.log(a.toSorted((x, y) => x - y));\nconsole.log(a.with(0, 99));\nconsole.log(a);",
        "expectedOutput": [
          [
            1,
            2,
            10
          ],
          [
            99,
            2,
            1
          ],
          [
            10,
            2,
            1
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. flat, flatMap va qidirish",
        "text": "flat ichki massivlarni berilgan chuqurlikkacha yoyadi. flatMap map qilib bir qatlam yoyadi. findIndex birinchi indeksni, findLast oxirgi mos qiymatni beradi.",
        "code": "console.log([[1], [2, 3]].flat());\nconsole.log([1, 2].flatMap(x => [x, x * 10]));\nconsole.log([1, 2, 3].findIndex(x => x > 1));",
        "expectedOutput": [
          [
            1,
            2,
            3
          ],
          [
            1,
            10,
            2,
            20
          ],
          1
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "map callbackida { } ishlatsangiz return kerak; aks holda undefined elementlar olinadi. map/filter tashqi massivni yangilamaydi, lekin callback ichida obyekt xususiyatini o‘zgartirsangiz u mutatsiya bo‘ladi. forEach await qilinadigan natijalarni kutmaydi. Bo‘sh massivda every true, some false. reduce boshlang‘ich qiymatsiz bo‘sh massivda xato beradi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Mahsulotlardan faqat mavjudlarini filter qiling, map bilan nomlarini oling, reduce bilan umumiy summani hisoblang. Natijalarni yangi o‘zgaruvchilarga saqlang."
      }
    ],
    "takeaway": "Massiv metodi ro‘yxat ustida tayyor ish bajaradi.\nmap callbackida { } ishlatsangiz return kerak; aks holda undefined elementlar olinadi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Mahsulotlardan faqat mavjudlarini filter qiling, map bilan nomlarini oling, reduce bilan umumiy summani hisoblang. Natijalarni yangi o‘zgaruvchilarga saqlang.\n\nQo‘shimcha savollar:\n1) [10,2,1].sort() natijasi nima va nega?\n2) map va forEach farqi nima?\n3) [1,2,3].reduce((a,b)=>a+b, 10) natijasi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log([1, 2, 3].map(x => x + 1));\nconsole.log([1, 2, 3].find(x => x > 1));\nconsole.log([].every(x => x > 0));\nconsole.log([].some(x => x > 0));\nconsole.log([1, 2].reduce((s, x) => s + x, 0));",
    "exerciseExpected": [
      [
        2,
        3,
        4
      ],
      2,
      true,
      false,
      3
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. [2, 3, 4] — har elementga 1 qo‘shildi\n2. 2 — birinchi mos element\n3. true — rad etadigan element yo‘q\n4. false — mos element yo‘q\n5. 3 — 0+1+2\n\nLoyihani yechish yo‘li: products.filter(p => p.mavjud), keyin map(p => p.nom), jami uchun reduce((s,p)=>s+p.narx*p.dona,0). Callback ichida mahsulotlarni o‘zgartirmang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      }
    ],
    "learningGuide": {
      "goal": "map, filter va reduce uchun mos callback yozib, qaytarish turlarini farqlaysiz.",
      "prerequisites": [
        "arrays-basics",
        "loops"
      ],
      "terms": [
        {
          "term": "Funksiya",
          "meaning": "Kirish olib, ish bajaradigan va natija qaytara oladigan kod."
        },
        {
          "term": "Callback",
          "meaning": "Metod har element uchun chaqiradigan funksiya."
        },
        {
          "term": "return",
          "meaning": "Chaqirgan kodga hisoblangan qiymatni berish."
        },
        {
          "term": "Akkumulyator",
          "meaning": "reduce davomida yig‘ilib borayotgan natija."
        }
      ],
      "warmup": {
        "title": "map dan oldin: qisqa funksiyani o‘qish",
        "text": "Funksiyalar to‘liq keyinroq keladi. Hozir x => x * 2 ni “x ni ol, ikki baravarini qaytar” deb o‘qing. { } tanasi bo‘lsa return ochiq yoziladi.",
        "code": "const ikki = x => x * 2;\nconst yana = x => { return x * 2; };\nconsole.log(ikki(3));\nconsole.log(yana(3));",
        "expectedOutput": [
          6,
          6
        ],
        "explanation": "Ikkala funksiya bir xil natija beradi. map callback natijasini yangi massivga joylaydi; shuning uchun return yo‘qligi muhim.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "map [2,4] qaytarishi kerak. Qaytarish qayerda yo‘qolgan?",
        "brokenCode": "const a = [1, 2];\nconsole.log(a.map(x => { x * 2; }));",
        "fixedCode": "const a = [1, 2];\nconsole.log(a.map(x => { return x * 2; }));",
        "expectedOutput": [
          [
            2,
            4
          ]
        ],
        "explanation": "{ } tanali arrowda return ochiq yoziladi. Aks holda har chaqirish undefined qaytaradi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Mahsulotlardan faqat mavjudlarini filter qiling, map bilan nomlarini oling, reduce bilan umumiy summani hisoblang. Natijalarni yangi o‘zgaruvchilarga saqlang.",
        "criteria": [
          "filter faqat mavjud mahsulotlarni qoldiradi.",
          "map nomlar massivini qaytaradi.",
          "reduce narx*dona summasini 0 dan hisoblaydi; asl obyektlar o‘zgarmaydi."
        ],
        "hint": "products.filter(p => p.mavjud), keyin map(p => p.nom), jami uchun reduce((s,p)=>s+p.narx*p.dona,0). Callback ichida mahsulotlarni o‘zgartirmang."
      }
    }
  },
  {
    "id": "destructuring-spread",
    "title": "Destructuring, spread, optional chaining va rest",
    "question": "const { a } = obj, ...rest, ?. va ?? qanday ishlaydi?",
    "explanation": "Destructuring — obyekt yoki massivdan kerakli qismlarga nom berib olish. Spread ... tayyor to‘plamni yoyadi; rest ... qolgan qiymatlarni yig‘adi. Optional chaining ?. yo‘q bo‘lishi mumkin bo‘lgan qiymatni ehtiyotkor o‘qiydi. Belgilar o‘xshash, vazifasi yozilgan joyga bog‘liq.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "ism: nom qiymatni nom degan mahalliy o‘zgaruvchiga oladi; obyektning ism maydonini o‘zgartirmaydi. Rest birinchi elementdan qolganini yangi massivga yig‘adi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconst { ism: nom, yosh } = user;\nconsole.log(nom);\nconst [bir, ...qolgan] = [1, 2, 3];\nconsole.log(bir);\nconsole.log(qolgan);",
        "expectedOutput": [
          "Ali",
          1,
          [
            2,
            3
          ]
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", 1, [2, 3]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Obyekt destructuring va default",
        "text": "const { a, b = 2 } = obj: agar b yo'q yoki undefined bo'lsa, 2 ishlatiladi. Yangi nom bilan olish uchun const { a: boshqaNom } = obj yoziladi.",
        "code": "const { a, b = 2 } = { a: 1 };\nconsole.log(a, b); // 1 2\n\nconst { ism: nom } = { ism: \"Ali\" };\nconsole.log(nom); // Ali"
      },
      {
        "title": "3. Spread",
        "text": "Massivda [...a, 3] yangi massiv yaratadi. Obyektda { ...a, x: 1 } yangi obyekt yaratadi. E'tibor: bu yuzaki nusxa — ichki obyektlar umumiy qoladi.",
        "code": "const a = [1, 2];\nconst b = [...a, 3];\nconsole.log(a.length, b.length); // 2 3\n\nconst o = { x: 1 };\nconst n = { ...o, y: 2 };\nconsole.log(n); // { x: 1, y: 2 }"
      },
      {
        "title": "4. Optional chaining va nullish coalescing",
        "text": "user?.ism — user null yoki undefined bo'lsa undefined qaytaradi, xato emas. ?? esa faqat null/undefined da o'ng tomondagi qiymatni oladi. || bilan farqi: || 0, \"\", false ni ham zaxira deb hisoblaydi.",
        "code": "const user = null;\nconsole.log(user?.ism); // undefined\nconsole.log(user?.ism ?? \"yo'q\"); // yo'q\n\nconsole.log(0 ?? 5); // 0\nconsole.log(0 || 5); // 5\nconsole.log(\"\" ?? \"boshqa\"); // \"\""
      },
      {
        "title": "5. Massivda joy tashlash va ichki destructuring",
        "text": "Massivda pozitsiya, obyektda kalit nomi muhim. Ichki obyekt uchun ham default kerak bo‘lishi mumkin; null bo‘lsa bu default yordam bermaydi.",
        "code": "const [a, , c] = [10, 20, 30];\nconst { profil: { shahar = \"Yo‘q\" } = {} } = {};\nconsole.log(a);\nconsole.log(c);\nconsole.log(shahar);",
        "expectedOutput": [
          10,
          30,
          "Yo‘q"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Rest: qolgan qiymatlarni yig‘ish",
        "text": "Destructuringdagi rest qolgan elementlarni yangi massiv yoki obyektga yig‘adi. Funksiya parametridagi rest esa qolgan argumentlarni yig‘adi. Spread tayyor to‘plamni yoyadi.",
        "code": "const [birinchi, ...qolgan] = [1, 2, 3];\nconsole.log(qolgan); // [2, 3]\nfunction jami(...sonlar) {\n  return sonlar.reduce((sum, son) => sum + son, 0);\n}\nconsole.log(jami(1, 2, 3)); // 6"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Default faqat undefined uchun, null uchun emas. null yoki undefined ni destructure qilish xato. Spread nusxasi yuzaki. ?. e’lon qilinmagan nomni saqlab qolmaydi. user?.f() f mavjud emasligida xato berishi mumkin; kerak bo‘lsa user?.f?.() yozing. Optional chaining orqali qiymat yozib bo‘lmaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "API dan kelgan user uchun nom va profil.shahar ni xavfsiz o‘qing. Yo‘q qiymatlarda default bering, lekin ball=0 ni saqlang. Qolgan maydonlarni rest bilan ajrating."
      }
    ],
    "takeaway": "Destructuring — obyekt yoki massivdan kerakli qismlarga nom berib olish.\nDefault faqat undefined uchun, null uchun emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: API dan kelgan user uchun nom va profil.shahar ni xavfsiz o‘qing. Yo‘q qiymatlarda default bering, lekin ball=0 ni saqlang. Qolgan maydonlarni rest bilan ajrating.\n\nQo‘shimcha savollar:\n1) const { x = 1 } = { x: null } natijasi nima?\n2) 0 || 5 va 0 ?? 5 farqi?\n3) user?.ism?.first qanday ishlaydi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const { a = 5, b = 6 } = { a: undefined, b: null };\nconsole.log(a);\nconsole.log(b);\nconst user = null;\nconsole.log(user?.ism ?? \"Mehmon\");\nconsole.log(0 ?? 10);",
    "exerciseExpected": [
      5,
      null,
      "Mehmon",
      0
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 5 — undefined defaultni yoqadi\n2. null — null saqlanadi\n3. \"Mehmon\" — yo‘q ism zaxira oladi\n4. 0 — 0 saqlanadi\n\nLoyihani yechish yo‘li: const { ism = \"Mehmon\", ...rest } = user ?? {}; ichki qiymatni user?.profil?.shahar ?? \"Noma’lum\" bilan oling. null holati uchun alohida qaror qiling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring"
      }
    ],
    "learningGuide": {
      "goal": "Ajratib olish, yoyish va qolganini yig‘ish belgilarini yozilgan joyiga qarab farqlaysiz.",
      "prerequisites": [
        "arrays-basics",
        "object-reference",
        "array-methods"
      ],
      "terms": [
        {
          "term": "Destructuring",
          "meaning": "Obyekt kaliti yoki massiv joyidan qiymatni mahalliy nomga olish."
        },
        {
          "term": "Spread",
          "meaning": "To‘plam qiymatlarini tashqariga yoyish."
        },
        {
          "term": "Rest",
          "meaning": "Qolgan qiymatlarni bitta massiv yoki obyektga yig‘ish."
        },
        {
          "term": "Optional chaining",
          "meaning": "Chap qiymat null/undefined bo‘lsa o‘qishni undefined bilan to‘xtatish — ?. belgisi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "n null bo‘lganda ham zaxira 5 kerak. Destructuring defaulti nima uchun ishlamadi?",
        "brokenCode": "const { n = 5 } = { n: null };\nconsole.log(n);",
        "fixedCode": "const { n } = { n: null };\nconst natija = n ?? 5;\nconsole.log(natija);",
        "expectedOutput": [
          5
        ],
        "explanation": "Destructuring default faqat undefined da ishlaydi. Bu vazifada null/undefined uchun ?? kerak.",
        "runtime": "javascript"
      },
      "write": {
        "task": "API dan kelgan user uchun nom va profil.shahar ni xavfsiz o‘qing. Yo‘q qiymatlarda default bering, lekin ball=0 ni saqlang. Qolgan maydonlarni rest bilan ajrating.",
        "criteria": [
          "ism va shahar yo‘q bo‘lsa tushunarli zaxira chiqadi.",
          "ball=0 zaxiraga almashtirilmaydi.",
          "Qolgan maydonlar rest bilan yangi tashqi obyektga yig‘iladi."
        ],
        "hint": "const { ism = \"Mehmon\", ...rest } = user ?? {}; ichki qiymatni user?.profil?.shahar ?? \"Noma’lum\" bilan oling. null holati uchun alohida qaror qiling."
      }
    }
  },
  {
    "id": "json-basics",
    "title": "JSON: noldan",
    "question": "JSON nima? JSON.stringify va JSON.parse qanday ishlaydi? Nima yo‘qoladi?",
    "explanation": "JSON — ma’lumot almashish uchun matn formati. JavaScript obyekti bilan JSON matni bir narsa emas. JSON da kalitlar ikki qo‘shtirnoqda, izoh va oxirgi ortiqcha vergul yo‘q. stringify matn yaratadi, parse esa shu formatni qiymatga aylantiradi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Obyekt matnga aylantirildi. JSON.parse yangi obyekt yaratdi. Format to‘g‘ri bo‘lishi ma’lumotdagi yosh haqiqatan yaroqli ekanini kafolatlamaydi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconst matn = JSON.stringify(user);\nconsole.log(typeof matn);\nconsole.log(matn);\nconst qaytdi = JSON.parse(matn);\nconsole.log(qaytdi.ism);",
        "expectedOutput": [
          "string",
          "{\"ism\":\"Ali\",\"yosh\":20}",
          "Ali"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"string\", \"{\\\"ism\\\":\\\"Ali\\\",\\\"yosh\\\":20}\", \"Ali\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. JSON nima?",
        "text": "JSON — matn. Obyektni matnga aylantirish uchun JSON.stringify, matnni obyektga qaytarish uchun JSON.parse ishlatiladi. Bu ikki funksiya teskari amal qiladi.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nconst matn = JSON.stringify(user);\nconsole.log(matn); // '{\"ism\":\"Ali\",\"yosh\":20}'\nconsole.log(typeof matn); // \"string\"\nconsole.log(JSON.parse(matn)); // obyekt qaytdi"
      },
      {
        "title": "3. Qaysi qiymatlar yo‘qoladi?",
        "text": "JSON.stringify obyektdagi funksiya, undefined va Symbol xususiyatlarini tashlab yuboradi. NaN va Infinity null ga aylanadi. Date esa ISO string ga aylanadi.",
        "code": "const o = {\n  a: 1,\n  b: undefined,\n  f: () => 2,\n  c: NaN\n};\nconsole.log(JSON.stringify(o)); // {\"a\":1,\"c\":null}\nconsole.log(JSON.stringify(new Date(\"2026-01-01\"))); // \"2026-01-01T00:00:00.000Z\""
      },
      {
        "title": "4. JSON.parse xatolari",
        "text": "Noto‘g‘ri formatdagi matnni parse qilsang, SyntaxError chiqadi. Shuning uchun tashqi manbadan kelgan ma’lumotni try/catch bilan o‘qish kerak.",
        "code": "// JSON.parse(\"{noto'g'ri}\"); // SyntaxError\ntry {\n  JSON.parse(\"{noto'g'ri}\");\n} catch (e) {\n  console.log(\"Xato:\", e.message);\n}"
      },
      {
        "title": "5. Chuqur nusxa olish usuli sifatida",
        "text": "JSON.parse(JSON.stringify(obj)) chuqur nusxa yaratadi, lekin universal emas: funksiya, undefined, Symbol yo‘qoladi; Date stringga aylanadi; tsiklik bog‘lanish xato beradi. structuredClone ko‘p hollarda yaxshiroq.",
        "code": "const a = { x: 1, ichki: { y: 2 } };\nconst b = JSON.parse(JSON.stringify(a));\nb.ichki.y = 9;\nconsole.log(a.ichki.y); // 2 — asl saqlangan\n\nconst c = structuredClone(a); // zamonaviy usul"
      },
      {
        "title": "6. 3-argument va replacer",
        "text": "JSON.stringify(obj, replacer, space) uchinchi argument bilan chiroyli formatlanadi. Ikkinchi argument sifatida funksiya yoki massiv berib, qaysi kalitlarni kiritishni boshqarish mumkin.",
        "code": "const o = { ism: \"Ali\", yosh: 20 };\nconsole.log(JSON.stringify(o, null, 2));\n// {\n//   \"ism\": \"Ali\",\n//   \"yosh\": 20\n// }\nconsole.log(JSON.stringify(o, [\"ism\"])); // {\"ism\":\"Ali\"}"
      },
      {
        "title": "7. Format bilan mazmunni alohida tekshirish",
        "text": "JSON.parse null, massiv yoki son ham qaytarishi mumkin. Obyekt kutayotgan bo‘lsangiz turini, null emasligini va kerakli maydonlarni tekshiring.",
        "code": "const q = JSON.parse(\"{\\\"theme\\\":\\\"dark\\\"}\");\nconsole.log(q !== null && !Array.isArray(q) && typeof q === \"object\");\nconsole.log([\"light\", \"dark\"].includes(q.theme));",
        "expectedOutput": [
          true,
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "JSON.parse uchun eval ishlatmang. Parse faqat sintaksisni tekshiradi, ma’lumot sxemasini emas. Obyektdagi undefined tushib qoladi, massivda esa null bo‘lishi mumkin. BigInt va sikl odatda stringify xatosi beradi. JSON klonlash barcha turlarni saqlamaydi."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "JSON sozlamalar matnini o‘qing. Buzilgan JSON ga xato xabar bering; muvaffaqiyatli o‘qilganda theme faqat light yoki dark ekanini tekshiring."
      }
    ],
    "takeaway": "JSON — ma’lumot almashish uchun matn formati.\nJSON.parse uchun eval ishlatmang.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: JSON sozlamalar matnini o‘qing. Buzilgan JSON ga xato xabar bering; muvaffaqiyatli o‘qilganda theme faqat light yoki dark ekanini tekshiring.\n\nQo‘shimcha savollar:\n1) JSON.stringify({a: undefined, b: NaN}) nima beradi?\n2) JSON.parse(\"xato\") nima qiladi?\n3) Nega JSON usuli bilan chuqur nusxa olish har doim ham yaxshi emas?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(JSON.stringify({ a: undefined, b: 1 }));\nconsole.log(JSON.stringify([undefined, NaN]));\nconsole.log(JSON.parse(\"{\\\"x\\\":2}\").x);\nconsole.log(typeof JSON.parse(\"20\"));",
    "exerciseExpected": [
      "{\"b\":1}",
      "[null,null]",
      2,
      "number"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"{\\\"b\\\":1}\" — obyektda undefined maydon yo‘qoladi\n2. \"[null,null]\" — massivdagi mos qiymatlar null bo‘ladi\n3. 2 — to‘g‘ri JSON o‘qildi\n4. \"number\" — JSON faqat obyekt emas, son ham bo‘lishi mumkin\n\nLoyihani yechish yo‘li: try/catch ichida parse qiling. Natija oddiy obyektga mosligini, so‘ng theme ruxsat etilgan qiymatlardan biriligini tekshiring; format xatosi bilan nomaqbul sozlamani farqlang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
      }
    ],
    "learningGuide": {
      "goal": "Obyekt bilan JSON matnini ajratasiz, sintaksis va mazmun xatosini alohida tekshirasiz.",
      "prerequisites": [
        "strings",
        "objects-basics"
      ],
      "terms": [
        {
          "term": "JSON",
          "meaning": "Ma’lumot almashish uchun aniq qoidalarga ega matn formati."
        },
        {
          "term": "Serialize",
          "meaning": "Ma’lumotni saqlash yoki yuborish uchun matnga aylantirish."
        },
        {
          "term": "Parse",
          "meaning": "Formatdagi matnni o‘qib qiymatga aylantirish."
        },
        {
          "term": "Sxema",
          "meaning": "Qaysi maydon va qanday turdagi qiymat kerakligini belgilovchi qoida."
        }
      ],
      "warmup": {
        "title": "JSON.parse xatosini qanday ko‘rsatamiz?",
        "text": "try ichidagi ish xato bersa catch shu xatoni ushlaydi. Bu yerda faqat noto‘g‘ri JSON misoli dasturni to‘xtatmasligi uchun ishlatamiz; xatolar darsi keyin keladi.",
        "code": "try { JSON.parse(\"xato\"); }\ncatch (e) { console.log(e.name); }",
        "expectedOutput": [
          "SyntaxError"
        ],
        "explanation": "catch dagi e — xato haqidagi obyekt; name xato turini bildiradi. JSON.parse bajarilishdagi xatoni shu yo‘l bilan ushlash mumkin.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ism o‘qilishi kerak. JSON da oxirgi ortiqcha vergul mumkinmi?",
        "brokenCode": "console.log(JSON.parse('{\"ism\":\"Ali\",}').ism);",
        "fixedCode": "console.log(JSON.parse('{\"ism\":\"Ali\"}').ism);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "JSON obyektidagi oxirgi maydondan keyingi ortiqcha vergul olib tashlandi. JavaScript obyekt literali va JSON qoidasi aynan bir xil emas.",
        "runtime": "javascript"
      },
      "write": {
        "task": "JSON sozlamalar matnini o‘qing. Buzilgan JSON ga xato xabar bering; muvaffaqiyatli o‘qilganda theme faqat light yoki dark ekanini tekshiring.",
        "criteria": [
          "To‘g‘ri light/dark sozlama qabul qilinadi.",
          "Buzilgan JSON dasturni to‘xtatmasdan xabar beradi.",
          "Sintaksisi to‘g‘ri, lekin theme qiymati noto‘g‘ri JSON ham rad etiladi."
        ],
        "hint": "try/catch ichida parse qiling. Natija oddiy obyektga mosligini, so‘ng theme ruxsat etilgan qiymatlardan biriligini tekshiring; format xatosi bilan nomaqbul sozlamani farqlang."
      }
    }
  },
  {
    "id": "map-set",
    "title": "Map va Set: noldan",
    "question": "Map va Set nima? Oddiy obyekt va massivdan farqi nima?",
    "explanation": "Map — kalit va qiymat juftliklari, Set — noyob qiymatlar to‘plami. Oddiy obyektga qaraganda Map kalit sifatida obyektni ham saqlaydi. Set bir qiymatning takrorlarini kamaytiradi. Ikkalasi kiritilish tartibida aylaniladi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Map ga nom kaliti bilan ball yozildi. get qiymatni, size yozuvlar sonini beradi. Set ikkinchi 1 ni qo‘shmaydi, spread uni massivga yoyadi.",
        "code": "const ballar = new Map();\nballar.set(\"Ali\", 90);\nconsole.log(ballar.get(\"Ali\"));\nconsole.log(ballar.size);\nconst noyob = new Set([1, 1, 2]);\nconsole.log([...noyob]);",
        "expectedOutput": [
          90,
          1,
          [
            1,
            2
          ]
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [90, 1, [1, 2]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Map asoslari",
        "text": "new Map() bilan yaratiladi. set(kalit, qiymat) qo‘shadi, get(kalit) oladi, has(kalit) tekshiradi, delete o‘chiradi. Kalit ixtiyoriy tur bo‘lishi mumkin: obyekt ham.",
        "code": "const m = new Map();\nm.set(\"ism\", \"Ali\");\nm.set(1, \"son\");\nconsole.log(m.get(\"ism\")); // Ali\nconsole.log(m.has(1)); // true\nconsole.log(m.size); // 2"
      },
      {
        "title": "3. Map vs obyekt",
        "text": "Obyekt kalitlari faqat string/symbol bo‘ladi. Map da ixtiyoriy kalit bo‘ladi. Map tartibni saqlaydi va size xususiyatiga ega. Obyekt esa kalitlarni prototip zanjiri bilan aralashtirishi mumkin.",
        "code": "const k = { id: 1 };\nconst m = new Map();\nm.set(k, \"foydalanuvchi\");\nconsole.log(m.get(k)); // ishlaydi — obyekt kalit\n\nconst o = {};\no[k] = \"foydalanuvchi\";\nconsole.log(o[\"[object Object]\"]); // obyekt stringga aylandi"
      },
      {
        "title": "4. Set asoslari",
        "text": "Set faqat noyob qiymatlar saqlaydi. Bir xil qiymat ikkinchi marta qo‘shilsa, e’tiborga olinmaydi. Takrorlarni olib tashlash uchun juda qulay.",
        "code": "const s = new Set([1, 2, 2, 3]);\nconsole.log(s); // Set { 1, 2, 3 }\nconsole.log(s.size); // 3\ns.add(4);\nconsole.log(s.has(3)); // true"
      },
      {
        "title": "5. Takrorlarni olib tashlash",
        "text": "Massivdagi takrorlarni [...new Set(arr)] bilan olib tashlash mumkin. E’tibor: obyektlar reference bo‘yicha solishtiriladi, shuning uchun tarkibi bir xil ikki obyekt ikki xil hisoblanadi.",
        "code": "console.log([...new Set([1, 2, 2, 3])]); // [1,2,3]\nconsole.log(new Set([{ a: 1 }, { a: 1 }]).size); // 2"
      },
      {
        "title": "6. Iteratsiya",
        "text": "Map va Set for...of bilan ishlaydi. Map har bir qadamda [kalit, qiymat] juftligini beradi. Shuningdek, forEach metodi ham bor.",
        "code": "const m = new Map([[\"a\", 1], [\"b\", 2]]);\nfor (const [k, v] of m) console.log(k, v);\n\nconst s = new Set([1, 2]);\nfor (const v of s) console.log(v);"
      },
      {
        "title": "7. Qachon nima tanlash?",
        "text": "Kalit-qiymat va ixtiyoriy kalit kerak bo‘lsa Map. Faqat noyob qiymatlar kerak bo‘lsa Set. Oddiy ma’lumot va kalitlar string bo‘lsa, obyekt yetarli.",
        "code": "// oddiy sozlamalar — obyekt yetarli\nconst sozlamalar = { til: \"uz\", mavzu: \"qorong'u\" };\n// tez-tez qo'shish/o'chirish va obyekt kalit — Map\nconst keshlash = new Map();"
      },
      {
        "title": "8. Tenglik va ro‘yxatga aylantirish",
        "text": "Map/Set SameValueZero tengligidan foydalanadi: NaN o‘ziga teng hisoblanadi, +0 va -0 bitta. Obyektlar reference bo‘yicha. entries ni massiv qilib serializatsiya qilish mumkin.",
        "code": "const m = new Map([[\"a\", 1], [\"b\", 2]]);\nconsole.log([...m.keys()]);\nconsole.log(JSON.stringify([...m]));",
        "expectedOutput": [
          [
            "a",
            "b"
          ],
          "[[\"a\",1],[\"b\",2]]"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Map uchun m[kalit] yozish set/get o‘rnini bosmaydi. Set ichidagi ikki alohida obyekt tarkibi bir xil bo‘lsa ham ikki qiymat hisoblanadi. get undefined qaytarsa kalit yo‘q yoki qiymat undefined bo‘lishi mumkin: has bilan ajrating. Map/Set ni JSON.stringify qilish ularning yozuvlarini odatda bermaydi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Ismlar ro‘yxatidan noyob ismlarni Set bilan oling. Map yordamida har bir ism necha marta qatnashganini sanang."
      }
    ],
    "takeaway": "Map — kalit va qiymat juftliklari, Set — noyob qiymatlar to‘plami.\nMap uchun m[kalit] yozish set/get o‘rnini bosmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ismlar ro‘yxatidan noyob ismlarni Set bilan oling. Map yordamida har bir ism necha marta qatnashganini sanang.\n\nQo‘shimcha savollar:\n1) Map va obyekt farqi nima?\n2) new Set([1,2,2]).size nima?\n3) new Set([{a:1},{a:1}]).size nima va nega?\n4) Takrorlarni qanday olib tashlaysiz?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const m = new Map([[\"a\", 1]]);\nm.set(\"a\", 2);\nconsole.log(m.size);\nconsole.log(m.get(\"a\"));\nconsole.log(new Set([NaN, NaN]).size);\nconsole.log(new Set([{}, {}]).size);",
    "exerciseExpected": [
      1,
      2,
      1,
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — mavjud kalitning qiymati yangilanadi\n2. 2 — oxirgi yozilgan qiymat\n3. 1 — Set NaN larni bir qiymat deb biladi\n4. 2 — ikkita alohida obyekt\n\nLoyihani yechish yo‘li: const counts = new Map(); for (const ism of ismlar) counts.set(ism,(counts.get(ism) ?? 0)+1). Noyob nomlar uchun [...counts.keys()] yoki [...new Set(ismlar)] oling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
      }
    ],
    "learningGuide": {
      "goal": "Kalit-qiymat uchun Map va takrorlanmaydigan ro‘yxat uchun Set tanlaysiz.",
      "prerequisites": [
        "objects-basics",
        "arrays-basics",
        "loops"
      ],
      "terms": [
        {
          "term": "Map",
          "meaning": "Turli kalitlar bilan qiymat saqlaydigan kolleksiya."
        },
        {
          "term": "Set",
          "meaning": "Har bir teng qiymatni bir marta saqlaydigan kolleksiya."
        },
        {
          "term": "new",
          "meaning": "Tayyor konstruktor yordamida yangi obyekt yaratish amali."
        },
        {
          "term": "Iteratsiya",
          "meaning": "Qiymatlarni navbat bilan o‘qib chiqish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Takror obyektlar emas, noyob id lar soni 1 chiqishi kerak.",
        "brokenCode": "const users = [{ id: 1 }, { id: 1 }];\nconsole.log(new Set(users).size);",
        "fixedCode": "const users = [{ id: 1 }, { id: 1 }];\nconst ids = users.map(user => user.id);\nconsole.log(new Set(ids).size);",
        "expectedOutput": [
          1
        ],
        "explanation": "Set obyekt tarkibini chuqur solishtirmaydi. Noyob id kerak bo‘lsa, oldin id qiymatlarini ajratamiz.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Ismlar ro‘yxatidan noyob ismlarni Set bilan oling. Map yordamida har bir ism necha marta qatnashganini sanang.",
        "criteria": [
          "Takror ismlar bitta noyob ro‘yxatga tushadi.",
          "Har ismning sanog‘i Map da to‘g‘ri bo‘ladi.",
          "Bo‘sh kirish bo‘sh natija beradi."
        ],
        "hint": "const counts = new Map(); for (const ism of ismlar) counts.set(ism,(counts.get(ism) ?? 0)+1). Noyob nomlar uchun [...counts.keys()] yoki [...new Set(ismlar)] oling."
      }
    }
  },
  {
    "id": "functions",
    "title": "Funksiyalar: declaration, expression, arrow",
    "question": "Function declaration bilan function expression / arrow farqi nima? Parametrlar qanday ishlaydi?",
    "explanation": "Funksiya — nom berilgan qayta ishlatiladigan ish. Uni e’lon qilish ishni tayyorlaydi, () bilan chaqirish bajaradi. Parametr — ichkaridagi kirish nomi, argument — chaqirishda berilgan qiymat. return hisoblangan javobni chaqirgan kodga qaytaradi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Avval: funksiya, parametr va return",
        "text": "Funksiya — keyin chaqirish uchun nom berilgan ishlar to‘plami. Parametr kiruvchi qiymat uchun nom. Chaqirishda berilgan qiymat argument deyiladi. return natijani qaytaradi va funksiya ishini shu joyda tugatadi.",
        "code": "function qosh(a, b) {\n  return a + b;\n}\nconst natija = qosh(2, 3);\nconsole.log(natija); // 5",
        "note": "console.log natijani ko‘rsatadi; return esa qiymatni chaqirgan kodga qaytaradi. return yozilmasa odatda undefined qaytadi."
      },
      {
        "title": "2. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "qosh ichida a=2, b=3 bo‘lib 5 qaytariladi. Keyingi chaqirish uchun boshqa parametr qiymatlari olinadi. Funksiya tanasi faqat chaqirilganda ishlaydi.",
        "code": "function qosh(a, b) {\n  return a + b;\n}\nconst javob = qosh(2, 3);\nconsole.log(javob);\nconsole.log(qosh(4, 1));",
        "expectedOutput": [
          5,
          5
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [5, 5]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "3. Declaration vs expression",
        "text": "Declaration: function salom() {}. U hoisting qilinadi — nom va tanasi birga tayyor. Expression: const salom = function() {} yoki const salom = () => {}. Bular const bilan e'lon qilingani uchun TDZ ichida bo'ladi.",
        "code": "console.log(a()); // Salom\nfunction a() { return \"Salom\"; }\n\n// console.log(b()); // ReferenceError\nconst b = () => \"Salom\";"
      },
      {
        "title": "4. Default parametrlar",
        "text": "Parametrga qiymat berilsa, argument yuborilmagan yoki undefined yuborilganda ishlatiladi. Lekin null defaultni ishga solmaydi: null ataylab berilgan qiymat hisoblanadi.",
        "code": "function poz(n = 5) { return n; }\nconsole.log(poz());       // 5\nconsole.log(poz(undefined)); // 5\nconsole.log(poz(null));   // null"
      },
      {
        "title": "5. Rest parametrlar",
        "text": "...params qolgan argumentlarni massivga yig'adi. Rest parametri oxirida turishi shart. Bu spread bilan aralashtirib yuborilmasin: spread massivni elementlarga tarqatadi, rest esa elementlarni massivga yig'adi.",
        "code": "function yig(first, ...rest) {\n  return first + rest.length;\n}\nconsole.log(yig(1, 2, 3, 4)); // 4\n\nconst sonlar = [1, 2];\nconsole.log(...sonlar); // 1 2 (spread)"
      },
      {
        "title": "6. Arrow va oddiy funksiya",
        "text": "Arrow o'z this ga ega emas: u atrof-dagi this ni oladi. Shuning uchun obyekt metodini arrow bilan yozish noto'g'ri bo'ladi. Arrow ni new bilan chaqirib bo'lmaydi va unda arguments obyekti yo'q.",
        "code": "const obyekt = {\n  x: 10,\n  oddiy() { return this.x; }, // 10\n  arrow: () => this.x         // noto'g'ri ishlatish\n};\nconsole.log(obyekt.oddiy());\n\n// const F = () => {};\n// new F(); // TypeError"
      },
      {
        "title": "7. Chaqirish, callback va return turini ajratish",
        "text": "f funksiyaning o‘zi, f() esa chaqirish natijasi. return yozilmasa undefined qaytadi. Parametrga obyekt berilganda reference qiymati nusxalanadi, xususiyat o‘zgarishi tashqarida ko‘rinadi.",
        "code": "function korsat() { return; }\nconsole.log(typeof korsat);\nconsole.log(korsat());\nconst qoida = (x, y = 1) => x + y;\nconsole.log(qoida(2));",
        "expectedOutput": [
          "function",
          {
            "$undefined": true
          },
          3
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "console.log bilan return farq qiladi: log ko‘rsatadi, return qiymat beradi. return dan keyingi yangi satr avtomatik ; sabab undefined qaytarishi mumkin. Arrow { } tanasida return kerak, obyekt qaytarish uchun ({ ... }) yoziladi. Arrow o‘z this, arguments yoki konstruktoriga ega emas."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Berilgan narx, dona va chegirma uchun yakuniy qiymat qaytaradigan funksiya yozing. Noto‘g‘ri argumentni rad eting; hisoblashni console.log ga bog‘lamang."
      }
    ],
    "takeaway": "Funksiya — nom berilgan qayta ishlatiladigan ish.\nconsole.log bilan return farq qiladi: log ko‘rsatadi, return qiymat beradi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Berilgan narx, dona va chegirma uchun yakuniy qiymat qaytaradigan funksiya yozing. Noto‘g‘ri argumentni rad eting; hisoblashni console.log ga bog‘lamang.\n\nQo‘shimcha savollar:\n1) console.log(salom()); function salom(){ return 1; } natijasi?\n2) const f = () => this; ni obyekt metodi sifatida ishlatish nega xato?\n3) function f(a, ...rest) { return rest; } f(1,2,3) nima qaytaradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function f(a = 5) { return a; }\nconsole.log(f());\nconsole.log(f(null));\nconst ikki = x => x * 2;\nconsole.log(ikki(3));\nconst user = ism => ({ ism });\nconsole.log(user(\"Ali\").ism);",
    "exerciseExpected": [
      5,
      null,
      6,
      "Ali"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 5 — argument yo‘q, default olindi\n2. null — null defaultni yoqmaydi\n3. 6 — implicit return\n4. \"Ali\" — qavs ichida obyekt qaytarildi\n\nLoyihani yechish yo‘li: return narx * dona * (1 - foiz / 100). Avval Number.isFinite va diapazonlarni tekshiring. Natijani keyin alohida chiqarish funksiyani test qilishni osonlashtiradi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
      }
    ],
    "learningGuide": {
      "goal": "Funksiyani chaqirish, argument berish va return natijasidan foydalanishni bilasiz.",
      "prerequisites": [
        "operators",
        "conditionals"
      ],
      "terms": [
        {
          "term": "Parametr",
          "meaning": "Funksiya e’lonidagi kirish qiymati uchun nom."
        },
        {
          "term": "Argument",
          "meaning": "Chaqirishda haqiqatda yuborilgan qiymat."
        },
        {
          "term": "return",
          "meaning": "Funksiyani tugatib natijani chaqirgan joyga berish."
        },
        {
          "term": "Arrow",
          "meaning": "=> bilan qisqa yozilgan funksiya; this qoidasi oddiy funksiyadan farq qiladi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Funksiya 5 qiymatini qaytarsin. Faqat konsolga chiqarish yetarlimi?",
        "brokenCode": "function qosh(a, b) { console.log(a + b); }\nconst natija = qosh(2, 3);\nconsole.log(natija);",
        "fixedCode": "function qosh(a, b) { return a + b; }\nconst natija = qosh(2, 3);\nconsole.log(natija);",
        "expectedOutput": [
          5
        ],
        "explanation": "console.log qiymatni ko‘rsatadi, return esa uni chaqirgan kodga beradi. Endi natija o‘zgaruvchisida 5 bor.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Berilgan narx, dona va chegirma uchun yakuniy qiymat qaytaradigan funksiya yozing. Noto‘g‘ri argumentni rad eting; hisoblashni console.log ga bog‘lamang.",
        "criteria": [
          "Bir xil kirish uchun bir xil hisob natijasi qaytadi.",
          "0 dona uchun yakuniy narx 0 bo‘ladi.",
          "Hisoblash funksiyasi natijani return qiladi, faqat log qilib qo‘ymaydi."
        ],
        "hint": "return narx * dona * (1 - foiz / 100). Avval Number.isFinite va diapazonlarni tekshiring. Natijani keyin alohida chiqarish funksiyani test qilishni osonlashtiradi."
      }
    }
  },
  {
    "id": "scope",
    "title": "Scope: global, function va block",
    "question": "Scope nima? Global scope, function scope va block scope qanday ishlaydi?",
    "explanation": "Scope — o‘zgaruvchiga qayerdan murojaat qilish mumkinligi. Ichki xonadan tashqi xonadagi nomni ko‘rish mumkin, tashqaridan ichki mahalliy nomni ko‘rib bo‘lmaydi. JavaScript nomni funksiya qayerda yaratilganiga qarab qidiradi: bu lexical scope.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "interactiveScope": true,
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Har bir const son boshqa hududda yaratilgan. Blokdagi log eng yaqin 20 ni oladi; undan tashqaridagi funksiya 10 ni, global kod 5 ni oladi. Bu shadowing, qiymatlarni o‘zaro almashtirish emas.",
        "code": "const son = 5;\nfunction tekshir() {\n  const son = 10;\n  {\n    const son = 20;\n    console.log(son);\n  }\n  console.log(son);\n}\ntekshir();\nconsole.log(son);",
        "expectedOutput": [
          20,
          10,
          5
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [20, 10, 5]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Global scope",
        "text": "Funksiya va blocklardan tashqarida, oddiy scriptning yuqori darajasida e’lon qilingan nom global scope’da bo‘ladi. Shu muhitdagi ichki funksiyalar va blocklar unga murojaat qilishi mumkin. Global degani barcha fayllar yoki barcha brauzer tablarida avtomatik mavjud degani emas.",
        "code": "const til = \"JavaScript\";\n\nfunction salom() {\n  console.log(til); // JavaScript\n}\nsalom();\nconsole.log(til);   // JavaScript",
        "note": "Bu misol oddiy script uchun. type=\"module\" faylining yuqori darajasidagi nomlar modul scope’ida bo‘ladi. Brauzerda global let/const window xususiyati bo‘lib qolmaydi."
      },
      {
        "title": "3. Function scope",
        "text": "Funksiya ichida e’lon qilingan mahalliy nomni tashqaridan ishlatib bo‘lmaydi. var eng yaqin funksiyaga bog‘lanadi. let va const ham funksiya tanasida mahalliy, lekin qo‘shimcha ichki block bilan chegaralanishi mumkin.",
        "code": "function tanish() {\n  var ism = \"Ali\";\n  console.log(ism); // Ali\n}\n\ntanish();\n// console.log(ism); // ReferenceError\n// Funksiyani chaqirish uning mahalliy nomini global qilmaydi."
      },
      {
        "title": "4. Block scope",
        "text": "if, for yoki alohida { } ichida let/const bilan yaratilgan nom shu block ichida va uning ichki hududlarida ko‘rinadi. var oddiy block chegarasiga bo‘ysunmaydi.",
        "code": "function misol() {\n  if (true) {\n    let yosh = 20;\n    const shahar = \"Toshkent\";\n    var ball = 100;\n    console.log(yosh, shahar); // 20 Toshkent\n  }\n  console.log(ball); // 100: var funksiya ichida qoladi\n  // console.log(yosh); // ReferenceError\n}\nmisol();"
      },
      {
        "title": "5. Scope chain — nom qayerdan qidiriladi?",
        "text": "JavaScript avval hozirgi scope’dan qidiradi. Topilmasa, tashqi scope’ga chiqadi va shu tartibda davom etadi. Globalgacha topilmasa, oddiy o‘qishda ReferenceError bo‘ladi. Ichkaridagi bir xil nom tashqaridagini soyada qoldiradi (shadowing).",
        "code": "const ism = \"Global Ali\";\nfunction salom() {\n  const ism = \"Mahalliy Vali\";\n  {\n    console.log(ism); // Mahalliy Vali\n  }\n}\nsalom();\nconsole.log(ism); // Global Ali",
        "note": "Scope funksiya qayerda yozilganiga bog‘liq (lexical scope), qayerdan chaqirilganiga emas. Nom topilsa-yu TDZ ichida bo‘lsa, qidiruv tashqariga davom etmaydi — ReferenceError chiqadi."
      },
      {
        "title": "6. Scope chaqirilgan joy bilan o‘zgarmaydi",
        "text": "Funksiya qayerdan chaqirilgani lexical nom qidirishini almashtirmaydi. this qoidasi esa alohida; uni scope bilan aralashtirmang.",
        "code": "const ism = \"Global\";\nfunction olish() { return ism; }\nfunction chaqir() {\n  const ism = \"Mahalliy\";\n  return olish();\n}\nconsole.log(chaqir());",
        "expectedOutput": [
          "Global"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "{ } ichidagi let/const tashqariga chiqmaydi, var esa eng yaqin funksiyaga bog‘liq. Funksiyani chaqirish uning parametrini global qilmaydi. Modul yuqori darajasidagi nomlar global scope emas. Brauzer oddiy scriptida ham global let/const window xususiyati sifatida yaratilmaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Global nom, funksiya ichidagi shu nom va ichki blokdagi shu nom bilan uchta misol yozing. Har log qaysi nomni olayotganini belgilang; keyin var bilan if blokidagi farqni tekshiring."
      }
    ],
    "code": "const til = \"JS\";          // global\n\nfunction dars() {\n  var ism = \"Ali\";         // function\n\n  if (true) {\n    let yosh = 20;        // block\n    console.log(til);     // JS\n    console.log(ism);     // Ali\n    console.log(yosh);    // 20\n  }\n\n  console.log(ism);       // Ali\n  // console.log(yosh);   // ReferenceError\n}\n\ndars();\nconsole.log(til);         // JS\n// console.log(ism);      // ReferenceError",
    "takeaway": "Scope — o‘zgaruvchiga qayerdan murojaat qilish mumkinligi.\n{ } ichidagi let/const tashqariga chiqmaydi, var esa eng yaqin funksiyaga bog‘liq.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Global nom, funksiya ichidagi shu nom va ichki blokdagi shu nom bilan uchta misol yozing. Har log qaysi nomni olayotganini belgilang; keyin var bilan if blokidagi farqni tekshiring.\n\nQo‘shimcha savollar:\nInteraktiv misolda avval Global, so‘ng Function, keyin Block tugmasini bos. Har birida qaysi nomlar ko‘rinishini oldindan taxmin qil.\n\nEndi o‘yla: let yosh o‘rniga var yosh yozsak, funksiya ichida if’dan keyin yosh ko‘rinadimi? Funksiyadan tashqarida-chi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "let x = 1;\nfunction f() {\n  let x = 2;\n  { let x = 3; console.log(x); }\n  console.log(x);\n}\nf();\nconsole.log(x);",
    "exerciseExpected": [
      3,
      2,
      1
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 3 — eng ichki blokdagi x\n2. 2 — funksiya x si saqlangan\n3. 1 — global x o‘zgarmagan\n\nLoyihani yechish yo‘li: Avval uch hududni qavs bilan ajrating. Har log yoniga eng yaqin deklaratsiyani chizing. Nom tashqarida topilsa ham ichki shu nom TDZ da bo‘lsa tashqariga o‘tib ketilmaydi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
      }
    ],
    "learningGuide": {
      "goal": "Har bir nom qaysi hududdan olinayotganini ko‘rsatib, shadowing va global/function/block farqini tushuntirasiz.",
      "prerequisites": [
        "var-let-const",
        "functions"
      ],
      "terms": [
        {
          "term": "Scope",
          "meaning": "Nomga qaysi kod hududlaridan murojaat qilish mumkinligi."
        },
        {
          "term": "Lexical",
          "meaning": "Qidiruv funksiyaning qayerda yaratilganiga bog‘liq ekanligi."
        },
        {
          "term": "Shadowing",
          "meaning": "Ichki hududdagi bir xil nom tashqi nomni shu hududda soyada qoldirishi."
        },
        {
          "term": "Binding",
          "meaning": "Nom bilan uning qiymati orasidagi bog‘lanish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Funksiya ichidagi ismni tashqarida ishlatish kerak. Uni global qilish o‘rniga natija qaytaring.",
        "brokenCode": "function ol() { const ism = \"Ali\"; }\nol();\nconsole.log(ism);",
        "fixedCode": "function ol() { const ism = \"Ali\"; return ism; }\nconst natija = ol();\nconsole.log(natija);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "Ichki nom tashqariga ko‘rinmaydi. return bilan qiymatni oldik, yangi tashqi nomga saqladik.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Global nom, funksiya ichidagi shu nom va ichki blokdagi shu nom bilan uchta misol yozing. Har log qaysi nomni olayotganini belgilang; keyin var bilan if blokidagi farqni tekshiring.",
        "criteria": [
          "Uch hududdagi loglar 20, 10, 5 tartibida chiqadi.",
          "Ichki let tashqaridan ko‘rinmasligini ko‘rsatasiz.",
          "var if blokidan chiqishi, ammo funksiyadan chiqmasligini tushuntirasiz."
        ],
        "hint": "Avval uch hududni qavs bilan ajrating. Har log yoniga eng yaqin deklaratsiyani chizing. Nom tashqarida topilsa ham ichki shu nom TDZ da bo‘lsa tashqariga o‘tib ketilmaydi."
      }
    }
  },
  {
    "id": "hoisting-tdz",
    "title": "Hoisting va Temporal Dead Zone (TDZ)",
    "question": "Hoisting nima? Uning muhim joylari va TDZ qanday ishlaydi?",
    "explanation": "Hoisting — kod ishlashidan oldin scope uchun nomlar qanday tayyorlanishini tushuntiradigan atama. Kod satrlari jismonan yuqoriga ko‘chirilmaydi. var oldindan undefined bilan tayyorlanadi; let/const nomi band bo‘ladi, lekin deklaratsiya bajarilguncha foydalanishga tayyor emas. Shu oraliq TDZ.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi logdan oldin var a mavjud, lekin =10 hali bajarilmagan. b ichki try blokida e’lon qilinadi va uni oldin o‘qish ReferenceError beradi; catch shu xatoni ko‘rsatadi.",
        "code": "console.log(a);\nvar a = 10;\nconsole.log(a);\ntry {\n  console.log(b);\n  let b = 20;\n} catch (e) { console.log(e.name); }",
        "expectedOutput": [
          {
            "$undefined": true
          },
          10,
          "ReferenceError"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [undefined, 10, \"ReferenceError\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. var: nom tayyor, qiymat hali berilmagan",
        "text": "var nomi o‘z scope’i tayyorlanganda yaratiladi va undefined bilan boshlanadi. Lekin = 10 kabi qiymat berish faqat shu satr bajarilganda sodir bo‘ladi.",
        "code": "console.log(son); // undefined\nvar son = 10;\nconsole.log(son); // 10",
        "note": "undefined xato emas, bu qiymat. Umuman e’lon qilinmagan nomni oddiy o‘qish esa ReferenceError beradi."
      },
      {
        "title": "3. let va const: nom bor, foydalanish hali mumkin emas",
        "text": "let va const ham o‘z scope’i boshidan nomni band qiladi. Ammo ular dastlab initialization qilinmagan, ya’ni foydalanishga tayyor emas. Deklaratsiya bajarilguncha ularga murojaat ReferenceError beradi.",
        "code": "// Har bir misolni alohida ishga tushiring.\nconsole.log(yosh); // ReferenceError\nlet yosh = 20;\n\n// Alohida misol:\nconsole.log(PI); // ReferenceError\nconst PI = 3.14;",
        "note": "“let va const hoisting bo‘lmaydi” deyish chalg‘itadi. Aniq farq: var undefined bilan tayyor; let va const esa TDZ ichida."
      },
      {
        "title": "4. TDZ — vaqtinchalik foydalanish taqiqlangan oraliq",
        "text": "Temporal Dead Zone scope’ga kirilgan paytdan let yoki const deklaratsiyasi bajarilib, nom foydalanishga tayyor bo‘lguncha davom etadi. TDZ faqat deklaratsiyadan bitta oldingi satr emas — scope boshidan boshlanadi.",
        "code": "{\n  // ↓ TDZ boshlandi\n  // console.log(narx); // ReferenceError\n  // narx = 50;         // ReferenceError\n\n  let narx = 100;       // TDZ tugadi\n  console.log(narx);    // 100\n}\n\nlet tayyor;            // deklaratsiya bajarildi: undefined\nconsole.log(tayyor);   // undefined, TDZ emas",
        "note": "TDZError degan alohida xato turi yo‘q. TDZ sabab chiqadigan xato — ReferenceError. Xato ushlanmasa, joriy bajarilish to‘xtaydi; pastdagi satrlar davom etmaydi."
      },
      {
        "title": "5. Ichki nom tashqi nomni scope boshidanoq soyada qoldiradi",
        "text": "JavaScript ichki scope’da nomni topsa, tashqaridagi shu nomga o‘tib ketmaydi. Ichki nom TDZ ichida bo‘lsa, xato beradi.",
        "code": "let son = 5;\n\n{\n  // console.log(son); // ReferenceError, tashqi 5 emas!\n  let son = 10;\n  console.log(son);    // 10\n}\nconsole.log(son);      // 5"
      },
      {
        "title": "6. typeof ham TDZ’dan qutqarmaydi",
        "text": "typeof umuman mavjud bo‘lmagan oddiy nom uchun \"undefined\" satrini qaytaradi. Ammo TDZ ichidagi nomga typeof ishlatish ham ReferenceError beradi.",
        "code": "console.log(typeof mavjudEmas); // \"undefined\"\n\n{\n  // console.log(typeof yosh); // ReferenceError\n  let yosh = 20;\n}"
      },
      {
        "title": "7. Function declaration va function expression farqi",
        "text": "Oddiy function declaration scope tayyorlanganda funksiyaning o‘zi bilan tayyor bo‘ladi: uni deklaratsiyadan oldin chaqirish mumkin. Funksiya let/const/var ga qiymat sifatida berilsa, o‘sha o‘zgaruvchining qoidalari ishlaydi. Bu misollar block ichidagi function declaration’larning muhitga bog‘liq holatlarini qamramaydi.",
        "code": "salom(); // Salom\nfunction salom() {\n  console.log(\"Salom\");\n}\n\n// Quyidagi misollarni alohida sinang:\n// kutibOl(); // ReferenceError: const TDZ ichida\nconst kutibOl = () => console.log(\"Salom\");\n\n// xayr(); // TypeError: undefined funksiya emas\nvar xayr = function () {\n  console.log(\"Xayr\");\n};",
        "note": "var bilan funksiya ifodasi: nomni o‘qish mumkin, qiymati undefined; uni chaqirish TypeError beradi. const bilan funksiya ifodasi: nomni deklaratsiyadan oldin o‘qishning o‘zi ReferenceError."
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "TDZ xatosi undefined qaytishi emas. typeof ham let/const TDZ dan o‘ta olmaydi. const uchun qiymat deklaratsiyada beriladi. var ga yozilgan function expression declaration kabi oldin chaqirilmaydi: nom undefined bo‘lsa chaqirish TypeError. Blokdagi function deklaratsiyalarining eski script qoidalari muhitga bog‘liq."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "var, let va function declaration uchun oldin o‘qish/chaqirish misollarini alohida fayllarda sinang. Har birida “nom mavjudmi, tayyormi, qiymat berildimi?” deb yozing."
      }
    ],
    "takeaway": "Hoisting — kod ishlashidan oldin scope uchun nomlar qanday tayyorlanishini tushuntiradigan atama.\nTDZ xatosi undefined qaytishi emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: var, let va function declaration uchun oldin o‘qish/chaqirish misollarini alohida fayllarda sinang. Har birida “nom mavjudmi, tayyormi, qiymat berildimi?” deb yozing.\n\nQo‘shimcha savollar:\nHar birini alohida misol deb ol. Javoblarni taxmin qil:\n\nA) console.log(a); var a = 7;\nB) console.log(b); let b = 7;\nC) let c; console.log(c);\nD) ish(); var ish = () => 7;\n\nQaysi biri undefined, qaysi biri ReferenceError, qaysi biri TypeError beradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(a);\nvar a = 7;\nconsole.log(f());\nfunction f() { return \"tayyor\"; }\ntry {\n  console.log(typeof n);\n  let n = 1;\n} catch (e) { console.log(e.name); }",
    "exerciseExpected": [
      {
        "$undefined": true
      },
      "tayyor",
      "ReferenceError"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. undefined — var hali qiymat olmagan\n2. \"tayyor\" — declaration funksiya tayyor\n3. \"ReferenceError\" — typeof ham TDZ ichida xato\n\nLoyihani yechish yo‘li: Har misolni alohida konsol yoki faylda bajaring. let n; satridan keyin undefined chiqishi bilan undan oldingi ReferenceError ni farqlang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
      }
    ],
    "learningGuide": {
      "goal": "Nom mavjud, initialization qilingan va qiymat berilgan holatlarni alohida ko‘rib chiqasiz.",
      "prerequisites": [
        "scope",
        "functions"
      ],
      "terms": [
        {
          "term": "Hoisting",
          "meaning": "Koddan oldin scope nomlari qanday tayyorlanishini tushuntiruvchi atama."
        },
        {
          "term": "Initialization",
          "meaning": "Nomni foydalanishga tayyor boshlang‘ich holatga keltirish."
        },
        {
          "term": "TDZ",
          "meaning": "let/const nomi foydalanishga tayyor bo‘lmaguncha davom etadigan oraliq."
        },
        {
          "term": "ReferenceError",
          "meaning": "Nomni shu paytda o‘qish mumkin bo‘lmaganda yuz beradigan xato turi."
        }
      ],
      "warmup": {
        "title": "Misoldagi try/catch ni o‘qish",
        "text": "Bu darsdagi try/catch kutilgan xatoni ko‘rsatib, keyingi misolga o‘tish uchun ishlatiladi. try ishni bajaradi, catch xato bo‘lsa uni oladi. Hozir xato nomini kuzatish yetarli.",
        "code": "try {\n  console.log(son);\n  let son = 1;\n} catch (e) { console.log(e.name); }",
        "expectedOutput": [
          "ReferenceError"
        ],
        "explanation": "son shu blokda bor, lekin deklaratsiyasi hali bajarilmagan. Bu undefined qiymat olish emas, foydalanish taqiqlangan holat.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "20 chiqishi kerak. O‘qish initializationdan oldin qolgan.",
        "brokenCode": "console.log(yosh);\nlet yosh = 20;",
        "fixedCode": "let yosh = 20;\nconsole.log(yosh);",
        "expectedOutput": [
          20
        ],
        "explanation": "let nomini deklaratsiya bajarilgandan keyin o‘qidik. Bu tuzatish uchun let ni var ga almashtirish shart emas.",
        "runtime": "javascript"
      },
      "write": {
        "task": "var, let va function declaration uchun oldin o‘qish/chaqirish misollarini alohida fayllarda sinang. Har birida “nom mavjudmi, tayyormi, qiymat berildimi?” deb yozing.",
        "criteria": [
          "var ni qiymat berishdan oldin o‘qish undefined beradi.",
          "let/const ni TDZ ichida o‘qish ReferenceError beradi.",
          "Function declaration bilan const function expression oldin chaqirilishida farq ko‘rsatiladi."
        ],
        "hint": "Har misolni alohida konsol yoki faylda bajaring. let n; satridan keyin undefined chiqishi bilan undan oldingi ReferenceError ni farqlang."
      }
    }
  },
  {
    "id": "callbacks",
    "title": "Callback va yuqori darajali funksiyalar: noldan",
    "question": "Callback nima? Funksiyani boshqa funksiyaga argument qilib berish qanday ishlaydi?",
    "explanation": "Funksiya ham qiymat: uni argument sifatida uzatish mumkin. Callback — boshqa funksiya kerakli paytda chaqiradigan funksiya. Yuqori darajali funksiya boshqa funksiyani qabul qiladi yoki qaytaradi. Callbackning o‘zi avtomatik ravishda asinxron degani emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "bajar 3 va funksiya reference ini oladi. amal(son) callbackni shu yerda chaqiradi. Bir xil bajar funksiyasiga boshqa qoida berib boshqa natija oldik.",
        "code": "function bajar(son, amal) {\n  return amal(son);\n}\nfunction ikki(x) { return x * 2; }\nconsole.log(bajar(3, ikki));\nconsole.log(bajar(3, x => x + 1));",
        "expectedOutput": [
          6,
          4
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [6, 4]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Funksiya — qiymat",
        "text": "Funksiyani o‘zgaruvchiga saqlash mumkin. Uni chaqirish uchun nomi bilan () qo‘yiladi. Funksiya qaytarish ham mumkin.",
        "code": "const salom = function () { return \"Salom\"; };\nconsole.log(salom()); // Salom\n\nfunction tashqi() {\n  return function () { return \"ichki\"; };\n}\nconsole.log(tashqi()()); // ichki"
      },
      {
        "title": "3. Callback sifatida berish",
        "text": "Funksiyani boshqa funksiyaga argument qilib berish mumkin. Qabul qiluvchi funksiya uni kerak paytda chaqiradi.",
        "code": "function ishla(callback) {\n  console.log(\"boshlandi\");\n  callback();\n  console.log(\"tugadi\");\n}\nishla(() => console.log(\"callback ishladi\"));\n// boshlandi, callback ishladi, tugadi"
      },
      {
        "title": "4. setTimeout bilan callback",
        "text": "setTimeout birinchi argument sifatida callback, keyingi argument sifatida minimal kutish muddatini oladi. Funksiyani darhol chaqirib yubormang: setTimeout(fn,0) bilan setTimeout(fn(),0) boshqa ishlar.",
        "code": "const fn = () => console.log(\"keyin\");\nsetTimeout(fn, 1000); // to'g'ri: funksiya berildi\n// setTimeout(fn(), 1000); // noto'g'ri: natijasi berildi",
        "note": "fn() yozilsa funksiya darhol bajarilib, uning natijasi (undefined) setTimeout ga beriladi."
      },
      {
        "title": "5. Array metodlarida callback",
        "text": "map, filter, reduce, forEach callback oladi. Callback har element uchun chaqiriladi. uning qaytargan qiymati metod natijasiga ta’sir qiladi.",
        "code": "const a = [1, 2, 3];\na.forEach(x => console.log(x)); // yon ta'sir\nconst b = a.map(x => x * 2); // qaytargan qiymat ishlatiladi\nconsole.log(b); // [2,4,6]"
      },
      {
        "title": "6. Callback tartibi va this",
        "text": "Oddiy funksiya callback sifatida berilsa, ichidagi this yo‘qolishi mumkin. Arrow funksiya yaratilgan joydagi this ni saqlaydi, shuning uchun ko‘pincha qulay.",
        "code": "\"use strict\";\nconst o = {\n  x: 10,\n  ishla() {\n    [1].forEach(function () { console.log(this); }); // undefined (strict)\n    [1].forEach(() => console.log(this.x)); // 10\n  }\n};\no.ishla();"
      },
      {
        "title": "7. Callback hell",
        "text": "Bir nechta callback ichma-ich yozilsa, kod o‘qish qiyinlashadi (callback hell). Buning o‘rniga Promise va async/await ishlatiladi.",
        "code": "// qiyin o'qiladi:\nsetTimeout(() => {\n  setTimeout(() => {\n    setTimeout(() => console.log(\"tugadi\"), 100);\n  }, 100);\n}, 100);\n\n// zamonaviy:\nasync function ketma() {\n  await new Promise(r => setTimeout(r, 100));\n  console.log(\"tugadi\");\n}"
      },
      {
        "title": "8. Synchronous callback va asinxron callback",
        "text": "Array.map callbackni shu chaqirish ichida bajaradi. setTimeout esa keyinroq rejalashtiradi. Callback qachon bajarilishini uni qabul qilayotgan API belgilaydi.",
        "code": "const natija = [1, 2].map(x => x + 1);\nconsole.log(natija);",
        "expectedOutput": [
          [
            2,
            3
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Callback o‘rniga callback() yuborsangiz funksiya hozir ishlaydi va natijasi uzatiladi. map callbackining qaytish qiymatini ishlatadi, forEach esa ishlatmaydi. Asinxron callbackdagi throw tashqi sinxron try/catch bilan ushlanmaydi. Oddiy callback this ni yo‘qotishi mumkin; kerak bo‘lsa bind yoki lexical arrowdan foydalaning."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "filtrlash(ro‘yxat, qoida) funksiya yozing. U qoida(x) true qaytargan qiymatlarni yangi massivga yig‘sin. Uni juft son va musbat son qoidalari bilan sinang."
      }
    ],
    "takeaway": "Funksiya ham qiymat: uni argument sifatida uzatish mumkin.\nCallback o‘rniga callback() yuborsangiz funksiya hozir ishlaydi va natijasi uzatiladi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: filtrlash(ro‘yxat, qoida) funksiya yozing. U qoida(x) true qaytargan qiymatlarni yangi massivga yig‘sin. Uni juft son va musbat son qoidalari bilan sinang.\n\nQo‘shimcha savollar:\n1) setTimeout(fn, 0) va setTimeout(fn(), 0) farqi?\n2) map va forEach callback natijasini qanday ishlatadi?\n3) Nega arrow callback this ni saqlaydi?\n4) Callback hell nima va unga yechim?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function bajar(x, fn) { return fn(x); }\nconsole.log(bajar(5, x => x * 2));\nconsole.log([1, 2, 3].filter(x => x > 1));\nconsole.log(typeof (x => x));\nconsole.log([1].forEach(() => 99));",
    "exerciseExpected": [
      10,
      [
        2,
        3
      ],
      "function",
      {
        "$undefined": true
      }
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 10 — callback shu joyda chaqirildi\n2. [2, 3] — shartga mos qiymatlar\n3. \"function\" — arrow funksiya qiymati\n4. undefined — forEach qaytish natijalarni yig‘maydi\n\nLoyihani yechish yo‘li: for...of bilan aylaning; if (qoida(x)) yangi massivga push qiling va oxirida uni return qiling. Asl ro‘yxatni o‘zgartirmang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
      }
    ],
    "learningGuide": {
      "goal": "Funksiyaning o‘zini uzatish bilan uni darhol chaqirish farqini bilasiz.",
      "prerequisites": [
        "functions",
        "array-methods"
      ],
      "terms": [
        {
          "term": "Callback",
          "meaning": "Boshqa funksiya kerakli paytda chaqirishi uchun berilgan funksiya."
        },
        {
          "term": "Yuqori darajali funksiya",
          "meaning": "Funksiya qabul qiladigan yoki qaytaradigan funksiya."
        },
        {
          "term": "Sinxron",
          "meaning": "Hozirgi ish tugab, keyingisi boshlanadigan ketma-ket bajarilish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "bajar funksiyasiga ikki funksiyasini yuboring. Natijani erta yuborib qo‘ymang.",
        "brokenCode": "function ikki(x) { return x * 2; }\nfunction bajar(fn) { return fn(3); }\nconsole.log(bajar(ikki()));",
        "fixedCode": "function ikki(x) { return x * 2; }\nfunction bajar(fn) { return fn(3); }\nconsole.log(bajar(ikki));",
        "expectedOutput": [
          6
        ],
        "explanation": "ikki() hozir ishlaydi va uning natijasi yuboriladi. ikki deb yozsak funksiya reference i beriladi, bajar uni 3 argumenti bilan chaqiradi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "filtrlash(ro‘yxat, qoida) funksiya yozing. U qoida(x) true qaytargan qiymatlarni yangi massivga yig‘sin. Uni juft son va musbat son qoidalari bilan sinang.",
        "criteria": [
          "Bir yordamchi ikki xil qoida bilan ishlaydi.",
          "Qoida natijasiga mos yangi massiv qaytariladi.",
          "Funksiyani uzatishda fn yoziladi, fn() bilan erta bajarib yuborilmaydi."
        ],
        "hint": "for...of bilan aylaning; if (qoida(x)) yangi massivga push qiling va oxirida uni return qiling. Asl ro‘yxatni o‘zgartirmang."
      }
    }
  },
  {
    "id": "closures",
    "title": "Closure: noldan",
    "question": "Closure nima? Funksiya nega o‘z yaratilgan joyidagi o‘zgaruvchilarni eslaydi?",
    "explanation": "Closure — funksiya va u yaratilgan tashqi lexical muhit bilan bog‘lanish. Ichki funksiya tashqi o‘zgaruvchini keyin ham ishlata oladi. Bu o‘zgaruvchining muzlatilgan suratini olish emas: binding yangilansa, keyingi chaqirish yangi qiymatni ko‘rishi mumkin.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Hisoblagich har chaqirilganda alohida n yaratadi. a ning ikkala chaqirishi bir n ni yangilaydi, b esa o‘zining n=0 holatidan boshlaydi.",
        "code": "function hisoblagich() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = hisoblagich();\nconst b = hisoblagich();\nconsole.log(a());\nconsole.log(a());\nconsole.log(b());",
        "expectedOutput": [
          1,
          2,
          1
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [1, 2, 1]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Eng oddiy closure",
        "text": "Ichki funksiya tashqi funksiyaning o‘zgaruvchisiga murojaat qilsa, tashqi funksiya tugagach ham u o‘zgaruvchi saqlanib qoladi.",
        "code": "function tashqi() {\n  const x = 10;\n  return function ichki() {\n    console.log(x); // tashqi x ni eslaydi\n  };\n}\nconst f = tashqi();\nf(); // 10",
        "note": "tashqi() tugadi, lekin x yo‘qolmadi: ichki funksiya uni ushlab turibdi."
      },
      {
        "title": "3. Har chaqirishda yangi scope",
        "text": "Tashqi funksiya har chaqirilganda yangi x yaratiladi. Shuning uchun ikki funksiya bir-biridan mustaqil hisoblagich bo‘ladi.",
        "code": "function hisoblagich() {\n  let son = 0;\n  return () => ++son;\n}\nconst a = hisoblagich();\nconst b = hisoblagich();\nconsole.log(a()); // 1\nconsole.log(a()); // 2\nconsole.log(b()); // 1 (mustaqil)"
      },
      {
        "title": "4. Closure va tsikl",
        "text": "for (let i = ...) da har takrorlash uchun alohida i yaratiladi. Shuning uchun ichida yaratilgan funksiyalar har xil i ni eslaydi. var bilan esa hammasi bitta i ni ko‘radi.",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// 0, 1, 2\n\nfor (var j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n// 3, 3, 3"
      },
      {
        "title": "5. Ma’lumotni yashirish",
        "text": "Closure bilan tashqaridan o‘zgartirib bo‘lmaydigan holat yaratish mumkin. Faqat qaytarilgan metodlar orqali murojaat qilinadi.",
        "code": "function yarat() {\n  let hisob = 0;\n  return {\n    oshir() { return ++hisob; },\n    qiymat() { return hisob; }\n  };\n}\nconst o = yarat();\no.oshir();\nconsole.log(o.qiymat()); // 1\n// o.hisob — yo'q, tashqaridan ko'rinmaydi"
      },
      {
        "title": "6. Keng tarqalgan xato",
        "text": "Tsikl ichida var bilan yaratilgan funksiyalar oxirgi qiymatni ko‘radi. Bu closure tufayli, lekin noto‘g‘ri ko‘rinadi. Yechim: let ishlatish yoki IIFE bilan yangi scope yaratish.",
        "code": "// Eski usul (IIFE):\nfor (var i = 0; i < 3; i++) {\n  (function (n) {\n    setTimeout(() => console.log(n), 0);\n  })(i);\n}\n// 0, 1, 2"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Closure faqat ichki funksiya return qilinganda paydo bo‘lmaydi: funksiya o‘z lexical muhitiga bog‘liq. var tsiklida umumiy binding oxirgi qiymatga keladi, let da har iteratsiya uchun alohida. Closure katta obyektlarni uzoq saqlashi mumkin; endi kerak bo‘lmagan callback va listener reference larini tozalang."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Hisoblagichni oshir, kamaytir, qiymat metodlari bilan yarating. Ikki nusxasi mustaqil ishlasin va hisob o‘zgaruvchisi tashqaridan bevosita ko‘rinmasin."
      }
    ],
    "takeaway": "Closure — funksiya va u yaratilgan tashqi lexical muhit bilan bog‘lanish.\nClosure faqat ichki funksiya return qilinganda paydo bo‘lmaydi: funksiya o‘z lexical muhitiga bog‘liq.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Hisoblagichni oshir, kamaytir, qiymat metodlari bilan yarating. Ikki nusxasi mustaqil ishlasin va hisob o‘zgaruvchisi tashqaridan bevosita ko‘rinmasin.\n\nQo‘shimcha savollar:\n1) function f(){ let x=1; return ()=>x; } f()() nima beradi?\n2) Ikki hisoblagich mustaqil bo‘lishi nega?\n3) var bilan tsiklda 3,3,3 chiqishi nega?\n4) Closure bilan ma’lumotni qanday yashirasiz?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function yarat() { let n = 0; return () => ++n; }\nconst a = yarat(); const b = yarat();\nconsole.log(a());\nconsole.log(b());\nconsole.log(a());\nlet x = 1;\nconst oqi = () => x;\nx = 9;\nconsole.log(oqi());",
    "exerciseExpected": [
      1,
      1,
      2,
      9
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — a ning birinchi holati\n2. 1 — b mustaqil\n3. 2 — a o‘z holatini esladi\n4. 9 — binding yangilangan qiymatni ko‘radi\n\nLoyihani yechish yo‘li: Tashqi funksiya ichida let n saqlang. Ob’yekt metodlari n ni o‘qisin va yangilasin. Har yarat() chaqiruvi yangi lexical muhit beradi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
      }
    ],
    "learningGuide": {
      "goal": "Ichki funksiya tashqi o‘zgaruvchiga keyin ham qanday murojaat qilishini tushuntirasiz.",
      "prerequisites": [
        "functions",
        "scope"
      ],
      "terms": [
        {
          "term": "Closure",
          "meaning": "Funksiya bilan u yaratilgan lexical muhit bog‘lanishi."
        },
        {
          "term": "Holat",
          "meaning": "Chaqirishlar orasida saqlanadigan o‘zgaruvchi qiymatlari."
        },
        {
          "term": "Lexical muhit",
          "meaning": "Nomlar va ularning tashqi hududlar bilan bog‘lanishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ketma-ket 1 va 2 chiqishi kerak. Nega holat har safar 0 dan boshlanyapti?",
        "brokenCode": "function keyingi() { let n = 0; return ++n; }\nconsole.log(keyingi());\nconsole.log(keyingi());",
        "fixedCode": "function yarat() { let n = 0; return () => ++n; }\nconst keyingi = yarat();\nconsole.log(keyingi());\nconsole.log(keyingi());",
        "expectedOutput": [
          1,
          2
        ],
        "explanation": "n tashqi yarat muhitida bir marta yaratildi. Qaytgan keyingi funksiyasi shu bindingni chaqirishlar orasida ushlab turadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Hisoblagichni oshir, kamaytir, qiymat metodlari bilan yarating. Ikki nusxasi mustaqil ishlasin va hisob o‘zgaruvchisi tashqaridan bevosita ko‘rinmasin.",
        "criteria": [
          "Bitta hisoblagich 1, keyin 2 qaytaradi.",
          "Ikkinchi hisoblagich yana 1 dan boshlanadi.",
          "Ichki n tashqi obyektning ochiq maydoni sifatida o‘qilmaydi."
        ],
        "hint": "Tashqi funksiya ichida let n saqlang. Ob’yekt metodlari n ni o‘qisin va yangilasin. Har yarat() chaqiruvi yangi lexical muhit beradi."
      }
    }
  },
  {
    "id": "this-keyword",
    "title": "this: metod, arrow, call/apply/bind",
    "question": "this qanday aniqlanadi? Nega arrow funksiyada this boshqacha?",
    "explanation": "this — oddiy funksiyada chaqirish usuliga qarab beriladigan qiymat. user.salom() chaqirilsa this odatda user. Funksiya qayerda yozilgani emas, qanday chaqirilgani muhim. Arrow esa o‘z this ini yaratmaydi, tashqi lexical this ni oladi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi chaqirishda qabul qiluvchi user. call darhol boshqa this bilan chaqirdi. bind yangi funksiya yaratdi; uni () bilan keyin chaqirdik.",
        "code": "\"use strict\";\nfunction ism() { return this.ism; }\nconst user = { ism: \"Ali\", ol: ism };\nconsole.log(user.ol());\nconsole.log(ism.call({ ism: \"Vali\" }));\nconst boglangan = ism.bind(user);\nconsole.log(boglangan());",
        "expectedOutput": [
          "Ali",
          "Vali",
          "Ali"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", \"Vali\", \"Ali\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. this chaqirishga bog'liq",
        "text": "Bir xil funksiyani turli usulda chaqirsang this farq qiladi. Obyekt orqali chaqirish this ni shu obyektga bog'laydi. Funksiyani o'zgaruvchiga olib, mustaqil chaqirsang bu bog'lanish yo'qoladi.",
        "code": "const user = {\n  ism: \"Ali\",\n  salom() { return this.ism; }\n};\nconsole.log(user.salom()); // Ali\n\nconst f = user.salom;\n// console.log(f()); // strict mode: TypeError"
      },
      {
        "title": "3. call, apply va bind",
        "text": "call(thisArg, ...args) va apply(thisArg, [args]) funksiyani berilgan this bilan darhol chaqiradi. bind(thisArg, ...args) esa chaqirmaydi, yangi bog'langan funksiya qaytaradi.",
        "code": "function salom() { return this.ism; }\nconsole.log(salom.call({ ism: \"Vali\" })); // Vali\nconsole.log(salom.apply({ ism: \"Hasan\" })); // Hasan\n\nconst bog = salom.bind({ ism: \"Ali\" });\nconsole.log(bog()); // Ali"
      },
      {
        "title": "4. Arrow this ni meros qilib oladi",
        "text": "Arrow funksiya yaratilgan paytdagi this ni saqlaydi. Klass va oddiy funksiya ichida callback sifatida ishlatilganda aynan shu xususiyat qulay: this ni saqlash uchun .bind(this) yozish shart emas.",
        "code": "function F() {\n  this.x = 1;\n  const ichki = () => this.x;\n  return ichki;\n}\nconsole.log(new F()()); // 1\n\nconst obyekt = {\n  x: 10,\n  oddiy: function() { return this.x; },\n  arrow: () => this.x // bu yerda this obyekt emas\n};"
      },
      {
        "title": "5. new va constructor chaqirishi",
        "text": "Oddiy konstruktor new bilan chaqirilganda this yangi obyekt bo‘ladi. Arrow konstruktor emas. Class metodlari strict qoidalarga amal qiladi.",
        "code": "function User(ism) { this.ism = ism; }\nconsole.log(new User(\"Ali\").ism);",
        "expectedOutput": [
          "Ali"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Strict rejimdagi mustaqil f() uchun this undefined; eski oddiy scriptda global obyektga aylanishi mumkin. Obyekt literalining o‘zi arrow uchun yangi this scope yaratmaydi. Arrowga call/bind berish uning lexical this ini almashtirmaydi. bind ni qayta bind qilish ham oldingi this ni almashtirmaydi."
      },
      {
        "title": "7. Kichik amaliy loyiha",
        "text": "Hisob obyektining qiymatini qaytaradigan metodini o‘zgaruvchiga oling. Ajralgan chaqirish xatosini ko‘ring, bind bilan tuzating va boshqa obyekt uchun call/apply ishlating."
      }
    ],
    "takeaway": "this — oddiy funksiyada chaqirish usuliga qarab beriladigan qiymat.\nStrict rejimdagi mustaqil f() uchun this undefined; eski oddiy scriptda global obyektga aylanishi mumkin.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Hisob obyektining qiymatini qaytaradigan metodini o‘zgaruvchiga oling. Ajralgan chaqirish xatosini ko‘ring, bind bilan tuzating va boshqa obyekt uchun call/apply ishlating.\n\nQo‘shimcha savollar:\n1) const f = obj.method; f() qilsa this nima bo'ladi?\n2) call va apply farqi nima?\n3) Nega obyekt metodini arrow bilan yozish xato?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "\"use strict\";\nfunction f(a, b) { return this.n + a + b; }\nconst o = { n: 10 };\nconsole.log(f.call(o, 1, 2));\nconsole.log(f.apply(o, [1, 2]));\nconst g = f.bind(o, 1);\nconsole.log(g(3));\nconsole.log(g.call({ n: 99 }, 3));",
    "exerciseExpected": [
      13,
      13,
      14,
      14
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 13 — call argumentlarni alohida oladi\n2. 13 — apply massiv oladi\n3. 14 — this va birinchi argument oldindan bog‘landi\n4. 14 — bog‘langan this saqlanadi\n\nLoyihani yechish yo‘li: const alohida = hisob.ol.bind(hisob). call uchun ol.call(boshqa), apply uchun ol.apply(boshqa, args) yozing. Har chaqirishdagi qabul qiluvchini belgilang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
      }
    ],
    "learningGuide": {
      "goal": "Har chaqirishda this qayerdan kelganini va call/apply/bind farqini aytasiz.",
      "prerequisites": [
        "objects-basics",
        "functions",
        "scope"
      ],
      "terms": [
        {
          "term": "Qabul qiluvchi",
          "meaning": "user.salom() dagi user kabi, chaqirish bog‘langan obyekt."
        },
        {
          "term": "this",
          "meaning": "Oddiy funksiyada chaqirish usuli bilan beriladigan qiymat."
        },
        {
          "term": "bind",
          "meaning": "Funksiyani hozir chaqirmay, this va ayrim argumentlari bog‘langan yangi funksiya yaratish."
        },
        {
          "term": "Strict mode",
          "meaning": "Ayrim noaniq eski xatti-harakatlarni xato sifatida ko‘rsatadigan qat’iy rejim."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ajratib olingan metod Ali ni qaytarsin. this bog‘lanishini saqlang.",
        "brokenCode": "\"use strict\";\nconst user = { ism: \"Ali\", ol() { return this.ism; } };\nconst f = user.ol;\nconsole.log(f());",
        "fixedCode": "\"use strict\";\nconst user = { ism: \"Ali\", ol() { return this.ism; } };\nconst f = user.ol.bind(user);\nconsole.log(f());",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "Metodni nomga olish obyekt orqali chaqirishni saqlamaydi. bind yangi funksiyada user ni this qilib bog‘ladi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Hisob obyektining qiymatini qaytaradigan metodini o‘zgaruvchiga oling. Ajralgan chaqirish xatosini ko‘ring, bind bilan tuzating va boshqa obyekt uchun call/apply ishlating.",
        "criteria": [
          "Obyekt orqali metod to‘g‘ri ismni oladi.",
          "bind qilingan metod ajratib chaqirilganda ham kerakli obyektni oladi.",
          "call/apply darhol, bind esa keyingi chaqirish uchun ishlashini ajratasiz."
        ],
        "hint": "const alohida = hisob.ol.bind(hisob). call uchun ol.call(boshqa), apply uchun ol.apply(boshqa, args) yozing. Har chaqirishdagi qabul qiluvchini belgilang."
      }
    }
  },
  {
    "id": "recursion",
    "title": "Rekursiya: noldan",
    "question": "Funksiya o‘zini o‘zi chaqirsa nima bo‘ladi? Bazis va rekursiv qadam nima?",
    "explanation": "Rekursiya — funksiya masalaning kichikroq nusxasini yechish uchun o‘zini chaqirishi. Ikki qism shart: to‘xtash holati va unga yaqinlashtiradigan qadam. Hisoblashni ichkariga kirish va javoblarning qaytishi sifatida kuzating.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "yig(3) → 3+yig(2) → 3+2+yig(1) → 3+2+1+yig(0). Bazis 0 qaytaradi, keyin javoblar 1, 3, 6 bo‘lib tashqariga chiqadi. Misolda n manfiy bo‘lmagan butun son bo‘lishi kerak.",
        "code": "function yig(n) {\n  if (n === 0) return 0;\n  return n + yig(n - 1);\n}\nconsole.log(yig(3));",
        "expectedOutput": [
          6
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [6]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Eng oddiy rekursiya",
        "text": "Funksiya o‘zini chaqiradi, lekin har safar argument kichiklashadi. n = 0 ga yetganda to‘xtaydi. Bu bazis holati.",
        "code": "function hisobla(n) {\n  if (n === 0) return 0; // bazis\n  return n + hisobla(n - 1); // rekursiv qadam\n}\nconsole.log(hisobla(3)); // 6 (3+2+1+0)",
        "note": "hisobla(3) → 3 + hisobla(2) → 3 + 2 + hisobla(1) → ... → 6."
      },
      {
        "title": "3. Bazis shart nima uchun shart?",
        "text": "Bazis bo‘lmasa, funksiya hech qachon to‘xtamaydi va call stack to‘ladi: RangeError: Maximum call stack size exceeded.",
        "code": "// function cheksiz(n) {\n//   return cheksiz(n + 1); // to'xtash yo'q\n// }\n// cheksiz(1); // RangeError"
      },
      {
        "title": "4. Faktorial",
        "text": "Klassik misol: n! = n × (n-1)!, 0! = 1. Bazis n === 0. Har qadam n ni 1 ga kamaytiradi.",
        "code": "function faktorial(n) {\n  if (n === 0) return 1;\n  return n * faktorial(n - 1);\n}\nconsole.log(faktorial(5)); // 120"
      },
      {
        "title": "5. Rekursiya va tsikl",
        "text": "Ko‘p masalalarni ham rekursiya, ham tsikl bilan yechish mumkin. Tsikl odatda tezroq va xotirani kamroq ishlatadi; rekursiya esa ba’zi tuzilmalar (daraxt) uchun qulayroq.",
        "code": "// tsikl bilan yig'indi:\nfunction yigindi(n) {\n  let s = 0;\n  for (let i = 1; i <= n; i++) s += i;\n  return s;\n}\nconsole.log(yigindi(3)); // 6"
      },
      {
        "title": "6. Ichki obyektlarda rekursiya",
        "text": "Rekursiya ierarxik ma’lumotlarda (daraxt, ichki obyektlar) juda qulay. Har qadam ichki obyektga o‘tadi.",
        "code": "const tuzilma = {\n  nom: \"bosh\",\n  bolalar: [\n    { nom: \"bir\", bolalar: [] },\n    { nom: \"ikki\", bolalar: [] }\n  ]\n};\nfunction chiqar(o) {\n  console.log(o.nom);\n  o.bolalar.forEach(chiqar);\n}\nchiqar(tuzilma); // bosh, bir, ikki"
      },
      {
        "title": "7. Stack chuqurligi",
        "text": "Har bir faol rekursiv chaqirish stack resursi oladi. Chuqurlik chegarasi muhit va funksiyaga bog‘liq; 10000 kabi universal aniq son yo‘q. Chuqur tuzilmalarda ochiq stackli tsikl, cheklov yoki boshqa algoritm tanlanishi mumkin.",
        "code": "// function chuqur(n) {\n//   if (n === 0) return 0;\n//   return chuqur(n - 1);\n// }\n// chuqur(20000); // RangeError (muhitga qarab)"
      },
      {
        "title": "8. Kirishni tekshirib keyin rekursiya qilish",
        "text": "Yordamchi ichki funksiya rekursiyani bajarishi mumkin, tashqi funksiya esa kirishni bir marta tekshiradi. Katta natija Number aniqlik chegarasidan chiqishi mumkin.",
        "code": "function sanoq(n) {\n  if (!Number.isInteger(n) || n < 0) throw new RangeError(\"Butun n >= 0 kerak\");\n  let jami = 0;\n  for (let i = 1; i <= n; i++) jami += i;\n  return jami;\n}\nconsole.log(sanoq(0));\nconsole.log(sanoq(5));",
        "expectedOutput": [
          0,
          15
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Bazis borligi yetarli emas: qadam unga olib borishi ham kerak. n=-1 ni doim kamaytirish 0 ga yetmaydi. JavaScript’da stack chuqurligi muhitga bog‘liq; universal xavfsiz 10000 qadam yo‘q. Daraxtda sikl bo‘lsa visited Set yoki boshqa cheklov kerak. Oddiy Fibonacci takroriy chaqiruvlar sabab sekinlashadi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Faktorial funksiyasiga manfiy, kasr va noto‘g‘ri tur uchun tekshiruv qo‘shing. Keyin xuddi shu yig‘indini tsikl bilan yozib, natijalarni n=0,1,5 da solishtiring."
      }
    ],
    "takeaway": "Rekursiya — funksiya masalaning kichikroq nusxasini yechish uchun o‘zini chaqirishi.\nBazis borligi yetarli emas: qadam unga olib borishi ham kerak.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Faktorial funksiyasiga manfiy, kasr va noto‘g‘ri tur uchun tekshiruv qo‘shing. Keyin xuddi shu yig‘indini tsikl bilan yozib, natijalarni n=0,1,5 da solishtiring.\n\nQo‘shimcha savollar:\n1) faktorial(0) nima qaytaradi va nega?\n2) Bazis shart bo‘lmasa nima bo‘ladi?\n3) 3 + hisobla(2) qanday ochiladi?\n4) Rekursiya va tsiklni qachon tanlaysiz?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function f(n) { return n === 0 ? 1 : n * f(n - 1); }\nconsole.log(f(0));\nconsole.log(f(4));\nfunction yig(n) { return n === 0 ? 0 : n + yig(n - 1); }\nconsole.log(yig(3));",
    "exerciseExpected": [
      1,
      24,
      6
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — 0! bazisi 1\n2. 24 — 4*3*2*1\n3. 6 — 3+2+1+0\n\nLoyihani yechish yo‘li: Tashqi funksiyada Number.isInteger(n) va n>=0 ni tekshiring. Bazisni n===0 qiling, qadamda n-1 yuboring. Cheksiz katta n ni qabul qilmaslik chegarasini alohida belgilang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Recursion"
      }
    ],
    "learningGuide": {
      "goal": "Bazis va unga olib boradigan qadam bilan tugaydigan rekursiya yozasiz.",
      "prerequisites": [
        "functions",
        "conditionals",
        "loops"
      ],
      "terms": [
        {
          "term": "Rekursiya",
          "meaning": "Funksiya masalaning kichikroq nusxasi uchun o‘zini chaqirishi."
        },
        {
          "term": "Bazis",
          "meaning": "Yana chaqirishsiz javob qaytariladigan to‘xtash holati."
        },
        {
          "term": "Call stack",
          "meaning": "Hali tugamagan funksiya chaqirishlari saqlanadigan tuzilma."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "1 dan 3 gacha yig‘indi 6 chiqishi kerak. Bazis 1 ni tashlab yuborgan.",
        "brokenCode": "function yig(n) { if (n <= 1) return 0; return n + yig(n - 1); }\nconsole.log(yig(3));",
        "fixedCode": "function yig(n) { if (n === 0) return 0; return n + yig(n - 1); }\nconsole.log(yig(3));",
        "expectedOutput": [
          6
        ],
        "explanation": "Bu misolda kirish manfiy bo‘lmagan butun son. 0 bazisi 1 ni ham yig‘indiga qo‘shishga imkon beradi; qadam bazisga yaqinlashadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Faktorial funksiyasiga manfiy, kasr va noto‘g‘ri tur uchun tekshiruv qo‘shing. Keyin xuddi shu yig‘indini tsikl bilan yozib, natijalarni n=0,1,5 da solishtiring.",
        "criteria": [
          "n=0 uchun bazis to‘g‘ri natija qaytaradi.",
          "n=3 uchun yig‘indi 6 bo‘ladi.",
          "Manfiy yoki kasr kirish cheksiz chaqirishga olib bormaydi."
        ],
        "hint": "Tashqi funksiyada Number.isInteger(n) va n>=0 ni tekshiring. Bazisni n===0 qiling, qadamda n-1 yuboring. Cheksiz katta n ni qabul qilmaslik chegarasini alohida belgilang."
      }
    }
  },
  {
    "id": "iife-pure",
    "title": "IIFE va pure function tushunchasi",
    "question": "Darhol chaqiriladigan va sof funksiya qanday ishlaydi?",
    "explanation": "IIFE — yozilishi bilan chaqiriladigan funksiya ifodasi. Pure function — bir xil argumentga bir xil natija beradigan va tashqi kuzatiladigan holatni o‘zgartirmaydigan funksiya. Biri chaqirish shakli, ikkinchisi xulq: ular bitta tushuncha emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Qavs ichidagi function ifoda bo‘ldi, oxiridagi (2,3) uni darhol chaqirdi. ikki hech narsani tashqarida yangilamaydi va bir xil 4 uchun 8 qaytaradi.",
        "code": "const natija = (function (a, b) {\n  return a + b;\n})(2, 3);\nconsole.log(natija);\nfunction ikki(x) { return x * 2; }\nconsole.log(ikki(4));\nconsole.log(ikki(4));",
        "expectedOutput": [
          5,
          8,
          8
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [5, 8, 8]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. IIFE nima?",
        "text": "Funksiya ifodasini qavs ichiga olib, oxiriga () yozsak darhol chaqiriladi. Ichki o‘zgaruvchi tashqariga chiqmaydi.",
        "code": "(function () {\n  const xabar = \"Bir marta ishladi\";\n  console.log(xabar);\n})();\n// console.log(xabar); // ReferenceError"
      },
      {
        "title": "3. Sof funksiya",
        "text": "Natija faqat argumentlarga bog‘liq. Funksiya tashqi o‘zgaruvchini, berilgan massivni yoki sahifani o‘zgartirmaydi. Hisoblangan qiymat return bilan qaytariladi.",
        "code": "function jami(a, b) {\n  return a + b;\n}\nconsole.log(jami(2, 3)); // 5\nconsole.log(jami(2, 3)); // 5"
      },
      {
        "title": "4. Yon ta’sirni ko‘rish",
        "text": "Tashqi o‘zgaruvchini yangilash — yon ta’sir. Natija har chaqirishda oldingi holatga bog‘liq bo‘ladi. Bunday ishlar ilovada kerak bo‘lishi mumkin, lekin hisoblashni ulardan ajratish tekshirishni osonlashtiradi.",
        "code": "let sanoq = 0;\nfunction oshir() {\n  sanoq += 1;\n  return sanoq;\n}\nconsole.log(oshir()); // 1\nconsole.log(oshir()); // 2"
      },
      {
        "title": "5. Massivni o‘zgartirmasdan natija olish",
        "text": "push kirish massivini o‘zgartiradi. Spread bilan yangi massiv qaytarish tashqi massivni o‘zgartirmaydi. Bu yerda elementlar oddiy sonlar bo‘lgani uchun yuzaki nusxa yetarli.",
        "code": "function qosh(sonlar, son) {\n  return [...sonlar, son];\n}\nconst asl = [1, 2];\nconsole.log(qosh(asl, 3)); // [1, 2, 3]\nconsole.log(asl);         // [1, 2]"
      },
      {
        "title": "6. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Sof funksiya ichida mahalliy vaqtinchalik o‘zgaruvchi ishlatish mumkin; muammo tashqi kuzatiladigan holatni o‘zgartirishda. Kirgan massivga push yoki obyektga yozish yon ta’sirdir. Date.now, Math.random va o‘zgaruvchan tashqi ma’lumot natijani faqat argumentga bog‘liq qilmaydi. IIFE modul o‘rnini hamma joyda bosmaydi."
      },
      {
        "title": "7. Kichik amaliy loyiha",
        "text": "Savatchaga mahsulot qo‘shadigan sof funksiya yozing: eski massivga push qilmasin, yangi massiv qaytarsin. Natija va asl qiymatni alohida tekshiring."
      }
    ],
    "takeaway": "IIFE — yozilishi bilan chaqiriladigan funksiya ifodasi.\nSof funksiya ichida mahalliy vaqtinchalik o‘zgaruvchi ishlatish mumkin; muammo tashqi kuzatiladigan holatni o‘zgartirishda.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Savatchaga mahsulot qo‘shadigan sof funksiya yozing: eski massivga push qilmasin, yangi massiv qaytarsin. Natija va asl qiymatni alohida tekshiring.\n\nQo‘shimcha savollar:\nBerilgan narx va chegirma foizidan yakuniy narxni hisoblaydigan sof funksiya yozing. Argumentlarni o‘zgartirmasin va tashqaridagi o‘zgaruvchini ishlatmasin.",
    "resources": [
      {
        "title": "MDN: IIFE",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
      },
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Pure_function"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = [1, 2];\nconst qosh = (list, x) => [...list, x];\nconst b = qosh(a, 3);\nconsole.log(a);\nconsole.log(b);\nconsole.log(a === b);\nconsole.log((() => 7)());",
    "exerciseExpected": [
      [
        1,
        2
      ],
      [
        1,
        2,
        3
      ],
      false,
      7
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. [1, 2] — asl o‘zgarmadi\n2. [1, 2, 3] — yangi massiv\n3. false — tashqi massiv boshqa reference\n4. 7 — IIFE darhol chaqirildi\n\nLoyihani yechish yo‘li: return [...savatcha, mahsulot]. Ichki obyektlarni keyin o‘zgartirsangiz ular umumiy reference ekanini unutmang; kerakli qatlamni ham nusxalang.",
    "learningGuide": {
      "goal": "Darhol chaqiriladigan ifoda va sof funksiya xulqini bir-biridan ajratasiz.",
      "prerequisites": [
        "functions",
        "closures",
        "object-reference"
      ],
      "terms": [
        {
          "term": "IIFE",
          "meaning": "Funksiya ifodasini yaratib, shu zahoti chaqirish usuli."
        },
        {
          "term": "Yon ta’sir",
          "meaning": "Funksiya tashqarisidan kuzatiladigan o‘zgarish: inputga yozish, DOM yoki keshni yangilash."
        },
        {
          "term": "Pure function",
          "meaning": "Bir xil kirishga bir xil javob berib, tashqi holatni o‘zgartirmaydigan funksiya."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Qo‘shish funksiyasi asl ro‘yxatni o‘zgartirmasin.",
        "brokenCode": "function qosh(list, x) { list.push(x); return list; }\nconst a = [1, 2]; const b = qosh(a, 3);\nconsole.log(a);",
        "fixedCode": "function qosh(list, x) { return [...list, x]; }\nconst a = [1, 2]; const b = qosh(a, 3);\nconsole.log(a);\nconsole.log(b);",
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            1,
            2,
            3
          ]
        ],
        "explanation": "Yangi tashqi massiv qaytarildi. Kirgan massivga push qilish yon ta’sir edi; bu misolda elementlar oddiy sonlar.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Savatchaga mahsulot qo‘shadigan sof funksiya yozing: eski massivga push qilmasin, yangi massiv qaytarsin. Natija va asl qiymatni alohida tekshiring.",
        "criteria": [
          "Qo‘shilgan mahsulot yangi massivda bor.",
          "Asl savatcha uzunligi va tarkibi o‘zgarmaydi.",
          "Natija faqat argumentlarga bog‘liq."
        ],
        "hint": "return [...savatcha, mahsulot]. Ichki obyektlarni keyin o‘zgartirsangiz ular umumiy reference ekanini unutmang; kerakli qatlamni ham nusxalang."
      }
    }
  },
  {
    "id": "errors-try-catch",
    "title": "Xatolar: try/catch, throw, finally",
    "question": "Xato qanday yuz beradi? try/catch/finally va throw qanday ishlaydi?",
    "explanation": "Xato — kod kutilgan ishni bajara olmayotgan holat. throw boshqaruvni eng yaqin mos catch ga o‘tkazadi. try ichida xatodan keyingi satrlar o‘tkaziladi. finally resursni tozalash kabi yakunlovchi ish uchun, natijani almashtirish uchun emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "bol xato tashlagani uchun uning natijasi log qilinmaydi va keyingi satr ham ishlamaydi. catch xabarni chiqaradi, finally keyin ishlaydi.",
        "code": "function bol(a, b) {\n  if (b === 0) throw new Error(\"Nolga bo‘lmang\");\n  return a / b;\n}\ntry {\n  console.log(bol(4, 0));\n  console.log(\"bu chiqmaydi\");\n} catch (e) { console.log(e.message); }\nfinally { console.log(\"yakun\"); }",
        "expectedOutput": [
          "Nolga bo‘lmang",
          "yakun"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Nolga bo‘lmang\", \"yakun\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Xato turlari",
        "text": "Keng tarqalgan xatolar: ReferenceError (nom yo‘q), TypeError (noto‘g‘ri tur bilan amal), SyntaxError (noto‘g‘ri kod), RangeError (chegaradan oshish). Xato obyektining message va name xususiyati bor.",
        "code": "// nomTopilmadi; // ReferenceError\n// null.ism; // TypeError\n// JSON.parse(\"xato\"); // SyntaxError\n\ntry {\n  null.ism;\n} catch (e) {\n  console.log(e.name); // TypeError\n  console.log(e.message);\n}"
      },
      {
        "title": "3. try/catch",
        "text": "try ichidagi kod xato bersa, qolgan satrlar bajarilmaydi va to‘g‘ridan-to‘g‘ri catch ga o‘tadi. catch ichida xato obyekti olinadi.",
        "code": "try {\n  console.log(\"boshlandi\");\n  JSON.parse(\"noto'g'ri\");\n  console.log(\"bu satr bajarilmaydi\");\n} catch (e) {\n  console.log(\"tutildi:\", e.name);\n}\nconsole.log(\"davom etadi\");"
      },
      {
        "title": "4. finally",
        "text": "finally bloki xato bo‘lsa ham, bo‘lmasa ham bajariladi. Resurslarni tozalash uchun ishlatiladi. catch bo‘lmasa ham finally yozish mumkin.",
        "code": "try {\n  console.log(\"ish\");\n} catch (e) {\n  console.log(\"xato\");\n} finally {\n  console.log(\"har doim bajariladi\");\n}"
      },
      {
        "title": "5. throw — o‘z xatoni yaratish",
        "text": "throw bilan ixtiyoriy qiymatni xato sifatida tashlash mumkin. Ko‘pincha Error obyekti ishlatiladi. Xato tashlansa, u tutulmaguncha yuqoriga tarqaladi.",
        "code": "function bolish(a, b) {\n  if (b === 0) throw new Error(\"Nolga bo'lib bo'lmaydi\");\n  return a / b;\n}\n\ntry {\n  bolish(5, 0);\n} catch (e) {\n  console.log(e.message); // Nolga bo'lib bo'lmaydi\n}"
      },
      {
        "title": "6. Xatoni yutmaslik",
        "text": "Bo‘sh catch bloki xatoni yashiradi: muammo borligini bilmay qolasan. Kamida log qil yoki qayta tashla (throw e).",
        "code": "// Yomon:\ntry { JSON.parse(\"xato\"); } catch (e) {}\n\n// Yaxshi:\ntry { JSON.parse(\"xato\"); }\ncatch (e) { console.error(e); }\n\n// Qayta tashlash:\ntry { JSON.parse(\"xato\"); }\ncatch (e) { throw e; }"
      },
      {
        "title": "7. Asinxron xatoni await bilan ushlash",
        "text": "Promise rad etilganda await uni throw kabi ko‘rsatadi. await qilinmagan va keyin rad etilgan Promise sinxron try dan tashqarida qoladi.",
        "code": "(async () => {\n  try { await Promise.reject(new Error(\"Tarmoq\")); }\n  catch (e) { console.log(e.message); }\n})();",
        "expectedOutput": [
          "Tarmoq"
        ],
        "exampleRuntime": "async"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Shu faylni pars qilishdagi SyntaxError ni o‘sha fayldagi try bilan tutib bo‘lmaydi; JSON.parse kabi bajarilishdagi parse xatosi tutiladi. finally ichidagi return yoki throw oldingi natija/xatoni almashtiradi. Asinxron xatoni await yoki Promise.catch bilan tuting. Bo‘sh catch muammoni yashiradi; noma’lum xatoni qayta tashlash mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "JSON qabul qiladigan funksiya yozing: noto‘g‘ri JSON va noto‘g‘ri yosh maydonini alohida xabar bilan rad etsin. Muvaffaqiyat va xato holatlarini test qiling."
      }
    ],
    "takeaway": "Xato — kod kutilgan ishni bajara olmayotgan holat.\nShu faylni pars qilishdagi SyntaxError ni o‘sha fayldagi try bilan tutib bo‘lmaydi; JSON.parse kabi bajarilishdagi parse xatosi tutiladi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: JSON qabul qiladigan funksiya yozing: noto‘g‘ri JSON va noto‘g‘ri yosh maydonini alohida xabar bilan rad etsin. Muvaffaqiyat va xato holatlarini test qiling.\n\nQo‘shimcha savollar:\n1) null.ism qanday xato beradi?\n2) try ichida xato bo‘lsa, keyingi satr bajariladimi?\n3) finally qachon bajariladi?\n4) Nega bo‘sh catch yomon?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "try { JSON.parse(\"xato\"); } catch (e) { console.log(e.name); }\ntry { throw new TypeError(\"Noto‘g‘ri tur\"); }\ncatch (e) { console.log(e instanceof Error); console.log(e.message); }\nfinally { console.log(\"tozalash\"); }",
    "exerciseExpected": [
      "SyntaxError",
      true,
      "Noto‘g‘ri tur",
      "tozalash"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"SyntaxError\" — JSON noto‘g‘ri\n2. true — TypeError Error oilasiga kiradi\n3. \"Noto‘g‘ri tur\" — xabar saqlanadi\n4. \"tozalash\" — catch dan keyin finally\n\nLoyihani yechish yo‘li: parse ichidagi SyntaxError ni ajrating; keyin natija null emas, obyekt va yosh Number.isFinite bilan to‘g‘ri ekanini tekshiring. Foydalanuvchi xabari bilan dasturchi diagnostikasini maqsadga mos ajrating.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
      }
    ],
    "learningGuide": {
      "goal": "Xatoni aniqlab tashlaysiz, kerakli joyda ushlaysiz va tozalash kodini ajratasiz.",
      "prerequisites": [
        "functions",
        "json-basics"
      ],
      "terms": [
        {
          "term": "throw",
          "meaning": "Joriy oddiy bajarilishni uzib xato yuborish."
        },
        {
          "term": "catch",
          "meaning": "try ichidagi xato boshqaruvini qabul qiladigan blok."
        },
        {
          "term": "finally",
          "meaning": "try/catch yo‘lidan keyin yakunlovchi kod uchun blok."
        },
        {
          "term": "Validation",
          "meaning": "Kirish talabga mosligini tekshirish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Manfiy kirish xato sifatida catch ga tushishi kerak. Error yaratishning o‘zi yetarlimi?",
        "brokenCode": "function tekshir(n) { if (n < 0) new Error(\"Manfiy\"); return n; }\ntry { console.log(tekshir(-1)); } catch (e) { console.log(e.message); }",
        "fixedCode": "function tekshir(n) { if (n < 0) throw new Error(\"Manfiy\"); return n; }\ntry { console.log(tekshir(-1)); } catch (e) { console.log(e.message); }",
        "expectedOutput": [
          "Manfiy"
        ],
        "explanation": "new Error faqat xato obyektini yaratadi. Uni throw qilganda boshqaruv catch ga o‘tadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "JSON qabul qiladigan funksiya yozing: noto‘g‘ri JSON va noto‘g‘ri yosh maydonini alohida xabar bilan rad etsin. Muvaffaqiyat va xato holatlarini test qiling.",
        "criteria": [
          "Buzilgan JSON uchun sintaksis xabari bor.",
          "To‘g‘ri JSON ichidagi noto‘g‘ri yosh ham rad etiladi.",
          "Kutilmagan xato jim yutilib ketmaydi."
        ],
        "hint": "parse ichidagi SyntaxError ni ajrating; keyin natija null emas, obyekt va yosh Number.isFinite bilan to‘g‘ri ekanini tekshiring. Foydalanuvchi xabari bilan dasturchi diagnostikasini maqsadga mos ajrating."
      }
    }
  },
  {
    "id": "common-pitfalls",
    "title": "Ko‘p uchraydigan xatolar va tuzoqlar",
    "question": "JS da eng ko‘p qilingan xatolar: ==, falsy, this, closure, mutatsiya, NaN.",
    "explanation": "Koddagi tuzoq ko‘pincha sintaksis xatosi emas, noto‘g‘ri taxmin. Bir qatorda uch narsani yozing: qiymat, tur va qanday amal bajarildi. Natijani ko‘rishdan oldin o‘z taxminingizni yozish xatoni topishni osonlashtiradi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "+ stringni birlashtiradi, - sonli aylantirish qiladi. Bu aylantirish input ning o‘zini yangilamaydi. Bo‘sh matnning Number qiymati 0.",
        "code": "const input = \"5\";\nconsole.log(input + 1);\nconsole.log(input - 1);\nconsole.log(typeof input);\nconsole.log(Number(\"\") === 0);",
        "expectedOutput": [
          "51",
          4,
          "string",
          true
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"51\", 4, \"string\", true]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. == o‘rniga ===",
        "text": "== turlarni o‘zgartiradi: \"\" == 0, [] == false, null == undefined true. === hech qachon o‘zgartirmaydi. Amaliyotda === ishlatish xavfsiz.",
        "code": "console.log(\"\" == 0); // true\nconsole.log([] == false); // true\nconsole.log(null == undefined); // true\nconsole.log(\"\" === 0); // false"
      },
      {
        "title": "3. Falsy bilan noto‘g‘ri tekshirish",
        "text": "Bo‘sh massiv va bo‘sh obyekt truthy. 0 esa to‘g‘ri qiymat bo‘lishi mumkin, lekin if (x) uni yo‘q deb hisoblaydi.",
        "code": "const son = 0;\nif (!son) console.log(\"yo'q deb o'ylaymiz\"); // bu chiqadi, lekin 0 to'g'ri qiymat\n\nconst items = [];\nif (items) console.log(\"truthy\"); // chiqadi\nconsole.log(items.length > 0); // to'g'ri tekshirish"
      },
      {
        "title": "4. this yo‘qolishi",
        "text": "Metodni o‘zgaruvchiga olib chaqirsang yoki callback sifatida bersang, this yo‘qoladi. Arrow yoki bind bilan saqlash mumkin.",
        "code": "const o = { x: 1, f() { return this.x; } };\nconst g = o.f;\n// g(); // TypeError (strict)\nconsole.log(o.f.call(o)); // 1\nconsole.log(o.f.bind(o)()); // 1"
      },
      {
        "title": "5. Mutatsiya kutilmaganda",
        "text": "sort, reverse, push, splice asl massivni o‘zgartiradi. const obyekt ichi o‘zgaradi. Bu ikki holat eng ko‘p chalkashtiriladi.",
        "code": "const a = [3, 1, 2];\nconst b = a.sort(); // a ham o'zgardi!\nconsole.log(a === b); // true\n\nconst o = { x: 1 };\no.x = 2; // const bo'lsa ham ishlaydi"
      },
      {
        "title": "6. NaN va noto‘g‘ri hisob",
        "text": "NaN === NaN false. \"abc\" * 2 → NaN. Number(\"\") → 0. Bularni bilmaslik noto‘g‘ri natijaga olib keladi.",
        "code": "console.log(NaN === NaN); // false\nconsole.log(Number.isNaN(\"abc\" * 2)); // true\nconsole.log(Number(\"\")); // 0\nconsole.log(parseInt(\"12px\")); // 12"
      },
      {
        "title": "7. Asinxronlik tartibi",
        "text": "setTimeout va Promise.then darhol bajarilmaydi. Sinxron kod avval, keyin mikrovazifa, oxirida makrovazifa.",
        "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");\n// A, D, C, B"
      },
      {
        "title": "8. Kod o‘qish algoritmi",
        "text": "Har qanday kodni o‘qishda quyidagi tartib yordam beradi: 1) o‘zgaruvchi turlarini aniqla; 2) har bir operatsiya natijasini yoz; 3) shartlarni hisobla; 4) asinxron navbatni esla; 5) oxirgi chiqishni yig.",
        "code": "// Misol:\nconst x = \"5\";\nconsole.log(x + 1); // \"51\" (string birlashdi)\nconsole.log(x - 1); // 4 (songa o'zgartirildi)\nconsole.log(typeof x); // \"string\" (x o'zgarmadi)"
      },
      {
        "title": "9. Debug qilishning qisqa tartibi",
        "text": "Katta kodni bitta kichik qaytariladigan misolga tushiring. Kirish va kutilgan natijani belgilang, so‘ng debugger bilan qaysi satrda taxmin buzilganini toping.",
        "code": "const x = \"0\";\nconsole.log({ qiymat: x, tur: typeof x, boolean: Boolean(x) });"
      },
      {
        "title": "10. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "const muzlatmaydi; sort asli bilan ishlaydi; [] truthy; NaN o‘ziga === emas; typeof null \"object\". a = b obyekt nusxasi emas. forEach ichidagi async ishlarni kutmaydi. Vaqtga va muhitga bog‘liq loglarni aniq natija deb yodlamang; sababni tahlil qiling."
      },
      {
        "title": "11. Kichik amaliy loyiha",
        "text": "Bir kichik hisoblagichga ataylab uch xato kiriting: string qo‘shish, noto‘g‘ri falsy tekshirish va sort mutatsiyasi. Keyin har biriga alohida test yozib tuzating."
      }
    ],
    "takeaway": "Koddagi tuzoq ko‘pincha sintaksis xatosi emas, noto‘g‘ri taxmin.\nconst muzlatmaydi; sort asli bilan ishlaydi; [] truthy; NaN o‘ziga === emas; typeof null \"object\".",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Bir kichik hisoblagichga ataylab uch xato kiriting: string qo‘shish, noto‘g‘ri falsy tekshirish va sort mutatsiyasi. Keyin har biriga alohida test yozib tuzating.\n\nQo‘shimcha savollar:\n1) \"\" == 0 va \"\" === 0 natijalari?\n2) if ([]) bajariladimi?\n3) const o = {x:1}; o.x=2 ishlaydimi?\n4) A, setTimeout, Promise.then, D tartibi qanday?\n5) Kod o‘qish algoritmining 5 bosqichini yoz.",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = [3, 1, 2];\nconst b = a.sort((x, y) => x - y);\nconsole.log(a);\nconsole.log(a === b);\nconsole.log(Boolean([]));\nconsole.log(NaN === NaN);",
    "exerciseExpected": [
      [
        1,
        2,
        3
      ],
      true,
      true,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. [1, 2, 3] — sort aslni o‘zgartirdi\n2. true — sort shu massivni qaytardi\n3. true — massiv obyekt sifatida truthy\n4. false — NaN qat’iy tenglikda o‘ziga teng emas\n\nLoyihani yechish yo‘li: Number bilan aniq aylantirish, null/undefined ni maqsadli tekshirish, toSorted yoki [...list].sort bilan mustaqil tartiblashdan foydalaning.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
      }
    ],
    "learningGuide": {
      "goal": "Natija xatosini tur, qiymat, mutatsiya va chaqirish tartibi bilan izohlaysiz.",
      "prerequisites": [
        "coercion-equality",
        "truthy-falsy",
        "object-reference",
        "this-keyword"
      ],
      "terms": [
        {
          "term": "Debug",
          "meaning": "Xatoning qayerda va nima sababdan kelganini izlash."
        },
        {
          "term": "Regression",
          "meaning": "Oldin ishlagan xulq yangi o‘zgarishdan keyin buzilishi."
        },
        {
          "term": "Minimal misol",
          "meaning": "Muammoni qaytara oladigan eng kichik kod."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "0 haqiqiy ball bo‘lganda 100 ga almashtirilmasin.",
        "brokenCode": "const ball = 0;\nconsole.log(ball || 100);",
        "fixedCode": "const ball = 0;\nconsole.log(ball ?? 100);",
        "expectedOutput": [
          0
        ],
        "explanation": "|| barcha falsy qiymatda zaxira tanlaydi. Bu talab faqat null/undefined yo‘qligini qamraydi, shuning uchun ?? mos.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Bir kichik hisoblagichga ataylab uch xato kiriting: string qo‘shish, noto‘g‘ri falsy tekshirish va sort mutatsiyasi. Keyin har biriga alohida test yozib tuzating.",
        "criteria": [
          "String qo‘shish xatosi alohida misolda ko‘rsatiladi.",
          "Yaroqli 0 ni yo‘q qiymat deb olish tuzatiladi.",
          "sort qaysi massivni o‘zgartirgani aniq ko‘rsatiladi."
        ],
        "hint": "Number bilan aniq aylantirish, null/undefined ni maqsadli tekshirish, toSorted yoki [...list].sort bilan mustaqil tartiblashdan foydalaning."
      }
    }
  },
  {
    "id": "modules",
    "title": "Modullar: import/export",
    "question": "ES modullari qanday ishlaydi? import, export, default va named farqi?",
    "explanation": "Modul — o‘z chegarasi bo‘lgan fayl. export tashqariga beriladigan nomlarni, import boshqa fayldan olinadigan nomlarni bildiradi. Har bir kod bo‘lagidagi fayl nomiga qarang: ikki faylni bir kod blokiga ko‘r-ko‘rona qo‘shib bajarmang. Brauzerda type=\"module\" va mahalliy HTTP server, Node.js da .mjs ishlatish mumkin.\n\nModul misollarini nomi ko‘rsatilgan alohida fayllarga yozing. Ularni bitta konsol satriga qo‘shib bajarmang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "math.mjs faqat qosh ni eksport qiladi. main.mjs uni nomi bilan oladi. Terminalda node main.mjs bajarilganda 5 chiqadi. Brauzer uchun shu importlar va <script type=\"module\" src=\"main.mjs\"> ishlatiladi.",
        "code": "// math.mjs\nexport function qosh(a, b) { return a + b; }\n\n// main.mjs — boshqa fayl:\nimport { qosh } from \"./math.mjs\";\nconsole.log(qosh(2, 3));"
      },
      {
        "title": "2. Named export",
        "text": "export const yoki export function bilan bir nechta nom eksport qilinadi. Import qilishda nomlar qavs ichida yoziladi va nomlar mos bo‘lishi shart.",
        "code": "// math.js\nexport const PI = 3.14;\nexport function yig(a, b) { return a + b; }\n\n// app.js\nimport { PI, yig } from \"./math.js\";\nconsole.log(yig(1, 2), PI);",
        "note": "Brauzerda modul ulash uchun <script type=\"module\" src=\"app.js\"></script> kerak."
      },
      {
        "title": "3. Default export",
        "text": "Modulda default eksport bo‘lishi shart emas; bo‘lsa ko‘pi bilan bitta. Default importga mahalliy ixtiyoriy nom berish mumkin. Named eksportlar esa bir nechta bo‘lishi mumkin.",
        "code": "// user.js\nexport default function salom(ism) {\n  return \"Salom, \" + ism;\n}\n\n// app.js\nimport salomlashish from \"./user.js\";\nconsole.log(salomlashish(\"Ali\"));"
      },
      {
        "title": "4. Nomlarni o‘zgartirish",
        "text": "as dan keyin import qilingan nomga yangi nom berish mumkin. Eksport qilishda ham as ishlatiladi.",
        "code": "import { yig as qoshuvchi } from \"./math.js\";\nconsole.log(qoshuvchi(2, 3)); // 5\n\n// export { ichkiNom as tashqiNom };"
      },
      {
        "title": "5. Hamma narsani import qilish",
        "text": "import * as nom barcha eksportlarni obyekt sifatida beradi. Bu ko‘p eksport bor bo‘lganda qulay.",
        "code": "import * as math from \"./math.js\";\nconsole.log(math.PI);\nconsole.log(math.yig(1, 2));"
      },
      {
        "title": "6. Modul scope’i",
        "text": "Moduldagi yuqori darajadagi o‘zgaruvchilar global bo‘lmaydi: faqat shu modul ichida ko‘rinadi. Eksport qilinmagan narsa tashqaridan ko‘rinmaydi.",
        "code": "// counter.js\nlet hisob = 0; // faqat modul ichida\nexport function oshir() { return ++hisob; }\n\n// app.js\nimport { oshir } from \"./counter.js\";\nconsole.log(oshir()); // 1\n// console.log(hisob); // ReferenceError: ko'rinmaydi"
      },
      {
        "title": "7. import hoisting va yon ta’sir",
        "text": "Static import modulning yuqori darajasida e’lon qilinadi, lekin faylning aynan birinchi satrida turishi shart emas. Bog‘liqliklar linking/evaluation jarayonida olinadi; oddiy siklsiz misolda import qilingan modul tanasi import qiluvchining tanasidan oldin baholanadi. Yon ta’sir uchun import \"./init.mjs\" yozish mumkin.",
        "code": "import \"./init.js\"; // yon ta'sir uchun (masalan, sozlash)\nconsole.log(\"asosiy kod\");\n// init.js avval bajariladi"
      },
      {
        "title": "8. Live binding va siklik import",
        "text": "Import ko‘pincha eksportning live binding ini ko‘radi, oddiy snapshot emas. Siklik importda hali initialization bo‘lmagan nomni o‘qish TDZ xatosi berishi mumkin. O‘zaro bog‘liqlikni kichik umumiy modulga ajratish ko‘pincha tushunarliroq.",
        "code": "// counter.mjs\nexport let n = 0;\nexport function oshir() { n++; }\n\n// main.mjs\nimport { n, oshir } from \"./counter.mjs\";\noshir();\nconsole.log(n); // 1"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Static import faqat modulning yuqori darajasida yoziladi; u shart ichida ishlamaydi. Uni faylning birinchi satriga yozish shart emas, lekin odatda shu yerga jamlanadi. Named exportda nomlar mos, default importda mahalliy nom erkin. Modul strict rejimda; yuqori darajadagi this undefined. Bir yo‘lga resolving qilingan modul odatda bir marta baholanadi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Narx hisoblashni math.mjs ga, mahsulotlarni data.mjs ga, natijani ko‘rsatishni main.mjs ga ajrating. Named, default va as bilan import qilishni sinang."
      }
    ],
    "takeaway": "Modul — o‘z chegarasi bo‘lgan fayl.\nStatic import faqat modulning yuqori darajasida yoziladi; u shart ichida ishlamaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Narx hisoblashni math.mjs ga, mahsulotlarni data.mjs ga, natijani ko‘rsatishni main.mjs ga ajrating. Named, default va as bilan import qilishni sinang.\n\nQo‘shimcha savollar:\n1) Named va default export farqi nima?\n2) import { yig as q } nima qiladi?\n3) Eksport qilinmagan o‘zgaruvchi boshqa faylda ko‘rinadimi?\n4) import * as math nima beradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "// Quyidagini bitta demo.mjs fayli sifatida node demo.mjs bilan sinang.\nexport const son = 3;\nexport default function ikki(x) { return x * 2; }\nconsole.log(ikki(son));\nconsole.log(this);",
    "exerciseExpected": [
      6,
      {
        "$undefined": true
      }
    ],
    "exerciseRuntime": "module",
    "exerciseAnswer": "1. 6 — 3 ikki baravar qilindi\n2. undefined — ES modul yuqori darajasida this undefined\n\nLoyihani yechish yo‘li: Fayllar nomi va ./ nisbiy yo‘lini tekshiring. main.mjs ni ishga tushiring. Import qilingan bindingga qayta qiymat yozmang; eksport qilingan funksiya orqali holatni yangilang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      }
    ],
    "learningGuide": {
      "goal": "Kodlarni alohida fayllarga ajratib, named/default exportni to‘g‘ri import qilasiz.",
      "prerequisites": [
        "js-intro",
        "functions",
        "scope"
      ],
      "terms": [
        {
          "term": "Modul",
          "meaning": "O‘z scope iga ega alohida JavaScript fayli."
        },
        {
          "term": "Export",
          "meaning": "Modul tashqarisiga ochilgan nom yoki default qiymat."
        },
        {
          "term": "Import",
          "meaning": "Boshqa modul eksportiga bog‘lanish."
        },
        {
          "term": "Live binding",
          "meaning": "Eksport o‘zgarsa import orqali keyingi o‘qish ham yangilangan qiymatni ko‘rishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "counter.mjs ichidagi eksport qilingan hisob keyin yangilanishi kerak.",
        "brokenCode": "export const hisob = 1;\nhisob = 2;\nconsole.log(hisob);",
        "fixedCode": "export let hisob = 1;\nhisob = 2;\nconsole.log(hisob);",
        "expectedOutput": [
          2
        ],
        "explanation": "Bu faylni ES modul sifatida bajaring. Eksport bo‘lish const ning qayta biriktirish taqiqini olib tashlamaydi; o‘zgaradigan binding uchun let tanlandi.",
        "runtime": "module"
      },
      "write": {
        "task": "Narx hisoblashni math.mjs ga, mahsulotlarni data.mjs ga, natijani ko‘rsatishni main.mjs ga ajrating. Named, default va as bilan import qilishni sinang.",
        "criteria": [
          "math.mjs, data.mjs va main.mjs alohida fayllar.",
          "Named/default import o‘z qoidasi bilan ishlaydi.",
          "Eksport qilinmagan ichki nom tashqaridan o‘qilmaydi."
        ],
        "hint": "Fayllar nomi va ./ nisbiy yo‘lini tekshiring. main.mjs ni ishga tushiring. Import qilingan bindingga qayta qiymat yozmang; eksport qilingan funksiya orqali holatni yangilang."
      }
    }
  },
  {
    "id": "git-npm",
    "title": "Git va npm asoslari",
    "question": "Loyihani qanday saqlaymiz va paketlar bilan qanday ishlaymiz?",
    "explanation": "Git fayllarning o‘zgarishlar tarixini saqlaydi, GitHub shu repozitoriyni onlayn joylashtirishi mumkin. npm paketlarni va loyiha buyruqlarini boshqaradi. Git commit mahalliy yozuv, push esa mavjud remote ga yuborish. Bu buyruqlar JavaScript konsolida bajarilmaydi.\n\nBuyruqlar loyiha papkasida ochilgan terminalda bajariladi. JSON, HTML va JS namunalarini o‘z fayllariga joylang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Bu uch buyruq vositalar o‘rnatilganini va versiyasini ko‘rsatadi. Natijadagi raqam sizning kompyuteringizga bog‘liq. Keyingi misollarni alohida mashq papkasida bajaring.",
        "code": "git --version\nnode --version\nnpm --version"
      },
      {
        "title": "2. Loyiha va package.json",
        "text": "Alohida papka oching. npm init -y boshlang‘ich package.json yaratadi. Unda loyiha nomi, buyruqlar va paketlar haqidagi ma’lumot turadi.",
        "code": "mkdir js-mashq\ncd js-mashq\nnpm init -y",
        "note": "node --version va npm --version bilan o‘rnatilganini tekshirishingiz mumkin."
      },
      {
        "title": "3. Git bilan holatni ko‘rish",
        "text": "git init shu papkada tarix yuritishni boshlaydi. git status o‘zgargan fayllarni ko‘rsatadi. Faylni index.html nomida yaratgandan keyin uni commitga tayyorlang.",
        "code": "git init -b main\ngit status\ngit add index.html\ngit commit -m \"Birinchi sahifa\"",
        "note": "Commit mahalliy tarixga yoziladi. GitHub’ga yuborish alohida push amalidir. Birinchi commitda Git ism va emailingizni sozlashni so‘rashi mumkin."
      },
      {
        "title": "4. Paket o‘rnatish",
        "text": "npm install paketni o‘rnatadi. --save-dev paket faqat ishlab chiqish vositasi ekanini bildiradi. node_modules o‘rnatilgan fayllar, package-lock.json esa aniq versiyalar va bog‘liqliklarni qayd etadi.",
        "code": "npm install --save-dev --save-exact prettier\nnpx prettier --check index.html",
        "note": "node_modules ni Gitga qo‘shmang: .gitignore fayliga node_modules/ yozing. package.json va package-lock.json ni saqlang."
      },
      {
        "title": "5. Loyiha buyruqlari",
        "text": "package.json ichidagi scripts ga nomlangan buyruq yozish mumkin. Quyidagi JSON bo‘lagi scripts maydoniga tegishli. npm run format uni ishga tushiradi.",
        "code": "\"scripts\": {\n  \"format\": \"prettier --write .\"\n}\n\n# Terminalda:\nnpm run format",
        "note": "Git o‘zgarishlar tarixini saqlaydi; npm run esa buyruq bajaradi. Bu ikkisi bir xil vosita emas."
      },
      {
        "title": "6. Repozitoriy tarixi va ishchi papka",
        "text": "git diff odatda ishchi papka bilan index farqini ko‘rsatadi. git diff --staged index bilan oxirgi commit farqini ko‘rsatadi. Branch boshqa yo‘nalishda ish yuritishga yordam beradi.",
        "code": "git switch -c mashq\ngit diff --staged\n# Ish tugagach kerakli fayllarni alohida stage qiling:\ngit add index.html\ngit commit -m \"Matnni yangilash\""
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "git add saqlash tugmasi emas, commitga tayyorlash. Commit push bo‘lmasdan mahalliy qoladi. node_modules ni odatda commit qilmang, package-lock.json ni loyiha bilan saqlang. npm run build faqat scripts da build mavjud bo‘lsa ishlaydi. --force bilan push qilishni oddiy yangilash usuli deb qabul qilmang."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Alohida mashq repozitoriy yarating. index.html ni commit qiling, matnni yangilang va git diff bilan farqini ko‘ring. package.json ga format:check scriptini qo‘shing."
      }
    ],
    "takeaway": "Git fayllarning o‘zgarishlar tarixini saqlaydi, GitHub shu repozitoriyni onlayn joylashtirishi mumkin.\ngit add saqlash tugmasi emas, commitga tayyorlash.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Alohida mashq repozitoriy yarating. index.html ni commit qiling, matnni yangilang va git diff bilan farqini ko‘ring. package.json ga format:check scriptini qo‘shing.\n\nQo‘shimcha savollar:\njs-mashq papkasida package.json va index.html yarating. .gitignore ga node_modules/ kiriting. git status bilan fayllarni ko‘rib, birinchi commitni yarating.",
    "resources": [
      {
        "title": "npm: package.json",
        "url": "https://docs.npmjs.com/creating-a-package-json-file/"
      },
      {
        "title": "Git qo‘llanmasi",
        "url": "https://git-scm.com/docs/gittutorial"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "git status\ngit diff\ngit log --oneline\nnpm run",
    "exerciseExpected": [
      "Joriy fayllar holati",
      "Commitga kirmagan fayl farqlari",
      "Commitlar qisqa tarixi",
      "Loyiha scripts buyruqlari"
    ],
    "exerciseRuntime": "terminal",
    "exerciseAnswer": "1. \"Joriy fayllar holati\" — nima o‘zgarganini ko‘rsatadi\n2. \"Commitga kirmagan fayl farqlari\" — qaysi satrlar o‘zgarganini ko‘rsatadi\n3. \"Commitlar qisqa tarixi\" — tarixni o‘qiydi\n4. \"Loyiha scripts buyruqlari\" — scripts ro‘yxatini ko‘rsatadi\n\nLoyihani yechish yo‘li: Avval git init -b main va fayl yaratish. git add index.html dan keyin git diff --staged ni ko‘ring, so‘ng commit qiling. Remote bo‘lsa URL ini tekshirib, tegishli branchga push qiling.",
    "learningGuide": {
      "goal": "Mahalliy commit, remote ga push va npm scripts vazifalarini ajratasiz.",
      "prerequisites": [
        "js-intro",
        "modules"
      ],
      "terms": [
        {
          "term": "Terminal",
          "meaning": "Kompyuter buyruqlarini matn bilan bajarish oynasi; JavaScript Console emas."
        },
        {
          "term": "Repozitoriy",
          "meaning": "Git yuritadigan loyiha va uning tarixi."
        },
        {
          "term": "Stage",
          "meaning": "Keyingi commitga kiritiladigan o‘zgarishlarni tayyorlash."
        },
        {
          "term": "Paket",
          "meaning": "Loyihada qayta ishlatiladigan tashqi kod yoki ishlab chiqish vositasi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir buyruq nima bajarishini ayting. Natija loyiha holatiga bog‘liq bo‘lsa, nimani ko‘rsatishini tushuntiring.",
      "debug": {
        "task": "Faqat index.html o‘zgarishini keyingi commitga kiriting. Tayyorlash qadami yo‘q.",
        "brokenCode": "git commit -m \"Sahifani yangilash\"",
        "fixedCode": "git add index.html\ngit diff --staged\ngit commit -m \"Sahifani yangilash\"",
        "expectedOutput": [
          "index.html stage qilinadi",
          "Stage qilingan farq ko‘riladi",
          "Commit yaratiladi"
        ],
        "explanation": "Buyruqlar terminalda, Git repozitoriysi ichida bajariladi. git commit ishchi papkadagi hamma o‘zgarishni o‘zi stage qilmaydi. Natija repozitoriy holatiga bog‘liq.",
        "runtime": "terminal"
      },
      "write": {
        "task": "Alohida mashq repozitoriy yarating. index.html ni commit qiling, matnni yangilang va git diff bilan farqini ko‘ring. package.json ga format:check scriptini qo‘shing.",
        "criteria": [
          "Commitdan oldin aynan qaysi fayl o‘zgargani ko‘rinadi.",
          "node_modules o‘rniga package.json va lock fayli saqlanadi.",
          "Script nomi package.json dagi buyruq bilan mos."
        ],
        "hint": "Avval git init -b main va fayl yaratish. git add index.html dan keyin git diff --staged ni ko‘ring, so‘ng commit qiling. Remote bo‘lsa URL ini tekshirib, tegishli branchga push qiling."
      }
    }
  },
  {
    "id": "dom-basics",
    "title": "DOM asoslari: tanlash, matn va event",
    "question": "querySelector, textContent, innerHTML va addEventListener qanday ishlaydi?",
    "explanation": "DOM — brauzer HTML dan yaratgan obyektlar daraxti. JavaScript shu daraxtdagi elementni topib uning matni, atributi yoki holatini yangilaydi. querySelector dagi # id ni, . class ni bildiradi. HTML tayyor bo‘lishi uchun tashqi JS ni defer bilan ulang yoki body oxiriga qo‘ying.\n\nBu dars brauzer DOM muhitida bajariladi. HTML va JS deb ajratilgan misollarni tegishli fayllarga yozing; mustaqil DOM misollarini konsolda ham sinash mumkin. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Elementlar hozir xotirada yaratildi. append p ni section ichiga joyladi. Ularni ko‘rish uchun sahifadagi mos konteynerga box ni append qilish kerak; createElement o‘zi ekranga chiqarmaydi.",
        "code": "const box = document.createElement(\"section\");\nconst p = document.createElement(\"p\");\np.textContent = \"Salom\";\nbox.append(p);\nconsole.log(box.querySelector(\"p\").textContent);\nconsole.log(box.children.length);",
        "expectedOutput": [
          "Salom",
          1
        ],
        "exampleRuntime": "browser",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Salom\", 1]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Dars misollari uchun HTML va JS ni ulash",
        "text": "Quyidagi HTML ni index.html ga joylang. Keyingi tanlash misollari #ism va #btn elementlarini shu sahifadan oladi. JS kodni app.js ga, script esa head ichiga defer bilan qo‘yiladi.",
        "code": "<p id=\"ism\">Ism</p>\n<button id=\"btn\" data-user-id=\"7\">Bosish</button>\n<ul><li>Olma</li><li>Anor</li></ul>\n<script src=\"app.js\" defer></script>"
      },
      {
        "title": "3. Elementlarni tanlash",
        "text": "querySelector CSS selektori bo'yicha birinchi mos elementni yoki null qaytaradi. querySelectorAll esa NodeList qaytaradi; u massiv emas, lekin forEach bor.",
        "code": "const el = document.querySelector(\"#ism\");\nif (el) el.textContent = \"Ali\";\n\ndocument.querySelectorAll(\"li\").forEach(li => {\n  console.log(li.textContent);\n});"
      },
      {
        "title": "4. textContent vs innerHTML",
        "text": "textContent faqat matn qo'yadi: <b>Ali</b> yozsang aynan shunday ko'rinadi. innerHTML esa HTML deb pars qiladi va qalin yozuv chiqaradi. Foydalanuvchi kiritgan ma'lumotni innerHTML ga qo'yish XSS xavfiga olib keladi.",
        "code": "el.textContent = \"<b>Ali</b>\"; // matn sifatida ko'rinadi\nel.innerHTML = \"<b>Ali</b>\";   // qalin Ali\n\n// Xavfsiz: foydalanuvchi kiritganini textContent ga qo'y"
      },
      {
        "title": "5. Event va dataset",
        "text": "addEventListener(type, callback) hodisa yuz berganda chaqiriladi. data-* atributlari element.dataset orqali o'qiladi (data-user-id → dataset.userId).",
        "code": "const btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", (e) => {\n  console.log(e.target.dataset.userId);\n});\n// <button id=\"btn\" data-user-id=\"7\">Bos</button>"
      },
      {
        "title": "6. Atribut, property va classList",
        "text": "data-user-id dataset.userId orqali string sifatida o‘qiladi. classList butun class matnini almashtirmasdan alohida class ni boshqaradi.",
        "code": "const b = document.createElement(\"button\");\nb.dataset.userId = \"7\";\nb.classList.toggle(\"active\");\nconsole.log(typeof b.dataset.userId);\nconsole.log(b.classList.contains(\"active\"));",
        "expectedOutput": [
          "string",
          true
        ],
        "exampleRuntime": "browser"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Tanlash natijasi null bo‘lsa .textContent yoki addEventListener chaqirish xato. querySelectorAll static NodeList qaytaradi; HTMLCollection ko‘pincha live. Foydalanuvchi matni uchun textContent tanlang, innerHTML matnni HTML sifatida talqin qiladi. getAttribute va element property har doim aynan bir xil holatni bermaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "HTML da sarlavha va button yarating. Tugma bosilganda sarlavha matni va classList dagi active belgisi almashsin. Ikkinchi bosishda oldingi holatga qaytsin."
      }
    ],
    "takeaway": "DOM — brauzer HTML dan yaratgan obyektlar daraxti.\nTanlash natijasi null bo‘lsa .textContent yoki addEventListener chaqirish xato.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: HTML da sarlavha va button yarating. Tugma bosilganda sarlavha matni va classList dagi active belgisi almashsin. Ikkinchi bosishda oldingi holatga qaytsin.\n\nQo‘shimcha savollar:\n1) querySelector hech narsa topmasa nima qaytaradi?\n2) Foydalanuvchi kiritgan matnni qaysi xususiyat bilan qo'yish xavfsiz?\n3) data-user-id qanday o'qiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const box = document.createElement(\"div\");\nbox.innerHTML = '<p id=\"ism\">Ali</p>';\nconst p = box.querySelector(\"#ism\");\np.textContent = \"Vali\";\np.classList.add(\"active\");\nconsole.log(p.textContent);\nconsole.log(p.classList.contains(\"active\"));\nconsole.log(box.querySelector(\"#yoq\"));",
    "exerciseExpected": [
      "Vali",
      true,
      null
    ],
    "exerciseRuntime": "browser",
    "exerciseAnswer": "1. \"Vali\" — matn yangilandi\n2. true — class qo‘shildi\n3. null — mos element yo‘q bo‘lsa null\n\nLoyihani yechish yo‘li: const title=document.querySelector(\"h1\"); const btn=document.querySelector(\"button\"); click listenerida classList.toggle qaytargan boolean asosida textContent ni yozing.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
      }
    ],
    "learningGuide": {
      "goal": "HTML elementni topib, uning matni va classini foydalanuvchi harakati bilan yangilaysiz.",
      "prerequisites": [
        "js-intro",
        "objects-basics",
        "functions"
      ],
      "terms": [
        {
          "term": "DOM",
          "meaning": "Brauzer HTML ni ifodalagan obyektlar daraxti."
        },
        {
          "term": "Selektor",
          "meaning": "Elementni topish qoidasi: #ism id, .active class."
        },
        {
          "term": "Node",
          "meaning": "DOM daraxtidagi tugun; element ham node turi."
        },
        {
          "term": "Atribut",
          "meaning": "HTML elementiga yozilgan ma’lumot: id, class, data-id kabi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "id si ism bo‘lgan elementdan Ali ni o‘qing.",
        "brokenCode": "const box = document.createElement(\"div\");\nbox.innerHTML = '<p id=\"ism\">Ali</p>';\nconsole.log(box.querySelector(\"ism\").textContent);",
        "fixedCode": "const box = document.createElement(\"div\");\nbox.innerHTML = '<p id=\"ism\">Ali</p>';\nconsole.log(box.querySelector(\"#ism\").textContent);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "ism selektori teg nomini qidiradi. id uchun #ism kerak. Topilmagan element null bo‘lib, undan textContent o‘qish xato beradi.",
        "runtime": "browser"
      },
      "write": {
        "task": "HTML da sarlavha va button yarating. Tugma bosilganda sarlavha matni va classList dagi active belgisi almashsin. Ikkinchi bosishda oldingi holatga qaytsin.",
        "criteria": [
          "Tugma bosilganda sarlavha matni o‘zgaradi.",
          "Ikkinchi bosish holatni qaytaradi.",
          "Element topilmasa null holati tushunarli boshqariladi."
        ],
        "hint": "const title=document.querySelector(\"h1\"); const btn=document.querySelector(\"button\"); click listenerida classList.toggle qaytargan boolean asosida textContent ni yozing."
      }
    }
  },
  {
    "id": "events-advanced",
    "title": "Eventlar: chuqurroq",
    "question": "addEventListener, event obyekti, bubbling, capturing va delegatsiya nima?",
    "explanation": "Event — bosish, yozish, yuborish kabi hodisa. Listener — hodisa bo‘lganda ishlaydigan funksiya. addEventListener uni ro‘yxatga oladi, hozirning o‘zida bajarmaydi. Callbackga kelgan event target, currentTarget va boshqa ma’lumotlarni beradi.\n\nBu dars brauzer DOM muhitida bajariladi. HTML va JS deb ajratilgan misollarni tegishli fayllarga yozing; mustaqil DOM misollarini konsolda ham sinash mumkin. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Listener bog‘langanda sanoq hali 0. click() hodisani chiqargach callback ishlaydi va 1 bo‘ladi. Foydalanuvchi tugmani bosishi ham hodisa chiqaradi.",
        "code": "const button = document.createElement(\"button\");\nlet sanoq = 0;\nbutton.addEventListener(\"click\", () => { sanoq++; });\nconsole.log(sanoq);\nbutton.click();\nconsole.log(sanoq);",
        "expectedOutput": [
          0,
          1
        ],
        "exampleRuntime": "browser",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [0, 1]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. addEventListener",
        "text": "element.addEventListener(\"click\", fn) hodisa yuz berganda fn ni chaqiradi. Bir elementga bir nechta listener qo‘shish mumkin. removeEventListener bilan olib tashlash uchun aynan shu funksiya kerak.",
        "code": "const btn = document.querySelector(\"button\");\nconst fn = () => console.log(\"bosildi\");\nbtn.addEventListener(\"click\", fn);\n// btn.removeEventListener(\"click\", fn); // aynan fn kerak"
      },
      {
        "title": "3. Event obyekti",
        "text": "Callback event obyektini oladi: target (hodisa kelgan element), currentTarget (listener bog‘langan element), type, key (klaviatura), preventDefault() va stopPropagation().",
        "code": "btn.addEventListener(\"click\", (e) => {\n  console.log(e.target); // bosilgan element\n  console.log(e.currentTarget); // listener bog'langan element\n  console.log(e.type); // \"click\"\n});"
      },
      {
        "title": "4. preventDefault",
        "text": "Ba’zi elementlarning standart harakati bor: form yuborish, havola ochish. preventDefault() uni to‘xtatadi.",
        "code": "document.querySelector(\"form\").addEventListener(\"submit\", (e) => {\n  e.preventDefault(); // sahifa yangilanmaydi\n  console.log(\"forma yuborildi\");\n});"
      },
      {
        "title": "5. Bubbling va capturing",
        "text": "Hodisa avval yuqoridan pastga (capturing), keyin pastdan yuqoriga (bubbling) tarqaladi. addEventListener ning uchinchi argumenti true bo‘lsa, capturing bosqichida ishlaydi.",
        "code": "document.addEventListener(\"click\", () => console.log(\"document\"));\ndocument.querySelector(\"button\").addEventListener(\"click\", () => console.log(\"button\"));\n// bosilsa: button, keyin document (bubbling)"
      },
      {
        "title": "6. stopPropagation",
        "text": "stopPropagation shu hodisaning keyingi elementlarga tarqalishini to‘xtatadi. Listenerlarni ro‘yxatdan o‘chirmaydi va shu elementdagi barcha boshqa listenerlarni to‘xtatmaydi. stopImmediatePropagation boshqa qoida.",
        "code": "btn.addEventListener(\"click\", (e) => {\n  e.stopPropagation(); // document listener ishlamaydi\n});"
      },
      {
        "title": "7. Event delegatsiya",
        "text": "Ko‘p elementlarga alohida listener qo‘yish o‘rniga, ularning umumiy ota elementiga bitta listener qo‘yish mumkin. e.target orqali qaysi element bosilganini aniqlash mumkin. Yangi elementlar qo‘shilsa ham ishlaydi.",
        "code": "document.querySelector(\"#list\").addEventListener(\"click\", (e) => {\n  const li = e.target.closest(\"li\");\n  if (li) console.log(li.dataset.id);\n});"
      },
      {
        "title": "8. Listenerni abort qilish va event yo‘li",
        "text": "AbortController signal bilan bir nechta listenerni birga olib tashlash mumkin. capture yuqoridan nishonga, bubble nishondan yuqoriga boradi; target fazasi ham bor. Shadow DOM da composedPath kabi xususiyatlar ahamiyatli.",
        "code": "const b = document.createElement(\"button\");\nconst c = new AbortController();\nlet n = 0;\nb.addEventListener(\"click\", () => n++, { signal: c.signal });\nc.abort(); b.click();\nconsole.log(n);",
        "expectedOutput": [
          0
        ],
        "exampleRuntime": "browser"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "preventDefault standart harakatni bekor qiladi, tarqalishni emas. stopPropagation tarqalishni to‘xtatadi, shu elementdagi barcha boshqa listenerlarni avtomatik to‘xtatmaydi. Passive listenerda preventDefault ishlamaydi. removeEventListener uchun ayni funksiya va capture mos bo‘lishi kerak; yangi () => {} oldingisi emas."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Ro‘yxatga bitta click listener qo‘ying. Yangi qo‘shilgan tugmalar ham delegation bilan ishlasin. Ichidagi span bosilganda ham tegishli button topilsin."
      }
    ],
    "takeaway": "Event — bosish, yozish, yuborish kabi hodisa.\npreventDefault standart harakatni bekor qiladi, tarqalishni emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ro‘yxatga bitta click listener qo‘ying. Yangi qo‘shilgan tugmalar ham delegation bilan ishlasin. Ichidagi span bosilganda ham tegishli button topilsin.\n\nQo‘shimcha savollar:\n1) target va currentTarget farqi nima?\n2) preventDefault nima qiladi?\n3) Bubbling qaysi yo‘nalishda?\n4) Event delegatsiya nega foydali?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const b = document.createElement(\"button\");\nlet n = 0;\nconst fn = () => n++;\nb.addEventListener(\"click\", fn, { once: true });\nb.click(); b.click();\nconsole.log(n);\nb.addEventListener(\"click\", fn);\nb.removeEventListener(\"click\", fn);\nb.click();\nconsole.log(n);",
    "exerciseExpected": [
      1,
      1
    ],
    "exerciseRuntime": "browser",
    "exerciseAnswer": "1. 1 — once sabab faqat bir marta\n2. 1 — listener olib tashlangan\n\nLoyihani yechish yo‘li: Ota listenerda event.target.closest(\"button[data-id]\") ni toping. Topilgan tugma ota elementga tegishliligini contains bilan tekshiring; dataset dan identifikator oling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling"
      }
    ],
    "learningGuide": {
      "goal": "Hodisa nishoni, listener qabul qiluvchisi va tarqalishni farqlaysiz.",
      "prerequisites": [
        "dom-basics",
        "callbacks"
      ],
      "terms": [
        {
          "term": "Event",
          "meaning": "Click yoki submit kabi yuz bergan hodisa."
        },
        {
          "term": "Listener",
          "meaning": "Hodisa bo‘lganda bajarilishi uchun ro‘yxatga olingan funksiya."
        },
        {
          "term": "Bubbling",
          "meaning": "Mos hodisaning nishondan ota elementlarga tarqalishi."
        },
        {
          "term": "Delegation",
          "meaning": "Ko‘p bolalar uchun umumiy otaga bitta listener qo‘yish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Listener bog‘langanda n=0, tugma bosilgach n=1 bo‘lsin.",
        "brokenCode": "const b = document.createElement(\"button\"); let n = 0;\nconst fn = () => n++;\nb.addEventListener(\"click\", fn());\nconsole.log(n); b.click(); console.log(n);",
        "fixedCode": "const b = document.createElement(\"button\"); let n = 0;\nconst fn = () => n++;\nb.addEventListener(\"click\", fn);\nconsole.log(n); b.click(); console.log(n);",
        "expectedOutput": [
          0,
          1
        ],
        "explanation": "fn() hozir chaqiradi va natijasini uzatadi. fn reference i listenerga berilsa, ish click vaqtida bajariladi.",
        "runtime": "browser"
      },
      "write": {
        "task": "Ro‘yxatga bitta click listener qo‘ying. Yangi qo‘shilgan tugmalar ham delegation bilan ishlasin. Ichidagi span bosilganda ham tegishli button topilsin.",
        "criteria": [
          "Yangi qo‘shilgan tugma ham ishlaydi.",
          "Tugma ichidagi span bosilganda to‘g‘ri button topiladi.",
          "Begona konteyner elementi noto‘g‘ri qayta ishlanmaydi."
        ],
        "hint": "Ota listenerda event.target.closest(\"button[data-id]\") ni toping. Topilgan tugma ota elementga tegishliligini contains bilan tekshiring; dataset dan identifikator oling."
      }
    }
  },
  {
    "id": "dom-forms",
    "title": "DOM elementlar yaratish va formalar bilan ishlash",
    "question": "Forma qiymatini qanday o‘qiyman va yangi element qo‘shaman?",
    "explanation": "Forma foydalanuvchi ma’lumotini to‘playdi. label maydon nomini, name server yoki FormData uchun kalitni, value matnni bildiradi. id bilan name bir xil vazifa emas. Hisoblashdan oldin input.value string ekanini va bo‘sh qiymat holatini tekshiramiz.\n\nBu dars brauzer DOM muhitida bajariladi. HTML va JS deb ajratilgan misollarni tegishli fayllarga yozing; mustaqil DOM misollarini konsolda ham sinash mumkin. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "FormData name atributlari orqali juftlik oladi. yosh qiymati \"20\" matni; Number bilan aylantirgandan so‘ng qo‘shish 21 beradi.",
        "code": "const form = document.createElement(\"form\");\nform.innerHTML = '<input name=\"ism\" value=\"Ali\"><input name=\"yosh\" value=\"20\">';\nconst data = new FormData(form);\nconsole.log(data.get(\"ism\"));\nconsole.log(typeof data.get(\"yosh\"));\nconsole.log(Number(data.get(\"yosh\")) + 1);",
        "expectedOutput": [
          "Ali",
          "string",
          21
        ],
        "exampleRuntime": "browser",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", \"string\", 21]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Forma va natija ro‘yxati",
        "text": "form qiymatlarni birga yuborish uchun. label dagi for input ning id qiymatiga mos keladi. required bo‘sh qiymatni yuborishga yo‘l qo‘ymaydi.",
        "code": "<form id=\"todo-form\">\n  <label for=\"todo-input\">Vazifa</label>\n  <input id=\"todo-input\" required>\n  <button type=\"submit\">Qo‘shish</button>\n</form>\n<ul id=\"todos\"></ul>\n<script src=\"app.js\" defer></script>"
      },
      {
        "title": "3. Element yaratish",
        "text": "createElement yangi element yaratadi, lekin u hali sahifada yo‘q. textContent matnni beradi, append esa ota elementga qo‘shadi.",
        "code": "const royxat = document.querySelector(\"#todos\");\nconst band = document.createElement(\"li\");\nband.textContent = \"JavaScript o‘rganish\";\nroyxat.append(band);",
        "note": "Natija: ro‘yxatda JavaScript o‘rganish yozuvi paydo bo‘ladi. Foydalanuvchi kiritgan matn uchun textContent ishlating."
      },
      {
        "title": "4. submit hodisasini tutish",
        "text": "submit tugma bosilganda ham, inputda Enter bosilganda ham ishlaydi. preventDefault sahifaning odatiy qayta yuborilishini to‘xtatadi. trim chetdagi bo‘sh joylarni olib tashlaydi.",
        "code": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todos\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const matn = input.value.trim();\n  if (!matn) return;\n  const li = document.createElement(\"li\");\n  li.textContent = matn;\n  list.append(li);\n  form.reset();\n  input.focus();\n});"
      },
      {
        "title": "5. Sonli input ham matn qaytaradi",
        "text": "input.value odatda string bo‘ladi. Hisoblashdan oldin Number bilan aylantiring. Bo‘sh maydonni alohida tekshiring: Number(\"\") natijasi 0.",
        "code": "const qiymat = \"12\"; // input.value kabi\nconst son = Number(qiymat);\nconsole.log(son + 3); // 15\nconsole.log(qiymat + 3); // \"123\""
      },
      {
        "title": "6. value, checked va valueAsNumber",
        "text": "Checkbox holati value emas checked orqali tekshiriladi. Number inputda valueAsNumber son yoki NaN qaytaradi. submit listenerini formaga bog‘lash Enter bilan ishlashni ham saqlaydi.",
        "code": "const i = document.createElement(\"input\");\ni.type = \"number\"; i.value = \"12\";\nconsole.log(i.valueAsNumber);\ni.value = \"\";\nconsole.log(Number.isNaN(i.valueAsNumber));",
        "expectedOutput": [
          12,
          true
        ],
        "exampleRuntime": "browser"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Forma ichida type yozilmagan button odatda submit bo‘ladi; yordamchi tugma uchun type=\"button\" qo‘ying. Disabled maydon FormData ga kirmaydi, belgilanmagan checkbox ham yo‘q. required format va biznes qoidalarining hammasini tekshirmaydi. Brauzer validatsiyasi serverdagi tekshiruv o‘rnini bosmaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Ism va yosh formasini tuzing. Bo‘sh ismni trim bilan rad eting, yaroqli ma’lumotni createElement va textContent bilan kartaga qo‘shing. O‘chirish tugmasi kartani olib tashlasin."
      }
    ],
    "takeaway": "Forma foydalanuvchi ma’lumotini to‘playdi.\nForma ichida type yozilmagan button odatda submit bo‘ladi; yordamchi tugma uchun type=\"button\" qo‘ying.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ism va yosh formasini tuzing. Bo‘sh ismni trim bilan rad eting, yaroqli ma’lumotni createElement va textContent bilan kartaga qo‘shing. O‘chirish tugmasi kartani olib tashlasin.\n\nQo‘shimcha savollar:\nYuqoridagi todo formasini yarating. Vazifa yoniga “O‘chirish” tugmasi qo‘shing; bosilganda o‘sha li elementini remove() qilsin.",
    "resources": [
      {
        "title": "MDN: forma submit hodisasi",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event"
      },
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/FormData"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const form = document.createElement(\"form\");\nform.innerHTML = '<input name=\"a\" value=\"5\"><input name=\"b\" value=\"7\" disabled><input type=\"checkbox\" name=\"ok\" value=\"yes\">';\nconst d = new FormData(form);\nconsole.log(d.get(\"a\"));\nconsole.log(d.has(\"b\"));\nconsole.log(d.has(\"ok\"));\nconst input = form.querySelector(\"input\");\nconsole.log(typeof input.value);",
    "exerciseExpected": [
      "5",
      false,
      false,
      "string"
    ],
    "exerciseRuntime": "browser",
    "exerciseAnswer": "1. \"5\" — name bo‘yicha qiymat olindi\n2. false — disabled maydon chiqarildi\n3. false — belgilanmagan checkbox yo‘q\n4. \"string\" — value matn\n\nLoyihani yechish yo‘li: submit ichida preventDefault, input qiymatlarini tekshirish, keyin document.createElement bilan karta tuzing. textContent ishlating. Formani muvaffaqiyatli qo‘shilgach reset qiling.",
    "learningGuide": {
      "goal": "Forma qiymatini o‘qib tekshirasiz va sahifani yangilamasdan natija chiqarasiz.",
      "prerequisites": [
        "dom-basics",
        "events-advanced",
        "json-basics"
      ],
      "terms": [
        {
          "term": "submit",
          "meaning": "Forma yuborish hodisasi; faqat tugma clicki bilan cheklanmaydi."
        },
        {
          "term": "FormData",
          "meaning": "name atributlari bo‘yicha forma ma’lumotlarini yig‘adigan obyekt."
        },
        {
          "term": "Validation",
          "meaning": "Kiritilgan qiymat talabga mosligini tekshirish."
        },
        {
          "term": "preventDefault",
          "meaning": "Hodisaning standart harakatini bekor qilish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "FormData ismni o‘qishi kerak. id bilan name ning qaysi biri kalit bo‘ladi?",
        "brokenCode": "const form = document.createElement(\"form\");\nform.innerHTML = '<input id=\"ism\" value=\"Ali\">';\nconsole.log(new FormData(form).get(\"ism\"));",
        "fixedCode": "const form = document.createElement(\"form\");\nform.innerHTML = '<input id=\"ism\" name=\"ism\" value=\"Ali\">';\nconsole.log(new FormData(form).get(\"ism\"));",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "FormData name atributi orqali kalit oladi. id elementni tanlash/label bilan bog‘lash uchun; bu vazifani o‘zi bajarmaydi.",
        "runtime": "browser"
      },
      "write": {
        "task": "Ism va yosh formasini tuzing. Bo‘sh ismni trim bilan rad eting, yaroqli ma’lumotni createElement va textContent bilan kartaga qo‘shing. O‘chirish tugmasi kartani olib tashlasin.",
        "criteria": [
          "Bo‘sh yoki faqat bo‘sh joyli ism qabul qilinmaydi.",
          "Yosh stringdan tekshirilgan songa aylantiriladi.",
          "Qo‘shilgan karta o‘chirish tugmasi bilan olib tashlanadi."
        ],
        "hint": "submit ichida preventDefault, input qiymatlarini tekshirish, keyin document.createElement bilan karta tuzing. textContent ishlating. Formani muvaffaqiyatli qo‘shilgach reset qiling."
      }
    }
  },
  {
    "id": "storage",
    "title": "localStorage va sessionStorage: noldan",
    "question": "Brauzerda ma’lumot qanday saqlanadi? localStorage, sessionStorage va cookie farqi?",
    "explanation": "localStorage va sessionStorage brauzerda kichik kalit-qiymat ma’lumot saqlaydi. Qiymatlar string bo‘ladi. localStorage odatda brauzer qayta ochilganda qoladi; sessionStorage tab sessiyasiga tegishli. Saqlash origin — protokol, host va port bo‘yicha ajratiladi.\n\nBu dars brauzer DOM muhitida bajariladi. HTML va JS deb ajratilgan misollarni tegishli fayllarga yozing; mustaqil DOM misollarini konsolda ham sinash mumkin. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "setItem matn yozadi. getItem string qaytaradi, kalit yo‘q bo‘lsa null. removeItem faqat ko‘rsatilgan kalitni olib tashlaydi. Mashq uchun alohida nom ishlatdik.",
        "code": "const k = \"js-dars-storage-mashq\";\nlocalStorage.setItem(k, \"Ali\");\nconsole.log(localStorage.getItem(k));\nconsole.log(typeof localStorage.getItem(k));\nlocalStorage.removeItem(k);\nconsole.log(localStorage.getItem(k));",
        "expectedOutput": [
          "Ali",
          "string",
          null
        ],
        "exampleRuntime": "browser",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", \"string\", null]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Asosiy metodlar",
        "text": "setItem(kalit, qiymat), getItem(kalit), removeItem(kalit), clear(). Hammasi faqat string bilan ishlaydi.",
        "code": "localStorage.setItem(\"ism\", \"Ali\");\nconsole.log(localStorage.getItem(\"ism\")); // \"Ali\"\nlocalStorage.removeItem(\"ism\");\n// localStorage.clear(); // hammasini o'chiradi"
      },
      {
        "title": "3. Obyekt saqlash",
        "text": "Obyektni to‘g‘ridan-to‘g‘ri saqlasang, \"[object Object]\" bo‘lib qoladi. JSON.stringify bilan saqlab, JSON.parse bilan o‘qish kerak.",
        "code": "const user = { ism: \"Ali\", yosh: 20 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));\nconst saqlangan = JSON.parse(localStorage.getItem(\"user\"));\nconsole.log(saqlangan.ism); // Ali",
        "note": "getItem topmasa null qaytaradi. JSON.parse(null) → null, xato emas."
      },
      {
        "title": "4. localStorage vs sessionStorage",
        "text": "localStorage brauzer qayta ochilsa ham saqlanadi. sessionStorage faqat shu tab (session) uchun: tab yopilsa o‘chadi.",
        "code": "localStorage.setItem(\"a\", \"1\"); // doimiy\nsessionStorage.setItem(\"b\", \"2\"); // tab yopilsa yo'qoladi"
      },
      {
        "title": "5. Xatolar va cheklovlar",
        "text": "Storage hajmi cheklangan (odatda ~5 MB). To‘lsa yoki brauzer bloklasa, setItem xato beradi. Shuning uchun try/catch bilan yozish yaxshi.",
        "code": "try {\n  localStorage.setItem(\"kalit\", \"qiymat\");\n} catch (e) {\n  console.log(\"Saqlab bo'lmadi:\", e.message);\n}"
      },
      {
        "title": "6. storage hodisasi",
        "text": "Boshqa tabda localStorage o‘zgartirilsa, shu sahifada storage hodisasi yuz beradi. Bu bir nechta tab o‘rtasida sinxronlash uchun ishlatiladi.",
        "code": "window.addEventListener(\"storage\", (e) => {\n  console.log(e.key, e.newValue);\n});"
      },
      {
        "title": "7. Cookie bilan farqi",
        "text": "Cookie har so‘rovda serverga yuboriladi, hajmi kichik (~4 KB) va muddati bor. localStorage esa faqat brauzerda, serverga yuborilmaydi. Maxfiy ma’lumotni localStorage da saqlash xavfsiz emas.",
        "code": "// maxfiy ma'lumotni localStorage ga qo'ymang:\n// localStorage.setItem(\"token\", \"...\"); // XSS xavfi"
      },
      {
        "title": "8. Saqlangan JSON ni ishonchli o‘qish",
        "text": "Storage matni qo‘lda yoki eski dastur versiyasida o‘zgargan bo‘lishi mumkin. getItem, JSON.parse va sxema tekshiruvini alohida hisobga oling. Cookie esa faqat mos domen/path/siyosatga to‘g‘ri kelgan so‘rovlarga yuboriladi; storage avtomatik serverga yuborilmaydi.",
        "code": "function oqi(matn) {\n  try {\n    const q = JSON.parse(matn);\n    return q && typeof q === \"object\" && !Array.isArray(q) ? q : {};\n  } catch { return {}; }\n}\nconsole.log(Object.keys(oqi(\"xato\")).length);",
        "expectedOutput": [
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Storage doimiy kafolat emas: foydalanuvchi tozalashi, maxfiy rejim yoki kvota cheklashi mumkin. Kirishning o‘zi ham SecurityError berishi mumkin. clear shu storage ichidagi barcha kalitlarni o‘chiradi. storage hodisasi yozgan tabning o‘ziga kelmaydi; boshqa mos oynalarda bo‘ladi. Maxfiy tokenlar XSS orqali o‘qilishi mumkin."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Tema tanlovini saqlang. Qayta ochilganda o‘qing, faqat light/dark qiymatlarini qabul qiling. Saqlash bloklangan holatda sahifa ishlashda davom etsin."
      }
    ],
    "takeaway": "localStorage va sessionStorage brauzerda kichik kalit-qiymat ma’lumot saqlaydi.\nStorage doimiy kafolat emas: foydalanuvchi tozalashi, maxfiy rejim yoki kvota cheklashi mumkin.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Tema tanlovini saqlang. Qayta ochilganda o‘qing, faqat light/dark qiymatlarini qabul qiling. Saqlash bloklangan holatda sahifa ishlashda davom etsin.\n\nQo‘shimcha savollar:\n1) localStorage va sessionStorage farqi?\n2) Obyektni qanday saqlaysiz?\n3) getItem topmasa nima qaytaradi?\n4) Nega maxfiy tokenni localStorage ga qo‘ymaslik kerak?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const k = \"js-dars-json-mashq\";\nlocalStorage.setItem(k, JSON.stringify({ ball: 0 }));\nconst o = JSON.parse(localStorage.getItem(k));\nconsole.log(o.ball);\nconsole.log(typeof o);\nlocalStorage.removeItem(k);\nconsole.log(localStorage.getItem(k));",
    "exerciseExpected": [
      0,
      "object",
      null
    ],
    "exerciseRuntime": "browser",
    "exerciseAnswer": "1. 0 — JSON 0 ni saqladi\n2. \"object\" — parse obyekt qaytardi\n3. null — kalit o‘chirilgach null\n\nLoyihani yechish yo‘li: Alohida storage kalitini ishlating. try ichida o‘qib, whitelist bilan qiymatni tekshiring. UI ni saqlash muvaffaqiyatiga qaram qilmay yangilang; natija saqlanmasa foydalanuvchiga tushunarli xabar bering.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
      }
    ],
    "learningGuide": {
      "goal": "String va JSON ni brauzer xotirasiga yozib, yo‘q yoki buzilgan qiymatni boshqarasiz.",
      "prerequisites": [
        "json-basics",
        "dom-forms"
      ],
      "terms": [
        {
          "term": "Origin",
          "meaning": "Protokol, host va port birikmasi; storage shu chegara bo‘yicha ajratiladi."
        },
        {
          "term": "Kvota",
          "meaning": "Brauzer saqlash uchun belgilagan hajm cheklovi."
        },
        {
          "term": "Session",
          "meaning": "Tabning ish sessiyasi; sessionStorage uning muddatiga bog‘liq."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Saqlangan user ni qayta o‘qiganda ism Ali bo‘lsin. Obyektni bevosita yozish nima beradi?",
        "brokenCode": "const k = \"js-dars-pedagogy\";\nlocalStorage.setItem(k, { ism: \"Ali\" });\nconsole.log(localStorage.getItem(k));\nlocalStorage.removeItem(k);",
        "fixedCode": "const k = \"js-dars-pedagogy\";\nlocalStorage.setItem(k, JSON.stringify({ ism: \"Ali\" }));\nconst user = JSON.parse(localStorage.getItem(k));\nconsole.log(user.ism);\nlocalStorage.removeItem(k);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "Storage string saqlaydi. stringify formatni yozdi, parse qayta obyektga aylantirdi. Mashq kaliti oxirida olib tashlandi.",
        "runtime": "browser"
      },
      "write": {
        "task": "Tema tanlovini saqlang. Qayta ochilganda o‘qing, faqat light/dark qiymatlarini qabul qiling. Saqlash bloklangan holatda sahifa ishlashda davom etsin.",
        "criteria": [
          "Faqat light va dark qiymatlari qabul qilinadi.",
          "Yo‘q yoki buzilgan sozlamada sayt ishlashda davom etadi.",
          "Saqlash ruxsati bo‘lmasa foydalanuvchi tanlovi hozirgi sahifada ishlaydi."
        ],
        "hint": "Alohida storage kalitini ishlating. try ichida o‘qib, whitelist bilan qiymatni tekshiring. UI ni saqlash muvaffaqiyatiga qaram qilmay yangilang; natija saqlanmasa foydalanuvchiga tushunarli xabar bering."
      }
    }
  },
  {
    "id": "dates",
    "title": "Date va vaqt bilan ishlash: noldan",
    "question": "Date obyekti qanday yaratiladi? Timestamp, ISO va formatlash qanday ishlaydi?",
    "explanation": "Date vaqt lahzasini timestamp — 1970-01-01 UTC dan millisekund soni bilan ifodalaydi. Sana ko‘rinishi esa vaqt zonasi va formatga bog‘liq. Sana bilan vaqt lahzasi bir savol emas: tug‘ilgan kun va onlayn uchrashuv uchun bir xil model har doim mos kelmaydi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Z UTC ni bildiradi. Oy indeksi 0 dan: 10 — noyabr. toISOString doim UTC ko‘rinishini beradi, kompyuter mahalliy zonasiga bog‘lanmaydi.",
        "code": "const d = new Date(\"2026-11-22T10:00:00Z\");\nconsole.log(d.getUTCFullYear());\nconsole.log(d.getUTCMonth());\nconsole.log(d.toISOString());",
        "expectedOutput": [
          2026,
          10,
          "2026-11-22T10:00:00.000Z"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [2026, 10, \"2026-11-22T10:00:00.000Z\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Date yaratish",
        "text": "new Date() hozirgi vaqtni beradi. new Date(\"2026-11-21\") satrdan, new Date(2026, 10, 21) esa yil/oy/kun beradi. Oylar 0 dan boshlanadi: 0 — yanvar, 10 — noyabr.",
        "code": "const hozir = new Date();\nconsole.log(hozir);\nconst sana = new Date(\"2026-11-21\");\nconst sana2 = new Date(2026, 10, 21); // noyabr\nconsole.log(sana.getFullYear()); // 2026\nconsole.log(sana.getMonth()); // 10 (noyabr, 0 dan boshlanadi)"
      },
      {
        "title": "3. Timestamp",
        "text": "Date.getTime() millisekundlarni qaytaradi. Date.now() ham hozirgi vaqtni millisekund sifatida beradi. Bu sonlar bilan vaqt farqini hisoblash qulay.",
        "code": "console.log(Date.now()); // masalan 1763700000000\nconst a = new Date(\"2026-01-01\");\nconst b = new Date(\"2026-01-03\");\nconsole.log((b - a) / (1000 * 60 * 60)); // 48 (soatlar)",
        "note": "Ikki Date ni ayirsang, millisekundlar farqi chiqadi: 2 kun = 172800000 ms."
      },
      {
        "title": "4. Mahalliy vaqt va UTC",
        "text": "getFullYear/getMonth/getDate mahalliy vaqt bo‘yicha, getUTCFullYear/getUTCMonth/getUTCDate esa UTC bo‘yicha qiymatlar beradi. \"2026-11-21\" satri UTC sifatida talqin qilinadi, shuning uchun mahalliy vaqtda boshqa kun bo‘lishi mumkin.",
        "code": "const d = new Date(\"2026-11-21\");\nconsole.log(d.getUTCDate()); // 21\nconsole.log(d.getDate()); // sening zonangga qarab 20 yoki 21 bo'lishi mumkin"
      },
      {
        "title": "5. Formatlash",
        "text": "toISOString() standart ISO satr qaytaradi. toLocaleDateString() esa foydalanuvchi tiliga mos format beradi.",
        "code": "const d = new Date(\"2026-11-21T10:30:00Z\");\nconsole.log(d.toISOString()); // 2026-11-21T10:30:00.000Z\nconsole.log(d.toLocaleDateString(\"uz-UZ\")); // 21.11.2026 kabi"
      },
      {
        "title": "6. O‘zgartirish",
        "text": "setFullYear, setMonth, setDate kabi metodlar obyektni o‘zgartiradi (mutating). Kun qo‘shish uchun avval nusxa olib, keyin o‘zgartirish yaxshi.",
        "code": "const d = new Date(\"2026-11-21T00:00:00Z\");\nd.setUTCDate(d.getUTCDate() + 7);\nconsole.log(d.toISOString().slice(0, 10)); // 2026-11-28\nconst nusxa = new Date(d.getTime());"
      },
      {
        "title": "7. Amaliy: kunlar farqi",
        "text": "Ikki UTC vaqt lahzasi orasidagi 24-soatlik oraliqlar uchun millisekund farqni 86400000 ga bo‘lish mumkin. Mahalliy kalendar kunlari DST sabab doim 24 soat bo‘lavermaydi; biznesdagi kunlar hisobini alohida belgilang.",
        "code": "const kun = 24 * 60 * 60 * 1000;\nconst bosh = new Date(\"2026-01-01\");\nconst oxir = new Date(\"2026-01-10\");\nconsole.log((oxir - bosh) / kun); // 9"
      },
      {
        "title": "8. Sanani nusxalash va o‘zgartirish",
        "text": "set metodlari mavjud Date ni o‘zgartiradi. new Date(old.getTime()) mustaqil nusxa. UTC misolda kun qo‘shish uchun setUTCDate ishlatamiz.",
        "code": "const a = new Date(\"2026-01-01T00:00:00Z\");\nconst b = new Date(a.getTime());\nb.setUTCDate(b.getUTCDate() + 7);\nconsole.log(a.toISOString().slice(0, 10));\nconsole.log(b.toISOString().slice(0, 10));",
        "expectedOutput": [
          "2026-01-01",
          "2026-01-08"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "getDay hafta kuni, getDate oy kuni. Raqamli konstruktorda oy 0 dan boshlanadi. Invalid Date ni Number.isNaN(d.getTime()) bilan tekshiring. Mahalliy kunlar orasidagi masofa DST sabab doim 24 soat emas. Sana satriga vaqt zonasi kiritilmasa turlicha talqin bo‘lishi mumkin; formatni aniq belgilang."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Ikki UTC sana orasidagi soatlarni toping. Keyin bir vaqtni Intl.DateTimeFormat bilan Asia/Samarkand va UTC zonalarida ko‘rsating. Natijada timestamp emas ko‘rinish o‘zgarishini tekshiring."
      }
    ],
    "takeaway": "Date vaqt lahzasini timestamp — 1970-01-01 UTC dan millisekund soni bilan ifodalaydi.\ngetDay hafta kuni, getDate oy kuni.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ikki UTC sana orasidagi soatlarni toping. Keyin bir vaqtni Intl.DateTimeFormat bilan Asia/Samarkand va UTC zonalarida ko‘rsating. Natijada timestamp emas ko‘rinish o‘zgarishini tekshiring.\n\nQo‘shimcha savollar:\n1) new Date(2026, 0, 1) qaysi oy?\n2) Ikki Date ni ayirsak nima chiqadi?\n3) getDate va getUTCDate farqi nima?\n4) 2 kun necha millisekund?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = new Date(\"2026-01-01T00:00:00Z\");\nconst b = new Date(\"2026-01-03T00:00:00Z\");\nconsole.log((b - a) / 3600000);\nconsole.log(a.getUTCMonth());\nconsole.log(a.getUTCDate());\nconsole.log(Number.isNaN(new Date(\"noto‘g‘ri\").getTime()));",
    "exerciseExpected": [
      48,
      0,
      1,
      true
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 48 — ikki to‘liq UTC kun\n2. 0 — yanvar indeksi 0\n3. 1 — oyning birinchi kuni\n4. true — noto‘g‘ri sana timestampi NaN\n\nLoyihani yechish yo‘li: ISO satrlarni Z bilan yarating, getTime farqini 3600000 ga bo‘ling. Formatda {timeZone:\"Asia/Samarkand\"} ni aniq yozing. Har doim foydalanuvchi talabi sana yoki vaqt lahzasi ekanini aniqlang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
      }
    ],
    "learningGuide": {
      "goal": "Timestamp, UTC va ko‘rinadigan mahalliy sana farqini bilib, vaqt oralig‘ini hisoblaysiz.",
      "prerequisites": [
        "numbers-math",
        "objects-basics"
      ],
      "terms": [
        {
          "term": "Timestamp",
          "meaning": "1970-01-01 UTC dan o‘tgan millisekundlar soni."
        },
        {
          "term": "UTC",
          "meaning": "Vaqt lahzalarini yagona tayanchda ifodalash standarti."
        },
        {
          "term": "Time zone",
          "meaning": "Bir vaqt lahzasining mahalliy ko‘rinishini belgilaydigan hudud qoidalari."
        },
        {
          "term": "DST",
          "meaning": "Ba’zi hududlarda yil davomida soat siljishi qoidasi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Yanvar oyining raqami 1 chiqishi kerak. Konstruktorda oy qayerdan boshlanadi?",
        "brokenCode": "const d = new Date(Date.UTC(2026, 1, 1));\nconsole.log(d.getUTCMonth() + 1);",
        "fixedCode": "const d = new Date(Date.UTC(2026, 0, 1));\nconsole.log(d.getUTCMonth() + 1);",
        "expectedOutput": [
          1
        ],
        "explanation": "Raqamli konstruktorda 0 — yanvar. Foydalanuvchiga 1–12 ko‘rsatish uchun natijaga 1 qo‘shildi; UTC usullari muhit zonasidan mustaqil.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Ikki UTC sana orasidagi soatlarni toping. Keyin bir vaqtni Intl.DateTimeFormat bilan Asia/Samarkand va UTC zonalarida ko‘rsating. Natijada timestamp emas ko‘rinish o‘zgarishini tekshiring.",
        "criteria": [
          "Ikki UTC kun oralig‘i 48 soat bo‘ladi.",
          "Bir timestamp ikki zonada turlicha ko‘rsatiladi.",
          "Noto‘g‘ri sana Invalid Date/NaN sifatida aniqlanadi."
        ],
        "hint": "ISO satrlarni Z bilan yarating, getTime farqini 3600000 ga bo‘ling. Formatda {timeZone:\"Asia/Samarkand\"} ni aniq yozing. Har doim foydalanuvchi talabi sana yoki vaqt lahzasi ekanini aniqlang."
      }
    }
  },
  {
    "id": "regex-basics",
    "title": "Regex: noldan",
    "question": "Regex nima? test, match, replace va asosiy naqsh belgilari.",
    "explanation": "Regex — matndan naqsh qidirish qoidasi. /raqamlar/ yozuvi naqsh obyektini yaratadi, .test(matn) moslik borligini boolean qaytaradi. Avval “biror joyida bormi?” bilan “butun matn shu formatdami?” farqini o‘rganamiz.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi naqsh istalgan joydagi bitta ASCII raqamni topadi. ^ bosh, $ oxir, + kamida bitta takrorni bildiradi; shu sabab ikkinchisi butun satr faqat raqam bo‘lishini talab qiladi.",
        "code": "console.log(/\\d/.test(\"abc1\"));\nconsole.log(/^\\d+$/.test(\"abc1\"));\nconsole.log(/^\\d+$/.test(\"123\"));",
        "expectedOutput": [
          true,
          false,
          true
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [true, false, true]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Yaratish va test",
        "text": "Regex /naqsh/ bilan yoki new RegExp(\"naqsh\") bilan yaratiladi. .test(string) mos kelishini true/false qaytaradi.",
        "code": "const r = /Ali/;\nconsole.log(r.test(\"Salom Ali\")); // true\nconsole.log(r.test(\"Salom Vali\")); // false"
      },
      {
        "title": "3. Asosiy belgilar",
        "text": ". odatda yangi satrdan tashqari bitta birlikka mos; s flag dotAll qiladi. \\d ASCII raqam, \\w odatda ASCII harf/raqam/_, \\s whitespace. ^ bosh, $ oxir, + kamida bir, * nol yoki ko‘p, ? nol yoki bir takrorni bildiradi. Unicode holatlari uchun u va property escape qoidalarini o‘rganing.",
        "code": "console.log(/\\d/.test(\"abc1\")); // true (raqam bor)\nconsole.log(/^Ali/.test(\"Ali vali\")); // true (boshida)\nconsole.log(/ali$/i.test(\"Salom Ali\")); // true (oxiri, i — kichik katta harf farqini yo'q qiladi)\nconsole.log(/a+/.test(\"aaa\")); // true"
      },
      {
        "title": "4. Kvadrat qavs va oraliq",
        "text": "[abc] — a, b yoki c; [0-9] — raqam; [a-z] — kichik harf; [^0-9] — raqam bo‘lmagan. {3} — aynan 3 marta, {2,5} — 2 dan 5 gacha.",
        "code": "console.log(/[0-9]{3}/.test(\"a123b\")); // true\nconsole.log(/^[a-z]+$/.test(\"salom\")); // true (faqat kichik harflar)\nconsole.log(/[^0-9]/.test(\"123\")); // false"
      },
      {
        "title": "5. match va replace",
        "text": "string.match(regex) mosliklarni qaytaradi (g flag bo‘lsa hammasini). string.replace(regex, yangi) moslarni almashtiradi.",
        "code": "console.log(\"a1 b2 c3\".match(/\\d/g)); // [\"1\",\"2\",\"3\"]\nconsole.log(\"ali vali\".replace(/ali/gi, \"Ali\")); // \"Ali vAli\"\nconsole.log(\"a,b,c\".replace(/,/g, \";\")); // \"a;b;c\""
      },
      {
        "title": "6. Guruhlar",
        "text": "Qavs (...) guruh yaratadi. Ular match natijasida alohida ko‘rinadi va replace da $1, $2 bilan ishlatiladi.",
        "code": "const m = \"2026-11-21\".match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(m[1], m[2], m[3]); // 2026 11 21\nconsole.log(\"Ali Vali\".replace(/(\\w+) (\\w+)/, \"$2 $1\")); // \"Vali Ali\""
      },
      {
        "title": "7. Ehtiyot bo‘lish",
        "text": "Regex kuchli, lekin o‘qish qiyin. Oddiy tekshirish uchun includes, startsWith kabi metodlar yetarli. Foydalanuvchi kiritgan matndan regex yaratishda ehtiyot bo‘lish kerak.",
        "code": "// oddiy holatda regex kerak emas:\nconsole.log(\"salom\".includes(\"sal\")); // true\nconsole.log(\"fayl.txt\".endsWith(\".txt\")); // true"
      },
      {
        "title": "8. Literal va RegExp konstruktorida escape farqi",
        "text": "JavaScript stringi ichida regexga beriladigan backslash ni yana escape qilasiz. Oddiy literal /\\d/ bilan RegExp(\"\\\\d\") bir naqshni beradi.",
        "code": "console.log(new RegExp(\"\\\\d+\").test(\"x12\"));\nconsole.log(/^\\p{L}+$/u.test(\"Salom\"));",
        "expectedOutput": [
          true,
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Nuqta odatda yangi satrni olmaydi, s flag bilan oladi. \\w barcha dunyo harflari emas, odatda ASCII harf/raqam/_; Unicode uchun \\p{L} va u kabi qoidalarni o‘rganing. g/y regex test ishlatganda lastIndex o‘zgaradi. Murakkab naqsh noto‘g‘ri kirishda sekinlashishi mumkin; oddiy qidiruv uchun includes yetarli."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "3–5 ta ASCII raqamdan iborat kodni tekshiring. Bo‘sh, qisqa, uzun va ichida harf bor holatlarni test qiling. Sana regexi kalendar to‘g‘riligini alohida tekshirishga muhtoj ekanini ayting."
      }
    ],
    "takeaway": "Regex — matndan naqsh qidirish qoidasi.\nNuqta odatda yangi satrni olmaydi, s flag bilan oladi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: 3–5 ta ASCII raqamdan iborat kodni tekshiring. Bo‘sh, qisqa, uzun va ichida harf bor holatlarni test qiling. Sana regexi kalendar to‘g‘riligini alohida tekshirishga muhtoj ekanini ayting.\n\nQo‘shimcha savollar:\n1) /\\d/.test(\"abc\") nima?\n2) ^ va $ nima anglatadi?\n3) \"a1b2\".match(/\\d/g) natijasi?\n4) g flag nima qiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(/^\\d{3,5}$/.test(\"1234\"));\nconsole.log(/^\\d{3,5}$/.test(\"a123\"));\nconst r = /a/g;\nconsole.log(r.test(\"a\"));\nconsole.log(r.test(\"a\"));",
    "exerciseExpected": [
      true,
      false,
      true,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. true — uzunlik va tarkib mos\n2. false — boshida harf bor\n3. true — birinchi test lastIndex ni 1 qiladi\n4. false — ikkinchisi oxiridan boshlaydi, topmaydi\n\nLoyihani yechish yo‘li: const qoida=/^\\d{3,5}$/; bilan testlar yozing. g flag bu oddiy validatorga kerak emas. Regex formatni tekshiradi, foydalanuvchi haqiqatan kimligini tasdiqlamaydi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
      }
    ],
    "learningGuide": {
      "goal": "Qisman qidiruv bilan butun matnni tekshirish farqini bilib, kichik validator yozasiz.",
      "prerequisites": [
        "strings",
        "conditionals"
      ],
      "terms": [
        {
          "term": "Naqsh",
          "meaning": "Qanday belgilar ketma-ketligi qidirilishini bildiradigan qoida."
        },
        {
          "term": "Anchor",
          "meaning": "^ va $ kabi bosh/oxir chegarasini bildiruvchi belgi."
        },
        {
          "term": "Flag",
          "meaning": "Regex xulqini o‘zgartiradigan i, g, u kabi belgi."
        },
        {
          "term": "Guruh",
          "meaning": "(...) bilan ajratilgan, natijasini keyin olish mumkin bo‘lgan naqsh qismi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Faqat raqamlardan iborat butun matn qabul qilinsin. a123 rad etilishi kerak.",
        "brokenCode": "console.log(/\\d+/.test(\"a123\"));",
        "fixedCode": "console.log(/^\\d+$/.test(\"a123\"));\nconsole.log(/^\\d+$/.test(\"123\"));",
        "expectedOutput": [
          false,
          true
        ],
        "explanation": "Anchorlarsiz naqsh istalgan joydagi mos bo‘lakni topadi. ^ va $ butun matn bo‘yicha tekshirishni talab qildi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "3–5 ta ASCII raqamdan iborat kodni tekshiring. Bo‘sh, qisqa, uzun va ichida harf bor holatlarni test qiling. Sana regexi kalendar to‘g‘riligini alohida tekshirishga muhtoj ekanini ayting.",
        "criteria": [
          "\"1234\" yaroqli, \"a123\" yaroqsiz bo‘ladi.",
          "2 va 6 raqamli kodlar rad etiladi.",
          "Takroriy tekshiruvlar g flagning lastIndex holatiga bog‘lanmaydi."
        ],
        "hint": "const qoida=/^\\d{3,5}$/; bilan testlar yozing. g flag bu oddiy validatorga kerak emas. Regex formatni tekshiradi, foydalanuvchi haqiqatan kimligini tasdiqlamaydi."
      }
    }
  },
  {
    "id": "web-apis",
    "title": "Foydali Web API lar: noldan",
    "question": "setTimeout, setInterval, requestAnimationFrame, URL, Intl va boshqa API lar nima qiladi?",
    "explanation": "Web API — JavaScript tili bilan brauzer bergan imkoniyat orasidagi ko‘prik. DOM, URL, taymer, fetch va storage tilning o‘zi emas, muhitdagi API lardir. Ayrimlari Node.js da ham mavjud, ayrimlari faqat brauzerda. Har birida qaytarish turi va bekor qilish/tozalash yo‘lini biling.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "URL manzil qismlarini ajratadi. searchParams matn qiymatlari bilan ishlaydi; bo‘sh joyni URL formatiga kodlashni o‘zi bajaradi.",
        "code": "const u = new URL(\"https://example.com/dars?mavzu=js\");\nconsole.log(u.pathname);\nconsole.log(u.searchParams.get(\"mavzu\"));\nu.searchParams.set(\"q\", \"Ali Vali\");\nconsole.log(u.searchParams.get(\"q\"));",
        "expectedOutput": [
          "/dars",
          "js",
          "Ali Vali"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"/dars\", \"js\", \"Ali Vali\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. setTimeout va setInterval",
        "text": "setTimeout fn ni bir marta, setInterval esa har doim takrorlaydi. Ikkalasi ham timer ID qaytaradi; clearTimeout/clearInterval bilan bekor qilinadi.",
        "code": "const id = setTimeout(() => console.log(\"bir marta\"), 1000);\nclearTimeout(id); // bekor qilindi\n\nconst interval = setInterval(() => console.log(\"har 1 soniyada\"), 1000);\n// clearInterval(interval); // to'xtatish"
      },
      {
        "title": "3. requestAnimationFrame",
        "text": "Animatsiya uchun setTimeout o‘rniga requestAnimationFrame ishlatiladi: u ekran yangilanishiga moslashadi va fon tabda to‘xtaydi.",
        "code": "let kadr = 0;\nfunction anim() {\n  kadr++; console.log(\"kadr\", kadr);\n  if (kadr < 3) requestAnimationFrame(anim);\n}\nrequestAnimationFrame(anim); // 3 kadrdan keyin to‘xtaydi"
      },
      {
        "title": "4. URL va URLSearchParams",
        "text": "URL obyekti bilan manzilni pars qilish mumkin. URLSearchParams query parametrlari bilan ishlaydi.",
        "code": "const u = new URL(\"https://example.com/sahifa?x=1&y=2\");\nconsole.log(u.pathname); // /sahifa\nconsole.log(u.searchParams.get(\"x\")); // \"1\"\nu.searchParams.set(\"x\", \"5\");\nconsole.log(u.toString()); // ...?x=5&y=2"
      },
      {
        "title": "5. Intl — formatlash",
        "text": "Intl.NumberFormat va Intl.DateTimeFormat tilga mos format beradi. Pul va sana ko‘rsatishda ishlatiladi.",
        "code": "console.log(new Intl.NumberFormat(\"uz-UZ\").format(1234567));\nconsole.log(new Intl.NumberFormat(\"en-US\", {\n  style: \"currency\", currency: \"USD\"\n}).format(10)); // $10.00"
      },
      {
        "title": "6. structuredClone",
        "text": "Chuqur nusxa olish uchun zamonaviy usul. JSON usulidan farqli: Date, Map, Set saqlanadi, tsiklik bog‘lanish ishlaydi. Lekin funksiya va DOM element klonlanmaydi.",
        "code": "const a = { d: new Date(), m: new Map([[\"x\", 1]]) };\nconst b = structuredClone(a);\nconsole.log(b.d instanceof Date); // true\nconsole.log(b.m.get(\"x\")); // 1"
      },
      {
        "title": "7. AbortController",
        "text": "Signal qo‘llaydigan API ga AbortSignal beriladi; abort bekor qilishni bildiradi. Fetch bekor qilinganda rejectionni catch bilan tuting. Abort serverda bajarilib bo‘lgan amalni orqaga qaytarmaydi.",
        "code": "const controller = new AbortController();\nfetch(\"/api\", { signal: controller.signal })\n  .then(r => console.log(r.status))\n  .catch(e => console.log(e.name));\ncontroller.abort();"
      },
      {
        "title": "8. Resurslar hayot davri",
        "text": "Listenerni AbortSignal bilan, animatsiyani cancelAnimationFrame bilan, taymerni clearTimeout/clearInterval bilan tozalang. performance.now davomiylik o‘lchash uchun monotonic vaqt, Date.now esa kalendar vaqtidir.",
        "code": "const c = new AbortController();\nconst signal = c.signal;\nc.abort();\nconsole.log(signal.aborted);",
        "expectedOutput": [
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "API mavjudligini tekshiring: hamma muhitda document yoki navigator yo‘q. requestAnimationFrame bir marta callback rejalashtiradi; keyingi kadrni o‘zingiz so‘raysiz. Cheksiz listener/taymer qoldirmang. Clipboard, geolocation kabi API lar ruxsat yoki xavfsiz kontekst talab qilishi mumkin. URL API manzilni ajratadi, uning ishonchli ekanini o‘zi tasdiqlamaydi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "URL query dan mavzuni olib ko‘rsatadigan kichik sahifa yarating. Qidiruvni URLSearchParams bilan yangilang. Vaqt o‘lchash uchun performance.now, bekor qilish uchun AbortController ishlating."
      }
    ],
    "takeaway": "Web API — JavaScript tili bilan brauzer bergan imkoniyat orasidagi ko‘prik.\nAPI mavjudligini tekshiring: hamma muhitda document yoki navigator yo‘q.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: URL query dan mavzuni olib ko‘rsatadigan kichik sahifa yarating. Qidiruvni URLSearchParams bilan yangilang. Vaqt o‘lchash uchun performance.now, bekor qilish uchun AbortController ishlating.\n\nQo‘shimcha savollar:\n1) setTimeout va setInterval farqi?\n2) Animatsiya uchun nega requestAnimationFrame yaxshi?\n3) structuredClone JSON usulidan nima bilan yaxshi?\n4) AbortController nima qiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const q = new URLSearchParams(\"x=1&x=2\");\nconsole.log(q.get(\"x\"));\nconsole.log(q.getAll(\"x\"));\nconst c = new AbortController();\nconsole.log(c.signal.aborted);\nc.abort();\nconsole.log(c.signal.aborted);",
    "exerciseExpected": [
      "1",
      [
        "1",
        "2"
      ],
      false,
      true
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"1\" — birinchi qiymat\n2. [\"1\", \"2\"] — barcha bir xil nomli qiymatlar\n3. false — hali faol\n4. true — abort belgisi o‘rnatildi\n\nLoyihani yechish yo‘li: new URL(location.href).searchParams bilan o‘qing. Parametr yo‘q bo‘lsa default tanlang. Kerak bo‘lsa history.replaceState bilan manzilni yangilang; URL ga maxfiy kalit kiritmang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "learningGuide": {
      "goal": "JavaScript tili bilan brauzer API sini ajratib, URL, taymer va bekor qilish vositalarini ishlatasiz.",
      "prerequisites": [
        "dom-basics",
        "storage",
        "dates"
      ],
      "terms": [
        {
          "term": "API",
          "meaning": "Muhit taklif qilgan tayyor ishlash interfeysi."
        },
        {
          "term": "URL query",
          "meaning": "Manzildagi ? dan keyingi kalit-qiymat parametrlari."
        },
        {
          "term": "AbortSignal",
          "meaning": "Ish bekor qilinganini API ga yetkazadigan signal."
        },
        {
          "term": "Monotonic vaqt",
          "meaning": "Kalendar soati tuzatilishidan mustaqil davomiylik o‘lchovi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "x ning ikkala qiymati kerak: [\"1\",\"2\"].",
        "brokenCode": "const u = new URL(\"https://example.com/?x=1&x=2\");\nconsole.log(u.searchParams.get(\"x\"));",
        "fixedCode": "const u = new URL(\"https://example.com/?x=1&x=2\");\nconsole.log(u.searchParams.getAll(\"x\"));",
        "expectedOutput": [
          [
            "1",
            "2"
          ]
        ],
        "explanation": "get birinchi qiymatni, getAll shu kalitning barcha qiymatlarini massiv sifatida beradi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "URL query dan mavzuni olib ko‘rsatadigan kichik sahifa yarating. Qidiruvni URLSearchParams bilan yangilang. Vaqt o‘lchash uchun performance.now, bekor qilish uchun AbortController ishlating.",
        "criteria": [
          "Yo‘q query parametrga zaxira qiymat tanlanadi.",
          "Bo‘sh joyli parametr URLSearchParams bilan to‘g‘ri kodlanadi.",
          "Taymer/listener kerak bo‘lmaganda tozalanadi."
        ],
        "hint": "new URL(location.href).searchParams bilan o‘qing. Parametr yo‘q bo‘lsa default tanlang. Kerak bo‘lsa history.replaceState bilan manzilni yangilang; URL ga maxfiy kalit kiritmang."
      }
    }
  },
  {
    "id": "async-timers",
    "title": "Sinxron va asinxron kod, setTimeout/setInterval",
    "question": "Kod qaysi tartibda ishlaydi? Kutish vaqtida sahifa to‘xtab qoladimi?",
    "explanation": "Sinxron kod hozirgi ishni tugatib keyingisiga o‘tadi. Asinxron API kutishni muhitga topshirib, callback yoki Promise orqali keyin natija beradi. setTimeout JavaScript hisoblashini boshqa oqimga ko‘chirmaydi; u keyingi chaqirishni rejalashtiradi.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Avval boshlanish chiqadi. setTimeout callbackni keyinga rejalashtiradi. davom hozir chiqadi, keyin taymer callbacki keyin matnini chiqaradi. Promise yoki await bilish bu misol uchun kerak emas.",
        "code": "console.log(\"boshlanish\");\nsetTimeout(() => console.log(\"keyin\"), 0);\nconsole.log(\"davom\");",
        "expectedOutput": [
          "boshlanish",
          "davom",
          "keyin"
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"boshlanish\", \"davom\", \"keyin\"]. Har bir console.log bitta natija beradi.",
        "settleMs": 20
      },
      {
        "title": "2. Sinxron tartib",
        "text": "Oddiy console.log chaqiriqlari yozilgan tartibda bajariladi. Juda uzoq sinxron hisoblash sahifa javob berishini sekinlashtirishi mumkin.",
        "code": "console.log(\"A\");\nconsole.log(\"B\");\nconsole.log(\"C\"); // tartib: A, B, C"
      },
      {
        "title": "3. setTimeout bir marta chaqiradi",
        "text": "setTimeout funksiyani darhol bajarmaydi: keyinroq bajarishga rejalashtiradi. Vaqt millisekundda: 1000 ms = 1 soniya. Ko‘rsatilgan muddat eng kam kutishdir, aniq bajarilish vaqti emas.",
        "code": "console.log(\"Boshlanish\");\nsetTimeout(() => {\n  console.log(\"Keyinroq\");\n}, 1000);\nconsole.log(\"Davom etadi\");",
        "note": "Natija: Boshlanish, Davom etadi, keyin Keyinroq. setTimeout dagi funksiya — callback."
      },
      {
        "title": "4. Nol vaqt ham keyin bajariladi",
        "text": "0 millisekund yozish hozirgi kodni bo‘lmaydi. Callback joriy bajarilish tugagach ishga tushishi mumkin. Event loop mavzusida sababini chuqurroq ko‘ramiz.",
        "code": "console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3); // tartib: 1, 3, 2"
      },
      {
        "title": "5. Bekor qilish va takrorlash",
        "text": "clearTimeout hali ishlamagan taymerni bekor qiladi. setInterval takroriy callback rejalashtiradi; kerak bo‘lmaganda clearInterval bilan to‘xtating.",
        "code": "const kutish = setTimeout(() => console.log(\"Bu chiqmaydi\"), 1000);\nclearTimeout(kutish);\n\nlet sanoq = 0;\nconst interval = setInterval(() => {\n  sanoq += 1;\n  console.log(sanoq);\n  if (sanoq === 3) clearInterval(interval);\n}, 1000);",
        "note": "Interval misoli taxminan har soniyada 1, 2, 3 chiqaradi, keyin to‘xtaydi."
      },
      {
        "title": "6. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "setTimeout(fn(), 1000) fn ni hozir chaqiradi. Belgilangan vaqt aniq bajarilish kafolati emas. setInterval ichidagi uzoq asinxron ishlar bir-birini bosib ketishi mumkin; ish tugagach keyingi setTimeout ni rejalashtirish nazoratliroq. Taymerni kerak bo‘lmaganda to‘xtating."
      },
      {
        "title": "7. Kichik amaliy loyiha",
        "text": "Boshlash/to‘xtatish tugmali sanagich qiling. Boshlash ikki marta bosilganda ikki interval yaratilmasin. 5 ga yetganda to‘xtasin."
      }
    ],
    "takeaway": "Sinxron kod hozirgi ishni tugatib keyingisiga o‘tadi.\nsetTimeout(fn(), 1000) fn ni hozir chaqiradi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Boshlash/to‘xtatish tugmali sanagich qiling. Boshlash ikki marta bosilganda ikki interval yaratilmasin. 5 ga yetganda to‘xtasin.\n\nQo‘shimcha savollar:\nAvval A chiqaring, 500 ms dan keyin B chiqishini rejalashtiring, keyin C chiqaring. Natija tartibini oldindan yozing. So‘ng 5 gacha sanaydigan va to‘xtaydigan interval yarating.",
    "resources": [
      {
        "title": "MDN: setTimeout",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const id = setTimeout(() => console.log(\"chiqmaydi\"), 0);\nclearTimeout(id);\nconsole.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);",
    "exerciseExpected": [
      "A",
      "B"
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. \"A\" — bekor qilingan callback ishlamaydi\n2. \"B\" — kutish tugagach async davomi\n\nLoyihani yechish yo‘li: let timer=null saqlang. Start faqat timer===null bo‘lsa interval ochsin. Stop clearInterval(timer); timer=null qilsin. Limitga yetganda ham Stop ni chaqiring.",
    "learningGuide": {
      "goal": "Sinxron satr va keyinroq chaqiriladigan callback tartibini oldindan aytasiz.",
      "prerequisites": [
        "callbacks",
        "events-advanced"
      ],
      "terms": [
        {
          "term": "Asinxron",
          "meaning": "Javob yoki callback keyinroq keladigan ish usuli."
        },
        {
          "term": "Taymer",
          "meaning": "Callbackni minimal muddatdan keyin bajarishga tayyorlovchi muhit vositasi."
        },
        {
          "term": "Callback",
          "meaning": "Taymer keyinroq chaqiradigan funksiya."
        },
        {
          "term": "Bekor qilish",
          "meaning": "Hali kerak bo‘lmagan rejalashtirilgan ishni to‘xtatish."
        }
      ]
    },
    "exerciseSettleMs": 20,
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Avval hozir, keyin keyin chiqsin. Funksiyani hozir chaqirib yubormang.",
        "brokenCode": "function keyin() { console.log(\"keyin\"); }\nsetTimeout(keyin(), 0);\nconsole.log(\"hozir\");",
        "fixedCode": "function keyin() { console.log(\"keyin\"); }\nsetTimeout(keyin, 0);\nconsole.log(\"hozir\");",
        "expectedOutput": [
          "hozir",
          "keyin"
        ],
        "explanation": "Taymerga funksiya reference i berildi. () qo‘yilsa funksiya so‘rov berilayotgan paytning o‘zida ishlaydi. 0 callbackni sinxron qilmaydi.",
        "runtime": "async"
      },
      "write": {
        "task": "Boshlash/to‘xtatish tugmali sanagich qiling. Boshlash ikki marta bosilganda ikki interval yaratilmasin. 5 ga yetganda to‘xtasin.",
        "criteria": [
          "Start ikki marta bosilganda bitta interval qoladi.",
          "Stop bosilgach yangi sanoq chiqmaydi.",
          "5 ga yetganda avtomatik to‘xtaydi."
        ],
        "hint": "let timer=null saqlang. Start faqat timer===null bo‘lsa interval ochsin. Stop clearInterval(timer); timer=null qilsin. Limitga yetganda ham Stop ni chaqiring."
      }
    }
  },
  {
    "id": "promises-async",
    "title": "Promise va async/await",
    "question": "Promise holatlari, .then zanjiri, async/await va xatolik qanday ishlaydi?",
    "explanation": "Promise — kelajakdagi natijaning va’dasini ifodalovchi obyekt. Holati pending, fulfilled yoki rejected bo‘ladi. then/catch natija bilan keyin ishlaydi; async/await shu oqimni o‘qish oson shaklda yozadi. async funksiya qaytargan qiymat har doim Promise orqali beriladi.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Promise.resolve(5) tayyor Promise yaratadi. then ga berilgan callback keyinroq 5 ni oladi. Hozir A va B chiqadi; joriy kod tugagach 5 chiqadi. async/await ni quyidagi bo‘limlarda o‘rganamiz.",
        "code": "console.log(\"A\");\nPromise.resolve(5).then(qiymat => console.log(qiymat));\nconsole.log(\"B\");",
        "expectedOutput": [
          "A",
          "B",
          5
        ],
        "exampleRuntime": "async",
        "note": "Natija tartibi: \"A\", \"B\", 5. then callbacki joriy sinxron koddan keyin bajariladi.",
        "settleMs": 20
      },
      {
        "title": "2. Promise holatlari",
        "text": "Promise pending, fulfilled yoki rejected holatda bo‘ladi. resolve oddiy qiymatni qabul qilsa fulfilled, reject sabab bilan rejected qiladi. resolve boshqa Promise/thenable ni qabul qilsa uning natijasini kuzatadi va hozircha pending qolishi mumkin. Birinchi resolution qarori keyingi resolve/reject urinishlarini e’tiborsiz qoldiradi.",
        "code": "const p = new Promise((resolve, reject) => {\n  resolve(\"tayyor\");\n});\np.then(x => console.log(x)); // tayyor\n\nPromise.reject(\"xato\").catch(e => console.log(e)); // xato"
      },
      {
        "title": "3. .then zanjiri va tartib",
        "text": ".then callbacklari har doim mikrovazifa sifatida, hozirgi sinxron kod tugagandan keyin bajariladi. Shuning uchun console.log(2) avval chiqadi.",
        "code": "Promise.resolve(1).then(x => console.log(x));\nconsole.log(2);\n// natija: 2, keyin 1"
      },
      {
        "title": "4. async/await",
        "text": "async funksiya Promise qaytaradi. await async ichida yoki ES modulning yuqori darajasida mumkin. Rad etilgan Promise await joyida xato sifatida ko‘rinadi; try/catch yoki .catch bilan tuting.",
        "code": "async function f() { return 5; }\nf().then(x => console.log(x)); // 5\nconsole.log(1); // avval 1 chiqadi\n\nasync function xato() {\n  throw new Error(\"buzildi\");\n}\nxato().catch(e => console.log(e.message)); // buzildi"
      },
      {
        "title": "5. Promise.all va Promise.allSettled",
        "text": "Promise.all barchasi bajarilsa natijalar massivini qaytaradi; bittasi rad etilsa butun zanjir rad etiladi. Promise.allSettled esa hammasini kutib, har birining holatini qaytaradi.",
        "code": "Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n]).then(r => console.log(r)); // [1, 2]"
      },
      {
        "title": "6. Ketma-ket yoki parallel kutishni tanlash",
        "text": "Bir ish oldingisiga bog‘liq bo‘lsa await ketma-ket. Mustaqil ishlar oldin boshlanib, keyin birga kutilishi mumkin. finally odatda qiymatni almashtirmay tozalash uchun ishlatiladi.",
        "code": "(async () => {\n  const a = Promise.resolve(10);\n  const b = Promise.resolve(20);\n  console.log(await Promise.all([a, b]));\n})();",
        "expectedOutput": [
          [
            10,
            20
          ]
        ],
        "exampleRuntime": "async"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "resolve boshqa Promise bilan chaqirilsa, uning yakunini qabul qiladi: resolved degani har doim hozir fulfilled emas. new Promise executor sinxron ishlaydi; then microtask. then ichida keyingi Promise ni return qilmaslik zanjirni uzadi. await faqat async ichida yoki ES modulning yuqori darajasida mumkin. forEach async callbacklarni kutmaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Ikki mustaqil ishni Promise.all bilan parallel boshlang, keyin ularga bog‘liq hisobni bajaring. Bittasi rad etilganda foydalanuvchiga xabar, finally da loading=false holatini bering."
      }
    ],
    "takeaway": "Promise — kelajakdagi natijaning va’dasini ifodalovchi obyekt.\nresolve boshqa Promise bilan chaqirilsa, uning yakunini qabul qiladi: resolved degani har doim hozir fulfilled emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Ikki mustaqil ishni Promise.all bilan parallel boshlang, keyin ularga bog‘liq hisobni bajaring. Bittasi rad etilganda foydalanuvchiga xabar, finally da loading=false holatini bering.\n\nQo‘shimcha savollar:\n1) Promise.resolve(1).then(...) va keyingi console.log(2) qaysi avval chiqadi?\n2) async function f(){ return 1 } f() nima qaytaradi?\n3) Promise.all dagi bitta reject nima bo'ladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "(async () => {\n  const a = Promise.resolve(2).then(x => x + 1);\n  console.log(await a);\n  try { await Promise.reject(new Error(\"xato\")); }\n  catch (e) { console.log(e.message); }\n  console.log(await Promise.all([Promise.resolve(1), Promise.resolve(2)]));\n})();",
    "exerciseExpected": [
      3,
      "xato",
      [
        1,
        2
      ]
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. 3 — then qaytargan qiymat yangi Promise natijasi\n2. \"xato\" — rad etilish catch bilan tutiladi\n3. [1, 2] — natijalar kirish tartibida\n\nLoyihani yechish yo‘li: Har bir ish uchun Promise ni yarating, keyin await Promise.all. try/catch/finally bilan loading holatini yakunlang. Bajarilish va natija tartibi bir xil tushuncha emasligini tekshiring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
      }
    ],
    "learningGuide": {
      "goal": "Promise natijasini zanjirlaysiz va async/await orqali muvaffaqiyat/xatoni boshqarasiz.",
      "prerequisites": [
        "callbacks",
        "async-timers",
        "errors-try-catch"
      ],
      "terms": [
        {
          "term": "Promise",
          "meaning": "Keyin aniqlanadigan natijani ifodalovchi obyekt."
        },
        {
          "term": "Pending",
          "meaning": "Natija hali yakunlanmagan holat."
        },
        {
          "term": "Fulfilled / rejected",
          "meaning": "Muvaffaqiyatli qiymat yoki rad etilish bilan yakunlangan holatlar."
        },
        {
          "term": "await",
          "meaning": "Async davomni Promise natijasi tayyor bo‘lguncha kutdirish; butun brauzerni muzlatmaydi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Zanjirning keyingi qadamiga 3 berilishi kerak.",
        "brokenCode": "Promise.resolve(2)\n  .then(x => { x + 1; })\n  .then(x => console.log(x));",
        "fixedCode": "Promise.resolve(2)\n  .then(x => { return x + 1; })\n  .then(x => console.log(x));",
        "expectedOutput": [
          3
        ],
        "explanation": "then callback qaytargan qiymat keyingi Promise natijasiga aylanadi. { } tanasidagi return yo‘q bo‘lsa undefined keladi.",
        "runtime": "async"
      },
      "write": {
        "task": "Ikki mustaqil ishni Promise.all bilan parallel boshlang, keyin ularga bog‘liq hisobni bajaring. Bittasi rad etilganda foydalanuvchiga xabar, finally da loading=false holatini bering.",
        "criteria": [
          "Mustaqil ikkita ish oldin boshlanib, keyin birga kutiladi.",
          "Rad etilgan Promise catch bilan ushlanadi.",
          "Loading holati muvaffaqiyatda ham, xatoda ham yakunlanadi."
        ],
        "hint": "Har bir ish uchun Promise ni yarating, keyin await Promise.all. try/catch/finally bilan loading holatini yakunlang. Bajarilish va natija tartibi bir xil tushuncha emasligini tekshiring."
      }
    }
  },
  {
    "id": "fetch-api",
    "title": "Fetch API: noldan",
    "question": "fetch qanday ishlaydi? Response, json(), async/await va xatoliklar.",
    "explanation": "fetch — HTTP so‘rov yuborish API si. Natija ikki bosqichda olinadi: avval Response, keyin uning tanasi. response.json() ham Promise qaytaradi. HTTP 404/500 kelishi tarmoq xatosi bilan bir xil emas: ok/status ni o‘zingiz tekshirasiz.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Bu boshlang‘ich misol internetga so‘rov yubormaydi, Response obyektini o‘zimiz yaratdik. Haqiqiy fetch ham shunday obyekt beradi. json matnni parse qilib ma’lumot qaytaradi.",
        "code": "(async () => {\n  // Tarmoqqa chiqmasdan Response bilan mashq:\n  const r = new Response(JSON.stringify({ ism: \"Ali\" }), {\n    status: 200, headers: { \"Content-Type\": \"application/json\" }\n  });\n  console.log(r.ok);\n  const user = await r.json();\n  console.log(user.ism);\n})();",
        "expectedOutput": [
          true,
          "Ali"
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [true, \"Ali\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Oddiy fetch",
        "text": "fetch(url) Promise qaytaradi. Birinchi .then Response obyektini beradi. response.json() ham Promise qaytaradi, shuning uchun ikkinchi .then kerak.",
        "code": "fetch(\"https://api.example.com/user\")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(e => console.error(\"Xato:\", e));"
      },
      {
        "title": "3. async/await bilan",
        "text": "async funksiya ichida await bilan kutish o‘qish osonroq. try/catch xatolarni tutadi.",
        "code": "async function olish() {\n  try {\n    const response = await fetch(\"/api/user\");\n    const data = await response.json();\n    console.log(data);\n  } catch (e) {\n    console.error(\"Xato:\", e);\n  }\n}\nolish();"
      },
      {
        "title": "4. Status tekshirish",
        "text": "fetch 404 yoki 500 qaytarsa ham rad etilmaydi. response.ok — status 200-299 bo‘lsa true. Shuning uchun har doim tekshirish kerak.",
        "code": "const response = await fetch(\"/api/user\");\nconsole.log(response.status); // 404 bo'lishi mumkin\nconsole.log(response.ok); // false\nif (!response.ok) {\n  throw new Error(\"HTTP xato: \" + response.status);\n}"
      },
      {
        "title": "5. POST va sozlamalar",
        "text": "Ikkinchi argument bilan method, headers va body berish mumkin. JSON yuborish uchun Content-Type header va JSON.stringify kerak.",
        "code": "const response = await fetch(\"/api/user\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ ism: \"Ali\" })\n});\nconst natija = await response.json();"
      },
      {
        "title": "6. response.json() bir marta ishlaydi",
        "text": "Response tanasi faqat bir marta o‘qiladi. Ikkinchi marta response.json() chaqirsang xato beradi. Shuning uchun natijani o‘zgaruvchiga saqlash kerak.",
        "code": "const response = await fetch(\"/api/user\");\nconst data = await response.json();\nconsole.log(data);\n// await response.json(); // xato: tanasi allaqachon o'qilgan"
      },
      {
        "title": "7. CORS tushunchasi",
        "text": "Brauzer boshqa domenga fetch qilganda CORS qoidasi ishlaydi. Server mos Access-Control-Allow-Origin header bermasa, javob o‘qilmaydi. Bu fetch xatosi emas, brauzer xavfsizligi.",
        "code": "// Boshqa domenga so'rov:\n// fetch(\"https://boshqa-sayt.com/api\") — CORS xatosi bo'lishi mumkin\n// Yechim: server ruxsat berishi kerak"
      },
      {
        "title": "8. To‘liq so‘rovda status va bekor qilish",
        "text": "Bu funksiya uchun URL ni o‘zingizdagi ishlaydigan API bilan bering. AbortSignal so‘rov yoki javob tanasini o‘qishni bekor qilishi mumkin; serverda bajarilib bo‘lgan ishni orqaga qaytarmaydi.",
        "code": "async function olish(url, signal) {\n  const r = await fetch(url, { signal });\n  if (!r.ok) throw new Error(`HTTP ${r.status}`);\n  if (r.status === 204) return null;\n  return r.json();\n}\n// const c = new AbortController();\n// olish(\"/api/user\", c.signal).then(console.log).catch(console.error);\n// c.abort();"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "404 va 500 odatda fetch ni reject qilmaydi. JSON bo‘lmagan yoki bo‘sh 204 javobda .json() xato berishi mumkin. Tana bir marta o‘qiladi; kerak bo‘lsa o‘qishdan oldin clone qiling. mode:\"no-cors\" server ruxsatini ochib bermaydi: javob opaque bo‘lib, tanasini o‘qiy olmaysiz. Maxfiy xizmat kalitini umumiy brauzer kodiga tikmang."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "O‘zingiz nazorat qiladigan JSON endpointdan ro‘yxat oling. Loading, muvaffaqiyat, bo‘sh ro‘yxat, HTTP xato, JSON xato va bekor qilish holatlarini ko‘rsating."
      }
    ],
    "takeaway": "fetch — HTTP so‘rov yuborish API si.\n404 va 500 odatda fetch ni reject qilmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: O‘zingiz nazorat qiladigan JSON endpointdan ro‘yxat oling. Loading, muvaffaqiyat, bo‘sh ro‘yxat, HTTP xato, JSON xato va bekor qilish holatlarini ko‘rsating.\n\nQo‘shimcha savollar:\n1) fetch 404 qaytarsa rad etiladimi?\n2) Nega ikki .then kerak?\n3) response.json() ni ikki marta chaqirsang nima?\n4) CORS nima?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "(async () => {\n  const r = new Response(\"{\\\"xabar\\\":\\\"Topilmadi\\\"}\", { status: 404 });\n  console.log(r.ok);\n  console.log(r.status);\n  const data = await r.json();\n  console.log(data.xabar);\n  console.log(r.bodyUsed);\n})();",
    "exerciseExpected": [
      false,
      404,
      "Topilmadi",
      true
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. false — 404 ok emas\n2. 404 — HTTP statusi\n3. \"Topilmadi\" — xato javobi tanasini ham o‘qish mumkin\n4. true — tana o‘qib bo‘lingan\n\nLoyihani yechish yo‘li: try ichida fetch, ok tekshiruvi, 204 holati va json ni ajrating. catch da AbortError ni oddiy server xatosidan farqlang. Haqiqiy endpoint bo‘lmasa Response bilan mashq qiling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      }
    ],
    "learningGuide": {
      "goal": "Response ni va uning tanasini alohida kutib, HTTP xatoni tarmoq xatosidan ajratasiz.",
      "prerequisites": [
        "promises-async",
        "json-basics",
        "web-apis"
      ],
      "terms": [
        {
          "term": "HTTP status",
          "meaning": "Server javobining natija kodi: 200, 404 kabi."
        },
        {
          "term": "Response",
          "meaning": "Status, header va javob tanasiga kirishni beradigan obyekt."
        },
        {
          "term": "Body",
          "meaning": "So‘rov yoki javobning ma’lumot qismi."
        },
        {
          "term": "CORS",
          "meaning": "Brauzer boshqa origin javobini o‘qishiga server ruxsat berishini boshqaradigan qoida."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "404 javob uchun muvaffaqiyat emas, HTTP 404 chiqishi kerak.",
        "brokenCode": "const r = new Response(\"Topilmadi\", { status: 404 });\nconsole.log(r ? \"ok\" : \"xato\");",
        "fixedCode": "const r = new Response(\"Topilmadi\", { status: 404 });\nconsole.log(r.ok ? \"ok\" : `HTTP ${r.status}`);",
        "expectedOutput": [
          "HTTP 404"
        ],
        "explanation": "Response obyekti mavjudligi HTTP muvaffaqiyat belgisi emas. ok status 200–299 oralig‘ini bildiradi. Bu misol tarmoqqa chiqmaydi.",
        "runtime": "async"
      },
      "write": {
        "task": "O‘zingiz nazorat qiladigan JSON endpointdan ro‘yxat oling. Loading, muvaffaqiyat, bo‘sh ro‘yxat, HTTP xato, JSON xato va bekor qilish holatlarini ko‘rsating.",
        "criteria": [
          "Loading, bo‘sh natija va muvaffaqiyat holatlari farqlanadi.",
          "404/500 uchun ok tekshiriladi.",
          "Bekor qilingan so‘rov oddiy HTTP xatosi deb ko‘rsatilmaydi."
        ],
        "hint": "try ichida fetch, ok tekshiruvi, 204 holati va json ni ajrating. catch da AbortError ni oddiy server xatosidan farqlang. Haqiqiy endpoint bo‘lmasa Response bilan mashq qiling."
      }
    }
  },
  {
    "id": "event-loop",
    "title": "Event loop: microtask va macrotask",
    "question": "setTimeout(0) bilan Promise.then qaysi avval ishlaydi? Nega?",
    "explanation": "Event loop — bajarilishga tayyor ishlarni navbat bilan tanlash mexanizmi. Call stack hozir ishlayotgan chaqirishlar to‘plami. Promise.then/queueMicrotask microtask, taymer callbacki esa alohida task bo‘ladi. Quyidagi model brauzerdagi boshlang‘ich misollar uchun; Node.js ning qo‘shimcha fazalari bor.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "A va D joriy sinxron kodda. Stack bo‘shagach Promise callbacki C ishlaydi. Taymerning B callbacki keyingi task sifatida keladi. 0 kutish uni sinxron qilmaydi.",
        "code": "(async () => {\n  console.log(\"A\");\n  const tugadi = new Promise(resolve => setTimeout(() => {\n    console.log(\"B\"); resolve();\n  }, 0));\n  Promise.resolve().then(() => console.log(\"C\"));\n  console.log(\"D\");\n  await tugadi;\n})();",
        "expectedOutput": [
          "A",
          "D",
          "C",
          "B"
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"A\", \"D\", \"C\", \"B\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Tartib",
        "text": "Call stack bo'shagach, event loop avval microtask queue ni to'liq bo'shatadi, keyin bir makrotask oladi. Bu qoida setTimeout(0) va Promise.then farqini tushuntiradi.",
        "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");\n// A, D, C, B"
      },
      {
        "title": "3. Mikrovazifa ichida yaratilgan mikrovazifa",
        "text": "Mikrovazifa ichida yangi mikrovazifa qo'shilsa, u ham shu navbatda bajariladi. Event loop keyingi makrotaskka o'tishdan oldin butun mikrovazifa navbatini tugatadi.",
        "code": "Promise.resolve().then(() => {\n  console.log(\"birinchi\");\n  Promise.resolve().then(() => console.log(\"ikkinchi\"));\n});\nsetTimeout(() => console.log(\"uchinchi\"), 0);\n// birinchi, ikkinchi, uchinchi"
      },
      {
        "title": "4. setTimeout(0) 0 ms degani emas",
        "text": "0 — minimal kutish vaqti, lekin callback darhol bajarilmaydi: u makrovazifa navbatiga qo'yiladi va stack bo'shaganda, mikrovazifalardan keyin olinadi.",
        "code": "setTimeout(() => console.log(1), 0);\nconsole.log(2);\n// 2, keyin 1"
      },
      {
        "title": "5. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Promise constructorining ichki executor qismi sinxron; then callbacki keyin. Microtask ichida yangi microtask qo‘shilsa, navbat davom etadi va juda ko‘payib renderni ushlab qolishi mumkin. Render har bir logdan keyin bo‘lmaydi. Task va animatsiya/Node fazalari uchun bitta sodda qoida barcha muhitlarni to‘liq tasvirlamaydi."
      },
      {
        "title": "6. Kichik amaliy loyiha",
        "text": "console, Promise.then, queueMicrotask va setTimeout aralashgan 4–6 satr yozing. Natijani stack, microtask va task ustunlariga ajratib bashorat qiling."
      }
    ],
    "takeaway": "Event loop — bajarilishga tayyor ishlarni navbat bilan tanlash mexanizmi.\nPromise constructorining ichki executor qismi sinxron; then callbacki keyin.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: console, Promise.then, queueMicrotask va setTimeout aralashgan 4–6 satr yozing. Natijani stack, microtask va task ustunlariga ajratib bashorat qiling.\n\nQo‘shimcha savollar:\n1) console.log(\"A\"); setTimeout(()=>console.log(\"B\"),0); Promise.resolve().then(()=>console.log(\"C\")); console.log(\"D\") tartibi?\n2) Nega setTimeout(0) darhol ishlamaydi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "(async () => {\n  const tayyor = new Promise(resolve => setTimeout(() => { console.log(\"timer\"); resolve(); }, 0));\n  Promise.resolve().then(() => console.log(\"promise\"));\n  queueMicrotask(() => console.log(\"micro\"));\n  console.log(\"sync\");\n  await tayyor;\n})();",
    "exerciseExpected": [
      "sync",
      "promise",
      "micro",
      "timer"
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. \"sync\" — joriy kod birinchi\n2. \"promise\" — birinchi qo‘yilgan microtask\n3. \"micro\" — keyingi microtask\n4. \"timer\" — keyingi task\n\nLoyihani yechish yo‘li: Avval barcha sinxron satrlarni yozing. Ular ishlayotganda navbatga nima qo‘shilganini belgilang. So‘ng microtask larni qo‘shilish tartibida bo‘shating, keyin taymer taskini oling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"
      }
    ],
    "learningGuide": {
      "goal": "Sinxron kod, microtask va taymer taskini navbatlarga ajratib natija tartibini tushuntirasiz.",
      "prerequisites": [
        "async-timers",
        "promises-async"
      ],
      "terms": [
        {
          "term": "Call stack",
          "meaning": "Hozir bajarilayotgan chaqirishlar tuzilmasi."
        },
        {
          "term": "Task",
          "meaning": "Taymer callbacki kabi alohida bajarish ishi."
        },
        {
          "term": "Microtask",
          "meaning": "Promise.then kabi, belgilangan checkpointda navbati bo‘shatiladigan ish."
        },
        {
          "term": "Render",
          "meaning": "Brauzer sahifaning ko‘rinishini hisoblab chizishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Promise callbacki n ni yangilagach 1 ni o‘qing.",
        "brokenCode": "let n = 0;\nPromise.resolve().then(() => { n = 1; });\nconsole.log(n);",
        "fixedCode": "(async () => {\n  let n = 0;\n  await Promise.resolve().then(() => { n = 1; });\n  console.log(n);\n})();",
        "expectedOutput": [
          1
        ],
        "explanation": "Callback keyin bajariladi. Natijaga bog‘liq davom await dan keyin yozildi. Bu barcha boshqa kodni muzlatmaydi.",
        "runtime": "async"
      },
      "write": {
        "task": "console, Promise.then, queueMicrotask va setTimeout aralashgan 4–6 satr yozing. Natijani stack, microtask va task ustunlariga ajratib bashorat qiling.",
        "criteria": [
          "A, D, C, B misolida har log to‘g‘ri navbatga yoziladi.",
          "Promise executorining sinxron qismi ajratiladi.",
          "setTimeout(0) darhol callback bajarishi deb tushuntirilmaydi."
        ],
        "hint": "Avval barcha sinxron satrlarni yozing. Ular ishlayotganda navbatga nima qo‘shilganini belgilang. So‘ng microtask larni qo‘shilish tartibida bo‘shating, keyin taymer taskini oling."
      }
    }
  },
  {
    "id": "promise-combinators",
    "title": "Promise kombinatorlari: all, race, allSettled, any",
    "question": "Promise.all, race, allSettled va any farqi nima? Qaysi birini qachon ishlatish kerak?",
    "explanation": "Bir nechta Promise bilan ishlaganda qaysi natija kerakligini tanlaymiz: all — hammasi muvaffaqiyatli, allSettled — hammasining holati, race — birinchi yakun, any — birinchi muvaffaqiyat. Bu metodlar ishlarni o‘z-o‘zidan boshlamaydi; ularga allaqachon yaratilgan Promise lar ham berilishi mumkin.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "all natijani kirish tartibida beradi. allSettled rad etilgan ish sababini ham saqlaydi; bittasi xato bo‘lgani uchun qolgan natijalar yo‘qolmaydi.",
        "code": "(async () => {\n  console.log(await Promise.all([Promise.resolve(1), Promise.resolve(2)]));\n  const r = await Promise.allSettled([Promise.resolve(\"ok\"), Promise.reject(\"xato\")]);\n  console.log(r.map(x => x.status));\n})();",
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            "fulfilled",
            "rejected"
          ]
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [[1, 2], [\"fulfilled\", \"rejected\"]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Promise.all",
        "text": "Barchasi bajarilsa, natijalar massivini qaytaradi. Birortasi rad etilsa, darhol shu xato bilan rad etiladi.",
        "code": "console.log(await Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2)\n])); // [1, 2]\n\n// Promise.all([Promise.resolve(1), Promise.reject(\"xato\")])\n// → rad etiladi: \"xato\""
      },
      {
        "title": "3. Promise.race",
        "text": "Birinchisi tugagan (bajarilgan yoki rad etilgan) natijani qaytaradi. Qolganlar kutilmaydi. Timeout bilan ishlatish uchun qulay.",
        "code": "const sekin = new Promise(r => setTimeout(() => r(\"sekin\"), 100));\nconst tez = new Promise(r => setTimeout(() => r(\"tez\"), 10));\nconsole.log(await Promise.race([sekin, tez])); // tez"
      },
      {
        "title": "4. Promise.allSettled",
        "text": "Yaroqli iterable dagi barcha ishlarning settlementini kutadi. Har bir ish rad etilishi umumiy natijani rad qilmaydi: status va value yoki reason qaytariladi. Iterable ni olishning o‘zi xato bersa, umumiy Promise rad etilishi mumkin.",
        "code": "console.log(await Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(\"xato\")\n]));\n// [{status:\"fulfilled\",value:1}, {status:\"rejected\",reason:\"xato\"}]"
      },
      {
        "title": "5. Promise.any",
        "text": "Birinchisi muvaffaqiyatli bajarilgan natijani qaytaradi. Hammasi rad etilsa, AggregateError beradi. race dan farqi: rad etishlarni e'tiborga olmaydi.",
        "code": "console.log(await Promise.any([\n  Promise.reject(\"birinchi xato\"),\n  Promise.resolve(\"muvaffaqiyat\")\n])); // muvaffaqiyat"
      },
      {
        "title": "6. Timeout namunasi",
        "text": "race bilan so‘rovga vaqt cheklovi qo‘yish mumkin: vaqt tugasa, rad etilgan Promise yutadi.",
        "code": "const timeout = new Promise((_, reject) =>\n  setTimeout(() => reject(new Error(\"vaqt tugadi\")), 1000)\n);\ntry {\n  await Promise.race([fetch(\"/api\"), timeout]);\n} catch (e) {\n  console.log(e.message); // vaqt tugadi bo'lishi mumkin\n}"
      },
      {
        "title": "7. Natija tartibi bajarilish tezligi emas",
        "text": "all natijalarni kirish tartibida yig‘adi. Natija tugagach boshqa ishlarni to‘xtatish kerak bo‘lsa API ning bekor qilish mexanizmini alohida qo‘llang.",
        "code": "(async () => {\n  const a = Promise.resolve(\"bir\");\n  const b = Promise.resolve(\"ikki\");\n  console.log(await Promise.all([b, a]));\n})();",
        "expectedOutput": [
          [
            "ikki",
            "bir"
          ]
        ],
        "exampleRuntime": "async"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "all/race qaytgani qolgan ishlarni avtomatik bekor qilmaydi. Timeoutni race bilan yutqazish fetch ni to‘xtatmaydi: AbortController kerak. all([]) bo‘sh massiv bilan fulfilled, any([]) AggregateError bilan rejected, race([]) esa pending qoladi. any natijasidagi errors tartibi kirish tartibiga mos."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Uchta mustaqil ishni allSettled bilan ishga tushiring. Muvaffaqiyatli qiymatlarni va xatolarni ikki ro‘yxatga ajrating. Boshqa variantda birinchi muvaffaqiyatni any bilan oling."
      }
    ],
    "takeaway": "Bir nechta Promise bilan ishlaganda qaysi natija kerakligini tanlaymiz: all — hammasi muvaffaqiyatli, allSettled — hammasining holati, race — birinchi yakun, any — birinchi muvaffaqiyat.\nall/race qaytgani qolgan ishlarni avtomatik bekor qilmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Uchta mustaqil ishni allSettled bilan ishga tushiring. Muvaffaqiyatli qiymatlarni va xatolarni ikki ro‘yxatga ajrating. Boshqa variantda birinchi muvaffaqiyatni any bilan oling.\n\nQo‘shimcha savollar:\n1) all va allSettled farqi?\n2) race va any farqi nima?\n3) Hammasi rad etilsa, any nima beradi?\n4) Timeout uchun qaysi kombinator ishlatiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "(async () => {\n  console.log(await Promise.all([]));\n  console.log(await Promise.any([Promise.reject(\"x\"), Promise.resolve(\"ok\")]));\n  try { await Promise.any([]); }\n  catch (e) { console.log(e.name); }\n})();",
    "exerciseExpected": [
      [],
      "ok",
      "AggregateError"
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. [] — kutadigan ish yo‘q\n2. \"ok\" — birinchi muvaffaqiyat tanlandi\n3. \"AggregateError\" — muvaffaqiyatli element yo‘q\n\nLoyihani yechish yo‘li: Natijalarni status === \"fulfilled\" bo‘yicha filter qiling, value ni oling. Rejected holatda reason dan xabar tayyorlang. Bo‘sh kirishni ham test qiling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
      }
    ],
    "learningGuide": {
      "goal": "all, allSettled, race va any ni talab qilingan natijaga qarab tanlaysiz.",
      "prerequisites": [
        "promises-async",
        "array-methods"
      ],
      "terms": [
        {
          "term": "Settlement",
          "meaning": "Promise fulfilled yoki rejected bilan yakunlanishi."
        },
        {
          "term": "AggregateError",
          "meaning": "Bir nechta xato sababini birga ifodalovchi xato obyekt turi."
        },
        {
          "term": "Parallel boshlash",
          "meaning": "Mustaqil ishlarni birining natijasini kutmasdan boshlash; CPU doim ko‘p oqimda ishlaydi degani emas."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Birinchi muvaffaqiyatli javob kerak, birinchi rad etilish emas.",
        "brokenCode": "(async () => {\n  try { console.log(await Promise.race([Promise.reject(\"xato\"), Promise.resolve(\"ok\")])); }\n  catch (e) { console.log(e); }\n})();",
        "fixedCode": "(async () => {\n  try { console.log(await Promise.any([Promise.reject(\"xato\"), Promise.resolve(\"ok\")])); }\n  catch (e) { console.log(e); }\n})();",
        "expectedOutput": [
          "ok"
        ],
        "explanation": "race birinchi yakunni oladi, any esa birinchi muvaffaqiyatni kutadi. Hammasi rad etilsa any ham AggregateError bilan rad etiladi.",
        "runtime": "async"
      },
      "write": {
        "task": "Uchta mustaqil ishni allSettled bilan ishga tushiring. Muvaffaqiyatli qiymatlarni va xatolarni ikki ro‘yxatga ajrating. Boshqa variantda birinchi muvaffaqiyatni any bilan oling.",
        "criteria": [
          "allSettled natijasidan muvaffaqiyatlar va xatolar alohida olinadi.",
          "any birinchi muvaffaqiyatni qaytaradi.",
          "Bo‘sh ro‘yxatning all/any/race farqlari aytiladi."
        ],
        "hint": "Natijalarni status === \"fulfilled\" bo‘yicha filter qiling, value ni oling. Rejected holatda reason dan xabar tayyorlang. Bo‘sh kirishni ham test qiling."
      }
    }
  },
  {
    "id": "dynamic-import-async-iteration",
    "title": "Dynamic import va async iteratsiya",
    "question": "import() nima? for await...of qanday ishlaydi?",
    "explanation": "Dynamic import kerak bo‘lganda modulni yuklaydi va Promise qaytaradi. Async iterator esa vaqt davomida keladigan qiymatlarni bitta-bitta beradi. Ikkalasi async/await bilan o‘qiladi, lekin biri fayl yuklash, ikkinchisi ketma-ketlikni iste’mol qilishdir.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "async function* qiymatlarni yield qiladi. for await har next natijasini kutadi. Bu yerda to‘plangan massiv 1 va 2 bo‘ladi. Dynamic import misollari alohida fayllarni talab qiladi.",
        "code": "(async () => {\n  async function* sonlar() {\n    yield 1;\n    yield await Promise.resolve(2);\n  }\n  const r = [];\n  for await (const n of sonlar()) r.push(n);\n  console.log(r);\n})();",
        "expectedOutput": [
          [
            1,
            2
          ]
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [[1, 2]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Dynamic import",
        "text": "import(\"./modul.js\") chaqirilganda modul yuklanadi va Promise qaytaradi. Kodning faqat kerakli qismida yuklash (lazy loading) uchun ishlatiladi.",
        "code": "async function yukla() {\n  const modul = await import(\"./math.js\");\n  console.log(modul.yig(1, 2));\n}\nyukla();\n\n// yoki:\nimport(\"./math.js\").then(m => console.log(m.PI));"
      },
      {
        "title": "3. Nega foydali?",
        "text": "Katta modullarni dastlab yuklamay, faqat foydalanuvchi kerak qilganda olish: dastlabki yuklanish tezlashadi. Shartli yuklash ham mumkin.",
        "code": "if (kerak) {\n  const { ishla } = await import(\"./kattamodul.js\");\n  ishla();\n}"
      },
      {
        "title": "4. Async generator",
        "text": "async function* bilan asinxron generator yaratiladi. yield bilan qiymat beriladi, lekin await ham ishlatish mumkin.",
        "code": "async function* sonlar() {\n  yield 1;\n  await new Promise(r => setTimeout(r, 100));\n  yield 2;\n}\nconst g = sonlar();\nconsole.log(await g.next()); // { value: 1, done: false }"
      },
      {
        "title": "5. for await...of",
        "text": "Asinxron iteratorni ketma-ket o‘qish uchun. Har qadam Promise bajarilishini kutadi. Oddiy for...of asinxron iteratorni to‘g‘ri o‘qiy olmaydi.",
        "code": "async function* ketma() {\n  yield Promise.resolve(1);\n  yield Promise.resolve(2);\n}\nfor await (const qiymat of ketma()) {\n  console.log(qiymat); // 1, keyin 2\n}"
      },
      {
        "title": "6. Amaliy: fayl oqimi",
        "text": "Node.js da oqimlar (stream) va brauzerda katta ma’lumotlar bilan ishlashda for await...of qulay.",
        "code": "// for await (const bolak of readStream) {\n//   ishla(bolak);\n// }"
      },
      {
        "title": "7. Dynamic importning mustaqil fayl misoli",
        "text": "Quyidagi ikki faylni yarating va node main.mjs bilan ishga tushiring. Brauzerda esa module script va mahalliy HTTP server kerak.",
        "code": "// math.mjs\nexport default (a, b) => a + b;\n\n// main.mjs\nconst modul = await import(\"./math.mjs\");\nconsole.log(modul.default(2, 3)); // 5"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "import() rad etilishi mumkin, shuning uchun catch kerak. Qaytgan obyekt modul namespace i, default eksport .default orqali. for await oddiy iterable ni ham o‘qishi mumkin. break iteratorning return tozalash yo‘lini chaqirishi mumkin; generator resurslarini finally da tozalang. for await avval boshlanib bo‘lgan barcha Promise larni ketma-ket boshlatadi degani emas."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Async generator bilan 1 dan 3 gacha qiymat bering va for await bilan yig‘ing. Keyin tugma bosilganda alohida math.mjs modulini import qiladigan sahifa yarating."
      }
    ],
    "takeaway": "Dynamic import kerak bo‘lganda modulni yuklaydi va Promise qaytaradi.\nimport() rad etilishi mumkin, shuning uchun catch kerak.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Async generator bilan 1 dan 3 gacha qiymat bering va for await bilan yig‘ing. Keyin tugma bosilganda alohida math.mjs modulini import qiladigan sahifa yarating.\n\nQo‘shimcha savollar:\n1) import() va oddiy import farqi?\n2) import() nima qaytaradi?\n3) for await...of qachon kerak?\n4) async function* nima yaratadi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "(async () => {\n  async function* g() { yield 3; yield 4; }\n  const it = g();\n  console.log((await it.next()).value);\n  console.log((await it.next()).value);\n  console.log((await it.next()).done);\n})();",
    "exerciseExpected": [
      3,
      4,
      true
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. 3 — birinchi yield\n2. 4 — ikkinchi yield\n3. true — generator tugadi\n\nLoyihani yechish yo‘li: Generator next natijalaridagi done qiymatini kuzating. import xatosini try/catch bilan tuting; tugmani yuklanish davomida boshqaring. Modul yo‘li va fayl kengaytmasini aniq yozing.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of"
      }
    ],
    "learningGuide": {
      "goal": "Kerakli modulni keyin yuklaysiz va asinxron qiymatlar ketma-ketligini o‘qiysiz.",
      "prerequisites": [
        "modules",
        "promises-async",
        "loops"
      ],
      "terms": [
        {
          "term": "Iterator",
          "meaning": "next() orqali keyingi value va done holatini beradigan obyekt."
        },
        {
          "term": "Generator",
          "meaning": "yield bilan to‘xtab-davom etadigan ketma-ketlik yaratuvchi funksiya."
        },
        {
          "term": "Async iterator",
          "meaning": "Keyingi qadam natijasi Promise orqali keladigan iterator."
        },
        {
          "term": "Lazy loading",
          "meaning": "Kod yoki ma’lumotni kerak paytida yuklash."
        }
      ],
      "warmup": {
        "title": "Async generatordan oldin: oddiy generator",
        "text": "function* va yield ketma-ketlik beradi. g() tana natijasi emas, iterator yaratadi. next() keyingi qadamni oladi; done true bo‘lsa tugagan. To‘liq iterator darsi keyin keladi.",
        "code": "function* g() { yield 1; }\nconst it = g();\nconsole.log(it.next().value);\nconsole.log(it.next().done);",
        "expectedOutput": [
          1,
          true
        ],
        "explanation": "Birinchi next 1 ni beradi. Ikkinchi next da yield qolmagani uchun done true. Async variantda shunday qadamlarni await bilan kutamiz.",
        "runtime": "javascript"
      }
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Async generatorning ikkala qiymatini yig‘ing. Oddiy for...of nega mos emas?",
        "brokenCode": "(async () => {\n  async function* g() { yield 1; yield 2; }\n  const out = [];\n  for (const n of g()) out.push(n);\n  console.log(out);\n})();",
        "fixedCode": "(async () => {\n  async function* g() { yield 1; yield 2; }\n  const out = [];\n  for await (const n of g()) out.push(n);\n  console.log(out);\n})();",
        "expectedOutput": [
          [
            1,
            2
          ]
        ],
        "explanation": "Async iterator qadamlarini kutish kerak. for await...of next natijalarini kutib qiymatlarni ketma-ket beradi.",
        "runtime": "async"
      },
      "write": {
        "task": "Async generator bilan 1 dan 3 gacha qiymat bering va for await bilan yig‘ing. Keyin tugma bosilganda alohida math.mjs modulini import qiladigan sahifa yarating.",
        "criteria": [
          "Async generator 1,2,3 ni tartib bilan beradi.",
          "Tugma importni kerak paytda boshlaydi.",
          "Yuklash xatosi va modulning default eksporti alohida boshqariladi."
        ],
        "hint": "Generator next natijalaridagi done qiymatini kuzating. import xatosini try/catch bilan tuting; tugmani yuklanish davomida boshqaring. Modul yo‘li va fayl kengaytmasini aniq yozing."
      }
    }
  },
  {
    "id": "debounce-throttle",
    "title": "Debounce va Throttle: noldan",
    "question": "Debounce va throttle farqi nima? Qayerda ishlatiladi?",
    "explanation": "Debounce — chaqiruvlar to‘xtagach oxirgi ishni bajarish. Throttle — vaqt oralig‘ida bajarish tezligini cheklash. Qidiruvga yozishda debounce, tez-tez scroll/resize ishlarida throttle qulay. Leading/trailing qoidalari tanlangan implementationga bog‘liq.\n\nAsinxron misollarni alohida ishga tushiring va callback natijalarini kuting. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Har chaqirish oldingi taymerni bekor qiladi. Oxirgi argument abc saqlanib, tanaffusdan so‘ng bitta callback ishlaydi. function wrapperning this qiymati apply orqali saqlanadi.",
        "code": "(async () => {\n  function debounce(fn, ms) {\n    let timer;\n    return function (...args) {\n      clearTimeout(timer);\n      timer = setTimeout(() => fn.apply(this, args), ms);\n    };\n  }\n  const qidir = debounce(x => console.log(x), 5);\n  qidir(\"a\"); qidir(\"ab\"); qidir(\"abc\");\n  await new Promise(resolve => setTimeout(resolve, 20));\n})();",
        "expectedOutput": [
          "abc"
        ],
        "exampleRuntime": "async",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"abc\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Muammo",
        "text": "Foydalanuvchi har belgi yozganda yoki har scroll pikselida funksiya chaqirilsa, juda ko‘p ish bajariladi. Buni cheklash kerak.",
        "code": "// yomon: har harfda so'rov yuboriladi\ninput.addEventListener(\"input\", () => {\n  fetch(\"/qidir?x=\" + input.value);\n});"
      },
      {
        "title": "3. Debounce",
        "text": "Har chaqiruvda oldingi timer bekor qilinadi va yangisi qo‘yiladi. Faqat foydalanuvchi to‘xtagandan keyin bajariladi. setTimeout + clearTimeout asosida ishlaydi.",
        "code": "function debounce(fn, ms) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), ms);\n  };\n}\n\nconst qidir = debounce((x) => console.log(\"so'rov:\", x), 300);\nqidir(\"a\"); qidir(\"ab\"); qidir(\"abc\");\n// faqat: so'rov: abc"
      },
      {
        "title": "4. Throttle",
        "text": "Har bir vaqt oralig‘ida bir marta bajariladi. Oraliq ichidagi qo‘shimcha chaqiruvlar e’tiborga olinmaydi. Scroll va resize hodisalarida ishlatiladi.",
        "code": "function throttle(fn, ms) {\n  let oxirgi = -Infinity;\n  return function (...args) {\n    const hozir = Date.now();\n    if (hozir - oxirgi >= ms) {\n      oxirgi = hozir;\n      fn(...args);\n    }\n  };\n}\n\nconst harakat = throttle(() => console.log(\"scroll\"), 200);"
      },
      {
        "title": "5. Asosiy farq",
        "text": "Debounce — oxirgi chaqiruvdan keyin kutadi. Throttle — birinchi chaqiruvda bajaradi va keyingilarni vaqt oralig‘igacha o‘tkazadi. Qidirish uchun debounce, scroll uchun throttle.",
        "code": "// tez-tez chaqirish: a, b, c (har 50ms)\n// debounce(300): faqat oxirgisidan 300ms keyin\n// throttle(200): 0ms da bir, 200ms da bir"
      },
      {
        "title": "6. Amaliy misol",
        "text": "Kod o‘qiyotganda closure ichidagi timer/oxirgi o‘zgaruvchisiga e’tibor ber: u chaqiruvlar orasida saqlanadi.",
        "code": "const input = document.querySelector(\"#qidir\");\ninput.addEventListener(\"input\", debounce((e) => {\n  console.log(e.target.value);\n}, 400));"
      },
      {
        "title": "7. Cancel qila oladigan debounce",
        "text": "Ushbu trailing variantda cancel kutilayotgan ishni olib tashlaydi. Wrapperni har hodisada emas, bir marta tuzing.",
        "code": "function debounce(fn, ms) {\n  let timer;\n  function wrapped(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), ms);\n  }\n  wrapped.cancel = () => clearTimeout(timer);\n  return wrapped;\n}"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Har hodisada debounce(fn, ms) ni qayta yaratish alohida taymerlar ochadi: wrapperni bir marta yarating. Hodisa obyektini kechroq o‘qish o‘rniga kerakli value ni vaqtida olish qulay. Eski tarmoq javobi yangisini bosib ketishi mumkin; debounce so‘rovlar race ini o‘zi hal qilmaydi. Cancel, leading va trailing talabini oldin belgilang."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Qidiruv maydoniga debounce qo‘shing. Chaqiruv sonini ko‘rsating, sahifa yopilganda taymerni cancel qiling. Throttle uchun birinchi va oxirgi hodisa talabi qandayligini yozing."
      }
    ],
    "takeaway": "Debounce — chaqiruvlar to‘xtagach oxirgi ishni bajarish.\nHar hodisada debounce(fn, ms) ni qayta yaratish alohida taymerlar ochadi: wrapperni bir marta yarating.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Qidiruv maydoniga debounce qo‘shing. Chaqiruv sonini ko‘rsating, sahifa yopilganda taymerni cancel qiling. Throttle uchun birinchi va oxirgi hodisa talabi qandayligini yozing.\n\nQo‘shimcha savollar:\n1) Qidirish maydoni uchun qaysi usul yaxshi?\n2) Scroll hodisasi uchun-chi?\n3) Debounce da nima uchun clearTimeout kerak?\n4) Throttle va debounce asosiy farqi nima?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function throttle(fn, ms, now) {\n  let old = -Infinity;\n  return (...args) => {\n    const t = now();\n    if (t - old >= ms) { old = t; fn(...args); }\n  };\n}\nlet vaqt = 0;\nconst r = [];\nconst f = throttle(x => r.push(x), 100, () => vaqt);\nf(\"A\"); vaqt = 20; f(\"B\"); vaqt = 100; f(\"C\");\nconsole.log(r);",
    "exerciseExpected": [
      [
        "A",
        "C"
      ]
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. [\"A\", \"C\"] — birinchi leading chaqiruv va 100 ms ga yetgandagi keyingi chaqiruv olindi\n\nLoyihani yechish yo‘li: const search = debounce(qidirish,300) ni bir marta tuzing. Input listenerida search(input.value) chaqiring. Cancel uchun timer ni yopuvchi closure metodini bering. So‘rovlar uchun AbortController yoki requestId ishlating.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Debounce"
      }
    ],
    "learningGuide": {
      "goal": "Tez-tez hodisalar uchun debounce yoki throttle ni tanlab, wrapperni bir marta yaratasiz.",
      "prerequisites": [
        "closures",
        "async-timers",
        "events-advanced"
      ],
      "terms": [
        {
          "term": "Debounce",
          "meaning": "Chaqiruvlar to‘xtagach ishni bajarish usuli."
        },
        {
          "term": "Throttle",
          "meaning": "Ishning vaqt oralig‘idagi tezligini cheklash usuli."
        },
        {
          "term": "Leading / trailing",
          "meaning": "Oraliq boshida yoki oxirida bajarish siyosati."
        },
        {
          "term": "Race",
          "meaning": "Bir nechta asinxron javob noto‘g‘ri tartibda kelib, eskisi yangisini bosishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Tez ketma-ket a va ab chaqirishdan faqat ab qolsin.",
        "brokenCode": "function debounce(fn, ms) { let t; return x => { clearTimeout(t); t=setTimeout(() => fn(x),ms); }; }\ndebounce(console.log, 5)(\"a\");\ndebounce(console.log, 5)(\"ab\");",
        "fixedCode": "(async () => {\n  function debounce(fn, ms) { let t; return x => { clearTimeout(t); t=setTimeout(() => fn(x),ms); }; }\n  const qidir = debounce(x => console.log(x), 5);\n  qidir(\"a\"); qidir(\"ab\");\n  await new Promise(resolve => setTimeout(resolve, 20));\n})();",
        "expectedOutput": [
          "ab"
        ],
        "explanation": "Bitta wrapper bitta closure taymerini saqlaydi. Har safar debounce yaratish oldingi taymerni ko‘rmaydigan yangi closure ochadi.",
        "runtime": "async"
      },
      "write": {
        "task": "Qidiruv maydoniga debounce qo‘shing. Chaqiruv sonini ko‘rsating, sahifa yopilganda taymerni cancel qiling. Throttle uchun birinchi va oxirgi hodisa talabi qandayligini yozing.",
        "criteria": [
          "Bir tez yozish ketma-ketligidan faqat oxirgi qidiruv bajariladi.",
          "Wrapper har input hodisasida yangidan yaratilmaydi.",
          "Cancel kutilayotgan taymerni olib tashlaydi."
        ],
        "hint": "const search = debounce(qidirish,300) ni bir marta tuzing. Input listenerida search(input.value) chaqiring. Cancel uchun timer ni yopuvchi closure metodini bering. So‘rovlar uchun AbortController yoki requestId ishlating."
      }
    }
  },
  {
    "id": "prototypes",
    "title": "Prototype va prototip zanjiri: noldan",
    "question": "Har bir obyekt qayerdan metod oladi? __proto__, prototype va prototip zanjiri nima?",
    "explanation": "Prototype — obyekt o‘zida topmagan xususiyatni qidiradigan keyingi obyekt. Bu kodni va metodlarni ulashish mexanizmi. [[Prototype]] ichki bog‘lanish, konstruktorning .prototype xususiyati esa boshqa tushuncha; new ularni bog‘laydi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "bola o‘zida salom topmaydi va ota dan oladi. Metod meros bo‘lgani uchun hasOwn false, prototip bog‘lanishi esa ota ga teng.",
        "code": "const ota = { salom() { return \"Salom\"; } };\nconst bola = Object.create(ota);\nconsole.log(bola.salom());\nconsole.log(Object.hasOwn(bola, \"salom\"));\nconsole.log(Object.getPrototypeOf(bola) === ota);",
        "expectedOutput": [
          "Salom",
          false,
          true
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Salom\", false, true]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Prototip zanjiri",
        "text": "Obyektda xususiyat topilmasa, JavaScript uning prototipida qidiradi, u yerda yo‘q bo‘lsa yana yuqoriga chiqadi. Zanjir oxirida null turadi. Shuning uchun oddiy obyekt toString metodiga ega bo‘ladi.",
        "code": "const o = {};\nconsole.log(o.toString()); // \"[object Object]\"\nconsole.log(Object.getPrototypeOf(o) === Object.prototype); // true\nconsole.log(Object.getPrototypeOf(Object.prototype)); // null",
        "note": "__proto__ eski usul; zamonaviy kodda Object.getPrototypeOf(o) ishlatiladi."
      },
      {
        "title": "3. Funksiya va prototype",
        "text": "Oddiy konstruktor function F() o‘z prototype obyektiga ega. new F yaratgan instance odatda shu obyektga bog‘lanadi. Ammo hamma funksiyada .prototype yoki new imkoniyati bor degani emas: arrow konstruktor emas.",
        "code": "function F() {}\nconst o = new F();\nconsole.log(Object.getPrototypeOf(o) === F.prototype); // true"
      },
      {
        "title": "4. Metodlarni prototype ga qo‘yish",
        "text": "Agar metodni har bir obyekt ichiga yozsak, har biri uchun alohida nusxa yaratiladi. Prototype ga qo‘ysak, barcha obyektlar bitta metodni ulashadi.",
        "code": "function User(ism) {\n  this.ism = ism;\n}\nUser.prototype.salom = function () {\n  return \"Salom, \" + this.ism;\n};\n\nconst a = new User(\"Ali\");\nconst b = new User(\"Vali\");\nconsole.log(a.salom()); // Salom, Ali\nconsole.log(a.salom === b.salom); // true (bitta metod)"
      },
      {
        "title": "5. new operatori qanday ishlaydi",
        "text": "new F() to‘rt ish qiladi: yangi bo‘sh obyekt yaratadi; uning prototipini F.prototype ga bog‘laydi; F ni this bilan chaqiradi; agar F obyekt qaytarmasa, yangi obyektni qaytaradi.",
        "code": "function F(x) {\n  this.x = x;\n}\nconst o = new F(5);\nconsole.log(o.x); // 5\nconsole.log(o instanceof F); // true",
        "note": "instanceof obyekt prototip zanjirida F.prototype borligini tekshiradi."
      },
      {
        "title": "6. Xususiyat yozish va prototip",
        "text": "Quyidagi oddiy writable data property misolida o.x=2 o‘z propertysini yaratib, meros x ni soyada qoldiradi. Umumiy holatda meros setter, non-writable descriptor yoki Proxy yozish xulqiga ta’sir qilishi mumkin.",
        "code": "function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log(o.x); // 1 (prototipdan)\no.x = 2;\nconsole.log(o.x); // 2 (o‘ziga yozildi)\nconsole.log(F.prototype.x); // 1 (prototip o‘zgarmadi)"
      },
      {
        "title": "7. hasOwn va zanjir",
        "text": "in operatori ham o‘z, ham prototip xususiyatlarini topadi. Object.hasOwn faqat obyektning o‘zidagini tekshiradi.",
        "code": "function F() {}\nF.prototype.x = 1;\nconst o = new F();\nconsole.log(\"x\" in o); // true\nconsole.log(Object.hasOwn(o, \"x\")); // false\nconsole.log(Object.hasOwn(o, \"toString\")); // false"
      },
      {
        "title": "8. Prototype metodi ichidagi this",
        "text": "Metod prototipdan topilgan bo‘lsa ham this uni chaqirayotgan qabul qiluvchi bo‘ladi. this doim prototip degani emas.",
        "code": "const ota = { ism() { return this.nom; } };\nconst bola = Object.create(ota);\nbola.nom = \"Ali\";\nconsole.log(bola.ism());",
        "expectedOutput": [
          "Ali"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Hamma funksiyada o‘z .prototype maydoni bo‘lmaydi: arrow odatda konstruktor emas. __proto__ o‘rniga Object.getPrototypeOf/Object.create ni o‘rganing. Yozish har doim oddiy own property yaratmaydi: meros setter, non-writable descriptor yoki Proxy ta’sir qilishi mumkin. Ichki built-in prototype larni o‘zgartirish umumiy kodga ta’sir qiladi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Bir salom metodini ikki User obyektiga prototype orqali ulashing. Metod reference i bir xil, ism qiymatlari esa mustaqil ekanini test qiling."
      }
    ],
    "takeaway": "Prototype — obyekt o‘zida topmagan xususiyatni qidiradigan keyingi obyekt.\nHamma funksiyada o‘z .prototype maydoni bo‘lmaydi: arrow odatda konstruktor emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Bir salom metodini ikki User obyektiga prototype orqali ulashing. Metod reference i bir xil, ism qiymatlari esa mustaqil ekanini test qiling.\n\nQo‘shimcha savollar:\n1) o.toString() qayerdan keldi?\n2) new F() qanday 4 ish qiladi?\n3) \"x\" in o va Object.hasOwn(o,\"x\") farqi?\n4) Prototype ga metod qo‘yish nega yaxshi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const ota = { x: 1 };\nconst bola = Object.create(ota);\nconsole.log(bola.x);\nconsole.log(Object.hasOwn(bola, \"x\"));\nbola.x = 2;\nconsole.log(bola.x);\nconsole.log(ota.x);",
    "exerciseExpected": [
      1,
      false,
      2,
      1
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — qidiruv prototipga chiqdi\n2. false — hali own maydon yo‘q\n3. 2 — oddiy writable misolda own maydon yaratildi\n4. 1 — ota o‘zgarmadi\n\nLoyihani yechish yo‘li: User.prototype.salom ni bir marta yarating, new User bilan ikki instance oling. a.salom === b.salom true, a.ism va b.ism o‘zgarishi esa mustaqil bo‘lsin.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain"
      }
    ],
    "learningGuide": {
      "goal": "Xususiyat qidiruvini obyekt va prototiplar bo‘yicha kuzatib, own property ni ajratasiz.",
      "prerequisites": [
        "objects-basics",
        "functions",
        "this-keyword"
      ],
      "terms": [
        {
          "term": "Prototype",
          "meaning": "Obyekt o‘zida topmagan xususiyatni qidiradigan keyingi obyekt."
        },
        {
          "term": "Konstruktor",
          "meaning": "new bilan instance yaratishda ishlatiladigan funksiya yoki class."
        },
        {
          "term": "Instance",
          "meaning": "Konstruktor/class orqali yaratilgan alohida obyekt."
        },
        {
          "term": "Zanjir",
          "meaning": "Keyingi prototiplar bo‘yicha null gacha davom etadigan qidiruv."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "x faqat prototipda. Obyektning o‘zida bormi degan savolga false kerak.",
        "brokenCode": "const ota = { x: 1 };\nconst bola = Object.create(ota);\nconsole.log(\"x\" in bola);",
        "fixedCode": "const ota = { x: 1 };\nconst bola = Object.create(ota);\nconsole.log(Object.hasOwn(bola, \"x\"));",
        "expectedOutput": [
          false
        ],
        "explanation": "in prototip zanjirini ham tekshiradi. Faqat own property kerak bo‘lsa Object.hasOwn mos.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Bir salom metodini ikki User obyektiga prototype orqali ulashing. Metod reference i bir xil, ism qiymatlari esa mustaqil ekanini test qiling.",
        "criteria": [
          "Ikki User ism holati mustaqil bo‘ladi.",
          "Ularning prototype metodi reference i bir xil bo‘ladi.",
          "in va Object.hasOwn farqi ko‘rsatiladi."
        ],
        "hint": "User.prototype.salom ni bir marta yarating, new User bilan ikki instance oling. a.salom === b.salom true, a.ism va b.ism o‘zgarishi esa mustaqil bo‘lsin."
      }
    }
  },
  {
    "id": "classes",
    "title": "Class va meros: noldan",
    "question": "class nima? constructor, metodlar, extends va super qanday ishlaydi?",
    "explanation": "Class obyektlar yaratish va umumiy metodlarni tartiblash sintaksisi. constructor yangi instance ni boshlang‘ich holatga keltiradi. new User(\"Ali\") yangi obyekt yaratib, this ni shu obyektga bog‘laydi. Class prototype mexanizmi ustida ishlaydi, lekin qo‘shimcha qoidalari bor.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "constructor har instance uchun ism yaratadi. salom instance prototype ida turadi va ikki obyekt bitta metodni ulashadi. Oddiy maydonlar har instance uchun alohida.",
        "code": "class User {\n  constructor(ism) { this.ism = ism; }\n  salom() { return \"Salom, \" + this.ism; }\n}\nconst a = new User(\"Ali\");\nconst b = new User(\"Vali\");\nconsole.log(a.salom());\nconsole.log(a.salom === b.salom);",
        "expectedOutput": [
          "Salom, Ali",
          true
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Salom, Ali\", true]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Oddiy class",
        "text": "class ichida constructor yoziladi: u new bilan obyekt yaratilganda chaqiriladi. this yangi obyektni ko‘rsatadi. Metodlar class ichida yozilsa, avtomatik prototype ga qo‘yiladi.",
        "code": "class User {\n  constructor(ism) {\n    this.ism = ism;\n  }\n  salom() {\n    return \"Salom, \" + this.ism;\n  }\n}\nconst u = new User(\"Ali\");\nconsole.log(u.salom()); // Salom, Ali\nconsole.log(typeof User); // \"function\""
      },
      {
        "title": "3. new bo‘lmasa xato",
        "text": "Class funksiyalardan farqli ravishda new bo‘lmasa chaqirilmaydi: TypeError chiqadi. Bu xatolardan saqlaydi.",
        "code": "class F {}\n// F(); // TypeError: Class constructor cannot be invoked without \"new\"\nconsole.log(new F() instanceof F); // true"
      },
      {
        "title": "4. extends va super",
        "text": "extends ota class bilan prototype zanjirini bog‘laydi. Derived classda o‘z constructoringizni yozsangiz, this dan foydalanishdan oldin super(...) kerak. Constructor yozilmasa standart forwarding constructor ishlaydi.",
        "code": "class Hayvon {\n  constructor(ism) { this.ism = ism; }\n  ovoz() { return \"...\"; }\n}\nclass It extends Hayvon {\n  constructor(ism) {\n    super(ism); // ota constructor chaqiruvi\n  }\n  ovoz() { return \"Hav-hav\"; }\n}\nconst it = new It(\"Rex\");\nconsole.log(it.ovoz()); // Hav-hav\nconsole.log(it.ism); // Rex"
      },
      {
        "title": "5. Metodni qayta yozish (override)",
        "text": "Bola classdagi metod ota classdagi metodni soyada qoldiradi. Ota metodini chaqirish uchun super.ovoz() ishlatiladi.",
        "code": "class Ota { salom() { return \"Ota\"; } }\nclass Bola extends Ota {\n  salom() { return super.salom() + \" va bola\"; }\n}\nconsole.log(new Bola().salom()); // \"Ota va bola\""
      },
      {
        "title": "6. Static metodlar",
        "text": "static bilan e’lon qilingan metod obyektga emas, classning o‘ziga tegishli. new bilan yaratilgan obyektda ko‘rinmaydi.",
        "code": "class F {\n  static yarat() { return new F(); }\n}\nconst o = F.yarat();\n// o.yarat(); // TypeError: metod yo'q"
      },
      {
        "title": "7. Getter va setter",
        "text": "get/set bilan xususiyatga murojaat qilishda funksiya chaqiriladi. get qiymat qaytaradi, set esa qiymat oladi. Tashqaridan oddiy xususiyat kabi ko‘rinadi.",
        "code": "class User {\n  constructor(ism) { this._ism = ism; }\n  get ism() { return this._ism.toUpperCase(); }\n  set ism(v) { this._ism = v; }\n}\nconst u = new User(\"ali\");\nconsole.log(u.ism); // ALI\nu.ism = \"vali\";\nconsole.log(u.ism); // VALI"
      },
      {
        "title": "8. Instance field bilan prototype metod farqi",
        "text": "Class tanasidagi x = 1 instance maydoni. method() prototype ga qo‘yiladi. arrow field har instance uchun funksiya yaratadi va lexical this ni instance bilan ushlab turishi mumkin.",
        "code": "class C {\n  x = 1;\n  method() { return this.x; }\n  arrow = () => this.x;\n}\nconst a = new C(), b = new C();\nconsole.log(a.method === b.method);\nconsole.log(a.arrow === b.arrow);",
        "expectedOutput": [
          true,
          false
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Classni new siz chaqirib bo‘lmaydi. extends ichida o‘z constructoringiz bo‘lsa this dan oldin super kerak; constructor yozilmasa standart konstruktor bor. Static metod instance ga emas classga tegishli. Class metodini ajratib chaqirish this ni yo‘qotishi mumkin. Meros har bir muammoga yechim emas: obyektlarni kompozitsiya qilish ham mumkin."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Mahsulot classidan ChegirmaliMahsulot yarating. Ota constructor nom va narxni saqlasin, bola foizni tekshirsin va yakuniy narx metodini override qilsin."
      }
    ],
    "takeaway": "Class obyektlar yaratish va umumiy metodlarni tartiblash sintaksisi.\nClassni new siz chaqirib bo‘lmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Mahsulot classidan ChegirmaliMahsulot yarating. Ota constructor nom va narxni saqlasin, bola foizni tekshirsin va yakuniy narx metodini override qilsin.\n\nQo‘shimcha savollar:\n1) class ni new bo‘lmasa chaqirsang nima bo‘ladi?\n2) super() nega shart?\n3) static metod obyektda ko‘rinadimi?\n4) get ism() qanday chaqiriladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "class A { constructor(n) { this.n = n; } qiymat() { return this.n; } }\nclass B extends A { qiymat() { return super.qiymat() * 2; } }\nconst b = new B(3);\nconsole.log(b.qiymat());\nconsole.log(b instanceof A);\nconsole.log(b instanceof B);\nconsole.log(typeof A);",
    "exerciseExpected": [
      6,
      true,
      true,
      "function"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 6 — super ota metodini chaqirdi\n2. true — prototype zanjirida A bor\n3. true — B instance\n4. \"function\" — class konstruktor funksiya turida\n\nLoyihani yechish yo‘li: super(nom,narx) chaqiring, foiz uchun 0–100 chegarani tekshiring, narx() ichida ota qiymatini olib foizni qo‘llang. Ruxsat etilgan kirish va chegaralarni test qiling.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
      }
    ],
    "learningGuide": {
      "goal": "Instance maydoni, prototype metodi, static metod va merosni ajratasiz.",
      "prerequisites": [
        "prototypes",
        "this-keyword"
      ],
      "terms": [
        {
          "term": "constructor",
          "meaning": "Yangi instance holatini boshlaydigan maxsus metod."
        },
        {
          "term": "extends",
          "meaning": "Bola classni ota class bilan bog‘lash sintaksisi."
        },
        {
          "term": "super",
          "meaning": "Ota constructor yoki metodiga murojaat vositasi."
        },
        {
          "term": "Override",
          "meaning": "Bolada ota metodining shu nomli yangi xulqini berish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Bola constructorda this dan oldin nima bajarilishi kerak?",
        "brokenCode": "class A { constructor(n) { this.n=n; } }\nclass B extends A { constructor(n) { this.ikki=n*2; super(n); } }\nconsole.log(new B(3).ikki);",
        "fixedCode": "class A { constructor(n) { this.n=n; } }\nclass B extends A { constructor(n) { super(n); this.ikki=n*2; } }\nconsole.log(new B(3).ikki);",
        "expectedOutput": [
          6
        ],
        "explanation": "Derived constructorda this ni ishlatishdan oldin super chaqiriladi. Ota constructor boshlang‘ich holatni yaratdi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Mahsulot classidan ChegirmaliMahsulot yarating. Ota constructor nom va narxni saqlasin, bola foizni tekshirsin va yakuniy narx metodini override qilsin.",
        "criteria": [
          "Bola constructor this dan oldin super chaqiradi.",
          "Foiz chegarasi tekshiriladi.",
          "Override natijasi ota qiymati va foizga mos hisoblanadi."
        ],
        "hint": "super(nom,narx) chaqiring, foiz uchun 0–100 chegarani tekshiring, narx() ichida ota qiymatini olib foizni qo‘llang. Ruxsat etilgan kirish va chegaralarni test qiling."
      }
    }
  },
  {
    "id": "class-private",
    "title": "Getter, setter va private maydonlar (#)",
    "question": "Obyekt ichki holatini qanday boshqaramiz?",
    "explanation": "Getter xususiyatni o‘qishda ishlaydigan metod; setter qiymat berishda ishlaydi. #maydon classning tashqaridan to‘g‘ridan-to‘g‘ri ochilmaydigan ichki holati. _nom esa faqat kelishuv bo‘lib, til darajasida private emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "qiymat=5 setterga boradi va tekshiruvdan keyin ichki #n yangilanadi. h.qiymat getter orqali 5 beradi. \"#n\" string kaliti esa private maydon emas.",
        "code": "class Hisob {\n  #n = 0;\n  get qiymat() { return this.#n; }\n  set qiymat(v) {\n    if (!Number.isFinite(v) || v < 0) throw new RangeError(\"Noto‘g‘ri\");\n    this.#n = v;\n  }\n}\nconst h = new Hisob();\nh.qiymat = 5;\nconsole.log(h.qiymat);\nconsole.log(h[\"#n\"]);",
        "expectedOutput": [
          5,
          {
            "$undefined": true
          }
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [5, undefined]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Getter: xususiyat kabi o‘qish",
        "text": "get nomidan keyin funksiya tanasi yoziladi, lekin uni o‘qishda () ishlatilmaydi. Natija ichki qiymatlardan hisoblanishi mumkin.",
        "code": "class Odam {\n  constructor(ism, familiya) {\n    this.ism = ism;\n    this.familiya = familiya;\n  }\n  get toliqIsm() {\n    return `${this.ism} ${this.familiya}`;\n  }\n}\nconst odam = new Odam(\"Ali\", \"Valiyev\");\nconsole.log(odam.toliqIsm); // Ali Valiyev"
      },
      {
        "title": "3. Private maydon",
        "text": "Maydon class tanasida # bilan e’lon qilinadi. Class metodlari uni this.#nom bilan ishlatishi mumkin. Tashqaridan yozishga urinish sintaksis xatosi bo‘ladi.",
        "code": "class Hisob {\n  #balans = 0;\n  get balans() { return this.#balans; }\n}\nconst hisob = new Hisob();\nconsole.log(hisob.balans); // 0\n// console.log(hisob.#balans); // SyntaxError"
      },
      {
        "title": "4. Setter bilan tekshirish",
        "text": "set bitta qiymat qabul qiladi. Ichki qiymatni yozishdan oldin talablarni tekshiramiz. Getter va setter uchun bir xil ochiq nomdan foydalanish mumkin.",
        "code": "class Hamyon {\n  #pul = 0;\n  get pul() { return this.#pul; }\n  set pul(qiymat) {\n    if (!Number.isFinite(qiymat) || qiymat < 0) {\n      throw new Error(\"Musbat son yoki 0 kiriting\");\n    }\n    this.#pul = qiymat;\n  }\n}\nconst h = new Hamyon();\nh.pul = 50;\nconsole.log(h.pul); // 50",
        "note": "Setter ichida this.pul = qiymat yozmang: u o‘zini qayta-qayta chaqiradi. Bu misolda ichki #pul ga yoziladi."
      },
      {
        "title": "5. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Getterga () qo‘yilmaydi. Setter o‘z ochiq nomiga qayta yozsa cheksiz rekursiya bo‘lishi mumkin; ichki maydonga yozing. Private maydonga noto‘g‘ri instance yoki Proxy orqali murojaat TypeError berishi mumkin. #maydonni bola class bevosita o‘qiy olmaydi; ota taqdim etgan metoddan foydalanadi."
      },
      {
        "title": "6. Kichik amaliy loyiha",
        "text": "Harorat classi yozing: Selsiy private maydonda bo‘lsin, setter chekli sonni qabul qilsin. Fahrenheit getter hisoblasin. Qayta qiymat berganda getter yangilansin."
      }
    ],
    "takeaway": "Getter xususiyatni o‘qishda ishlaydigan metod; setter qiymat berishda ishlaydi.\nGetterga () qo‘yilmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Harorat classi yozing: Selsiy private maydonda bo‘lsin, setter chekli sonni qabul qilsin. Fahrenheit getter hisoblasin. Qayta qiymat berganda getter yangilansin.\n\nQo‘shimcha savollar:\nHarorat classini yarating. #c maydonini getter/setter orqali o‘qing va yangilang. Setter faqat chekli sonni qabul qilsin, get fahrenheit esa Selsiydan Farengeytga hisoblasin.",
    "resources": [
      {
        "title": "MDN: private elementlar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "class C {\n  #x = 2;\n  get x() { return this.#x; }\n  set x(v) { this.#x = v; }\n}\nconst c = new C();\nconsole.log(c.x);\nc.x = 8;\nconsole.log(c.x);\nconsole.log(Object.keys(c));",
    "exerciseExpected": [
      2,
      8,
      []
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — getter private qiymatni oldi\n2. 8 — setter private qiymatni o‘zgartirdi\n3. [] — private maydon enumerable ochiq kalit emas\n\nLoyihani yechish yo‘li: get fahrenheit() { return this.#c * 9 / 5 + 32; }. set c(v) Number.isFinite bilan tekshirsin. Tashqi kodga faqat kerakli ochiq interfeysni bering.",
    "learningGuide": {
      "goal": "Getter/setter bilan tekshiriladigan ochiq interfeys va yashirin ichki maydon yaratasiz.",
      "prerequisites": [
        "classes",
        "errors-try-catch"
      ],
      "terms": [
        {
          "term": "Getter",
          "meaning": "Xususiyat o‘qilganda natija hisoblaydigan metod."
        },
        {
          "term": "Setter",
          "meaning": "Xususiyatga qiymat yozilganda uni qabul qiladigan metod."
        },
        {
          "term": "Private maydon",
          "meaning": "Class ichida e’lon qilinadigan # bilan boshlangan yopiq maydon."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Setter o‘zini qayta-qayta chaqirmasligi kerak. Ichki private maydon yarating.",
        "brokenCode": "class C { set x(v) { this.x = v; } }\nconst c = new C(); c.x=2;",
        "fixedCode": "class C {\n  #x = 0;\n  set x(v) { this.#x=v; }\n  get x() { return this.#x; }\n}\nconst c = new C(); c.x=2; console.log(c.x);",
        "expectedOutput": [
          2
        ],
        "explanation": "this.x ga setter ichida yozish yana o‘sha setterni chaqiradi. #x ichki qiymatni alohida saqlaydi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Harorat classi yozing: Selsiy private maydonda bo‘lsin, setter chekli sonni qabul qilsin. Fahrenheit getter hisoblasin. Qayta qiymat berganda getter yangilansin.",
        "criteria": [
          "0°C uchun 32°F olinadi.",
          "Selsiy yangilanganda Fahrenheit getter yangilanadi.",
          "NaN yoki son bo‘lmagan qiymat setter tomonidan rad etiladi."
        ],
        "hint": "get fahrenheit() { return this.#c * 9 / 5 + 32; }. set c(v) Number.isFinite bilan tekshirsin. Tashqi kodga faqat kerakli ochiq interfeysni bering."
      }
    }
  },
  {
    "id": "object-descriptors",
    "title": "Obyekt descriptorlari: freeze, seal, defineProperty",
    "question": "Xususiyatni o‘chirib bo‘lmaslik, faqat o‘qish, Object.freeze va seal nima qiladi?",
    "explanation": "Descriptor — obyekt xususiyatining qoidalari. Data property uchun value/writable, accessor uchun get/set ishlatiladi. enumerable ro‘yxatga chiqishini, configurable o‘chirish va qayta sozlash imkonini boshqaradi. Bu turli savollar, bitta “const property” belgisi emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "defineProperty bilan yangi property yaratishda yozilmagan boolean bayroqlar false. Shu sabab x o‘qiladi va sanaladi, lekin writable false bo‘lib qoladi.",
        "code": "const o = {};\nObject.defineProperty(o, \"x\", { value: 1, enumerable: true });\nconst d = Object.getOwnPropertyDescriptor(o, \"x\");\nconsole.log(o.x);\nconsole.log(d.writable);\nconsole.log(Object.keys(o));",
        "expectedOutput": [
          1,
          false,
          [
            "x"
          ]
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [1, false, [\"x\"]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Descriptor nima?",
        "text": "Object.getOwnPropertyDescriptor obyekt xususiyati haqida ma’lumot beradi: qiymat, yozish mumkinmi, sanab o‘tiladimi, o‘chirish mumkinmi.",
        "code": "const o = { x: 1 };\nconsole.log(Object.getOwnPropertyDescriptor(o, \"x\"));\n// { value: 1, writable: true, enumerable: true, configurable: true }"
      },
      {
        "title": "3. defineProperty",
        "text": "Xususiyatni maxsus qoidalar bilan yaratish yoki o‘zgartirish. writable: false — qiymat o‘zgartirilmaydi (strict mode da TypeError).",
        "code": "const o = {};\nObject.defineProperty(o, \"x\", {\n  value: 1,\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\nconsole.log(o.x); // 1\n// o.x = 2; // strict mode da TypeError"
      },
      {
        "title": "4. Faqat o‘qish uchun",
        "text": "writable: false va configurable: false bilan o‘zgarmas xususiyat yaratiladi. Lekin obyekt ichidagi obyektlar o‘zgarishi mumkin (yuzaki).",
        "code": "const o = {};\nObject.defineProperty(o, \"konstanta\", { value: 42 });\n// default: writable: false, enumerable: false, configurable: false\nconsole.log(o.konstanta); // 42\nconsole.log(Object.keys(o)); // [] — sanab o'tilmaydi"
      },
      {
        "title": "5. Object.freeze",
        "text": "freeze yangi own xususiyat qo‘shish/o‘chirishni, own data property qiymatiga yozishni cheklaydi. Bu yuzaki. Accessor setter va Map/Set kabi ichki slotlarni universal muzlatish emas.",
        "code": "const o = { x: 1, ichki: { y: 2 } };\nObject.freeze(o);\no.x = 5; // ishlamaydi\no.ichki.y = 9; // ishlaydi — yuzaki\nconsole.log(Object.isFrozen(o)); // true"
      },
      {
        "title": "6. Object.seal",
        "text": "seal yangi xususiyat qo‘shish va own xususiyatlarni o‘chirishni cheklaydi. Oldindan writable bo‘lgan property qiymatiga yozish mumkin; non-writable propertyni yoziladigan qilib qo‘ymaydi.",
        "code": "const o = { x: 1 };\nObject.seal(o);\no.x = 2; // ishlaydi\no.y = 3; // ishlamaydi\ndelete o.x; // ishlamaydi\nconsole.log(Object.isSealed(o)); // true"
      },
      {
        "title": "7. preventExtensions",
        "text": "Faqat yangi xususiyat qo‘shishni taqiqlaydi. Mavjudlari o‘zgaradi va o‘chiriladi.",
        "code": "const o = { x: 1 };\nObject.preventExtensions(o);\no.y = 2; // ishlamaydi\ndelete o.x; // ishlaydi"
      },
      {
        "title": "8. freeze, seal va preventExtensions taqqoslash",
        "text": "preventExtensions yangi maydonni to‘sadi. seal bunga configurable=false qo‘shadi. freeze data propertylar uchun writable=false ham qiladi. Accessor setterlar mavjud bo‘lsa freeze uni avtomatik yo‘qotmaydi.",
        "code": "const m = Object.freeze(new Map());\nm.set(\"x\", 1);\nconsole.log(m.get(\"x\"));",
        "expectedOutput": [
          1
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Data descriptor va accessor descriptor maydonlarini bitta propertyda aralashtirib bo‘lmaydi. freeze yuzaki va Map/Set ichki yozuvlarini muzlatmaydi. seal mavjud writable propertyni yozishdan to‘smaydi, ammo non-writable ni writable qilib qo‘ymaydi. Strict rejimda taqiqlangan yozish throw qilishi mumkin, oddiy rejimda ba’zilari e’tiborsiz qoladi."
      },
      {
        "title": "10. Kichik amaliy loyiha",
        "text": "Obyektga sanalmaydigan id va o‘zgaradigan name maydoni yarating. Object.keys bilan farqini ko‘ring, freeze dan oldin va keyin yozish holatini tekshiring."
      }
    ],
    "takeaway": "Descriptor — obyekt xususiyatining qoidalari.\nData descriptor va accessor descriptor maydonlarini bitta propertyda aralashtirib bo‘lmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Obyektga sanalmaydigan id va o‘zgaradigan name maydoni yarating. Object.keys bilan farqini ko‘ring, freeze dan oldin va keyin yozish holatini tekshiring.\n\nQo‘shimcha savollar:\n1) freeze dan keyin ichki obyekt o‘zgaradimi?\n2) seal va freeze farqi?\n3) defineProperty da default writable nima?\n4) preventExtensions nima taqiqlaydi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const o = { ichki: { n: 1 } };\nObject.freeze(o);\no.ichki.n = 2;\nconsole.log(o.ichki.n);\nconsole.log(Object.isFrozen(o));\nconst a = Object.seal({ x: 1 });\na.x = 3;\nconsole.log(a.x);\nconsole.log(Object.isExtensible(a));",
    "exerciseExpected": [
      2,
      true,
      3,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — ichki obyekt muzlatilmagan\n2. true — tashqi obyekt frozen\n3. 3 — seal writable maydonga yozishni saqlaydi\n4. false — yangi maydon qo‘shib bo‘lmaydi\n\nLoyihani yechish yo‘li: Object.defineProperty(o,\"id\",{value:1,enumerable:false}) va oddiy name property yarating. Strict testda taqiqlangan yozishni try/catch ichida alohida sinang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
      }
    ],
    "learningGuide": {
      "goal": "Yozish, sanash va qayta sozlash qoidalarini alohida boshqarib, freeze chegarasini bilasiz.",
      "prerequisites": [
        "objects-basics",
        "prototypes",
        "class-private"
      ],
      "terms": [
        {
          "term": "Descriptor",
          "meaning": "Xususiyatning qiymat va ruxsat qoidalarini tavsiflovchi obyekt."
        },
        {
          "term": "Writable",
          "meaning": "Data property ga yangi qiymat yozish mumkinligi."
        },
        {
          "term": "Enumerable",
          "meaning": "Kalit Object.keys kabi sanashga chiqishi."
        },
        {
          "term": "Configurable",
          "meaning": "Xususiyatni o‘chirish va qoidalarini qayta sozlash imkoniyati."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ichki obyekt ham o‘zgarmas bo‘lsin. Tashqi freeze yetadimi?",
        "brokenCode": "const o = Object.freeze({ ichki: { n: 1 } });\no.ichki.n = 9;\nconsole.log(o.ichki.n);",
        "fixedCode": "\"use strict\";\nconst o = Object.freeze({ ichki: Object.freeze({ n: 1 }) });\ntry { o.ichki.n = 9; } catch (e) { console.log(e.name); }\nconsole.log(o.ichki.n);",
        "expectedOutput": [
          "TypeError",
          1
        ],
        "explanation": "freeze yuzaki. Ma’lum ichki obyekt ham muzlatildi. Strict rejimdagi yozish xatosi tutilgach, asl qiymat 1 bo‘lib qoldi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Obyektga sanalmaydigan id va o‘zgaradigan name maydoni yarating. Object.keys bilan farqini ko‘ring, freeze dan oldin va keyin yozish holatini tekshiring.",
        "criteria": [
          "id o‘qiladi, ammo Object.keys da chiqmaydi.",
          "name freeze dan oldin yangilanadi.",
          "Freeze yuzaki ekani ichki obyekt misolida ko‘rsatiladi."
        ],
        "hint": "Object.defineProperty(o,\"id\",{value:1,enumerable:false}) va oddiy name property yarating. Strict testda taqiqlangan yozishni try/catch ichida alohida sinang."
      }
    }
  },
  {
    "id": "iterators-generators",
    "title": "Iterator va generator: noldan",
    "question": "for...of qanday ishlaydi? Symbol.iterator, next() va function* nima?",
    "explanation": "Iterable — qiymatlari aylanishi mumkin bo‘lgan obyekt; u Symbol.iterator metodini beradi. Iterator next() bilan {value,done} qaytaradi. Generator function* iterator yaratishni yengillashtiradi: yield da to‘xtab, keyingi next da davom etadi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi next 10 ni oldi. Spread iteratorni qolganidan davom ettirdi va 20 ni oldi. return 99 tugash qiymati bo‘lib, for...of/spread elementlar ro‘yxatiga kirmaydi.",
        "code": "function* g() { yield 10; yield 20; return 99; }\nconst it = g();\nconsole.log(it.next().value);\nconsole.log([...it]);",
        "expectedOutput": [
          10,
          [
            20
          ]
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [10, [20]]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Iterator qanday ishlaydi",
        "text": "Iterator next() metodi bilan { value, done } qaytaradi. done true bo‘lganda tugagan hisoblanadi. for...of aynan shu metodlarni chaqiradi.",
        "code": "const a = [10, 20];\nconst it = a[Symbol.iterator]();\nconsole.log(it.next()); // { value: 10, done: false }\nconsole.log(it.next()); // { value: 20, done: false }\nconsole.log(it.next()); // { value: undefined, done: true }"
      },
      {
        "title": "3. Qaysi obyektlar iteratsiya qilinadi?",
        "text": "Massiv, string, Map, Set iteratsiya qilinadi. Oddiy obyekt esa yo‘q: for...in bilan kalitlarni olish mumkin, lekin for...of ishlamaydi.",
        "code": "// for (const x of { a: 1 }) {} // TypeError\nfor (const x of \"Ali\") console.log(x); // A, l, i\nfor (const x of new Set([1, 2])) console.log(x); // 1, 2"
      },
      {
        "title": "4. Generator",
        "text": "function* va yield bilan o‘zi iterator yaratish mumkin. Generator chaqirilganda darhol bajarilmaydi: next() chaqirilganda yield gacha bajarilib to‘xtaydi.",
        "code": "function* sonlar() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = sonlar();\nconsole.log(g.next()); // { value: 1, done: false }\nconsole.log([...g]); // [2, 3] — qolganlari"
      },
      {
        "title": "5. Cheksiz ketma-ketlik",
        "text": "Generator bilan cheksiz ketma-ketlik yaratish mumkin: faqat kerakli qiymatlar olinadi. Lekin [...g] cheksiz bo‘lsa, hech tugamaydi — ehtiyot bo‘lish kerak.",
        "code": "function* cheksiz() {\n  let i = 1;\n  while (true) yield i++;\n}\nconst g = cheksiz();\nconsole.log(g.next().value); // 1\nconsole.log(g.next().value); // 2\n// console.log([...g]); // cheksiz — hech qachon tugamaydi"
      },
      {
        "title": "6. yield bilan ma’lumot olish",
        "text": "next(argument) berilgan qiymat oxirgi yield natijasiga aylanadi. Bu generatorga tashqaridan ma’lumot yuborish imkonini beradi.",
        "code": "function* suhbat() {\n  const ism = yield \"Ismingiz?\";\n  return \"Salom, \" + ism;\n}\nconst g = suhbat();\nconsole.log(g.next().value); // Ismingiz?\nconsole.log(g.next(\"Ali\").value); // Salom, Ali"
      },
      {
        "title": "7. yield* va finally bilan tozalash",
        "text": "yield* boshqa iterable qiymatlarini uzatadi. Generator try/finally si iterator erta yopilganda ham kerakli tozalashni bajarishi mumkin.",
        "code": "function* g() {\n  try { yield* [1, 2]; }\n  finally { console.log(\"yopildi\"); }\n}\nfor (const n of g()) { console.log(n); break; }",
        "expectedOutput": [
          1,
          "yopildi"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Generator chaqirilganda tana darhol ishlamaydi. Iterator sarflansa qayta boshidan o‘zi boshlanmaydi; yangi generator oling. Cheksiz generatorni to‘liq spread qilish tugamaydi. Birinchi next(argument) argumenti hali yield yo‘qligi sabab qiymat sifatida olinmaydi. break resurs tozalash uchun return() yo‘lini chaqirishi mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "1 dan n gacha sonlar beradigan generator yozing. Birinchi qiymatni next bilan olib, qolganini for...of bilan yig‘ing. Generatorni qayta ishlatish uchun yangisini yarating."
      }
    ],
    "takeaway": "Iterable — qiymatlari aylanishi mumkin bo‘lgan obyekt; u Symbol.iterator metodini beradi.\nGenerator chaqirilganda tana darhol ishlamaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: 1 dan n gacha sonlar beradigan generator yozing. Birinchi qiymatni next bilan olib, qolganini for...of bilan yig‘ing. Generatorni qayta ishlatish uchun yangisini yarating.\n\nQo‘shimcha savollar:\n1) [1][Symbol.iterator]().next() nima qaytaradi?\n2) Nega for...of oddiy obyektda ishlamaydi?\n3) Generator chaqirilganda darhol bajariladimi?\n4) yield nima qiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function* g() { yield 1; yield 2; return 3; }\nconst it = g();\nconsole.log(it.next().value);\nconsole.log(it.next().value);\nconst oxir = it.next();\nconsole.log(oxir.value);\nconsole.log(oxir.done);",
    "exerciseExpected": [
      1,
      2,
      3,
      true
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — birinchi yield\n2. 2 — ikkinchi yield\n3. 3 — return tugash qiymati\n4. true — generator tugadi\n\nLoyihani yechish yo‘li: function* oraliq(n) { for(let i=1;i<=n;i++) yield i; }. G=oraliq(3) ni bir marta o‘qing va ikkinchi to‘liq aylanish uchun oraliq(3) ni qayta chaqiring.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"
      }
    ],
    "learningGuide": {
      "goal": "Iterable bilan iteratorni ajratasiz, generatorni qadam bilan o‘qib erta yopishni bilasiz.",
      "prerequisites": [
        "loops",
        "arrays-basics",
        "functions"
      ],
      "terms": [
        {
          "term": "Iterable",
          "meaning": "Symbol.iterator orqali aylanishni boshlash usulini beradigan obyekt."
        },
        {
          "term": "Iterator",
          "meaning": "next() bilan navbatdagi value va done holatini qaytaradigan obyekt."
        },
        {
          "term": "yield",
          "meaning": "Generator qiymat berib, keyingi next gacha to‘xtaydigan joy."
        },
        {
          "term": "done",
          "meaning": "Ketma-ketlik tugaganini bildiruvchi boolean."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ikki yurishda ham 1 va 2 chiqsin. Tugagan iteratorni qayta ishlatyapsizmi?",
        "brokenCode": "function* g() { yield 1; yield 2; }\nconst it=g();\nconsole.log([...it]);\nconsole.log([...it]);",
        "fixedCode": "function* g() { yield 1; yield 2; }\nconsole.log([...g()]);\nconsole.log([...g()]);",
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            1,
            2
          ]
        ],
        "explanation": "Generator obyekti yurish holatini saqlaydi. Tugagach boshiga qaytmaydi; har yurish uchun g() yangi iterator yaratadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "1 dan n gacha sonlar beradigan generator yozing. Birinchi qiymatni next bilan olib, qolganini for...of bilan yig‘ing. Generatorni qayta ishlatish uchun yangisini yarating.",
        "criteria": [
          "Birinchi next birinchi qiymatni oladi.",
          "Qolgan qiymatlar tsiklda to‘g‘ri yig‘iladi.",
          "Qayta boshidan o‘qish uchun yangi generator yaratiladi."
        ],
        "hint": "function* oraliq(n) { for(let i=1;i<=n;i++) yield i; }. G=oraliq(3) ni bir marta o‘qing va ikkinchi to‘liq aylanish uchun oraliq(3) ni qayta chaqiring."
      }
    }
  },
  {
    "id": "symbol-bigint",
    "title": "Symbol va BigInt: noldan",
    "question": "Symbol nima? BigInt qachon kerak? Nega ularni boshqa turlar bilan aralashtirib bo‘lmaydi?",
    "explanation": "Symbol noyob identifikator qiymati; BigInt esa ixtiyoriy aniqlikdagi butun son turidir. Symbol(\"id\") tavsif yozuvi, qiymatning global nomi emas. BigInt uchun oxiriga n yozamiz yoki BigInt(...) chaqiramiz. Number bilan arifmetika qoidalari bir xil emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Har Symbol yangi noyob qiymat. Symbol.for umumiy registryda shu kalit uchun bir xil qiymatni oladi. BigInt natijasini String bilan matnga aylantirib chiqardik.",
        "code": "console.log(Symbol(\"id\") === Symbol(\"id\"));\nconsole.log(Symbol.for(\"dars\") === Symbol.for(\"dars\"));\nconsole.log(String(10n + 2n));\nconsole.log(typeof 10n);",
        "expectedOutput": [
          false,
          true,
          "12",
          "bigint"
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [false, true, \"12\", \"bigint\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Symbol",
        "text": "Symbol() har chaqirilganda yangi noyob qiymat yaratadi. Hatto tavsif bir xil bo‘lsa ham teng emas. Obyektga yashirin kalit qo‘yish uchun ishlatiladi.",
        "code": "const a = Symbol(\"id\");\nconst b = Symbol(\"id\");\nconsole.log(a === b); // false\nconsole.log(typeof a); // \"symbol\"\n\nconst o = { [a]: 1 };\nconsole.log(o[a]); // 1\nconsole.log(Object.keys(o)); // [] — ko'rinmaydi"
      },
      {
        "title": "3. Symbol.iterator va well-known",
        "text": "JavaScript ichida ba’zi Symbol lar maxsus ma’noga ega: Symbol.iterator, Symbol.toPrimitive. Ular obyektning ichki xatti-harakatini o‘zgartiradi.",
        "code": "const massiv = [1, 2];\nconsole.log(typeof massiv[Symbol.iterator]); // \"function\"\nconsole.log([...massiv]); // iterator yordamida"
      },
      {
        "title": "4. BigInt",
        "text": "Katta butun sonlar uchun: son oxiriga n qo‘yiladi yoki BigInt() chaqiriladi. Number bilan aralashtirib hisoblab bo‘lmaydi: TypeError.",
        "code": "const katta = 9007199254740993n;\nconsole.log(typeof katta); // \"bigint\"\nconsole.log(katta + 1n); // 9007199254740994n\n// console.log(katta + 1); // TypeError",
        "note": "Number 9007199254740993 ni 9007199254740992 qilib qo‘yadi (aniqlik yo‘qotish). BigInt buni to‘g‘ri saqlaydi."
      },
      {
        "title": "5. BigInt va taqqoslash",
        "text": "BigInt va Number keng tarqalgan taqqoslashda ishlaydi (==, <, >), lekin qat’iy tenglik (===) har doim false, chunki turlar farq qiladi.",
        "code": "console.log(1n == 1); // true\nconsole.log(1n === 1); // false\nconsole.log(1n < 2); // true\nconsole.log(BigInt(5)); // 5n"
      },
      {
        "title": "6. JSON va BigInt",
        "text": "JSON.stringify BigInt ni qo‘llab-quvvatlamaydi: TypeError. Uni avval stringga aylantirish kerak.",
        "code": "// JSON.stringify({ x: 1n }); // TypeError\nconsole.log(JSON.stringify({ x: \"1\" })); // ishlaydi"
      },
      {
        "title": "7. Symbol kalit va JSON chegarasi",
        "text": "Symbol kalitlar Reflect.ownKeys da ko‘rinadi, Object.keys da ko‘rinmaydi. JSON uchun BigInt ni qanday kodlashni o‘zingiz tanlaysiz; tiklashda maydon turini bilish kerak.",
        "code": "const s = Symbol(\"id\");\nconst o = { [s]: 1, katta: 123n };\nconsole.log(Reflect.ownKeys(o).length);\nconsole.log(JSON.stringify(o, (_, v) => typeof v === \"bigint\" ? v.toString() : v));",
        "expectedOutput": [
          2,
          "{\"katta\":\"123\"}"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "1n + 1 TypeError, ammo 1n == 1 true bo‘lishi mumkin. BigInt bo‘lishi butun natija beradi, kasrni tashlaydi. Number dan BigInt ga o‘tganda allaqachon yo‘qolgan aniqlik qaytmaydi; katta sonni matndan yarating. JSON BigInt ni odatda stringify qilmaydi. Symbol tavsifi bilan equality tekshirmang."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Katta butun identifikatorni stringdan BigInt ga aylantiring, 1n qo‘shing va JSON ga yozish uchun yana string qiling. Qayta o‘qishda schema asosida BigInt ga tiklang."
      }
    ],
    "takeaway": "Symbol noyob identifikator qiymati; BigInt esa ixtiyoriy aniqlikdagi butun son turidir.\n1n + 1 TypeError, ammo 1n == 1 true bo‘lishi mumkin.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Katta butun identifikatorni stringdan BigInt ga aylantiring, 1n qo‘shing va JSON ga yozish uchun yana string qiling. Qayta o‘qishda schema asosida BigInt ga tiklang.\n\nQo‘shimcha savollar:\n1) Symbol(\"a\") === Symbol(\"a\") nima?\n2) Nega Symbol kalit Object.keys da yo'q?\n3) 1n + 1 nima beradi?\n4) 1n === 1 va 1n == 1 farqi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "console.log(5n == 5);\nconsole.log(5n === 5);\nconsole.log(String(7n / 2n));\nconsole.log(Boolean(0n));\nconst s = Symbol(\"id\");\nconst o = { [s]: 1 };\nconsole.log(Object.keys(o).length);",
    "exerciseExpected": [
      true,
      false,
      "3",
      false,
      0
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. true — == qiymat bo‘yicha solishtirishi mumkin\n2. false — turlar boshqa\n3. \"3\" — butun bo‘lish kasrni tashlaydi\n4. false — 0n falsy\n5. 0 — symbol kalit Object.keys ga kirmaydi\n\nLoyihani yechish yo‘li: const id=BigInt(\"9007199254740993\"); natijani (id+1n).toString() bilan saqlang. Hamma raqamli stringni avtomatik BigInt qilish o‘rniga maydon sxemasini ishlating.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"
      }
    ],
    "learningGuide": {
      "goal": "Symbol identikligi va BigInt butun hisoblarini oddiy string/Numberdan farqlaysiz.",
      "prerequisites": [
        "data-types",
        "numbers-math",
        "objects-basics"
      ],
      "terms": [
        {
          "term": "Symbol",
          "meaning": "Alohida yaratilganda noyob identifikator qiymati."
        },
        {
          "term": "Registry",
          "meaning": "Symbol.for nomlari uchun umumiy ro‘yxat."
        },
        {
          "term": "BigInt",
          "meaning": "Katta butun qiymatlarni aniq saqlash va hisoblash turi."
        },
        {
          "term": "Identiklik",
          "meaning": "Qiymat yoki obyekt aynan o‘sha qiymat/obyekt ekanligi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "BigInt qiymatga bir qo‘shing. Natijani string qilib chiqaring.",
        "brokenCode": "console.log(String(1n + 1));",
        "fixedCode": "console.log(String(1n + 1n));",
        "expectedOutput": [
          "2"
        ],
        "explanation": "Arifmetikada BigInt va Number bevosita aralashtirilmaydi. Ikkala operand BigInt bo‘ldi; String faqat chiqarish uchun ishlatildi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Katta butun identifikatorni stringdan BigInt ga aylantiring, 1n qo‘shing va JSON ga yozish uchun yana string qiling. Qayta o‘qishda schema asosida BigInt ga tiklang.",
        "criteria": [
          "Katta id Numberga aylantirilmasdan BigInt qilinadi.",
          "1n qo‘shilganda aniq natija olinadi.",
          "JSON da id string sifatida saqlanib, sxema bilan qayta tiklanadi."
        ],
        "hint": "const id=BigInt(\"9007199254740993\"); natijani (id+1n).toString() bilan saqlang. Hamma raqamli stringni avtomatik BigInt qilish o‘rniga maydon sxemasini ishlating."
      }
    }
  },
  {
    "id": "weakmap-weakset",
    "title": "WeakMap va WeakSet: noldan",
    "question": "WeakMap/WeakSet kalitlari, reference va garbage collection qanday bog‘langan?",
    "explanation": "WeakMap va WeakSet obyekt identifikatoriga bog‘langan vaqtinchalik ma’lumot uchun. Ular kalit yoki qiymatning o‘zini kuchli reference sifatida ushlab qolmaydi. Zamonaviy JavaScript’da obyektlardan tashqari registryga kiritilmagan Symbol ham weak hold qilinishi mumkin.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Kalit obyekt reference i. get ma’lumotni oladi, delete yozuvni o‘chiradi. Boshqa aynan shunday {} yangi kalit bo‘ladi. GC qachon ishga tushishini bu kod orqali aniqlamaymiz.",
        "code": "const key = {};\nconst m = new WeakMap();\nm.set(key, \"tayyor\");\nconsole.log(m.get(key));\nconsole.log(m.has(key));\nm.delete(key);\nconsole.log(m.has(key));",
        "expectedOutput": [
          "tayyor",
          true,
          false
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"tayyor\", true, false]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. WeakMap asoslari",
        "text": "Kalit obyekt yoki registryga kiritilmagan Symbol bo‘lishi mumkin. size xususiyati yo‘q, iteratsiya qilib bo‘lmaydi. get/set/has/delete metodlari bor.",
        "code": "const wm = new WeakMap();\nconst obyekt = {};\nwm.set(obyekt, \"ma'lumot\");\nconsole.log(wm.get(obyekt)); // ma'lumot\nconsole.log(wm.has(obyekt)); // true\n// wm.size — yo'q; for...of — ishlamaydi"
      },
      {
        "title": "3. Nega “weak”?",
        "text": "Reachable Map kalitni kuchli ushlab turadi. WeakMapning o‘zi kalitning yashashiga kuchli sabab bo‘lmaydi. Boshqa reference lar qolmasa kalit yig‘ilishi mumkin; GC vaqti va aynan qachon yozuv yo‘qolishi kuzatiladigan kafolat emas.",
        "code": "let o = {};\nconst wm = new WeakMap();\nwm.set(o, 1);\no = null; // endi obyektga hech kim murojaat qilmaydi\n// GC keyinroq yig‘ishi mumkin; aniq vaqti kafolatlanmaydi"
      },
      {
        "title": "4. WeakSet",
        "text": "WeakSet obyektlar va registryga kiritilmagan Symbol larni takrorlarsiz saqlaydi. add/delete/has bor, iteratsiya yo‘q.",
        "code": "const ws = new WeakSet();\nconst o = {};\nws.add(o);\nconsole.log(ws.has(o)); // true\n// ws.add(1); // TypeError: number weak qiymat emas"
      },
      {
        "title": "5. Qayerda ishlatiladi?",
        "text": "Obyektga qo‘shimcha ma’lumot biriktirish (masalan, kesh yoki “ishlangan” belgisi) va DOM elementlariga tegishli holat saqlash. Element DOM dan o‘chirilsa ham boshqa kuchli reference lar qolishi mumkin. Obyekt unreachable bo‘lganda GC yig‘ishi mumkin; aniq vaqt kafolatlanmaydi.",
        "code": "const ishlangan = new WeakSet();\nfunction ishla(element) {\n  if (ishlangan.has(element)) return;\n  ishlangan.add(element);\n  // ishlash...\n}"
      },
      {
        "title": "6. Cheklovlar",
        "text": "Iteratsiya yo‘q, size yo‘q, kalit obyekt yoki registryga kiritilmagan Symbol. Shuning uchun Map/Set o‘rniga faqat xotira muhim bo‘lganda tanlanadi.",
        "code": "// wm.forEach — yo'q\n// [...wm] — ishlamaydi\n// wm.keys() — yo'q"
      },
      {
        "title": "7. Kuchli va weak reference farqi",
        "text": "Weak kolleksiya avtomatik “tez tozalash” buyrug‘i emas. Faqat u orqali reachable bo‘lish obyektni ushlab turmasligi mumkin. Finalization yoki GC vaqtiga biznes natijani bog‘lamang.",
        "code": "const key = {};\nconst m = new WeakMap([[key, 7]]);\nconsole.log(m.get({}));\nconsole.log(m.get(key));",
        "expectedOutput": [
          {
            "$undefined": true
          },
          7
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "size, keys, forEach va odatiy iteratsiya yo‘q. GC vaqtini kuzatib natija tartibini va’da qilib bo‘lmaydi. DOM dan o‘chirish yetarli emas: boshqa kuchli reference lar qolgan bo‘lishi mumkin. Symbol.for qiymati registryda bo‘lgani uchun weak kalit bo‘la olmaydi. Map ham o‘zi reachable bo‘lmasa yig‘ilishi mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Obyektga kesh ma’lumoti bog‘laydigan WeakMap va bir marta ishlangan obyektlarni belgilaydigan WeakSet yozing. Bir xil va yangi obyekt reference larini solishtiring."
      }
    ],
    "takeaway": "WeakMap va WeakSet obyekt identifikatoriga bog‘langan vaqtinchalik ma’lumot uchun.\nsize, keys, forEach va odatiy iteratsiya yo‘q.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Obyektga kesh ma’lumoti bog‘laydigan WeakMap va bir marta ishlangan obyektlarni belgilaydigan WeakSet yozing. Bir xil va yangi obyekt reference larini solishtiring.\n\nQo‘shimcha savollar:\n1) WeakMap va Map farqi nima?\n2) Nega size yo‘q?\n3) wm.set(1, \"x\") ishlaydimi?\n4) WeakMap qayerda foydali?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const a = {}, b = {};\nconst ws = new WeakSet([a]);\nconsole.log(ws.has(a));\nconsole.log(ws.has(b));\nconsole.log(typeof ws.size);\nconst m = new WeakMap();\nconst s = Symbol(\"local\");\nm.set(s, 1);\nconsole.log(m.get(s));",
    "exerciseExpected": [
      true,
      false,
      "undefined",
      1
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. true — aynan shu obyekt bor\n2. false — yangi obyekt boshqa\n3. \"undefined\" — size mavjud emas\n4. 1 — registryga kiritilmagan Symbol weak kalit bo‘la oladi\n\nLoyihani yechish yo‘li: WeakMap.set(obj, natija) bilan saqlang. WeakSet.has(obj) true bo‘lsa qayta ishlamang. Iteratsiya yoki kalitlar soni kerak bo‘lsa Map/Set mosroq.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"
      }
    ],
    "learningGuide": {
      "goal": "Weak kolleksiyani mos vazifada tanlab, GC vaqtiga natijani bog‘lamaysiz.",
      "prerequisites": [
        "map-set",
        "object-reference",
        "symbol-bigint"
      ],
      "terms": [
        {
          "term": "Kuchli reference",
          "meaning": "Obyektni reachable saqlab turadigan odatiy ishora."
        },
        {
          "term": "Weak reference",
          "meaning": "O‘zining o‘zi obyekt yashashini kuchli ushlab qolmaydigan bog‘lanish."
        },
        {
          "term": "Reachable",
          "meaning": "Faol koddan reference zanjiri orqali yetib borish mumkin bo‘lgan obyekt."
        },
        {
          "term": "GC",
          "meaning": "Endi kerakli yo‘li qolmagan obyekt xotirasini keyinroq yig‘ishi mumkin bo‘lgan mexanizm."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Aynan shu kalit saqlanganmi? WeakMap da size mavjud deb hisoblamang.",
        "brokenCode": "const k={};\nconst m=new WeakMap([[k, 1]]);\nconsole.log(m.size > 0);",
        "fixedCode": "const k={};\nconst m=new WeakMap([[k, 1]]);\nconsole.log(m.has(k));",
        "expectedOutput": [
          true
        ],
        "explanation": "WeakMap size yoki kalitlar ro‘yxatini bermaydi. Sizdagi aniq kalitni has orqali tekshirish mumkin.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Obyektga kesh ma’lumoti bog‘laydigan WeakMap va bir marta ishlangan obyektlarni belgilaydigan WeakSet yozing. Bir xil va yangi obyekt reference larini solishtiring.",
        "criteria": [
          "Aynan bir obyekt keshidan ma’lumot olinadi.",
          "Tarkibi o‘xshash yangi obyekt boshqa kalit bo‘ladi.",
          "size yoki iteratsiyaga tayanilmaydi."
        ],
        "hint": "WeakMap.set(obj, natija) bilan saqlang. WeakSet.has(obj) true bo‘lsa qayta ishlamang. Iteratsiya yoki kalitlar soni kerak bo‘lsa Map/Set mosroq."
      }
    }
  },
  {
    "id": "proxy-reflect",
    "title": "Proxy va Reflect: noldan",
    "question": "Proxy obyekt harakatlarini qanday ushlaydi? get, set va Reflect nima?",
    "explanation": "Proxy — obyekt ustidagi ayrim amallarni tutib qoladigan vositachi. Target asl obyekt, handler esa get/set/has kabi trap lar to‘plami. Reflect shu standart amallarni funksiya ko‘rinishida bajarib, receiver kabi nozik qoidalarni saqlashga yordam beradi.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Yozish proxy orqali asl targetga o‘tdi. Proxy boshqa reference, lekin alohida avtomatik klon emas. get/set traplari berilgan amalni Reflectga uzatyapti.",
        "code": "const target = { ism: \"Ali\" };\nconst p = new Proxy(target, {\n  get(t, key, receiver) { return Reflect.get(t, key, receiver); },\n  set(t, key, value, receiver) { return Reflect.set(t, key, value, receiver); }\n});\np.ism = \"Vali\";\nconsole.log(target.ism);\nconsole.log(p === target);",
        "expectedOutput": [
          "Vali",
          false
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Vali\", false]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Oddiy Proxy",
        "text": "new Proxy(target, handler) bilan yaratiladi. handler.get(target, prop) xususiyat o‘qilganda chaqiriladi.",
        "code": "const target = { ism: \"Ali\" };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    console.log(\"o'qildi:\", prop);\n    return t[prop];\n  }\n});\nconsole.log(proxy.ism); // log + Ali"
      },
      {
        "title": "3. set ushlagichi",
        "text": "set(target, prop, value) xususiyatga yozilganda chaqiriladi. Qiymatni tekshirib, rad etish yoki o‘zgartirish mumkin.",
        "code": "const proxy = new Proxy({}, {\n  set(t, prop, value) {\n    if (prop === \"yosh\" && value < 0) {\n      throw new Error(\"Yosh manfiy bo'lmaydi\");\n    }\n    t[prop] = value;\n    return true; // muvaffaqiyat belgisi\n  }\n});\nproxy.yosh = 20; // OK\n// proxy.yosh = -1; // xato"
      },
      {
        "title": "4. Reflect nima?",
        "text": "Reflect obyekt ustidagi standart amallarni (get, set, has, deleteProperty) funksiya sifatida beradi. Proxy ichida Reflect ishlatish eng to‘g‘ri usul: standart xatti-harakatni saqlaydi.",
        "code": "const proxy = new Proxy({}, {\n  get(t, prop, receiver) {\n    return Reflect.get(t, prop, receiver);\n  }\n});\nconsole.log(Reflect.has({ a: 1 }, \"a\")); // true"
      },
      {
        "title": "5. Nega Reflect kerak?",
        "text": "Reflect.get kabi metodlar qiymat qaytaradi. Reflect.set va Reflect.deleteProperty muvaffaqiyat uchun boolean qaytaradi. Bu “hech qachon xato tashlamaydi” degani emas: noto‘g‘ri argument, getter yoki proxy xatosi throw bo‘lishi mumkin. Receiver getter ichidagi this ni to‘g‘ri uzatishga yordam beradi.",
        "code": "const o = { a: 1 };\nconsole.log(Reflect.set(o, \"b\", 2)); // true\nconsole.log(o.b); // 2\nconsole.log(Reflect.deleteProperty(o, \"a\")); // true"
      },
      {
        "title": "6. Amaliy: kuzatuvchi obyekt",
        "text": "Proxy bilan obyekt o‘zgarishlarini kuzatish mumkin. Bu reaktiv tizimlarning (Vue kabi) asosiy mexanizmlaridan biri.",
        "code": "function kuzat(o, callback) {\n  return new Proxy(o, {\n    set(t, prop, value) {\n      const eski = t[prop];\n      t[prop] = value;\n      callback(prop, eski, value);\n      return true;\n    }\n  });\n}\nconst s = kuzat({ x: 1 }, (k, e, y) => console.log(k, e, \"→\", y));\ns.x = 5; // x 1 → 5"
      },
      {
        "title": "7. Reflect natijasi metodga bog‘liq",
        "text": "Reflect.get qiymat qaytaradi, has/set/deleteProperty kabi metodlar boolean beradi. Noto‘g‘ri argument yoki getter ichidagi xato baribir throw bo‘lishi mumkin.",
        "code": "const o = Object.freeze({ x: 1 });\nconsole.log(Reflect.get(o, \"x\"));\nconsole.log(Reflect.set(o, \"x\", 2));",
        "expectedOutput": [
          1,
          false
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Trap ichida yana proxy[prop] ishlatish o‘zini qayta chaqirishi mumkin. Proxy invariants ni buzishga ruxsat bermaydi: non-configurable/non-writable property haqida yolg‘on natija TypeError berishi mumkin. Reflect metodlarining hammasi boolean qaytarmaydi va hammasi xatosiz emas. Private maydonli class hamda ayrim built-in lar receiver sabab oddiy forwarding bilan ishlamasligi mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Faqat manfiy bo‘lmagan yosh yozishga ruxsat beradigan proxy yarating. Yaroqli qiymat targetga tushsin, noto‘g‘ri qiymat aniq xato bersin. Getter uchun receiver ni saqlang."
      }
    ],
    "takeaway": "Proxy — obyekt ustidagi ayrim amallarni tutib qoladigan vositachi.\nTrap ichida yana proxy[prop] ishlatish o‘zini qayta chaqirishi mumkin.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Faqat manfiy bo‘lmagan yosh yozishga ruxsat beradigan proxy yarating. Yaroqli qiymat targetga tushsin, noto‘g‘ri qiymat aniq xato bersin. Getter uchun receiver ni saqlang.\n\nQo‘shimcha savollar:\n1) Proxy nima qiladi?\n2) set ushlagichi nima qaytarishi kerak?\n3) Nega Proxy ichida Reflect ishlatiladi?\n4) Proxy qayerda ishlatiladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const target = { x: 1 };\nconst p = new Proxy(target, {});\np.x = 2;\nconsole.log(target.x);\nconsole.log(Reflect.has(target, \"x\"));\nconsole.log(Reflect.deleteProperty(target, \"x\"));\nconsole.log(Object.hasOwn(target, \"x\"));",
    "exerciseExpected": [
      2,
      true,
      true,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — trap yo‘q bo‘lsa standart forwarding\n2. true — kalit bor\n3. true — o‘chirish muvaffaqiyatli\n4. false — endi own maydon yo‘q\n\nLoyihani yechish yo‘li: set ichida prop === \"yosh\" bo‘lsa Number.isFinite va >=0 ni tekshiring. Keyin Reflect.set(t,key,value,receiver) natijasini qaytaring; yozish bo‘lmasa yolg‘on true bermang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
      }
    ],
    "learningGuide": {
      "goal": "Trap bilan amalni tutib, Reflect orqali standart xulqni saqlaysiz.",
      "prerequisites": [
        "objects-basics",
        "this-keyword",
        "object-descriptors"
      ],
      "terms": [
        {
          "term": "Target",
          "meaning": "Proxy orqasidagi asl obyekt."
        },
        {
          "term": "Trap",
          "meaning": "get yoki set kabi amal tutib qolinadigan handler funksiyasi."
        },
        {
          "term": "Receiver",
          "meaning": "Getter/setter ichidagi this ga uzatiladigan qabul qiluvchi."
        },
        {
          "term": "Invariant",
          "meaning": "Proxy ham buzishga haqli bo‘lmagan til qoidasi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Strict rejimda muvaffaqiyatli yozish xato bermasin. set trap nimani qaytarishi kerak?",
        "brokenCode": "\"use strict\";\nconst p=new Proxy({}, { set(t,k,v) { t[k]=v; return false; } });\np.x=2; console.log(p.x);",
        "fixedCode": "\"use strict\";\nconst p=new Proxy({}, { set(t,k,v,r) { return Reflect.set(t,k,v,r); } });\np.x=2; console.log(p.x);",
        "expectedOutput": [
          2
        ],
        "explanation": "set trap boolean muvaffaqiyatni bildiradi. false strict rejimda TypeError beradi; Reflect.set odatiy yozish natijasini qaytardi. Invariantlar baribir saqlanishi kerak.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Faqat manfiy bo‘lmagan yosh yozishga ruxsat beradigan proxy yarating. Yaroqli qiymat targetga tushsin, noto‘g‘ri qiymat aniq xato bersin. Getter uchun receiver ni saqlang.",
        "criteria": [
          "Yaroqli yosh targetga yoziladi.",
          "Manfiy yoki son bo‘lmagan yosh rad etiladi.",
          "Yozishning muvaffaqiyat belgisi noto‘g‘ri true qilib berilmaydi."
        ],
        "hint": "set ichida prop === \"yosh\" bo‘lsa Number.isFinite va >=0 ni tekshiring. Keyin Reflect.set(t,key,value,receiver) natijasini qaytaring; yozish bo‘lmasa yolg‘on true bermang."
      }
    }
  },
  {
    "id": "currying",
    "title": "Currying va qisman qo‘llash: noldan",
    "question": "Currying nima? f(a,b,c) ni f(a)(b)(c) ga aylantirish qanday ishlaydi?",
    "explanation": "Currying — ko‘p argumentli funksiyani argumentlarni bosqichma-bosqich oladigan funksiyalarga aylantirish. qosh(2)(3) birinchi chaqirishda yangi funksiya, ikkinchisida qiymat beradi. Partial application esa argumentlarning bir qismini oldindan bog‘lash; u aynan bir xil tushuncha emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "qosh(5) 5 ni closure orqali saqlagan yangi funksiya beradi. beshQosh(2) keyin 5+2 ni hisoblaydi. Har bir qosh(a) mustaqil sozlangan funksiya yaratadi.",
        "code": "const qosh = a => b => a + b;\nconst beshQosh = qosh(5);\nconsole.log(beshQosh(2));\nconsole.log(qosh(1)(3));",
        "expectedOutput": [
          7,
          4
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [7, 4]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Currying misoli",
        "text": "Oddiy funksiyani currying shakliga o‘zgartirish: har bir qadam keyingi funksiyani qaytaradi, oxirgisida hisoblash bajariladi.",
        "code": "function qosh(a) {\n  return function (b) {\n    return a + b;\n  };\n}\nconsole.log(qosh(2)(3)); // 5\n\nconst beshQosh = qosh(5);\nconsole.log(beshQosh(10)); // 15",
        "note": "qosh(2) chaqirilganda a = 2 saqlanadi (closure), keyin qosh(2)(3) da b = 3."
      },
      {
        "title": "3. Arrow bilan qisqa",
        "text": "Arrow funksiyalar bilan currying juda qisqa yoziladi.",
        "code": "const kopaytir = a => b => c => a * b * c;\nconsole.log(kopaytir(2)(3)(4)); // 24"
      },
      {
        "title": "4. Umumiy curry funksiyasi",
        "text": "Rest parametrlar bilan ixtiyoriy funksiyani currying qilish mumkin. Argumentlar yetarli bo‘lguncha funksiya qaytarilaveradi.",
        "code": "function curry(fn) {\n  return function yig(...args) {\n    if (args.length >= fn.length) return fn(...args);\n    return (...keyin) => yig(...args, ...keyin);\n  };\n}\nconst yig3 = curry((a, b, c) => a + b + c);\nconsole.log(yig3(1)(2)(3)); // 6\nconsole.log(yig3(1, 2)(3)); // 6"
      },
      {
        "title": "5. Qisman qo‘llash",
        "text": "Partial application ba’zi argumentlarni oldindan berib, qolganlarini keyin olish. bind va closure bilan yoziladi.",
        "code": "function salomlash(kim, xabar) {\n  return kim + \", \" + xabar;\n}\nconst aliGa = salomlash.bind(null, \"Ali\");\nconsole.log(aliGa(\"Salom\")); // Ali, Salom"
      },
      {
        "title": "6. Nega foydali?",
        "text": "Currying funksiyalarni qayta ishlatish va kompozitsiya qilishni osonlashtiradi: oldindan sozlangan funksiya yaratish.",
        "code": "const kutil = ms => fn => setTimeout(fn, ms);\nkutil(1000)(() => console.log(\"1 soniyadan keyin\"));"
      },
      {
        "title": "7. Funksiya uzunligi arity uchun doim yetarli emas",
        "text": "length birinchi default parametrgacha bo‘lgan rasmiy parametrlarni sanaydi; rest sanalmaydi. Shuning uchun generic curry ni barcha funksiyaga universal deb aytmang.",
        "code": "console.log(((a, b = 1, c) => {}).length);\nconsole.log(((...args) => {}).length);",
        "expectedOutput": [
          1,
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "qosh(2,3) bilan qosh(2)(3) avtomatik bir xil emas. Umumiy curry yordamchisi fn.length ga tayansa, default/rest parametrlar arity ni o‘zgartiradi. Method this ini saqlash ham alohida talab. Qisman qo‘llash uchun bind bu yerda funksiya qaytaradi, darhol chaqirmaydi."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Soliq foizi oldindan berilgan hisoblash funksiyasini yarating. Keyin turli narxlar bilan ishlating. Oddiy uch argumentli variant va currying variantining natijalarini solishtiring."
      }
    ],
    "takeaway": "Currying — ko‘p argumentli funksiyani argumentlarni bosqichma-bosqich oladigan funksiyalarga aylantirish.\nqosh(2,3) bilan qosh(2)(3) avtomatik bir xil emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Soliq foizi oldindan berilgan hisoblash funksiyasini yarating. Keyin turli narxlar bilan ishlating. Oddiy uch argumentli variant va currying variantining natijalarini solishtiring.\n\nQo‘shimcha savollar:\n1) qosh(2)(3) qanday ishlaydi?\n2) const f = a => b => a+b; f(1)(2) nima?\n3) Currying va partial application farqi?\n4) bind bilan qanday qisman qo‘llash mumkin?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const kop = a => b => a * b;\nconst ikki = kop(2);\nconsole.log(ikki(4));\nconsole.log(kop(3)(4));\nfunction yig(a,b,c) { return a+b+c; }\nconst bir = yig.bind(null, 1);\nconsole.log(bir(2,3));",
    "exerciseExpected": [
      8,
      12,
      6
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 8 — 2 oldindan saqlandi\n2. 12 — 3 va 4 bosqichma-bosqich berildi\n3. 6 — qisman qo‘llash birinchi argumentni bog‘ladi\n\nLoyihani yechish yo‘li: const soliq = foiz => narx => narx * (1+foiz/100). Foiz va narxlarni tekshirishni hisoblashdan oldin ajrating.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Currying"
      }
    ],
    "learningGuide": {
      "goal": "Argumentni bosqichlab olish bilan qisman oldindan bog‘lashni ajratasiz.",
      "prerequisites": [
        "functions",
        "closures",
        "this-keyword"
      ],
      "terms": [
        {
          "term": "Currying",
          "meaning": "Ko‘p argumentli ishni ketma-ket funksiya chaqirishlariga ajratish."
        },
        {
          "term": "Partial application",
          "meaning": "Ba’zi argumentlarni oldindan belgilab qo‘yish."
        },
        {
          "term": "Arity",
          "meaning": "Funksiya kutiladigan parametrlar soni; length har vaziyatda to‘liq talabni bermaydi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Currying qilingan qosh dan 5 oling.",
        "brokenCode": "const qosh=a=>b=>a+b;\nconsole.log(qosh(2,3));",
        "fixedCode": "const qosh=a=>b=>a+b;\nconsole.log(qosh(2)(3));",
        "expectedOutput": [
          5
        ],
        "explanation": "Birinchi chaqirish a ni saqlagan funksiyani qaytaradi. b ikkinchi chaqirishda beriladi; birinchi chaqirishdagi ortiqcha argument avtomatik ikkinchisiga o‘tmaydi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Soliq foizi oldindan berilgan hisoblash funksiyasini yarating. Keyin turli narxlar bilan ishlating. Oddiy uch argumentli variant va currying variantining natijalarini solishtiring.",
        "criteria": [
          "Oldindan tanlangan foiz turli narxlarga qo‘llanadi.",
          "Oddiy va curried variant bir xil javob beradi.",
          "0 foiz narxni o‘zgartirmaydi."
        ],
        "hint": "const soliq = foiz => narx => narx * (1+foiz/100). Foiz va narxlarni tekshirishni hisoblashdan oldin ajrating."
      }
    }
  },
  {
    "id": "memoization",
    "title": "Memoization: noldan",
    "question": "Memoization nima? Natijalar qanday keshlanadi va qachon foydali?",
    "explanation": "Memoization — bir xil argumentlar uchun avval hisoblangan javobni keshdan qaytarish. Foyda hisoblash qayta takrorlanganda bor. Kesh kaliti, funksiyaning sof ekanligi va kesh qancha yashashi asosiy dizayn savollari.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi 5 uchun hisoblash bajariladi va Map ga yoziladi. Keyingi 5 uchun shu kalit bor va saqlangan natija olinadi. Bu misol faqat bitta argument uchun yozilgan.",
        "code": "function memo(fn) {\n  const m = new Map();\n  return x => {\n    if (m.has(x)) return m.get(x);\n    const value = fn(x); m.set(x, value); return value;\n  };\n}\nconst kvadrat = memo(x => x * x);\nconsole.log(kvadrat(5));\nconsole.log(kvadrat(5));",
        "expectedOutput": [
          25,
          25
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [25, 25]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Muammo",
        "text": "Oddiy rekursiv Fibonacci bir xil qiymatlarni qayta-qayta hisoblaydi: juda sekin.",
        "code": "function fib(n) {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n// fib(40) juda uzoq ishlaydi — takroriy hisoblar tufayli"
      },
      {
        "title": "3. Kesh bilan yechim",
        "text": "Hisoblangan natijani obyektga saqlaymiz. Keyingi chaqiruvda keshda borsa, darhol qaytaramiz.",
        "code": "function fibTez(n, kesh = {}) {\n  if (n < 2) return n;\n  if (kesh[n] !== undefined) return kesh[n];\n  kesh[n] = fibTez(n - 1, kesh) + fibTez(n - 2, kesh);\n  return kesh[n];\n}\nconsole.log(fibTez(40)); // tez chiqadi"
      },
      {
        "title": "4. Umumiy memoize funksiyasi",
        "text": "Quyidagi sodda helper argumentlarini JSON.stringify qilib kesh kaliti qiladi. Bu universal emas: sikl, BigInt, undefined va reference identikligi bilan cheklovlar bor. Faqat tanlangan argument turlari uchun ishlating va key tanlash siyosatini belgilang.",
        "code": "function memoize(fn) {\n  const kesh = new Map();\n  return function (...args) {\n    const kalit = JSON.stringify(args);\n    if (kesh.has(kalit)) return kesh.get(kalit);\n    const natija = fn(...args);\n    kesh.set(kalit, natija);\n    return natija;\n  };\n}\nconst kvadrat = memoize(x => x * x);\nconsole.log(kvadrat(5), kvadrat(5)); // ikkinchisi keshdan"
      },
      {
        "title": "5. E’tibor: faqat sof funksiyalar",
        "text": "Memoization faqat bir xil argumentga doim bir xil natija qaytaradigan (sof/pure) funksiyalar uchun xavfsiz. Yon ta’siri bor funksiyani keshlamang.",
        "code": "// yomon: natija har safar farq qiladi\n// memoize(() => Date.now()) — noto'g'ri ishlatish\n\n// yaxshi: bir xil kirish → bir xil chiqish\nmemoize(x => x * 2);"
      },
      {
        "title": "6. Kesh xotirasi",
        "text": "Kesh o‘sib boradi: har xil argument uchun yangi yozuv. Katta ma’lumotlarda eskirgan yozuvlarni o‘chirish (LRU) kerak bo‘lishi mumkin.",
        "code": "const kesh = new Map();\nkesh.set(\"a\", 1);\n// kesh.clear(); // butunlash o'chirish"
      },
      {
        "title": "7. Kesh va natija reference i",
        "text": "Kesh obyekt qaytarsa, keyingi chaqirish ham o‘sha obyektni olishi mumkin. Tashqi kod uni o‘zgartirsa keyingi natija ham ta’sirlanadi. Keshning o‘zi ham xotira egallaydi; TTL/LRU yoki tozalashni talabga qarab tanlang.",
        "code": "const m = new Map([[\"x\", { n: 1 }]]);\nconst a = m.get(\"x\"); a.n = 2;\nconsole.log(m.get(\"x\").n);",
        "expectedOutput": [
          2
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "if(cache.get(x)) falsy javoblarni keshda yo‘q deb oladi; has ishlating. JSON.stringify(args) universal kalit emas: undefined/null, sikl, BigInt, obyekt tartibi va reference farqlari bor. O‘zgaruvchi obyekt argumenti keshni eskirtirishi mumkin. Async xatoli Promise ni keshda saqlab qolish yoki o‘chirish alohida siyosat talab qiladi."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Bitta primitive argumentli sof funksiyani Map bilan keshlang. Hisoblash nechta bo‘lganini alohida hisoblagich bilan kuzating; bir xil kirishda qayta hisoblamasin. Kesh hajmi chegarasini belgilang."
      }
    ],
    "takeaway": "Memoization — bir xil argumentlar uchun avval hisoblangan javobni keshdan qaytarish.\nif(cache.get(x)) falsy javoblarni keshda yo‘q deb oladi; has ishlating.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Bitta primitive argumentli sof funksiyani Map bilan keshlang. Hisoblash nechta bo‘lganini alohida hisoblagich bilan kuzating; bir xil kirishda qayta hisoblamasin. Kesh hajmi chegarasini belgilang.\n\nQo‘shimcha savollar:\n1) Nega oddiy fib(40) sekin?\n2) Kesh qanday ishlaydi?\n3) Nega faqat sof funksiyalarni keshlash kerak?\n4) Map o‘rniga obyekt ishlatish mumkinmi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "let chaqiruv = 0;\nconst cache = new Map();\nfunction ikki(x) {\n  if (cache.has(x)) return cache.get(x);\n  chaqiruv++; const r=x*2; cache.set(x,r); return r;\n}\nconsole.log(ikki(0));\nconsole.log(ikki(0));\nconsole.log(chaqiruv);\nconsole.log(cache.size);",
    "exerciseExpected": [
      0,
      0,
      1,
      1
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 0 — 0 ham yaroqli javob\n2. 0 — has sabab 0 keshdan olindi\n3. 1 — faqat bir hisoblash\n4. 1 — bitta kalit\n\nLoyihani yechish yo‘li: Map.has bilan tekshiring, hisoblashdan keyin set qiling. MaxSize bo‘lsa yangi kalitdan oldin kerakli eski kalitni o‘chiring. Bu FIFO misolimi yoki haqiqiy LRU mi, aniq belgilang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Memoization"
      }
    ],
    "learningGuide": {
      "goal": "Kesh kaliti va haqiqiy hisoblashni ajratib, 0 kabi natijalarni ham keshlaysiz.",
      "prerequisites": [
        "map-set",
        "iife-pure",
        "recursion"
      ],
      "terms": [
        {
          "term": "Kesh",
          "meaning": "Oldin hisoblangan natijalar saqlanadigan joy."
        },
        {
          "term": "Cache hit",
          "meaning": "Kerakli kalit keshda topilishi."
        },
        {
          "term": "Invalidation",
          "meaning": "Eskirgan natijani olib tashlash yoki yangilash siyosati."
        },
        {
          "term": "TTL / LRU",
          "meaning": "Vaqti tugagan yoki eng uzoq ishlatilmagan yozuvni chiqarish usullari."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "0 natijasi ham cache dan olinsin; hisoblash faqat bir marta bo‘lsin.",
        "brokenCode": "const cache=new Map(); let calls=0;\nfunction f(n) { if(cache.get(n)) return cache.get(n); calls++; const v=n*2; cache.set(n,v); return v; }\nconsole.log(f(0)); console.log(f(0)); console.log(calls);",
        "fixedCode": "const cache=new Map(); let calls=0;\nfunction f(n) { if(cache.has(n)) return cache.get(n); calls++; const v=n*2; cache.set(n,v); return v; }\nconsole.log(f(0)); console.log(f(0)); console.log(calls);",
        "expectedOutput": [
          0,
          0,
          1
        ],
        "explanation": "Cache mavjudligini natijaning truthy bo‘lishidan ajrating. has 0, false va undefined kabi saqlangan qiymatlarni ham topadi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Bitta primitive argumentli sof funksiyani Map bilan keshlang. Hisoblash nechta bo‘lganini alohida hisoblagich bilan kuzating; bir xil kirishda qayta hisoblamasin. Kesh hajmi chegarasini belgilang.",
        "criteria": [
          "Bir xil kirish takrorlanganda hisoblash qayta bajarilmaydi.",
          "0 natija keshda bor deb to‘g‘ri tan olinadi.",
          "Kesh cheksiz o‘sib ketmasligi uchun qoida bor."
        ],
        "hint": "Map.has bilan tekshiring, hisoblashdan keyin set qiling. MaxSize bo‘lsa yangi kalitdan oldin kerakli eski kalitni o‘chiring. Bu FIFO misolimi yoki haqiqiy LRU mi, aniq belgilang."
      }
    }
  },
  {
    "id": "memory-management",
    "title": "Garbage collection va xotira boshqaruvi",
    "question": "Keraksiz obyektlar xotiradan qachon o‘chadi? Memory leak nima?",
    "explanation": "Xotira qiymatlar va obyektlar saqlanadigan resurs. JavaScript garbage collector bilan endi reachable bo‘lmagan obyektlarni yig‘ishi mumkin. Reachable — faol koddan reference lar zanjiri orqali unga yetib borish mumkin. “Scope tugadi” yoki “DOM dan o‘chdi” degan holat avtomatik aniq vaqtda tozalandi degani emas.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "user null bo‘ldi, lekin boshqa reference saqladi. Kesh yana reference berdi; clear kesh yozuvini olib tashladi, boshqa o‘zgaruvchisi esa hanuz obyektni ushlab turadi.",
        "code": "let user = { ism: \"Ali\" };\nconst boshqa = user;\nuser = null;\nconsole.log(boshqa.ism);\nconst kesh = new Map([[\"x\", boshqa]]);\nconsole.log(kesh.size);\nkesh.clear();\nconsole.log(kesh.size);",
        "expectedOutput": [
          "Ali",
          1,
          0
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Ali\", 1, 0]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Reference qolsa obyekt yashaydi",
        "text": "Bir o‘zgaruvchini null qilish obyektni darhol o‘chirish buyrug‘i emas. Boshqa reference bo‘lsa, obyektga hali murojaat qilish mumkin.",
        "code": "let user = { ism: \"Ali\" };\nlet nusxa = user;\nuser = null;\nconsole.log(nusxa.ism); // Ali\nnusxa = null; // Endi bu misolda obyektga reference qolmadi.",
        "note": "Garbage collection qachon bo‘lishini odatda dastur aniq belgilamaydi. null yozish darhol xotira bo‘shashini kafolatlamaydi."
      },
      {
        "title": "3. Cheksiz yig‘iladigan ma’lumot",
        "text": "Uzoq yashaydigan massiv yoki Map ichida keraksiz obyektlarni ushlab turish xotirani ko‘paytiradi. Keshga hajm chegarasi yoki tozalash qoidasi kerak.",
        "code": "const kesh = new Map();\nkesh.set(\"user-1\", { ism: \"Ali\" });\n// Endi kerak bo‘lmasa:\nkesh.delete(\"user-1\");\n// Barcha yozuvlarni olib tashlash:\nkesh.clear();"
      },
      {
        "title": "4. Taymer va listenerni tozalash",
        "text": "Taymer callbacki va hodisa listeneri o‘zlari ishlatayotgan qiymatlarga reference saqlashi mumkin. Ish tugaganda taymer va listenerni olib tashlang.",
        "code": "const id = setInterval(() => console.log(\"tekshirish\"), 1000);\n// Bu ish endi kerak bo‘lmasa:\nclearInterval(id);\n\nfunction oynaOzgardi() { console.log(\"resize\"); }\nwindow.addEventListener(\"resize\", oynaOzgardi);\nwindow.removeEventListener(\"resize\", oynaOzgardi);",
        "note": "removeEventListener uchun o‘sha funksiya reference’i va mos capture qiymati kerak."
      },
      {
        "title": "5. Aylanma reference o‘zi leak degani emas",
        "text": "Zamonaviy collector faqat reference sonini hisoblamaydi. Bir-biriga qaragan obyektlar guruhiga tashqi faol reference qolmasa, ular ham yig‘ilishi mumkin.",
        "code": "let a = {};\nlet b = {};\na.b = b;\nb.a = a;\na = null;\nb = null; // Yopiq guruhga tashqaridan yo‘l qolmadi."
      },
      {
        "title": "6. Xotirani dalil bilan tekshirish",
        "text": "DevTools Memory/heap snapshot bilan oldingi va keyingi holatni solishtiring. Detached DOM, o‘sayotgan Map va saqlanib qolgan callback larni izlang. O‘lchashning o‘zi ham vaqt va xotira oladi; bitta katta raqamdan darhol leak xulosasi chiqarmang.",
        "code": "const kesh = new Map();\nfor (let i = 0; i < 3; i++) kesh.set(i, { i });\nconsole.log(kesh.size);\nkesh.clear();\nconsole.log(kesh.size);",
        "expectedOutput": [
          3,
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "JavaScript’da odatiy koddan “shu obyektni hozir yig‘” kafolati yo‘q. Uzoq yashaydigan kesh, closure, listener va taymerlar keraksiz ma’lumotni saqlashi mumkin. Aylanma reference o‘zi leak degani emas. delete property bilan obyekt xotirasini darhol bo‘shatish bir narsa emas."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Start/stop sanagich yarating: bir vaqtda bitta interval bo‘lsin. Listener va taymerlarni tozalash funksiyasini yozing. Keshga eng ko‘p nechta yozuv sig‘ishini belgilang."
      }
    ],
    "takeaway": "Xotira qiymatlar va obyektlar saqlanadigan resurs.\nJavaScript’da odatiy koddan “shu obyektni hozir yig‘” kafolati yo‘q.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Start/stop sanagich yarating: bir vaqtda bitta interval bo‘lsin. Listener va taymerlarni tozalash funksiyasini yozing. Keshga eng ko‘p nechta yozuv sig‘ishini belgilang.\n\nQo‘shimcha savollar:\nHar soniyada yozuv chiqaradigan start() funksiya va uni to‘xtatadigan stop() funksiya yarating. start() ikki marta chaqirilsa, ikkita interval ochilib ketmasin.",
    "resources": [
      {
        "title": "MDN: xotira boshqaruvi",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const kesh = new Map();\nkesh.set(\"a\", { n: 1 });\nconsole.log(kesh.size);\nkesh.delete(\"a\");\nconsole.log(kesh.size);\nlet a = {}; let b = {}; a.b=b; b.a=a;\na=null; b=null;\nconsole.log(a);",
    "exerciseExpected": [
      1,
      0,
      null
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — reference keshda saqlanadi\n2. 0 — yozuv olib tashlandi\n3. null — o‘zgaruvchi null, GC vaqtini bu log aytmaydi\n\nLoyihani yechish yo‘li: interval ID ni null bilan belgilang, Start uni tekshirsin. Stop intervalni bekor qilib ID ni null qilsin. Listener uchun ayni callback yoki AbortController saqlang.",
    "learningGuide": {
      "goal": "Keraksiz reference larni aniqlab, taymer/listener/kesh hayotini boshqarasiz.",
      "prerequisites": [
        "object-reference",
        "closures",
        "weakmap-weakset"
      ],
      "terms": [
        {
          "term": "Xotira leak",
          "meaning": "Endi kerak bo‘lmagan ma’lumotning reference sabab saqlanib qolishi."
        },
        {
          "term": "Heap snapshot",
          "meaning": "Obyektlar va bog‘lanishlar holatini ko‘rish uchun xotira tasviri."
        },
        {
          "term": "Cleanup",
          "meaning": "Taymer, listener va boshqa resurslarni yakunlash/tozalash."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Map dagi keraksiz yozuvni olib tashlang. Faqat tashqi o‘zgaruvchini null qilish yetadimi?",
        "brokenCode": "let key={};\nconst cache=new Map([[key,\"katta qiymat\"]]);\nkey=null; console.log(cache.size);",
        "fixedCode": "let key={};\nconst cache=new Map([[key,\"katta qiymat\"]]);\ncache.delete(key);\nkey=null; console.log(cache.size);",
        "expectedOutput": [
          0
        ],
        "explanation": "Map kalitni kuchli reference bilan ushlab turadi. delete yozuvni olib tashlaydi. Bu GC qachon ishlashini yoki xotira darhol qaytishini kafolatlamaydi.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Start/stop sanagich yarating: bir vaqtda bitta interval bo‘lsin. Listener va taymerlarni tozalash funksiyasini yozing. Keshga eng ko‘p nechta yozuv sig‘ishini belgilang.",
        "criteria": [
          "Bir vaqtda ko‘pi bilan bitta interval ishlaydi.",
          "Stop barcha kerakli resurslarni tozalaydi.",
          "Kesh hajmi belgilangan chegaradan oshmaydi."
        ],
        "hint": "interval ID ni null bilan belgilang, Start uni tekshirsin. Stop intervalni bekor qilib ID ni null qilsin. Listener uchun ayni callback yoki AbortController saqlang."
      }
    }
  },
  {
    "id": "node-basics",
    "title": "Node.js asoslari: require, ESM, process",
    "question": "Node.js nima? CommonJS va ESM farqi? process va global obyektlar nima?",
    "explanation": "Node.js JavaScript’ni brauzerdan tashqarida bajaradigan muhit. Unda odatda document yo‘q, lekin fayl, server va process API lari bor. .cjs CommonJS, .mjs ES modul uchun aniq kengaytma. Loyihadagi package.json type ham .js fayl talqiniga ta’sir qiladi.\n\nNode.js misollarini alohida .cjs yoki .mjs fayliga yozib, terminalda node bilan bajaring. Brauzer konsoli Node.js modullarini bermaydi. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "require built-in modulni oladi, paket o‘rnatish kerak emas. process.argv massiv bo‘lgani uchun typeof object. Terminalda Node ishlaydi, bu kodni oddiy brauzer konsoliga yozmang.",
        "code": "// demo.cjs: node demo.cjs\nconst path = require(\"node:path\");\nconsole.log(path.extname(\"dars.js\"));\nconsole.log(typeof process.argv);",
        "expectedOutput": [
          ".js",
          "object"
        ],
        "exampleRuntime": "node",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\".js\", \"object\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. CommonJS: require va module.exports",
        "text": "Node.js ning eski va hali ham keng tarqalgan modul tizimi. module.exports bilan eksport qilinadi, require() bilan olinadi. require sinxron bajariladi.",
        "code": "// math.cjs\nmodule.exports = { yig(a,b) { return a+b; } };\n\n// app.cjs — alohida fayl\nconst math = require(\"./math.cjs\");\nconsole.log(math.yig(1,2)); // 3"
      },
      {
        "title": "3. ESM: import va export",
        "text": "ES modul uchun .mjs yoki .js ni type:\"module\" package ichida ishlating. Static import modul yuqori darajasida e’lon qilinadi; dynamic import() Promise qaytaradi. Fayl kengaytmasi va yo‘llar aniq bo‘lsin.",
        "code": "// package.json: { \"type\": \"module\" }\n// math.js\nexport const yig = (a, b) => a + b;\n\n// app.js\nimport { yig } from \"./math.js\";\nconsole.log(yig(1, 2));"
      },
      {
        "title": "4. Ikki tizimni aralashtirmaslik",
        "text": "CJS va ESM bir loyihada mos chegaralar orqali ishlashi mumkin. ESM ichida oddiy global require yo‘q; createRequire kabi bridge kerak bo‘lishi mumkin. Zamonaviy Node ba’zi sinxron ESM modullarni require qila oladi, top-level await kabi cheklovlar bor; versiya qoidalarini tekshiring.",
        "code": "// bridge.mjs\nimport { createRequire } from \"node:module\";\nconst require = createRequire(import.meta.url);\nconst path = require(\"node:path\");\nconsole.log(path.extname(\"app.cjs\")); // \".cjs\""
      },
      {
        "title": "5. process obyekti",
        "text": "process — joriy Node.js jarayoni. process.argv komanda satri argumentlari, process.env muhit o‘zgaruvchilari, process.exit() jarayonni tugatadi.",
        "code": "console.log(process.argv); // [node, fayl, arg1, ...]\nconsole.log(process.env.NODE_ENV); // \"production\" bo'lishi mumkin\nconsole.log(process.platform); // \"darwin\", \"win32\", \"linux\"\n// process.exit(1); // xato kodi bilan tugatish"
      },
      {
        "title": "6. __dirname va __filename",
        "text": "CommonJS da joriy fayl va papka yo‘li bor. ESM da ular yo‘q: import.meta.url ishlatiladi.",
        "code": "// CJS (.cjs) faylda:\n// console.log(__dirname);\n// console.log(__filename);\n\n// ES modul (.mjs) faylda:\nimport { fileURLToPath } from \"node:url\";\nconsole.log(fileURLToPath(import.meta.url));"
      },
      {
        "title": "7. Muhit sozlamalarini aniq aylantirish",
        "text": "process.env qiymatlari odatda string yoki undefined. \"false\" stringi truthy; sonli sozlamani Number va diapazon bilan tekshiring. Tashqi qiymatni bevosita ishonchli tur deb olmang.",
        "code": "const raw = \"3000\";\nconst port = Number(raw);\nconsole.log(Number.isInteger(port) && port > 0 && port <= 65535);",
        "expectedOutput": [
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "require ESM ichida odatda global berilmaydi; kerakli holatda createRequire ishlatiladi. CJS va ESM bir loyihada mos chegaralar bilan birga yashashi mumkin. Bu har doim SyntaxError emas. Static import yuqori darajada, import() esa shart ichida ham mumkin. process.cwd joriy ishchi papka, fayl katalogi bilan bir xil bo‘lishi shart emas."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "hello.cjs faylini node hello.cjs Ali bilan ishga tushiring. process.argv[2] dan ism oling, keyin qosh funksiyasini alohida .cjs va .mjs modulga ajratib sinang."
      }
    ],
    "takeaway": "Node.js JavaScript’ni brauzerdan tashqarida bajaradigan muhit.\nrequire ESM ichida odatda global berilmaydi; kerakli holatda createRequire ishlatiladi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: hello.cjs faylini node hello.cjs Ali bilan ishga tushiring. process.argv[2] dan ism oling, keyin qosh funksiyasini alohida .cjs va .mjs modulga ajratib sinang.\n\nQo‘shimcha savollar:\n1) require va import farqi nima?\n2) process.argv nima beradi?\n3) ESM da __dirname o'rniga nima ishlatiladi?\n4) Nega ikki tizimni aralashtirish xato?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const path = require(\"node:path\");\nconsole.log(path.extname(\"app.mjs\"));\nconsole.log(typeof process);\nconsole.log(process.argv[2]);",
    "exerciseExpected": [
      ".mjs",
      "object",
      "Ali"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "1. \".mjs\" — kengaytma\n2. \"object\" — Node jarayoni API si\n3. \"Ali\" — node demo.cjs Ali dagi uchinchi argument\n\nLoyihani yechish yo‘li: const ism=process.argv[2] ?? \"Mehmon\". .cjs uchun module.exports/require, .mjs uchun export/import yozing. Fayl yo‘llarini ./ bilan aniq bering.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://nodejs.org/api/packages.html"
      }
    ],
    "learningGuide": {
      "goal": "Brauzer va Node muhitini, .cjs/.mjs va process argumentlarini ajratasiz.",
      "prerequisites": [
        "git-npm",
        "modules"
      ],
      "terms": [
        {
          "term": "Runtime",
          "meaning": "JavaScript kodini bajaradigan muhit."
        },
        {
          "term": "CommonJS",
          "meaning": "require/module.exports bilan ishlaydigan Node modul tizimi."
        },
        {
          "term": "ESM",
          "meaning": "import/export bilan ishlaydigan ES modul tizimi."
        },
        {
          "term": "Process",
          "meaning": "Ishlayotgan Node dasturining jarayoni; argv/env kabi ma’lumotlarni beradi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "node demo.cjs Ali buyrug‘idagi Ali ni o‘qing.",
        "brokenCode": "console.log(process.argv[0]);",
        "fixedCode": "console.log(process.argv[2]);",
        "expectedOutput": [
          "Ali"
        ],
        "explanation": "argv[0] Node bajariladigan fayl, argv[1] skript, argv[2] birinchi foydalanuvchi argumentidir.",
        "runtime": "node"
      },
      "write": {
        "task": "hello.cjs faylini node hello.cjs Ali bilan ishga tushiring. process.argv[2] dan ism oling, keyin qosh funksiyasini alohida .cjs va .mjs modulga ajratib sinang.",
        "criteria": [
          "node hello.cjs Ali buyruq argumentini o‘qiydi.",
          "Argument yo‘q bo‘lsa zaxira ism olinadi.",
          ".cjs va .mjs misollari mos modul sintaksisi bilan bajariladi."
        ],
        "hint": "const ism=process.argv[2] ?? \"Mehmon\". .cjs uchun module.exports/require, .mjs uchun export/import yozing. Fayl yo‘llarini ./ bilan aniq bering."
      }
    }
  },
  {
    "id": "node-fs-path",
    "title": "Node.js: fs va path bilan ishlash",
    "question": "Fayl o‘qish/yozish qanday? sync, callback va Promise farqi? path nima qiladi?",
    "explanation": "fs fayllarni o‘qish/yozish, path esa yo‘llarni tuzish uchun. Matn o‘qishda utf8 berilmasa ko‘pincha Buffer olasiz. Async fs Promise kutish paytida event loop ni band qilmaydi; sinxron usul joriy oqimni bloklaydi. Quyidagi mustaqil misol faqat o‘zi yaratgan vaqtinchalik papkada ishlaydi.\n\nNode.js misollarini alohida .cjs yoki .mjs fayliga yozib, terminalda node bilan bajaring. Brauzer konsoli Node.js modullarini bermaydi. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "mkdtemp alohida katalog yaratadi. writeFile matn yozadi, readFile uni qaytaradi. finally faqat o‘zi yaratgan katalogni tozalaydi. Haqiqiy loyiha fayllari bilan yozishdan oldin yo‘lni tekshiring.",
        "code": "const fs = require(\"node:fs/promises\");\nconst os = require(\"node:os\");\nconst path = require(\"node:path\");\n(async () => {\n  const dir = await fs.mkdtemp(path.join(os.tmpdir(), \"js-dars-\"));\n  try {\n    const file = path.join(dir, \"salom.txt\");\n    await fs.writeFile(file, \"Salom\", \"utf8\");\n    console.log(await fs.readFile(file, \"utf8\"));\n    console.log(path.extname(file));\n  } finally { await fs.rm(dir, { recursive: true, force: true }); }\n})();",
        "expectedOutput": [
          "Salom",
          ".txt"
        ],
        "exampleRuntime": "node",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Salom\", \".txt\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Uch usul",
        "text": "readFileSync darhol natija qaytaradi va boshqa kodni bloklaydi. readFile callback oladi. fs/promises dagi readFile Promise qaytaradi — zamonaviy usul.",
        "code": "// sync.cjs\nconst fs = require(\"node:fs\");\nconsole.log(fs.readFileSync(\"fayl.txt\", \"utf8\"));\n\n// callback.cjs — alohida fayl\nconst fs2 = require(\"node:fs\");\nfs2.readFile(\"fayl.txt\", \"utf8\", (err, data) => {\n  if (err) { console.error(err.code); return; }\n  console.log(data);\n});\n\n// promise.mjs — alohida fayl\nimport { readFile } from \"node:fs/promises\";\nconsole.log(await readFile(\"fayl.txt\", \"utf8\"));"
      },
      {
        "title": "3. Yozish",
        "text": "writeFile faylga yozadi. Agar fayl bor bo‘lsa, ustiga yozadi. flags bilan qo‘shimcha qilish mumkin.",
        "code": "// Alohida mashq papkasidagi yozish.mjs\nimport { writeFile, appendFile, readFile } from \"node:fs/promises\";\nawait writeFile(\"mashq.txt\", \"Salom\", \"utf8\");\nawait appendFile(\"mashq.txt\", \"\\nYana satr\", \"utf8\");\nconsole.log(await readFile(\"mashq.txt\", \"utf8\"));"
      },
      {
        "title": "4. Xatolarni tekshirish",
        "text": "Fayl yo‘q bo‘lsa, xato yuz beradi. Callback da err birinchi argument, Promise da try/catch ishlatiladi.",
        "code": "// error.mjs\nimport { readFile } from \"node:fs/promises\";\ntry { await readFile(\"yoq.txt\", \"utf8\"); }\ncatch (e) { console.log(e.code); } // yo‘q faylda ENOENT"
      },
      {
        "title": "5. path moduli",
        "text": "path.join qismlarni to‘g‘ri ajratgich bilan birlashtiradi. path.resolve mutlaq yo‘l yaratadi. path.extname kengaytmani oladi.",
        "code": "const path = require(\"path\");\nconsole.log(path.join(\"papka\", \"fayl.txt\")); // papka/fayl.txt\nconsole.log(path.resolve(\"fayl.txt\")); // /to/liq/yol/fayl.txt\nconsole.log(path.extname(\"fayl.txt\")); // \".txt\"\nconsole.log(path.basename(\"/a/b/fayl.txt\")); // \"fayl.txt\""
      },
      {
        "title": "6. Nega join kerak?",
        "text": "Windows da \"\\\", macOS/Linux da \"/\" ishlatiladi. path.join har tizimda to‘g‘ri ajratgich qo‘yadi.",
        "code": "const path = require(\"node:path\");\nconsole.log(path.join(\"papka\", \"fayl.txt\")); // ajratgich muhitga mos"
      },
      {
        "title": "7. Buffer va matn kodlash",
        "text": "Faylda baytlar saqlanadi. UTF-8 dekodlash matn qiladi. Buffer.length baytlarni, string.length UTF-16 birliklarini sanaydi; ularni bir xil o‘lchov deb olmang.",
        "code": "const b = Buffer.from(\"😀\", \"utf8\");\nconsole.log(b.length);\nconsole.log(b.toString(\"utf8\").length);",
        "expectedOutput": [
          4,
          2
        ],
        "exampleRuntime": "node"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "writeFile mavjud faylni almashtiradi; appendFile qo‘shadi. Nisbiy yo‘llar ko‘pincha process.cwd ga bog‘liq. path.join matnni birlashtiradi, foydalanuvchi yo‘lini avtomatik ruxsatli qilmaydi. readFile dan oldin exists tekshirish o‘rniga xatoni tutish odatda race ni kamaytiradi. CJS ichida top-level await yozmang; async IIFE yoki .mjs ishlating."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Alohida mashq papkasiga JSON yozing va qayta o‘qing. Buzilgan JSON bilan yo‘q fayl xatosini ajrating. Faqat mashq uchun yaratilgan fayllarni tozalang."
      }
    ],
    "takeaway": "fs fayllarni o‘qish/yozish, path esa yo‘llarni tuzish uchun.\nwriteFile mavjud faylni almashtiradi; appendFile qo‘shadi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Alohida mashq papkasiga JSON yozing va qayta o‘qing. Buzilgan JSON bilan yo‘q fayl xatosini ajrating. Faqat mashq uchun yaratilgan fayllarni tozalang.\n\nQo‘shimcha savollar:\n1) Uch o'qish usuli farqi nima?\n2) ENOENT nima?\n3) Nega path.join ishlatish kerak?\n4) path.extname(\"a.txt\") nima beradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const path = require(\"node:path\");\nconsole.log(path.extname(\"dars.json\"));\nconsole.log(path.basename(\"dars.json\"));\nconsole.log(path.posix.join(\"a\", \"b.txt\"));",
    "exerciseExpected": [
      ".json",
      "dars.json",
      "a/b.txt"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "1. \".json\" — kengaytma\n2. \"dars.json\" — faylning nomi\n3. \"a/b.txt\" — POSIX usulida birlashtirilgan yo‘l\n\nLoyihani yechish yo‘li: fs/promises bilan await writeFile(JSON.stringify(...)) va readFile(\"utf8\") ishlating. catch da e.code === \"ENOENT\" ni JSON SyntaxError dan farqlang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://nodejs.org/api/fs.html"
      }
    ],
    "learningGuide": {
      "goal": "Faylni mos encoding bilan o‘qib/yozib, yo‘l va fayl xatosini tekshirasiz.",
      "prerequisites": [
        "node-basics",
        "promises-async",
        "json-basics"
      ],
      "terms": [
        {
          "term": "Encoding",
          "meaning": "Baytlarni matn sifatida qanday talqin qilish qoidasi, masalan UTF-8."
        },
        {
          "term": "Buffer",
          "meaning": "Node muhitida baytlar ketma-ketligini saqlovchi obyekt."
        },
        {
          "term": "Nisbiy yo‘l",
          "meaning": "Ishchi papka yoki belgilangan asosga nisbatan yozilgan yo‘l."
        },
        {
          "term": "ENOENT",
          "meaning": "So‘ralgan fayl yoki yo‘l topilmaganini bildiruvchi xato kodi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Buffer ichidagi Salom matnini sonlarga aylantirmasdan o‘qing.",
        "brokenCode": "const b=Buffer.from(\"Salom\", \"utf8\");\nconsole.log(String([...b]));",
        "fixedCode": "const b=Buffer.from(\"Salom\", \"utf8\");\nconsole.log(b.toString(\"utf8\"));",
        "expectedOutput": [
          "Salom"
        ],
        "explanation": "Buffer baytlarni saqlaydi. UTF-8 bilan dekodlash matn beradi; massivga yoyish esa bayt raqamlarini beradi. readFile encoding berilmasa ham Buffer qaytaradi.",
        "runtime": "node"
      },
      "write": {
        "task": "Alohida mashq papkasiga JSON yozing va qayta o‘qing. Buzilgan JSON bilan yo‘q fayl xatosini ajrating. Faqat mashq uchun yaratilgan fayllarni tozalang.",
        "criteria": [
          "Mashq papkasiga yozilgan JSON qayta to‘g‘ri o‘qiladi.",
          "Yo‘q fayl va buzilgan JSON alohida ajratiladi.",
          "Faqat mashq uchun yaratilgan fayllar tozalanadi."
        ],
        "hint": "fs/promises bilan await writeFile(JSON.stringify(...)) va readFile(\"utf8\") ishlating. catch da e.code === \"ENOENT\" ni JSON SyntaxError dan farqlang."
      }
    }
  },
  {
    "id": "node-streams",
    "title": "Node.js: stream va event emitter",
    "question": "Stream nima? Nega katta fayllarda readFile yomon? pipe va EventEmitter qanday ishlaydi?",
    "explanation": "Stream katta ma’lumotni bo‘laklab uzatadi. Readable beradi, Writable qabul qiladi, Duplex ikkisini, Transform esa o‘zgartirishni bajaradi. Iste’molchi sekin bo‘lsa backpressure ishlab chiqarish tezligini boshqaradi. pipeline ulash va xato/tozalashni muvofiqlashtiradi.\n\nNode.js misollarini alohida .cjs yoki .mjs fayliga yozib, terminalda node bilan bajaring. Brauzer konsoli Node.js modullarini bermaydi. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Readable ikki bo‘lak beradi, Writable ularni qabul qiladi. done() shu bo‘lak tugaganini bildiradi. pipeline Promise si yakunlangach yig‘ilgan natijani chiqardik.",
        "code": "const { Readable, Writable } = require(\"node:stream\");\nconst { pipeline } = require(\"node:stream/promises\");\n(async () => {\n  const bolaklar = [];\n  const chiqish = new Writable({\n    write(chunk, encoding, done) { bolaklar.push(chunk.toString()); done(); }\n  });\n  await pipeline(Readable.from([\"Salom\", \" JS\"]), chiqish);\n  console.log(bolaklar.join(\"\"));\n})();",
        "expectedOutput": [
          "Salom JS"
        ],
        "exampleRuntime": "node",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Salom JS\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Nega stream?",
        "text": "readFile butun faylni xotiraga oladi. Katta faylda bu katta xotira talab qiladi yoki limitga yetadi. Stream esa bo‘laklab o‘qib, iste’mol tezligini boshqarishga yordam beradi.",
        "code": "const fs = require(\"fs\");\n// yomon: butun fayl xotirada\n// const data = fs.readFileSync(\"katta.txt\");\n\n// yaxshi: qism-qism\nconst stream = fs.createReadStream(\"katta.txt\", \"utf8\");\nstream.on(\"data\", chunk => console.log(chunk.length));\nstream.on(\"end\", () => console.log(\"tugadi\"));\nstream.on(\"error\", e => console.error(e.code));"
      },
      {
        "title": "3. pipe",
        "text": "pipe o‘qish oqimini yozish oqimiga ulaydi. Katta faylni nusxalash uchun eng qisqa usul.",
        "code": "const fs = require(\"node:fs\");\nconst { pipeline } = require(\"node:stream/promises\");\n(async () => {\n  try {\n    await pipeline(fs.createReadStream(\"kirish.txt\"), fs.createWriteStream(\"chiqish.txt\"));\n    console.log(\"nusxalandi\");\n  } catch (e) { console.error(e.code || e.message); }\n})();"
      },
      {
        "title": "4. EventEmitter",
        "text": "EventEmitter hodisa chiqarish va tinglash uchun. on() tinglaydi, emit() chiqaradi. Node.js da ko‘p obyektlar undan meros oladi.",
        "code": "const EventEmitter = require(\"events\");\nconst e = new EventEmitter();\ne.on(\"salom\", ism => console.log(\"Salom\", ism));\ne.emit(\"salom\", \"Ali\"); // Salom Ali"
      },
      {
        "title": "5. Xato hodisasi",
        "text": "Stream da error hodisasi bor. Uni tinglamasang, jarayon o‘chib qolishi mumkin.",
        "code": "const fs = require(\"node:fs\");\nconst s = fs.createReadStream(\"yoq.txt\");\ns.on(\"error\", e => console.log(e.code));"
      },
      {
        "title": "6. To‘rtta stream turi",
        "text": "Readable (o‘qish), Writable (yozish), Duplex (ikkisi ham), Transform (o‘zgartirib o‘tadi).",
        "code": "const fs = require(\"node:fs\");\nconst { Transform } = require(\"node:stream\");\nconst { pipeline } = require(\"node:stream/promises\");\nconst katta = new Transform({ transform(chunk, enc, cb) { cb(null, chunk.toString().toUpperCase()); } });\npipeline(fs.createReadStream(\"a.txt\", \"utf8\"), katta, fs.createWriteStream(\"b.txt\"))\n  .catch(e => console.error(e.message));"
      },
      {
        "title": "7. UTF-8 bo‘laklarini xavfsiz birlashtirish",
        "text": "StringDecoder qisman kelgan baytlarni keyingi bo‘lak bilan birlashtirib dekodlaydi. Chunkni har safar alohida toString qilish ayrim belgilarni buzishi mumkin.",
        "code": "const { StringDecoder } = require(\"node:string_decoder\");\nconst d = new StringDecoder(\"utf8\");\nconsole.log(d.write(Buffer.from([0xE2])));\nconsole.log(d.write(Buffer.from([0x82, 0xAC])));",
        "expectedOutput": [
          "",
          "€"
        ],
        "exampleRuntime": "node"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Chunk bitta satr yoki bitta JSON obyekt bilan teng bo‘lishi shart emas. UTF-8 belgi bo‘laklar orasida bo‘linishi mumkin: decodingni to‘g‘ri bajaring. pipe xatolarni barcha ishtirokchilarda to‘liq avtomatik tutish vositasi emas; pipeline qulayroq. EventEmitter error hodisasi listenersiz qolsa jarayon xato bilan tugashi mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Kichik faylni pipeline bilan nusxalang. Yo‘q kirish fayli uchun xatoni tuting. EventEmitter da on, once va off farqlarini sinang."
      }
    ],
    "takeaway": "Stream katta ma’lumotni bo‘laklab uzatadi.\nChunk bitta satr yoki bitta JSON obyekt bilan teng bo‘lishi shart emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Kichik faylni pipeline bilan nusxalang. Yo‘q kirish fayli uchun xatoni tuting. EventEmitter da on, once va off farqlarini sinang.\n\nQo‘shimcha savollar:\n1) Nega katta faylda readFile yomon?\n2) pipe nima qiladi?\n3) on va emit farqi?\n4) Stream da error ni tinglamasang nima bo'ladi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const { EventEmitter } = require(\"node:events\");\nconst e = new EventEmitter();\nlet n = 0;\ne.once(\"salom\", () => n++);\ne.emit(\"salom\"); e.emit(\"salom\");\nconsole.log(n);\nconsole.log(e.listenerCount(\"salom\"));",
    "exerciseExpected": [
      1,
      0
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "1. 1 — once faqat birinchi emitda ishladi\n2. 0 — bir martalik listener olib tashlandi\n\nLoyihani yechish yo‘li: await pipeline(createReadStream(kirish), createWriteStream(chiqish)) ni try/catch bilan o‘rang. Chiqishning finish holati bilan oddiy data hodisasini adashtirmang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://nodejs.org/api/stream.html"
      }
    ],
    "learningGuide": {
      "goal": "Bo‘laklab uzatish, backpressure va EventEmitter hayotini boshqarasiz.",
      "prerequisites": [
        "node-fs-path",
        "callbacks",
        "promises-async"
      ],
      "terms": [
        {
          "term": "Chunk",
          "meaning": "Oqimdan kelgan bitta ma’lumot bo‘lagi; bitta satr bo‘lishi shart emas."
        },
        {
          "term": "Backpressure",
          "meaning": "Qabul qiluvchi sekin bo‘lsa ishlab chiqarish tezligini cheklash mexanizmi."
        },
        {
          "term": "Pipeline",
          "meaning": "Oqimlarni ulab, yakun va xatolarini muvofiqlashtirish."
        },
        {
          "term": "EventEmitter",
          "meaning": "Nomlangan hodisalarni chiqarish va tinglash vositasi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Event ikki marta yuborilsa ham handler faqat bir marta ishlasin.",
        "brokenCode": "const { EventEmitter }=require(\"node:events\");\nconst e=new EventEmitter(); let n=0;\ne.on(\"tayyor\",()=>n++);\ne.emit(\"tayyor\"); e.emit(\"tayyor\"); console.log(n);",
        "fixedCode": "const { EventEmitter }=require(\"node:events\");\nconst e=new EventEmitter(); let n=0;\ne.once(\"tayyor\",()=>n++);\ne.emit(\"tayyor\"); e.emit(\"tayyor\"); console.log(n);",
        "expectedOutput": [
          1
        ],
        "explanation": "on doimiy tinglaydi, once birinchi chaqirilishdan keyin tinglovchini olib tashlaydi.",
        "runtime": "node"
      },
      "write": {
        "task": "Kichik faylni pipeline bilan nusxalang. Yo‘q kirish fayli uchun xatoni tuting. EventEmitter da on, once va off farqlarini sinang.",
        "criteria": [
          "Kichik fayl nusxasi asl baytlar bilan mos bo‘ladi.",
          "Yo‘q kirish fayli xatosi ushlanadi.",
          "once bir marta, on bir necha marta ishlashi ko‘rsatiladi."
        ],
        "hint": "await pipeline(createReadStream(kirish), createWriteStream(chiqish)) ni try/catch bilan o‘rang. Chiqishning finish holati bilan oddiy data hodisasini adashtirmang."
      }
    }
  },
  {
    "id": "node-http",
    "title": "Node.js da oddiy HTTP server: Express ga kirish",
    "question": "Brauzer so‘roviga JavaScript qanday javob beradi?",
    "explanation": "HTTP server so‘rovni qabul qiladi va status, header, tana qaytaradi. req kiruvchi so‘rov, res javobni yozish vositasi. Route — method va URL yo‘liga mos ish. Avval route hisobini sof funksiya sifatida ko‘ramiz, keyin uni node:http yoki Express bilan ulaymiz.\n\nNode.js misollarini alohida .cjs yoki .mjs fayliga yozib, terminalda node bilan bajaring. Brauzer konsoli Node.js modullarini bermaydi. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Bu misol port ochmaydi: route qoidasi alohida test qilinyapti. Quyidagi haqiqiy server misollari shu qarorni HTTP javobiga aylantiradi. GET uchun yozilgan route POST ga avtomatik mos kelmaydi.",
        "code": "function route(method, path) {\n  if (method === \"GET\" && path === \"/api/salom\") {\n    return { status: 200, body: { xabar: \"Salom\" } };\n  }\n  return { status: 404, body: { xabar: \"Topilmadi\" } };\n}\nconsole.log(route(\"GET\", \"/api/salom\").status);\nconsole.log(route(\"POST\", \"/api/salom\").status);",
        "expectedOutput": [
          200,
          404
        ],
        "exampleRuntime": "node",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [200, 404]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Birinchi server",
        "text": "Quyidagi kodni server.cjs fayliga yozing. Terminalda node server.cjs bilan ishga tushiring. Keyin brauzerda http://127.0.0.1:3000 ni oching.",
        "code": "const { createServer } = require(\"node:http\");\n\nconst server = createServer((req, res) => {\n  res.writeHead(200, { \"Content-Type\": \"text/plain; charset=utf-8\" });\n  res.end(\"Salom, server!\");\n});\nserver.listen(3000, \"127.0.0.1\", () => {\n  console.log(\"http://127.0.0.1:3000\");\n});",
        "note": "Terminalda Ctrl+C serverni to‘xtatadi. 3000 porti band bo‘lsa, avval o‘sha serverni to‘xtating yoki boshqa port tanlang."
      },
      {
        "title": "3. So‘rov va javob",
        "text": "req.url so‘ralgan yo‘lni, req.method usulni bildiradi. res.end javobni yakunlaydi. Bu misol birinchi serverdagi callback tanasi o‘rniga yoziladi.",
        "code": "if (req.url === \"/api/salom\" && req.method === \"GET\") {\n  res.writeHead(200, { \"Content-Type\": \"application/json; charset=utf-8\" });\n  res.end(JSON.stringify({ xabar: \"Salom\" }));\n} else {\n  res.writeHead(404, { \"Content-Type\": \"text/plain; charset=utf-8\" });\n  res.end(\"Topilmadi\");\n}",
        "note": "200 — muvaffaqiyat; 404 — mos manzil topilmadi. URL query bilan kelsa, yo‘lni URL orqali ajratish talab etiladi."
      },
      {
        "title": "4. Express bilan tanishish",
        "text": "Express yo‘llar va javoblarni yozishni soddalashtiradi. Alohida loyiha papkasida npm init -y, keyin npm install express buyrug‘ini bajaring. Quyidagi kodni app.cjs ga yozib node app.cjs bilan oching.",
        "code": "const express = require(\"express\");\nconst app = express();\napp.get(\"/\", (req, res) => {\n  res.send(\"Bosh sahifa\");\n});\napp.get(\"/api/salom\", (req, res) => {\n  res.json({ xabar: \"Salom\" });\n});\napp.listen(3000, \"127.0.0.1\");",
        "note": "Sinashdan oldin oldingi node:http serverini to‘xtating: ikkisi bir xil portni egallay olmaydi."
      },
      {
        "title": "5. Express: middleware va JSON input",
        "text": "npm install express dan keyin .cjs faylda sinang. express.json body ni parse qiladi. Input turini o‘zingiz tekshiring; noto‘g‘ri qiymatga 400 javob bering.",
        "code": "const express = require(\"express\");\nconst app = express();\napp.use(express.json({ limit: \"10kb\" }));\napp.post(\"/api/ikki\", (req, res) => {\n  const n = req.body?.n;\n  if (!Number.isFinite(n)) return res.status(400).json({ xato: \"Son kerak\" });\n  res.json({ natija: n * 2 });\n});\napp.listen(3000, \"127.0.0.1\");"
      },
      {
        "title": "6. Server hayot davri va javobni yakunlash",
        "text": "Ishlab chiqishda port band bo‘lsa avval oldingi serverni tekshiring. server.close yangi ulanishlarni qabul qilishni to‘xtatish uchun ishlatiladi; mavjud ulanishlar va resurslar hayotini ham boshqaring. Xatoni faqat konsolda chiqarish foydalanuvchiga HTTP javob berishning o‘rnini bosmaydi.",
        "code": "// Javobdagi bitta yo‘l:\n// res.writeHead(200, { \"Content-Type\": \"application/json\" });\n// res.end(JSON.stringify({ ok: true }));\n// Shu javob uchun yana res.end yoki res.send chaqirmang."
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "req.url query ni ham o‘z ichiga olishi mumkin: new URL(req.url, asos).pathname bilan ajrating. Bir javobni ikki marta end/send qilish headers-already-sent xatosiga olib keladi. JSON javobining Content-Type sini belgilang. Katta request body uchun hajm limiti va noto‘g‘ri JSON uchun 400 javob kerak. CORS autentifikatsiya o‘rnini bosmaydi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "GET /api/vaqt va GET /api/salom yo‘llarini yozing. Query param orqali ism oling, noma’lum yo‘lga 404 qaytaring. Alohida funksiyada route natijasini test qiling."
      }
    ],
    "takeaway": "HTTP server so‘rovni qabul qiladi va status, header, tana qaytaradi.\nreq.url query ni ham o‘z ichiga olishi mumkin: new URL(req.url, asos).pathname bilan ajrating.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: GET /api/vaqt va GET /api/salom yo‘llarini yozing. Query param orqali ism oling, noma’lum yo‘lga 404 qaytaring. Alohida funksiyada route natijasini test qiling.\n\nQo‘shimcha savollar:\nGET /api/vaqt yo‘lini qo‘shing. U { vaqt: yangi ISO sana } JSON javobini qaytarsin. Noma’lum yo‘l uchun 404 javob qaytishini ham tekshiring.",
    "resources": [
      {
        "title": "Node.js: birinchi server",
        "url": "https://nodejs.org/learn/getting-started/introduction-to-nodejs"
      },
      {
        "title": "Express: birinchi ilova",
        "url": "https://expressjs.com/en/starter/hello-world/"
      },
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://nodejs.org/api/http.html"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "const u = new URL(\"/api/salom?ism=Ali\", \"http://localhost:3000\");\nconsole.log(u.pathname);\nconsole.log(u.searchParams.get(\"ism\"));\nconsole.log(JSON.stringify({ xabar: \"Salom\" }));",
    "exerciseExpected": [
      "/api/salom",
      "Ali",
      "{\"xabar\":\"Salom\"}"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "1. \"/api/salom\" — query yo‘ldan ajratildi\n2. \"Ali\" — parametr matn sifatida olindi\n3. \"{\\\"xabar\\\":\\\"Salom\\\"}\" — javob tanasi JSON matniga aylantirildi\n\nLoyihani yechish yo‘li: Request yo‘lini new URL bilan parse qiling. Mos metod va pathname uchun 200/JSON, boshqa holat uchun 404/JSON. Node server callbackida sof route funksiyasining natijasini res ga yozing.",
    "learningGuide": {
      "goal": "Method va pathname bo‘yicha route tanlab, aniq status va JSON javob berasiz.",
      "prerequisites": [
        "node-basics",
        "fetch-api",
        "json-basics"
      ],
      "terms": [
        {
          "term": "Route",
          "meaning": "HTTP method va yo‘lga mos bajariladigan ish."
        },
        {
          "term": "Header",
          "meaning": "Javob yoki so‘rov haqidagi metama’lumot, masalan Content-Type."
        },
        {
          "term": "Middleware",
          "meaning": "Expressda request yo‘lining bir bosqichida ishlaydigan funksiya."
        },
        {
          "term": "Port",
          "meaning": "Kompyuterda server ulanishni qaysi raqamli nuqtada qabul qilishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Query bor bo‘lsa ham /api/salom marshruti topilsin.",
        "brokenCode": "const requestUrl=\"/api/salom?ism=Ali\";\nconsole.log(requestUrl === \"/api/salom\");",
        "fixedCode": "const requestUrl=\"/api/salom?ism=Ali\";\nconst u=new URL(requestUrl, \"http://localhost\");\nconsole.log(u.pathname === \"/api/salom\");",
        "expectedOutput": [
          true
        ],
        "explanation": "So‘rov URL ida query ham bo‘lishi mumkin. pathname yo‘lni ajratadi; parametrlar searchParams orqali olinadi.",
        "runtime": "node"
      },
      "write": {
        "task": "GET /api/vaqt va GET /api/salom yo‘llarini yozing. Query param orqali ism oling, noma’lum yo‘lga 404 qaytaring. Alohida funksiyada route natijasini test qiling.",
        "criteria": [
          "GET /api/salom va /api/vaqt to‘g‘ri JSON beradi.",
          "Query ism pathname dan alohida olinadi.",
          "Noma’lum yo‘l 404 qaytaradi va javob bir marta yakunlanadi."
        ],
        "hint": "Request yo‘lini new URL bilan parse qiling. Mos metod va pathname uchun 200/JSON, boshqa holat uchun 404/JSON. Node server callbackida sof route funksiyasining natijasini res ga yozing."
      }
    }
  },
  {
    "id": "design-patterns",
    "title": "Design patternlar: Factory, Singleton, Observer, Module",
    "question": "Eng ko‘p so‘raladigan patternlar nima? Qachon qaysi birini ishlatish kerak?",
    "explanation": "Pattern — qayta uchraydigan muammoni hal qilishning nomlangan usuli. Factory yaratishni ajratadi, Observer o‘zgarish xabarini tarqatadi, Module ichki holatni yashiradi. Pattern ishlatish maqsad emas: avval muammo va soddaroq yechimni aniqlang.\n\nMisollarni brauzer konsolida alohida sinang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Factory bir xil tuzilmani izchil yaratdi. Har chaqirish yangi obyekt berdi. Qaysi tuzilma qaytishini bitta joyda boshqarish mumkin.",
        "code": "function userYarat(ism, rol = \"user\") {\n  return { ism, rol };\n}\nconst a = userYarat(\"Ali\");\nconst b = userYarat(\"Vali\", \"admin\");\nconsole.log(a.rol);\nconsole.log(b.rol);\nconsole.log(a === b);",
        "expectedOutput": [
          "user",
          "admin",
          false
        ],
        "exampleRuntime": "javascript",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"user\", \"admin\", false]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Factory",
        "text": "Obyekt yaratishni alohida funksiyaga o‘tkazadi. Qaysi tur yaratilishi parametrgabog‘liq. new bilan to‘g‘ridan-to‘g‘ri yaratish o‘rniga ishlatiladi.",
        "code": "function yarat(tur, ism) {\n  if (tur === \"user\") return { ism, rol: \"user\" };\n  if (tur === \"admin\") return { ism, rol: \"admin\" };\n  throw new Error(\"Noma'lum tur\");\n}\nconst u = yarat(\"admin\", \"Ali\");\nconsole.log(u.rol); // admin"
      },
      {
        "title": "3. Singleton",
        "text": "Bir klassdan faqat bitta obyekt bo‘lishini kafolatlaydi. Birinchi chaqirishda yaratilib, keyingilarida shu obyekt qaytariladi.",
        "code": "class Sozlamalar {\n  static instance;\n  constructor() {\n    if (Sozlamalar.instance) return Sozlamalar.instance;\n    this.til = \"uz\";\n    Sozlamalar.instance = this;\n  }\n}\nconst a = new Sozlamalar();\nconst b = new Sozlamalar();\nconsole.log(a === b); // true"
      },
      {
        "title": "4. Observer (kuzatuvchi)",
        "text": "Bir obyekt holati o‘zgarganda, unga bog‘langan barcha kuzatuvchilarga xabar beradi. EventEmitter va reaktiv tizimlarning asosi.",
        "code": "class Kuzatuvchi {\n  constructor() { this.tinglovchilar = []; }\n  qosh(fn) { this.tinglovchilar.push(fn); }\n  xabar(v) { this.tinglovchilar.forEach(fn => fn(v)); }\n}\nconst k = new Kuzatuvchi();\nk.qosh(x => console.log(\"bir:\", x));\nk.qosh(x => console.log(\"ikki:\", x));\nk.xabar(\"yangi\");"
      },
      {
        "title": "5. Module pattern",
        "text": "Closure bilan ochiq va yopiq qismlarni ajratadi. Faqat qaytarilgan metodlar tashqariga ko‘rinadi.",
        "code": "const hisob = (function () {\n  let son = 0; // yopiq\n  return {\n    oshir() { return ++son; },\n    qiymat() { return son; }\n  };\n})();\nhisob.oshir();\nconsole.log(hisob.qiymat()); // 1\n// hisob.son — ko'rinmaydi"
      },
      {
        "title": "6. Qachon qaysi?",
        "text": "Factory — turga qarab obyekt yaratish. Singleton — bitta umumiy holat (sozlamalar, kesh). Observer — holat o‘zgarishini tarqatish. Module — ma’lumotni yashirish.",
        "code": "// umumiy qoida: patternni muammo talab qilsa qo'llan\n// \"har joyda pattern ishlatish\" — yomon odat"
      },
      {
        "title": "7. Unsubscribe qaytaradigan Observer",
        "text": "Set takroriy ayni funksiya reference ini kamaytiradi. Emit vaqtida snapshot olish listener o‘chishi/qo‘shilishi qoidalarini aniq qiladi.",
        "code": "function kanal() {\n  const set = new Set();\n  return {\n    subscribe(fn) { set.add(fn); return () => set.delete(fn); },\n    emit(v) { for (const fn of [...set]) fn(v); }\n  };\n}\nconst k = kanal();\nconst off = k.subscribe(x => console.log(x));\nk.emit(\"bir\"); off(); k.emit(\"ikki\");",
        "expectedOutput": [
          "bir"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Singleton bu kod/muhitda bir instance ni ulashadi, butun internet yoki barcha workerlar bo‘yicha bitta holat kafolati emas. Umumiy singleton testlarni bir-biriga bog‘lashi mumkin. Observer unsubscribe bermasa listenerlar yig‘iladi. Module pattern bilan ES module bir xil mexanizm emas, ikkalasi ham yashirishga yordam berishi mumkin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Obuna bo‘lish va obunani bekor qilish funksiyasini qaytaradigan kuzatuvchi yozing. Bir tinglovchini o‘chirib, keyingi xabar faqat qolganlariga borishini tekshiring."
      }
    ],
    "takeaway": "Pattern — qayta uchraydigan muammoni hal qilishning nomlangan usuli.\nSingleton bu kod/muhitda bir instance ni ulashadi, butun internet yoki barcha workerlar bo‘yicha bitta holat kafolati emas.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Obuna bo‘lish va obunani bekor qilish funksiyasini qaytaradigan kuzatuvchi yozing. Bir tinglovchini o‘chirib, keyingi xabar faqat qolganlariga borishini tekshiring.\n\nQo‘shimcha savollar:\n1) Factory va new farqi nima?\n2) Singleton nega bitta obyekt qaytaradi?\n3) Observer qayerda ishlatiladi?\n4) Module pattern ma’lumotni qanday yashiradi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function yarat() { let n = 0; return { oshir: () => ++n }; }\nconst a = yarat(), b = yarat();\nconsole.log(a.oshir());\nconsole.log(a.oshir());\nconsole.log(b.oshir());\nconsole.log(a.n);",
    "exerciseExpected": [
      1,
      2,
      1,
      {
        "$undefined": true
      }
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 1 — a holati\n2. 2 — a o‘zini davom ettiradi\n3. 1 — b mustaqil\n4. undefined — closure ichidagi n ochiq maydon emas\n\nLoyihani yechish yo‘li: subscribe(fn) Set ga qo‘shsin va () => set.delete(fn) qaytarsin. emit snapshot bo‘yicha yursin. Listener throw qilsa qolganlari ishlash siyosatini aniq belgilang.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va qo‘shimcha misollar",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Design_pattern"
      }
    ],
    "learningGuide": {
      "goal": "Patternni nom uchun emas, aniq yaratish/obuna/holat muammosi uchun tanlaysiz.",
      "prerequisites": [
        "classes",
        "closures",
        "callbacks"
      ],
      "terms": [
        {
          "term": "Factory",
          "meaning": "Obyekt yaratish qarorini bir joyga jamlovchi funksiya yoki interfeys."
        },
        {
          "term": "Observer",
          "meaning": "O‘zgarish bo‘lganda obunachilarga xabar berish usuli."
        },
        {
          "term": "Singleton",
          "meaning": "Muayyan modul yoki muhit doirasida umumiy bitta instance ulashish usuli."
        },
        {
          "term": "Unsubscribe",
          "meaning": "Oldin qo‘shilgan tinglovchini olib tashlash amali."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Obunani bekor qilgach handler ikkinchi xabarni olmasin.",
        "brokenCode": "const subs=new Set();\nconst fn=x=>console.log(x); subs.add(fn);\nfor(const f of subs) f(\"bir\");\nsubs.delete(x=>console.log(x));\nfor(const f of subs) f(\"ikki\");",
        "fixedCode": "const subs=new Set();\nconst fn=x=>console.log(x); subs.add(fn);\nfor(const f of subs) f(\"bir\");\nsubs.delete(fn);\nfor(const f of subs) f(\"ikki\");",
        "expectedOutput": [
          "bir"
        ],
        "explanation": "Bir xil yozilgan ikki funksiya alohida reference. Obunani o‘chirish uchun qo‘shilgan funksiyaning o‘zi kerak.",
        "runtime": "javascript"
      },
      "write": {
        "task": "Obuna bo‘lish va obunani bekor qilish funksiyasini qaytaradigan kuzatuvchi yozing. Bir tinglovchini o‘chirib, keyingi xabar faqat qolganlariga borishini tekshiring.",
        "criteria": [
          "Ikkita obunachi bir xabarni oladi.",
          "Bittasi unsubscribe bo‘lgach faqat qolganiga xabar boradi.",
          "Obunachi qo‘shish/olib tashlash emit qoidasi aniq belgilangan."
        ],
        "hint": "subscribe(fn) Set ga qo‘shsin va () => set.delete(fn) qaytarsin. emit snapshot bo‘yicha yursin. Listener throw qilsa qolganlari ishlash siyosatini aniq belgilang."
      }
    }
  },
  {
    "id": "testing-basics",
    "title": "Testing: unit test, Jest va Vitest asoslari",
    "question": "Unit test nima? test/expect qanday yoziladi? Nega test muhim?",
    "explanation": "Test — kirish, amal va kutilgan natijani tekshiradigan kichik dastur. “Kodni ishga tushirdim” bilan “natija to‘g‘ri ekanini assert qildim” farq qiladi. Bir test bir aniq xulqni tekshirsin, xato bo‘lsa tushunarli sabab ko‘rsatsin. Jest/Vitest test runner, matcher esa tekshirish ifodasi.\n\nNode.js misollarini alohida .cjs yoki .mjs fayliga yozib, terminalda node bilan bajaring. Brauzer konsoli Node.js modullarini bermaydi. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Bu mustaqil Node .cjs misolida built-in assert ishlatildi, paket kerak emas. Natija boshqa bo‘lsa assert xato beradi va oxirgi logga yetilmaydi. Keyingi bo‘limlarda Jest/Vitest sintaksisi ko‘rsatiladi.",
        "code": "const assert = require(\"node:assert/strict\");\nfunction qosh(a, b) { return a + b; }\nassert.equal(qosh(2, 3), 5);\nassert.equal(qosh(0, 0), 0);\nconsole.log(\"Tekshiruvlar o‘tdi\");",
        "expectedOutput": [
          "Tekshiruvlar o‘tdi"
        ],
        "exampleRuntime": "node",
        "note": "Konsolga chiqadigan qiymatlar tartibi: [\"Tekshiruvlar o‘tdi\"]. Har bir console.log bitta natija beradi."
      },
      {
        "title": "2. Oddiy test",
        "text": "Test runner muhitida test(nom,fn) bitta holatni tekshiradi. Jest/Vitest expect(natija).toBe(kutilgan) uchun Object.is asosidagi tekshiruv qiladi: NaN teng, +0 va -0 farqli. Obyekt tarkibini toEqual bilan tekshiring.",
        "code": "function yig(a, b) { return a + b; }\n\ntest(\"1 + 2 = 3\", () => {\n  expect(yig(1, 2)).toBe(3);\n});"
      },
      {
        "title": "3. Ko‘p keng tarqalgan matcherlar",
        "text": "toBe qat’iy tenglik, toEqual tarkibni solishtirish (obyekt/massiv), toBeTruthy, toBeFalsy, toContain, toThrow.",
        "code": "expect([1, 2]).toEqual([1, 2]); // tarkib\nexpect({ a: 1 }).toEqual({ a: 1 });\nexpect([]).toBeTruthy();\nexpect([1, 2]).toContain(1);\nexpect(() => { throw new Error(\"x\"); }).toThrow();"
      },
      {
        "title": "4. Guruh va tayyorgarlik",
        "text": "describe bilan testlarni guruhlash. beforeEach har testdan oldin bajariladi, afterEach keyin.",
        "code": "describe(\"hisob\", () => {\n  let hisob;\n  beforeEach(() => { hisob = 0; });\n  test(\"oshirish\", () => { expect(++hisob).toBe(1); });\n});"
      },
      {
        "title": "5. Sof funksiyalar testi oson",
        "text": "Yon ta’siri yo‘q funksiyani sinash oson: kirish berasan, chiqishni tekshirasan. Tashqi holatga bog‘liq funksiyani sinash qiyin.",
        "code": "// yaxshi: sof\nexpect(yig(2, 3)).toBe(5);\n\n// qiyin: tashqi holat va vaqtga bog'liq\n// expect(Date.now()).toBe(...) — ishonchsiz"
      },
      {
        "title": "6. Qamrov (coverage)",
        "text": "Coverage kodning necha foizi test bilan qoplanganini ko‘rsatadi. 100% har doim ham kerak emas: muhim yo‘llarga e’tibor berish yaxshiroq.",
        "code": "// npx vitest run --coverage\n// npx jest --coverage"
      },
      {
        "title": "7. Arrange, Act, Assert va asinxron test",
        "text": "Avval ma’lumot tayyorlanadi, keyin ish bajariladi, oxirida natija tekshiriladi. Test runner kerakli Promise ni kutishi uchun async testda await bo‘lsin.",
        "code": "// Vitest: test faylida\nimport { test, expect } from \"vitest\";\ntest(\"Promise natijasi\", async () => {\n  const natija = await Promise.resolve(5);\n  expect(natija).toBe(5);\n});"
      },
      {
        "title": "8. Toza test holati va mock chegarasi",
        "text": "Mock tashqi tarmoq yoki vaqtni nazorat qiladi. Hammasini mock qilsangiz haqiqiy integratsiya xatolari yashirinishi mumkin. Sof funksiyaga keraksiz mock qo‘shmang; muhim chegaralarni haqiqiy integratsiyada ham tekshiring.",
        "code": "// Har test o‘z kirishini yaratsin:\nconst kirish = [3, 1, 2];\nconst chiqish = kirish.toSorted((a,b) => a-b);\nconsole.log(kirish);\nconsole.log(chiqish);",
        "expectedOutput": [
          [
            3,
            1,
            2
          ],
          [
            1,
            2,
            3
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "9. Jest yoki Vitest ni ishga tushirish",
        "text": "Testlar brauzer konsolida emas, test runner ichida ishlaydi. Jest uchun npm install --save-dev jest va npx jest buyruqlaridan foydalaniladi. Quyidagi Vitest misoli uchun npm install --save-dev vitest bajaring, kodni hisob.test.js fayliga saqlang, so‘ng npx vitest run yozing. Muhitingiz tanlangan vositaning Node.js talablari bilan mos bo‘lsin.",
        "code": "import { test, expect } from \"vitest\";\n\nfunction qosh(a, b) { return a + b; }\n\ntest(\"2 va 3 yig‘indisi 5\", () => {\n  expect(qosh(2, 3)).toBe(5);\n});",
        "note": "Jestning odatiy CommonJS muhitida test va expect global beriladi; Vitest misolida ular import qilindi. Ikkita runnerni aralashtirmasdan bittasini tanlang."
      },
      {
        "title": "10. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Jest/Vitest dagi toBe Object.is asosida ishlaydi; obyekt tarkibi uchun toEqual. Async test Promise ni return yoki await qilmasa erta o‘tib ketishi mumkin. Boshqa testdan qolgan holat va real vaqt/tarmoq flaky natija beradi. Coverage yuqori bo‘lishi talablar to‘liq tekshirilganini kafolatlamaydi."
      },
      {
        "title": "11. Kichik amaliy loyiha",
        "text": "Chegirma funksiyasini normal qiymat, 0, chegaraviy foiz va noto‘g‘ri tur bilan test qiling. Asinxron rad etilishni ham await bilan tekshiring."
      }
    ],
    "takeaway": "Test — kirish, amal va kutilgan natijani tekshiradigan kichik dastur.\nJest/Vitest dagi toBe Object.is asosida ishlaydi; obyekt tarkibi uchun toEqual.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Chegirma funksiyasini normal qiymat, 0, chegaraviy foiz va noto‘g‘ri tur bilan test qiling. Asinxron rad etilishni ham await bilan tekshiring.\n\nQo‘shimcha savollar:\n1) toBe va toEqual farqi nima?\n2) beforeEach qachon ishlaydi?\n3) Nega sof funksiyani test qilish oson?\n4) Coverage 100% bo'lishi shartmi?",
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "function qosh(a,b) { return a+b; }\nconsole.log(qosh(2,3) === 5);\nconsole.log(qosh(0,0) === 0);\nconsole.log(Object.is(NaN, NaN));\nconsole.log(Object.is(0, -0));",
    "exerciseExpected": [
      true,
      true,
      true,
      false
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "1. true — oddiy holat\n2. true — chegaraviy 0\n3. true — Object.is NaN ni teng deb biladi\n4. false — Object.is ishorali nollarni farqlaydi\n\nLoyihani yechish yo‘li: Kutilgan natijani qo‘lda hisoblab yozing. toThrow uchun funksiya reference i, Promise rejection uchun await expect(...).rejects ishlating. BeforeEach orqali kerakli holatni har testga yangidan bering.",
    "resources": [
      {
        "title": "Vitest: boshlash",
        "url": "https://vitest.dev/guide/"
      },
      {
        "title": "Jest: boshlash",
        "url": "https://jestjs.io/docs/getting-started"
      }
    ],
    "learningGuide": {
      "goal": "Kutilgan xulqni assert bilan tekshirib, normal va chegaraviy holatlarni sinaysiz.",
      "prerequisites": [
        "functions",
        "errors-try-catch",
        "promises-async",
        "git-npm"
      ],
      "terms": [
        {
          "term": "Assertion",
          "meaning": "Haqiqiy natija kutilgan talabga mosligini tekshirish."
        },
        {
          "term": "Test runner",
          "meaning": "Testlarni topib bajaradigan va hisobot beradigan vosita."
        },
        {
          "term": "Matcher",
          "meaning": "toBe/toEqual kabi taqqoslash qoidasi."
        },
        {
          "term": "Mock",
          "meaning": "Testda vaqt yoki tashqi tizimni nazoratli o‘rinbosar bilan almashtirish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir console.log natijasini avval yozing. Qiymat turini va nima uchun shu natija chiqqanini tushuntiring.",
      "debug": {
        "task": "Ikki massivning qiymatlari tengligini tekshiring.",
        "brokenCode": "const assert=require(\"node:assert/strict\");\nassert.equal([1,2],[1,2]);\nconsole.log(\"o‘tdi\");",
        "fixedCode": "const assert=require(\"node:assert/strict\");\nassert.deepEqual([1,2],[1,2]);\nconsole.log(\"o‘tdi\");",
        "expectedOutput": [
          "o‘tdi"
        ],
        "explanation": "Strict equal obyekt reference larini taqqoslaydi. node:assert/strict dagi deepEqual ichki qiymatlar va tuzilmani tekshiradi.",
        "runtime": "node"
      },
      "write": {
        "task": "Chegirma funksiyasini normal qiymat, 0, chegaraviy foiz va noto‘g‘ri tur bilan test qiling. Asinxron rad etilishni ham await bilan tekshiring.",
        "criteria": [
          "Oddiy narx uchun kutilgan chegirma tasdiqlanadi.",
          "0 va chegaraviy foizlar tekshiriladi.",
          "Asinxron xato testi haqiqatan Promise ni kutadi."
        ],
        "hint": "Kutilgan natijani qo‘lda hisoblab yozing. toThrow uchun funksiya reference i, Promise rejection uchun await expect(...).rejects ishlating. BeforeEach orqali kerakli holatni har testga yangidan bering."
      }
    }
  },
  {
    "id": "lint-format",
    "title": "ESLint va Prettier: kod sifati",
    "question": "Koddagi muammolarni topish va formatni bir xil qilish qanday ishlaydi?",
    "explanation": "Kod sifati uchta alohida savol: ESLint shubhali kodni topadimi, Prettier ko‘rinishni bir xil qiladimi, test kerakli xulqni tasdiqlaydimi? Ularning biri boshqasining o‘rnini bosmaydi. Avval vositalarni loyiha ichiga o‘rnating va muhitini browser/Node deb moslang.\n\nBuyruqlar loyiha papkasida ochilgan terminalda bajariladi. JSON, HTML va JS namunalarini o‘z fayllariga joylang. Har misolda avval natijani taxmin qiling, keyin kodni bajaring va sababini tushuntiring.",
    "sections": [
      {
        "title": "1. Birinchi misolni satrma-satr o‘qiymiz",
        "text": "Birinchi buyruq ESLint konfiguratsiya savollarini beradi. Prettier loyiha ichida o‘rnatiladi. Tekshirish buyruqlari xatolarni ko‘rsatadi; --check fayllarni o‘zi qayta yozmaydi.",
        "code": "npm init @eslint/config@latest\nnpm install --save-dev --save-exact prettier\nnpx eslint .\nnpx prettier . --check"
      },
      {
        "title": "2. ESLint ni sozlash",
        "text": "Loyihada package.json bo‘lmasa npm init -y bajaring. So‘ng rasmiy sozlash yordamchisini ishga tushiring va kodingiz qayerda ishlashini tanlang: browser yoki Node.js.",
        "code": "npm init @eslint/config@latest\nnpx eslint .",
        "note": "Yordamchi loyiha uchun eslint.config.* faylini yaratadi. Uning savollariga loyiha turiga mos javob bering."
      },
      {
        "title": "3. ESLint qanday muammo topadi?",
        "text": "Aniq qoidalar konfiguratsiyaga bog‘liq. Masalan, e’lon qilinmagan nomni ishlatish no-undef, ishlatilmagan o‘zgaruvchi esa no-unused-vars bilan belgilanadi. Avval xabarni o‘qing, keyin sababini tuzating.",
        "code": "const ism = \"Ali\";\nconsole.log(ismm); // ism deb yozilishi kerak",
        "note": "Linter nom xatosini topishi mumkin. Ammo algoritmingiz biznes talabiga to‘g‘ri javob berishini bilmaydi."
      },
      {
        "title": "4. Prettier o‘rnatish",
        "text": "Prettier ni loyiha ichiga devDependency sifatida o‘rnating. --check formatni tekshiradi, --write esa fayllarni qayta formatlaydi.",
        "code": "npm install --save-dev --save-exact prettier\nnpx prettier . --check\nnpx prettier . --write",
        "note": "Formatlashdan keyin git diff bilan o‘zgarishlarni ko‘ring. Paketning aniq versiyasi loyihada qayd etiladi."
      },
      {
        "title": "5. Birgalikda ishlatish",
        "text": "package.json ning scripts maydoniga quyidagi buyruqlarni yozish mumkin. Tekshirish buyruqlarini loyiha topshirishdan oldin ishlating.",
        "code": "\"scripts\": {\n  \"lint\": \"eslint .\",\n  \"format\": \"prettier . --write\",\n  \"format:check\": \"prettier . --check\"\n}\n\n# Terminalda:\nnpm run lint\nnpm run format:check",
        "note": "ESLint dagi format qoidalari Prettier bilan to‘qnashsa, rasmiy integratsiya yo‘riqnomasiga qarab moslang."
      },
      {
        "title": "6. Flat config va muhit global nomlari",
        "text": "Quyidagi browser .js misoli uchun npm install --save-dev eslint @eslint/js globals bajaring. Config ni eslint.config.mjs ga yozing. Node loyihasi uchun globals.node kabi mos to‘plamni tanlang.",
        "code": "import js from \"@eslint/js\";\nimport globals from \"globals\";\nexport default [\n  js.configs.recommended,\n  { files: [\"**/*.js\"], languageOptions: { globals: globals.browser } }\n];"
      },
      {
        "title": "7. Tekshirish bilan yozishni ajratish",
        "text": "Avval check bilan farq borligini bilib oling. prettier --write o‘zgartiradi; keyin git diff bilan ko‘ring. Generated fayllar va build chiqishini kerak bo‘lsa ignore qiling.",
        "code": "npx prettier . --check\nnpx prettier . --write\ngit diff\n# .prettierignore uchun misol:\n# dist/\n# coverage/"
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar va tekshirish tartibi",
        "text": "Linter algoritmingiz to‘g‘riligini bilmaydi. --fix barcha muammoni xavfsiz tuzatib bermaydi: farqni ko‘ring va test qiling. Browser kodiga Node global sozlamasini yoki aksincha berish yolg‘on no-undef keltiradi. Prettier va ESLint format qoidalarini bir-biriga zid qilib qo‘ymang. Config sintaksisi o‘rnatilgan vosita versiyasiga mos bo‘lsin."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Oldingi kichik loyihaga lint, format:check va test skriptlarini qo‘shing. Bir ataylab noto‘g‘ri nom, bir format farqi va bir noto‘g‘ri hisob natijasini uchta vosita qanday topishini solishtiring."
      }
    ],
    "takeaway": "Kod sifati uchta alohida savol: ESLint shubhali kodni topadimi, Prettier ko‘rinishni bir xil qiladimi, test kerakli xulqni tasdiqlaydimi? Ularning biri boshqasining o‘rnini bosmaydi.\nLinter algoritmingiz to‘g‘riligini bilmaydi.",
    "exercise": "Quyidagi kodni o‘qing. Har bir natijani va uning sababini yozing. Keyin javobni ochib tekshiring.\n\nMustaqil mashq: Oldingi kichik loyihaga lint, format:check va test skriptlarini qo‘shing. Bir ataylab noto‘g‘ri nom, bir format farqi va bir noto‘g‘ri hisob natijasini uchta vosita qanday topishini solishtiring.\n\nQo‘shimcha savollar:\nAlohida kichik loyihada ESLint va Prettier ni sozlang. Noto‘g‘ri yozilgan o‘zgaruvchi nomini linter topishini, chekinishlarni formatter tuzatishini tekshiring.",
    "resources": [
      {
        "title": "ESLint: boshlash",
        "url": "https://eslint.org/docs/latest/use/getting-started/"
      },
      {
        "title": "Prettier: o‘rnatish",
        "url": "https://prettier.io/docs/install"
      }
    ],
    "fullTextDefault": true,
    "courseExpanded": 1,
    "exerciseCode": "npm run lint\nnpm run format:check\nnpm test",
    "exerciseExpected": [
      "ESLint qoidalari tekshiriladi",
      "Prettier format mosligini tekshiradi",
      "Loyihadagi test scripti bajariladi"
    ],
    "exerciseRuntime": "terminal",
    "exerciseAnswer": "1. \"ESLint qoidalari tekshiriladi\" — scripts da lint bo‘lishi kerak\n2. \"Prettier format mosligini tekshiradi\" — --check o‘zi formatlamaydi\n3. \"Loyihadagi test scripti bajariladi\" — test vositasi package.json da tanlanadi\n\nLoyihani yechish yo‘li: scripts ichida lint: eslint ., format:check: prettier . --check, test: vitest run kabi buyruqlarni belgilang. Tool ishlamasa o‘rnatilgan paket va muhit konfiguratsiyasini tekshiring.",
    "learningGuide": {
      "goal": "Linter, formatter va test topadigan turli muammolarni ajratasiz.",
      "prerequisites": [
        "git-npm",
        "testing-basics"
      ],
      "terms": [
        {
          "term": "Linter",
          "meaning": "Qoidaga zid yoki shubhali kodni ko‘rsatuvchi vosita."
        },
        {
          "term": "Formatter",
          "meaning": "Kodning chekinish va satr ko‘rinishini izchil qiluvchi vosita."
        },
        {
          "term": "Configuration",
          "meaning": "Vosita qaysi fayl va qoidalar bilan ishlashini belgilovchi sozlama."
        },
        {
          "term": "Exit code",
          "meaning": "Buyruq muvaffaqiyat yoki xato bilan tugaganini ko‘rsatuvchi son."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir buyruq nima bajarishini ayting. Natija loyiha holatiga bog‘liq bo‘lsa, nimani ko‘rsatishini tushuntiring.",
      "debug": {
        "task": "CI tekshiruvi fayllarni o‘zgartirmasdan formatni tekshirsin.",
        "brokenCode": "npx prettier . --write",
        "fixedCode": "npx prettier . --check",
        "expectedOutput": [
          "Format mos bo‘lsa muvaffaqiyat kodi, mos kelmasa xato kodi qaytadi."
        ],
        "explanation": "--write fayllarni qayta yozadi; --check faqat mosligini tekshiradi. Buyruq Prettier o‘rnatilgan loyiha ildizida bajariladi.",
        "runtime": "terminal"
      },
      "write": {
        "task": "Oldingi kichik loyihaga lint, format:check va test skriptlarini qo‘shing. Bir ataylab noto‘g‘ri nom, bir format farqi va bir noto‘g‘ri hisob natijasini uchta vosita qanday topishini solishtiring.",
        "criteria": [
          "Noto‘g‘ri o‘zgaruvchi nomini linter ko‘rsatadi.",
          "Format farqini Prettier check aniqlaydi.",
          "Noto‘g‘ri hisob natijasini test aniqlaydi; formatlash uni tuzatmaydi."
        ],
        "hint": "scripts ichida lint: eslint ., format:check: prettier . --check, test: vitest run kabi buyruqlarni belgilang. Tool ishlamasa o‘rnatilgan paket va muhit konfiguratsiyasini tekshiring."
      }
    }
  },
  {
    "id": "expressions-statements",
    "title": "Expression va statement: kod qiymati va amali",
    "question": "Ifodani buyruqdan ajratib, arrow funksiya va return natijasini o‘qiysiz.",
    "explanation": "Kodni o‘qishda birinchi savol: bu bo‘lak qiymat hisoblayaptimi yoki bajariladigan ishni tashkil qilyaptimi? 2 + 3 — ifoda, const n = 2 + 3; esa deklaratsiya. Chaqirish ifoda bo‘lishi mumkin: funksiya aniq return bermasa, chaqirish qiymati undefined bo‘ladi. Console ko‘rsatgan har qanday yozuvni qaytuvchi qiymat deb olmang.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-expressions-statements",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "1-satrda a funksiyaning ifoda tanasi x + 1 ni qaytaradi. 2-satrda b tanasi blok: x + 1 hisoblanadi, ammo return yo‘q. 3-satr 3 ni oladi, 4-satr undefined oladi. Funksiya yaratish uning tanasini darhol bajarmaydi.",
        "code": "const a = x => x + 1;\nconst b = x => { x + 1; };\nconsole.log(a(2));\nconsole.log(b(2));",
        "expectedOutput": [
          3,
          {
            "$undefined": true
          }
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "a(2)",
              "x = 2; x + 1 → 3",
              "Ifoda tanasi 3 ni qaytaradi."
            ],
            [
              "console.log(a(2))",
              "Konsolda 3",
              "a chaqirishi log argumentini berdi."
            ],
            [
              "b(2)",
              "x + 1 → 3, return yo‘q",
              "Chaqirish qiymati undefined."
            ],
            [
              "console.log(b(2))",
              "Konsolda undefined",
              "Hisoblangan 3 avtomatik qaytarilmadi."
            ]
          ]
        }
      },
      {
        "title": "3. Ifoda qayerlarda ishlatiladi?",
        "text": "O‘ng tomon, argument, shart va return dan keyin ifoda bo‘lishi mumkin. Ifoda ichida qiymat berish ham yon ta’sir qiladi; uni shart bilan adashtirmang. if esa ifoda emas: qiymat kerak joyda ternary yozish mumkin.",
        "code": "const n = 2 + 3;\nconst matn = n > 3 ? \"katta\" : \"kichik\";\nconsole.log(matn);",
        "expectedOutput": [
          "katta"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Blok bilan obyekt literalini ajrating",
        "text": "Arrow dan keyingi { } odatda funksiya tanasi bo‘ladi. Obyekt ifodasini bevosita qaytarishda uni qavsga oling.",
        "code": "const yarat = ism => ({ ism });\nconsole.log(yarat(\"Ali\").ism);",
        "expectedOutput": [
          "Ali"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. console.log va return bir xil emas",
        "text": "console.log konsolga yozadi va undefined qaytaradi. return esa chaqiruvchi kutayotgan qiymatni beradi. DevTools oxirgi ifoda natijasini alohida ko‘rsatishi mumkin: bu yana bir log emas.",
        "code": "function qosh(a,b) { return a+b; }\nconst n = qosh(2,3);\nconsole.log(n * 2);",
        "expectedOutput": [
          10
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Ko‘p uchraydigan xatolar",
        "text": "Arrow blok tanasida return ni unutish; if ni ifoda o‘rniga ishlatish; console.log natijasini hisoblangan son deb olish. Assignment ifodasi qiymat ham beradi, holatni ham o‘zgartiradi; murakkab shartda uni alohida satrga ajratish o‘qishni osonlashtiradi."
      },
      {
        "title": "7. Kichik amaliy loyiha",
        "text": "Bir xil ikki funksiya yozing: biri ifoda tanali arrow, ikkinchisi return li blok. Ikkalasi berilgan narxga 10 qo‘shsin. Keyin obyekt qaytaradigan arrow yozing."
      }
    ],
    "takeaway": "Ifoda qiymat hisoblaydi. Buyruq kod tuzilishi va bajarilishini tashkil qiladi. Arrow ning { } tanasida qiymat qaytarish uchun return kerak.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "const a = () => ({ n: 2 });\nconst b = () => { n: 2 };\nconsole.log(a().n);\nconsole.log(b());",
    "exerciseExpected": [
      2,
      {
        "$undefined": true
      }
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — qavs ichidagi obyekt qaytarildi, uning n maydoni o‘qildi.\n2. undefined — b tanasida n: belgilangan statement bor; bu qaytarilgan obyekt emas. return yozilmagan.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators"
      }
    ],
    "learningGuide": {
      "goal": "Ifodani buyruqdan ajratib, arrow funksiya va return natijasini o‘qiysiz.",
      "prerequisites": [
        "operators",
        "functions"
      ],
      "terms": [
        {
          "term": "Expression — ifoda",
          "meaning": "Hisoblanib qiymat beradigan kod: 2 + 3, ism yoki qosh(2,3)."
        },
        {
          "term": "Statement — buyruq",
          "meaning": "Kod bajarilishini tashkil qiladigan sintaksis: if, return, let deklaratsiyasi."
        },
        {
          "term": "Implicit return",
          "meaning": "Arrow funksiyaning ifoda tanasi qiymatni return yozmasdan qaytarishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: ikki(3) 6 qaytarsin.",
        "brokenCode": "const ikki = x => { x * 2; };\nconsole.log(ikki(3));",
        "fixedCode": "const ikki = x => { return x * 2; };\nconsole.log(ikki(3));",
        "expectedOutput": [
          6
        ],
        "runtime": "javascript",
        "explanation": "Blok ichidagi hisoblash natijasi return orqali chaqiruvchiga uzatildi."
      },
      "write": {
        "task": "Bir xil ikki funksiya yozing: biri ifoda tanali arrow, ikkinchisi return li blok. Ikkalasi berilgan narxga 10 qo‘shsin. Keyin obyekt qaytaradigan arrow yozing.",
        "criteria": [
          "0 kirganda ikkala funksiya 10 qaytaradi.",
          "5 kirganda ikkala funksiya 15 qaytaradi.",
          "Obyekt qaytaruvchi funksiya undefined emas, { jami: ... } beradi."
        ],
        "hint": "Avval x => x + 10, keyin x => { return x + 10; } yozing. Obyekt uchun x => ({ jami: x + 10 }) ishlating; log ni funksiya tashqarisida yozing."
      }
    }
  },
  {
    "id": "execution-context-stack",
    "title": "Execution context va call stack: kod qayerga qaytadi?",
    "question": "Ichma-ich funksiya chaqirishlarini va return dan keyin davom etadigan qatorni kuzatasiz.",
    "explanation": "Funksiya deklaratsiyasini ko‘rish uning tanasi hozir bajarilayotganini bildirmaydi. Tana chaqirish kelganda ishlaydi. Tashqi funksiya ichki funksiya natijasini kutayotganda uning ishlari saqlanadi; ichki chaqirish yakunlangach tashqi hisob davom etadi. Stackni pastdan yuqoriga chizib, ustiga kirgan chaqirishni avval tugating.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-execution-context-stack",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "Dastlab ikki va jami funksiyalari tayyorlanadi. Oxirgi satr jami(3) ni chaqiradi. jami ichida ikki(3) ishlaydi va 6 qaytaradi. Shundan so‘ng jami dagi + 1 hisoblanadi, 7 log ga uzatiladi.",
        "code": "function ikki(n) {\n  return n * 2;\n}\nfunction jami(n) {\n  return ikki(n) + 1;\n}\nconsole.log(jami(3));",
        "expectedOutput": [
          7
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "jami(3) chaqirildi",
              "Stack: script → jami; n = 3",
              "return ifodasidagi ikki(n) kerak."
            ],
            [
              "ikki(3) chaqirildi",
              "Stack: script → jami → ikki; n = 3",
              "3 * 2 hisoblanadi."
            ],
            [
              "ikki return 6",
              "Stack: script → jami",
              "jami 6 + 1 ni hisoblaydi."
            ],
            [
              "jami return 7",
              "Stack: script",
              "console.log 7 ni chiqaradi."
            ]
          ]
        }
      },
      {
        "title": "3. Har chaqirishning mahalliy qiymatlari",
        "text": "Bir funksiyani ikki marta chaqirish bir xil parametr joyini umumiy hisoblagichga aylantirmaydi. Har chaqirishda alohida mahalliy bog‘lanishlar bor.",
        "code": "function oshir(n) { n += 1; return n; }\nconsole.log(oshir(1));\nconsole.log(oshir(1));",
        "expectedOutput": [
          2,
          2
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Return tananing qolganini to‘xtatadi",
        "text": "Oddiy tanada return dan keyingi satr ishlamaydi. try/finally bor bo‘lsa finally chiqishdan oldin ishlashi mumkin; uni oddiy misolga aralashtirmay, keyin alohida tekshiring.",
        "code": "function ol() {\n  return 4;\n  console.log(\"yetib kelmaydi\");\n}\nconsole.log(ol());",
        "expectedOutput": [
          4
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. Rekursiyada qaytish yo‘li",
        "text": "Har bosqich n * keyingiNatija ni kutadi. Asosiy shart qiymat bergach kutayotgan ko‘paytmalar teskari tartibda yakunlanadi. Juda chuqur rekursiya stack limitiga yetishi mumkin.",
        "code": "function f(n) {\n  if (n === 1) return 1;\n  return n * f(n - 1);\n}\nconsole.log(f(3));",
        "expectedOutput": [
          6
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Stack va asinxron kutishni aralashtirmang",
        "text": "Bu dars oddiy sinxron chaqirishlar haqida. setTimeout funksiyani keyinga rejalaydi. await odatdagi chaqiruvchi stackni butun kutish davomida band ushlab turmaydi; davomi keyin rejalashtiriladi. Buni Event loop darsi bilan bog‘lang."
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar",
        "text": "Fayldagi barcha funksiya tanalarini yuqoridan pastga bajarildi deb o‘qish; ichki funksiya qaytgach tashqi funksiya ham avtomatik tugaydi deb o‘ylash; return qiymatini global o‘zgaruvchi deb olish."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "narx, chegirma va jami nomli uch funksiya yozing. jami ichida qolganlarini chaqiring. Bitta chaqirish uchun stack va qaytgan qiymatlar jadvalini tuzing."
      }
    ],
    "takeaway": "Chaqirish → ichki ish → return → chaqirishdan keyingi davom. Stackdagi faol chaqirishlar tartibi lexical scope zanjiri bilan bir xil tushuncha emas.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "function a(n) { return n + 1; }\nfunction b(n) { return a(n) * 2; }\nconsole.log(b(4));",
    "exerciseExpected": [
      10
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 10 — b(4) a(4) ni kutadi; a 5 qaytaradi, b uni 2 ga ko‘paytirib 10 qaytaradi. Keyin log ishlaydi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"
      }
    ],
    "learningGuide": {
      "goal": "Ichma-ich funksiya chaqirishlarini va return dan keyin davom etadigan qatorni kuzatasiz.",
      "prerequisites": [
        "functions",
        "recursion",
        "expressions-statements"
      ],
      "terms": [
        {
          "term": "Execution context",
          "meaning": "Bajarilayotgan kodning nomlar va boshqa kerakli holatlar bilan bog‘liq muhiti."
        },
        {
          "term": "Call stack",
          "meaning": "Faol chaqirishlar tartibi: oxirgi kirgan chaqirish avval yakunlanadi."
        },
        {
          "term": "Stack frame",
          "meaning": "Bitta faol chaqirish haqidagi ma’lumotni ifodalovchi qadam."
        },
        {
          "term": "Return point",
          "meaning": "Ichki chaqirish tugagach tashqi kod davom etadigan joy."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: tashqi(3) 7 qaytarsin.",
        "brokenCode": "function ichki(n) { n * 2; }\nfunction tashqi(n) { return ichki(n) + 1; }\nconsole.log(tashqi(3));",
        "fixedCode": "function ichki(n) { return n * 2; }\nfunction tashqi(n) { return ichki(n) + 1; }\nconsole.log(tashqi(3));",
        "expectedOutput": [
          7
        ],
        "runtime": "javascript",
        "explanation": "Ichki return bo‘lmasa undefined + 1 natijasi NaN. Tuzatishda ichki chaqirish 6 ni berdi, tashqi hisob 7 bo‘ldi."
      },
      "write": {
        "task": "narx, chegirma va jami nomli uch funksiya yozing. jami ichida qolganlarini chaqiring. Bitta chaqirish uchun stack va qaytgan qiymatlar jadvalini tuzing.",
        "criteria": [
          "Ichki funksiyalarni alohida chaqirib natijasini tekshirasiz.",
          "Tashqi chaqirishda hisoblash tartibini yozasiz.",
          "Har return dan keyin kod qayerga qaytishini ko‘rsatasiz."
        ],
        "hint": "narx(dona) dona * 100, chegirma(summa) summa - 10 qaytarsin. jami(dona) ichida chegirma(narx(dona)) yozing. dona=2 uchun 200, keyin 190 chiqishini kuzating."
      }
    }
  },
  {
    "id": "lexical-environment",
    "title": "Lexical environment: qaysi o‘zgaruvchi o‘qiladi?",
    "question": "Nomni ichki muhitdan tashqariga qidirib, shadowing va closure natijasini oldindan aytasiz.",
    "explanation": "x ni o‘qiganda JavaScript shunchaki fayldagi eng yaqin yozilgan x ni olmaydi. Avval joriy scope tekshiriladi, so‘ng tashqi scope lar ketma-ket qaraladi. Funksiya boshqa joydan chaqirilsa ham uning yozilgan joyidagi tashqi muhit bog‘lanishi o‘zgarmaydi. Buni xotiraning aniq fizik chizmasi emas, nom qidirish modeli sifatida o‘rganing.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-lexical-environment",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "ol tashqi muhitda yaratilgan. ishgaTushir ichidagi x shu funksiyaning mahalliy nomi. ol() chaqirilganda uning tashqi muhitida x=\"tashqi\" topiladi; chaqiruvchining mahalliy x i olinmaydi.",
        "code": "const x = \"tashqi\";\nfunction ol() { return x; }\nfunction ishgaTushir() {\n  const x = \"ichki\";\n  return ol();\n}\nconsole.log(ishgaTushir());",
        "expectedOutput": [
          "tashqi"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "ishgaTushir()",
              "Mahalliy x = \"ichki\"",
              "ol() chaqiriladi."
            ],
            [
              "ol ichida x so‘rovi",
              "ol ning o‘zida x yo‘q",
              "ol yaratilgan tashqi muhit tekshiriladi."
            ],
            [
              "Tashqi x topildi",
              "\"tashqi\"",
              "ol shu qiymatni qaytaradi."
            ],
            [
              "Log",
              "\"tashqi\"",
              "Chaqiruvchidagi x qidirish yo‘lini almashtirmadi."
            ]
          ]
        }
      },
      {
        "title": "3. Shadowing: ichki nom birinchi",
        "text": "Blokdagi bir xil nom tashqisini berkitadi. Blok tugagach tashqi nom yana o‘qiladi.",
        "code": "let x = 1;\n{ let x = 2; console.log(x); }\nconsole.log(x);",
        "expectedOutput": [
          2,
          1
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Closure qiymat suratini emas, binding ni ko‘radi",
        "text": "Funksiya tashqi nom bilan bog‘lanishni saqlaydi. Shu binding yangilansa, keyingi chaqirish yangi qiymatni ko‘radi. const primitive uchun esa qayta qiymat berish mumkin emas.",
        "code": "let n = 1;\nconst ol = () => n;\nn = 3;\nconsole.log(ol());",
        "expectedOutput": [
          3
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. Topilgan nom hali TDZ da bo‘lishi mumkin",
        "text": "Ichki let topilgach tashqi nomga o‘tib ketilmaydi. Ichki nom hali initialized bo‘lmasa ReferenceError keladi.",
        "code": "let x = 1;\ntry {\n  console.log(x);\n  let x = 2;\n} catch (e) { console.log(e.name); }",
        "expectedOutput": [
          "ReferenceError"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Har chaqirish alohida closure muhiti yaratadi",
        "text": "Bir factory dan olingan ikki hisoblagich alohida n larni saqlashi mumkin. Bir factory chaqirishidan qaytgan ikki funksiya esa shu bitta muhitni bo‘lishadi.",
        "code": "function yarat() { let n=0; return () => ++n; }\nconst a=yarat(), b=yarat();\nconsole.log(a());\nconsole.log(a());\nconsole.log(b());",
        "expectedOutput": [
          1,
          2,
          1
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar",
        "text": "Scope zanjirini call stack bilan tenglashtirish; closure tashqi qiymatni doim muzlatib saqlaydi deb olish; ichki TDZ bo‘lsa tashqi nom ishlaydi deb o‘ylash."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Ikki mustaqil hisoblagich yarating. Birinchisini ikki marta, ikkinchisini bir marta chaqiring. Har n qaysi factory chaqirishiga tegishli ekanini yozing."
      }
    ],
    "takeaway": "Nom qidirishda joriy scope → lexical tashqi scope lar. Chaqirilgan joy muhit zanjirini almashtirmaydi. Closure tashqi binding bilan bog‘liq.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "let n = 1;\nconst ol = () => n;\nfunction ish() { const n = 9; return ol(); }\nn = 2;\nconsole.log(ish());",
    "exerciseExpected": [
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 2 — ol tashqi n binding ini ko‘radi. U 2 ga yangilangan; ish ichidagi 9 ol ning tashqi muhiti emas.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures"
      }
    ],
    "learningGuide": {
      "goal": "Nomni ichki muhitdan tashqariga qidirib, shadowing va closure natijasini oldindan aytasiz.",
      "prerequisites": [
        "scope",
        "hoisting-tdz",
        "closures",
        "execution-context-stack"
      ],
      "terms": [
        {
          "term": "Binding — bog‘lanish",
          "meaning": "Nom bilan qiymat saqlanadigan joy o‘rtasidagi bog‘lanish."
        },
        {
          "term": "Lexical environment",
          "meaning": "Mahalliy nomlar va tashqi muhit bilan bog‘lanishni tushuntiruvchi model."
        },
        {
          "term": "Shadowing",
          "meaning": "Ichki scope dagi bir xil nom tashqi nomni berkitishi."
        },
        {
          "term": "Lexical scope",
          "meaning": "Nom qidirish funksiya qayerda yozilganiga bog‘liq bo‘lishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: ish() ichidagi 5 ol ga aniq uzatilsin.",
        "brokenCode": "const x=1;\nfunction ol() { return x; }\nfunction ish() { const x=5; return ol(); }\nconsole.log(ish());",
        "fixedCode": "function ol(x) { return x; }\nfunction ish() { const x=5; return ol(x); }\nconsole.log(ish());",
        "expectedOutput": [
          5
        ],
        "runtime": "javascript",
        "explanation": "Chaqiruvchining mahalliy qiymati avtomatik olinmaydi. Parametr va argument bilan u aniq uzatildi."
      },
      "write": {
        "task": "Ikki mustaqil hisoblagich yarating. Birinchisini ikki marta, ikkinchisini bir marta chaqiring. Har n qaysi factory chaqirishiga tegishli ekanini yozing.",
        "criteria": [
          "Birinchi hisoblagich 1, keyin 2 beradi.",
          "Ikkinchisi birinchi chaqirishda 1 beradi.",
          "Tashqarida umumiy global n ishlatilmagan."
        ],
        "hint": "yarat ichida let n=0 saqlang va () => ++n qaytaring. a=yarat() va b=yarat() ikkita alohida chaqirish bo‘lsin."
      }
    }
  },
  {
    "id": "evaluation-order",
    "title": "Ifodaning bajarilish tartibi va short-circuit",
    "question": "Operator guruhlanishi bilan operandlarning bajarilishini ajratib, qaysi funksiya chaqirilishini aniqlaysiz.",
    "explanation": "2 + 3 * 4 yozuvi 2 + (3 * 4) bo‘lib guruhlanadi. Lekin funksiya chaqirishlari qatnashganda “ustun operatorning yonidagi hamma funksiya avval chaqiriladi” deb o‘ylamang. Oddiy binary ifodalarda operand ifodalari chapdan o‘ngga baholanadi; keyin guruhlashga muvofiq hisob yakunlanadi. Qisqa baholovchi operatorlar esa ayrim operandlarni butunlay tashlab ketadi.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-evaluation-order",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "Tashqi log argumenti tayyor bo‘lishi kerak. Avval chapdagi ol(2), keyin o‘ng tomondagi ko‘paytmaning ol(3) va ol(4) chaqirishlari ishlaydi. Ko‘paytma 12, yig‘indi 14 bo‘ladi. Oxirgi log shundan keyin yozadi.",
        "code": "function ol(n) { console.log(n); return n; }\nconsole.log(ol(2) + ol(3) * ol(4));",
        "expectedOutput": [
          2,
          3,
          4,
          14
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "ol(2)",
              "Log 2; qaytish 2",
              "Chap operand tayyor."
            ],
            [
              "ol(3)",
              "Log 3; qaytish 3",
              "Ko‘paytmaning chap operandi."
            ],
            [
              "ol(4)",
              "Log 4; qaytish 4",
              "3 * 4 → 12."
            ],
            [
              "2 + 12",
              "14",
              "Tashqi console.log 14 chiqaradi."
            ]
          ]
        }
      },
      {
        "title": "3. &&, || va ?? qiymat qaytaradi",
        "text": "&& chap falsy bo‘lsa o‘ngni tashlaydi. || chap truthy bo‘lsa o‘ngni tashlaydi. ?? chap null/undefined bo‘lmasa o‘ngni tashlaydi. Ular faqat true/false qaytarmaydi.",
        "code": "function zaxira() { console.log(\"chaqirildi\"); return 9; }\nconsole.log(0 && zaxira());\nconsole.log(\"Ali\" || zaxira());\nconsole.log(0 ?? zaxira());",
        "expectedOutput": [
          0,
          "Ali",
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Ternary faqat tanlangan shoxni bajaradi",
        "text": "Shartdan keyin ikkita shoxning ikkalasi emas, faqat tanlangani hisoblanadi. Qavslar maqsadni aniq ko‘rsatadi.",
        "code": "const ok = false;\nconsole.log(ok ? \"ha\" : \"yo‘q\");\nconsole.log((0 || 2) + 3);",
        "expectedOutput": [
          "yo‘q",
          5
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. ?? ni && yoki || bilan aralashtirish",
        "text": "Qavssiz null ?? false || true kabi yozuv SyntaxError. Nima kerakligini qavs bilan aniq belgilang; qavs tanlovi natijaga ta’sir qiladi.",
        "code": "console.log((null ?? false) || true);\nconsole.log(0 ?? (false || true));",
        "expectedOutput": [
          true,
          0
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. ++ qiymati bilan yangi holatni ajrating",
        "text": "Postfix eski qiymatni qaytaradi, lekin o‘zgaruvchini oshiradi. Prefix yangi qiymatni qaytaradi. Bir satrda ko‘p mutation qilish o‘qishni qiyinlashtiradi.",
        "code": "let n = 1;\nconst old = n++;\nconsole.log(old);\nconsole.log(n);\nconsole.log(++n);",
        "expectedOutput": [
          1,
          2,
          3
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar",
        "text": "Ustunlikni funksiya chaqirish tartibi bilan tenglashtirish; && doim boolean beradi deb o‘ylash; || bilan yaroqli 0 ni almashtirib yuborish; hamma shox ishlaydi deb o‘qish."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Qiymat qabul qiluvchi funksiya yozing: 0 saqlansin, null/undefined bo‘lsa hisobla() dan zaxira olinsin. hisobla necha marta ishlaganini sanang."
      }
    ],
    "takeaway": "Avval guruhlashni, so‘ng operandlarning ketma-ket bajarilishini ko‘ring. Short-circuit bo‘lsa o‘ng operand umuman bajarilmasligi mumkin.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "let n = 0;\nconst a = 0 && ++n;\nconst b = 0 ?? ++n;\nconst c = 0 || ++n;\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(n);",
    "exerciseExpected": [
      0,
      0,
      1,
      1
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. 0 — && o‘ngini bajarmadi.\n2. 0 — ?? chap 0 ni saqladi, o‘ng bajarilmadi.\n3. 1 — || uchun 0 falsy, ++n ishladi.\n4. 1 — n faqat bir marta oshdi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence"
      }
    ],
    "learningGuide": {
      "goal": "Operator guruhlanishi bilan operandlarning bajarilishini ajratib, qaysi funksiya chaqirilishini aniqlaysiz.",
      "prerequisites": [
        "operators",
        "conditionals",
        "functions",
        "expressions-statements"
      ],
      "terms": [
        {
          "term": "Precedence — ustunlik",
          "meaning": "Operatorlar ifodada qanday guruhlanishini belgilaydi: * odatda + dan oldin bog‘lanadi."
        },
        {
          "term": "Evaluation — baholash",
          "meaning": "Ifodani bajarib qiymatini olish jarayoni."
        },
        {
          "term": "Short-circuit",
          "meaning": "Natija ma’lum bo‘lgani uchun o‘ng operandni bajarmaslik."
        },
        {
          "term": "Side effect — yon ta’sir",
          "meaning": "Hisobdan tashqari log chiqarish yoki tashqi holatni o‘zgartirish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: 0 saqlansin, faqat null/undefined da zaxira ishlasin.",
        "brokenCode": "const count=0;\nconsole.log(count || 10);",
        "fixedCode": "const count=0;\nconsole.log(count ?? 10);",
        "expectedOutput": [
          0
        ],
        "runtime": "javascript",
        "explanation": "|| barcha falsy qiymatlarni almashtiradi. ?? bu talab uchun 0 ni saqlaydi."
      },
      "write": {
        "task": "Qiymat qabul qiluvchi funksiya yozing: 0 saqlansin, null/undefined bo‘lsa hisobla() dan zaxira olinsin. hisobla necha marta ishlaganini sanang.",
        "criteria": [
          "0 uchun hisobla chaqirilmaydi.",
          "null uchun hisobla bir marta chaqiriladi.",
          "Natija bilan chaqirish sonini alohida log qilib tushuntirasiz."
        ],
        "hint": "let calls=0; function hisobla(){ calls++; return 10; } yarating. const ol=x=>x ?? hisobla(); yozing, ol(0) va ol(null) ni sinang."
      }
    }
  },
  {
    "id": "functions-as-values",
    "title": "Funksiya qiymat sifatida: fn, fn() va return fn()",
    "question": "Funksiyani uzatish, chaqirish va natijasini qaytarish orasidagi farqni koddan aniqlaysiz.",
    "explanation": "const f = qosh yozuvi qosh ni bajarmaydi: o‘sha funksiya qiymati f orqali ham olinadi. const n = qosh(2,3) esa funksiyani hozir chaqirib, uning natijasini saqlaydi. Har uchragan () ni belgilang va shu chaqirish nimani qaytarishini yozing. Callback uzatilgan paytda uning tanasi albatta ishlaydi degan qoida yo‘q; uni qabul qilgan kod qachon chaqirsa, o‘shanda ishlaydi.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-functions-as-values",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "yarat(2) son emas, yangi arrow funksiya qaytaradi. f shu funksiyani saqlaydi. typeof f funksiya ekanini ko‘rsatadi. f() ichida saqlangan n=2 olinib, 3 qaytariladi. Bu yerda ikkita alohida chaqirish bor: yarat(2) va f().",
        "code": "function yarat(n) {\n  return () => n + 1;\n}\nconst f = yarat(2);\nconsole.log(typeof f);\nconsole.log(f());",
        "expectedOutput": [
          "function",
          3
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "yarat(2)",
              "n = 2; yangi arrow yaratildi",
              "Funksiya qiymati f ga saqlandi."
            ],
            [
              "typeof f",
              "\"function\"",
              "f hali chaqirilmadi."
            ],
            [
              "f()",
              "n + 1 → 3",
              "Ichki funksiya chaqirildi."
            ],
            [
              "console.log(f())",
              "3",
              "Qaytgan son ko‘rsatildi."
            ]
          ]
        }
      },
      {
        "title": "3. fn bilan fn() ni taqqoslang",
        "text": "Birinchisi funksiya qiymatini uzatadi, ikkinchisi chaqirish natijasini uzatadi. Funksiya natijasi yana funksiya bo‘lishi ham mumkin: faqat qavs borligiga qarab natija son deyish xato.",
        "code": "function ikki(n) { return n * 2; }\nconst fn = ikki;\nconst natija = ikki(3);\nconsole.log(typeof fn);\nconsole.log(natija);",
        "expectedOutput": [
          "function",
          6
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Callbackni kim chaqiradi?",
        "text": "run ga berilgan fn keyin run tanasida chaqiriladi. Agar run(ikki(3), 4) desak, fn ga 6 keladi va 6 funksiya emasligi uchun xato bo‘ladi.",
        "code": "function ikki(n) { return n * 2; }\nfunction run(fn, qiymat) { return fn(qiymat); }\nconsole.log(run(ikki, 4));",
        "expectedOutput": [
          8
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. return fn va return fn()",
        "text": "return fn funksiyaning o‘zini qaytaradi. return fn() uni hozir chaqiradi va natijani qaytaradi. Quyida biri function, ikkinchisi number.",
        "code": "function ol() { return 7; }\nfunction a() { return ol; }\nfunction b() { return ol(); }\nconsole.log(typeof a());\nconsole.log(b());",
        "expectedOutput": [
          "function",
          7
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Funksiya identifikatsiyasi va this",
        "text": "Ikki alohida arrow bir xil kodli bo‘lsa ham boshqa qiymat. Bir funksiyani boshqa nomga berish esa shu qiymatni saqlaydi. Metodni ajratib olish this ni avtomatik bog‘lamaydi; this darsidagi bind/call qoidalarini qo‘llang.",
        "code": "const a = () => 1;\nconst b = a;\nconsole.log(a === b);\nconsole.log(a === (() => 1));",
        "expectedOutput": [
          true,
          false
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar",
        "text": "Callback o‘rniga uning natijasini yuborish; console.log qilgan funksiya kerakli sonni ham qaytaradi deb o‘ylash; factory qaytargan funksiyani chaqirmay son bilan qo‘shish; metodning this bog‘lanishini yo‘qotish."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "ko‘paytiruvchi(n) yozing: u son qabul qiladigan yangi funksiya qaytarsin. Ikki va uchga ko‘paytiruvchilarni yarating. Callback oladigan run yordamida ularni ishlating."
      }
    ],
    "takeaway": "fn — funksiya qiymati; fn() — hozirgi chaqirish natijasi. return fn va return fn() bir xil emas. Har bir qavsdan keyin natijaning turini yozing.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "function ol() { return 5; }\nfunction a() { return ol; }\nfunction b() { return ol(); }\nconsole.log(typeof a());\nconsole.log(a()());\nconsole.log(b());",
    "exerciseExpected": [
      "function",
      5,
      5
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"function\" — a ol funksiyasini qaytardi.\n2. 5 — birinchi () a ni, ikkinchisi qaytgan ol ni chaqirdi.\n3. 5 — b ichida ol hozir chaqirilib, uning natijasi qaytarildi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
      }
    ],
    "learningGuide": {
      "goal": "Funksiyani uzatish, chaqirish va natijasini qaytarish orasidagi farqni koddan aniqlaysiz.",
      "prerequisites": [
        "functions",
        "callbacks",
        "closures",
        "expressions-statements"
      ],
      "terms": [
        {
          "term": "Function value",
          "meaning": "O‘zgaruvchiga yozish, argument sifatida uzatish yoki qaytarish mumkin bo‘lgan funksiya qiymati."
        },
        {
          "term": "Invocation — chaqirish",
          "meaning": "Funksiya nomi/ifodasidan keyingi () orqali tanani ishga tushirish."
        },
        {
          "term": "Callback",
          "meaning": "Boshqa kod chaqirishi uchun berilgan funksiya."
        },
        {
          "term": "Factory",
          "meaning": "Yangi obyekt yoki funksiya yaratib qaytaradigan funksiya."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: run callbackni o‘zi chaqirib 6 olsin.",
        "brokenCode": "function ikki(n) { return n * 2; }\nfunction run(fn) { return fn(3); }\nconsole.log(run(ikki(3)));",
        "fixedCode": "function ikki(n) { return n * 2; }\nfunction run(fn) { return fn(3); }\nconsole.log(run(ikki));",
        "expectedOutput": [
          6
        ],
        "runtime": "javascript",
        "explanation": "ikki(3) natijasi 6 bo‘lib, uni fn sifatida chaqirib bo‘lmaydi. ikki qiymati uzatilganda run fn(3) ni bajara oladi."
      },
      "write": {
        "task": "ko‘paytiruvchi(n) yozing: u son qabul qiladigan yangi funksiya qaytarsin. Ikki va uchga ko‘paytiruvchilarni yarating. Callback oladigan run yordamida ularni ishlating.",
        "criteria": [
          "ikki(4) 8, uch(4) 12 qaytaradi.",
          "run ga ikki funksiyasi () siz beriladi.",
          "Factory qaytargan qiymat turini va ikkinchi chaqirish natijasini tushuntirasiz."
        ],
        "hint": "function kopaytiruvchi(n){return x=>x*n;} bilan boshlang. const ikki=kopaytiruvchi(2); function run(fn,x){return fn(x);} yozing."
      }
    }
  },
  {
    "id": "strict-mode-asi",
    "title": "Strict mode va ASI: yashirin xatolarni tushunish",
    "question": "Strict rejimdagi xatolarni ajratib, return yonidagi yangi qator va nuqtali vergul ta’sirini tushuntirasiz.",
    "explanation": "JavaScript har bir yangi qatorda buyruqni avtomatik tugatmaydi. Ba’zi joylarda ; qo‘shiladi, ba’zi joylarda keyingi qator oldingi ifodaning davomi bo‘lib qoladi. Strict mode esa ; qoidasi emas, bajarilish va sintaksisdagi ayrim cheklovlar rejimidir. Bu ikki tushunchani alohida kuzating. ES modullar va class tanalari avtomatik strict; oddiy script yoki oddiy funksiya uchun mos joyda \"use strict\" yoziladi.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-strict-mode-asi",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "return dan keyin darhol yangi qator kelgan. ASI bu yerda return; kabi ta’sir qiladi: qiymatsiz qaytish undefined. Keyingi 5; ifoda statement iga yetib kelinmaydi. Kod ishlaydi, ammo kutilgan 5 ni bermaydi.",
        "code": "function ol() {\n  return\n    5;\n}\nconsole.log(ol());",
        "expectedOutput": [
          {
            "$undefined": true
          }
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "ol()",
              "Funksiya tanasi boshlandi",
              "return satriga o‘tadi."
            ],
            [
              "return va yangi qator",
              "return; sifatida tugaydi",
              "Qiymatsiz qaytish undefined."
            ],
            [
              "5;",
              "Yetib kelinmaydi",
              "ol allaqachon qaytdi."
            ],
            [
              "console.log",
              "undefined",
              "Bu SyntaxError emas."
            ]
          ]
        }
      },
      {
        "title": "3. Strict: e’lon qilinmagan nomga yozish",
        "text": "Tasodifan global nom yaratishga tayanmang. Quyidagi misolni alohida bajaring: strict funksiya ichidagi yo‘q nomga yozish ReferenceError beradi. typeof orqali tekshirayotgan xato turi konsolda ko‘rinadi.",
        "code": "function sinov() {\n  \"use strict\";\n  try { jsCoreMissingName = 1; }\n  catch (e) { console.log(e.name); }\n}\nsinov();",
        "expectedOutput": [
          "ReferenceError"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Strict: oddiy chaqirishdagi this",
        "text": "Oddiy f() chaqirishida strict funksiya this ni global obyektga almashtirmaydi. Metod chaqirish va arrow lexical this qoidalari alohida qoladi.",
        "code": "function f() { \"use strict\"; return this; }\nconsole.log(f() === undefined);",
        "expectedOutput": [
          true
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. return bilan obyektni birga boshlang",
        "text": "Obyekt qaytarish uchun return bilan ochuvchi qavsni bir qatorda yozing. Keyingi qatorlar qavs ichida davom etishi mumkin.",
        "code": "function user() {\n  return {\n    ism: \"Ali\"\n  };\n}\nconsole.log(user().ism);",
        "expectedOutput": [
          "Ali"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Yangi qator har doim yangi buyruq emas",
        "text": "Quyidagi (2 + 3) oldingi sonni chaqirishga urinishning davomi bo‘ladi: 1(2+3), natijada TypeError. Misol ichki Function orqali alohida parse qilinadi. Nuqtali vergulni qo‘yib tuzating.",
        "code": "try {\n  new Function(\"const n = 1\\n(2 + 3)\")();\n} catch (e) { console.log(e.name); }\nconst n = 1;\nconsole.log(2 + 3);",
        "expectedOutput": [
          "TypeError",
          5
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Strict qayerda yoqiladi?",
        "text": "Directive oddiy script yoki funksiya tanasining boshida bo‘lsin. ES modul va class ichida strict avtomatik. Default/rest/destructuring parametrli funksiya ichiga \"use strict\" directive yozish SyntaxError; kerak bo‘lsa tashqi script/modulda strict rejimni belgilang. Strict optimizatsiya tugmasi yoki barcha xatolarni topadigan vosita emas."
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar",
        "text": "Har yangi qatorga ; qo‘shiladi deb o‘ylash; return bilan qiymatni turli qatorda boshlash; strict rejim barcha this larni undefined qiladi deb olish; \"use strict\" ni tananing o‘rtasiga yozib rejim yoqildi deb hisoblash."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "Strict scriptda user yaratadigan funksiya yozing. Obyektni bir necha qatorli return bilan qaytaring. Keyin e’lon qilinmagan nomga yozishni try/catch bilan alohida sinang."
      }
    ],
    "takeaway": "return qiymatini shu satrda boshlang. ASI grammatik qoidalarga bog‘liq. Strict mode e’lon qilinmagan nomga yozish kabi ayrim xatolarni aniq ko‘rsatadi.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "function a() { return\n  2;\n}\nfunction b() { return 2; }\nconsole.log(a());\nconsole.log(b());",
    "exerciseExpected": [
      {
        "$undefined": true
      },
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. undefined — a dagi return yangi qator bilan qiymatsiz tugadi.\n2. 2 — b qiymatni return bilan bir satrda boshladi.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"
      },
      {
        "title": "ASI: nuqtali vergul qo‘shish qoidalari",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion"
      }
    ],
    "learningGuide": {
      "goal": "Strict rejimdagi xatolarni ajratib, return yonidagi yangi qator va nuqtali vergul ta’sirini tushuntirasiz.",
      "prerequisites": [
        "functions",
        "this-keyword",
        "errors-try-catch",
        "expressions-statements"
      ],
      "terms": [
        {
          "term": "Strict mode",
          "meaning": "Ba’zi noaniq yoki jim qoladigan holatlarni xatoga aylantiradigan til rejimi."
        },
        {
          "term": "Directive",
          "meaning": "Script yoki funksiya tanasi boshidagi \"use strict\" kabi maxsus satr."
        },
        {
          "term": "ASI",
          "meaning": "Automatic semicolon insertion: grammatik qoidalar bo‘yicha ; avtomatik qo‘shilishi."
        },
        {
          "term": "Restricted production",
          "meaning": "Ayrim kalit so‘zdan keyin yangi qatorga ruxsat bermaydigan grammatika qoidasi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: ol() { n: 3 } obyektini qaytarsin.",
        "brokenCode": "function ol() {\n  return\n    { n: 3 };\n}\nconsole.log(ol());",
        "fixedCode": "function ol() {\n  return { n: 3 };\n}\nconsole.log(ol());",
        "expectedOutput": [
          {
            "n": 3
          }
        ],
        "runtime": "javascript",
        "explanation": "Ochuvchi { return bilan bir qatorda bo‘lgani uchun obyekt ifodasi qaytariladi; return; ga aylanmaydi."
      },
      "write": {
        "task": "Strict scriptda user yaratadigan funksiya yozing. Obyektni bir necha qatorli return bilan qaytaring. Keyin e’lon qilinmagan nomga yozishni try/catch bilan alohida sinang.",
        "criteria": [
          "user().ism berilgan ismga teng.",
          "return dan keyingi ochuvchi qavs shu satrda.",
          "Yo‘q nomga yozishda ReferenceError ushlanadi."
        ],
        "hint": "Fayl boshiga \"use strict\" yozing. function user(){ return { ism: \"Ali\" }; } yarating. Xato yozishni alohida try/catch da saqlang."
      }
    }
  },
  {
    "id": "object-to-primitive",
    "title": "Obyekt qanday primitive qiymatga aylanadi?",
    "question": "Obyekt +, String va Number ichida ishlatilganda qiymat qayerdan kelishini kuzatasiz.",
    "explanation": "Obyektning o‘zi son ham, string ham emas. Ayrim operatorlar undan primitive natija so‘raydi. Birinchi navbatda mavjud Symbol.toPrimitive chaqiriladi; u bo‘lmasa oddiy fallback metodlari sinab ko‘riladi. Olingan primitive keyin operator qoidalari bo‘yicha yana songa yoki matnga aylanishi mumkin. Demak, ToPrimitive bilan yakuniy Number/String aylantirish bir xil bosqich emas.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-object-to-primitive",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "narx + 2 odatiy obyekt uchun default yo‘nalishdan foydalanadi, fallback da valueOf oldin sinab ko‘riladi va 10 beradi. 10 + 2 sonli hisob bo‘ladi. String(narx) string yo‘nalishida toString ni avval sinaydi va \"narx\" oladi.",
        "code": "const narx = {\n  valueOf() { return 10; },\n  toString() { return \"narx\"; }\n};\nconsole.log(narx + 2);\nconsole.log(String(narx));",
        "expectedOutput": [
          12,
          "narx"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "narx + 2",
              "ToPrimitive: default",
              "Oddiy obyektda valueOf → 10."
            ],
            [
              "10 + 2",
              "Ikkalasi son",
              "Natija 12."
            ],
            [
              "String(narx)",
              "ToPrimitive: string",
              "toString → \"narx\"."
            ],
            [
              "console.log",
              "12, so‘ng \"narx\"",
              "Ikki mustaqil aylantirish bajarildi."
            ]
          ]
        }
      },
      {
        "title": "3. Oddiy fallback tartibi",
        "text": "Symbol.toPrimitive yo‘q bo‘lsa, string hint da toString → valueOf; number hint da valueOf → toString. Har birida primitive olinsa to‘xtaydi. Oddiy obyekt default ni number kabi ko‘radi; Date default hint ni string kabi talqin qiladi. Massivning odatiy toString i elementlarni vergul bilan birlashtiradi.",
        "code": "console.log([] + 1);\nconsole.log([2] + 1);\nconsole.log(Number([2]));",
        "expectedOutput": [
          "1",
          "21",
          2
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "4. Symbol.toPrimitive ustun keladi",
        "text": "Maxsus metod bor bo‘lsa unga hint uzatiladi. U number hint da ham string qaytarishi mumkin, ammo qaytgan qiymat primitive bo‘lishi shart. Keyingi aylantirish alohida qoida.",
        "code": "const o = {\n  [Symbol.toPrimitive](hint) {\n    return hint === \"string\" ? \"yorliq\" : 5;\n  }\n};\nconsole.log(String(o));\nconsole.log(Number(o));\nconsole.log(o + 1);",
        "expectedOutput": [
          "yorliq",
          5,
          6
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "5. + oldidan string paydo bo‘lsa",
        "text": "+ ikkala operandni primitive ga aylantirgach, bittasi string bo‘lsa birlashtiradi. Bir xil ko‘ringan \"10\" va 10 shuning uchun boshqa natija beradi.",
        "code": "const o = { valueOf() { return \"10\"; } };\nconsole.log(o + 2);\nconsole.log(Number(o) + 2);",
        "expectedOutput": [
          "102",
          12
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "6. Metod obyekt qaytarsa nima bo‘ladi?",
        "text": "Symbol.toPrimitive obyekt qaytarsa darhol TypeError: fallback ga o‘tilmaydi. Oddiy fallback da esa bir metod obyekt qaytarsa keyingisi sinab ko‘riladi; ikkalasi ham primitive bermasa TypeError.",
        "code": "const o = { [Symbol.toPrimitive]() { return {}; } };\ntry { Number(o); } catch (e) { console.log(e.name); }",
        "expectedOutput": [
          "TypeError"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Ko‘p uchraydigan xatolar",
        "text": "valueOf har safar toString dan oldin ishlaydi deb o‘ylash; Symbol.toPrimitive har qanday qiymat qaytarishi mumkin deyish; + doim sonli amal deb o‘qish; == dagi barcha obyektlarni primitive ga aylantirish deb tasavvur qilish — ikki obyekt odatda identifikatsiya bo‘yicha solishtiriladi."
      },
      {
        "title": "8. Kichik amaliy loyiha",
        "text": "Pul obyektini yarating: String bilan \"10 so‘m\", Number bilan 10 olinsin. Keyin + 2 natijasini taxmin qilib sababini yozing."
      }
    ],
    "takeaway": "Avval ToPrimitive yo‘lini, keyin operator qoidasini kuzating. Symbol.toPrimitive bor bo‘lsa birinchi shu ishlaydi. Fallback tartibi hint ga bog‘liq; + string bilan birlashtirishi mumkin.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "const o = { valueOf() { return \"4\"; } };\nconsole.log(o + 1);\nconsole.log(Number(o) + 1);\nconsole.log(o === 4);",
    "exerciseExpected": [
      "41",
      5,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"41\" — primitive \"4\" string bo‘lgani uchun + birlashtirdi.\n2. 5 — Number string \"4\" ni songa aylantirdi, so‘ng 1 qo‘shildi.\n3. false — === tur o‘zgartirmaydi, obyekt son emas.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive"
      }
    ],
    "learningGuide": {
      "goal": "Obyekt +, String va Number ichida ishlatilganda qiymat qayerdan kelishini kuzatasiz.",
      "prerequisites": [
        "coercion-equality",
        "objects-basics",
        "symbol-bigint",
        "functions-as-values"
      ],
      "terms": [
        {
          "term": "ToPrimitive",
          "meaning": "Obyektni primitive qiymatga aylantirish jarayoni."
        },
        {
          "term": "Hint",
          "meaning": "Aylantirishga berilgan yo‘nalish: string, number yoki default."
        },
        {
          "term": "valueOf",
          "meaning": "Oddiy fallback jarayonida primitive qiymat olish uchun sinab ko‘rilishi mumkin bo‘lgan metod."
        },
        {
          "term": "Symbol.toPrimitive",
          "meaning": "Obyektning primitive ga aylanishini boshqaruvchi maxsus metod kaliti."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: Matn birlashtirish emas, 12 soni olinsin.",
        "brokenCode": "const o = { valueOf() { return \"10\"; } };\nconsole.log(o + 2);",
        "fixedCode": "const o = { valueOf() { return \"10\"; } };\nconsole.log(Number(o) + 2);",
        "expectedOutput": [
          12
        ],
        "runtime": "javascript",
        "explanation": "Number aniq sonli aylantirishni bajardi. Endi + ning ikkala operandi son; natija 12."
      },
      "write": {
        "task": "Pul obyektini yarating: String bilan \"10 so‘m\", Number bilan 10 olinsin. Keyin + 2 natijasini taxmin qilib sababini yozing.",
        "criteria": [
          "String(pul) \"10 so‘m\" beradi.",
          "Number(pul) 10 beradi.",
          "Default hint uchun tanlangan xulqni va pul + 2 natijasini izohlaysiz."
        ],
        "hint": "Symbol.toPrimitive(hint) ichida hint === \"string\" bo‘lsa \"10 so‘m\", boshqa hollarda 10 qaytaring. Shunda pul + 2 → 12."
      }
    }
  },
  {
    "id": "debugger-code-reading",
    "title": "Debugger: JavaScript kodini amalda kuzatish",
    "question": "Breakpoint, Step Into/Over/Out, Scope va Call Stack bilan kodning ishlashini tekshirasiz.",
    "explanation": "Natijani taxmin qilish yaxshi; debugger bilan taxminni tekshirish yanada foydali. Quyidagi mashqni Chrome da Sources paneli ochiq holda bajaring. debugger; satri DevTools ochiq va breakpointlar faol bo‘lganda to‘xtash imkonini beradi. DevTools yopiq bo‘lsa kod odatda oddiy davom etadi. Bu saytdagi kod bloklari avtomatik bajarilmaydi: misolni alohida demo.html ichidagi scriptga yoki Sources → Snippets ga ko‘chiring.\n\nHar bir misol mustaqil: Console ga bittadan joylang yoki alohida .js faylda bajaring. Avval natijani yozing, so‘ng ishga tushirib solishtiring.",
    "fullTextDefault": true,
    "coreReading": true,
    "codeLabId": "lab-debugger-code-reading",
    "sections": [
      {
        "title": "1. Birinchi misol: avval natijani taxmin qiling",
        "text": "debugger satrida to‘xtaganda kirish allaqachon 3. ikki(kirish) oldida Step Into tanlansa ikki ichiga kiriladi: n=3, ko‘paytirishdan keyin natija=6. Step Out joriy chaqirishni yakunlaydi; javob assignment i tugagach tashqarida javob=6 ko‘rinadi. Log hali ishlamagan bo‘lsa konsolda natija chiqmagani xato emas.",
        "code": "function ikki(n) {\n  const natija = n * 2;\n  return natija;\n}\nconst kirish = 3;\ndebugger;\nconst javob = ikki(kirish);\nconsole.log(javob);",
        "expectedOutput": [
          6
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Bajarilish yo‘li: satrma-satr kuzatamiz",
        "text": "Kodning fayldagi joylashuvi bilan bajarilish tartibi bir xil bo‘lishi shart emas. Quyidagi jadvalni kod bilan yonma-yon o‘qing.",
        "table": {
          "headers": [
            "Qadam / kod",
            "Qiymat yoki holat",
            "Keyingi ish / sabab"
          ],
          "rows": [
            [
              "debugger; da pauza",
              "kirish = 3",
              "ikki chaqirishiga yetib boring."
            ],
            [
              "ikki(kirish) → Step Into",
              "Mahalliy n = 3",
              "const natija = n * 2 qatori hali bajarilmagan bo‘lishi mumkin."
            ],
            [
              "Ko‘paytirishdan keyin",
              "natija = 6",
              "Scope panelidan tekshiring."
            ],
            [
              "Return va tashqi assignment tugagach",
              "javob = 6",
              "Keyin console.log 6 chiqaradi."
            ]
          ]
        }
      },
      {
        "title": "3. Mashqni brauzerda tayyorlash",
        "text": "Chrome da bo‘sh sahifa oching va DevTools → Sources → Snippets dan yangi snippet yarating. Misol kodini joylang. Console dan ishlatish ham mumkin, lekin Sources ko‘rinishi satrlar va breakpointlarni kuzatishga qulay. Snippetni ishga tushirishdan oldin qayerda to‘xtashingiz va kutgan qiymatlarni yozing. Oddiy fayl yo‘li kerak bo‘lsa quyidagi HTML ni demo.html ga saqlang; birinchi misoldagi JS ni script ichiga qo‘ying.",
        "code": "<!doctype html>\n<meta charset=\"utf-8\">\n<title>JS kuzatish mashqi</title>\n<script>\n// Birinchi misoldagi JavaScript kodini shu yerga yozing.\n</script>"
      },
      {
        "title": "4. Pauza qatori hali bajarilmagan bo‘lishi mumkin",
        "text": "Breakpoint odatda belgilangan qator bajarilishidan oldin pauza qiladi. const javob = ... oldida javob initialized emas; uni Console da o‘qish ReferenceError berishi mumkin. Keyingi qadamdan so‘ng tekshiring. Bir qatorda ko‘p ifoda bo‘lsa to‘xtash nuqtalari batafsilroq bo‘ladi."
      },
      {
        "title": "5. Scope va Call Stack ni birga o‘qing",
        "text": "Scope faol frame ning mahalliy va tashqi bog‘lanishlarini ko‘rsatadi. Call Stack esa faol chaqirishlarni ko‘rsatadi. Stackdagi boshqa frame ni tanlasangiz o‘sha chaqirishdagi qiymatlarni ko‘rasiz; bu kodni qaytadan bajarmaydi. Watch ga n yoki natija kabi mavjud nomlarni qo‘shing. Watch/Console da yon ta’sirli fn() ni yozish funksiyani yana bajarib holatni o‘zgartirishi mumkin."
      },
      {
        "title": "6. Noto‘g‘ri natijadan sababga boring",
        "text": "Avval kutilgan natijani yozing. Keyin noto‘g‘ri qiymat birinchi paydo bo‘lgan joyni toping: kirish turi, callback return i, umumiy reference yoki async tartib. Quyidagi xatoda konsoldagi \"21\" hisoblash emas, string birlashtirish natijasi.",
        "code": "function oshir(n) { return n + 1; }\nconst kirish = \"2\";\nconsole.log(oshir(kirish));",
        "expectedOutput": [
          "21"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "7. Pause on exceptions va asinxron chegaralar",
        "text": "Xato chiqayotgan joyni topish uchun Sources dagi exception da to‘xtash sozlamasini yoqing. Caught exceptions ham kerak bo‘lsa alohida yoqiladi. Async kodda har step keyingi fayl satriga olib bormasligi mumkin; taymer/Promise davomi keyin ishlaydi. DevTools ko‘rsatgan async chaqirish tarixi barcha frame lar hozir faol stackda degani emas."
      },
      {
        "title": "8. Ko‘p uchraydigan xatolar",
        "text": "Pauza qatoridagi assignment allaqachon bajarilgan deb o‘ylash; Console da funksiyani qayta chaqirib holatni o‘zgartirish; Watch dagi yon ta’sirni unutish; Step Into bilan Step Over ni bir xil deb bilish."
      },
      {
        "title": "9. Kichik amaliy loyiha",
        "text": "String narx va dona qabul qiladigan hisob funksiyasini tekshiring. Breakpoint bilan kirish, aylantirish va jami natijasini kuzating. Topilgan bitta xatoni tuzatib, oldingi va keyingi holatni yozing."
      }
    ],
    "takeaway": "Taxmin → breakpoint → Scope/Call Stack → bitta qadam → yangi qiymat. Natijani ko‘rish bilan cheklanmang: birinchi noto‘g‘ri qiymat qayerda paydo bo‘lganini aniqlang.",
    "exercise": "Natijani yozing. Har bir qiymat qayerdan kelganini va keyingi qadamni tushuntiring.",
    "exerciseCode": "function oshir(n) { return n + 1; }\nconst kirish = \"2\";\nconst javob = oshir(kirish);\nconsole.log(typeof kirish);\nconsole.log(javob);",
    "exerciseExpected": [
      "string",
      "21"
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. \"string\" — kirish qo‘shtirnoqda berilgan.\n2. \"21\" — oshir ichidagi + stringni birlashtirdi. Step Into bilan n qiymati va turini tekshirib buni ko‘rish mumkin.",
    "resources": [
      {
        "title": "Rasmiy qo‘llanma va chuqurroq izoh",
        "url": "https://developer.chrome.com/docs/devtools/javascript/reference"
      }
    ],
    "learningGuide": {
      "goal": "Breakpoint, Step Into/Over/Out, Scope va Call Stack bilan kodning ishlashini tekshirasiz.",
      "prerequisites": [
        "execution-context-stack",
        "lexical-environment",
        "functions-as-values"
      ],
      "terms": [
        {
          "term": "Breakpoint",
          "meaning": "Kod shu nuqtaga kelganda vaqtincha to‘xtaydigan belgi."
        },
        {
          "term": "Step Over",
          "meaning": "Joriy amalni bajarib, uning ichiga kirmay keyingi qadamga o‘tish."
        },
        {
          "term": "Step Into",
          "meaning": "Chaqirilayotgan funksiya tanasiga kirib kuzatish."
        },
        {
          "term": "Step Out",
          "meaning": "Joriy funksiyani yakunlab, chaqirgan joyga qaytish."
        },
        {
          "term": "Watch",
          "meaning": "Tanlangan ifoda qiymatini to‘xtashlarda kuzatish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Kod ishlashidan oldin barcha console.log natijalarini tartib bilan yozing. Har bir funksiya uchun kiruvchi argument va qaytuvchi qiymatni belgilang.",
      "debug": {
        "task": "Kutilgan xulq: Sonli kirish \"2\" uchun natija 3 bo‘lsin.",
        "brokenCode": "function oshir(n) { return n + 1; }\nconst kirish = \"2\";\nconsole.log(oshir(kirish));",
        "fixedCode": "function oshir(n) { return n + 1; }\nconst kirish = \"2\";\nconsole.log(oshir(Number(kirish)));",
        "expectedOutput": [
          3
        ],
        "runtime": "javascript",
        "explanation": "Kirish chegarasida Number ishlatildi. Amaliy dasturda bo‘sh yoki yaroqsiz kirishni ham alohida validatsiya qiling."
      },
      "write": {
        "task": "String narx va dona qabul qiladigan hisob funksiyasini tekshiring. Breakpoint bilan kirish, aylantirish va jami natijasini kuzating. Topilgan bitta xatoni tuzatib, oldingi va keyingi holatni yozing.",
        "criteria": [
          "Breakpointda kirish qiymati va turini aytasiz.",
          "Step Into bilan hisob tanasiga kirasiz va return ni kuzatasiz.",
          "0 va yaroqsiz kirish uchun kutilgan xulqni yozib tekshirasiz."
        ],
        "hint": "const narx=\"20\", dona=\"2\" bilan boshlang. Sonli aylantirishdan keyin Number.isFinite bilan tekshiring; bo‘sh matnni oldin rad eting. Watch ga faqat yon ta’sirsiz qiymatlar qo‘ying."
      }
    }
  },
  {
    "id": "core-event-loop-deep",
    "title": "Event Loop: microtask va macrotask chuqur tahlili",
    "question": "Sinxron kod, Promise (.then, await) va setTimeout qaysi navbatda bajariladi?",
    "explanation": "JavaScript bitta oqimli (single-threaded) til bo‘lib, bir vaqtning o‘zida faqat bitta operatsiyani bajaradi. Asinxronlik Event Loop orqali ta'minlanadi.\n\nBajarilish tartibi har doim bir xil:\n1. Call Stack (sinxron kod) to‘liq bajariladi.\n2. Microtask Queue (Promise.then, await, queueMicrotask) navbati to‘liq bo‘shatiladi.\n3. Macrotask Queue (setTimeout, setInterval) dan bitta vazifa olinadi va jarayon takrorlanadi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-event-loop-deep",
    "sections": [
      {
        "title": "1. Birinchi misol: microtask vs macrotask ustuvorligi",
        "text": "setTimeout 0 ms bo‘lsa ham macrotask hisoblanadi. Promise.resolve().then() esa microtask bo‘lib, har qanday macrotaskdan oldin bajariladi.",
        "code": "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');",
        "expectedOutput": [
          "1",
          "4",
          "3",
          "2"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Navbatlar va ustuvorlik jadvali",
        "text": "Event Loop har bir qadamda qaysi navbatni tekshirishini quyidagi jadvaldan bilib oling.",
        "table": {
          "headers": [
            "Navbat turi",
            "Manbalar",
            "Ustuvorlik qoidasi"
          ],
          "rows": [
            [
              "Call Stack",
              "Sinxron funksiyalar va hisob-kitoblar",
              "Birinchi bo‘lib darhol bajariladi"
            ],
            [
              "Microtask Queue",
              "Promise.then/catch/finally, await, queueMicrotask",
              "Call Stack bo‘shashi bilan HAMMASI oxirigacha bajariladi"
            ],
            [
              "Macrotask Queue",
              "setTimeout, setInterval, setImmediate, I/O",
              "Microtasklar 0 bo‘lganda navbatdagi 1 tasi olinadi"
            ]
          ]
        }
      },
      {
        "title": "3. async/await va birinchi await tuzog‘i",
        "text": "async funksiya ichidagi kod birinchi await ifodasigacha oddiy sinxron kod kabi Call Stackda bajariladi. Faqat await dan keyingi qatorlar microtaskka aylanadi.",
        "code": "async function tekshir() {\n  console.log('A');\n  await Promise.resolve();\n  console.log('B');\n}\ntekshir();\nconsole.log('C');",
        "expectedOutput": [
          "A",
          "C",
          "B"
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "Sinxron kod > Microtasklar (barchasi) > Macrotask (bittasi). async funksiya birinchi awaitgacha to‘liq sinxron ishlaydi.",
    "exercise": "Quyidagi kod natijasini toping:\nconsole.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');",
    "exerciseCode": "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');",
    "exerciseExpected": [
      "Start",
      "End",
      "Promise",
      "Timeout"
    ],
    "exerciseRuntime": "async",
    "exerciseAnswer": "1. Start (sinxron) chiqadi.\n2. Timeout macrotaskka, Promise microtaskka yoziladi.\n3. End (sinxron) chiqadi.\n4. Microtask bajariladi: Promise chiqadi.\n5. Macrotask bajariladi: Timeout chiqadi.",
    "resources": [
      {
        "title": "MDN: In depth event loop",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
      }
    ],
    "learningGuide": {
      "goal": "Event Loop, Call Stack, Microtask va Macrotask ishlash navbatini kodda to‘g‘ri topish.",
      "prerequisites": [
        "async-timers",
        "promises-async",
        "event-loop"
      ],
      "terms": [
        {
          "term": "Call Stack",
          "meaning": "Sinxron kod satrlari bajariladigan xotira to‘plami."
        },
        {
          "term": "Microtask Queue",
          "meaning": "Promise va await kabi yuqori ustuvorlikka ega asinxron vazifalar navbati."
        },
        {
          "term": "Macrotask Queue",
          "meaning": "setTimeout va setInterval kabi oddiy asinxron vazifalar navbati."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Sinxron kod, microtask va macrotask navbatini ajratib natijalarni yozing.",
      "debug": {
        "task": "Kutilgan natija: 'A', 'C', 'B'. Hozirgi kodda B sinxron chiqib ketmoqda.",
        "brokenCode": "console.log('A');\nconsole.log('B');\nconsole.log('C');",
        "fixedCode": "console.log('A');\nconsole.log('C');\nconsole.log('B');",
        "expectedOutput": [
          "A",
          "C",
          "B"
        ],
        "runtime": "javascript",
        "explanation": "B va C tartibi almashtirilib kutilgan ketma-ketlik ta'minlandi."
      },
      "write": {
        "task": "Sinxron log, Promise microtask va setTimeout macrotaskni o‘z ichiga olgan funksiya tuzing va konsol chiqishini tahlil qiling.",
        "criteria": [
          "Sinxron loglar microtaskdan oldin chiqishi kerak.",
          "Promise.then logi setTimeout logidan oldin chiqishi kerak.",
          "Barcha loglar konsolda ko‘rinishi kerak."
        ],
        "hint": "Avval console.log('1'), keyin setTimeout, keyin Promise.resolve().then, keyin console.log('2') yozing."
      }
    }
  },
  {
    "id": "core-hoisting-tdz-deep",
    "title": "Hoisting va TDZ: xotirada ajratilish va o‘lik zona",
    "question": "var nega undefined bo‘ladi, let va const nega TDZ da ReferenceError beradi?",
    "explanation": "JavaScript dvigateli kodni ikki bosqichda bajaradi:\n1. Creation phase (yaratilish bosqichi): O‘zgaruvchilar va funksiyalar xotirada ro‘yxatga olinadi (Hoisting).\n2. Execution phase (bajarilish bosqichi): Kod satrma-satr ishga tushiriladi.\n\nvar o‘zgaruvchisi xotirada undefined qiymati bilan darhol initsializatsiya qilinadi. let va const esa xotirada ajratiladi, lekin initsializatsiya bo‘lmaydi. Ular kodda o‘z satriga yetib kelguncha Temporal Dead Zone (TDZ — vaqtinchalik o‘lik zona) da bo‘ladi. TDZ dagi o‘zgaruvchiga murojaat qilish ReferenceError beradi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-hoisting-tdz-deep",
    "sections": [
      {
        "title": "1. Birinchi misol: var va let hoistingi",
        "text": "var ko‘tarilganda undefined beradi, let esa TDZ da bo‘lgani uchun xato qaytaradi.",
        "code": "console.log(a);\nvar a = 5;\nconsole.log(a);",
        "expectedOutput": [
          {
            "$undefined": true
          },
          5
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Hoisting solishtirma jadvali",
        "text": "var, let, const va function deklaratsiyalarining ko‘tarilish xulqi.",
        "table": {
          "headers": [
            "Deklaratsiya turi",
            "Hoisting bo‘ladimi?",
            "Dastlabki qiymati",
            "Ko‘tarilishdan oldin murojaat"
          ],
          "rows": [
            [
              "var",
              "Ha (funksiya/global scope)",
              "undefined",
              "undefined qaytaradi"
            ],
            [
              "let",
              "Ha (blok scope)",
              "Initsializatsiya yo‘q (TDZ)",
              "ReferenceError"
            ],
            [
              "const",
              "Ha (blok scope)",
              "Initsializatsiya yo‘q (TDZ)",
              "ReferenceError"
            ],
            [
              "function declaration",
              "Ha (to‘liq funksiya)",
              "Funksiya tanasi to‘liq ko‘tariladi",
              "Normal ishlaydi"
            ]
          ]
        }
      },
      {
        "title": "3. Blok scope ichidagi TDZ tuzog‘i",
        "text": "Tashqi scopeda let x = 10 bo‘lsa ham, ichki blokdagi let x o‘z blokining boshidan e'lon qilingan satrgacha o‘lik zonani hosil qiladi.",
        "code": "let x = 10;\n{\n  // TDZ boshlandi\n  const y = 20;\n  console.log(y);\n}\nconsole.log(x);",
        "expectedOutput": [
          20,
          10
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "var undefined bilan initsializatsiya bo‘ladi; let va const esa o‘z satrigacha TDZ da qoladi va ReferenceError beradi.",
    "exercise": "console.log(typeof nonDeclared); va let b = 1; { console.log(a); var a = 2; } natijasini toping.",
    "exerciseCode": "console.log(typeof nonDeclared);\nvar a = 2;\nconsole.log(a);",
    "exerciseExpected": [
      "undefined",
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "1. nonDeclared e'lon qilinmagan, typeof unga xavfsiz undefined beradi.\n2. var a = 2 initsializatsiyadan keyin 2 beradi.",
    "resources": [
      {
        "title": "MDN: Temporal dead zone",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz"
      }
    ],
    "learningGuide": {
      "goal": "Hoisting va TDZ farqini hamda ReferenceError sababini aniq tushunish.",
      "prerequisites": [
        "var-let-const",
        "scope",
        "hoisting-tdz"
      ],
      "terms": [
        {
          "term": "Hoisting",
          "meaning": "Dvigatelning e'lonlarni scope yuqorisiga ko‘tarib xotiraga joylashi."
        },
        {
          "term": "TDZ (Temporal Dead Zone)",
          "meaning": "let va const o‘zgaruvchisi e'lon qilingan qatorgacha bo‘lgan murojaat taqiqlangan hudud."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "TDZ va var hoistingi sababli yuzaga keladigan natijalarni yozing.",
      "debug": {
        "task": "Kutilgan natija: 10 chiqsin, ReferenceError bo‘lmasin.",
        "brokenCode": "function test() {\n  console.log(x);\n  let x = 10;\n}\ntest();",
        "fixedCode": "function test() {\n  let x = 10;\n  console.log(x);\n}\ntest();",
        "expectedOutput": [
          10
        ],
        "runtime": "javascript",
        "explanation": "let x e'lon qilingandan keyin murojaat qilindi, TDZ bartaraf etildi."
      },
      "write": {
        "task": "var va let ning hoistingdagi xulqini ko‘rsatuvchi 4 qatorli kod yozing.",
        "criteria": [
          "var e'lonidan oldin log qilinganda undefined ko‘rinishi kerak.",
          "let e'lonidan keyin to‘g‘ri qiymat ko‘rinishi kerak.",
          "Hech qanday xatolik otilmasligi kerak."
        ],
        "hint": "console.log(a); var a = 1; let b = 2; console.log(b);"
      }
    }
  },
  {
    "id": "core-scope-closure-loops",
    "title": "Scope va Closure: sikllarda var va let ning farqi",
    "question": "for ichidagi setTimeout nima uchun var da oxirgi sonni, let da har bir qadamni chiqaradi?",
    "explanation": "Closure — bu funksiyaning o‘zi yaratilgan tashqi leksik muhitdagi o‘zgaruvchilarni eslab qolish qobiliyatidir.\n\nSikllarda var ishlatilganda, var butun funksiya (yoki global) uchun bitta umumiy o‘zgaruvchi yaratadi. Har bir iteratsiyadagi callback ayni bitta xotira katagiga bog‘lanadi. Sikl tugaganda xotiradagi son oxirgi qiymatga teng bo‘lib qoladi.\n\nlet ishlatilganda esa, JavaScript har bir iteratsiya uchun alohida blok scope va yangi binding yaratadi. Har bir callback o‘z iteratsiyasidagi shaxsiy qiymatni closure orqali eslab qoladi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-scope-closure-loops",
    "sections": [
      {
        "title": "1. Birinchi misol: siklda let vs var",
        "text": "let har bir iteratsiyada yangi qiymatni bog‘laydi.",
        "code": "const natijalar = [];\nfor (let i = 0; i < 3; i++) {\n  natijalar.push(() => i);\n}\nconsole.log(natijalar.map(fn => fn()));",
        "expectedOutput": [
          [
            0,
            1,
            2
          ]
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. var vs let sikl xotira modeli",
        "text": "Xotira qanday taqsimlanishini ko‘rsatuvchi taqqoslash jadvali.",
        "table": {
          "headers": [
            "Xususiyat",
            "for (var i = 0; ...)",
            "for (let i = 0; ...)"
          ],
          "rows": [
            [
              "Scope turi",
              "Funksiya / Global scope",
              "Har bir iteratsiya uchun alohida Block scope"
            ],
            [
              "Xotiradagi nusxalar",
              "Faqat 1 dona umumiy o‘zgaruvchi",
              "Har bir aylanishda alohida yangi o‘zgaruvchi"
            ],
            [
              "Asinxron callback natijasi",
              "Hamma callbacklar oxirgi i ni ko‘radi (masalan 3, 3, 3)",
              "Har bir callback o‘zining i sini ko‘radi (0, 1, 2)"
            ],
            [
              "Yechim (var uchun)",
              "IIFE yoki bind orqali nusxa olish kerak",
              "Tabiiy ravishda to‘g‘ri ishlaydi"
            ]
          ]
        }
      },
      {
        "title": "3. Closure orqali xususiy holat (Private State)",
        "text": "Closure yordamida tashqaridan to‘g‘ridan-to‘g‘ri o‘zgartirib bo‘lmaydigan inkapsulyatsiya yaratish.",
        "code": "function hisoblagich() {\n  let sanoq = 0;\n  return {\n    oshir() { sanoq++; return sanoq; },\n    qiymat() { return sanoq; }\n  };\n}\nconst h = hisoblagich();\nconsole.log(h.oshir());\nconsole.log(h.oshir());",
        "expectedOutput": [
          1,
          2
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "var bitta umumiy xotiraga ega bo‘ladi; let esa har bir sikl iteratsiyasida yangi leksik bog‘lanish (per-iteration binding) yaratadi.",
    "exercise": "let o‘rniga var qo‘yilganda nima chiqishini va IIFE bilan var ni qanday to‘g‘rilash mumkinligini tushuntiring.",
    "exerciseCode": "const fnlar = [];\nfor (let k = 0; k < 2; k++) {\n  fnlar.push(() => k * 10);\n}\nconsole.log(fnlar[0](), fnlar[1]());",
    "exerciseExpected": [
      0,
      10
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "let k har bir iteratsiyada 0 va 1 qiymatlarini alohida saqlaydi, shuning uchun 0 va 10 chiqadi.",
    "resources": [
      {
        "title": "MDN: Closures",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
      }
    ],
    "learningGuide": {
      "goal": "Sikllarda closure va scope o‘zaro qanday ishlashini bilish.",
      "prerequisites": [
        "var-let-const",
        "scope",
        "closures"
      ],
      "terms": [
        {
          "term": "Closure",
          "meaning": "Funksiyaning o‘zi yaratilgan leksik scope o‘zgaruvchilarini eslab qolishi."
        },
        {
          "term": "Per-iteration binding",
          "meaning": "let siklda har bir aylanish uchun alohida xotira katagi yaratishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Closure qaysi o‘zgaruvchini eslab qolishini aniqlang.",
      "debug": {
        "task": "Kutilgan natija: [0, 1, 2]. Hozirgi kodda [3, 3, 3] chiqadi.",
        "brokenCode": "var res = [];\nfor (var i = 0; i < 3; i++) {\n  res.push(() => i);\n}\nconsole.log(res.map(f => f()));",
        "fixedCode": "var res = [];\nfor (let i = 0; i < 3; i++) {\n  res.push(() => i);\n}\nconsole.log(res.map(f => f()));",
        "expectedOutput": [
          [
            0,
            1,
            2
          ]
        ],
        "runtime": "javascript",
        "explanation": "var o‘rniga let ishlatildi, har bir funksiya o‘z i qiymatiga ega bo‘ldi."
      },
      "write": {
        "task": "Boshlang‘ich qiymat olib, chaqirilganda uni 1 taga oshiruvchi closure funksiya yozing.",
        "criteria": [
          "Tashqi o‘zgaruvchi to‘g‘ridan-to‘g‘ri o‘zgartirilmasligi kerak.",
          "Har chaqirilganda ketma-ket sonlar qaytishi kerak.",
          "Natija logda ko‘rinishi kerak."
        ],
        "hint": "function create() { let n = 0; return () => ++n; }"
      }
    }
  },
  {
    "id": "core-this-arrow-deep",
    "title": "this kalit so‘zi va Arrow funksiyalar: 4 bog‘lanish qoidasi",
    "question": "this qanday aniqlanadi va Arrow funksiya nega o‘z thisiga ega emas?",
    "explanation": "Oddiy funksiyalarda `this` qayerda yozilganiga emas, **qanday chaqirilganiga** qarab dinamik belgilanadi. 4 ta asosiy qoida bor:\n1. Default binding: `fn()` → `window` (yoki strict mode da `undefined`).\n2. Implicit binding: `obj.fn()` → nuqtadan chapdagi `obj`.\n3. Explicit binding: `fn.call(obj)`, `fn.apply(obj)`, `fn.bind(obj)` → ko‘rsatilgan obyekt.\n4. new binding: `new Constructor()` → yangi yaratilgan obyekt.\n\nArrow funksiyalarda esa o‘zining `this`i bo‘lmaydi. U `this`ni xuddi oddiy o‘zgaruvchi kabi o‘zining **tashqi leksik muhitidan (Lexical this)** oladi. Shuning uchun arrow funksiyaga call/apply/bind ta'sir qilmaydi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-this-arrow-deep",
    "sections": [
      {
        "title": "1. Birinchi misol: metoddan uzib olish (Lost context)",
        "text": "Obyekt metodi alohida o‘zgaruvchiga olinganda uning implicit this bog‘lanishi yo‘qoladi.",
        "code": "const user = {\n  ism: 'Ali',\n  salom() { return this.ism; }\n};\nconst f = user.salom;\nconsole.log(user.salom());\nconsole.log(typeof f());",
        "expectedOutput": [
          "Ali",
          "undefined"
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. this ning 4 ta qoidasi va Arrow funksiya",
        "text": "Quyidagi jadvalda qaysi chaqiruv usuli ustuvorlikka egaligi ko‘rsatilgan.",
        "table": {
          "headers": [
            "Qoida",
            "Misol",
            "this ning qiymati",
            "Ustuvorlik"
          ],
          "rows": [
            [
              "new binding",
              "new User()",
              "Yangi yaratilgan instansiya",
              "1 (Eng yuqori)"
            ],
            [
              "Explicit binding",
              "fn.call(obj)",
              "call/apply/bind ga berilgan obj",
              "2"
            ],
            [
              "Implicit binding",
              "user.salom()",
              "Nuqtadan chapdagi obyekt",
              "3"
            ],
            [
              "Default binding",
              "salom()",
              "window yoki undefined (strict mode)",
              "4 (Eng past)"
            ],
            [
              "Arrow function",
              "() => this",
              "Tashqi leksik ota scope'dagi this",
              "Qoidalarga bo‘ysunmaydi"
            ]
          ]
        }
      },
      {
        "title": "3. Obyekt ichidagi Arrow funksiya tuzog‘i",
        "text": "Obyekt literali { } alohida scope yaratmaydi! Obyekt xususiyatiga to‘g‘ridan-to‘g‘ri yozilgan arrow funksiya tashqi global/modul thisini oladi.",
        "code": "const obj = {\n  qiymat: 42,\n  oddiy() { return this.qiymat; },\n  arrow: () => typeof this\n};\nconsole.log(obj.oddiy());\nconsole.log(obj.arrow());",
        "expectedOutput": [
          42,
          "object"
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "Oddiy funksiyada this uni kim chaqirganiga qarab belgilanadi; Arrow funksiyada shaxsiy this yo‘q, tashqi scope'dan olinadi.",
    "exercise": "const fn = obj.salom; fn() chaqirilganda nega this obj ga teng bo‘lmasligini tushuntiring.",
    "exerciseCode": "const car = {\n  tezlik: 100,\n  ol() { return this.tezlik; }\n};\nconst boglangan = car.ol.bind(car);\nconsole.log(boglangan());",
    "exerciseExpected": [
      100
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "bind(car) orqali this obyektga qat'iy bog‘landi va 100 qaytardi.",
    "resources": [
      {
        "title": "MDN: this",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
      }
    ],
    "learningGuide": {
      "goal": "this ning 4 ta chaqiruv qoidasini va arrow funksiyadagi leksik thisni ajrata olish.",
      "prerequisites": [
        "functions",
        "objects-basics",
        "this-keyword"
      ],
      "terms": [
        {
          "term": "Implicit Binding",
          "meaning": "Metod obyekt orqali (obj.fn) chaqirilganda this ning obj ga teng bo‘lishi."
        },
        {
          "term": "Lexical this",
          "meaning": "Arrow funksiyaning this ni o‘z ota scope'idan meros qilib olishi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Chaqiruv kontekstiga qarab this nima bo‘lishini aniqlang.",
      "debug": {
        "task": "Kutilgan natija: 'Ali'. Hozirgi kodda arrow funksiya sababli undefined chiqmoqda.",
        "brokenCode": "const user = {\n  ism: 'Ali',\n  salom: () => this.ism\n};\nconsole.log(user.salom() || 'Ali');",
        "fixedCode": "const user = {\n  ism: 'Ali',\n  salom() { return this.ism; }\n};\nconsole.log(user.salom());",
        "expectedOutput": [
          "Ali"
        ],
        "runtime": "javascript",
        "explanation": "Arrow funksiya o‘rniga oddiy metod ishlatildi, shunda this user obyektiga bog‘landi."
      },
      "write": {
        "task": "Obyekt metodi va alohida bind qilingan funksiya orqali qiymatni qaytaring.",
        "criteria": [
          "Obyekt ichida kamida bitta metod bo‘lsin.",
          "bind yordamida metodni boshqa o‘zgaruvchiga xavfsiz bog‘lang.",
          "Konsolda kutilgan natija chiqsin."
        ],
        "hint": "const o = { n: 10, f() { return this.n; } }; const b = o.f.bind(o);"
      }
    }
  },
  {
    "id": "core-type-coercion-deep",
    "title": "Type Coercion: turlar konvertatsiyasi va taqqoslash tuzoqlari",
    "question": "+ nimaga matnga, -, *, / songa aylantiradi? [] == ![] nega true?",
    "explanation": "JavaScript zaif tiplangan (weakly typed) til bo‘lib, mos kelmagan turlar ishtirok etganda avtomatik tur o‘zgartirishni (Implicit Coercion) amalga oshiradi.\n\nAsosiy qoidalar:\n1. `+` operatori: Agar kamida bitta operand `string` bo‘lsa (yoki ToPrimitive orqali stringga aylansa), qolganlari ham stringga aylanadi va birlashtiriladi (konkatenatsiya).\n2. `-`, `*`, `/`, `%` operatorlari: Har doim barcha operandlarni `Number` ga aylantiradi.\n3. `==` (Abstract Equality): Turlarni avval songa (Number) keltirib solishtiradi.\n4. `===` (Strict Equality): Agar turlari har xil bo‘lsa, hech qanday o‘zgartirishsiz darhol `false` qaytaradi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-type-coercion-deep",
    "sections": [
      {
        "title": "1. Birinchi misol: + va - operatorlari farqi",
        "text": "+ matn hosil qiladi, - esa songa aylantiradi.",
        "code": "console.log('5' + 2);\nconsole.log('5' - 2);\nconsole.log(true + false);",
        "expectedOutput": [
          "52",
          3,
          1
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Mashhur coercion va taqqoslash tuzoqlari",
        "text": "Intervyuda eng ko‘p uchraydigan ifodalar tahlili.",
        "table": {
          "headers": [
            "Ifoda",
            "Natija",
            "Nima uchun bunday bo‘ldi?"
          ],
          "rows": [
            [
              "'5' + 3",
              "'53'",
              "+ string ko‘rsa matnga birlashtiradi"
            ],
            [
              "'5' - 3",
              "2",
              "- faqat raqamlar bilan ishlaydi, '5' songa aylanadi"
            ],
            [
              "[] + []",
              "'' (bo‘sh string)",
              "Massiv ToPrimitive bo‘yicha bo‘sh stringga aylanadi"
            ],
            [
              "[] + {}",
              "'[object Object]'",
              "'' + '[object Object]' natijasi"
            ],
            [
              "[] == ![]",
              "true",
              "![] bu false; [] esa 0 ga aylanadi; 0 == 0 bu true"
            ]
          ]
        }
      },
      {
        "title": "3. [] == ![] ning qadam-baqadam yechimi",
        "text": "1. ![] birinchi hisoblanadi: [] truthy bo‘lgani uchun ![] → false bo‘ladi.\n2. [] == false qoladi.\n3. Taqqoslash qoidasi bo‘yicha false → 0 bo‘ladi: [] == 0.\n4. [] primitivga aylanadi: '' (bo‘sh string) → '' == 0.\n5. '' songa aylanadi: 0 → 0 == 0.\n6. Natija: true!",
        "code": "const natija = [] == ![];\nconsole.log(natija);\nconsole.log(Boolean([]));",
        "expectedOutput": [
          true,
          true
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "+ operatori matnga birlashtirishga moyil; arifmetik operatorlar (- * /) esa har doim songa aylantiradi. == taqqoslashda turlar songa keltiriladi.",
    "exercise": "null == undefined va null === undefined natijalarini va sababini tushuntiring.",
    "exerciseCode": "console.log(null == undefined);\nconsole.log(null === undefined);",
    "exerciseExpected": [
      true,
      false
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "== qoidasida null va undefined faqat bir-biriga teng; === da esa turlari har xil bo‘lgani uchun false.",
    "resources": [
      {
        "title": "MDN: Equality comparisons",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
      }
    ],
    "learningGuide": {
      "goal": "Implicit coercion qoidalarini va == vs === farqlarini mukammal o‘zlashtirish.",
      "prerequisites": [
        "data-types",
        "operators",
        "coercion-equality",
        "truthy-falsy"
      ],
      "terms": [
        {
          "term": "Coercion",
          "meaning": "JavaScriptning bir turni boshqasiga avtomatik o‘tkazishi."
        },
        {
          "term": "ToPrimitive",
          "meaning": "Obyekt yoki massivni oddiy primitiv qiymatga aylantirish ichki algoritmi."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Har bir ifodaning qaysi turga aylanib hisoblanishini yozing.",
      "debug": {
        "task": "Kutilgan natija: 10 chiqsin (matn emas, son). Hozirgi kod '55' beradi.",
        "brokenCode": "const a = '5';\nconst b = 5;\nconsole.log(a + b);",
        "fixedCode": "const a = '5';\nconst b = 5;\nconsole.log(Number(a) + b);",
        "expectedOutput": [
          10
        ],
        "runtime": "javascript",
        "explanation": "Number(a) orqali a songa aylantirildi, natijada sonli qo‘shish bajarildi."
      },
      "write": {
        "task": "String son va raqamni qo‘shganda, ayirganda va solishtirganda natijalarni log qiling.",
        "criteria": [
          "+ orqali birlashtirishni ko‘rsating.",
          "- orqali ayirishni ko‘rsating.",
          "== va === farqini ko‘rsating."
        ],
        "hint": "const a = '10', b = 5; console.log(a + b, a - b, a == 10);"
      }
    }
  },
  {
    "id": "core-pass-by-ref-deep",
    "title": "Pass by Value va Pass by Reference: xotira modeli va mutatsiya",
    "question": "Primitivlar va obyektlar funksiyaga uzatilganda yoki nusxalanganda qanday saqlanadi?",
    "explanation": "JavaScriptda qiymatlar xotirada qanday saqlanishiga qarab ikki toifaga bo‘linadi:\n\n1. **Pass by Value (Qiymat bo‘yicha uzatish — Primitivlar):** `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. Bular Stack xotirada joylashadi. Ulardan nusxa olinganda yangi xotira katagi ochilib, to‘liq mustaqil nusxa yoziladi. Biri o‘zgarsa, ikkinchisiga ta'sir qilmaydi.\n\n2. **Pass by Reference (Manzil bo‘yicha uzatish — Obyektlar va Massivlar):** `Object`, `Array`, `Function`. Bular Heap xotirada saqlanadi. O‘zgaruvchiga esa faqat obyekt joylashgan xotira manzili (ko‘rsatkich) yoziladi. Nusxa olinganda faqat manzil nusxalanadi, ya'ni ikkala o‘zgaruvchi ayni bir obyektga qaraydi. Biri orqali ichki qiymat o‘zgartirilsa (mutatsiya), ikkinchisida ham o‘zgaradi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "codeLabId": "lab-core-pass-by-ref-deep",
    "sections": [
      {
        "title": "1. Birinchi misol: primitiv vs obyekt nusxasi",
        "text": "Primitiv o‘zgarmaydi, lekin obyekt bitta manzilga qaragani uchun o‘zgaradi.",
        "code": "let x = 10;\nlet y = x;\ny = 20;\n\nconst obj1 = { ball: 50 };\nconst obj2 = obj1;\nobj2.ball = 100;\n\nconsole.log(x, obj1.ball);",
        "expectedOutput": [
          10,
          100
        ],
        "exampleRuntime": "javascript"
      },
      {
        "title": "2. Xotira modeli solishtirma jadvali",
        "text": "Stack va Heap o‘rtasidagi farqlar.",
        "table": {
          "headers": [
            "Xususiyat",
            "Primitivlar (Value)",
            "Obyektlar / Massivlar (Reference)"
          ],
          "rows": [
            [
              "Xotira joyi",
              "Stack (tezkor, qat'iy hajm)",
              "Heap (dinamik hajm), Stackda faqat pointer"
            ],
            [
              "Biriktirish (a = b)",
              "Haqiqiy qiymat nusxalanadi",
              "Faqat xotira manzili nusxalanadi"
            ],
            [
              "Taqqoslash (a === b)",
              "Qiymatlar tengligi tekshiriladi",
              "Ayni bitta xotira manziliga qarashi tekshiriladi"
            ],
            [
              "Nusxalash yechimi",
              "To‘g‘ridan-to‘g‘ri nusxalanadi",
              "Spread {...obj}, structuredClone() yoki deep copy kerak"
            ]
          ]
        }
      },
      {
        "title": "3. Funksiyaga argument uzatilgandagi tuzoq",
        "text": "Funksiyaga obyekt uzatilganda uning xususiyatini o‘zgartirish mumkin, lekin obyektning o‘zini yangi obyektga qayta biriktirish tashqi obyektni o‘zgartirmaydi.",
        "code": "function yangila(o) {\n  o.nom = 'Yangilandi';\n  o = { nom: 'Boshqa' };\n}\nconst kitob = { nom: 'Asosiy' };\nyangila(kitob);\nconsole.log(kitob.nom);",
        "expectedOutput": [
          "Yangilandi"
        ],
        "exampleRuntime": "javascript"
      }
    ],
    "takeaway": "Primitivlar qiymat bo‘yicha nusxalanadi va mustaqil bo‘ladi; obyektlar xotira manziliga bog‘lanadi va ichki mutatsiya barcha ko‘rsatkichlarga ta'sir qiladi.",
    "exercise": "const a = { x: 1 }; const b = { ...a }; b.x = 2; a.x nima bo‘ladi va nega?",
    "exerciseCode": "const a = { x: 1 };\nconst b = { ...a };\nb.x = 2;\nconsole.log(a.x, b.x);",
    "exerciseExpected": [
      1,
      2
    ],
    "exerciseRuntime": "javascript",
    "exerciseAnswer": "Spread operator birinchi qavatni sayoz (shallow) nusxalaydi, shuning uchun a.x o‘zgarmay 1 qoladi, b.x esa 2 bo‘ladi.",
    "resources": [
      {
        "title": "MDN: Data structures",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
      }
    ],
    "learningGuide": {
      "goal": "Pass by Value va Pass by Reference farqlarini va mutatsiya xavfini to‘liq bilish.",
      "prerequisites": [
        "data-types",
        "objects-basics",
        "object-reference"
      ],
      "terms": [
        {
          "term": "Pass by Value",
          "meaning": "Qiymatning o‘zi to‘liq nusxalanishi (primitivlar)."
        },
        {
          "term": "Pass by Reference",
          "meaning": "Xotira manzilining nusxalanishi (obyektlar)."
        },
        {
          "term": "Mutation",
          "meaning": "Mavjud obyekt yoki massiv ichki ma'lumotlarini o‘zgartirish."
        }
      ]
    },
    "learningPractice": {
      "predictPrompt": "Qaysi o‘zgaruvchilar bir xil manzilga qarashini aniqlab natijani yozing.",
      "debug": {
        "task": "Kutilgan natija: a.son 5 bo‘lib qolsin, b.son 10 bo‘lsin (mustaqil nusxa).",
        "brokenCode": "const a = { son: 5 };\nconst b = a;\nb.son = 10;\nconsole.log(a.son, b.son);",
        "fixedCode": "const a = { son: 5 };\nconst b = { ...a };\nb.son = 10;\nconsole.log(a.son, b.son);",
        "expectedOutput": [
          [
            5,
            10
          ]
        ],
        "runtime": "javascript",
        "explanation": "Spread ({ ...a }) orqali mustaqil sayoz nusxa yaratildi, a.son o‘zgarmadi."
      },
      "write": {
        "task": "Obyekt mutatsiyasi va mustaqil nusxani solishtiruvchi kod yozing.",
        "criteria": [
          "Birinchi holatda to‘g‘ridan-to‘g‘ri biriktirish natijasidagi mutatsiyani ko‘rsating.",
          "Ikkinchi holatda mustaqil nusxa yaratib, asl obyekt saqlanganini ko‘rsating.",
          "Ikkala holat natijasini log qiling."
        ],
        "hint": "const o1 = { x: 1 }; const o2 = o1; const o3 = { ...o1 };"
      }
    }
  },
  {
    "id": "mdn-prototypes-deep",
    "title": "MDN: Prototip zanjiri va merosxo‘rlik chuqur tahlili",
    "question": "[[Prototype]] zanjiri, property shadowing, Object.create(null) va prototip orqali xotira tejamkorligi qanday ishlaydi?",
    "explanation": "JavaScript klassik sinfli tillardan farqli o‘laroq to‘liq prototipli (prototypal) modelga qurilgan. Har bir obyekt yashirin [[Prototype]] havolasiga ega bo‘lib, xususiyat qidirish zanjir oxiri (null) ga yetguncha davom etadi. Metodlarni umumiy prototipga qo‘yish xotirani tejaydi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. [[Prototype]] zanjiri va xususiyat izlash",
        "text": "Obyektdan biror xususiyat o‘qilganda avval uning shaxsiy xususiyatlari (own properties) tekshiriladi. Agar topilmasa, uning [[Prototype]] obyekti, so‘ng uning prototipi qidiriladi. null ga yetganda qidiruv to‘xtaydi va undefined qaytadi.",
        "code": "const proto = { role: \"admin\" };\nconst user = Object.create(proto);\nuser.name = \"Ali\";\nconsole.log(user.name);\nconsole.log(user.role);\nconsole.log(user.unknown);",
        "note": "user.role prototipdan topiladi, user.unknown esa zanjirda umuman yo‘qligi uchun undefined beradi."
      },
      {
        "title": "2. Property Shadowing va this bog‘lanishi",
        "text": "Agar merosxo‘r obyektga prototipida mavjud nom bilan qiymat yozilsa, bu prototipni o‘zgartirmaydi, balki o‘sha obyektning o‘zida yangi xususiyat yaratadi (shadowing). Prototip metodi ichidagi this chaqiruv qilingan obyektga ishora qiladi.",
        "code": "const base = { count: 10, inc() { return this.count + 1; } };\nconst sub = Object.create(base);\nconsole.log(sub.inc());\nsub.count = 20;\nconsole.log(sub.inc());",
        "note": "sub.count = 20 prototipdagi base.count ga teginmaydi, balki sub obyekti ustida yangi shaxsiy count hosil qiladi."
      },
      {
        "title": "3. Object.create(null) va toza lug‘atlar",
        "text": "Oddiy {} obyekti Object.prototype dan toString, hasOwnProperty kabi xususiyatlarni oladi. Object.create(null) bilan esa prototip zanjiri bo‘lmagan toza lug‘at yaratiladi. Unda hasOwnProperty bo‘lmagani uchun Object.hasOwn(obj, key) ishlatilishi shart.",
        "code": "const clean = Object.create(null);\nclean.key = \"val\";\nconsole.log(\"toString\" in clean);\nconsole.log(Object.hasOwn(clean, \"key\"));",
        "note": "clean.hasOwnProperty chaqirilsa TypeError yuz beradi, chunki prototip zanjirida hasOwnProperty mavjud emas."
      }
    ],
    "takeaway": "Prototip zanjiri orqali metodlar barcha nusxalar uchun umumiy bitta manzilga joylanadi (xotira tejaladi). Xususiyat o‘qish zanjir bo‘ylab yuqoriga boradi, xususiyat yozish esa shaxsiy obyektga yangi xususiyat yaratadi (shadowing).",
    "exercise": "Obyekt prototip zanjiridagi xususiyatlarni shaxsiy xususiyatlardan ajratib o‘rganing.",
    "exerciseCode": "const proto = { type: \"transport\" };\nconst car = Object.create(proto);\ncar.brand = \"Chevrolet\";\nconsole.log(Object.hasOwn(car, \"brand\"));\nconsole.log(Object.hasOwn(car, \"type\"));\nconsole.log(\"type\" in car);",
    "exerciseExpected": [
      true,
      false,
      true
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. car.brand shaxsiy bo‘lgani uchun Object.hasOwn true beradi.\n2. car.type meros bo‘lgani uchun Object.hasOwn false beradi.\n3. 'in' operatori prototip zanjirini ham tekshirgani sababli true qaytaradi.",
    "resources": [
      {
        "title": "MDN: Inheritance and the prototype chain",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain"
      }
    ],
    "learningGuide": {
      "goal": "JavaScript obyektlarida [[Prototype]] zanjiri, property shadowing va Object.create(null) ning xotira modelini o‘rganish.",
      "prerequisites": [
        "prototypes",
        "classes",
        "objects-basics"
      ],
      "terms": [
        {
          "term": "[[Prototype]]",
          "meaning": "Har bir obyektning ichki yashirin havolasi; xususiyat topilmasa shu havola bo‘ylab zanjir oxirigacha qidiriladi."
        },
        {
          "term": "Property Shadowing",
          "meaning": "Obyektning o‘zida prototipdagi xususiyat bilan bir xil nomli shaxsiy xususiyat paydo bo‘lib, prototipdagini to‘sib qo‘yishi."
        },
        {
          "term": "Object.create(null)",
          "meaning": "Object.prototype dan ham xoli, hech qanday prototipga ega bo‘lmagan sofsiz lug‘at obyekti."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const dict = Object.create(null);\ndict.name = \"Kitob\";\nconst has = dict.hasOwnProperty ? dict.hasOwnProperty(\"name\") : false;\nconsole.log(has);",
        "fixedCode": "const dict = Object.create(null);\ndict.name = \"Kitob\";\nconst has = Object.hasOwn(dict, \"name\");\nconsole.log(has);",
        "explanation": "Object.create(null) bilan yaratilgan obyektlarda hasOwnProperty bo‘lmaydi. Zamonaviy JS da Object.hasOwn(dict, 'name') xavfsiz va to‘g‘ri yechimdir.",
        "expectedOutput": [
          true
        ]
      },
      "write": {
        "task": "Prototip zanjirida shadowing va this bog‘lanishini tekshiring.",
        "hint": "Object.create va metod ichida this.x dan foydalaning.",
        "criteria": [
          "Object.create yordamida merosxo‘r obyekt yaratish",
          "Prototipdagi xususiyatni shadowing qilish",
          "this bog‘lanishi shaxsiy qiymatga ulanishini tekshirish"
        ]
      }
    }
  },
  {
    "id": "mdn-memory-management",
    "title": "MDN: Xotira boshqaruvi, Garbage Collection va WeakRef",
    "question": "Mark-and-sweep algoritmi, ildiz (roots) obyektlar, aylanma havolalar va WeakMap/WeakRef xotira boshqaruvida nima uchun kerak?",
    "explanation": "JavaScriptda xotira avtomatik tarzda boshqariladi (Garbage Collection). Zamonaviy dvigatellar reference-counting o‘rniga Mark-and-sweep algoritmidan foydalanadi. Ildizlardan yetib borib bo‘lmaydigan har qanday obyekt (aylanma havola bo‘lsa ham) xotiradan tozalanadi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Xotira Hayot Sikli va Mark-and-sweep",
        "text": "Xotira hayot sikli 3 bosqichdan iborat: Ajratish (Allocation), Foydalanish (Use) va Bo‘shatish (Release). Mark-and-sweep algoritmi global ildizlar (window, Call Stack) dan boshlab barcha yetib boriladigan obyektlarni belgilaydi (mark). Belgilanmaganlari esa sweep bosqichida tozalanadi.",
        "code": "let data = { payload: [1, 2, 3] };\nlet holder = data;\ndata = null;\nconsole.log(holder.payload.length);\nholder = null;\nconsole.log(\"Xotiradan tozalanishga tayyor\");",
        "note": "Obyektga havolalar soni emas, ildizdan unga yetib borish imkoni (reachability) muhimdir."
      },
      {
        "title": "2. Aylanma Havolalar (Circular References)",
        "text": "Eski reference-counting algoritmi bir-biriga havola qiluvchi obyektlarni (a.ref = b; b.ref = a) hech qachon tozalay olmas edi. Zamonaviy Mark-and-sweep algoritmi esa agar bu ikki obyektga ildizdan yo‘l bo‘lmasa, ularni hech qanday muammosiz xotiradan tozalaydi.",
        "code": "function createCycle() {\n  const a = {};\n  const b = {};\n  a.link = b;\n  b.link = a;\n  return \"Aylanma havola tuzildi\";\n}\nconsole.log(createCycle());",
        "note": "Funksiya tugagach Call Stack dan a va b ga havola uziladi va ikkala obyekt ham GC tomonidan o‘chiriladi."
      },
      {
        "title": "3. WeakMap, WeakSet va Ephemeronlar",
        "text": "Oddiy Map o‘z kalitlarini qattiq (strong) ushlab turadi va memory leak ga sabab bo‘lishi mumkin. WeakMap va WeakSet esa kalitlarni zaif ushlaydi — agar kalitga tashqarida boshqa havola qolmasa, u GC tomonidan tozalanadi.",
        "code": "const wm = new WeakMap();\nlet user = { id: 7 };\nwm.set(user, \"Meta\");\nconsole.log(wm.has(user));\nuser = null;\nconsole.log(\"Zaif havola bo‘shatildi\");",
        "note": "WeakMap kalitlari bo‘yicha sikl aylanib bo‘lmaydi (non-iterable), chunki GC qachon tozalashi oldindan noma'lum."
      }
    ],
    "takeaway": "JavaScriptda Garbage Collection to‘liq avtomatlashgan, ammo faqat unreachable obyektlarni o‘chiradi. Global ro‘yxatlar, yopilmagan listenerlar va Map kalitlari sababli xotira oqib ketmasligi uchun zaif kolleksiyalardan (WeakMap, WeakSet) foydalaning.",
    "exercise": "Zaif havolalar va xotiradan xavfsiz tozalash jarayonini tahlil qiling.",
    "exerciseCode": "const set = new WeakSet();\nlet item = { token: \"abc\" };\nset.add(item);\nconsole.log(set.has(item));\nitem = null;\nconsole.log(\"Obyekt bo‘shatildi\");",
    "exerciseExpected": [
      true,
      "Obyekt bo‘shatildi"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. item avval mavjud bo‘lgani uchun set.has(item) true beradi.\n2. item null qilingach, WeakSet uni qattiq ushlamaydi va GC obyektni bemalol tozalaydi.",
    "resources": [
      {
        "title": "MDN: Memory management",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management"
      }
    ],
    "learningGuide": {
      "goal": "Xotira hayot sikli, Mark-and-sweep mexanizmi va WeakMap/WeakSet orqali xotira sizishlarini oldini olishni o‘rganish.",
      "prerequisites": [
        "memory-management",
        "objects-basics",
        "map-set"
      ],
      "terms": [
        {
          "term": "Mark-and-sweep",
          "meaning": "Ildiz (Roots) dan yetib borib bo‘lmaydigan har qanday obyektni tozalovchi zamonaviy GC algoritmi."
        },
        {
          "term": "Reachability",
          "meaning": "Obyektga global ko‘lam yoki joriy Call Stack orqali yetib borish imkoniyatining mavjudligi."
        },
        {
          "term": "WeakMap",
          "meaning": "Kalitlari faqat obyekt yoki ro‘yxatdan o‘tmagan Symbol bo‘lgan va GC ga to‘sqinlik qilmaydigan zaif lug‘at."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const cache = new Map();\nlet u = { name: \"Hasan\" };\ncache.set(u, \"aktiv\");\nconsole.log(cache.has(u));\n// u = null qilinganda ham Map uni qattiq ushlab turadi",
        "fixedCode": "const cache = new WeakMap();\nlet u = { name: \"Hasan\" };\ncache.set(u, \"aktiv\");\nconsole.log(cache.has(u));",
        "explanation": "Oddiy Map obyektni butun umrga xotirada ushlab qoladi. WeakMap ishlatilsa, obyekt tashqarida null qilinganda xotira avtomatik bo‘shaydi.",
        "expectedOutput": [
          true
        ]
      },
      "write": {
        "task": "Zaif havolalar orqali xotirani tejovchi struktura yarating.",
        "hint": "WeakMap yoki WeakSet dan foydalaning.",
        "criteria": [
          "WeakMap yaratish",
          "Obyekt kaliti bilan ma'lumot bog'lash",
          "has metodi orqali tekshirish"
        ]
      }
    }
  },
  {
    "id": "mdn-typed-arrays",
    "title": "MDN: TypedArray va Binary Ma'lumotlar Boshqaruvi",
    "question": "ArrayBuffer, TypedArray (Uint8Array, Int32Array, Float64Array) va DataView binar ma'lumotlar bilan ishlashda qanday rol o‘ynaydi?",
    "explanation": "JavaScriptda binar ma'lumotlar bilan samarali ishlash uchun ArrayBuffer va uning ustiga qurilgan ko‘rinishlar (TypedArray hamda DataView) qo‘llaniladi. Ular multimedia, WebGL, Canvas piksellari va tarmoq soketlarida C darajasidagi yuqori tezlikni ta'minlaydi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. ArrayBuffer — Xom Baytlar Xotirasi",
        "text": "ArrayBuffer — bu belgilangan o‘lchamdagi toza binar xotira bloki. Unga to‘g‘ridan-to‘g‘ri qiymat yozib bo‘lmaydi; uning ichidagi baytlarni talqin qilish uchun turlangan massiv (TypedArray) kerak bo‘ladi.",
        "code": "const buf = new ArrayBuffer(8);\nconsole.log(buf.byteLength);\nconst u8 = new Uint8Array(buf);\nconsole.log(u8.length);",
        "note": "8 baytli bufer Uint8Array uchun 8 ta element, Uint16Array uchun 4 ta element beradi."
      },
      {
        "title": "2. TypedArray Turlari va To‘lib Toshish (Overflow)",
        "text": "Uint8Array 0 dan 255 gacha bo‘lgan sonlarni saqlaydi. 256 kiritilganda to‘lib toshadi (overflow: 256 % 256 = 0). Uint8ClampedArray esa toshmasdan qiymatni 0-255 chegarasida qisib (clamp) saqlaydi.",
        "code": "const normal = new Uint8Array([255, 256]);\nconsole.log(normal[0]);\nconsole.log(normal[1]);\nconst clamped = new Uint8ClampedArray([255, 256]);\nconsole.log(clamped[1]);",
        "note": "Piksel ranglari bilan ishlashda doimo Uint8ClampedArray ishlatiladi."
      },
      {
        "title": "3. DataView va Endianness (Baytlar Tartibi)",
        "text": "DataView bitta buferning turli bayt pozitsiyalarida turli formatlarni o‘qish va Little-endian yoki Big-endian tartibini aniq belgilash imkonini beradi.",
        "code": "const buffer = new ArrayBuffer(4);\nconst view = new DataView(buffer);\nview.setUint8(0, 1);\nview.setUint8(1, 2);\nconsole.log(view.getUint16(0, false));",
        "note": "false ikkinchi argumenti Big-endian tartibini bildiradi: (1 << 8) + 2 = 258."
      }
    ],
    "takeaway": "ArrayBuffer binar baytlarni xotirada ajratadi, TypedArray esa uni indekslangan massiv kabi o‘qish/yozish imkonini beradi. Tarmoq protokollari va fayl formatlarida DataView orqali ixtiyoriy turlarni boshqarish mumkin.",
    "exercise": "Binar buferga baytlarni yozish va ularning o‘lchamini hisoblashni mashq qiling.",
    "exerciseCode": "const buf = new ArrayBuffer(4);\nconst u8 = new Uint8Array(buf);\nu8[0] = 1;\nu8[1] = 0;\nconst u16 = new Uint16Array(buf);\nconsole.log(u8.length);\nconsole.log(u16.length);\nconsole.log(u16[0]);",
    "exerciseExpected": [
      4,
      2,
      1
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. 4 baytli buferda Uint8Array 4 ta elementga ega bo‘ladi.\n2. Uint16Array har bir elementga 2 bayt sarflagani uchun uning uzunligi 2 bo‘ladi.\n3. Little-endian arxitekturada birinchi 16-bitli son 1 ga teng bo‘ladi.",
    "resources": [
      {
        "title": "MDN: JavaScript typed arrays",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays"
      }
    ],
    "learningGuide": {
      "goal": "ArrayBuffer, TypedArray turlari va DataView yordamida binar ma'lumotlar bilan ishlashni o‘rganish.",
      "prerequisites": [
        "arrays-basics",
        "array-methods",
        "numbers-math"
      ],
      "terms": [
        {
          "term": "ArrayBuffer",
          "meaning": "O‘zgarmas o‘lchamdagi toza binar xotira buferi."
        },
        {
          "term": "TypedArray",
          "meaning": "ArrayBuffer ustiga qurilgan, ma'lum turdagi (Uint8, Int32 va h.k.) sonlarni saqlovchi ko‘rinish."
        },
        {
          "term": "DataView",
          "meaning": "Ixtiyoriy bayt siljishi va endianness bilan binar qiymatlarni o‘quvchi/yozuvchi vosita."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const buf = new ArrayBuffer(4);\n// Xato: ArrayBuffer ga togridan togri indeks bilan yozib bolmaydi\nbuf[0] = 42;\nconsole.log(buf[0]);",
        "fixedCode": "const buf = new ArrayBuffer(4);\nconst view = new Uint8Array(buf);\nview[0] = 42;\nconsole.log(view[0]);",
        "explanation": "ArrayBuffer bevosita indekslanmaydi; unga qiymat yozish uchun TypedArray (masalan, Uint8Array) yaratish kerak.",
        "expectedOutput": [
          42
        ]
      },
      "write": {
        "task": "ArrayBuffer va Uint8Array orqali binar massiv hosil qiling.",
        "hint": "new ArrayBuffer va new Uint8Array dan foydalaning.",
        "criteria": [
          "ArrayBuffer yaratish",
          "Uint8Array ko‘rinishini bog‘lash",
          "Elementni indeks orqali o‘qish"
        ]
      }
    }
  },
  {
    "id": "mdn-resource-management",
    "title": "MDN: Explicit Resource Management (using & DisposableStack)",
    "question": "ES2024 ning yangi 'using' deklaratsiyasi, Symbol.dispose va DisposableStack resurslarni deterministik tozalashda qanday ishlaydi?",
    "explanation": "Fayllar, bazalar bilan ulanishlar yoki locklarni doimo tozalash zarur. Yangi 'using' kalit so‘zi va Symbol.dispose bloki ({}) tugashi bilan, xatto xatolik ro‘y berganda ham, tozalash metodini avtomatik chaqiradi. Bu ko‘p qavatli try...finally bloklarining o‘rnini bosadi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. try...finally va Resurslarni Tozalash Muammosi",
        "text": "Ilgari ochiq resurslarni (fayl drayveri, taymer, ulanish) o‘z vaqtida yopish uchun try...finally bloklari yozilar edi. Bir nechta resurs bo‘lganda nihoyatda murakkab va chalkash kod paydo bo‘lardi.",
        "code": "function legacyCleanup() {\n  let open = true;\n  try {\n    return \"Natija\";\n  } finally {\n    open = false;\n  }\n}\nconsole.log(legacyCleanup());",
        "note": "finally bloki hatto return berilganda ham ishlab, resursni yopishni kafolatlaydi."
      },
      {
        "title": "2. 'using' va Symbol.dispose Standarti",
        "text": "Yangi 'using' deklaratsiyasi bilan e'lon qilingan obyekt o‘zgaruvchi ko‘lami (block scope) tugashi bilan uning [Symbol.dispose]() metodi avtomatik chaqiriladi. Asinxron resurslar uchun esa 'await using' va 'Symbol.asyncDispose' mavjud.",
        "code": "const disposeSym = Symbol.dispose || Symbol.for(\"Symbol.dispose\");\nclass Handle {\n  constructor(id) { this.id = id; }\n  [disposeSym]() { console.log(this.id + \" yopildi\"); }\n}\n{\n  const h = new Handle(\"res-1\");\n  h[disposeSym]();\n}",
        "note": "Blok ichida xatolik (throw) bo‘lsa ham Symbol.dispose chaqirilishi 100% kafolatlanadi."
      },
      {
        "title": "3. DisposableStack va LIFO Tartibi",
        "text": "DisposableStack bir nechta resurslarni ro‘yxatga olib, ularni oxirgi ochilganidan boshlab teskari tartibda (LIFO) avtomatik tozalaydi.",
        "code": "const stack = [];\nfunction defer(fn) { stack.push(fn); }\ndefer(() => console.log(\"1-resurs yopildi\"));\ndefer(() => console.log(\"2-resurs yopildi\"));\nwhile (stack.length) stack.pop()();",
        "note": "Birinchi ochilgan baza ulanishi eng oxirida, unga bog‘langan tranzaksiya esa birinchi yopiladi."
      }
    ],
    "takeaway": "Explicit Resource Management ('using', 'Symbol.dispose') xatolik yoki erta qaytish yuz berganda xotira va tizim resurslarining ochiq qolib ketishini bartaraf etuvchi eng zamonaviy JavaScript xususiyatidir.",
    "exercise": "try...finally va deterministik tozalash ketma-ketligini tahlil qiling.",
    "exerciseCode": "const logs = [];\nfunction cleanup() {\n  try {\n    logs.push(\"bajarildi\");\n    return \"natija\";\n  } finally {\n    logs.push(\"tozalandi\");\n  }\n}\nconst res = cleanup();\nconsole.log(res);\nconsole.log(logs.join(\", \"));",
    "exerciseExpected": [
      "natija",
      "bajarildi, tozalandi"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. try bloki bajariladi va logs ga 'bajarildi' yoziladi.\n2. return berilgan bo‘lsa ham finally bloki ishlab, 'tozalandi' qo‘shiladi.\n3. Natijada resurs to‘g‘ri yopiladi.",
    "resources": [
      {
        "title": "MDN: Resource management",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Resource_management"
      }
    ],
    "learningGuide": {
      "goal": "Explicit Resource Management ('using', 'Symbol.dispose') orqali resurslarni avtomatik va xavfsiz tozalashni o‘rganish.",
      "prerequisites": [
        "errors-try-catch",
        "functions",
        "symbol-bigint"
      ],
      "terms": [
        {
          "term": "using",
          "meaning": "Blok ({}) yakunlanishi bilan resursning [Symbol.dispose]() metodini chaqiruvchi yangi deklaratsiya."
        },
        {
          "term": "Symbol.dispose",
          "meaning": "Resursni deterministik yopish uchun mo‘ljallangan rasmiy well-known symbol."
        },
        {
          "term": "DisposableStack",
          "meaning": "Resurslarni LIFO tartibida ketma-ket tozalovchi standart stek."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "function runTask() {\n  let active = true;\n  return \"Yakunlandi\";\n  active = false;\n  console.log(active);\n}\nconsole.log(runTask());",
        "fixedCode": "function runTask() {\n  let active = true;\n  try {\n    return \"Yakunlandi\";\n  } finally {\n    active = false;\n    console.log(active);\n  }\n}\nconsole.log(runTask());",
        "explanation": "return dan keyingi qatorlar bajarilmay qoladi. Tozalash kodi albatta finally (yoki 'using') ichida bo‘lishi shart.",
        "expectedOutput": [
          false,
          "Yakunlandi"
        ]
      },
      "write": {
        "task": "Resursni deterministik tozalovchi mantiq yozing.",
        "hint": "try...finally yoki dispose mexanizmidan foydalaning.",
        "criteria": [
          "Resurs holatini belgilash",
          "Funksiyadan qiymat qaytarish",
          "finally orqali tozalanishni ta'minlash"
        ]
      }
    }
  },
  {
    "id": "mdn-intl",
    "title": "MDN: Internationalization API (Intl)",
    "question": "JavaScriptning Intl obyekti sanalar, valyutalar, raqamlar va matnlarni saralashda qanday ishlaydi?",
    "explanation": "Dasturlarni turli davlatlar va tillarga moslashtirish (i18n) uchun brauzer va Node.js da standart Intl obyekti mavjud. U qoidalar, minglik ajratgichlar, valyuta belgilari va tilga xos alifbo tartiblashni avtomatik to‘g‘ri bajaradi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Nega Standart Intl Obyekti Kerak?",
        "text": "Har bir xalq va madaniyat raqamlar hamda sanalarni turlicha yozadi. Masalan, AQShda $1,234.56 bo‘lsa, Yevropada 1.234,56 € ko‘rinishida bo‘ladi. Intl yordamida qo‘lda matn yasamasdan rasmiy format hosil qilinadi.",
        "code": "const sum = 1500000;\nconst uz = new Intl.NumberFormat(\"uz-UZ\").format(sum);\nconsole.log(typeof uz);\nconst us = new Intl.NumberFormat(\"en-US\").format(sum);\nconsole.log(us);",
        "note": "Intl barcha zamonaviy muhitlarda o‘rnatilgan va qo‘shimcha kutubxonasiz ishlaydi."
      },
      {
        "title": "2. Valyuta va Foizlarni Formatlash",
        "text": "Intl.NumberFormat yordamida style: 'currency' va currency: 'USD'/'UZS' kabi xususiyatlar orqali professional moliyaviy formatlash amalga oshiriladi.",
        "code": "const fmt = new Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\",\n  maximumFractionDigits: 0\n});\nconsole.log(fmt.format(2500));",
        "note": "$2,500 ko‘rinishidagi natija avtomatik shakllanadi."
      },
      {
        "title": "3. Til Qoidalariga Ko‘ra Matn Saralash (Intl.Collator)",
        "text": "Oddiy Array.sort() harflarni Unicode kodi bo‘yicha taqqoslaydi, bu esa ko‘p tillarda xato tartiblashga olib keladi. Intl.Collator esa tilning haqiqiy imlo qoidalariga asoslanadi.",
        "code": "const words = [\"olma\", \"o‘rik\", \"anor\"];\nconst collator = new Intl.Collator(\"uz\");\nwords.sort(collator.compare);\nconsole.log(words[0]);",
        "note": "Nisbiy vaqtlar uchun esa Intl.RelativeTimeFormat ('3 kun oldin') juda qulaydir."
      }
    ],
    "takeaway": "Intl API (DateTimeFormat, NumberFormat, Collator, RelativeTimeFormat) ilovalarni mahalliylashtirish va xalqaro talablarga moslash bo‘yicha JavaScriptning rasmiy va eng tezkor standartidir.",
    "exercise": "Valyutani formatlash va xususiyatlarini tekshirishni mashq qiling.",
    "exerciseCode": "const price = 2500;\nconst fmt = new Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\"\n});\nconst out = fmt.format(price);\nconsole.log(out.includes(\"2,500\"));\nconsole.log(out.startsWith(\"$\"));",
    "exerciseExpected": [
      true,
      true
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. en-US lokali USD valyutasi uchun $ belgisini oldinga qo‘yadi.\n2. Minglik ajratgich sifatida vergul (,) ishlatiladi va 2,500 hosil bo‘ladi.\n3. Har ikkala console.log true qaytaradi.",
    "resources": [
      {
        "title": "MDN: Internationalization",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization"
      }
    ],
    "learningGuide": {
      "goal": "Intl obyekti orqali sanalar, valyutalar va matnlarni xalqaro standartlar asosida formatlashni o‘rganish.",
      "prerequisites": [
        "dates",
        "strings",
        "numbers-math"
      ],
      "terms": [
        {
          "term": "Intl.DateTimeFormat",
          "meaning": "Sanalarni foydalanuvchining tili va hududiga moslab chiquvchi konstruktor."
        },
        {
          "term": "Intl.NumberFormat",
          "meaning": "Raqamlar, foizlar va pul birliklarini formatlovchi rasmiy vosita."
        },
        {
          "term": "Intl.Collator",
          "meaning": "Matnlarni milliy alifbo qoidalariga mos tarzda to‘g‘ri saralash mexanizmi."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const n = 1500000;\n// Xato: Qolda string almashtirish barcha tillarga mos kelmaydi\nconst formatted = n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \");\nconsole.log(typeof formatted);",
        "fixedCode": "const n = 1500000;\nconst formatted = new Intl.NumberFormat(\"en-US\").format(n);\nconsole.log(formatted);",
        "explanation": "Qo‘lda matn almashtirish o‘rniga standart Intl.NumberFormat ishlatish ishonchli va xatosizdir.",
        "expectedOutput": [
          "1,500,000"
        ]
      },
      "write": {
        "task": "Intl.NumberFormat orqali sonni formatlang.",
        "hint": "new Intl.NumberFormat dan foydalaning.",
        "criteria": [
          "Intl.NumberFormat konstruktorini chaqirish",
          "format() metodini ishlatish",
          "Natija satr bo‘lishini tekshirish"
        ]
      }
    }
  },
  {
    "id": "mdn-operators-deep",
    "title": "MDN: Operatorlar, Ifodalar va Bog‘lanish Qoidalari",
    "question": "Mantiqiy tayinlovlar (&&=, ||=, ??=), Vergul operatori (,) va Unary operatorlar (+, -, ~, void) qanday ishlaydi?",
    "explanation": "JavaScriptdagi har bir operator ifoda (expression) hosil qiladi. Zamonaviy JS da ||= o‘rniga ??= ishlatish 0 va bo‘sh satrlarni tasodifiy yo‘qotishdan asraydi. Vergul operatori (,) esa ifodalarni zanjirlab eng oxirgisini qaytaradi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Mantiqiy Tayinlov Operatorlari (&&=, ||=, ??=)",
        "text": "ES2021 da qo‘shilgan mantiqiy tayinlov operatorlari qisqa tutashuv (short-circuiting) tamoyilida ishlaydi. a &&= b faqat a truthy bo‘lsa ishlaydi. a ||= b faqat a falsy bo‘lsa ishlaydi. a ??= b esa faqat a null yoki undefined (nullish) bo‘lsagina b qiymatini yozadi (0 yoki bo‘sh satr bo‘lsa teginmaydi).",
        "code": "let a = 0;\na ||= 10;\nconsole.log(a);\nlet b = 0;\nb ??= 20;\nconsole.log(b);",
        "note": "0 soni falsy, lekin nullish emas. Shuning uchun ||= uni 10 ga almashtiradi, ??= esa 0 ligicha saqlaydi."
      },
      {
        "title": "2. Vergul Operatori (,) va Qavslar",
        "text": "Vergul operatori (comma operator) barcha ifodalarni chapdan o‘ngga qarab bajaradi va faqat eng oxirgi ifoda qiymatini qaytaradi. U ko‘pincha for sikllarida yoki ifoda joylarida qo‘shimcha amallarni bir satrda bajarish uchun ishlatiladi.",
        "code": "let x = 1;\nlet y = (x++, x + 5);\nconsole.log(x);\nconsole.log(y);",
        "note": "y ga x + 5 natijasi (2 + 5 = 7) yoziladi, lekin unga qadar x++ ishlab x ni 2 ga oshirgan bo‘ladi."
      },
      {
        "title": "3. Unary Operatorlar: +, -, ~, void",
        "text": "Unary plus (+) operandni songa o‘tkazadi (+true === 1, +null === 0). Unary negation (-) songa aylantirib manfiy qiladi. Bitwise NOT (~) qiymatni 32-bit butun songa aylantirib bitlarini teskari qiladi: ~n formulasi -(n + 1) ga teng. void operatori esa ifodani bajarib har doim undefined qaytaradi.",
        "code": "console.log(+true);\nconsole.log(~(-1));\nconsole.log(void (5 + 5));",
        "note": "~(-1) === 0 bo‘lgani sababli eski kodlarda if (~str.indexOf(x)) ko‘rinishida element mavjudligini tekshirish uchun ko‘p qo‘llanilgan."
      },
      {
        "title": "4. Relational Operatorlar: 'in' va 'instanceof'",
        "text": "'in' operatori obyekt yoki uning prototip zanjirida berilgan xususiyat nomi mavjudligini tekshiradi (faqat obyektlar bilan ishlaydi, primitive bersangiz TypeError). 'instanceof' esa obyektning prototip zanjirida konstruktorning prototype xususiyati borligini tekshiradi (Constructor.prototype in Object.__proto__ zanjiri).",
        "code": "const avto = { model: 'Cobalt' };\nconsole.log('model' in avto); // true\nconsole.log('toString' in avto); // true (prototipdan kelgan)\nconsole.log([] instanceof Array); // true\nconsole.log([] instanceof Object); // true",
        "note": "Agar xususiyat faqat obyektning o‘ziga tegishli bo‘lishi shart bo‘lsa, 'in' o‘rniga Object.hasOwn(obj, 'prop') ishlatiladi."
      },
      {
        "title": "5. Bitwise (Bit darajasidagi) Operatorlar: &, |, ^, ~, <<, >>, >>>",
        "text": "Bitwise operatorlar sonlarni 32-bitli butun sonlar (two's complement) sifatida ko‘radi. & (AND), | (OR), ^ (XOR), ~ (NOT) bitlar ustida mantiqiy amallarni bajaradi. << (chapga surish) sonni 2 ga ko‘paytiradi, >> (o‘ngga surish ishorani saqlaydi), >>> (ishorasiz o‘ngga surish esa doim musbat 32-bit butun son beradi).",
        "code": "console.log(5 & 1); // 1 (0101 & 0001 = 0001)\nconsole.log(5 | 2); // 7 (0101 | 0010 = 0111)\nconsole.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)\nconsole.log(4 << 1); // 8 (4 * 2)\nconsole.log(8 >> 1); // 4 (8 / 2)\nconsole.log(-1 >>> 0); // 4294967295 (maksimal 32-bit musbat son)",
        "note": "Bitwise amallar yuqori tezlikdagi bitmask (bayroqlar / ruxsatlar) tizimlarida yoki grafik dasturlashda qo‘llaniladi."
      },
      {
        "title": "6. Operator Precedence (Amallar Ustuvorligi) va Associativity",
        "text": "MDN standartida operatorlar ustuvorligi 1 dan 18 gacha bo‘lgan darajalar bilan belgilanadi (18 — eng yuqori). Eng yuqori ustuvorlikka Primary va Member ifodalar ega: (), ., [], ?., new. Keyin ++, --, unary operatorlar (+, -, !, typeof, await), keyin arifmetika (**, *, /, %), solishtirishlar (<, >, in, instanceof, ===), mantiqiy (&&, ||, ??), shart (? :), va nihoyat tayinlovlar (=, +=, ??=). Bog‘lanish tartibi (associativity): arifmetika chapdan o‘ngga (left-to-right), lekin darajaga ko‘tarish (**) va tayinlovlar (=) o‘ngdan chapga (right-to-left) bajariladi: a = b = c avval b = c ni bajaradi.",
        "code": "let a, b;\na = b = 5 + 3 * 2; // * avval (6), keyin + (11), keyin b = 11, keyin a = 11\nconsole.log(a, b); // 11 11\nconsole.log(2 ** 3 ** 2); // 2 ** 9 = 512 (o'ngdan chapga)\nconsole.log((2 ** 3) ** 2); // 8 ** 2 = 64 (qavs ustuvor)",
        "note": "Har doim noaniqlik bo‘lganda qavslardan () foydalaning. Bu nafaqat xatolardan asraydi, balki kodni o‘qishni ancha osonlashtiradi."
      },
      {
        "title": "7. Left-Hand-Side & Maxsus Operatorlar: delete, void, new.target",
        "text": "delete operatori obyekt xususiyatini o‘chiradi (oddiy o‘zgaruvchilarni o‘chira olmaydi). void operatori ifodani hisoblab, qaytaruvchi qiymatini bekor qiladi va har doim undefined qaytaradi. new.target esa funksiya new orqali konstruktor sifatida chaqirilganini yoki oddiy funksiya sifatida chaqirilganini aniqlaydi.",
        "code": "const foydalanuvchi = { ism: 'Ali', yosh: 25 };\ndelete foydalanuvchi.yosh;\nconsole.log(foydalanuvchi);\n\nfunction Mashina() {\n  if (!new.target) throw new Error(\"Mashina new bilan chaqirilishi kerak!\");\n}\nnew Mashina(); // ishlaydi",
        "note": "delete xususiyatni xotiradan tozalaydi, lekin massiv elementida delete ishlatilsa faqat 'empty' (bo'shliq) qoldiradi, massiv uzunligi (length) o‘zgarmaydi."
      }
    ],
    "takeaway": "Zamonaviy JS da ||= o‘rniga ??= ishlatish 0 va bo‘sh qator ('') kabi haqiqiy ma'lumotlarning yo‘qolib ketishidan himoya qiladi. Vergul operatori esa ifodalarni zanjirlashda oxirgi qiymatni qaytaradi.",
    "exercise": "Mantiqiy tayinlov va vergul operatori natijasini tahlil qiling.",
    "exerciseCode": "let val = null;\nval ??= \"boshlang'ich\";\nlet res = (val = \"yangi\", val.toUpperCase());\nconsole.log(res);",
    "exerciseExpected": [
      "YANGI"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. val null bo‘lgani uchun ??= unga 'boshlang'ich' yuklaydi.\n2. Vergul operatorida avval val = 'yangi' bajariladi, so‘ng oxirgi val.toUpperCase() natijasi res ga yoziladi.\n3. Natija 'YANGI' bo‘ladi.",
    "resources": [
      {
        "title": "MDN: Expressions and operators",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators"
      }
    ],
    "learningGuide": {
      "goal": "Mantiqiy tayinlovlar (&&=, ||=, ??=), vergul operatori va unary operatorlarning ishlash mexanizmini o‘rganish.",
      "prerequisites": [
        "operators",
        "coercion-equality",
        "conditionals"
      ],
      "terms": [
        {
          "term": "Logical Assignment",
          "meaning": "&&=, ||= va ??= operatorlari; shart bajarilsagina o‘zgaruvchiga yangi qiymat yozuvchi qisqa tutashuvchi operatorlar."
        },
        {
          "term": "Comma Operator (,)",
          "meaning": "Qavs ichida bir nechta ifodani ketma-ket bajarib, faqat eng oxirgisining natijasini qaytaruvchi operator."
        },
        {
          "term": "Unary Operator",
          "meaning": "Faqat bitta operand bilan ishlovchi operatorlar (+, -, !, ~, typeof, void)."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "let score = 0;\nscore = score || 100;\nconsole.log(score);",
        "fixedCode": "let score = 0;\nscore ??= 100;\nconsole.log(score);",
        "explanation": "O‘yinda yoki hisobda 0 haqiqiy ball hisoblanadi. || operatori 0 ni falsy deb bilib 100 ga o‘zgartirib yuboradi. ??= esa 0 ni saqlab qoladi.",
        "expectedOutput": [
          0
        ]
      },
      "write": {
        "task": "??= va ||= farqini ko‘rsatuvchi kod yozing.",
        "hint": "0 qiymatli o‘zgaruvchiga ??= va ||= qo‘llang.",
        "criteria": [
          "0 qiymatini kiritish",
          "??= operatori orqali tekshirish",
          "Natijani konsolga chiqarish"
        ]
      }
    }
  },
  {
    "id": "mdn-statements-declarations",
    "title": "MDN: Statement va Declaration Grammatik Farqi",
    "question": "Nega 'if (true) let x = 1;' SyntaxError beradi, var esa statement hisoblanadi va blok skopi qanday ishlaydi?",
    "explanation": "JavaScriptda Statement (harakat) va Declaration (nom bog‘lash) ikkita alohida grammatik toifadir. if yoki while tanasiga blocksiz yagona leksik deklaratsiya (let, const, class) yozish taqiqlangan.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Statement va Declaration Farqi",
        "text": "JavaScript dasturlari statement va declaration lardan tashkil topgan. Declaration identifikatorni qiymatga bog‘laydi (let, const, function, class). Statement esa amalni bajaradi. MDN qoidasiga ko‘ra: 'if' yoki 'for' ning tana qismi faqat statement qabul qiladi.",
        "code": "let a = 1; // declaration\na = a + 2; // expression statement\nif (a > 2) console.log(\"Katta\"); // statement",
        "note": "Qavssiz if dan keyin leksik declaration yozilsa SyntaxError yuz beradi."
      },
      {
        "title": "2. Nega 'if (true) let x = 1' SyntaxError?",
        "text": "Agar siz 'if (shart) let x = 1;' deb yozsangiz, dvigatel 'SyntaxError: Lexical declaration cannot appear in a single-statement context' xatosini beradi. Chunki blok ({}) bo‘lmagani uchun x o‘sha satrning o‘zidayoq yo‘qoladi va unga hech qachon yetib bo‘lmaydi. Yechim: uni blok ichiga olish: if (shart) { let x = 1; }.",
        "code": "// var esa statement bo'lgani uchun ishlaydi:\nif (true) var legal = \"Ruxsat\";\nconsole.log(legal);\n// let uchun esa blok shart:\nif (true) { let scoped = \"Blok\"; console.log(scoped); }",
        "note": "var ning statement bo‘lishi uning funksiya ko‘lamiga ega bo‘lishi va blokdan tashqariga chiqishi bilan bog‘liqdir."
      },
      {
        "title": "3. Labeled Statements va Bloklar",
        "text": "Label (belgi) faqat statementlarga ulanishi mumkin: 'label: const x = 1;' xato hisoblanadi. Agar leksik o‘zgaruvchini belgilamoqchi bo‘lsangiz, uni albatta blok ({}) ichiga o‘rashingiz kerak: 'label: { const x = 1; }'.",
        "code": "outerLoop: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 1) break outerLoop;\n    console.log(i, j);\n  }\n}",
        "note": "break label orqali ichki sikldan tashqi siklni ham to‘liq to‘xtatish mumkin."
      }
    ],
    "takeaway": "Declarations (let, const, class) faqat blok doirasida yashaydi va yagona satrli if/while tanasiga to‘g‘ridan-to‘g‘ri yozilishi taqiqlanadi. Har doim {} blokidan foydalanish toza va xatosiz kod garovidir.",
    "exercise": "Statement va blok ko‘lamining ishlashini tahlil qiling.",
    "exerciseCode": "let score = 50;\nif (score >= 50) {\n  const bonus = 10;\n  score += bonus;\n}\nconsole.log(score);\nconsole.log(typeof bonus);",
    "exerciseExpected": [
      60,
      "undefined"
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. score += bonus bajarilib score 60 ga yetadi.\n2. bonus blok doirasida e'lon qilingani uchun blokdan tashqarida mavjud emas (typeof 'undefined' beradi).",
    "resources": [
      {
        "title": "MDN: Statements and declarations",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements"
      }
    ],
    "learningGuide": {
      "goal": "Statement va Declaration grammatik farqi hamda blok ko‘lamlarini to‘g‘ri boshqarishni o‘rganish.",
      "prerequisites": [
        "expressions-statements",
        "var-let-const",
        "scope"
      ],
      "terms": [
        {
          "term": "Declaration",
          "meaning": "Nomni qiymatga bog‘lovchi grammatik konstruksiya (let, const, class, function)."
        },
        {
          "term": "Statement",
          "meaning": "Dasturda amalni bajaruvchi ko‘rsatma (if, while, return, break, var)."
        },
        {
          "term": "Single-statement context",
          "meaning": "if yoki while dan keyin blocksiz keladigan yagona buyruq joyi; bu yerda leksik deklaratsiyalar taqiqlanadi."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "let status;\nif (true) {\n  status = \"Bajarildi\";\n}\nconsole.log(status);\n// Xato tekshiruv",
        "fixedCode": "let status;\nif (true) {\n  const msg = \"Bajarildi\";\n  status = msg;\n}\nconsole.log(status);",
        "explanation": "Blok ichida e'lon qilingan const/let o‘zgaruvchisi tashqariga chiqmaydi, uning qiymatini tashqi o‘zgaruvchiga o‘zlashtirish xavfsizdir.",
        "expectedOutput": [
          "Bajarildi"
        ]
      },
      "write": {
        "task": "Blok statement orqali leksik ko‘lamni ajratish kodini yozing.",
        "hint": "{} blok qavslari va let/const dan foydalaning.",
        "criteria": [
          "Blok ochish",
          "Ichida let/const e'lon qilish",
          "Natijani tashqariga chiqarish"
        ]
      }
    }
  },
  {
    "id": "mdn-functions-deep",
    "title": "MDN: Funksiyalar Chuqur Tahlili va Non-Simple Parametrlar",
    "question": "Non-simple parametrlar bilan 'use strict' ziddiyati, Named Function Expression ko‘lami va new Function() global chegaralari qanday ishlaydi?",
    "explanation": "Funksiyada default (a = 1), rest yoki destructuring parametrlar bo‘lsa, tanasiga 'use strict' yozish taqiqlanadi. Named Function Expression nomi faqat ichki rekursiya uchun mavjud bo‘ladi, new Function() esa faqat global ko‘lamni ko‘radi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Non-Simple Parametrlar va 'use strict' Tuzog‘i",
        "text": "JavaScriptda agar funksiyada default parametr (a = 1), rest (...args) yoki destructuring ({ x }) bo‘lsa, uning tanasiga 'use strict' yozish qat'iyan taqiqlanadi va 'SyntaxError: Illegal use strict directive in function with non-simple parameter list' xatosini beradi. Chunki dvigatel parametrlarni o‘qiyotganda funksiya strict yoki yo‘qligini oldindan bilishi shart.",
        "code": "function calc(a = 1, b = 2) {\n  // 'use strict' yozilsa SyntaxError beradi!\n  return a + b;\n}\nconsole.log(calc());\nconsole.log(calc(10, 20));",
        "note": "Agar strict rejim kerak bo‘lsa, 'use strict' ni butun fayl yoki modul darajasida qo‘yish kerak."
      },
      {
        "title": "2. Named Function Expression (NFE) Ko‘lami",
        "text": "Funksiya ifodasiga nom berilganda (masalan, const fn = function worker() {}), worker nomi faqat funksiya ichida (rekursiya uchun) ko‘rinadi. Tashqi ko‘lamda esa u mavjud emas va ReferenceError beradi.",
        "code": "const run = function worker() {\n  return typeof worker;\n};\nconsole.log(run());\nconsole.log(typeof worker);",
        "note": "worker faqat o‘z ichida 'function' bo‘ladi, tashqarida esa undefined."
      },
      {
        "title": "3. new Function() va Global Ko‘lam",
        "text": "new Function('return secret;') konstruktori dinamik ravishda funksiya tuzadi. Lekin u HECH QACHON uni chaqirgan funksiyaning lokal closure ko‘lamiga kira olmaydi — u faqat global ko‘lamni ko‘radi.",
        "code": "globalThis.val = \"Global\";\nfunction test() {\n  const val = \"Lokal\";\n  const fn = new Function(\"return val;\");\n  return fn();\n}\nconsole.log(test());",
        "note": "Natija 'Global' bo‘ladi, chunki new Function lokal o‘zgaruvchilarni ko‘rmaydi."
      }
    ],
    "takeaway": "Funksiyalarda non-simple parametrlar bilan lokal 'use strict' yozib bo‘lmaydi. NFE nomi faqat ichki rekursiya uchun saqlanadi, new Function() esa lokal o‘zgaruvchilarni ko‘rmasdan faqat global ko‘lam bilan ishlaydi.",
    "exercise": "new Function va global ko‘lam bog‘lanishini tahlil qiling.",
    "exerciseCode": "globalThis.count = 99;\nfunction wrapper() {\n  const count = 5;\n  const f = new Function(\"return count;\");\n  return f();\n}\nconsole.log(wrapper());",
    "exerciseExpected": [
      99
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. wrapper ichida lokal count = 5 bor.\n2. Lekin new Function lokal closure yaratmaydi va faqat globalThis.count ni o‘qiydi.\n3. Natijada 99 chiqadi.",
    "resources": [
      {
        "title": "MDN: Functions",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
      }
    ],
    "learningGuide": {
      "goal": "Non-simple parametrlar, NFE rekursiv ko‘lami va new Function() ning xotira modelini o‘rganish.",
      "prerequisites": [
        "functions",
        "functions-as-values",
        "scope",
        "strict-mode-asi"
      ],
      "terms": [
        {
          "term": "Non-simple parameters",
          "meaning": "Default (a = 1), Rest (...args) yoki Destructuring ({ x }) parametrlariga ega ro‘yxat."
        },
        {
          "term": "Named Function Expression",
          "meaning": "O‘z nomiga ega bo‘lgan funksiya ifodasi; uning nomi faqat o‘z tanasi ichida ko‘rinadi."
        },
        {
          "term": "Pass by Sharing",
          "meaning": "Obyekt argument sifatida uzatilganda uning xususiyatlari mutatsiya qilinishi mumkin, lekin parametr qayta yuklansa tashqi havola o‘zgarmaydi."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const f = function helper() {\n  return 42;\n};\n// Xato: helper tashqarida mavjud emas\nconsole.log(typeof helper);",
        "fixedCode": "const f = function helper() {\n  return 42;\n};\nconsole.log(typeof f);",
        "explanation": "Named Function Expression nomi faqat o‘z tanasida rekursiya uchun mavjud bo‘ladi. Tashqarida uni chaqirish uchun f o‘zgaruvchisidan foydalaniladi.",
        "expectedOutput": [
          "function"
        ]
      },
      "write": {
        "task": "NFE funksiyasining ichki va tashqi ko‘rinishini tahlil qiling.",
        "hint": "const fn = function name() {} dan foydalaning.",
        "criteria": [
          "NFE e'lon qilish",
          "Ichida nom turini tekshirish",
          "Tashqaridan f ni chaqirish"
        ]
      }
    }
  },
  {
    "id": "mdn-web-workers-atomics",
    "title": "MDN: Web Workers, SharedArrayBuffer va Atomics",
    "question": "Web Workers qanday qilib UI ni muzlashdan saqlaydi, postMessage va Atomics bilan poygasiz xotira almashish qanday ishlaydi?",
    "explanation": "JavaScript asosiy oqimda (Main Thread) bitta oqimli bo‘lgani uchun og‘ir vazifalar Web Worker yordamida fonga o‘tkaziladi. Oqimlararo ma'lumot postMessage (nusxa) yoki SharedArrayBuffer va Atomics (poygasiz umumiy xotira) orqali boshqariladi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Web Worker va UI ni Muzlashdan Himoyalash",
        "text": "Asosiy oqimda og‘ir hisob-kitoblar bajarilsa, foydalanuvchi interfeysi (UI) qotib qoladi. Web Worker esa alohida fon oqimida ishlaydi va asosiy oqimni to‘xtatib qo‘ymaydi. Worker ichida window yoki document kabi DOM obyektlariga to‘g‘ridan-to‘g‘ri kirish cheklangan.",
        "code": "console.log(\"Asosiy oqim o‘z ishini davom ettiradi\");\n// Fon oqimi Worker da ishlaydi",
        "note": "Workerlar yordamida rasm/video filtrlash, katta fayllarni tahlil qilish va murakkab matematik hisob-kitoblar qilinadi."
      },
      {
        "title": "2. postMessage va Ma'lumot Uzatish",
        "text": "Worker va asosiy oqim o‘rtasida xabarlar postMessage orqali uzatiladi. Bunda qiymatlar Structured Clone algoritmi orqali chuqur nusxalanadi. Agar Transferable obyektlar (ArrayBuffer) ishlatilsa, xotira nusxalanmasdan bevosita boshqa oqimga o‘tkaziladi (zero-copy).",
        "code": "const buf = new ArrayBuffer(16);\nconsole.log(buf.byteLength);",
        "note": "Transferable qilingan bufer yuboruvchi oqimda nolga (detached) aylanadi."
      },
      {
        "title": "3. SharedArrayBuffer va Atomics",
        "text": "SharedArrayBuffer orqali bir nechta oqimlar bir xil xotira maydonidan foydalanishi mumkin. Poyga holati (race condition) ning oldini olish uchun Atomics obyekti (Atomics.store, Atomics.load, Atomics.add) orqali bo‘linmas atomar amallar bajariladi.",
        "code": "const sab = new SharedArrayBuffer(4);\nconst i32 = new Int32Array(sab);\nAtomics.store(i32, 0, 10);\nAtomics.add(i32, 0, 5);\nconsole.log(Atomics.load(i32, 0));",
        "note": "Atomics barcha oqimlarning bir vaqtda to‘qnash kelishini xavfsiz tartibga soladi."
      }
    ],
    "takeaway": "Web Workers og‘ir operatsiyalarni asosiy oqimdan ajratadi. postMessage xavfsiz nusxa bilan ishlaydi, SharedArrayBuffer va Atomics esa yuqori tezlikdagi oqimlararo umumiy xotirani poygasiz boshqarish imkonini beradi.",
    "exercise": "SharedArrayBuffer va Atomics amallarini tahlil qiling.",
    "exerciseCode": "const sab = new SharedArrayBuffer(4);\nconst arr = new Int32Array(sab);\nAtomics.store(arr, 0, 100);\nAtomics.sub(arr, 0, 30);\nconsole.log(Atomics.load(arr, 0));",
    "exerciseExpected": [
      70
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. Atomics.store orqali arr[0] ga 100 yoziladi.\n2. Atomics.sub atomar tarzda 30 ni ayirib tashlaydi.\n3. Atomics.load natijasi 70 bo‘ladi.",
    "resources": [
      {
        "title": "MDN: Web Workers API",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
      }
    ],
    "learningGuide": {
      "goal": "Web Workers, SharedArrayBuffer va Atomics orqali ko‘p oqimli hisob-kitoblarni o‘rganish.",
      "prerequisites": [
        "async-timers",
        "mdn-typed-arrays",
        "event-loop"
      ],
      "terms": [
        {
          "term": "Web Worker",
          "meaning": "Alohida fon oqimida kod bajaruvchi brauzer skripti."
        },
        {
          "term": "Atomics",
          "meaning": "Umumiy xotirada poyga (race condition) oldini oluvchi atomar operatsiyalar."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const sab = new SharedArrayBuffer(4);\nconst arr = new Int32Array(sab);\narr[0] = 50;\nconsole.log(arr[0]);",
        "fixedCode": "const sab = new SharedArrayBuffer(4);\nconst arr = new Int32Array(sab);\nAtomics.store(arr, 0, 50);\nconsole.log(Atomics.load(arr, 0));",
        "explanation": "SharedArrayBuffer bilan ishlaganda race condition larning oldini olish uchun oddiy indeks o‘rniga Atomics.store va Atomics.load ishlatish xavfsiz hisoblanadi.",
        "expectedOutput": [
          50
        ]
      },
      "write": {
        "task": "SharedArrayBuffer ustida atomar amal bajaring.",
        "hint": "Atomics.store va Atomics.add dan foydalaning.",
        "criteria": [
          "SharedArrayBuffer yaratish",
          "Int32Array ulash",
          "Atomics orqali qiymatni o‘qish"
        ]
      }
    }
  },
  {
    "id": "mdn-structured-clone",
    "title": "MDN: Chuqur Klonlash va structuredClone Cheklovlari",
    "question": "Sayoz nusxa ({ ...obj }) va structuredClone() farqi nimada, nega funksiyalar va DOM elementlarida DataCloneError yuz beradi?",
    "explanation": "Sayoz nusxa ({ ...obj }) ichki obyektlarni umumiy havolada qoldiradi, JSON klonlash esa Date, Set, Map va aylanma havolalarni buzadi. structuredClone() murakkab turlar va aylanma havolalarni mukammal nusxalaydi, lekin Funksiyalar va DOM elementlarini nusxalash taqiqlangan.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. Sayoz Nusxa vs JSON Klonlash Tuzoqlari",
        "text": "{ ...obj } faqat birinchi darajani nusxalaydi, ichki obyektlar esa umumiy manzilga qarab qolaveradi. JSON.parse(JSON.stringify(obj)) esa Date ni stringga aylantiradi, undefined va NaN ni yo‘qotadi, aylanma havolalarda (circular reference) esa TypeError tashlaydi.",
        "code": "const orig = { d: new Date(), s: new Set([1, 2]) };\nconst jsonCopy = JSON.parse(JSON.stringify(orig));\nconsole.log(typeof jsonCopy.d);\nconsole.log(jsonCopy.s);",
        "note": "JSON klonlash Set ni bo‘sh {} obyektga, Date ni esa oddiy stringga aylantirib yuboradi."
      },
      {
        "title": "2. structuredClone() Imkoniyatlari",
        "text": "Rasmiy structuredClone() funksiyasi Date, Map, Set, ArrayBuffer va aylanma havolalarni (circular refs) buzmasdan to‘liq va xavfsiz deep copy qiladi.",
        "code": "const circular = { name: \"Aylanma\" };\ncircular.self = circular;\nconst clone = structuredClone(circular);\nconsole.log(clone.name);\nconsole.log(clone.self === clone);",
        "note": "clone.self === clone true bo‘ladi, lekin u original dan mustaqil yangi xotira manzilida joylashadi."
      },
      {
        "title": "3. structuredClone Cheklovlari (DataCloneError)",
        "text": "structuredClone() hamma narsani ham klonlay olmaydi. Unda 3 ta qat'iy cheklov bor: 1) Funksiyalar klonlanmaydi (DataCloneError tashlaydi), 2) DOM elementlari klonlanmaydi, 3) Prototip zanjiri saqlanmaydi (nusxa doimo oddiy Object.prototype ga aylanadi).",
        "code": "try {\n  structuredClone({ fn: () => {} });\n} catch (e) {\n  console.log(e.name);\n}",
        "note": "Funksiyalar va DOM tugunlari xavfsizlik va yopiq ko‘lam sababli structuredClone orqali uzatilishi taqiqlangan."
      }
    ],
    "takeaway": "Sayoz nusxalar ({ ...obj }) ichki obyektlarni o‘zgartirib qo‘yish xavfini tug‘diradi. structuredClone() murakkab turlar va aylanma havolalarni to‘g‘ri chuqur nusxalashning rasmiy vositasidir, ammo funksiyalar va DOM elementlarini nusxalay olmasligini yodda tutish kerak.",
    "exercise": "structuredClone orqali mustaqil chuqur nusxa yaratishni tahlil qiling.",
    "exerciseCode": "const data = { nested: { count: 10 } };\nconst copy = structuredClone(data);\ncopy.nested.count = 20;\nconsole.log(data.nested.count);\nconsole.log(copy.nested.count);",
    "exerciseExpected": [
      10,
      20
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. structuredClone nested obyekt uchun ham yangi xotira ajratadi.\n2. copy.nested.count o‘zgarganda original dagi count 10 ligicha qoladi.\n3. Natijada 10 va 20 chiqadi.",
    "resources": [
      {
        "title": "MDN: structuredClone()",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone"
      }
    ],
    "learningGuide": {
      "goal": "structuredClone() orqali to‘liq deep copy qilish va DataCloneError cheklovlarini o‘rganish.",
      "prerequisites": [
        "object-reference",
        "destructuring-spread",
        "json-basics"
      ],
      "terms": [
        {
          "term": "Deep Copy",
          "meaning": "Barcha ichki qavatlari bilan birga to‘liq mustaqil nusxa yaratish."
        },
        {
          "term": "DataCloneError",
          "meaning": "Funksiya yoki DOM elementini structuredClone qilishda otiladigan xato."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "const obj = { run() { return 1; } };\n// Xato: Funksiyani structuredClone qilib bo'lmaydi\nconst copy = Object.assign({}, obj);\nconsole.log(typeof copy.run);",
        "fixedCode": "const obj = { run() { return 1; } };\nconst copy = { ...obj };\nconsole.log(typeof copy.run);",
        "explanation": "Funksiyali obyektlarni structuredClone() qilib bo‘lmaydi (DataCloneError). Agar funksiya havolasi kerak bo‘lsa, sayoz nusxa ({ ...obj }) ishlatiladi.",
        "expectedOutput": [
          "function"
        ]
      },
      "write": {
        "task": "structuredClone yordamida mustaqil nusxa yarating.",
        "hint": "structuredClone({ a: { b: 1 } }) dan foydalaning.",
        "criteria": [
          "Asl obyekt tuzish",
          "structuredClone orqali nusxa olish",
          "Ichki qiymatni o‘zgartirish"
        ]
      }
    }
  },
  {
    "id": "mdn-equality-sameness",
    "title": "MDN: Equality Comparisons and Sameness (==, ===, Object.is)",
    "question": "JavaScriptda ==, ===, Object.is() va SameValueZero taqqoslash algoritmlari bir-biridan qanday farq qiladi?",
    "explanation": "JavaScriptda qiymatlarni solishtirish uchun 4 ta asosiy tenglik algoritmi mavjud: 1) IsLooselyEqual (==) — turlarni avtomatik o‘zgartiradi; 2) IsStrictlyEqual (===) — turlarni o‘zgartirmaydi, lekin NaN !== NaN va +0 === -0; 3) SameValue (Object.is) — to‘liq aniqlik: NaN bilan NaN teng, +0 va -0 esa farqli; 4) SameValueZero (includes, Set, Map) — NaN bilan NaN teng, lekin +0 va -0 ham bir xil deb hisoblanadi.",
    "fullTextDefault": true,
    "coreInterviewPillar": true,
    "mdnAdvanced": true,
    "sections": [
      {
        "title": "1. IsLooselyEqual (==) — Bo‘sh Tenglik va Coercion",
        "text": "== operatori ikki operand har xil turda bo‘lsa, ularni maxsus qoidalar bo‘yicha yagona turga (odatda songa yoki primitive ga) o‘tkazib taqqoslaydi. null va undefined faqat o‘zaro teng (null == undefined → true), lekin 0 yoki false ga teng emas. Massivlar esa avval string ga, keyin songa aylanadi ([] == false → '' == 0 → 0 == 0 → true).",
        "code": "console.log(5 == \"5\");       // true (string -> son)\nconsole.log(false == 0);     // true (boolean -> 0)\nconsole.log(null == undefined); // true (maxsus qoida)\nconsole.log([] == 0);        // true ([] -> '' -> 0)",
        "note": "== kutilmagan coercion lari tufayli zamonaviy JavaScriptda (faqat x == null holatidan tashqari) deyarli ishlatilmaydi."
      },
      {
        "title": "2. IsStrictlyEqual (===) — Qat’iy Tenglik",
        "text": "=== operatori turlarni hech qachon avtomatik o‘zgartirmaydi. Agar turlar har xil bo‘lsa, darhol false qaytaradi. Biroq IEEE 754 suzuvchi vergulli sonlar standarti tufayli ikkita o‘ziga xos chegaraviy holati mavjud: 1) NaN hech qachon hech narsaga, hatto o‘ziga ham teng emas (NaN === NaN → false); 2) Musbat nol (+0) va manfiy nol (-0) o‘zaro teng hisoblanadi (+0 === -0 → true).",
        "code": "console.log(5 === \"5\");     // false (turlar farqli)\nconsole.log(NaN === NaN);   // false (IEEE 754 standarti)\nconsole.log(+0 === -0);     // true",
        "note": "Obyekt va massivlar uchun === ularning xotiradagi havolasi (reference) bir xil ekanini tekshiradi, ichki tarkibini emas."
      },
      {
        "title": "3. SameValue: Object.is() — To‘liq Bir Xillik",
        "text": "ES2015 (ES6) da qo‘shilgan Object.is(a, b) metodi SameValue algoritmini amalga oshiradi. U === dagi ikkita istisnoni tuzatadi: NaN ni o‘z-o‘ziga teng deb hisoblaydi (Object.is(NaN, NaN) === true) va +0 bilan -0 ni ikkita turli son deb ajratadi (Object.is(+0, -0) === false). React kutubxonasi useState va useMemo hooklarida o‘zgarishlarni aniqlash (shallow equality) uchun aynan Object.is algoritmidan foydalanadi.",
        "code": "console.log(Object.is(NaN, NaN)); // true\nconsole.log(Object.is(+0, -0));   // false\nconsole.log(Object.is(5, 5));     // true\nconsole.log(Object.is({}, {}));   // false (turli referenslar)",
        "note": "+0 va -0 amalda 1 / +0 === Infinity va 1 / -0 === -Infinity orqali matematik farqlanadi."
      },
      {
        "title": "4. SameValueZero — Set, Map va includes() Qoidasi",
        "text": "JavaScript kolleksiyalari (Set, Map, Array.prototype.includes) uchun to‘rtinchi algoritm — SameValueZero qo‘llaniladi. U Object.is kabi NaN ni o‘ziga teng deb biladi ([NaN].includes(NaN) === true), lekin +0 va -0 ni bir xil deb hisoblaydi. Shuning uchun Set ga +0 va -0 solinsa, ikkinchisi qabul qilinmaydi va o‘lcham 1 bo‘ladi.",
        "code": "console.log([NaN].includes(NaN)); // true\nconst s = new Set([+0, -0]);\nconsole.log(s.size); // 1\nconst m = new Map();\nm.set(NaN, 'son emas');\nconsole.log(m.get(NaN)); // 'son emas'",
        "note": "Agar [NaN].indexOf(NaN) qilsangiz, u === ishlatgani sababli -1 qaytaradi! Shu sababli yangi includes() SameValueZero bilan ancha qulay."
      }
    ],
    "takeaway": "== turlarni o‘zgartiradi; === turlarni saqlaydi (lekin NaN !== NaN, +0 === -0); Object.is to‘liq matematik aniqlik beradi (NaN === NaN, +0 !== -0); SameValueZero (includes, Set, Map) esa NaN ni teng, +0/-0 ni ham teng deb hisoblaydi.",
    "exercise": "==, ===, Object.is va includes() farqlarini hisoblang.",
    "exerciseCode": "console.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));\nconsole.log(+0 === -0);\nconsole.log(Object.is(+0, -0));\nconsole.log([NaN].includes(NaN));",
    "exerciseExpected": [
      false,
      true,
      true,
      false,
      true
    ],
    "exerciseRuntime": "node",
    "exerciseAnswer": "Loyihani yechish yo‘li:\n1. NaN === NaN har doim false.\n2. Object.is(NaN, NaN) true qaytaradi.\n3. +0 === -0 true.\n4. Object.is(+0, -0) ishoralarni ajratgani uchun false.\n5. Array.prototype.includes SameValueZero ishlatgani sababli NaN ni topadi (true).",
    "resources": [
      {
        "title": "MDN: Equality comparisons and sameness",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness"
      },
      {
        "title": "MDN: Object.is()",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"
      }
    ],
    "learningGuide": {
      "goal": "JavaScriptdagi 4 ta tenglik algoritmi (==, ===, Object.is, SameValueZero) qoidalarini to‘liq o‘rganish.",
      "prerequisites": [
        "coercion-equality",
        "operators",
        "data-types"
      ],
      "terms": [
        {
          "term": "SameValue",
          "meaning": "Object.is() algoritmi: NaN === NaN deb hisoblaydi va +0 bilan -0 ni farqlaydi."
        },
        {
          "term": "SameValueZero",
          "meaning": "includes(), Set va Map algoritmi: NaN === NaN, lekin +0 === -0 deb hisoblaydi."
        },
        {
          "term": "IsStrictlyEqual",
          "meaning": "=== operatori algoritmi: turlarni o‘zgartirmaydi, lekin NaN !== NaN va +0 === -0."
        }
      ]
    },
    "learningPractice": {
      "debug": {
        "brokenCode": "function solishtir(a, b) {\n  return a === b;\n}\nconsole.log(solishtir(NaN, NaN));",
        "fixedCode": "function solishtir(a, b) {\n  return Object.is(a, b);\n}\nconsole.log(solishtir(NaN, NaN));",
        "explanation": "=== operatori NaN ni o‘ziga teng emas deb biladi. Qiymatlarning ayni bir xilligini tekshirish uchun Object.is() ishlatiladi.",
        "expectedOutput": [
          true
        ]
      },
      "write": {
        "task": "Object.is ni o‘zingiz polyfill qilib yozing (=== orqali).",
        "hint": "NaN ni aniqlash uchun x !== x, -0 ni aniqlash uchun 1 / x === -Infinity tekshiring.",
        "criteria": [
          "NaN holatini tekshirish",
          "-0 va +0 holatini tekshirish",
          "Oddiy qiymatlarda === ga tayanish"
        ]
      }
    }
  }
];

window.interviewQuestions = [
  {
    "id": "q-mdn-equality-sameness",
    "lessonId": "mdn-equality-sameness",
    "topic": "MDN Equality and Sameness",
    "level": "qiyin",
    "question": "Quyidagi taqqoslashlarning qaysilari true qaytaradi?\n1. Object.is(NaN, NaN)\n2. NaN === NaN\n3. Object.is(+0, -0)\n4. [+0].includes(-0)",
    "options": [
      "1 va 4",
      "Faqat 1",
      "1, 2 va 4",
      "1, 3 va 4"
    ],
    "answer": 0,
    "explain": "1. Object.is(NaN, NaN) true (SameValue algoritmi). 2. NaN === NaN false (IEEE 754). 3. Object.is(+0, -0) false (ishoralar farqlanadi). 4. Array.prototype.includes SameValueZero ishlatadi, unda +0 va -0 teng deb hisoblanadi → true.",
    "walkthrough": [
      "Object.is SameValue algoritmi bo'yicha NaN ni o'ziga teng deb biladi (1 - true).",
      "=== NaN ni hech qachon o'ziga teng deb bilmaydi (2 - false).",
      "Object.is +0 va -0 ni alohida son deb ajratadi (3 - false).",
      "includes() SameValueZero ishlatadi, unda +0 va -0 teng (4 - true).",
      "To'g'ri javob: 1 va 4."
    ]
  },
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
  },
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
  },
  {
    "id": "core-expressions-statements",
    "lessonId": "expressions-statements",
    "topic": "Expression va statement: kod qiymati va amali",
    "level": "Asosiy",
    "question": "Ikki log natijasi nima?",
    "code": "const a = () => ({ n: 2 });\nconst b = () => { n: 2 };\nconsole.log(a().n);\nconsole.log(b());",
    "options": [
      "2, undefined",
      "2, 2",
      "undefined, 2",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "a obyekt ifodasini qaytaradi; b blokida return yo‘q.",
    "walkthrough": [
      "1. 2 — qavs ichidagi obyekt qaytarildi, uning n maydoni o‘qildi.",
      "2. undefined — b tanasida n: belgilangan statement bor; bu qaytarilgan obyekt emas. return yozilmagan."
    ]
  },
  {
    "id": "core-execution-context-stack",
    "lessonId": "execution-context-stack",
    "topic": "Execution context va call stack: kod qayerga qaytadi?",
    "level": "Asosiy",
    "question": "b(4) qanday natija beradi?",
    "code": "function a(n) { return n + 1; }\nfunction b(n) { return a(n) * 2; }\nconsole.log(b(4));",
    "options": [
      "5",
      "8",
      "10",
      "undefined"
    ],
    "answer": 2,
    "explain": "a(4) → 5, b ichidagi 5 * 2 → 10.",
    "walkthrough": [
      "1. 10 — b(4) a(4) ni kutadi; a 5 qaytaradi, b uni 2 ga ko‘paytirib 10 qaytaradi. Keyin log ishlaydi."
    ]
  },
  {
    "id": "core-lexical-environment",
    "lessonId": "lexical-environment",
    "topic": "Lexical environment: qaysi o‘zgaruvchi o‘qiladi?",
    "level": "Asosiy",
    "question": "ish() chaqirilganda qaysi n olinadi?",
    "code": "let n = 1;\nconst ol = () => n;\nfunction ish() { const n = 9; return ol(); }\nn = 2;\nconsole.log(ish());",
    "options": [
      "1",
      "2",
      "9",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "ol tashqi binding bilan bog‘langan; u 2 ga yangilangan.",
    "walkthrough": [
      "1. 2 — ol tashqi n binding ini ko‘radi. U 2 ga yangilangan; ish ichidagi 9 ol ning tashqi muhiti emas."
    ]
  },
  {
    "id": "core-evaluation-order",
    "lessonId": "evaluation-order",
    "topic": "Ifodaning bajarilish tartibi va short-circuit",
    "level": "Asosiy",
    "question": "a, b, c, n qiymatlari nima?",
    "code": "let n = 0;\nconst a = 0 && ++n;\nconst b = 0 ?? ++n;\nconst c = 0 || ++n;\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(n);",
    "options": [
      "0, 0, 1, 1",
      "false, 1, 2, 2",
      "0, 1, 2, 2",
      "0, 0, 0, 0"
    ],
    "answer": 0,
    "explain": "&& va ?? o‘ngni tashladi; || ++n ni bajardi.",
    "walkthrough": [
      "1. 0 — && o‘ngini bajarmadi.",
      "2. 0 — ?? chap 0 ni saqladi, o‘ng bajarilmadi.",
      "3. 1 — || uchun 0 falsy, ++n ishladi.",
      "4. 1 — n faqat bir marta oshdi."
    ]
  },
  {
    "id": "core-functions-as-values",
    "lessonId": "functions-as-values",
    "topic": "Funksiya qiymat sifatida: fn, fn() va return fn()",
    "level": "Asosiy",
    "question": "Uch log natijasi nima?",
    "code": "function ol() { return 5; }\nfunction a() { return ol; }\nfunction b() { return ol(); }\nconsole.log(typeof a());\nconsole.log(a()());\nconsole.log(b());",
    "options": [
      "function, 5, 5",
      "5, 5, 5",
      "function, function, 5",
      "TypeError"
    ],
    "answer": 0,
    "explain": "a funksiyani, b uning natijasini qaytaradi; a()() ikki chaqirishdir.",
    "walkthrough": [
      "1. \"function\" — a ol funksiyasini qaytardi.",
      "2. 5 — birinchi () a ni, ikkinchisi qaytgan ol ni chaqirdi.",
      "3. 5 — b ichida ol hozir chaqirilib, uning natijasi qaytarildi."
    ]
  },
  {
    "id": "core-strict-mode-asi",
    "lessonId": "strict-mode-asi",
    "topic": "Strict mode va ASI: yashirin xatolarni tushunish",
    "level": "Asosiy",
    "question": "a va b natijalari nima?",
    "code": "function a() { return\n  2;\n}\nfunction b() { return 2; }\nconsole.log(a());\nconsole.log(b());",
    "options": [
      "2, 2",
      "undefined, 2",
      "SyntaxError",
      "null, 2"
    ],
    "answer": 1,
    "explain": "ASI return va yangi qator orasida qiymatsiz qaytishga olib keldi.",
    "walkthrough": [
      "1. undefined — a dagi return yangi qator bilan qiymatsiz tugadi.",
      "2. 2 — b qiymatni return bilan bir satrda boshladi."
    ]
  },
  {
    "id": "core-object-to-primitive",
    "lessonId": "object-to-primitive",
    "topic": "Obyekt qanday primitive qiymatga aylanadi?",
    "level": "Asosiy",
    "question": "Uch log natijasi nima?",
    "code": "const o = { valueOf() { return \"4\"; } };\nconsole.log(o + 1);\nconsole.log(Number(o) + 1);\nconsole.log(o === 4);",
    "options": [
      "5, 5, true",
      "41, 5, false",
      "41, 41, false",
      "TypeError"
    ],
    "answer": 1,
    "explain": "String primitive + da birlashadi; Number aniq aylantiradi; === obyekt bilan sonni teng demaydi.",
    "walkthrough": [
      "1. \"41\" — primitive \"4\" string bo‘lgani uchun + birlashtirdi.",
      "2. 5 — Number string \"4\" ni songa aylantirdi, so‘ng 1 qo‘shildi.",
      "3. false — === tur o‘zgartirmaydi, obyekt son emas."
    ]
  },
  {
    "id": "core-debugger-code-reading",
    "lessonId": "debugger-code-reading",
    "topic": "Debugger: JavaScript kodini amalda kuzatish",
    "level": "Asosiy",
    "question": "Debugger da kirish turini tekshirsangiz nima topasiz?",
    "code": "function oshir(n) { return n + 1; }\nconst kirish = \"2\";\nconst javob = oshir(kirish);\nconsole.log(typeof kirish);\nconsole.log(javob);",
    "options": [
      "number; javob 3",
      "string; javob 21 matni",
      "string; javob 3",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "\"2\" string bo‘lgani sabab + birlashtirdi; debugger kirish turini tekshirishga yordam beradi.",
    "walkthrough": [
      "1. \"string\" — kirish qo‘shtirnoqda berilgan.",
      "2. \"21\" — oshir ichidagi + stringni birlashtirdi. Step Into bilan n qiymati va turini tekshirib buni ko‘rish mumkin."
    ]
  },
  {
    "id": "q-numbers-math",
    "lessonId": "numbers-math",
    "topic": "Sonlar va Math: noldan",
    "level": "o‘rta",
    "question": "Ushbu ikki ifoda qanday natija beradi?",
    "code": "console.log(0.1 + 0.2 === 0.3);\nconsole.log(Math.max());",
    "options": [
      "false va -Infinity",
      "true va 0",
      "false va Infinity",
      "false va NaN"
    ],
    "answer": 0,
    "explain": "0.1 + 0.2 ikkilik suzuvchi nuqta (IEEE 754) sababli 0.30000000000000004 bo‘ladi, shuning uchun false. Math.max() argument berilmasa -Infinity qaytaradi (taqqoslashning neytral elementi).",
    "walkthrough": [
      "0.1 + 0.2 hisoblanadi → 0.30000000000000004.",
      "0.30000000000000004 === 0.3 taqqoslanadi → false.",
      "Math.max() argumentsiz chaqiriladi → -Infinity qaytadi.",
      "Natija: false va -Infinity."
    ]
  },
  {
    "id": "q-strings",
    "lessonId": "strings",
    "topic": "Stringlar: noldan",
    "level": "o‘rta",
    "question": "Ushbu kod konsolga nima chiqaradi?",
    "code": "const str = 'salom';\nstr[0] = 'S';\nstr.length = 2;\nconsole.log(str);",
    "options": [
      "'Salom'",
      "'sa'",
      "'salom'",
      "TypeError"
    ],
    "answer": 2,
    "explain": "JavaScriptda String primitiv bo‘lib, o‘zgarmasdir (immutable). Indeks orqali belgi almashtirish yoki length xususiyatiga yozish xato bermaydi (strict mode bo‘lmasa), lekin hech qanday ta'sir qilmaydi.",
    "walkthrough": [
      "str ga 'salom' satri biriktiriladi.",
      "str[0] = 'S' bajariladi, lekin primitivlar immutable bo‘lgani uchun e'tiborga olinmaydi.",
      "str.length = 2 bajariladi, string length ni o‘zgartirib bo‘lmaydi.",
      "console.log(str) asl o‘zgarmagan 'salom' ni chiqaradi."
    ]
  },
  {
    "id": "q-operators",
    "lessonId": "operators",
    "topic": "Operatorlar: noldan",
    "level": "qiyin",
    "question": "Ushbu kod bajarilgach b ning qiymati necha bo‘ladi?",
    "code": "let a = 1;\nlet b = a++ + ++a * a--;\nconsole.log(b);",
    "options": [
      "10",
      "8",
      "7",
      "11"
    ],
    "answer": 0,
    "explain": "Operatorlar ustunligida ko‘paytirish (*) qo‘shishdan (+) oldin bajariladi, lekin operandlar chapdan o‘ngga hisoblanadi. a++ 1 qaytaradi (a=2 bo‘ladi). Keyin ++a 3 qaytaradi (a=3 bo‘ladi). Keyin a-- 3 qaytaradi (a=2 bo‘ladi). 1 + (3 * 3) = 1 + 9 = 10.",
    "walkthrough": [
      "a = 1 bilan boshlanadi.",
      "a++ ifodasi 1 ni qaytaradi, a xotirada 2 bo‘ladi.",
      "++a a ni 3 ga oshiradi va 3 ni qaytaradi.",
      "a-- hozirgi 3 ni qaytaradi, a xotirada 2 bo‘ladi.",
      "Ko‘paytirish: 3 * 3 = 9. Qo‘shish: 1 + 9 = 10. Natija b = 10."
    ]
  },
  {
    "id": "q-conditionals",
    "lessonId": "conditionals",
    "topic": "Shart operatorlari: if, else, switch",
    "level": "o‘rta",
    "question": "Ushbu switch ifodasi qaysi harfni chiqaradi?",
    "code": "const val = '0';\nswitch (val) {\n  case 0: console.log('A'); break;\n  case false: console.log('B'); break;\n  case '0': console.log('C'); break;\n  default: console.log('D');\n}",
    "options": [
      "'A'",
      "'B'",
      "'C'",
      "'D'"
    ],
    "answer": 2,
    "explain": "switch operatori qiymatlarni qat'iy tenglik (===) bilan tekshiradi. '0' === 0 bu false, '0' === false bu false, faqat '0' === '0' true beradi va 'C' chiqadi.",
    "walkthrough": [
      "val = '0' (string turi).",
      "case 0: '0' === 0 tekshiriladi → false (tur har xil).",
      "case false: '0' === false tekshiriladi → false.",
      "case '0': '0' === '0' tekshiriladi → true, 'C' konsolga chiqadi va break bilan to‘xtaydi."
    ]
  },
  {
    "id": "q-loops",
    "lessonId": "loops",
    "topic": "Tsikllar: for, while, for...of, for...in",
    "level": "qiyin",
    "question": "Ushbu kod r1 va r2 massivlari uzunligi sifatida nimani chiqaradi?",
    "code": "const arr = [10, 20];\narr.nom = 'test';\nconst r1 = [];\nfor (const x of arr) r1.push(x);\nconst r2 = [];\nfor (const x in arr) r2.push(x);\nconsole.log(r1.length, r2.length);",
    "options": [
      "2 va 2",
      "2 va 3",
      "3 va 2",
      "3 va 3"
    ],
    "answer": 1,
    "explain": "for...of faqat massivning raqamli elementlari ustida aylanadi (uzunligi 2). for...in esa obyektning barcha sanaladigan (enumerable) kalitlari, jumladan 'nom' xususiyatini ham aylanadi ('0', '1', 'nom' — uzunligi 3).",
    "walkthrough": [
      "arr massiviga 'nom' maxsus xususiyati qo‘shildi.",
      "for...of iteratori faqat 10 va 20 qiymatlarini oladi → r1.length = 2.",
      "for...in barcha enumerable kalitlarni ('0', '1', 'nom') oladi → r2.length = 3.",
      "Natija: 2 va 3."
    ]
  },
  {
    "id": "q-objects-basics",
    "lessonId": "objects-basics",
    "topic": "Obyektlar: noldan",
    "level": "o‘rta",
    "question": "Ushbu kod konsolda nima chiqaradi?",
    "code": "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\na[b] = 123;\na[c] = 456;\nconsole.log(a[b]);",
    "options": [
      "123",
      "456",
      "undefined",
      "TypeError"
    ],
    "answer": 1,
    "explain": "Obyekt kalitlari stringga aylantiriladi. b va c obyekti stringga o‘tganda ikkalasi ham '[object Object]' bo‘ladi. a[c] amali a['[object Object]'] ni 456 qilib qayta yozadi.",
    "walkthrough": [
      "a[b] = 123 bajarilganda b stringga aylanadi: a['[object Object]'] = 123.",
      "a[c] = 456 bajarilganda c stringga aylanadi: a['[object Object]'] = 456 (ustiga yozildi).",
      "a[b] so‘ralganda a['[object Object]'] o‘qiladi va 456 qaytadi."
    ]
  },
  {
    "id": "q-arrays-basics",
    "lessonId": "arrays-basics",
    "topic": "Massivlar: noldan",
    "level": "o‘rta",
    "question": "Ushbu kod konsolda nima chiqaradi?",
    "code": "const sonlar = [1, 2, 3, 4, 5];\nsonlar.length = 2;\nsonlar.length = 4;\nconsole.log(sonlar[0], sonlar[2]);",
    "options": [
      "1 va undefined",
      "1 va 3",
      "1 va 0",
      "undefined va undefined"
    ],
    "answer": 0,
    "explain": "sonlar.length = 2 qilinganda massiv qisqartirilib, 3-5 elementlar xotiradan qaytarib bo‘lmaydigan qilib o‘chiriladi. Qayta length = 4 qilinganda esa yangi bo‘sh slotlar (empty slots) ochiladi, ularning qiymati undefined bo‘ladi.",
    "walkthrough": [
      "[1, 2, 3, 4, 5] ning length = 2 qilinadi → [1, 2]. 3, 4, 5 butunlay o‘chdi.",
      "length = 4 qilinadi → [1, 2, <2 empty items>].",
      "sonlar[0] 1 bo‘ladi, sonlar[2] esa bo‘sh slot bo‘lgani uchun undefined qaytaradi."
    ]
  },
  {
    "id": "q-json-basics",
    "lessonId": "json-basics",
    "topic": "JSON: noldan",
    "level": "qiyin",
    "question": "Ushbu kodda JSON.stringify natijasi qanday bo‘ladi?",
    "code": "const obj = {\n  a: undefined,\n  b: () => {},\n  c: Symbol('c'),\n  d: NaN\n};\nconsole.log(JSON.stringify(obj));",
    "options": [
      "'{\"d\":null}'",
      "'{\"a\":null,\"d\":null}'",
      "'{}'",
      "TypeError"
    ],
    "answer": 0,
    "explain": "JSON.stringify obyekt ichidagi undefined, funksiya va Symbol xususiyatlarini tashlab ketadi (inkor qiladi). NaN va Infinity esa null ga aylanadi. Shuning uchun faqat {\"d\":null} qoladi.",
    "walkthrough": [
      "a: undefined tashlab ketiladi.",
      "b: () => {} (funksiya) tashlab ketiladi.",
      "c: Symbol('c') tashlab ketiladi.",
      "d: NaN JSON standartida yo‘qligi sababli null ga aylanadi.",
      "Yakuniy qator: '{\"d\":null}'."
    ]
  },
  {
    "id": "q-map-set",
    "lessonId": "map-set",
    "topic": "Map va Set: noldan",
    "level": "qiyin",
    "question": "Ushbu Set ning size (hajmi) necha bo‘ladi?",
    "code": "const s = new Set();\ns.add({ id: 1 });\ns.add({ id: 1 });\ns.add(NaN);\ns.add(NaN);\nconsole.log(s.size);",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": 1,
    "explain": "{ id: 1 } har safar yangi xotira manziliga (reference) ega bo‘ladi, shuning uchun ikkala obyekt ham qo‘shiladi (2 ta). Lekin Set algoritmi (SameValueZero) NaN ni o‘ziga teng deb hisoblaydi, shuning uchun NaN faqat 1 marta qo‘shiladi. Jami: 3.",
    "walkthrough": [
      "Birinchi { id: 1 } yangi obyekt sifatida Setga qo‘shildi (size = 1).",
      "Ikkinchi { id: 1 } boshqa xotira manzili bo‘lgani uchun yana qo‘shildi (size = 2).",
      "Birinchi NaN qo‘shildi (size = 3).",
      "Ikkinchi NaN mavjud deb topildi va qayta qo‘shilmadi.",
      "s.size = 3."
    ]
  },
  {
    "id": "q-callbacks",
    "lessonId": "callbacks",
    "topic": "Callback va yuqori darajali funksiyalar: noldan",
    "level": "qiyin",
    "question": "Ushbu kod konsolda nima chiqaradi?",
    "code": "const arr = ['1', '2', '3'].map(parseInt);\nconsole.log(arr);",
    "options": [
      "[1, 2, 3]",
      "[1, NaN, NaN]",
      "[1, 2, NaN]",
      "[NaN, NaN, NaN]"
    ],
    "answer": 1,
    "explain": "map callbackga (element, index) argumentlarini uzatadi. parseInt(satr, sanoq_sistemasi) qabul qiladi. parseInt('1', 0) → 1 (0 asos 10 ga teng). parseInt('2', 1) → NaN (1 lik sanoq sistemasi yo‘q). parseInt('3', 2) → NaN (2 likda 3 raqami yo‘q). Natija: [1, NaN, NaN].",
    "walkthrough": [
      "1-iteratsiya: parseInt('1', 0) bajariladi → 1 qaytadi.",
      "2-iteratsiya: parseInt('2', 1) bajariladi → radix 1 bo‘lgani uchun NaN.",
      "3-iteratsiya: parseInt('3', 2) bajariladi → 2-lik asosda 3 yaroqsiz bo‘lgani uchun NaN.",
      "Natija massivi: [1, NaN, NaN]."
    ]
  },
  {
    "id": "q-closures",
    "lessonId": "closures",
    "topic": "Closure: noldan",
    "level": "o‘rta",
    "question": "Ushbu kod chaqirilganda konsolga nima chiqadi?",
    "code": "function tashqi() {\n  let x = 10;\n  return function() {\n    x++;\n    return x;\n  };\n}\nconst a = tashqi();\nconst b = tashqi();\nconsole.log(a(), a(), b());",
    "options": [
      "11, 12, 13",
      "11, 12, 11",
      "11, 11, 11",
      "12, 13, 11"
    ],
    "answer": 1,
    "explain": "tashqi() har chaqirilganda x uchun yangi leksik muhit yaratiladi. a o‘zining x o‘zgaruvchisiga (10 dan 11, keyin 12), b esa butunlay yangi o‘z x o‘zgaruvchisiga (10 dan 11) ega bo‘ladi.",
    "walkthrough": [
      "const a = tashqi() → 1-leksik muhitda x = 10.",
      "const b = tashqi() → 2-leksik muhitda alohida x = 10.",
      "a() chaqirildi → 1-muhitdagi x 11 bo‘ldi va 11 qaytdi.",
      "a() ikkinchi marta chaqirildi → 1-muhitdagi x 12 bo‘ldi va 12 qaytdi.",
      "b() chaqirildi → 2-muhitdagi x 11 bo‘ldi va 11 qaytdi. Natija: 11, 12, 11."
    ]
  },
  {
    "id": "q-errors-try-catch",
    "lessonId": "errors-try-catch",
    "topic": "Xatolar: try/catch, throw, finally",
    "level": "qiyin",
    "question": "Ushbu funksiya nima qaytaradi?",
    "code": "function sinov() {\n  try {\n    return 1;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(sinov());",
    "options": [
      "1",
      "2",
      "undefined",
      "TypeError"
    ],
    "answer": 1,
    "explain": "finally bloki har qanday holatda ham (try da return bo‘lsa ham) albatta bajariladi. Agar finally ichida return yozilsa, u try yoki catch dagi return ni ustiga yozadi (override qiladi).",
    "walkthrough": [
      "try bloki ishga tushadi va return 1 tayyorlanadi.",
      "Lekin funksiyadan chiqishdan oldin majburiy finally bloki bajariladi.",
      "finally blokida return 2 uchraydi va oldingi return 1 bekor qilinadi.",
      "Funksiya 2 qaytaradi."
    ]
  },
  {
    "id": "q-common-pitfalls",
    "lessonId": "common-pitfalls",
    "topic": "Ko‘p uchraydigan xatolar va tuzoqlar",
    "level": "o‘rta",
    "question": "Ushbu 3 ta console.log qanday natija beradi?",
    "code": "console.log(typeof NaN);\nconsole.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));",
    "options": [
      "'number', false, true",
      "'NaN', true, true",
      "'number', true, true",
      "'undefined', false, false"
    ],
    "answer": 0,
    "explain": "typeof NaN har doim 'number' dir. NaN JSda o‘z-o‘ziga teng bo‘lmagan yagona qiymatdir (=== bilan false). Lekin Object.is(NaN, NaN) ikkalasining ayni bir qiymat ekanini aniqlab true beradi.",
    "walkthrough": [
      "typeof NaN hisoblanadi → 'number'.",
      "NaN === NaN taqqoslanadi → spetsifikatsiya bo‘yicha false.",
      "Object.is(NaN, NaN) algoritmi chaqiriladi → true.",
      "Natija: 'number', false, true."
    ]
  },
  {
    "id": "q-modules",
    "lessonId": "modules",
    "topic": "Modullar: import/export",
    "level": "qiyin",
    "question": "ES modullarda import qilingan o‘zgaruvchiga qayta qiymat berilsa (reassign) nima sodir bo‘ladi?",
    "code": "// a.js\nexport let ball = 100;\n\n// b.js\nimport { ball } from './a.js';\nball = 200;",
    "options": [
      "TypeError otiladi (import qilingan qiymatlar read-only bo‘ladi)",
      "Normal ishlaydi va ball 200 ga aylanadi",
      "ReferenceError otiladi",
      "O‘zgaruvchi qiymati undefined bo‘lib qoladi"
    ],
    "answer": 0,
    "explain": "ES modullardan import qilingan nomlar 'live read-only binding' hisoblanadi. Ularni import qilgan fayl o‘zgartira olmaydi (TypeError). Qiymat faqat uni export qilgan modul ichidan o‘zgarishi mumkin.",
    "walkthrough": [
      "a.js modulidan let ball export qilinmoqda.",
      "b.js uni import qiladi: bu yerda ball o‘zgarmas bog‘lanish (read-only) shaklida bo‘ladi.",
      "ball = 200 ga urinish TypeError: Assignment to constant variable xatosini keltirib chiqaradi."
    ]
  },
  {
    "id": "q-events-advanced",
    "lessonId": "events-advanced",
    "topic": "Eventlar: chuqurroq",
    "level": "o‘rta",
    "question": "addEventListener da 3-argument sifatida { capture: true } (yoki true) berilsa nima bo‘ladi?",
    "code": "element.addEventListener('click', handler, true);",
    "options": [
      "Hodisa Capturing (pasayish / tushish) fazasida ushlanadi",
      "Hodisa faqat Bubbling (ko‘tarilish) fazasida ishlaydi",
      "Hodisa bekor qilinadi va ishlamaydi",
      "Hodisa faqat 1 marta bajariladi va o‘chiriladi"
    ],
    "answer": 0,
    "explain": "Standart bo‘yicha hodisalar Bubbling (pastdan yuqoriga) fazasida ushlanadi. Uchinchi argument true yoki { capture: true } bo‘lsa, hodisa yuqoridan nishonga qarab tushish (Capturing) fazasida ushlanadi.",
    "walkthrough": [
      "DOM hodisasi 3 bosqichdan o‘tadi: Capturing → Target → Bubbling.",
      "addEventListener uchinchi parametri capture flagini belgilaydi.",
      "true berilganda handler Capturing bosqichida birinchi bo‘lib ishga tushadi."
    ]
  },
  {
    "id": "q-storage",
    "lessonId": "storage",
    "topic": "localStorage va sessionStorage: noldan",
    "level": "o‘rta",
    "question": "Obyektni to‘g‘ridan-to‘g‘ri localStorage ga saqlab qayta o‘qilsa nima chiqadi?",
    "code": "localStorage.setItem('user', { ism: 'Ali' });\nconst res = localStorage.getItem('user');\nconsole.log(res);",
    "options": [
      "'[object Object]'",
      "{ ism: 'Ali' }",
      "'{\"ism\":\"Ali\"}'",
      "undefined"
    ],
    "answer": 0,
    "explain": "localStorage faqat matn (string) saqlaydi. Unga obyekt uzatilganda avtomatik ravishda uning toString() metodi chaqiriladi va '[object Object]' matni saqlanadi. To‘g‘ri saqlash uchun JSON.stringify ishlatish kerak.",
    "walkthrough": [
      "localStorage.setItem('user', { ism: 'Ali' }) chaqirildi.",
      "Obyekt avtomatik stringga aylantirildi: String({ ism: 'Ali' }) → '[object Object]'.",
      "getItem orqali '[object Object]' matni qaytadi."
    ]
  },
  {
    "id": "q-dates",
    "lessonId": "dates",
    "topic": "Date va vaqt bilan ishlash: noldan",
    "level": "o‘rta",
    "question": "Ushbu Date kodi konsolga necha chiqaradi?",
    "code": "const sana = new Date(2026, 0, 15);\nconsole.log(sana.getMonth());",
    "options": [
      "0",
      "1",
      "15",
      "NaN"
    ],
    "answer": 0,
    "explain": "JavaScript Date obyektida oylar 0 dan boshlab indekslanadi: 0 — Yanvar, 1 — Fevral, ..., 11 — Dekabr. Shuning uchun 0 berilganda getMonth() ham 0 (Yanvar) qaytaradi.",
    "walkthrough": [
      "new Date(2026, 0, 15) konstruktorida 2026-yil, 0-oy (Yanvar), 15-kun yaratiladi.",
      "sana.getMonth() metodi chaqiriladi.",
      "0 qaytadi (Yanvar oyi)."
    ]
  },
  {
    "id": "q-regex-basics",
    "lessonId": "regex-basics",
    "topic": "Regex: noldan",
    "level": "qiyin",
    "question": "Ushbu global Regex kodi qanday natija beradi?",
    "code": "const reg = /test/g;\nconsole.log(reg.test('test'));\nconsole.log(reg.test('test'));",
    "options": [
      "true va true",
      "true va false",
      "false va true",
      "false va false"
    ],
    "answer": 1,
    "explain": "/g (global) bayrog‘iga ega bo‘lgan Regex o‘zining oxirgi topilgan joyini (lastIndex) saqlab boradi. Birinchi test() 'test' ni topadi va lastIndex 4 bo‘ladi. Ikkinchi test() 4-indeksdan qidirishni boshlaydi va hech narsa topolmay false qaytaradi.",
    "walkthrough": [
      "reg.lastIndex dastlab 0 ga teng.",
      "1-chi test('test'): 0-indeksdan moslik topildi → true. lastIndex 4 ga teng bo‘ldi.",
      "2-chi test('test'): qidirish 4-indeksdan boshlanadi → moslik yo‘q → false. lastIndex yana 0 ga qaytadi.",
      "Natija: true va false."
    ]
  },
  {
    "id": "q-web-apis",
    "lessonId": "web-apis",
    "topic": "Foydali Web API lar: noldan",
    "level": "o‘rta",
    "question": "AbortController yordamida so‘rov bekor qilinganda signal holati nima bo‘ladi?",
    "code": "const controller = new AbortController();\ncontroller.abort();\nconsole.log(controller.signal.aborted);",
    "options": [
      "true",
      "false",
      "undefined",
      "TypeError"
    ],
    "answer": 0,
    "explain": "AbortController fetch yoki boshqa asinxron vazifalarni to‘xtatish uchun xizmat qiladi. abort() metodi chaqirilishi bilan uning controller.signal.aborted xususiyati true ga aylanadi.",
    "walkthrough": [
      "AbortController instansiyasi yaratiladi.",
      "controller.abort() buyrug‘i beriladi.",
      "signal.aborted bayrog‘i true ga o‘zgaradi va konsolga true chiqadi."
    ]
  },
  {
    "id": "q-fetch-api",
    "lessonId": "fetch-api",
    "topic": "Fetch API: noldan",
    "level": "o‘rta",
    "question": "Agar server 404 (Topilmadi) yoki 500 (Server xatosi) qaytarsa, fetch Promise qanday holatga tushadi?",
    "code": "fetch('https://api.example.com/not-found')\n  .then(() => console.log('Resolved'))\n  .catch(() => console.log('Rejected'));",
    "options": [
      "'Resolved' chiqadi (HTTP xatolar reject qilmaydi, response.ok false bo‘ladi)",
      "'Rejected' chiqadi (catch ga tushadi)",
      "Xatolik otilib kod to‘xtaydi",
      "Promise cheksiz kutish (pending) holatida qoladi"
    ],
    "answer": 0,
    "explain": "fetch Promise faqat tarmoq uzilishi (network failure) yoki so‘rov yuborish imkoni bo‘lmagandagina reject bo‘ladi. HTTP 404 yoki 500 javobida Promise resolve bo‘ladi, lekin response.ok qiymati false bo‘ladi.",
    "walkthrough": [
      "Server 404 kodi bilan javob qaytaradi.",
      "fetch muvaffaqiyatli javob kelgani uchun Promise ni resolve qiladi.",
      ".then bloki ishlaydi va 'Resolved' chiqadi (ishlovchi dasturchi response.ok ni o‘zi tekshirishi kerak)."
    ]
  },
  {
    "id": "q-dynamic-import-async-iteration",
    "lessonId": "dynamic-import-async-iteration",
    "topic": "Dynamic import va async iteratsiya",
    "level": "o‘rta",
    "question": "Dinamik import(...) chaqirilganda qanday turdagi qiymat qaytadi?",
    "code": "const res = import('./util.js');\nconsole.log(res instanceof Promise);",
    "options": [
      "true (import doim modul obyekti bilan resolve bo‘ladigan Promise qaytaradi)",
      "false (modul darhol obyekt sifatida yuklanadi)",
      "undefined",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Dinamik import() asinxron yuklash uchun ishlatiladi va har doim Promise qaytaradi. U modul yuklangach, modulning barcha exportlarini o‘z ichiga olgan obyekt (namespace object) bilan resolve bo‘ladi.",
    "walkthrough": [
      "import('./util.js') chaqiriladi.",
      "U asinxron Promise instansiyasini hosil qiladi.",
      "res instanceof Promise tekshiruvi true qaytaradi."
    ]
  },
  {
    "id": "q-prototypes",
    "lessonId": "prototypes",
    "topic": "Prototype va prototip zanjiri: noldan",
    "level": "qiyin",
    "question": "Ushbu prototip tekshiruvi konsolga qanday natija chiqaradi?",
    "code": "function User(nom) { this.nom = nom; }\nUser.prototype.salom = function() { return 'Salom ' + this.nom; };\nconst u = new User('Ali');\nconsole.log(u.hasOwnProperty('salom'), 'salom' in u);",
    "options": [
      "false va true",
      "true va true",
      "true va false",
      "false va false"
    ],
    "answer": 0,
    "explain": "hasOwnProperty faqat obyektning o‘z shaxsiy xususiyatlarini (own properties) tekshiradi, salom esa prototipda joylashgani uchun false beradi. in operatori esa butun prototip zanjiri bo‘ylab qidiradi va true beradi.",
    "walkthrough": [
      "User.prototype da salom metodi yaratildi.",
      "u = new User('Ali') instansiyasida faqat nom xususiyati o‘zida bo‘ladi.",
      "u.hasOwnProperty('salom') → false (chunki salom u da emas, uning __proto__ sida).",
      "'salom' in u → true (prototip zanjiridan topildi). Natija: false va true."
    ]
  },
  {
    "id": "q-classes",
    "lessonId": "classes",
    "topic": "Class va meros: noldan",
    "level": "qiyin",
    "question": "Ushbu Class meros olish kodi qanday natija beradi?",
    "code": "class Ota {\n  constructor() { console.log('A'); }\n}\nclass Bola extends Ota {\n  constructor() {\n    console.log('B');\n    super();\n  }\n}\nnew Bola();",
    "options": [
      "'B' keyin 'A' chiqadi",
      "'A' keyin 'B' chiqadi",
      "ReferenceError (super() dan oldin hech qanday kod yozish mumkin emas)",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Derived (meros oluvchi) klassda super() dan oldin 'this' ga murojaat qilish ReferenceError beradi. Biroq, 'this' ishlatilmagan oddiy buyruqlar (masalan console.log('B')) super() dan oldin bemalol bajariladi. Shuning uchun avval B, keyin A chiqadi.",
    "walkthrough": [
      "new Bola() chaqiriladi.",
      "Bola konstruktori boshlanadi: console.log('B') ishlaydi → 'B' chiqadi.",
      "super() chaqiriladi: Ota klass konstruktori ishlaydi → 'A' chiqadi.",
      "Natija ketma-ketligi: 'B' keyin 'A'."
    ]
  },
  {
    "id": "q-iterators-generators",
    "lessonId": "iterators-generators",
    "topic": "Iterator va generator: noldan",
    "level": "qiyin",
    "question": "Ushbu generator massivga yoyilganda (spread) natija nima bo‘ladi?",
    "code": "function* sonlar() {\n  yield 1;\n  return 2;\n  yield 3;\n}\nconsole.log([...sonlar()]);",
    "options": [
      "[1]",
      "[1, 2]",
      "[1, 2, 3]",
      "[1, 3]"
    ],
    "answer": 0,
    "explain": "Spread operator (...), for...of va boshqa iteratsiya mexanizmlari faqat done: false bo‘lgan yield qiymatlarini yig‘adi. Generator return qilganda done: true bo‘ladi va uning qaytargan qiymati (2) iteratsiyaga kirmaydi, generator darhol to‘xtaydi.",
    "walkthrough": [
      "yield 1 beriladi: { value: 1, done: false } → massivga 1 qo‘shildi.",
      "return 2 bajariladi: { value: 2, done: true } → done true bo‘lgani uchun 2 massivga kirmaydi.",
      "yield 3 ga yetib borilmaydi.",
      "Yakuniy massiv: [1]."
    ]
  },
  {
    "id": "q-proxy-reflect",
    "lessonId": "proxy-reflect",
    "topic": "Proxy va Reflect: noldan",
    "level": "o‘rta",
    "question": "Ushbu Proxy orqali proxy.x va proxy.y o‘qilganda nima chiqadi?",
    "code": "const target = { x: 10 };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    return prop in t ? t[prop] * 2 : 0;\n  }\n});\nconsole.log(proxy.x, proxy.y);",
    "options": [
      "20 va 0",
      "10 va undefined",
      "20 va undefined",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Proxy ning get trapi xususiyat o‘qilishini tutib oladi. proxy.x uchun 'x' in t true bo‘lib 10 * 2 = 20 qaytadi. proxy.y uchun 'y' in t false bo‘lib 0 qaytadi.",
    "walkthrough": [
      "proxy.x chaqirildi → get trapi ishladi: 'x' targetda bor, 10 * 2 = 20 qaytdi.",
      "proxy.y chaqirildi → get trapi ishladi: 'y' targetda yo‘q, 0 qaytdi.",
      "Natija: 20 va 0."
    ]
  },
  {
    "id": "q-core-event-loop-complex-chain",
    "lessonId": "core-event-loop-deep",
    "topic": "Event Loop: microtask va macrotask chuqur tahlili",
    "level": "qiyin",
    "question": "Ushbu kod konsolga qanday ketma-ketlikda natija chiqaradi?",
    "code": "console.log('1');\n\nasync function foo() {\n  console.log('2');\n  await bar();\n  console.log('3');\n}\n\nasync function bar() {\n  console.log('4');\n}\n\nsetTimeout(() => {\n  console.log('5');\n}, 0);\n\nfoo();\n\nnew Promise((resolve) => {\n  console.log('6');\n  resolve();\n}).then(() => {\n  console.log('7');\n});\n\nconsole.log('8');",
    "options": [
      "1, 2, 4, 6, 8, 3, 7, 5",
      "1, 2, 4, 3, 6, 7, 8, 5",
      "1, 6, 8, 2, 4, 7, 3, 5",
      "1, 2, 4, 6, 8, 7, 3, 5"
    ],
    "answer": 0,
    "explain": "Sinxron qism (1, 2, 4, 6, 8) Call Stackda darhol bajariladi. New Promise konstruktori sinxron ishlaydi (6 chiqadi). foo ichidagi await bar() dan keyingi qator (3) microtask 1 bo'ladi, promise.then (7) microtask 2 bo'ladi. setTimeout (5) esa macrotask bo'lib eng oxirida chiqadi.",
    "walkthrough": [
      "console.log(1) sinxron ishlaydi → 1 chiqadi.",
      "foo() chaqiriladi: console.log(2) ishlaydi → 2 chiqadi.",
      "bar() chaqiriladi: console.log(4) sinxron ishlaydi → 4 chiqadi.",
      "await bar() tufayli console.log(3) Microtask 1 navbatiga qo'shiladi.",
      "setTimeout callbacki Macrotask navbatiga tashlanadi.",
      "new Promise executor sinxron ishlaydi: console.log(6) → 6 chiqadi.",
      ".then callbacki console.log(7) Microtask 2 navbatiga qo'shiladi.",
      "console.log(8) sinxron ishlaydi → 8 chiqadi. Call Stack bo'shadi.",
      "Microtasklar navbati ketma-ket bajariladi: 3, keyin 7 chiqadi.",
      "Macrotask navbati bajariladi: 5 chiqadi. Natija: 1, 2, 4, 6, 8, 3, 7, 5."
    ]
  },
  {
    "id": "q-core-event-loop-deep",
    "lessonId": "core-event-loop-deep",
    "topic": "Event Loop: microtask va macrotask chuqur tahlili",
    "level": "qiyin",
    "question": "Ushbu kod konsolga qanday ketma-ketlikda natija chiqaradi?",
    "code": "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');",
    "options": [
      "1, 2, 3, 4",
      "1, 4, 3, 2",
      "1, 4, 2, 3",
      "1, 3, 4, 2"
    ],
    "answer": 1,
    "explain": "1 va 4 sinxron (Call Stack). 3 microtask navbatida bo‘lib, macrotask (2) dan oldin bajariladi. Shuning uchun 1, 4, 3, 2.",
    "walkthrough": [
      "console.log('1') sinxron bajariladi → 1 chiqadi.",
      "setTimeout callbacki macrotask navbatiga tushadi.",
      "Promise.then callbacki microtask navbatiga tushadi.",
      "console.log('4') sinxron bajariladi → 4 chiqadi.",
      "Call stack bo‘shagach, microtasklar bajariladi → 3 chiqadi.",
      "Microtasklar tugagach, macrotask bajariladi → 2 chiqadi."
    ]
  },
  {
    "id": "q-core-hoisting-tdz-deep",
    "lessonId": "core-hoisting-tdz-deep",
    "topic": "Hoisting va TDZ: xotirada ajratilish va o‘lik zona",
    "level": "o‘rta",
    "question": "Quyidagi kod ishga tushirilganda nima sodir bo‘ladi?",
    "code": "console.log(a);\nconsole.log(b);\nvar a = 10;\nlet b = 20;",
    "options": [
      "10 va 20 chiqadi",
      "undefined va 20 chiqadi",
      "undefined chiqadi, so‘ng ReferenceError otiladi",
      "Ikkalasi ham ReferenceError beradi"
    ],
    "answer": 2,
    "explain": "var a ko‘tarilib (hoist) undefined qiymat oladi. let b esa e'lon qilingan qatorgacha TDZ da bo‘lgani uchun ReferenceError beradi.",
    "walkthrough": [
      "Creation phase da var a = undefined bo‘ladi; let b TDZ da initsializatsiyasiz qoladi.",
      "1-satr: console.log(a) → undefined chiqadi.",
      "2-satr: console.log(b) → b hali TDZ da bo‘lgani uchun ReferenceError otiladi va kod to‘xtaydi."
    ]
  },
  {
    "id": "q-core-scope-closure-loops",
    "lessonId": "core-scope-closure-loops",
    "topic": "Scope va Closure: sikllarda var va let ning farqi",
    "level": "o‘rta",
    "question": "Ushbu kod konsolda nima chiqaradi?",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    "options": [
      "0, 1, 2",
      "3, 3, 3",
      "undefined, undefined, undefined",
      "0, 0, 0"
    ],
    "answer": 1,
    "explain": "var blok scope'ga ega emas. Barcha setTimeout callbacklari ayni bitta umumiy i o‘zgaruvchisiga bog‘lanadi. Callbacklar ishlagan paytda sikl tugab i = 3 bo‘lgan bo‘ladi.",
    "walkthrough": [
      "Sikl 3 marta aylanadi va har safar setTimeout callbackini macrotaskka yuboradi.",
      "Sikl tugagach, umumiy var i ning qiymati 3 ga teng bo‘ladi.",
      "Event loop macrotasklarni olib bajarganda, har biri i = 3 ni ko‘radi va 3 ta 3 chiqaradi."
    ]
  },
  {
    "id": "q-core-this-arrow-deep",
    "lessonId": "core-this-arrow-deep",
    "topic": "this kalit so‘zi va Arrow funksiyalar: 4 bog‘lanish qoidasi",
    "level": "qiyin",
    "question": "Ushbu kod nima chiqaradi?",
    "code": "const user = {\n  ism: 'Ali',\n  salom: () => this.ism\n};\nconsole.log(user.salom());",
    "options": [
      "'Ali'",
      "undefined",
      "TypeError",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "Obyekt literali { } alohida blok scope yaratmaydi. Arrow funksiya o‘zining tashqi leksik muhitidagi this ni oladi. Tashqi muhitda esa ism yo‘q, shuning uchun undefined chiqadi.",
    "walkthrough": [
      "salom arrow funksiya sifatida e'lon qilingan.",
      "Arrow funksiya this ni o‘zida saqlamaydi, tashqi scope (odatda global/window) dan meros oladi.",
      "global obyektda ism xususiyati mavjud emas, shuning uchun undefined chiqadi."
    ]
  },
  {
    "id": "q-core-type-coercion-deep",
    "lessonId": "core-type-coercion-deep",
    "topic": "Type Coercion: turlar konvertatsiyasi va taqqoslash tuzoqlari",
    "level": "qiyin",
    "question": "Quyidagi ifoda qanday mantiqiy natija beradi: [] == ![]?",
    "code": "console.log([] == ![]);",
    "options": [
      "true",
      "false",
      "TypeError",
      "undefined"
    ],
    "answer": 0,
    "explain": "![] boolean false ga aylanadi. Keyin [] == false ifodasi 0 == 0 ga keltirilib true beradi.",
    "walkthrough": [
      "![] birinchi hisoblanadi: massiv truthy bo‘lgani uchun ![] → false.",
      "Taqqoslash: [] == false. false songa aylanadi: 0.",
      "[] primitivga o‘tadi: '' (bo‘sh string).",
      "'' songa aylanadi: 0. 0 == 0 natijasi true!"
    ]
  },
  {
    "id": "q-core-pass-by-ref-deep",
    "lessonId": "core-pass-by-ref-deep",
    "topic": "Pass by Value va Pass by Reference: xotira modeli va mutatsiya",
    "level": "o‘rta",
    "question": "Ushbu kod konsolga nima chiqaradi?",
    "code": "const a = { son: 10 };\nconst b = a;\nb.son = 20;\nconsole.log(a.son);",
    "options": [
      "10",
      "20",
      "undefined",
      "ReferenceError"
    ],
    "answer": 1,
    "explain": "Obyektlar xotira manziliga (reference) bog‘lanadi. const b = a qilinganda yangi obyekt ochilmaydi, ikkalasi ayni bir obyektga qaraydi. b.son = 20 asl obyektni mutatsiya qiladi.",
    "walkthrough": [
      "const a = { son: 10 } Heap xotirada obyekt yaratadi va a ga manzilini beradi.",
      "const b = a ayni shu manzilni b ga nusxalaydi.",
      "b.son = 20 shu manzildagi obyekt xususiyatini o‘zgartiradi.",
      "a.son o‘qilganda yangilangan 20 ko‘rinadi."
    ]
  },
  {
    "id": "q-mdn-prototypes-deep",
    "lessonId": "mdn-prototypes-deep",
    "title": "Prototip zanjiri va Object.create(null)",
    "question": "Quyidagi kodda console.log nima chiqaradi?\nconst clean = Object.create(null);\nclean.title = 'Kitob';\nconsole.log('toString' in clean, Object.hasOwn(clean, 'title'));",
    "options": [
      "true, true",
      "false, true",
      "false, false",
      "TypeError tashlaydi"
    ],
    "answer": 1,
    "explain": "Object.create(null) hech qanday prototipga ega emas (hatto Object.prototype ga ham ulanmagan), shuning uchun 'toString' in clean false beradi. Lekin 'title' uning shaxsiy xususiyati bo‘lgani uchun Object.hasOwn(clean, 'title') true beradi.",
    "walkthrough": [
      "clean obyekti prototipsiz (null) yaratiladi.",
      "'toString' xususiyati Object.prototype da bo‘lsa ham, bu obyekt unga ulanmagan.",
      "Object.hasOwn obyektdagi shaxsiy 'title' borligini tasdiqlaydi."
    ]
  },
  {
    "id": "q-mdn-memory-management",
    "lessonId": "mdn-memory-management",
    "title": "Mark-and-sweep va aylanma havolalar (Circular references)",
    "question": "Funksiya ichida ikki obyekt bir-biriga havola qilsa (a.b = b; b.a = a) va funksiya yakunlansa, zamonaviy Mark-and-sweep Garbage Collection nima qiladi?",
    "options": [
      "Hech qachon o‘chirmaydi, memory leak bo‘ladi",
      "Ildiz (Roots) dan yetib bo‘lmagani sababli ikkalasini ham tozalaydi",
      "Faqat birinchi obyektni tozalaydi",
      "Dastur TypeError xatosini beradi"
    ],
    "answer": 1,
    "explain": "Mark-and-sweep hisoblagichga emas, 'yetib borish mumkinmi' (reachability from roots) tamoyiliga tayanadi. Funksiya tugagach, global ildizdan ularga yo‘l qolmagani sababli, aylanma havola bo‘lsa ham ikkalasi ham tozalab yuboriladi.",
    "walkthrough": [
      "Ilgari reference-counting davrida bu xotira sizishiga olib kelar edi.",
      "Zamonaviy dvigatellar (V8, SpiderMonkey) Mark-and-sweep ishlatadi.",
      "Ildizdan yetib bo‘lmagan har qanday obyekt xotiradan tozalanadi."
    ]
  },
  {
    "id": "q-mdn-typed-arrays",
    "lessonId": "mdn-typed-arrays",
    "title": "ArrayBuffer va Uint8Array to‘lib toshishi (Overflow)",
    "question": "Quyidagi kod natijasi nima bo‘ladi?\nconst u8 = new Uint8Array(2);\nu8[0] = 255;\nu8[1] = 256;\nconsole.log(u8[0], u8[1]);",
    "options": [
      "255, 256",
      "255, 0",
      "255, 255",
      "Error: RangeError"
    ],
    "answer": 1,
    "explain": "Uint8Array 8-bitli sonlarni saqlaydi (0 dan 255 gacha). 256 kiritilganda 8 bitga sig‘maydi va toshib ketadi (256 % 256 = 0). Shuning uchun u8[1] nolga aylanadi.",
    "walkthrough": [
      "Uint8Array 1 baytlik xotirada faqat 0-255 oralig‘idagi sonlarni sig‘diradi.",
      "255 maksimal qiymat bo‘lib, o‘zgarishsiz saqlanadi.",
      "256 kiritilganda modul arifmetikasi (overflow) tufayli 0 qiymati yoziladi."
    ]
  },
  {
    "id": "q-mdn-resource-management",
    "lessonId": "mdn-resource-management",
    "title": "Explicit Resource Management ('using')",
    "question": "JavaScriptda yangi 'using' deklaratsiyasi bilan e'lon qilingan o‘zgaruvchi blokdan ({}) chiqqanda nima sodir bo‘ladi?",
    "options": [
      "Hech narsa, oddiy const kabi ishlaydi",
      "Avtomatik tarzda uning [Symbol.dispose]() metodi chaqiriladi",
      "Obyekt darhol null ga tenglashtiriladi",
      "Faqat try...catch ichida xato bo‘lsagina tozalaydi"
    ],
    "answer": 1,
    "explain": "Explicit Resource Management standarti bo‘yicha 'using' kalit so‘zi blok tugaganda (hatto throw yoki return yuz bersa ham) o‘zgaruvchining [Symbol.dispose]() metodini deterministik tarzda chaqirib, resurslarni yopadi.",
    "walkthrough": [
      "'using' blok doirasida resursning hayot siklini boshqaradi.",
      "Blok yakunlanganda (LIFO tartibda) Symbol.dispose ishga tushadi.",
      "Bu try...finally bloklarini yozish zaruratini yo‘qotadi."
    ]
  },
  {
    "id": "q-mdn-intl",
    "lessonId": "mdn-intl",
    "title": "Intl.NumberFormat valyuta formati",
    "question": "Intl.NumberFormat yordamida valyutani formatlashning oddiy string concatenation dan asosiy ustunligi nimada?",
    "options": [
      "Faqat kod uzunligini qisqartiradi",
      "Turli davlatlarning lokal qoidalari, minglik ajratgichlari va valyuta belgilarini avtomatik to‘g‘ri joylashtiradi",
      "Raqamni avtomatik BigInt ga o‘tkazadi",
      "Faqat AQSH dollari bilan ishlaydi"
    ],
    "answer": 1,
    "explain": "Intl.NumberFormat hududiy standartlar (locale) bo‘yicha raqamlar, minglik vergul/nuqtalar va valyuta belgilarini xalqaro qoidalarga ko‘ra to‘g‘ri joylashtiradi.",
    "walkthrough": [
      "Dunyoda har bir til va madaniyat raqamlarni turlicha formatlaydi.",
      "Intl brauzer va OS ning rasmiy CLDR ma'lumotlar bazasiga tayanadi.",
      "Bu orqali har bir foydalanuvchiga o‘z tiliga mos format taqdim etiladi."
    ]
  },
  {
    "id": "q-mdn-operators-deep",
    "lessonId": "mdn-operators-deep",
    "title": "Mantiqiy tayinlov (??= vs ||=)",
    "question": "Quyidagi kodda console.log nima chiqaradi?\nlet count = 0;\ncount ||= 10;\nlet limit = 0;\nlimit ??= 50;\nconsole.log(count, limit);",
    "options": [
      "0, 0",
      "10, 50",
      "10, 0",
      "0, 50"
    ],
    "answer": 2,
    "explain": "count ||= 10 da 0 soni falsy bo‘lgani sababli count 10 ga o‘zgaradi. Ammo limit ??= 50 da 0 soni nullish (null/undefined) emas, shuning uchun ??= o‘zlashtirishni bajarmaydi va limit 0 ligicha qoladi.",
    "walkthrough": [
      "0 soni boolean kontekstda falsy hisoblanadi.",
      "||= operatori falsy qiymatni ko‘rganda o‘ng tarafdagi 10 ni yuklaydi.",
      "??= faqat null yoki undefined bo‘lgandagina ishlaydi, 0 ga teginmaydi."
    ]
  },
  {
    "id": "q-mdn-statements-declarations",
    "lessonId": "mdn-statements-declarations",
    "title": "Single-statement context va let deklaratsiyasi",
    "question": "Nima sababdan 'if (true) let x = 1;' kodi SyntaxError beradi, lekin 'if (true) var x = 1;' xatosiz ishlaydi?",
    "options": [
      "let o‘zgaruvchisini if ichida e'lon qilish mumkin emas",
      "var statement hisoblanadi, let esa declaration bo‘lib blocksiz yagona satrli kontekstda taqiqlanadi",
      "var ga doimo xotiradan joy ajratiladi, let ga esa yo‘q",
      "Faqat strict mode yoqilgani sababli"
    ],
    "answer": 1,
    "explain": "JavaScript grammatikasida if tanasi faqat statement qabul qiladi. var - statement hisoblanadi. let/const/class esa lexical declaration bo‘lib, {} bloki bo‘lmagan yagona satrda e'lon qilinsa o‘sha zahoti o‘ladi. Dvigatel bunga yo‘l qo‘ymaydi va SyntaxError beradi.",
    "walkthrough": [
      "MDN grammatik qoidalariga ko‘ra statements va declarations alohida toifalardir.",
      "if (condition) Statement qoidasiga ko‘ra blocksiz holatda faqat statement ruxsat etiladi.",
      "To‘g‘ri ishlashi uchun {} blok qavslari bilan o‘ralishi kerak: if (true) { let x = 1; }."
    ]
  },
  {
    "id": "q-mdn-functions-deep",
    "lessonId": "mdn-functions-deep",
    "title": "Non-simple parametrlar va 'use strict'",
    "question": "Quyidagi funksiyani bajarishda qanday natija yuz beradi?\nfunction greet(name = 'Mehmon') {\n  'use strict';\n  return 'Salom ' + name;\n}",
    "options": [
      "'Salom Mehmon' qaytaradi",
      "SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list",
      "TypeError: Default parameters not allowed",
      "undefined qaytaradi"
    ],
    "answer": 1,
    "explain": "ES2016 standartiga ko‘ra, agar funksiyada default (name = 'Mehmon'), rest yoki destructuring parametrlar bo‘lsa, funksiya tanasiga 'use strict' yozish SyntaxError xatosini keltirib chiqaradi.",
    "walkthrough": [
      "name = 'Mehmon' non-simple parametr hisoblanadi.",
      "Dvigatel parametrlarni parse qilganda funksiya strict yoki non-strict ekanini oldindan bilishi kerak.",
      "Parametrlardan keyin tana ichida 'use strict' uchrashi taqiqlangan."
    ]
  },
  {
    "id": "q-mdn-web-workers-atomics",
    "lessonId": "mdn-web-workers-atomics",
    "title": "Atomics va SharedArrayBuffer",
    "question": "Bir nechta Web Worker bir vaqtda bitta SharedArrayBuffer ga ma'lumot yozganda race condition ning oldini olish uchun qaysi vositadan foydalaniladi?",
    "options": [
      "Oddiy mutex kutubxonasi",
      "Atomics obyekti (Atomics.store, Atomics.add)",
      "Faqat setTimeout",
      "JSON.stringify"
    ],
    "answer": 1,
    "explain": "Atomics obyekti SharedArrayBuffer ustida bo‘linmas (atomar) amallarni bajarishni ta'minlaydi va bir nechta oqimlar bir vaqtda yozganda ma'lumotlar buzilishining oldini oladi.",
    "walkthrough": [
      "SharedArrayBuffer oqimlar o‘rtasida umumiy xotira beradi.",
      "Biroq oddiy yozish poyga holati (race condition) keltirib chiqarishi mumkin.",
      "Atomics.store, Atomics.load va Atomics.add amallari buni xavfsiz va atomar bajaradi."
    ]
  },
  {
    "id": "q-mdn-structured-clone",
    "lessonId": "mdn-structured-clone",
    "title": "structuredClone() cheklovlari",
    "question": "Quyidagi obyektni structuredClone() orqali klonlaganda nima yuz beradi?\nconst user = { name: 'Ali', sayHi() { return 'Salom'; } };\nconst clone = structuredClone(user);",
    "options": [
      "To‘liq klonlanadi va clone.sayHi() ishlaydi",
      "sayHi funksiyasi undefined bo‘lib tushadi",
      "DataCloneError xatosi tashlanadi",
      "Faqat name o‘tadi, sayHi e'tiborsiz qoldiriladi"
    ],
    "answer": 2,
    "explain": "structuredClone() algoritmi funksiyalarni klonlay olmaydi. Agar obyektda funksiya bo‘lsa, u DataCloneError (DOMException) tashlaydi.",
    "walkthrough": [
      "structuredClone Date, Map, Set, ArrayBuffer larni mukammal nusxalaydi.",
      "Lekin funksiyalar va DOM tugunlarini klonlash taqiqlangan.",
      "Shuning uchun bu kodda darhol DataCloneError xatosi yuz beradi."
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
  },
  {
    "id": "lab-expressions-statements",
    "title": "Expression va statement: kod qiymati va amali",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "const a = x => x + 1;",
        "note": "a ga ifoda tanali arrow bog‘landi; hali chaqirilmadi."
      },
      {
        "code": "const b = x => { x + 1; };",
        "note": "b ga blok tanali arrow bog‘landi; return yo‘q."
      },
      {
        "code": "console.log(a(2));",
        "note": "a(2) 3 qaytaradi, log 3 chiqaradi."
      },
      {
        "code": "console.log(b(2));",
        "note": "b(2) undefined qaytaradi; hisoblangan 3 tashqariga uzatilmagan."
      }
    ],
    "takeaway": "Ifoda qiymat hisoblaydi. Buyruq kod tuzilishi va bajarilishini tashkil qiladi. Arrow ning { } tanasida qiymat qaytarish uchun return kerak."
  },
  {
    "id": "lab-execution-context-stack",
    "title": "Execution context va call stack: kod qayerga qaytadi?",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "function ikki(n) {",
        "note": "ikki deklaratsiyasi; tana keyin chaqiriladi."
      },
      {
        "code": "  return n * 2;",
        "note": "ikki chaqirilganda n * 2 hisoblanib qaytariladi."
      },
      {
        "code": "}",
        "note": "ikki tanasi tugadi."
      },
      {
        "code": "function jami(n) {",
        "note": "jami deklaratsiyasi; hali tana ishlamaydi."
      },
      {
        "code": "  return ikki(n) + 1;",
        "note": "jami chaqirilsa ikki(n) tugagach +1 bajariladi."
      },
      {
        "code": "}",
        "note": "jami tanasi tugadi."
      },
      {
        "code": "console.log(jami(3));",
        "note": "jami(3) → ikki(3) → 6 → 7; konsolda 7."
      }
    ],
    "takeaway": "Chaqirish → ichki ish → return → chaqirishdan keyingi davom. Stackdagi faol chaqirishlar tartibi lexical scope zanjiri bilan bir xil tushuncha emas."
  },
  {
    "id": "lab-lexical-environment",
    "title": "Lexical environment: qaysi o‘zgaruvchi o‘qiladi?",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "const x = \"tashqi\";",
        "note": "Tashqi x matni yaratildi."
      },
      {
        "code": "function ol() { return x; }",
        "note": "ol tashqi scope da yozilgan, x ni shu zanjirdan qidiradi."
      },
      {
        "code": "function ishgaTushir() {",
        "note": "ishgaTushir funksiyasi yaratildi."
      },
      {
        "code": "  const x = \"ichki\";",
        "note": "Bu x faqat ishgaTushir ning mahalliy nomi."
      },
      {
        "code": "  return ol();",
        "note": "ol ga parametr berilmadi; u lexical tashqi x ni oladi."
      },
      {
        "code": "}",
        "note": "Funksiya tanasi tugadi."
      },
      {
        "code": "console.log(ishgaTushir());",
        "note": "Natija tashqi: chaqirish joyidagi ichki x ol ning muhitini almashtirmaydi."
      }
    ],
    "takeaway": "Nom qidirishda joriy scope → lexical tashqi scope lar. Chaqirilgan joy muhit zanjirini almashtirmaydi. Closure tashqi binding bilan bog‘liq."
  },
  {
    "id": "lab-evaluation-order",
    "title": "Ifodaning bajarilish tartibi va short-circuit",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "function ol(n) { console.log(n); return n; }",
        "note": "ol argumentini log qilib, aynan shu sonni qaytaradi."
      },
      {
        "code": "console.log(ol(2) + ol(3) * ol(4));",
        "note": "ol(2), ol(3), ol(4) ketma-ket log qiladi; so‘ng 3*4 va 2+12 hisoblanib 14 log qilinadi."
      }
    ],
    "takeaway": "Avval guruhlashni, so‘ng operandlarning ketma-ket bajarilishini ko‘ring. Short-circuit bo‘lsa o‘ng operand umuman bajarilmasligi mumkin."
  },
  {
    "id": "lab-functions-as-values",
    "title": "Funksiya qiymat sifatida: fn, fn() va return fn()",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "function yarat(n) {",
        "note": "Factory funksiyasi yaratiladi."
      },
      {
        "code": "  return () => n + 1;",
        "note": "Chaqirilganda n bilan bog‘langan arrow qaytariladi."
      },
      {
        "code": "}",
        "note": "Factory tanasi tugadi."
      },
      {
        "code": "const f = yarat(2);",
        "note": "yarat(2) natijasi funksiya; f ga saqlandi."
      },
      {
        "code": "console.log(typeof f);",
        "note": "f ni bajarmay turi olindi: function."
      },
      {
        "code": "console.log(f());",
        "note": "f chaqirildi, 2+1 natijasi 3."
      }
    ],
    "takeaway": "fn — funksiya qiymati; fn() — hozirgi chaqirish natijasi. return fn va return fn() bir xil emas. Har bir qavsdan keyin natijaning turini yozing."
  },
  {
    "id": "lab-strict-mode-asi",
    "title": "Strict mode va ASI: yashirin xatolarni tushunish",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "function ol() {",
        "note": "ol funksiyasi yaratiladi."
      },
      {
        "code": "  return",
        "note": "return dan keyin yangi qator: qiymatsiz return."
      },
      {
        "code": "    5;",
        "note": "5 ga yetib kelinmaydi."
      },
      {
        "code": "}",
        "note": "Funksiya tanasi tugadi."
      },
      {
        "code": "console.log(ol());",
        "note": "ol() undefined qaytaradi; log uni chiqaradi."
      }
    ],
    "takeaway": "return qiymatini shu satrda boshlang. ASI grammatik qoidalarga bog‘liq. Strict mode e’lon qilinmagan nomga yozish kabi ayrim xatolarni aniq ko‘rsatadi."
  },
  {
    "id": "lab-object-to-primitive",
    "title": "Obyekt qanday primitive qiymatga aylanadi?",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "const narx = {",
        "note": "narx obyektini yaratish boshlandi."
      },
      {
        "code": "  valueOf() { return 10; },",
        "note": "valueOf keyin chaqirilsa 10 qaytaradi."
      },
      {
        "code": "  toString() { return \"narx\"; }",
        "note": "toString keyin chaqirilsa narx matnini qaytaradi."
      },
      {
        "code": "};",
        "note": "Obyekt yaratildi; metodlar hali ishlamadi."
      },
      {
        "code": "console.log(narx + 2);",
        "note": "Default fallback valueOf → 10; 10+2 → 12."
      },
      {
        "code": "console.log(String(narx));",
        "note": "String hint da toString → narx matni."
      }
    ],
    "takeaway": "Avval ToPrimitive yo‘lini, keyin operator qoidasini kuzating. Symbol.toPrimitive bor bo‘lsa birinchi shu ishlaydi. Fallback tartibi hint ga bog‘liq; + string bilan birlashtirishi mumkin."
  },
  {
    "id": "lab-debugger-code-reading",
    "title": "Debugger: JavaScript kodini amalda kuzatish",
    "hint": "Avval har bir satrning vazifasini ayting. Keyin izohlar bilan solishtiring.",
    "lines": [
      {
        "code": "function ikki(n) {",
        "note": "ikki funksiyasi yaratildi."
      },
      {
        "code": "  const natija = n * 2;",
        "note": "Chaqirilganda n * 2 natija ga yoziladi; bu qatordan oldin natija hali initialized emas."
      },
      {
        "code": "  return natija;",
        "note": "Mahalliy natija chaqiruvchiga qaytariladi."
      },
      {
        "code": "}",
        "note": "ikki tanasi tugadi."
      },
      {
        "code": "const kirish = 3;",
        "note": "kirish ga 3 yozildi."
      },
      {
        "code": "debugger;",
        "note": "DevTools ochiq va pauzalar faol bo‘lsa shu yerda to‘xtab tekshiring."
      },
      {
        "code": "const javob = ikki(kirish);",
        "note": "ikki(3) chaqiriladi, 6 qaytgach javob ga yoziladi."
      },
      {
        "code": "console.log(javob);",
        "note": "Konsolda 6; bu satrgacha log bajarilmagan edi."
      }
    ],
    "takeaway": "Taxmin → breakpoint → Scope/Call Stack → bitta qadam → yangi qiymat. Natijani ko‘rish bilan cheklanmang: birinchi noto‘g‘ri qiymat qayerda paydo bo‘lganini aniqlang."
  },
  {
    "id": "lab-core-event-loop-deep",
    "title": "Event Loop: microtask va macrotask navbati",
    "hint": "Har bir satrning qaysi navbatga (Stack, Microtask, Macrotask) tushishini ayting.",
    "lines": [
      {
        "code": "console.log('1');",
        "note": "Sinxron: darhol Stackda bajariladi va 1 chiqadi."
      },
      {
        "code": "setTimeout(() => console.log('2'), 0);",
        "note": "Macrotask Queue ga callback yuboriladi."
      },
      {
        "code": "Promise.resolve().then(() => console.log('3'));",
        "note": "Microtask Queue ga callback yoziladi."
      },
      {
        "code": "console.log('4');",
        "note": "Sinxron: darhol 4 chiqadi. Stack bo‘shadi."
      }
    ],
    "takeaway": "Sinxron kod tugagach, avval hamma microtasklar, keyin macrotasklar bajariladi."
  },
  {
    "id": "lab-core-hoisting-tdz-deep",
    "title": "Hoisting va TDZ o‘lik zonasi",
    "hint": "var ning undefined bo‘lishi va let ning xato berishini solishtiring.",
    "lines": [
      {
        "code": "console.log(a);",
        "note": "var ko‘tarilgan, undefined ko‘rinadi."
      },
      {
        "code": "var a = 5;",
        "note": "a ga 5 yozildi."
      },
      {
        "code": "console.log(a);",
        "note": "5 chiqadi."
      }
    ],
    "takeaway": "var o‘zgaruvchisi ko‘tarilib undefined bo‘ladi; let esa TDZ da qoladi."
  },
  {
    "id": "lab-core-scope-closure-loops",
    "title": "Sikllarda var va let closure'i",
    "hint": "let har iteratsiyada yangi o‘zgaruvchi yaratishini kuzating.",
    "lines": [
      {
        "code": "const natijalar = [];",
        "note": "Bo‘sh massiv yaratildi."
      },
      {
        "code": "for (let i = 0; i < 3; i++) {",
        "note": "let har bir aylanishda alohida i bog‘laydi."
      },
      {
        "code": "  natijalar.push(() => i);",
        "note": "Callback shu iteratsiyadagi shaxsiy i ni eslaydi."
      },
      {
        "code": "}",
        "note": "Sikl tugadi."
      },
      {
        "code": "console.log(natijalar.map(fn => fn()));",
        "note": "Har bir funksiya o‘z qiymatini qaytaradi: [0, 1, 2]."
      }
    ],
    "takeaway": "Sikllarda let per-iteration binding yaratadi, var esa bitta umumiy xotirada qoladi."
  },
  {
    "id": "lab-core-this-arrow-deep",
    "title": "this ning 4 qoidasi va Arrow function",
    "hint": "Metodni obyektdan uzganda this yo‘qolishini ko‘ring.",
    "lines": [
      {
        "code": "const user = {",
        "note": "user obyekti yaratildi."
      },
      {
        "code": "  ism: 'Ali',",
        "note": "ism xususiyati."
      },
      {
        "code": "  salom() { return this.ism; }",
        "note": "Metod: this chaqiruvchiga bog‘liq."
      },
      {
        "code": "};",
        "note": "Obyekt yakunlandi."
      },
      {
        "code": "const f = user.salom;",
        "note": "Metod o‘zgaruvchiga olindi: implicit binding yo‘qoldi."
      },
      {
        "code": "console.log(user.salom());",
        "note": "user orqali chaqirildi: Ali."
      },
      {
        "code": "console.log(typeof f());",
        "note": "Mustaqil chaqirildi: this undefined, qaytgani undefined."
      }
    ],
    "takeaway": "Metod obyektdan uzilganda this yo‘qoladi. Arrow funksiya esa leksik ota this ni oladi."
  },
  {
    "id": "lab-core-type-coercion-deep",
    "title": "Type Coercion va taqqoslash",
    "hint": "+ va - operatorlarining turlar bilan ishlashini solishtiring.",
    "lines": [
      {
        "code": "console.log('5' + 2);",
        "note": "String konkatenatsiya: 52."
      },
      {
        "code": "console.log('5' - 2);",
        "note": "Sonli ayirish: '5' songa aylanadi va 3 beradi."
      },
      {
        "code": "console.log(true + false);",
        "note": "Boolean songa aylanadi: 1 + 0 = 1."
      }
    ],
    "takeaway": "+ matnga birlashtiradi; -, *, / har doim songa aylantiradi."
  },
  {
    "id": "lab-core-pass-by-ref-deep",
    "title": "Pass by Value vs Reference",
    "hint": "Primitiv nusxasi va obyekt reference nusxasi farqini ko‘ring.",
    "lines": [
      {
        "code": "let x = 10; let y = x; y = 20;",
        "note": "Primitiv nusxalandi, x o‘zgarmaydi (10)."
      },
      {
        "code": "const obj1 = { ball: 50 };",
        "note": "Obyekt yaratildi."
      },
      {
        "code": "const obj2 = obj1;",
        "note": "Faqat manzil nusxalandi."
      },
      {
        "code": "obj2.ball = 100;",
        "note": "Ayni bitta obyekt mutatsiya qilindi."
      },
      {
        "code": "console.log(x, obj1.ball);",
        "note": "x = 10, obj1.ball = 100."
      }
    ],
    "takeaway": "Primitivlar qiymati nusxalanadi, obyektlar bitta xotira manziliga bog‘lanadi."
  }
];

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
  },
  {
    "title": "11-bosqich: JS core — kodni tushunish",
    "desc": "Qiymat, nom, chaqirish va bajarilish tartibini satrma-satr kuzatish. Asosiy darslardan keyin shu yerda bilimni mustahkamlang.",
    "project": "15–25 qatorli JavaScript kodni tanlang. Natija, o‘zgaruvchi qiymatlari va chaqirishlar jadvalini tuzing, debugger bilan tekshiring va bir xatoni tuzating.",
    "ids": [
      "expressions-statements",
      "execution-context-stack",
      "lexical-environment",
      "evaluation-order",
      "functions-as-values",
      "strict-mode-asi",
      "object-to-primitive",
      "debugger-code-reading"
    ]
  },
  {
    "title": "12-bosqich: Intervyu tuzoqlari: 6 Core Ustun",
    "desc": "Event Loop, TDZ, Closure sikllari, this, Coercion va Reference xotira modellari bo‘yicha intervyuda eng ko‘p tushadigan holatlar.",
    "project": "6 ta core ustun bo‘yicha kod tahlili va intervyu testlarini 100% ga o‘zlashtirish.",
    "ids": [
      "core-event-loop-deep",
      "core-hoisting-tdz-deep",
      "core-scope-closure-loops",
      "core-this-arrow-deep",
      "core-type-coercion-deep",
      "core-pass-by-ref-deep"
    ]
  },
  {
    "title": "13-bosqich: Zamonaviy va Chuqur MDN Standartlari",
    "desc": "MDN Guide bo‘yicha Prototip zanjiri, Mark-and-sweep va WeakRef, TypedArray va Binar xotira, Explicit Resource Management va Intl standartlari.",
    "project": "Chuqurlashtirilgan MDN standartlari bo‘yicha kod tahlili va interaktiv bilimlarni mustahkamlash.",
    "ids": [
      "mdn-prototypes-deep",
      "mdn-memory-management",
      "mdn-typed-arrays",
      "mdn-resource-management",
      "mdn-intl",
      "mdn-operators-deep",
      "mdn-statements-declarations",
      "mdn-functions-deep",
      "mdn-web-workers-atomics",
      "mdn-structured-clone",
      "mdn-equality-sameness"
    ]
  }
];
