// Service Worker for RTN Global
const CACHE_NAME = 'rtn-global-cache-v1';

// This array will be automatically populated by Workbox during build
// This line is required for Workbox InjectManifest - DO NOT REMOVE
self.__WB_MANIFEST;

// Assets to pre-cache
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/blog',
  '/contact',
  '/portfolio',
  '/favicon.ico',
  '/offline.html',
];

// Install event - precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  // Activate the service worker immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('rtn-global-cache-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
  // Claim all clients so the service worker is in control immediately
  self.clients.claim();
});

// Fetch event - network-first strategy for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // Skip API requests
  if (event.request.url.includes('/api/')) return;
  
  // Handle HTML pages - network first, fallback to cache, then offline page
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache a copy of the response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request).then((cachedResponse) => {
            // Return cached response or offline page
            return cachedResponse || caches.match('/offline.html');
          });
        })
    );
    return;
  }
  
  // For other assets (CSS, JS, images) - cache first, network as fallback
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Otherwise fetch from network
      return fetch(event.request)
        .then((response) => {
          // Cache a copy of the response if it's valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          
          return response;
        })
        .catch((error) => {
          console.error('Fetch failed:', error);
          // Could return a fallback image/asset here if needed
        });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 