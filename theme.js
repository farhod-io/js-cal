(() => {
  const storageKey = 'jsdaftar_theme';
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let chosenTheme = null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') chosenTheme = saved;
  } catch { /* Keep the toggle usable when browser storage is unavailable. */ }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#131b15' : '#314b20';
    const button = document.querySelector('#theme-toggle');
    if (button) {
      const label = dark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘i rejimga o‘tish';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', label);
      button.title = label;
      button.querySelector('span').textContent = dark ? '☀️' : '🌙';
    }
  }

  const currentTheme = () => chosenTheme || (preference.matches ? 'dark' : 'light');
  applyTheme(currentTheme());
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme());
    const button = document.querySelector('#theme-toggle');
    if (!button) return;
    button.addEventListener('click', () => {
      chosenTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(storageKey, chosenTheme); } catch { /* The in-page choice still works. */ }
      applyTheme(chosenTheme);
    });
  });
  preference.addEventListener('change', () => {
    if (!chosenTheme) applyTheme(currentTheme());
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    chosenTheme = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    applyTheme(currentTheme());
  });
})();
