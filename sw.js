self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // এটা আপাতত শুধু পেজটা লোড করতে সাহায্য করবে
});