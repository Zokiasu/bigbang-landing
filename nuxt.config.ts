// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js' 
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  plugins: [
    '@/plugins/locomotiveScroll.client.js',
  ],

  css: [
    'animate.css/animate.min.css',
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
