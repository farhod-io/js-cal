# JS daftar — Intervyuga tayyorgarlik

JavaScript intervyusiga 0 dan tayyorlaydigan o‘quv sayti. Asosiy maqsad: kodni ko‘rib, nima qilishini tushunish va A/B/C/D variantlar ichidan to‘g‘risini tanlash.

Ochish: `index.html` faylini brauzerda oching. O‘rnatish talab qilinmaydi.

## Bo‘limlar

- **Darslar** — 76 dars: tushuncha, kod misoli, natija, xulosa va mashq. Hamma narsa 0 dan tushuntirilgan. Har darsda **"O‘qilgan deb belgilash"** tugmasi bor.
- **🧠 AI test** — faqat o‘qilgan deb belgilagan darslaring bo‘yicha savol beradi. Xato javob bergan darslardan ko‘proq savol keladi (adaptiv). Shuningdek Gemini yoki DeepSeek API kaliti bilan o‘qilgan darslardan 1, 5 yoki 10 ta yangi savol yaratish mumkin. OpenAI-mos xizmatlar ham saqlangan.
- **Intervyu testlari** — 106 ta A/B/C/D savol (barcha 76 dars to‘liq qamrab olingan, mavzu va daraja filtri bilan); javobdan keyin tushuntirish va kodni qadam-baqadam tahlil qilish.
- **Kod o‘qish laboratoriyasi** — 10 ta misol, kod satr-ma-satr izohlangan.
- **Yo‘l xaritasi** — 10 bosqich va o‘zlashtirish belgilari.

## Saqlanish (localStorage)

Barcha natijalar brauzerning `localStorage` idasida `jsdaftar_progress_v1` kaliti ostida saqlanadi:

- **O‘qilgan darslar** — darsni belgilaganda yashil belgi paydo bo‘ladi va sahifa qayta yuklanganda ham saqlanadi.
- **Test javoblari** — har bir savolga berilgan javob va ko‘rsatilgan tushuntirish.
- **AI sozlamalari** — tanlangan xizmat va har bir xizmat uchun alohida model hamda API kalit (faqat shu brauzerda saqlanadi). Gemini kaliti Google API’ga, DeepSeek kaliti DeepSeek API’ga yuboriladi.

AI kalit kiritilmasa ham adaptiv test ishlayveradi — u saytning o‘z 66 savolidan, faqat o‘qigan darslaring bo‘yicha tanlaydi.

Darslar qamrovi: o‘zgaruvchilar, scope, hoisting, turlar, funksiyalar, `this`, array metodlari, Promise/async, event loop, DOM, sonlar, stringlar, obyektlar, JSON, xatolar, modullar, closure, prototype, class, callback, iterator, Map/Set, regex, Date, Fetch, eventlar, storage, Web API, Proxy, rekursiya, debounce/throttle, currying, memoization, Symbol/BigInt, WeakMap, descriptorlar, dynamic import, Promise kombinatorlari, Node.js, design patternlar va testing.

## Progressive Web App (PWA) va oflayn ishlash

Sayt to‘liq **Progressive Web App (PWA)** standartiga moslashtirilgan:
- **Oflayn ishlash** — Service Worker (`sw.js`) barcha darslar, interfeys, testlar va laboratoriyalarni keshda saqlaydi. Internet bo‘lmaganda ham sayt to‘liq ishlaydi.
- **Ilova sifatida o‘rnatish** — Brauzerda (Chrome, Edge, Safari, Android va iOS) "Ilovani o‘rnatish" yoki "Bosh ekranga qo‘shish" tugmasi orqali mustaqil dastur ko‘rinishida o‘rnatish mumkin.
- **Manifest va ikonalar** — `manifest.webmanifest` va moslashuvchan (maskable) yuqori sifatli ikonalar bilan ta’minlangan.

## Fayllar

Tuzilma ataylab oddiy: barcha o‘quv ma’lumotlari bitta faylda, interfeys bitta faylda.

