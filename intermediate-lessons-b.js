// JS INTERMEDIATE — 2-qism: Date, Fetch, event, storage, Web API, Proxy, ko'p mavzular.
window.lessons.push(
  {
    id: 'dates',
    title: 'Date va vaqt bilan ishlash: noldan',
    question: 'Date obyekti qanday yaratiladi? Timestamp, ISO va formatlash qanday ishlaydi?',
    explanation: 'Date — sana va vaqtni saqlaydigan obyekt. Ichida 1970-yil 1-yanvardan (Unix epoch) o‘tgan millisekundlar saqlanadi. Vaqt bilan ishlashda eng ko‘p xato — vaqt zonalari bilan bog‘liq. Kod o‘qiyotganda “bu mahalliy vaqtmi yoki UTCmi?” deb so‘ra.',
    sections: [
      {
        title: '1. Date yaratish',
        text: 'new Date() hozirgi vaqtni beradi. new Date("2026-11-21") satrdan, new Date(2026, 10, 21) esa yil/oy/kun beradi. Oylar 0 dan boshlanadi: 0 — yanvar, 10 — noyabr.',
        code: 'const hozir = new Date();\nconsole.log(hozir);\nconst sana = new Date("2026-11-21");\nconst sana2 = new Date(2026, 10, 21); // noyabr\nconsole.log(sana.getFullYear()); // 2026\nconsole.log(sana.getMonth()); // 10 (noyabr, 0 dan boshlanadi)'
      },
      {
        title: '2. Timestamp',
        text: 'Date.getTime() millisekundlarni qaytaradi. Date.now() ham hozirgi vaqtni millisekund sifatida beradi. Bu sonlar bilan vaqt farqini hisoblash qulay.',
        code: 'console.log(Date.now()); // masalan 1763700000000\nconst a = new Date("2026-01-01");\nconst b = new Date("2026-01-03");\nconsole.log((b - a) / (1000 * 60 * 60)); // 48 (soatlar)',
        note: 'Ikki Date ni ayirsang, millisekundlar farqi chiqadi: 2 kun = 172800000 ms.'
      },
      {
        title: '3. Mahalliy vaqt va UTC',
        text: 'getFullYear/getMonth/getDate mahalliy vaqt bo‘yicha, getUTCFullYear/getUTCMonth/getUTCDate esa UTC bo‘yicha qiymatlar beradi. "2026-11-21" satri UTC sifatida talqin qilinadi, shuning uchun mahalliy vaqtda boshqa kun bo‘lishi mumkin.',
        code: 'const d = new Date("2026-11-21");\nconsole.log(d.getUTCDate()); // 21\nconsole.log(d.getDate()); // sening zonangga qarab 20 yoki 21 bo\'lishi mumkin'
      },
      {
        title: '4. Formatlash',
        text: 'toISOString() standart ISO satr qaytaradi. toLocaleDateString() esa foydalanuvchi tiliga mos format beradi.',
        code: 'const d = new Date("2026-11-21T10:30:00Z");\nconsole.log(d.toISOString()); // 2026-11-21T10:30:00.000Z\nconsole.log(d.toLocaleDateString("uz-UZ")); // 21.11.2026 kabi'
      },
      {
        title: '5. O‘zgartirish',
        text: 'setFullYear, setMonth, setDate kabi metodlar obyektni o‘zgartiradi (mutating). Kun qo‘shish uchun avval nusxa olib, keyin o‘zgartirish yaxshi.',
        code: 'const d = new Date("2026-11-21");\nd.setDate(d.getDate() + 7);\nconsole.log(d.toISOString().slice(0, 10)); // 2026-11-28\n\nconst nusxa = new Date(d); // nusxa olish'
      },
      {
        title: '6. Amaliy: kunlar farqi',
        text: 'Ikki sana orasidagi kunlar sonini topish uchun millisekund farini bir kunlik millisekundga bo‘ling.',
        code: 'const kun = 24 * 60 * 60 * 1000;\nconst bosh = new Date("2026-01-01");\nconst oxir = new Date("2026-01-10");\nconsole.log((oxir - bosh) / kun); // 9'
      }
    ],
    takeaway: 'Date ichida millisekund saqlaydi (1970-yildan).\nOylar 0 dan boshlanadi: 10 — noyabr.\ngetTime()/Date.now() timestamp beradi; farini hisoblash qulay.\nMahalliy vaqt va UTC farqini bilish kerak.\ntoISOString() standart format beradi.\nset* metodlar obyektni o‘zgartiradi — nusxa olib ishlash yaxshi.',
    exercise: '1) new Date(2026, 0, 1) qaysi oy?\n2) Ikki Date ni ayirsak nima chiqadi?\n3) getDate va getUTCDate farqi nima?\n4) 2 kun necha millisekund?'
  },
  {
    id: 'fetch-api',
    title: 'Fetch API: noldan',
    question: 'fetch qanday ishlaydi? Response, json(), async/await va xatoliklar.',
    explanation: 'fetch — tarmoq orqali ma’lumot olish uchun zamonaviy API. U har doim Promise qaytaradi. Muhim: fetch faqat tarmoq xatosida rad etiladi, 404/500 statusda emas — ularni response.ok bilan tekshirish kerak.',
    sections: [
      {
        title: '1. Oddiy fetch',
        text: 'fetch(url) Promise qaytaradi. Birinchi .then Response obyektini beradi. response.json() ham Promise qaytaradi, shuning uchun ikkinchi .then kerak.',
        code: 'fetch("https://api.example.com/user")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(e => console.error("Xato:", e));'
      },
      {
        title: '2. async/await bilan',
        text: 'async funksiya ichida await bilan kutish o‘qish osonroq. try/catch xatolarni tutadi.',
        code: 'async function olish() {\n  try {\n    const response = await fetch("/api/user");\n    const data = await response.json();\n    console.log(data);\n  } catch (e) {\n    console.error("Xato:", e);\n  }\n}\nolish();'
      },
      {
        title: '3. Status tekshirish',
        text: 'fetch 404 yoki 500 qaytarsa ham rad etilmaydi. response.ok — status 200-299 bo‘lsa true. Shuning uchun har doim tekshirish kerak.',
        code: 'const response = await fetch("/api/user");\nconsole.log(response.status); // 404 bo\'lishi mumkin\nconsole.log(response.ok); // false\nif (!response.ok) {\n  throw new Error("HTTP xato: " + response.status);\n}'
      },
      {
        title: '4. POST va sozlamalar',
        text: 'Ikkinchi argument bilan method, headers va body berish mumkin. JSON yuborish uchun Content-Type header va JSON.stringify kerak.',
        code: 'const response = await fetch("/api/user", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ ism: "Ali" })\n});\nconst natija = await response.json();'
      },
      {
        title: '5. response.json() bir marta ishlaydi',
        text: 'Response tanasi faqat bir marta o‘qiladi. Ikkinchi marta response.json() chaqirsang xato beradi. Shuning uchun natijani o‘zgaruvchiga saqlash kerak.',
        code: 'const response = await fetch("/api/user");\nconst data = await response.json();\nconsole.log(data);\n// await response.json(); // xato: tanasi allaqachon o\'qilgan'
      },
      {
        title: '6. CORS tushunchasi',
        text: 'Brauzer boshqa domenga fetch qilganda CORS qoidasi ishlaydi. Server mos Access-Control-Allow-Origin header bermasa, javob o‘qilmaydi. Bu fetch xatosi emas, brauzer xavfsizligi.',
        code: '// Boshqa domenga so\'rov:\n// fetch("https://boshqa-sayt.com/api") — CORS xatosi bo\'lishi mumkin\n// Yechim: server ruxsat berishi kerak'
      }
    ],
    takeaway: 'fetch har doim Promise qaytaradi.\nresponse.json() ham Promise — ikki bosqichli o‘qish.\n404/500 fetch ni rad etmaydi: response.ok ni tekshir.\nPOST uchun method/headers/body beriladi.\nResponse tanasi faqat bir marta o‘qiladi.\nCORS — brauzer xavfsizligi, server ruxsati kerak.',
    exercise: '1) fetch 404 qaytarsa rad etiladimi?\n2) Nega ikki .then kerak?\n3) response.json() ni ikki marta chaqirsang nima?\n4) CORS nima?'
  },
  {
    id: 'events-advanced',
    title: 'Eventlar: chuqurroq',
    question: 'addEventListener, event obyekti, bubbling, capturing va delegatsiya nima?',
    explanation: 'Event — foydalanuvchi yoki brauzer harakati (click, input, submit). Hodisa elementdan yuqoriga tarqaladi (bubbling). Event delegatsiya shu xususiyatdan foydalanib, bitta listener bilan ko‘p elementlarni boshqaradi.',
    sections: [
      {
        title: '1. addEventListener',
        text: 'element.addEventListener("click", fn) hodisa yuz berganda fn ni chaqiradi. Bir elementga bir nechta listener qo‘shish mumkin. removeEventListener bilan olib tashlash uchun aynan shu funksiya kerak.',
        code: 'const btn = document.querySelector("button");\nconst fn = () => console.log("bosildi");\nbtn.addEventListener("click", fn);\n// btn.removeEventListener("click", fn); // aynan fn kerak'
      },
      {
        title: '2. Event obyekti',
        text: 'Callback event obyektini oladi: target (hodisa kelgan element), currentTarget (listener bog‘langan element), type, key (klaviatura), preventDefault() va stopPropagation().',
        code: 'btn.addEventListener("click", (e) => {\n  console.log(e.target); // bosilgan element\n  console.log(e.currentTarget); // listener bog\'langan element\n  console.log(e.type); // "click"\n});'
      },
      {
        title: '3. preventDefault',
        text: 'Ba’zi elementlarning standart harakati bor: form yuborish, havola ochish. preventDefault() uni to‘xtatadi.',
        code: 'document.querySelector("form").addEventListener("submit", (e) => {\n  e.preventDefault(); // sahifa yangilanmaydi\n  console.log("forma yuborildi");\n});'
      },
      {
        title: '4. Bubbling va capturing',
        text: 'Hodisa avval yuqoridan pastga (capturing), keyin pastdan yuqoriga (bubbling) tarqaladi. addEventListener ning uchinchi argumenti true bo‘lsa, capturing bosqichida ishlaydi.',
        code: 'document.addEventListener("click", () => console.log("document"));\ndocument.querySelector("button").addEventListener("click", () => console.log("button"));\n// bosilsa: button, keyin document (bubbling)'
      },
      {
        title: '5. stopPropagation',
        text: 'stopPropagation() hodisaning keyingi elementlarga tarqalishini to‘xtatadi. Ehtiyot bilan ishlatish kerak: yuqori listenerlarni o‘chirib qo‘yadi.',
        code: 'btn.addEventListener("click", (e) => {\n  e.stopPropagation(); // document listener ishlamaydi\n});'
      },
      {
        title: '6. Event delegatsiya',
        text: 'Ko‘p elementlarga alohida listener qo‘yish o‘rniga, ularning umumiy ota elementiga bitta listener qo‘yish mumkin. e.target orqali qaysi element bosilganini aniqlash mumkin. Yangi elementlar qo‘shilsa ham ishlaydi.',
        code: 'document.querySelector("#list").addEventListener("click", (e) => {\n  const li = e.target.closest("li");\n  if (li) console.log(li.dataset.id);\n});'
      }
    ],
    takeaway: 'addEventListener bilan hodisa bog‘lanadi; olib tashlash uchun aynan funksiya kerak.\ne.target — kelgan element, currentTarget — listener bog‘langan element.\npreventDefault standart harakatni to‘xtatadi.\nBubbling: pastdan yuqoriga; capturing: yuqoridan pastga.\nstopPropagation tarqalishni to‘xtatadi.\nDelegatsiya bitta listener bilan ko‘p elementni boshqaradi.',
    exercise: '1) target va currentTarget farqi nima?\n2) preventDefault nima qiladi?\n3) Bubbling qaysi yo‘nalishda?\n4) Event delegatsiya nega foydali?'
  },
  {
    id: 'storage',
    title: 'localStorage va sessionStorage: noldan',
    question: 'Brauzerda ma’lumot qanday saqlanadi? localStorage, sessionStorage va cookie farqi?',
    explanation: 'localStorage va sessionStorage brauzerda kalit-qiymat ko‘rinishida ma’lumot saqlaydi. Faqat string saqlanadi, shuning uchun obyekt uchun JSON kerak. localStorage doimiy, sessionStorage faqat tab ochikligida.',
    sections: [
      {
        title: '1. Asosiy metodlar',
        text: 'setItem(kalit, qiymat), getItem(kalit), removeItem(kalit), clear(). Hammasi faqat string bilan ishlaydi.',
        code: 'localStorage.setItem("ism", "Ali");\nconsole.log(localStorage.getItem("ism")); // "Ali"\nlocalStorage.removeItem("ism");\n// localStorage.clear(); // hammasini o\'chiradi'
      },
      {
        title: '2. Obyekt saqlash',
        text: 'Obyektni to‘g‘ridan-to‘g‘ri saqlasang, "[object Object]" bo‘lib qoladi. JSON.stringify bilan saqlab, JSON.parse bilan o‘qish kerak.',
        code: 'const user = { ism: "Ali", yosh: 20 };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst saqlangan = JSON.parse(localStorage.getItem("user"));\nconsole.log(saqlangan.ism); // Ali',
        note: 'getItem topmasa null qaytaradi. JSON.parse(null) → null, xato emas.'
      },
      {
        title: '3. localStorage vs sessionStorage',
        text: 'localStorage brauzer qayta ochilsa ham saqlanadi. sessionStorage faqat shu tab (session) uchun: tab yopilsa o‘chadi.',
        code: 'localStorage.setItem("a", "1"); // doimiy\nsessionStorage.setItem("b", "2"); // tab yopilsa yo\'qoladi'
      },
      {
        title: '4. Xatolar va cheklovlar',
        text: 'Storage hajmi cheklangan (odatda ~5 MB). To‘lsa yoki brauzer bloklasa, setItem xato beradi. Shuning uchun try/catch bilan yozish yaxshi.',
        code: 'try {\n  localStorage.setItem("kalit", "qiymat");\n} catch (e) {\n  console.log("Saqlab bo\'lmadi:", e.message);\n}'
      },
      {
        title: '5. storage hodisasi',
        text: 'Boshqa tabda localStorage o‘zgartirilsa, shu sahifada storage hodisasi yuz beradi. Bu bir nechta tab o‘rtasida sinxronlash uchun ishlatiladi.',
        code: 'window.addEventListener("storage", (e) => {\n  console.log(e.key, e.newValue);\n});'
      },
      {
        title: '6. Cookie bilan farqi',
        text: 'Cookie har so‘rovda serverga yuboriladi, hajmi kichik (~4 KB) va muddati bor. localStorage esa faqat brauzerda, serverga yuborilmaydi. Maxfiy ma’lumotni localStorage da saqlash xavfsiz emas.',
        code: '// maxfiy ma\'lumotni localStorage ga qo\'ymang:\n// localStorage.setItem("token", "..."); // XSS xavfi'
      }
    ],
    takeaway: 'Storage faqat string saqlaydi; obyekt uchun JSON.stringify/parse.\nlocalStorage doimiy, sessionStorage tab bilan tugaydi.\ngetItem topmasa null qaytaradi.\nHajm cheklangan, xato berishi mumkin — try/catch.\nCookie serverga yuboriladi, localStorage yo‘q.\nMaxfiy ma’lumotni localStorage da saqlash xavfli.',
    exercise: '1) localStorage va sessionStorage farqi?\n2) Obyektni qanday saqlaysiz?\n3) getItem topmasa nima qaytaradi?\n4) Nega maxfiy tokenni localStorage ga qo‘ymaslik kerak?'
  },
  {
    id: 'web-apis',
    title: 'Foydali Web API lar: noldan',
    question: 'setTimeout, setInterval, requestAnimationFrame, URL, Intl va boshqa API lar nima qiladi?',
    explanation: 'Brauzer JavaScript’ga ko‘p tayyor API beradi. Ular tilning bir qismi emas, balki muhit (browser) tomonidan taqdim etiladi. Kod o‘qiyotganda qaysi API ishlatilganini aniqlash, uning qaytargan qiymatini kuzatish muhim.',
    sections: [
      {
        title: '1. setTimeout va setInterval',
        text: 'setTimeout fn ni bir marta, setInterval esa har doim takrorlaydi. Ikkalasi ham timer ID qaytaradi; clearTimeout/clearInterval bilan bekor qilinadi.',
        code: 'const id = setTimeout(() => console.log("bir marta"), 1000);\nclearTimeout(id); // bekor qilindi\n\nconst interval = setInterval(() => console.log("har 1 soniyada"), 1000);\n// clearInterval(interval); // to\'xtatish'
      },
      {
        title: '2. requestAnimationFrame',
        text: 'Animatsiya uchun setTimeout o‘rniga requestAnimationFrame ishlatiladi: u ekran yangilanishiga moslashadi va fon tabda to‘xtaydi.',
        code: 'function anim() {\n  console.log("frame");\n  requestAnimationFrame(anim);\n}\nrequestAnimationFrame(anim);'
      },
      {
        title: '3. URL va URLSearchParams',
        text: 'URL obyekti bilan manzilni pars qilish mumkin. URLSearchParams query parametrlari bilan ishlaydi.',
        code: 'const u = new URL("https://example.com/sahifa?x=1&y=2");\nconsole.log(u.pathname); // /sahifa\nconsole.log(u.searchParams.get("x")); // "1"\nu.searchParams.set("x", "5");\nconsole.log(u.toString()); // ...?x=5&y=2'
      },
      {
        title: '4. Intl — formatlash',
        text: 'Intl.NumberFormat va Intl.DateTimeFormat tilga mos format beradi. Pul va sana ko‘rsatishda ishlatiladi.',
        code: 'console.log(new Intl.NumberFormat("uz-UZ").format(1234567));\nconsole.log(new Intl.NumberFormat("en-US", {\n  style: "currency", currency: "USD"\n}).format(10)); // $10.00'
      },
      {
        title: '5. structuredClone',
        text: 'Chuqur nusxa olish uchun zamonaviy usul. JSON usulidan farqli: Date, Map, Set saqlanadi, tsiklik bog‘lanish ishlaydi. Lekin funksiya va DOM element klonlanmaydi.',
        code: 'const a = { d: new Date(), m: new Map([["x", 1]]) };\nconst b = structuredClone(a);\nconsole.log(b.d instanceof Date); // true\nconsole.log(b.m.get("x")); // 1'
      },
      {
        title: '6. AbortController',
        text: 'fetch yoki listenerni bekor qilish uchun ishlatiladi. signal berilib, keyin abort() chaqirilsa, so‘rov to‘xtatiladi.',
        code: 'const controller = new AbortController();\nfetch("/api", { signal: controller.signal });\ncontroller.abort(); // so\'rov bekor qilindi'
      }
    ],
    takeaway: 'setTimeout bir marta, setInterval takrorlaydi; ID bilan bekor qilinadi.\nrequestAnimationFrame animatsiya uchun ekranga moslashadi.\nURL/URLSearchParams manzil va parametrlar bilan ishlaydi.\nIntl tilga mos format beradi.\nstructuredClone chuqur nusxa, JSON dan kuchliroq.\nAbortController so‘rovni bekor qiladi.',
    exercise: '1) setTimeout va setInterval farqi?\n2) Animatsiya uchun nega requestAnimationFrame yaxshi?\n3) structuredClone JSON usulidan nima bilan yaxshi?\n4) AbortController nima qiladi?'
  },
  {
    id: 'proxy-reflect',
    title: 'Proxy va Reflect: noldan',
    question: 'Proxy obyekt harakatlarini qanday ushlaydi? get, set va Reflect nima?',
    explanation: 'Proxy obyekt oldiga “vositachi” qo‘yadi: uning o‘qish, yozish va boshqa harakatlarini ushlab, o‘zgartirish mumkin. Reflect esa obyekt ustida standart amallarni bajarish uchun yordamchi metodlar beradi. Bu ilg‘or mavzu, lekin intervyuda so‘ralishi mumkin.',
    sections: [
      {
        title: '1. Oddiy Proxy',
        text: 'new Proxy(target, handler) bilan yaratiladi. handler.get(target, prop) xususiyat o‘qilganda chaqiriladi.',
        code: 'const target = { ism: "Ali" };\nconst proxy = new Proxy(target, {\n  get(t, prop) {\n    console.log("o\'qildi:", prop);\n    return t[prop];\n  }\n});\nconsole.log(proxy.ism); // log + Ali'
      },
      {
        title: '2. set ushlagichi',
        text: 'set(target, prop, value) xususiyatga yozilganda chaqiriladi. Qiymatni tekshirib, rad etish yoki o‘zgartirish mumkin.',
        code: 'const proxy = new Proxy({}, {\n  set(t, prop, value) {\n    if (prop === "yosh" && value < 0) {\n      throw new Error("Yosh manfiy bo\'lmaydi");\n    }\n    t[prop] = value;\n    return true; // muvaffaqiyat belgisi\n  }\n});\nproxy.yosh = 20; // OK\n// proxy.yosh = -1; // xato'
      },
      {
        title: '3. Reflect nima?',
        text: 'Reflect obyekt ustidagi standart amallarni (get, set, has, deleteProperty) funksiya sifatida beradi. Proxy ichida Reflect ishlatish eng to‘g‘ri usul: standart xatti-harakatni saqlaydi.',
        code: 'const proxy = new Proxy({}, {\n  get(t, prop, receiver) {\n    return Reflect.get(t, prop, receiver);\n  }\n});\nconsole.log(Reflect.has({ a: 1 }, "a")); // true'
      },
      {
        title: '4. Nega Reflect kerak?',
        text: 'Reflect metodlari muvaffaqiyatni true/false bilan qaytaradi (xato tashlamaydi, delete kabi). Shuningdek, receiver argumenti this ni to‘g‘ri saqlaydi.',
        code: 'const o = { a: 1 };\nconsole.log(Reflect.set(o, "b", 2)); // true\nconsole.log(o.b); // 2\nconsole.log(Reflect.deleteProperty(o, "a")); // true'
      },
      {
        title: '5. Amaliy: kuzatuvchi obyekt',
        text: 'Proxy bilan obyekt o‘zgarishlarini kuzatish mumkin. Bu reaktiv tizimlarning (Vue kabi) asosiy mexanizmlaridan biri.',
        code: 'function kuzat(o, callback) {\n  return new Proxy(o, {\n    set(t, prop, value) {\n      const eski = t[prop];\n      t[prop] = value;\n      callback(prop, eski, value);\n      return true;\n    }\n  });\n}\nconst s = kuzat({ x: 1 }, (k, e, y) => console.log(k, e, "→", y));\ns.x = 5; // x 1 → 5'
      }
    ],
    takeaway: 'Proxy obyekt harakatlarini ushlaydi: get, set va boshqalar.\nset true qaytarmasa, yozish muvaffaqiyatsiz hisoblanadi.\nReflect standart amallarni funksiya sifatida beradi.\nProxy ichida Reflect ishlatish to‘g‘ri usul.\nProxy reaktiv tizimlarning asosi.',
    exercise: '1) Proxy nima qiladi?\n2) set ushlagichi nima qaytarishi kerak?\n3) Nega Proxy ichida Reflect ishlatiladi?\n4) Proxy qayerda ishlatiladi?'
  },
  {
    id: 'common-pitfalls',
    title: 'Ko‘p uchraydigan xatolar va tuzoqlar',
    question: 'JS da eng ko‘p qilingan xatolar: ==, falsy, this, closure, mutatsiya, NaN.',
    explanation: 'Bu dars oldingi mavzularni birlashtiradi va kod o‘qishda eng ko‘p uchraydigan tuzoqlarni to‘plam sifatida ko‘rsatadi. Maqsad: kod ko‘rganda darhol “bu yer tuzoq bor” deya olish.',
    sections: [
      {
        title: '1. == o‘rniga ===',
        text: '== turlarni o‘zgartiradi: "" == 0, [] == false, null == undefined true. === hech qachon o‘zgartirmaydi. Amaliyotda === ishlatish xavfsiz.',
        code: 'console.log("" == 0); // true\nconsole.log([] == false); // true\nconsole.log(null == undefined); // true\nconsole.log("" === 0); // false'
      },
      {
        title: '2. Falsy bilan noto‘g‘ri tekshirish',
        text: 'Bo‘sh massiv va bo‘sh obyekt truthy. 0 esa to‘g‘ri qiymat bo‘lishi mumkin, lekin if (x) uni yo‘q deb hisoblaydi.',
        code: 'const son = 0;\nif (!son) console.log("yo\'q deb o\'ylaymiz"); // bu chiqadi, lekin 0 to\'g\'ri qiymat\n\nconst items = [];\nif (items) console.log("truthy"); // chiqadi\nconsole.log(items.length > 0); // to\'g\'ri tekshirish'
      },
      {
        title: '3. this yo‘qolishi',
        text: 'Metodni o‘zgaruvchiga olib chaqirsang yoki callback sifatida bersang, this yo‘qoladi. Arrow yoki bind bilan saqlash mumkin.',
        code: 'const o = { x: 1, f() { return this.x; } };\nconst g = o.f;\n// g(); // TypeError (strict)\nconsole.log(o.f.call(o)); // 1\nconsole.log(o.f.bind(o)()); // 1'
      },
      {
        title: '4. Mutatsiya kutilmaganda',
        text: 'sort, reverse, push, splice asl massivni o‘zgartiradi. const obyekt ichi o‘zgaradi. Bu ikki holat eng ko‘p chalkashtiriladi.',
        code: 'const a = [3, 1, 2];\nconst b = a.sort(); // a ham o\'zgardi!\nconsole.log(a === b); // true\n\nconst o = { x: 1 };\no.x = 2; // const bo\'lsa ham ishlaydi'
      },
      {
        title: '5. NaN va noto‘g‘ri hisob',
        text: 'NaN === NaN false. "abc" * 2 → NaN. Number("") → 0. Bularni bilmaslik noto‘g‘ri natijaga olib keladi.',
        code: 'console.log(NaN === NaN); // false\nconsole.log(Number.isNaN("abc" * 2)); // true\nconsole.log(Number("")); // 0\nconsole.log(parseInt("12px")); // 12'
      },
      {
        title: '6. Asinxronlik tartibi',
        text: 'setTimeout va Promise.then darhol bajarilmaydi. Sinxron kod avval, keyin mikrovazifa, oxirida makrovazifa.',
        code: 'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n// A, D, C, B'
      },
      {
        title: '7. Kod o‘qish algoritmi',
        text: 'Har qanday kodni o‘qishda quyidagi tartib yordam beradi: 1) o‘zgaruvchi turlarini aniqla; 2) har bir operatsiya natijasini yoz; 3) shartlarni hisobla; 4) asinxron navbatni esla; 5) oxirgi chiqishni yig.',
        code: '// Misol:\nconst x = "5";\nconsole.log(x + 1); // "51" (string birlashdi)\nconsole.log(x - 1); // 4 (songa o\'zgartirildi)\nconsole.log(typeof x); // "string" (x o\'zgarmadi)'
      }
    ],
    takeaway: '== turlarni o‘zgartiradi, === qat’iy.\n[] va {} truthy; 0 falsy, lekin to‘g‘ri qiymat bo‘lishi mumkin.\nthis chaqirish usuliga bog‘liq; yo‘qolsa call/bind/arrow.\nsort/push/splice aslni o‘zgartiradi; const obyekt ichi o‘zgaradi.\nNaN hech narsaga teng emas.\nSinxron → mikro → makro tartibi.\nHar kodni turlar → natijalar → shartlar → navbat tartibida o‘qi.',
    exercise: '1) "" == 0 va "" === 0 natijalari?\n2) if ([]) bajariladimi?\n3) const o = {x:1}; o.x=2 ishlaydimi?\n4) A, setTimeout, Promise.then, D tartibi qanday?\n5) Kod o‘qish algoritmining 5 bosqichini yoz.'
  }
);
