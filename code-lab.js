// Kod o'qish laboratoriyasi: har bir misol satr-ma-satr izohlangan.
// Maqsad: kod ko'rganda "bu nima qilyapti?" degan savolga tez javob berish ko'nikmasi.
window.codeLabs = [
  {
    id: 'lab-1',
    title: '1-misol: qiymat o\'zgaradimi?',
    hint: 'Avval o\'zgaruvchining turiga (primitive yoki obyekt) qara.',
    lines: [
      { code: 'let son = 1;', note: 'Primitive qiymat. son = 2 qilsak yangi qiymat yoziladi.' },
      { code: 'const obyekt = { x: 1 };', note: 'const faqat biriktirishni qulflaydi, ichi ochiq.' },
      { code: 'obyekt.x = 2;', note: 'Bu ishlaydi: obyekt ichi o\'zgaradi.' },
      { code: '// obyekt = { x: 3 };', note: 'Bu satr ochilsa TypeError: yangi obyekt biriktirib bo\'lmaydi.' },
      { code: 'console.log(son, obyekt.x);', note: 'Natija: 1 2' }
    ],
    takeaway: 'O\'qish qoidasi: const ko\'rsang "ichi o\'zgarishi mumkinmi?" deb so\'ra. Primitive bo\'lsa yo\'q, obyekt bo\'lsa ha.'
  },
  {
    id: 'lab-2',
    title: '2-misol: scope chain qaerda to\'xtaydi?',
    hint: 'Har bir console.log uchun "bu nom shu blockdami?" deb boshla.',
    lines: [
      { code: 'const ism = "Global";', note: '1-qavat: global nom.' },
      { code: 'function salom() {', note: 'Funksiya scope boshlanadi.' },
      { code: '  const ism = "Mahalliy";', note: '2-qavat: ichki ism tashqaridagini soyada qoldiradi.' },
      { code: '  if (true) {', note: '3-qavat: block boshlanadi, lekin ichida ism yo\'q.' },
      { code: '    console.log(ism);', note: 'Qidiruv: block → funksiya → topildi. Natija: Mahalliy' },
      { code: '  }', note: 'Block tugadi.' },
      { code: '}', note: 'Funksiya tugadi.' },
      { code: 'salom();', note: 'Chaqirish natijasi: Mahalliy' }
    ],
    takeaway: 'Nom qidirish doim ichkaridan tashqariga. Birinchi topilgan nom yutadi (shadowing).'
  },
  {
    id: 'lab-3',
    title: '3-misol: == bilan tuzoq',
    hint: 'Har bir taqqoslashda turlarni yozib chiq, keyin coercion qoidasini qo\'llan.',
    lines: [
      { code: 'console.log("5" == 5);', note: 'string → number: 5 == 5 → true.' },
      { code: 'console.log("5" === 5);', note: 'Tur farqi → false. === hech qachon o\'zgartirmaydi.' },
      { code: 'console.log([] == false);', note: '[] → "" → 0; false → 0 → true. Kutilmagan, lekin qoida shunday.' },
      { code: 'console.log(null == undefined);', note: 'Faqat bu ikki bir-biriga == teng → true.' },
      { code: 'console.log(NaN === NaN);', note: 'NaN hech narsaga teng emas, hatto o\'ziga ham → false.' }
    ],
    takeaway: 'Intervyuda === ishlat. == so\'ralsa, avval tur o\'zgarishini og\'zaki aytib ber.'
  },
  {
    id: 'lab-4',
    title: '4-misol: TDZ qayerda boshlanadi?',
    hint: 'let/const bo\'lgan blockning boshidan deklaratsiyagacha bo\'lgan oraliqni belgila.',
    lines: [
      { code: 'let a = 1;', note: 'Tashqi a tayyor.' },
      { code: '{', note: 'Block boshlanadi. Ichkarida let a borligi uchun yangi a shu yerdan "band".' },
      { code: '  // console.log(a);', note: 'Agar ochilsa: ReferenceError. Tashqi 1 o\'qilmaydi, ichki a hali TDZ da.' },
      { code: '  let a = 2;', note: 'TDZ tugadi, ichki a = 2.' },
      { code: '  console.log(a);', note: 'Natija: 2' },
      { code: '}', note: 'Block tugadi.' },
      { code: 'console.log(a);', note: 'Tashqi a yana ko\'rinadi. Natija: 1' }
    ],
    takeaway: 'TDZ block boshidan boshlanadi, satrdan emas. Ichki nom bo\'lsa, tashqariga qidirilmaydi.'
  },
  {
    id: 'lab-5',
    title: '5-misol: reference bilan nusxa farqi',
    hint: 'Funksiyaga obyekt berilganda nima nusxalanishini esla.',
    lines: [
      { code: 'function o\'zgartir(obj) {', note: 'obj parametr — asl obyektga ishora qiymatining nusxasi.' },
      { code: '  obj.x = 99;', note: 'Asl obyekt ichi o\'zgaradi, chunki bir xil obyekt.' },
      { code: '  obj = { x: 0 };', note: 'Faqat lokal ishora yangi obyektga buriladi, asl obyektga ta\'sir qilmaydi.' },
      { code: '}', note: '' },
      { code: 'const user = { x: 1 };', note: 'Asl obyekt.' },
      { code: 'o\'zgartir(user);', note: 'Chaqirish.' },
      { code: 'console.log(user.x);', note: 'Natija: 99 (0 emas).' }
    ],
    takeaway: 'Funksiyaga obyekt berganda ichki o\'zgarish tashqariga ko\'rinadi; parametrni qayta biriktirish esa ko\'rinmaydi.'
  }
];
