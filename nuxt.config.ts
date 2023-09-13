// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@morev/vue-transitions/nuxt",
    "nuxt-icons",
    "@nuxt/image",
  ],
  plugins: ["~/plugins/click-outside.ts"],
  css: ["@/shared/global.css", "@unocss/reset/tailwind.css"],
});
