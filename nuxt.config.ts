// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "nuxt-icon", "@morev/vue-transitions/nuxt"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  plugins: ["~/plugins/click-outside.ts"],

  css: ["@/shared/global.css", "@unocss/reset/tailwind.css"],
});
