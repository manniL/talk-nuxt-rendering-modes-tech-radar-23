export default defineNuxtConfig({
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
