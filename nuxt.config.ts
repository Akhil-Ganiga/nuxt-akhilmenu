// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  // modules: ["@nuxt/image"],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],
  plugins: ["~/plugins/bootstrap.js"],
});
