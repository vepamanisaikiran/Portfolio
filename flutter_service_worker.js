'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e4516f16fbf3ecc92092f0f1d3c53171",
"index.html": "ab11ee8443696ef733cc2211ca2af8d5",
"/": "ab11ee8443696ef733cc2211ca2af8d5",
"main.dart.js": "b007abe396b2677ddc3b28cc96a59517",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4c9322e05f7be520fbdb8319b9308bf8",
"assets/AssetManifest.json": "f21caf34663c37abb755485dd135cf57",
"assets/NOTICES": "6f5295987f3d4ae29b1d48e0bbf363d3",
"assets/FontManifest.json": "bdd5ce6f199dd9c206f745254bec9bfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/screenshots/portfolio_mobile_1.gif": "6f5725083b4becfb8b77c2af45a7e165",
"assets/assets/screenshots/portfolio_2.gif": "4196cf51f9316273f9ef7bfefc97d20b",
"assets/assets/screenshots/portfolio_design_2.png": "711a86e370566ce01c1903db1aa4e794",
"assets/assets/screenshots/portfolio_design_3.png": "f24dd0da7633fba80106b2865358a785",
"assets/assets/screenshots/portfolio_3.gif": "a485ce18b008accbc91075f7aa27e2e7",
"assets/assets/screenshots/portfolio_1.gif": "18dd0909f3aba633013d389421334c87",
"assets/assets/screenshots/portfolio_design_1.png": "7d6b918c406123f221b50e48feea493f",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "cc0c1e0e0eed29f76f69c8e47d0ad4a8",
"assets/assets/images/otp_package.jpg": "2a4d40fa2c2968e140a02b767002615e",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/learn_upp.jpg": "45063d1af568d5f2ad55b3f6eb447233",
"assets/assets/images/aerium.jpg": "1cc46a5095ea0c7c487280dcd981d703",
"assets/assets/images/bequip_logistics.jpg": "d9a33516351b0bb9e7cadc83b8780c66",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/foodybite.jpg": "15fa08d9eea454b52afcd280aa044083",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/saikiranOP.png": "ab4f9653915e3ff9f9fb1d0c887f546a",
"assets/assets/images/login_catalog.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/finopp.jpg": "e8242ed7f425c6937f87d3a5526e76c5",
"assets/assets/images/saikiranMOP.png": "ab8b4460619d36f61b93d68548b7f533",
"assets/assets/images/saikiran2.png": "c9b9ac5a7d9b6848a2dcaade4b31ff71",
"assets/assets/images/vybz.jpg": "afc36c7d9f5cbaf04ca21d43cee72bce",
"assets/assets/images/saikiran.png": "4a984e0ff6f93a1682510ae567168f15",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/colossal_toons.jpg": "309de4edc7e7540a0717710523e07477",
"assets/assets/images/onboarding_app.jpg": "3579b51a4590f083dd633d145196bd22",
"assets/assets/fonts/circe/Circe-Light.ttf": "9fd3216596f21252abbdbc053769134e",
"assets/assets/fonts/circe/Circe-Bold.ttf": "22f16521a7d16c7f8342680cf30b46bd",
"assets/assets/fonts/circe/Circe-Thin.ttf": "8a6928dabfc92fdf4fa5fa4f53534cab",
"assets/assets/fonts/proxima_nova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/proxima_nova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
