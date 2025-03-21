export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        head: {
            title: 'My Anime List',
            htmlAttrs: {
                lang: 'pt-br',
            },
            link: [
                {
                    rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
                },
            ]
        }
    }
})

