// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
  ],


  tailwindcss: {
    CSSPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
})
