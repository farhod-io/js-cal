function mountTruthyDemo(root) {
  const options = [
    { label: '[]', value: [], reason: 'Bo‘sh massiv ham obyekt, shuning uchun truthy. Element borligini .length > 0 bilan tekshir.' },
    { label: '{}', value: {}, reason: 'Bo‘sh obyekt ham truthy. Boolean obyektning ichidagi xususiyatlarni sanamaydi.' },
    { label: '""', value: '', reason: 'Bo‘sh stringda belgi yo‘q. U falsy qiymatlardan biri.' },
    { label: '"0"', value: '0', reason: 'Bu nol soni emas, bo‘sh bo‘lmagan string. Shuning uchun truthy.' },
    { label: '0', value: 0, reason: 'Nol soni falsy qiymatlardan biri.' },
    { label: 'null', value: null, reason: 'null — qiymat ataylab yo‘qligini bildiradi va falsy hisoblanadi.' },
    { label: 'undefined', value: undefined, reason: 'undefined falsy qiymatlardan biri.' },
    { label: 'NaN', value: NaN, reason: 'NaN number turida bo‘lsa ham, boolean baholashda falsy.' }
  ];
  const title = document.createElement('h2');
  title.textContent = 'Truthy / Falsy Explorer';
  const controls = document.createElement('div');
  controls.className = 'truthy-options';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Tekshiriladigan qiymat');
  const output = document.createElement('div');
  output.className = 'truthy-result';
  output.setAttribute('aria-live', 'polite');
  const expression = document.createElement('code');
  const result = document.createElement('strong');
  const reason = document.createElement('p');
  output.append(expression, result, reason);
  const buttons = options.map((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option.label;
    button.onclick = () => select(index);
    controls.append(button);
    return button;
  });
  function select(index) {
    const option = options[index];
    const truthy = Boolean(option.value);
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    expression.textContent = `Boolean(${option.label})`;
    result.textContent = `${truthy ? '✓' : '✕'} ${truthy} — ${truthy ? 'Truthy' : 'Falsy'}`;
    result.dataset.truthy = String(truthy);
    reason.textContent = option.reason;
  }
  root.replaceChildren(title, controls, output);
  select(0);
}
