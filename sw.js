const CACHE_NAME = 'knowledgeworld-vip-cache-v1';

// On install, activate immediately
self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

// On activation, take control and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    
    // Ignore non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Use a "network falling back to cache" strategy for all requests.
    // This is simple and effective for an online-first app.
    event.respondWith(
        fetch(request)
            .then(networkResponse => {
                // If the request is successful, clone the response and cache it.
                if (networkResponse && networkResponse.ok) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // If the network request fails, try to serve from the cache.
                return caches.match(request);
            })
    );
});