---
theme: ./theme
title: "Nuxt & Rendering Modes"
website: lichter.io
handle: TheAlexLichter
favicon: https://lichter.io/img/me@2x.jpg
highlighter: shiki
lineNumbers: true
layout: intro
transition: fade
---

# Nuxt <logos-nuxt-icon class="text-6xl -mb-1" /> & Rendering Patterns

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

<div>
  <div class="absolute">
    <p v-click class="text-4xl pt-8 rotate-20">ISR</p>
    <p v-click class="text-4xl pt-8 -rotate-20">SSG</p>
    <p v-click class="text-4xl pt-8 rotate-20">SPA</p>
    <p v-click class="text-4xl pt-8 -rotate-20">SSR</p>
    <p v-click class="text-4xl pt-8 rotate-20">ISG</p>
  </div>
</div>

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
layout: intro
preload: false
clicks: 1
---

<h1 class="mt-12 flex justify-center items-center">

<logos-vue v-motion class="text-8xl" :initial="{ x: -500 }" :enter="{ x: 0, transition: { duration: 500 } }"/>
<mdi-heart v-if="$slidev.nav.clicks === 0" class="text-8xl invisible"/>
<mdi-heart v-if="$slidev.nav.clicks === 1" v-motion :initial="{ x: 500 }" :enter="{ x: 0, transition: { duration: 500 } }" class="text-red-500 text-8xl" />

</h1>

<!--
* Vue is a lightweight and powerful component-level framework
* But when your project grows, you often want more than "just an SPA"
-->

---
layout: intro
preload: false
---

<h1 v-motion :initial="{ y: 0 }" :enter="{ y: -500, transition: { duration: 750, delay: 250 } }" class="mt-12 flex justify-center items-center">

<logos-vue class="text-8xl"/>
<mdi-heart class="text-red-500 text-8xl" />

</h1>

---
layout: intro
preload: false
clicks: 1
---

<h1 class="mt-12">

<logos-nuxt-icon class="text-10xl" :class="$slidev.nav.clicks === 1 && 'transition ease-in-out animate-ping'" :style="$slidev.nav.clicks === 1 && 'animation: ping 2s cubic-bezier(0, 0, 0.2, 1) 3 !important;'" v-motion :initial="{ y: 500 }" :enter="{ y: 0, transition: { duration: 500, delay: 250 } }"/>

</h1>

---
preload: false
---

# Nuxt.js

<div class="absolute top-8 left-40">
<logos-nuxt-icon v-motion class="text-10xl" :initial="{ y: -176, x: -280, scale: 0.3, transition: { duration: 750, delay: 250 } }" :enter="{ y: 0, x: 0, scale: 1.0 }" />
</div>

<Grid class="mt-16 gap-x-8">
<VClicks class="space-y-4">

* **Progressive** framework 💡
* Based on Vue 3 <logos-vue /> and Vite <logos-vitejs />
* Written in TypeScript <logos-typescript-icon />
* Performant and lightweight out of the 📦

</VClicks>

<VClicks class="space-y-4">

* Versatile - SPA / SSG / SSR / ISR 🃏
* Universal deployment 🆙
* Optimized for cold start and serverless ⚡️
* Easily Extensible ⚙️

</VClicks>
</Grid>

---

# Rendering <Modes></Modes>

<VClicks depth="2">

1. Taking a look at the two app types: MPAs and SPAs
    * Understand their advantages and disadvantages
1. Exploring rendering concepts
    * Traditional SSR
    * Client Side Rendering
    * HTML-centric Rendering
    * Modern SSR / Isomorphic Rendering
1. Subtypes of SSR
    * Dynamic / On the fly
    * Static Site Generation / Prerendering
    * Incremental Static (Re-)Generation
    * Island Architecture?

</VClicks>

---

# Multi Page Applications I

<VClicks>

* Most common approach for web development in the past
* Lots of websites are still built this way
* Server renders HTML for each page
* On route changes, the browser does the same thing again

</VClicks>

<div class="flex justify-center" v-click>

```mermaid{scale:0.65, showSequenceNumbers: true}
sequenceDiagram
    Browser->>+Server: Request /about/
    Server->>+Database: Query content for /about/
    Database->>-Server: Return content
    Server->>-Browser: Return dynamically generated HTML
```

</div>

---

# Single Page Applications I

<VClicks>

* Rather new approach in web development
* Server only serves the initial (almost-empty) HTML file with some JS
* Client-side JavaScript takes over, generates the HTML and updates the DOM
* JavaScript issues API request to get data

</VClicks>

<div class="flex justify-center" v-click="2">

```mermaid{scale:0.45, showSequenceNumbers: true}
sequenceDiagram
    Browser->>+CDN: Request /about/
    CDN->>Browser: Send static HTML file + JS and CSS
    Browser->>+API: API request to /about/ to fetch data
    API->>+Database: Query content for /about/
    Database->>-API: Return content
    API->>-Browser: Return content as JSON or XML
    Browser->>Browser: Uses the received data
```

</div>

---


# Single Page Applications II

<VClicks>

