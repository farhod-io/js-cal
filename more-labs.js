// Qo'shimcha kod o'qish misollari.
window.codeLabs.push(
  {
    id: 'lab-6',
    title: '6-misol: event loop tartibini o\'qish',
    hint: 'Avval sinxron satrlarni ajrat, keyin .then, oxirida setTimeout.',
    lines: [
      { code: 'console.log("A");', note: 'Sinxron → darhol A chiqadi.' },
      { code: 'setTimeout(() => console.log("B"), 0);', note: 'Makrovazifa navbatiga qo\'yildi, hali bajarilmaydi.' },
      { code: 'Promise.resolve().then(() => console.log("C"));', note: 'Mikrovazifa navbatiga qo\'yildi.' },
      { code: 'console.log("D");', note: 'Sinxron → darhol D chiqadi.' },
      { code: '// Natija: A, D, C, B', note: 'Sinxron → mikro → makro qoidasi.' }
    ],
    takeaway: 'Kodni o\'qishda avval "bu satr darhol bajariladimi yoki navbatgami?" deb so\'ra.'
  },
  {
    id: 'lab-7',
    title: '7-misol: this ni kuzatish',
    hint: 'Har bir chaqirishda "kim chaqiryapti?" deb so\'ra.',
    lines: [
      { code: 'const user = {', note: 'Obyekt yaratilyapti.' },
      { code: '  ism: "Ali",', note: 'Oddiy xususiyat.' },
      { code: '  salom() { return this.ism; }', note: 'Oddiy metod: this chaqirgan obyekt bo\'ladi.' },
      { code: '};', note: '' },
      { code: 'console.log(user.salom());', note: 'user chaqirdi → this = user → "Ali".' },
      { code: 'const f = user.salom;', note: 'Funksiya ajratildi, bog\'lanish yo\'q.' },
      { code: '// f();', note: 'Ochilsa: strict mode da this = undefined → TypeError.' }
    ],
    takeaway: 'this metod qayerda yozilganiga emas, qanday chaqirilganiga bog\'liq.'
  },
  {
    id: 'lab-8',
    title: '8-misol: massiv metodlarini farqlash',
    hint: 'Har bir satrda "asl massiv o\'zgaradimi yoki yangi massivmi?" deb belgila.',
    lines: [
      { code: 'const a = [3, 1, 2];', note: 'Asl massiv.' },
      { code: 'const b = a.map(x => x * 2);', note: 'Yangi massiv [6,2,4], a o\'zgarmadi.' },
      { code: 'const c = a.filter(x => x > 1);', note: 'Yangi massiv [3,2], a o\'zgarmadi.' },
      { code: 'a.sort((x, y) => x - y);', note: 'Asl massiv o\'zgaradi → a = [1,2,3].' },
      { code: 'console.log(a, b, c);', note: '[1,2,3], [6,2,4], [3,2]' }
    ],
    takeaway: 'map/filter yangi beradi; sort/reverse/push/splice aslni o\'zgartiradi.'
  }
);
