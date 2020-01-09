const cacheName = 'v1';
const cacheAssets = [
  './index.html',
  './aboutus.html',
  './contact.html',
  './staff.html',

  './css/contact.css',
  './css/normalize.css',
  './css/index.css',
  './css/staff-aboutus.css',

  'images/kit1.jpg',
  'images/kit2.jpg',
  'images/kit3.jpg',
  'https://placekitten.com/295/200',
  'https://placekitten.com/295/201',
  'https://placekitten.com/295/203',

  'https://fonts.googleapis.com/css?family=Lato&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cachename) {
          if (cachename !== cacheName) {
            return caches.delete(cachename);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request)
    .then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(e.request)
          .then(function(reg) {
            return caches.open(cacheName)
              .then(function(cache) {
                cache.put(e.request.url, reg.clone());
                return reg;
              })
          })
          .catch(err => console.log(err));
      }
    })
  );
});
        