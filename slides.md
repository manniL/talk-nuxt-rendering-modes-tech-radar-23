---
theme: ./theme
title: "Nuxt's Hidden Treasures"
website: lichter.io
handle: TheAlexLichter
favicon: https://lichter.io/img/me@2x.jpg
highlighter: shiki
lineNumbers: true
layout: intro
transition: fade
---

# <logos-nuxt-icon class="text-6xl" aria-label="Nuxt" /> & Rendering Patterns

## How <span class="text-[#80eec0]">modern frameworks</span> help to master the <span class="text-[#00dc82]">art of rendering</span>

### Tech Radar Meetup 10/23

<style>
  h1 {
    @apply !text-5xl;
  }

  h2 {
    @apply !text-3xl !mt-16 !mb-32;
  }

  h3 {
    @apply !text-base;
  }
</style>

---

<img class="mx-auto" src="https://i.giphy.com/f7wHfpF6xpYG986HN5.gif"/>

---
layout: two-cols
heading: About me
---

<template v-slot:default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template v-slot:right>
<VClicks class="space-y-2 mt-10 text-xl h-full">

* <mdi-account-check class="text-green-100" /> **Web Engineering Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Team
* <mdi-twitter class="text-blue-400" /><mdi-youtube class="text-red-500" /><mdi-twitch class="text-purple-700" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</VClicks>
</template>

---
layout: two-cols
heading: Summary
clicks: 11
---

<template v-slot:default>

<VClicks depth="2">

* TODO

</VClicks>

<VClicks depth="2" at="6">

* PS: If you want to learn about more secret gems...
  * Or performance optimizations...
  * Or in more about Nuxt/UnJS in general...
  * Check out the weekly releases on my [channel <logos-youtube-icon />](https://www.youtube.com/@AlexanderLichter)
* [https://www.youtube.com/@AlexanderLichter](https://www.youtube.com/@AlexanderLichter)

</VClicks>

</template>

<template v-slot:right>

<img v-click="6" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXo4MGZqM2hmNWtseGU2cjhyNGJ4MGx1Z2V5MmU4cnF4cXE4Z3l0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vrKXW5ICIdx9PMG5x6/giphy.gif" class="h-80 mx-auto">

</template>

---
layout: intro
---

# Thanks a lot to my sponsors!
<img src="https://raw.githubusercontent.com/manniL/static/main/sponsors.svg" class="h-80 mx-auto" alt="My GitHub sponsors">

---
layout: two-cols
heading: Thank you for your attention!
---

<template v-slot:default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template v-slot:right>

* <mdi-account-check class="text-green-100" /> **Web Engineering Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Team
* <mdi-twitter class="text-blue-400" /><mdi-youtube class="text-red-500" /><mdi-twitch class="text-purple-700" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</template>

<style>
  ul {
    @apply space-y-2 mt-10 text-xl h-full;
  }
</style>

---
layout: intro
hideLogoInCorner: true
---

# Slides / Repo

* Slides: [https://lichter.link/tr-23/](https://lichter.link/tr-23/)

<div class="flex mx-32 justify-around">

<img class="w-32 h-32 mt-16 mx-auto" src="https://www.lichter.io/img/logo/glyph-and-word-white-colored.svg" />

</div>

<style>
  ul {
    @apply list-none!;
  }
</style>
