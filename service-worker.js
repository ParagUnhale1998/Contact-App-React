// service-worker.js
const CACHE_NAME = 'my-react-app-cache';
const urlsToCache = ['/', '/index.html', '/static/js/bundle.js', '/static/css/main.chunk.css'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
