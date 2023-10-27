importScripts('./dip/dip.worker.js');
importScripts('./sf/sf.sw.js');

const sw = new UVServiceWorker();
const sw2 = new DIPServiceWorker('./dip/dip.worker.js');

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(location.origin+'/service/dip/')) event.respondWith(sw2.fetch(event));
  if (event.request.url.startsWith(location.origin+'/service/sf/')) event.respondWith(sw.fetch(event));
});