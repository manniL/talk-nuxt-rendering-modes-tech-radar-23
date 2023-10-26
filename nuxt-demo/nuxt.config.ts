// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // this page will be always fresh
    '/': { swr: true },
    '/swr': { swr: 60 },
    '/swr-stale': {
      cache: {
        swr: true,
        staleMaxAge: 30
      }
    },
    // this page will be generated on demand and then cached permanently
    '/static': { static: true },
    // this page is generated at build time and cached permanently
    '/prerender': { prerender: true },
    // you can do lots more with route rules too!
    '/redirect': { redirect: '/static' },
    '/headers': { headers: { 'x-meetup': 'Tech Radar' } },
    '/spa': { ssr: false },
  },

  // Just some CSS imports + devtools from here
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css' }
      ]
    }
  },
  devtools: { enabled: true }
})
