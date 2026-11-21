// Qo'shimcha kod o'qish misollari (advanced mavzular).
window.codeLabs.push(
  {
    id: 'lab-9',
    title: '9-misol: debounce kodini o\'qish',
    hint: 'timer o\'zgaruvchisi chaqiruvlar orasida saqlanishini kuzat.',
    lines: [
      { code: 'function debounce(fn, ms) {', note: 'Kelajakda chaqirish uchun funksiya yaratiladi.' },
      { code: '  let timer;', note: 'Closure: bu o\'zgaruvchi barcha chaqiruvlar orasida yashaydi.' },
      { code: '  return (...args) => {', note: 'Har chaqirishda quyidagi kod ishlaydi.' },
      { code: '    clearTimeout(timer);', note: 'Oldingi rejalashtirilgan chaqiruv bekor qilinadi.' },
      { code: '    timer = setTimeout(() => fn(...args), ms);', note: 'Yangi timer qo\'yiladi, faqat oxirgisi tirik qoladi.' },
      { code: '  };', note: '' },
      { code: '}', note: '' }
    ],
    takeaway: 'Debounce = closure + clearTimeout + setTimeout. Oxirgi chaqiruvgina bajariladi.'
  },
  {
    id: 'lab-10',
    title: '10-misol: Promise.allSettled natijasi',
    hint: 'Har bir Promise holatini alohida o\'qi.',
    lines: [
      { code: 'const natijalar = await Promise.allSettled([', note: 'Barchasini kutamiz, xatoda to\'xtamaymiz.' },
      { code: '  Promise.resolve(1),', note: 'Bajarildi: status fulfilled, value 1.' },
      { code: '  Promise.reject("xato")', note: 'Rad etildi: status rejected, reason "xato".' },
      { code: ']);', note: '' },
      { code: 'console.log(natijalar[0].status); // fulfilled', note: 'Birinchi natija holati.' },
      { code: 'console.log(natijalar[1].reason); // xato', note: 'Ikkinchisining xato sababi.' }
    ],
    takeaway: 'allSettled hech qachon rad etilmaydi: har bir elementda status va value/reason bor.'
  }
);
