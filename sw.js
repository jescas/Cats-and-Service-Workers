const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  'aboutus.html',
  'contact.html',
  'staff.html',
  'contact.css',
  'index.css',
  'test.css',
  'kit1.jpg',
  'kit2.jpg',
  'kit3.jpg'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('activate', e => {
  

});

self.addEventListener('fetch', e => {
  

});