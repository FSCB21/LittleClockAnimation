const staticMyLittleClok = "my-little-clock-site-v1"
const assets = [
  "/LittleClockAnimation/",
  "/LittleClockAnimation/index.html",
  "/LittleClockAnimation/styles/style.css",
  "/LittleClockAnimation/javascript/app.js",
  "/LittleClockAnimation/javascript/animation-sun-moon.js",
  "/LittleClockAnimation/javascript/digital-clock.js",
  "/LittleClockAnimation/javascript/digital-clock.js",
  "/LittleClockAnimation/javascript/weather-api.js",
  "/LittleClockAnimation/images/mountain.png",
  "/LittleClockAnimation/images/nube_lluviosa.jpg",
  "/LittleClockAnimation/images/termostato.png"
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