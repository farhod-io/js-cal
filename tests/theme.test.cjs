const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup({ saved = null, systemDark = false, blocked = false } = {}) {
  const events = {}, root = { dataset: {} }, attributes = {}, icon = {}, meta = {};
  const storage = new Map(saved ? [['jsdaftar_theme', saved]] : []);
  const button = { setAttribute: (key,value) => attributes[key] = value, querySelector: () => icon, addEventListener: (name, fn) => events['button:'+name] = fn };
  let ready = false;
  const preference = { matches: systemDark, addEventListener: (name,fn) => events['media:'+name] = fn };
  const ctx = vm.createContext({
    window: { matchMedia: () => preference, addEventListener: (name,fn) => events['window:'+name] = fn },
    document: { documentElement: root, querySelector: selector => selector.startsWith('meta') ? meta : ready ? button : null, addEventListener: (name,fn) => events[name] = fn },
    localStorage: { getItem: key => { if (blocked) throw Error(); return storage.get(key); }, setItem: (key,value) => { if (blocked) throw Error(); storage.set(key,value); } }
  });
  vm.runInContext(fs.readFileSync('theme.js','utf8'),ctx);
  const initial = root.dataset.theme;
  ready = true;events.DOMContentLoaded();
  return { root, attributes, icon, meta, storage, preference, events, initial };
}
test('applies saved dark theme before body loads and updates the accessible toggle', () => {
  const s = setup({ saved: 'dark' });
  assert.equal(s.initial, 'dark');
  assert.equal(s.attributes['aria-pressed'], 'true');
  assert.equal(s.attributes['aria-label'], 'Yorug‘ rejimga o‘tish');
  s.events['button:click']();
  assert.equal(s.root.dataset.theme, 'light');
  assert.equal(s.storage.get('jsdaftar_theme'), 'light');
  assert.equal(s.attributes['aria-pressed'], 'false');
});
test('follows system theme until a manual preference is chosen', () => {
  const s = setup({ systemDark: true });
  assert.equal(s.initial, 'dark');
  s.preference.matches = false;s.events['media:change']();
  assert.equal(s.root.dataset.theme, 'light');
  s.events['button:click']();
  s.events['media:change']();
  assert.equal(s.root.dataset.theme, 'dark');
});
test('works with unavailable storage and synchronizes choices from other tabs', () => {
  const s = setup({ blocked: true });
  s.events['button:click']();
  assert.equal(s.root.dataset.theme, 'dark');
  s.events['window:storage']({ key: 'jsdaftar_theme', newValue: 'light' });
  assert.equal(s.root.dataset.theme, 'light');
  s.events['window:storage']({ key: null, newValue: null });
  assert.equal(s.root.dataset.theme, 'light');
});
