// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
        '@nuxtjs/i18n',
        'nuxt-gtag',
        '@pinia/nuxt',
    ],
    ssr: false,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: 
                    '@import "@/assets/styles/variables.scss"; @import "@/assets/styles/base.scss";',
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            apiBase: 'https://reevas.introlink.ru/api',
            domain: 'https://reevas.introlink.ru',
            basicAuth: process.env.BASIC_AUTH,
        }
    },
    i18n: {
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
        },
        defaultLocale: 'en',
        langDir: 'assets/lang/',
        locales: [
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            },
            {
                name: 'Deutsch',
                code: 'de',
                iso: 'de-DE',
                file: 'de-DE.js'
            },      
        ],       
    },
    gtag: {
        id: 'G-##########'
    },
})
