if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
    .register('sw.js', {scope: './'})
    .then(reg => console.log('ServiceWorker registration successful', reg))
    .catch(err => console.log('ServiceWorker registration failed', err))
  });
};