- `index.html` — sahifa tuzilmasi.
- `style.css` — moslashuvchan dizayn.
- `data.js` — **barcha ma’lumotlar bitta faylda**: 76 dars, 106 test, 24 kod labi. Darslar 0 dan oxirigacha tartib bilan joylashgan.
- `scope-demo.js`, `truthy-demo.js` — interaktiv demolar.
- `app.js` — sahifalar, test mexanikasi, yo‘l xaritasi, localStorage progressi, adaptiv va AI test, navigatsiya.
- `manifest.webmanifest` — PWA ilova konfiguratsiyasi va o‘rnatish parametrlari.
- `sw.js` — Service Worker oflayn kesh strategiyasi.
- `icons/` — PWA va brauzer ikonkalari (SVG, PNG, maskable va Apple touch).

## Ma’lumot qo‘shish

`data.js` faylida uchta massiv bor:

- `window.lessons` — darslar. Yangi dars qo‘shganda uning `id` sini `app.js` dagi yo‘l xaritasi (`window.lessonStages`) ro‘yxatiga ham qo‘shing.
- `window.interviewQuestions` — testlar. `lessonId` darsning `id` siga mos bo‘lishi shart.
- `window.codeLabs` — kod o‘qish misollari.

Har bir massiv element qo‘shganda interfeys ularni avtomatik ko‘rsatadi.

## Gemini yoki DeepSeek bilan AI test

1. Darsni o‘qib, **O‘qilgan deb belgilash** tugmasini bosing. Belgilar `localStorage` da saqlanadi.
2. **AI test** bo‘limida Gemini yoki DeepSeek’ni tanlab, shu xizmatning API kalitini kiriting.
3. Barcha o‘qilgan darslar yoki ulardan bittasini va 1, 5 yoki 10 ta savolni tanlang.
4. **Yangi test yaratish** tugmasi sozlamalarni saqlaydi va faqat tanlangan o‘qilgan darslarning materiallarini yuboradi.
5. AI qaytargan savollarning dars ID’lari, variantlari, javobi va tushuntirishlari tekshiriladi. O‘qilmagan dars ID’si yoki noto‘g‘ri format qaytsa, test ochilmaydi.

Kalitlar xizmatlar orasida alohida saqlanadi; **Saqlangan kalitni o‘chirish** tanlangan xizmat kalitini o‘chiradi. Eski OpenAI-mos sozlamalar saqlanib qoladi. Model nomini hisobingizda mavjud modelga almashtirishingiz mumkin. Kalitsiz mashq qilish ham ishlaydi.