* When requesting a new page, the browser does not do a full page reload
* Instead, it only updates the content in the DOM, reusing other parts of the page

</VClicks>

<div class="flex justify-center mt-4" v-click="2">

```mermaid{scale:0.55, showSequenceNumbers: true}
sequenceDiagram
    Browser->>+Browser: Requests more JavaScript if needed
    Browser->>+API: API call to fetch info for /next-page/
    API->>+Database: Query content for /next-page/
    Database->>-API: Return content
    API->>-Browser: Return content as JSON or XML
    Browser->>+Browser: Use the received data
```

</div>

---

# Comparison of SPAs and MPAs I

<VClicks depth="2">

* Initial Request
  * <mdi-close class="text-red-500" /> SPA: Loading spinner before seeing content
  * <mdi-check class="text-green-500" /> MPA: Content is visible "immediately"
* Subsequent requests
  * <mdi-check class="text-green-500" /> SPA: No page reload, only changed content is updated. Transitions can be applied
  * <mdi-close class="text-red-500" /> MPA: Full page reload, "click-and-wait"
* Transferred JavaScript
  * <mdi-close class="text-red-500" /> SPA: JavaScript is necessary to render the page
  * <mdi-check class="text-green-500" /> MPA: Does not necessarily need JavaScript to work (only for interactive parts)
  
</VClicks>

---

# Comparison of SPAs and MPAs II

<VClicks depth="2">

* Search Engine Optimization
  * <mdi-close class="text-red-500" /> SPA: Various downsides
  * <mdi-check class="text-green-500" /> MPA: No downsides by default
* Developer Experience and Productivity
  * <mdi-check class="text-green-500" /> SPA: Better DX because of clear separation FE/BE, self-contained application parts, ...
  * <mdi-close class="text-red-500" /> MPA: Worse the more "frontend" logic is needed
* Accessibility
  * <mdi-close class="text-red-500" /> SPA: Needs more caution and extra work
  * <mdi-check class="text-green-500" /> MPA: Fine out of the box

</VClicks>

<!--

DX:

* Clear data contracts between API/SPA
* Self-contained application parts
* Easy to transfer the state
* No state management on front and backend
* Clear responsibilities

-->

---

# And the winner is....

<img class="mx-auto" src="https://media2.giphy.com/media/xiSZGYjpYgzkipNS7x/giphy.gif?cid=ecf05e47u1ii648493j4qo1qi6eg4fcjiiaebk4l15kdecoa&rid=giphy.gif&ct=g" v-click />

---

# There is no clear winner

<VClicks>

* Both, MPAs and SPAs have their pros and cons
* Both are suitable app types to build web applications
* But: What if we could combine the best of both worlds?

</VClicks>

---
layout: intro
---

# Rendering Concepts
Let's have a look!

---

# Rendering Concepts

<VClicks depth="2">

* MPAs
  * Traditional SSR
  * HTML-centric Rendering
* SPAs
  * Client Side Rendering
  * Modern SSR / Isomorphic Rendering

</VClicks>

<!-- 

* We know how Traditional SSR and pure Client-Side Rendering works already

-->

---

# HTML-centric rendering

<VClicks depth="2">

* Initial request as for Traditional SSR
* Per interactive components:

</VClicks>

<VClick at="1">

```mermaid{scale:0.70, showSequenceNumbers: true}
sequenceDiagram
    Browser->>+API: API call (WebSockets/HTTP)<br> to render Counter component with new value
    API->>-Browser: Return HTML for new counter component
    Browser->>+Browser: Insert/Replace the HTML in the DOM
```

</VClick>

---

# HTML-centric rendering II

* <mdi-check class="text-green-500" /> Little JavaScript needed

<VClicks>

* <mdi-check class="text-green-500" /> Stick to framework/backend model
* <mdi-close class="text-red-500" /> Very new concept
* <mdi-close class="text-red-500" /> No mature ecosystem
* <mdi-close class="text-red-500" /> Not Framework-agnostic
* <mdi-close class="text-red-500" /> JS might be needed eventually

</VClicks>

---

# Modern SSR / Isomorphic Rendering I

<VClicks depth="2">

* Combination of Traditional SSR and Client-Side Rendering
* Initial request as for Traditional SSR
* Subsequent requests work as SPA

</VClicks>

---

<div class="flex justify-center">

```mermaid{scale:0.65, showSequenceNumbers: true}
sequenceDiagram
    Client->>+Server: Requests /initial/
    Server->>+API: API call (if data needed)
    API->>-Server: Return data (usually JSON)
    Server->>Server: Continue rendering to HTML string
    Server->>-Client: Return HTML file with content, JavaScript and CSS
    note right of Client: Site is now visible
    Client->>+Client: Parse JavaScript and hydration
    note right of Client: Site is now interactive
```

</div>

---

# Modern SSR / Isomorphic Rendering II

<VClicks>

