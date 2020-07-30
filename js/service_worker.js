/* eslint-disable no-unused-vars */
var CACHE_NAME = "rsp-caches";
var urlsToCache = [
    "/seraimu.github.io/jyanken/index.html",
    "/seraimu.github.io/jyanken/game.html",
    "/seraimu.github.io/jyanken/changelog.html",
    "/seraimu.github.io/jyanken/img/",
    "/seraimu.github.io/jyanken/js/",
    "/seraimu.github.io/jyanken/css/",
    "/seraimu.github.io/jyanken/vendor/",
    "/seraimu.github.io/jyanken/manifest.json",
    "/seraimu.github.io/jyanken/LICENSE",
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
