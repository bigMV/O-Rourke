// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     experimental: {
    viewTransition: true
  },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon', "@nuxt/image"],
    devtools: { enabled: true },
    googleFonts: {
    families: {
    'Fira Sans': [100,300,400,500],
    'Raleway' : [100, 300, 400, 500],
      },
          display: 'swap',
    },
    app: {
        head: {
            title: "Brendan O'Rourke",
            meta: [
                {name: 'description', content: 'Data Architect'}
            ],
            link: [
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"}
            ]
        }
    }
})