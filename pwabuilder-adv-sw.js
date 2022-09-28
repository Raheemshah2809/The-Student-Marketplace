
  import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

  precacheAndRoute([{"revision":"5521d189ec9a290b8d94d61ed5953542","url":"404.html"},{"revision":"d312cbf22fc9ee41dcccb7134ee14eb0","url":"css/404.css"},{"revision":"c05f1e9d236ef0cf74b61d2ad0abc43a","url":"css/bootstrap.min.css"},{"revision":"bf142e182bebf8d8b2c38c34325caa42","url":"css/Dashboard.css"},{"revision":"0489cf2dab69de854d69645d56482b23","url":"css/feed.css"},{"revision":"d5994dbfffc502498e0e331af7618d62","url":"css/modal.css"},{"revision":"e1ff65bde99ef929c2640df10478ac20","url":"css/news.css"},{"revision":"a2a3fa1b4a47f114097d78690ace508c","url":"css/post.css"},{"revision":"5e006b21377e2163c963aea4f6298c55","url":"css/signin.css"},{"revision":"0bea836358990812b56de72747c09646","url":"css/startpage.css"},{"revision":"c73c6c367ae2d9338047fe1a063e982a","url":"css/style.css"},{"revision":"df7a2af90e7fcb164b9875dd008b48ca","url":"css/style.min.css"},{"revision":"adf71fedc17b4ae5afd0cf06f1192361","url":"Dashboard.html"},{"revision":"8d98c6ab2bd28a800a3cb897092d4ce3","url":"feed.html"},{"revision":"f334154c63860fa1f377fd1411fc93f3","url":"font/Rimouski.css"},{"revision":"eb7a5a54a24666d93f60330612e3d41c","url":"index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"index.js"},{"revision":"8266c0e31181ef1493c19e3b6705e51b","url":"js/alert.js"},{"revision":"42157c9ae5dc20894c451c07223c2574","url":"js/auth.js"},{"revision":"259e416ef6833be43801b8b68a93b008","url":"js/bootstrap.min.js"},{"revision":"5638d7a8c098aaa897b35fbe72514ab5","url":"js/comment.js"},{"revision":"a10d5697814e89a10151c96126fd0025","url":"js/Dashboard.js"},{"revision":"d66775edaf77519a7676d7da05c6a005","url":"js/firebase-analytics-compat.js"},{"revision":"83bd8d5db70be942fdbc612481b5176f","url":"js/firebase-app-compat.js"},{"revision":"03ae4246c3e252535ca7bcff6508f9f5","url":"js/firebase-auth-compat.js"},{"revision":"e9cb884877f8c3f6d86f8363ae80929a","url":"js/firebase-database-compat.js"},{"revision":"46aa3f85c47aaa45b8efa433512f01c1","url":"js/firebase-firestore-compat.js"},{"revision":"5e68ac52092fb70539fe8c9ea5e772f7","url":"js/firebase-storage-compat.js"},{"revision":"add53c9a7e251fffd9cdb7f5fc94e289","url":"js/geol.js"},{"revision":"e071abda8fe61194711cfc2ab99fe104","url":"js/jquery.min.js"},{"revision":"4139ad11da233dac395d3d98e2a941a2","url":"js/main.js"},{"revision":"7728014cb02c1c92e135a5cb91a7bf9e","url":"js/modal.js"},{"revision":"e82cc57afa76e79de883ab38691ec9ae","url":"js/navbar.js"},{"revision":"2db3bb72f8ca685144c2db87cafd650e","url":"js/news.js"},{"revision":"541aecc95a7faeef0fc27558070f3647","url":"js/popper.min.js"},{"revision":"68ab1c015c89c13aabc2595349ed2675","url":"js/post.js"},{"revision":"8cb342952ff87b9f9cad80bb358055b9","url":"js/script.js"},{"revision":"ba7d9115350126ad2423775e0d94107a","url":"js/search.js"},{"revision":"279f5b83f2b64f842a221cdc96eaacdd","url":"js/signin.js"},{"revision":"6a2fac62b3a94b0c921ee2ca17c95ac9","url":"js/startpage.js"},{"revision":"93e3f3c4e03607d80789c9ebe27d63d5","url":"js/tester.js"},{"revision":"cba45d09829443fe90df5f02b6ac6046","url":"js/thenews.js"},{"revision":"b32963835bad5dc0327bc8262dfa4ddd","url":"js/time.js"},{"revision":"b9d418d85844b888623abc2c5c0b664a","url":"js/top.js"},{"revision":"eb07ea5a5985b7554a164996e394fb2a","url":"js/weather.js"},{"revision":"789099e3660194216810f82451c679b4","url":"navbar.html"},{"revision":"e06629a33df467e87a949df97906f2be","url":"news.html"},{"revision":"b7ab7f8d8044ca93c46bdfb0829acbde","url":"progressier.js"},{"revision":"9fa17dcfc036d3d96c8214397053d7a1","url":"signin.html"},{"revision":"c891df3d8c2e4a97ce0dd2efcb2ca85a","url":"startpage.html"},{"revision":"107a99288cf364dff51cb389cd79737f","url":"test.css"},{"revision":"26a7004761c7e2327030025ad707371d","url":"test.html"},{"revision":"f37b9bd0cbb25ae35b7260ba379e80d5","url":"upload.html"}]);
//This is the service worker with the Advanced caching

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const HTML_CACHE = "html";
const JS_CACHE = "javascript";
const STYLE_CACHE = "stylesheets";
const IMAGE_CACHE = "images";
const FONT_CACHE = "fonts";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'script',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'font',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);



