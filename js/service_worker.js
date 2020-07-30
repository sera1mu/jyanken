/* eslint-disable no-unused-vars */
var CACHE_NAME = "rsp-caches";
var urlsToCache = [
    "/jyanken/index.html",
    "/jyanken/game.html",
    "/jyanken/changelog.html",
    "/jyanken/img/",
    "/jyanken/js/",
    "/jyanken/css/",
    "/jyanken/vendor/",
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
