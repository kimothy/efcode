const staticAssets = [
    './',
    './styles.css',
    './app.js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('err-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
}); 

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}; 