* <mdi-check class="text-green-500" /> Stick to framework/language model (SPA)
* <mdi-check class="text-green-500" /> Serve HTML on initial request
* <mdi-check class="text-green-500" /> Only load files/data if needed
* <mdi-check class="text-green-500" /> No "click and wait"
* <mdi-check class="text-green-500" /> Use the full power of the JS ecosystem
* <mdi-close class="text-red-500" /> Setup can be more complex (or support of a framework)
* <mdi-close class="text-red-500" /> High TTFB (if uncached)
* <mdi-close class="text-red-500" /> Adds more complexity (code runs on server and client)
* <mdi-close class="text-red-500" /> Some libraries might not support SSR
* <mdi-close class="text-red-500" /> Hydration is CPU intensive

</VClicks>

---

# Choosing a rendering concept

<VClicks depth="2">

* Lots of options, depends on your use case and app requirements
* When deciding in favor of Traditional SSR, there is no reason to not use the Progressive Enhancement approach
* When considering HTML-centric rendering, be aware of the ecosystem limitations. Also a good pick when you want to avoid JavaScript as much as possible
* Client-side rendering might suffice if you build content behind authentication (e.g. dashboards)
* Modern SSR is a good choice for a big range of applications, from complex web applications to simple landing pages.

</VClicks>

---
layout: intro
---

# SSR Subtypes

Because SSR is a whole family of concepts, let's have a look at the different subtypes!

---

# SSR Subtypes

<VClicks>

* Dynamic / on the fly (seen so far)
* Prerendering / SSG
* Incremental Static (Re-)Generation

</VClicks>

---

# Prerendering / SSG - Build step
Process of generating static HTML files at build time (not at runtime)

<div v-click class="flex justify-center">

```mermaid{scale:0.6, showSequenceNumbers: true}
sequenceDiagram
    Server->>Server: Request to /initial
    note right of Server: SSR starts
    Server->>+API: Request data
    API->>-Server: Return JSON
    note right of Server: Continue rendering
    Server->>Server: Output static HTML file to /initial.html
```

</div>

---

# Prerendering / SSG - Initial Request

<div class="flex justify-center">

```mermaid{scale:0.7, showSequenceNumbers: true}
sequenceDiagram
    Browser->>+CDN: Request /initial/
    CDN->>Browser: Send static HTML file (with data) + JS and CSS
    note right of Browser: Site is visible for the user
    Browser->>Browser: JS parsing and hydration
    note right of Browser: App now works as SPA and is interactive
```

</div>

---

# Prerendering / SSG - Pros and Cons

<VClicks>

* <mdi-check class="text-green-500" /> Fastest initial request
* <mdi-check class="text-green-500" /> Replaces API calls during SSR with static data
* <mdi-check class="text-green-500" /> No server for frontend needed
* <mdi-close class="text-red-500" /> Needs rebuild for data change
* <mdi-close class="text-red-500" /> Build time proportional to page count

</VClicks>

---

# Incremental Static (Re-)Generation
Evolved from combining dynamic SSR and SSG

<div v-click class="flex justify-center">

```mermaid{scale:0.5, showSequenceNumbers: true}
sequenceDiagram
    Client->>+Server: Requests /initial/
    Server->>+API: API call (if data needed)
    API->>-Server: Return data (usually JSON)
    Server->>Server: Continue rendering to HTML string, then save in cache
    Server->>-Client: Return static HTML file with rendered content,<br>JavaScript and CSS (from here as for dynamic SSR)
    note right of Client: When another initial request happens (same/other client)
    Client->>+Server: Requests /initial/
    Server->>-Client: Return static HTML file from cache
```

</div>


---

# Hybrid

<VClicks>

* Nowadays, mixing the SSR subtypes is supported by frameworks such as Nuxt <logos-nuxt-icon /> or Next.js <logos-nextjs-icon />
* This allows to apply the best-fitting subtype per page and improve UX and performance

</VClicks>

<Code v-click file="nuxt.config.ts">

```js
export default defineNuxtConfig({
  // ...
  routeRules: {
    '/admin/**': { ssr: false },
    '/statistics/**': { swr: 600 },
    '/product/**': { swr: true },
    '/blog/**': { static: true },
    '/': { prerender: true }
  }
})
```

</Code>


---


# Summary

<VClicks depth="2">

* Nuxt is a meta framework based on Vue
* It helps building applications fast and can be deployed everywhere
* Rendering modes are an important part of your app performance
* Mix & Match!

</VClicks>

<br>

<VClicks depth="2">

* PS: If you want to learn about more rendering modes...
  * Or performance optimizations...
  * Or in more about Nuxt/UnJS in general...
  * Check out the weekly releases on my [channel <logos-youtube-icon />](https://www.youtube.com/@AlexanderLichter)
* [https://www.youtube.com/@AlexanderLichter](https://www.youtube.com/@AlexanderLichter)

</VClicks>

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

* [https://lichter.link/tr-23/](https://lichter.link/tr-23/)

<div class="flex mx-32 justify-around">

<img class="w-32 h-32 mt-16 mx-auto" src="https://www.lichter.io/img/logo/glyph-and-word-white-colored.svg" />

</div>

<style>
  ul {
    @apply list-none!;
  }
</style>
