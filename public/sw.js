importScripts('./dip/dip.worker.js');

const sw2 = new DIPServiceWorker('./dip/dip.worker.js');

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(location.origin+'/service/dip/')) event.respondWith(sw2.fetch(event));
});