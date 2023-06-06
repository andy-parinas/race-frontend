// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        "/": { redirect: "/races/next" },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@pinia/nuxt"],
});
