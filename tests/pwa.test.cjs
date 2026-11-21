const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('manifest.webmanifest is valid and has all required PWA fields', () => {
  const content = fs.readFileSync('manifest.webmanifest', 'utf8');
  const manifest = JSON.parse(content);

  assert.equal(typeof manifest.name, 'string');
  assert.ok(manifest.name.length > 0);
  assert.equal(typeof manifest.short_name, 'string');
  assert.ok(manifest.short_name.length > 0);
  assert.equal(manifest.start_url, './index.html');
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.theme_color, '#314b20');
  assert.equal(manifest.background_color, '#f7f8f4');
  assert.ok(Array.isArray(manifest.icons));
  assert.ok(manifest.icons.length >= 3);

  for (const icon of manifest.icons) {
    assert.ok(icon.src, 'icon must have src');
    assert.ok(icon.sizes, 'icon must have sizes');
    assert.ok(icon.type, 'icon must have type');
    const iconPath = path.resolve(icon.src);
    assert.ok(fs.existsSync(iconPath), `Icon file must exist: ${icon.src}`);
    const stat = fs.statSync(iconPath);
    assert.ok(stat.size > 0, `Icon file must not be empty: ${icon.src}`);
  }
});

test('service worker sw.js defines cache and covers all static assets', () => {
  const swCode = fs.readFileSync('sw.js', 'utf8');
  assert.ok(swCode.includes('addEventListener(\'install\''), 'SW must handle install');
  assert.ok(swCode.includes('addEventListener(\'activate\''), 'SW must handle activate');
  assert.ok(swCode.includes('addEventListener(\'fetch\''), 'SW must handle fetch');

  // Match all files in STATIC_ASSETS
  const match = swCode.match(/const STATIC_ASSETS = \[([\s\S]*?)\];/);
  assert.ok(match, 'STATIC_ASSETS array must be present');
  const assets = match[1]
    .split(',')
    .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);

  assert.ok(assets.includes('./index.html'));
  assert.ok(assets.includes('./style.css'));
  assert.ok(assets.includes('./app.js'));
  assert.ok(assets.includes('./data.js'));

  for (const asset of assets) {
    if (asset === './') continue;
    const filePath = path.resolve(asset);
    assert.ok(fs.existsSync(filePath), `Static asset in sw.js must exist on disk: ${asset}`);
    assert.ok(fs.statSync(filePath).size > 0, `Static asset must not be empty: ${asset}`);
  }
});

test('index.html links manifest, theme-color, apple-touch-icon, and registers service worker', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.ok(html.includes('rel="manifest" href="manifest.webmanifest"'), 'manifest must be linked');
  assert.ok(html.includes('name="theme-color"'), 'theme-color meta must be present');
  assert.ok(html.includes('rel="apple-touch-icon"'), 'apple-touch-icon must be present');
  assert.ok(html.includes('navigator.serviceWorker.register'), 'service worker must be registered');
  assert.ok(html.includes('pwa-install'), 'PWA install button must be present');
});
