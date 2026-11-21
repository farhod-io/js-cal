# JS daftar — Intervyuga tayyorgarlik

JavaScript intervyusiga 0 dan tayyorlaydigan o‘quv sayti. Asosiy maqsad: kodni ko‘rib, nima qilishini tushunish va A/B/C/D variantlar ichidan to‘g‘risini tanlash.

Ochish: `index.html` faylini brauzerda oching. O‘rnatish talab qilinmaydi.

## Bo‘limlar

- **Darslar** — 52 dars: tushuncha, kod misoli, natija, xulosa va mashq. Hamma narsa 0 dan tushuntirilgan. Har darsda **"O‘qilgan deb belgilash"** tugmasi bor.
- **🧠 AI test** — faqat o‘qilgan deb belgilagan darslaring bo‘yicha savol beradi. Xato javob bergan darslardan ko‘proq savol keladi (adaptiv). Shuningdek Gemini yoki DeepSeek API kaliti bilan o‘qilgan darslardan 1, 5 yoki 10 ta yangi savol yaratish mumkin. OpenAI-mos xizmatlar ham saqlangan.
- **Intervyu testlari** — 56 ta A/B/C/D savol; javobdan keyin tushuntirish va kodni qadam-baqadam tahlil qilish.
- **Kod o‘qish laboratoriyasi** — 10 ta misol, kod satr-ma-satr izohlangan.
- **Yo‘l xaritasi** — 16 bosqich va o‘zlashtirish belgilari.

## Saqlanish (localStorage)

Barcha natijalar brauzerning `localStorage` idasida `jsdaftar_progress_v1` kaliti ostida saqlanadi:

- **O‘qilgan darslar** — darsni belgilaganda yashil belgi paydo bo‘ladi va sahifa qayta yuklanganda ham saqlanadi.
- **Test javoblari** — har bir savolga berilgan javob va ko‘rsatilgan tushuntirish.
- **AI sozlamalari** — tanlangan xizmat va har bir xizmat uchun alohida model hamda API kalit (faqat shu brauzerda saqlanadi). Gemini kaliti Google API’ga, DeepSeek kaliti DeepSeek API’ga yuboriladi.

AI kalit kiritilmasa ham adaptiv test ishlayveradi — u saytning o‘z 56 savolidan, faqat o‘qigan darslaring bo‘yicha tanlaydi.

Darslar qamrovi: o‘zgaruvchilar, scope, hoisting, turlar, funksiyalar, `this`, array metodlari, Promise/async, event loop, DOM, sonlar, stringlar, obyektlar, JSON, xatolar, modullar, closure, prototype, class, callback, iterator, Map/Set, regex, Date, Fetch, eventlar, storage, Web API, Proxy, rekursiya, debounce/throttle, currying, memoization, Symbol/BigInt, WeakMap, descriptorlar, dynamic import, Promise kombinatorlari, Node.js, design patternlar va testing.

## Fayllar

Tuzilma ataylab oddiy: barcha o‘quv ma’lumotlari bitta faylda, interfeys bitta faylda.

- `index.html` — sahifa tuzilmasi.
- `style.css` — moslashuvchan dizayn.
- `data.js` — **barcha ma’lumotlar bitta faylda**: 52 dars, 56 test, 10 kod labi. Darslar 0 dan oxirigacha tartib bilan joylashgan.
- `scope-demo.js`, `truthy-demo.js` — interaktiv demolar.
- `app.js` — sahifalar, test mexanikasi, yo‘l xaritasi, localStorage progressi, adaptiv va AI test, navigatsiya.

## Ma’lumot qo‘shish

`data.js` faylida uchta massiv bor:

- `window.lessons` — darslar. Yangi dars qo‘shganda uning `id` sini `app.js` dagi yo‘l xaritasi (`groups`) ro‘yxatiga ham qo‘shing.
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
