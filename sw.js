const CACHE_NAME = 'js-daftar-cache-v10';

const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './theme.js',
  './data.js',
  './scope-demo.js',
  './truthy-demo.js',
  './manifest.webmanifest',
  './favicon.ico',
  './favicon.png',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key.startsWith('js-daftar-cache-') && key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (!url.protocol.startsWith('http')) return;

  // Tashqi tarmoq so'rovlari (Gemini, DeepSeek va boshqa tashqi xizmatlar)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Sahifa navigatsiyasi: Network-first, oflaynda keshdan index.html
  if (req.mode === 'navigate' || ['app.js', 'data.js', 'style.css', 'theme.js'].includes(url.pathname.split('/').pop())) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then(async res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            const cache = await caches.open(CACHE_NAME);
            await cache.put(req, clone);
          }
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(req);
          if (cached) return cached;
          if (req.mode === 'navigate') {
            const page = await cache.match('./index.html') || await cache.match('./');
            if (page) return page;
          }
          return new Response('Oflayn nusxa topilmadi. Internetga ulaning va qayta oching.', { status: 503 });
        })
    );
    return;
  }

  // Statik fayllar: Cache-first va fonda yangilash (Stale-While-Revalidate)
  event.respondWith(
    caches.match(req).then(cachedResponse => {
      const fetchPromise = fetch(req)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Oflayn holatda keshdagi nusxa qaytariladi
        });
      return cachedResponse || fetchPromise;
    })
  );
});