API formatlari: [Gemini generateContent](https://ai.google.dev/api/generate-content), [DeepSeek JSON Output](https://api-docs.deepseek.com/guides/json_mode/).

## Mavzularni ketma-ket o‘rganish

Har bir mavzu alohida qadamlar bilan ochiladi: tanishish, kichik bo‘limlar (tushuntirish va kod), mavjud interaktiv mashqlar, xulosa va mustaqil mashq. **Keyingi qadam** / **Oldingi qadam** bilan yurish yoki **Mavzu rejasi** orqali kerakli bo‘limni ochish mumkin. Oxirgi ochilgan qadam `lessonSteps` sifatida mavjud progress ichida saqlanadi. Yakuniy **O‘qilgan deb belgilash va keyingi mavzu** tugmasi mavzuni AI testga qo‘shadi va navbatdagisini ochadi. Qadamlar orasida yurishning o‘zi mavzuni o‘qilgan deb belgilamaydi.

## 10 bosqichli o‘quv tartibi

1. Boshlash — 11 mavzu.
2. Ma’lumot tuzilmalari — 7 mavzu.
3. Funksiyalar va scope — 8 mavzu.
4. Xatolar va modullar — 4 mavzu.
5. Brauzer va DOM — 7 mavzu.
6. Asinxron JavaScript — 7 mavzu.
7. OOP — 4 mavzu.
8. Chuqur mavzular — 7 mavzu.
9. Node.js — 4 mavzu.
10. Patternlar va test — 3 mavzu.

`window.lessonStages` tartibi sidebar, yo‘l xaritasi va oldingi/keyingi mavzu tugmalari uchun yagona manba. Mavjud mavzu ID’lari o‘zgarmagan, shuning uchun o‘qilgan belgilar va test natijalari saqlanadi. Yangi 10 mavzuning har birida tushuntirish, kodlar, mashq, qo‘shimcha manbalar va kamida bitta tayyor test bor. Har bosqich uchun mini-loyiha taklifi yo‘l xaritasida ko‘rsatiladi.

## 7–62-darslarning kengaytirilgan mazmuni

Qolgan 56 mavzuda boshlang‘ich izoh, satrma-satr tahlilli mustaqil misol, asosiy qoida va istisnolar, ko‘p uchraydigan xatolar, kichik amaliy loyiha va javobi ochiladigan mashq mavjud. Ular to‘liq matn bilan ochiladi; **Qadam-baqadam o‘rganish** orqali bitta bo‘limni alohida o‘qish ham mumkin. Eski mavzu ID’lari saqlangan.

Misolning muhiti matnda ko‘rsatiladi: brauzer DOM, Node.js, ES modul yoki terminal. Modul namunalari nomi ko‘rsatilgan alohida fayllarga yoziladi. DOM misollarini Node.js konsolida bajarish mo‘ljallanmagan. Terminal buyruqlarining natijasi loyiha holatiga bog‘liq; mashq javoblari ularning vazifasini tushuntiradi.

Darslardagi yangi mustaqil JavaScript/Node misollarining kutilgan natijalari `expectedOutput`, yakuniy mashqlarniki `exerciseExpected` bilan tekshiriladi. Bu tekshiruv ma’lumotlari foydalanuvchi interfeysida ko‘rsatilmaydi. Tekshirish: `node --test tests/*.test.cjs`.

## Har bir darsdagi o‘rganish yo‘li

70 mavzuning barchasida aniq maqsad, faqat oldingi darslarga havolali tayyorgarlik va oddiy tildagi atamalar lug‘ati bor. Keyinroq o‘tiladigan tushuncha zarur joylarda qisqa kirish misoli beriladi: tsikllardan oldin massiv, map/filter dan oldin callback va return, async iteratsiyadan oldin generator. DOM uchun HTML tayyorgarligi tanlash misollaridan oldin keladi.

Yakuniy mashqlar uch bosqichli: natijani taxmin qilish, xato kodni tuzatish va mezonlari berilgan mustaqil loyiha. Javoblar va yordam dastlab yopiq. Tuzatish mashqlari va tayyorgarlik misollarining natijalari ham avtomatik tekshiriladi.

## 11-bosqich: JS core — kodni tushunish

Asosiy 62 mavzuning tartibi saqlanib, 8 ta mustaqil dars qo‘shildi: expression/statement, execution context/call stack, lexical environment, ifoda bajarilishi/short-circuit, funksiya qiymat sifatida, strict mode/ASI, object-to-primitive va debugger. Har birida bajarilish jadvali, izohli misollar, uch darajali mashq, tayyor test va Kod o‘qish lab uchun satrli izohlar mavjud. Sidebar, yo‘l xaritasi va oldingi/keyingi navigatsiyada 70 dars bor.

Kodni o‘qish usuli: kirish qiymati/turi → nomni qidirish → chaqirish → qaytgan qiymat → keyingi qadam. Darslardagi misol va mashqlarni `tests/core-reading.test.cjs` ham bajarib tekshiradi. Debugger mashqi DevTools ochiq holda foydalanuvchi tomonidan bajariladi; saytdagi kod bloklari avtomatik ishlamaydi.
