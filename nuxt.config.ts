// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/fonts", "nuxt-auth-utils", "@pinia/nuxt", "nuxt-swiper"],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },
})
