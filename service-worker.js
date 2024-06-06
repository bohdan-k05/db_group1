/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "3afc8306c93776e04d8cd9881cd945ef"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.638b61c6.css",
    "revision": "13ff498be46d02bd264dbf416acb5e75"
  },
  {
    "url": "assets/img/diagram.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/testing_db_contents_1.f7761ef3.png",
    "revision": "f7761ef3015395fe979cab1b95f91311"
  },
  {
    "url": "assets/img/testing_db_contents_2.1bd4cc4e.png",
    "revision": "1bd4cc4e3a06afdccb5d7188b3453e56"
  },
  {
    "url": "assets/img/testing_deleteuser_notfound.41436462.png",
    "revision": "41436462df134a0648947393a8546c00"
  },
  {
    "url": "assets/img/testing_deleteuser_success.acae5759.png",
    "revision": "acae575909cdfb4c2982b5ddd40efbcc"
  },
  {
    "url": "assets/img/testing_edituserinfo.216b9f17.png",
    "revision": "216b9f17085fedfbea25f32d8e29bb38"
  },
  {
    "url": "assets/img/testing_newuser_nicknametaken.ca41da98.png",
    "revision": "ca41da9819511f0c7cdec83feaec992b"
  },
  {
    "url": "assets/img/testing_newuser_success.29bf1f9d.png",
    "revision": "29bf1f9db15294d1ea1f7d7cfa0e7c78"
  },
  {
    "url": "assets/img/testing_userinfo.a9a45b0e.png",
    "revision": "a9a45b0e548c668be9a7cac7cd923a5a"
  },
  {
    "url": "assets/img/testing_userlist1.80b1afca.png",
    "revision": "80b1afca55c8848c4aff01413ef79bc3"
  },
  {
    "url": "assets/img/testing_userlist2.9f11a13d.png",
    "revision": "9f11a13d212d620eb7f48771c1219ed3"
  },
  {
    "url": "assets/img/testing_userlist3.6e01e748.png",
    "revision": "6e01e748b30ffeb47dfca551e877ba11"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.44a13334.js",
    "revision": "e00108a89af8ccffc0056dfee5820819"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.fe833ced.js",
    "revision": "37b51b47d09dafb04f0c41361f3ad459"
  },
  {
    "url": "assets/js/14.3c9a1a20.js",
    "revision": "aafe6b3f342dce116fd6ca2853988bd1"
  },
  {
    "url": "assets/js/15.3f39b9ff.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.271a4ecf.js",
    "revision": "bec003b8be3f0b4f79996cfa74b78690"
  },
  {
    "url": "assets/js/17.2965aec4.js",
    "revision": "bcf7d6178164575789313d27b36eef5e"
  },
  {
    "url": "assets/js/18.b0a6c1a6.js",
    "revision": "3654199a3cecdea8120d6c629ec8177a"
  },
  {
    "url": "assets/js/19.dfac2890.js",
    "revision": "af1c7130bb48b8bb7cebc72f13cb22d0"
  },
  {
    "url": "assets/js/2.c5dbbace.js",
    "revision": "5e2d4399d1d79bec12ebdec2c270ef30"
  },
  {
    "url": "assets/js/20.45de409d.js",
    "revision": "05ab032e9255292ad95dea44de78dd80"
  },
  {
    "url": "assets/js/21.86c13754.js",
    "revision": "902f46b91b6bfe80d6d05803fc86532f"
  },
  {
    "url": "assets/js/22.6543b886.js",
    "revision": "167b87a32676546346c5da7bdbf987c7"
  },
  {
    "url": "assets/js/23.86494c38.js",
    "revision": "16727175ece743eb3410ef1aae953405"
  },
  {
    "url": "assets/js/24.2328dcea.js",
    "revision": "46b7a71f1de6d6dc9e33d1e17677f023"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.8e24ac7d.js",
    "revision": "74fb7a7483ad30caafe0f98f2c302823"
  },
  {
    "url": "assets/js/4.8306deaf.js",
    "revision": "4f946d3cfda509c0f575aa79cc8736a3"
  },
  {
    "url": "assets/js/5.5c6e12bb.js",
    "revision": "2d4006ed3209f7d7a8cb1257c6525dc4"
  },
  {
    "url": "assets/js/6.82da27b2.js",
    "revision": "b882d475c23046a3e6d860a337ceb74e"
  },
  {
    "url": "assets/js/7.e4f9e51f.js",
    "revision": "f7046f86fc675f03c8ebadd08682df97"
  },
  {
    "url": "assets/js/8.b4859d74.js",
    "revision": "4cebc07e7cdd249e9af39ed748e38ebf"
  },
  {
    "url": "assets/js/9.a7d5bea4.js",
    "revision": "f2ef10b28168a384769780b9a56f4186"
  },
  {
    "url": "assets/js/app.c5d36f86.js",
    "revision": "56ffe17ad4ad3e21a0c146b05552550f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9e7704bbea6ee7d44bfc5737c0eb7690"
  },
  {
    "url": "design/index.html",
    "revision": "aa3de11f6d906da0dab05ce5364b6e97"
  },
  {
    "url": "index.html",
    "revision": "09b1e751b6d3194c7d82c0da75e910c7"
  },
  {
    "url": "intro/index.html",
    "revision": "40f7fe0c2b126fc9b07e98ae859c64a7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0dcbe5f4140cfe6e51fc6c0c162432ae"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2888c882afc3325108a57f59801afa52"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "18533b71a48ea32ce8a3658efa706ff4"
  },
  {
    "url": "software/index.html",
    "revision": "ea066de74090e467a7b7f7b0b1b88d7e"
  },
  {
    "url": "test/index.html",
    "revision": "6dbddccbd0598ceb9e549d7631540e56"
  },
  {
    "url": "use cases/index.html",
    "revision": "228a5fca632bcd4bb7f4aede3714da71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
