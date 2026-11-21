function mountScopeDemo(root) {
  root.innerHTML = `<h2>Hozir qayerdan qarayapsan?</h2><div class="scope-controls"><button type="button" data-place="global">Global</button><button type="button" data-place="function">Function ichida</button><button type="button" data-place="block">Block ichida</button></div><div class="scope-map"><div>Global: <code>const til = "JS"</code><div>Function: <code>var ism = "Ali"</code><div>Block: <code>let yosh = 20</code></div></div></div><div class="scope-output" aria-live="polite"></div>`;
  const levels = ['global', 'function', 'block'];
  const names = ['til', 'ism', 'yosh'];
  const values = ['"JS"', '"Ali"', '20'];
  function select(place) {
    const index = levels.indexOf(place);
    root.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.place === place)));
    root.querySelector('.scope-output').innerHTML = `<p><b>Tanlangan joy: ${place}</b></p>` + names.map((name, i) => `<p><code>console.log(${name})</code> → ${i <= index ? values[i] + ' — ko‘rinadi ✓' : 'ReferenceError — bu joydan ko‘rinmaydi'}</p>`).join('') + `<p>${index === 0 ? 'Tashqaridan ichki hududdagi nomlarni ko‘rib bo‘lmaydi.' : 'Qidiruv ichkaridan boshlanadi va tashqariga qarab davom etadi.'}</p>`;
  }
  root.querySelectorAll('button').forEach(b => b.onclick = () => select(b.dataset.place));
  select('block');
}
