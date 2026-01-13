const CACHE_NAME = 'financiamento-v2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/financiamento-pwa/',
        '/financiamento-pwa/index.html',
        '/financiamento-pwa/manifest.json',
        '/financiamento-pwa/icon-192.png',
        '/financiamento-pwa/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
