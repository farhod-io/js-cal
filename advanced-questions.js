// Qo'shimcha 10 test — advanced mavzular bo'yicha (jami 50).
window.interviewQuestions.push(
  {
    id: 'q-recursion-1', lessonId: 'recursion', topic: 'Rekursiya', level: 'o\'rta',
    question: 'Bu funksiya nima chiqaradi?',
    code: 'function f(n) {\n  if (n === 0) return 0;\n  return n + f(n - 1);\n}\nconsole.log(f(4));',
    options: ['4', '10', '0', 'RangeError'],
    answer: 1,
    explain: '4 + 3 + 2 + 1 + 0 = 10. Har qadam n kamayadi, n=0 da bazis ishlaydi.',
    walkthrough: ['f(4) → 4 + f(3).', 'f(3) → 3 + f(2).', 'f(2) → 2 + f(1), f(1) → 1 + f(0).', 'f(0) → 0; jami 10.']
  },
  {
    id: 'q-debounce-1', lessonId: 'debounce-throttle', topic: 'Debounce / Throttle', level: 'o\'rta',
    question: 'Qidirish maydoni uchun qaysi usul to‘g‘ri?',
    options: ['Throttle', 'Debounce', 'Ikkalasi ham bir xil', 'Hech biri'],
    answer: 1,
    explain: 'Debounce foydalanuvchi yozishni to‘xtatgandan keyin bajariladi: faqat oxirgi matn bo‘yicha bitta so‘rov yuboriladi.',
    walkthrough: ['Har harfda so‘rov yuborish samarasiz.', 'Debounce oldingi timerni bekor qilib, yangisini qo‘yadi.', 'Faqat to‘xtagandan keyin bajariladi.', 'Scroll uchun esa throttle ishlatiladi.']
  },
  {
    id: 'q-debounce-2', lessonId: 'debounce-throttle', topic: 'Debounce / Throttle', level: 'qiyin',
    question: 'Debounce ichida nima uchun clearTimeout kerak?',
    options: ['Timer tezlashtirish uchun', 'Oldingi rejalashtirilgan chaqiruvni bekor qilish uchun', 'Xatolarni tutish uchun', 'Bu shart emas'],
    answer: 1,
    explain: 'Har yangi chaqiruvda oldingi timer bekor qilinadi. Aks holda har bir harf uchun alohida so‘rov yuborilar edi.',
    walkthrough: ['Har chaqiruvda yangi setTimeout qo‘yiladi.', 'clearTimeout oldingisini o‘chiradi.', 'Faqat oxirgi timer tirik qoladi.', 'Natija: bitta chaqiruv.']
  },
  {
    id: 'q-currying-1', lessonId: 'currying', topic: 'Currying', level: 'o\'rta',
    question: 'Natija nima?',
    code: 'const f = a => b => a + b;\nconsole.log(f(2)(3));',
    options: ['5', 'NaN', 'function', 'Xato'],
    answer: 0,
    explain: 'f(2) a=2 ni saqlab, b ni oladigan funksiyani qaytaradi. f(2)(3) = 2+3 = 5.',
    walkthrough: ['f(2) → a = 2, keyingi funksiya qaytarildi.', 'Unga 3 berildi: b = 3.', '2 + 3 = 5.', 'Bu currying shakli.']
  },
  {
    id: 'q-memo-1', lessonId: 'memoization', topic: 'Memoization', level: 'o\'rta',
    question: 'Memoization qachon xavfsiz?',
    options: ['Har qanday funksiyada', 'Faqat sof (pure) funksiyalarda', 'Faqat async funksiyalarda', 'Faqat rekursiv funksiyalarda'],
    answer: 1,
    explain: 'Bir xil argumentga doim bir xil natija qaytaradigan sof funksiyalarni keshlash xavfsiz. Date.now() kabi funksiyalarni keshlash noto‘g‘ri.',
    walkthrough: ['Kesh argument bo‘yicha natijani saqlaydi.', 'Agar natija vaqt yoki holatga bog‘liq bo‘lsa, eski natija qaytariladi.', 'Sof funksiyada bunday muammo yo‘q.', 'To‘g‘ri javob: faqat sof funksiyalar.']
  },
  {
    id: 'q-symbol-1', lessonId: 'symbol-bigint', topic: 'Symbol / BigInt', level: 'o\'rta',
    question: 'Natijalar qanday?',
    code: 'console.log(Symbol("a") === Symbol("a"));\nconsole.log(1n === 1);\nconsole.log(1n == 1);',
    options: ['false, false, true', 'true, false, true', 'false, true, true', 'false, false, false'],
    answer: 0,
    explain: 'Har Symbol noyob. 1n va 1 turlari farq qiladi (=== false), lekin == da moslashtiriladi (true).',
    walkthrough: ['Symbol("a") ikki xil obyekt emas, ikki xil noyob qiymat → false.', '1n === 1 → tur farqi → false.', '1n == 1 → qiymat teng → true.', 'To‘g‘ri javob: false, false, true.']
  },
  {
    id: 'q-weakmap-1', lessonId: 'weakmap-weakset', topic: 'WeakMap', level: 'qiyin',
    question: 'WeakMap ning asosiy xususiyati nima?',
    options: ['Kalit ixtiyoriy tur bo‘ladi', 'size bor va iteratsiya qilinadi', 'Obyekt yo‘qolsa, yozuv avtomatik o‘chadi', 'Faqat string kalit ishlatadi'],
    answer: 2,
    explain: 'WeakMap obyektga zaif bog‘lanish qiladi: obyekt boshqa joyda ishlatilmasa, chiqindi yig‘uvchi uni va yozuvni o‘chiradi.',
    walkthrough: ['Kalit faqat obyekt bo‘ladi.', 'size va iteratsiya yo‘q.', 'Zaif bog‘lanish xotira sizishining oldini oladi.', 'To‘g‘ri javob: uchinchi variant.']
  },
  {
    id: 'q-descriptor-1', lessonId: 'object-descriptors', topic: 'Descriptor', level: 'o\'rta',
    question: 'Object.freeze nima qiladi?',
    options: ['Faqat yangi kalit qo‘shishni taqiqlaydi', 'Barcha xususiyatlarni o‘zgartirish va o‘chirishni taqiqlaydi', 'Chuqur nusxa yaratadi', 'Faqat o‘qish uchun yangi obyekt qaytaradi'],
    answer: 1,
    explain: 'freeze mavjud xususiyatlarni yozish va o‘chirishdan qulflaydi, lekin yuzaki: ichki obyektlar o‘zgarishi mumkin.',
    walkthrough: ['freeze obyektning o‘z xususiyatlarini qulflaydi.', 'Yangi qo‘shish ham, o‘chirish ham, o‘zgartirish ham ishlamaydi.', 'Lekin ichki obyektlar o‘zgaradi.', 'To‘g‘ri javob: ikkinchi variant.']
  },
  {
    id: 'q-combinators-1', lessonId: 'promise-combinators', topic: 'Promise kombinatorlari', level: 'qiyin',
    question: 'Qaysi kombinator hamma natijalarni, shu jumladan xatolarni ham kutadi?',
    options: ['Promise.all', 'Promise.race', 'Promise.allSettled', 'Promise.any'],
    answer: 2,
    explain: 'Promise.allSettled barcha Promise larning bajarilishini kutadi va har birining holatini qaytaradi, xatoda rad etilmaydi.',
    walkthrough: ['all bitta xatoda rad etiladi.', 'race birinchisi tugaganda tugaydi.', 'any birinchi muvaffaqiyatni oladi.', 'allSettled hammasini kutib holatlarni beradi.']
  },
  {
    id: 'q-combinators-2', lessonId: 'promise-combinators', topic: 'Promise kombinatorlari', level: 'o\'rta',
    question: 'Timeout uchun qaysi kombinator qulay?',
    options: ['Promise.all', 'Promise.race', 'Promise.allSettled', 'Promise.any'],
    answer: 1,
    explain: 'Promise.race birinchisi tugagan natijani qaytaradi. Vaqt tugashini rad etuvchi Promise bilan birga berilsa, so‘rov uzoq kutsa xato chiqadi.',
    walkthrough: ['Timeout Promise ma’lum vaqtdan keyin rad etiladi.', 'race ikki Promise ni solishtiradi.', 'Qaysi birinchi tugasa, shuni qaytaradi.', 'Shuning uchun timeout ishlaydi.']
  }
);
