'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f70729c3fe60474cb24cc07bd09c11e6",
".git/config": "b92a5092f234a84904b88e40bdcc745f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "57a81cadff7e9b0151a48e806b4fa24b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "1c3a02d9a5ba3a32789a43dc41c0627b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "475d08724c5376ad581e2310e6fc83a9",
".git/logs/refs/heads/master": "475d08724c5376ad581e2310e6fc83a9",
".git/logs/refs/remotes/origin/master": "f5ba5a04f253ab68872869e851c99991",
".git/objects/00/ca18384cc1e59a0b12f6cb3dd6f804d06036e2": "bdacff18273514283c2548e1f9e17806",
".git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
".git/objects/02/9a15a54eee9e419b9f1c0d152274752dbcd71b": "860f3e0bf4a91d2792bc895155960c2c",
".git/objects/05/94b347f02598032f7b7048d040aae61244b81d": "b0eec150b6ee3e726db62db2cff20085",
".git/objects/0a/ac16056185f158ec05324061fed67b1cf36acd": "bc94ced39eb08e93ee02a6f4ae82d0e2",
".git/objects/0e/19c7beafa3615c4d93956e7e0c223efafae4e7": "589a852fe8bb400b7c74469a4b350ad7",
".git/objects/0e/552b3f84d69e5dcc2a4e48a6c3978d5e595a35": "778eccc195c816399a8898c526c3db0e",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/d6591a295bbee95ef0e1d301ffd6191fb1562a": "45572365c53ff4c75f913c6c8dc5ca74",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/c2a4fe4a7d6efc539af464a01e5082c92787a4": "c6a0b366b65e8c1f4b9552d9a80e9772",
".git/objects/18/4822c36d32cd7f1c5dba08b93e5651a7995461": "c683600ab7e1e414763a8d0bf81766fe",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/24/0515cf341a696553cc9a334f51091dafda4803": "f2d0960f8a9664a894827a6b36718c23",
".git/objects/28/e424c4c7242451157d20b9655bf61023bbfa5b": "71040d94112bd3b91908228b5e34797c",
".git/objects/29/502f97f93e055a82913df937248989100aec7e": "716262239f304be9dd983581be0b0513",
".git/objects/2a/14bdde6df37a77437449dad44b8700cf083f9b": "e1580b349e6ba49461c232f893a78f5e",
".git/objects/2d/060ce030453e0b035a81049bbefe1212704bfc": "d59b60c2becee66d8309d77903e87cb8",
".git/objects/36/6e4cd2b95cb8dee92beef0825dc89679b32fcd": "b5734cee16d64cc2552623d4b9405afc",
".git/objects/38/b45da258cd2d865512937022d51787d4afd53a": "e4e12301be88fdc418c35e936ff48faf",
".git/objects/38/ceda5fb3f0c317654351d0a3cd0bf9d63e04c1": "15717f2ac444f8c29e1cf2e1502d25a4",
".git/objects/3a/4c39ead8fdce15bd1a1cb7a20ee4aa6e7bc304": "2ea339d9091235a11c0bc4a2bdd52edf",
".git/objects/3b/fd35431e43e6cc30409fd5e5b0de700ad04bea": "f7b47cc67316be57df235b50569fad2a",
".git/objects/3e/935a86d450293360015447a744bcc566cae07d": "d95295613d55df1b44078dfe136155a7",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/44/3bbccedc2f0b9dafa1240e1ccacef01e0cd034": "11124cf8fb6ba20ff9e3cea046356e08",
".git/objects/44/97f71d685d551ba6ee7dc82b32987508762276": "02459aac0e513e33dc1d8d1597b4037d",
".git/objects/4c/672f9dd696218ccaea75a6e1a4d7062bff50a7": "f04a1327dcd1dd515950198e0a11df14",
".git/objects/4d/c708f71710e54df7e48d4831881388232d9a14": "c362feaaf1d92d8089be04c200bffe38",
".git/objects/57/358b34a953de783ab708e0c2dca741933f808b": "34a842d95aab154a9769e4998171d6b3",
".git/objects/5a/452c325e1744081fd41f32a617a697e6ea56e4": "aa671df2db2fbcd71a17a42482fcd2e5",
".git/objects/5b/9ef37e54317fcda12e3192106451fb72f274cf": "fa33db849081e9f1d4d53ff2828b0f77",
".git/objects/6c/e0592750a5ce7beb48df0aafa3c5cb81b9d77f": "eb2c7ef04183efd7a8b2210cd3dc2b24",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/6e/9e0bff36d0edfc4344323778f646f4cb4e082f": "2246c157ca08066d3a620966b9691021",
".git/objects/6e/b8965de2bd22cc32b4d0b7b22375e4110b6fbd": "d5f6957990d9203477a1291499b407c0",
".git/objects/6e/cf70d095fcd9b9c145f0fd26692c1ab814d8a4": "f1943f0fcc8fe6f0759cc58f18922bd3",
".git/objects/70/06d2202fa939fe84f36bfcf67f5ee69bda714d": "ec0e3c688f24ca1a564e54fa52020083",
".git/objects/78/fda9c2b8ea6b3e29887d74d99c176eef47ddd5": "0041cc252b82104c2a4b1df5950b3f99",
".git/objects/7a/270733782f25d592490bf31d135da3fbccfca6": "1dcc5a4b30030e1a7820573c57df7b7c",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/7e/4f12e68166dace8bbb1c6558fda5feba29da85": "de525febe74d57a31de598bf1475ba05",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/87/218e518a0d4ac26241aaa5cee16b5697be7bea": "95745373b87a5ce9d1d39c0499c9af76",
".git/objects/87/21c3af053d430bc4e99109d4cf3bc6bb89d151": "071051719ddbd37fd7dad66c335a6751",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/27ddbb893abb3c770d110578e48b0bfaa43ce5": "73cf1d5a2b0a12818f658cfdc82d84c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4486997f2246beac58196d4eb07efd79fda988": "8c267ad5588a9ac3eb50a07819d0dd3b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/47c95db369d5c7589d9d65cd23b4fdc20f0e8e": "f58d862bf02bf1421d593fdffbc6981a",
".git/objects/9b/6af600bf4d25c7352c0b77f7842a88ce5967b1": "316d522f3d9df8900175b7d85e0f1e92",
".git/objects/9e/13f92a56886a9301813f3e06c444a715281a3b": "e6cd261f010724bcf630ab5e2e6a8854",
".git/objects/a4/f574442c034a6958671073d48a6049848c5a61": "71a2fddba82c26d79bfa31cdf2c63b2c",
".git/objects/a7/7ebb90c90762f4ce644243566264fb27369ba9": "1499bd3d3c4225376b3388ca41b18f5c",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/b1/91a029006aa64065442d1b338ca9e75b429b36": "a5f19c135f71f9ac6619b74552a96266",
".git/objects/b2/f050072eb4bf625383b1f244f2b792fef7fcd7": "92cfbf124bdd3dabd341146b90a23263",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/6f2ace267dc6d9cfc070e44071728df6521d6a": "770dd18c827c69083f3f717996e1a93f",
".git/objects/c4/a2ca60996ac5691bf4405611ec2ab14b5fd711": "29bff056b793dac6dd934c347af74d5b",
".git/objects/cb/b6dd22cd7f84a2df3dcc7a63b11dc60cd25c07": "54358863e66120df7ac3a00f937ce3e6",
".git/objects/d0/e9b909c7cff0b4b2448f5b66aab7071d1b843e": "cc9c2441830fbe69219c41464c1efef6",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/d3/b646156a9ff5ea8926443b1285f80005c3964f": "7e83b2dd5e9a97d54de2ffa06d42fcd2",
".git/objects/d9/ac258745b629fcd2f04214fa71dd31435846f3": "696768c8dff1ce665a275e038ba10bce",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/bad770f3746429c40ba42b8afdd181a7fc700f": "11677e8d5ae6a1c5418a1d6a276d7774",
".git/objects/e5/87ae89915450d0b243dad78e9d935bc2bc519d": "28019fa3ea01e88ef2c06febd6d02126",
".git/objects/e7/d0f1152ecb86e722bc5a4a23195d467ce37485": "a5db17e6ca11e29e0c5242750a31e54d",
".git/objects/e9/4fc9fd97a14284bbe945e8aa2562849b00e30e": "03912cb839e89dcf14187f8bfcbf3572",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f4/ecc94a2940d28b4d59dcb2a514ba17d5457777": "eeda6ab34b742d7d88bd748bdfca14db",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f9/872500022a6bcfe15219dc73c61a83dc08a5f2": "0c4c86256b2e912bed1d424d46ecc3e1",
".git/objects/fc/b11f13f1deddd72f9a41720a7dae46329f2488": "1b82baa70e5af3413dc68efa8ad1df44",
".git/ORIG_HEAD": "a1fe3d32a88bf41375357477c7060064",
".git/refs/heads/master": "f18e874b5ca72a4470af496a98d455fc",
".git/refs/remotes/origin/master": "f18e874b5ca72a4470af496a98d455fc",
"assets/AssetManifest.json": "59b76f64369d85d008c9c0ec37bea5a1",
"assets/assets/fonts/circe/Circe-Bold.ttf": "22f16521a7d16c7f8342680cf30b46bd",
"assets/assets/fonts/circe/Circe-Light.ttf": "9fd3216596f21252abbdbc053769134e",
"assets/assets/fonts/circe/Circe-Thin.ttf": "8a6928dabfc92fdf4fa5fa4f53534cab",
"assets/assets/fonts/proxima_nova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/proxima_nova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/images/aerium.jpg": "1cc46a5095ea0c7c487280dcd981d703",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/bequip_logistics.jpg": "d9a33516351b0bb9e7cadc83b8780c66",
"assets/assets/images/colossal_toons.jpg": "309de4edc7e7540a0717710523e07477",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "cc0c1e0e0eed29f76f69c8e47d0ad4a8",
"assets/assets/images/finopp.jpg": "e8242ed7f425c6937f87d3a5526e76c5",
"assets/assets/images/foodybite.jpg": "15fa08d9eea454b52afcd280aa044083",
"assets/assets/images/learn_upp.jpg": "45063d1af568d5f2ad55b3f6eb447233",
"assets/assets/images/login_catalog.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/onboarding_app.jpg": "3579b51a4590f083dd633d145196bd22",
"assets/assets/images/otp_package.jpg": "2a4d40fa2c2968e140a02b767002615e",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/saikiran.png": "4a984e0ff6f93a1682510ae567168f15",
"assets/assets/images/saikiran2.png": "c9b9ac5a7d9b6848a2dcaade4b31ff71",
"assets/assets/images/saikiranMOP.png": "ab8b4460619d36f61b93d68548b7f533",
"assets/assets/images/saikiranOP.png": "ab4f9653915e3ff9f9fb1d0c887f546a",
"assets/assets/images/vybz.jpg": "afc36c7d9f5cbaf04ca21d43cee72bce",
"assets/assets/screenshots/portfolio_1.gif": "18dd0909f3aba633013d389421334c87",
"assets/assets/screenshots/portfolio_2.gif": "4196cf51f9316273f9ef7bfefc97d20b",
"assets/assets/screenshots/portfolio_3.gif": "a485ce18b008accbc91075f7aa27e2e7",
"assets/assets/screenshots/portfolio_design_1.png": "7d6b918c406123f221b50e48feea493f",
"assets/assets/screenshots/portfolio_design_2.png": "711a86e370566ce01c1903db1aa4e794",
"assets/assets/screenshots/portfolio_design_3.png": "f24dd0da7633fba80106b2865358a785",
"assets/assets/screenshots/portfolio_mobile_1.gif": "6f5725083b4becfb8b77c2af45a7e165",
"assets/docs/SaikiranVepamani.pdf": "9e101629732a7e89c6c0d776763fc111",
"assets/FontManifest.json": "1fd8467b85f18cc2ed3d9bbbdc95365a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "01a7228a3c151cc2d9aa71cfb14a8d88",
"assets/NOTICES": "d53c6f1bad6e61d27050b104f1977610",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "68a5d48df6d55f9a6d02dfc0cc03e9d4",
"/": "68a5d48df6d55f9a6d02dfc0cc03e9d4",
"main.dart.js": "9419981cabaca1abcb2c619d77342ce7",
"manifest.json": "29be89361c0c37dc34dab2d63dac656e"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
