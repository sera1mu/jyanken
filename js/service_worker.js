/* eslint-disable no-unused-vars */
var CACHE_NAME = "rsp-caches";
var urlsToCache = [
    "/jyanken/index.html",
    "/jyanken/game.html",
    "/jyanken/changelog.html",
    "/jyanken/favicon.ico",
    "/jyanken/img/draw.png",
    "/jyanken/img/lose.png",
    "/jyanken/img/paper.png",
    "/jyanken/img/rock.png",
    "/jyanken/img/scissors.png",
    "/jyanken/img/win.png",
    "/jyanken/img/draw.webp",
    "/jyanken/img/lose.webp",
    "/jyanken/img/paper.webp",
    "/jyanken/img/rock.webp",
    "/jyanken/img/scissors.webp",
    "/jyanken/img/win.webp",
    "/jyanken/img/icons/icon_192.png",
    "/jyanken/img/icons/icon_512.png",
    "/jyanken/js/game.js",
    "/jyanken/js/main.js",
    "/jyanken/js/service_worker.js",
    "/jyanken/css/style.css",
    "/jyanken/vendor/bootstrap.bundle.min.js",
    "/jyanken/vendor/bootstrap.min.css",
    "/jyanken/vendor/jquery.min.js",
    "/jyanken/manifest.json",
    "/jyanken/LICENSE",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response ? response : fetch(event.request);
        })
    );
});
