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
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        public: {
            apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        },
    },
});
