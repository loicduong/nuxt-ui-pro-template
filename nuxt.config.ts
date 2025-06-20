// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-27'
})