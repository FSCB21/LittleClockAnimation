const staticMyLittleClok = "my-little-clock-site-v1"
const assets = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/javascript/app.js",
  "/javascript/animation-sun-moon.js",
  "/javascript/digital-clock.js",
  "/javascript/digital-clock.js",
  "/javascript/weather-api.js",
  "/images/mountain.png",
  "/images/nube_lluviosa.jpg",
  "/images/termostato.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMyLittleClok).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })