// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-23",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/eslint", "@nuxt/ui"],
});
