# JS daftar — Intervyuga tayyorgarlik

JavaScript intervyusiga 0 dan tayyorlaydigan o‘quv sayti. Asosiy maqsad: kodni ko‘rib, nima qilishini tushunish va A/B/C/D variantlar ichidan to‘g‘risini tanlash.

Ochish: `index.html` faylini brauzerda oching. O‘rnatish talab qilinmaydi.

## Bo‘limlar

- **Darslar** — 52 dars: tushuncha, kod misoli, natija, xulosa va mashq. Hamma narsa 0 dan tushuntirilgan.
- **Intervyu testlari** — 56 ta A/B/C/D savol; javobdan keyin tushuntirish va kodni qadam-baqadam tahlil qilish.
- **Kod o‘qish laboratoriyasi** — 10 ta misol, kod satr-ma-satr izohlangan.
- **Yo‘l xaritasi** — 16 bosqich va o‘zlashtirish belgilari.

Darslar qamrovi: o‘zgaruvchilar, scope, hoisting, turlar, funksiyalar, `this`, array metodlari, Promise/async, event loop, DOM, sonlar, stringlar, obyektlar, JSON, xatolar, modullar, closure, prototype, class, callback, iterator, Map/Set, regex, Date, Fetch, eventlar, storage, Web API, Proxy, rekursiya, debounce/throttle, currying, memoization, Symbol/BigInt, WeakMap, descriptorlar, dynamic import, Promise kombinatorlari, Node.js, design patternlar va testing.

## Fayllar

Tuzilma ataylab oddiy: barcha o‘quv ma’lumotlari bitta faylda, interfeys bitta faylda.

- `index.html` — sahifa tuzilmasi.
- `style.css` — moslashuvchan dizayn.
- `data.js` — **barcha ma’lumotlar bitta faylda**: 52 dars, 56 test, 10 kod labi. Darslar 0 dan oxirigacha tartib bilan joylashgan.
- `scope-demo.js`, `truthy-demo.js` — interaktiv demolar.
- `app.js` — sahifalar, test mexanikasi, yo‘l xaritasi va navigatsiya.

## Ma’lumot qo‘shish

`data.js` faylida uchta massiv bor:

- `window.lessons` — darslar. Yangi dars qo‘shganda uning `id` sini `app.js` dagi yo‘l xaritasi (`groups`) ro‘yxatiga ham qo‘shing.
- `window.interviewQuestions` — testlar. `lessonId` darsning `id` siga mos bo‘lishi shart.
- `window.codeLabs` — kod o‘qish misollari.

Har bir massiv element qo‘shganda interfeys ularni avtomatik ko‘rsatadi.
