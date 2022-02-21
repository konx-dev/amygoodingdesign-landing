export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amy Gooding - Packaging Designer & Art Director',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Senior Packaging Designer, based in Nottingham. Specialising in FMCG across branded and own-brand products. Experienced in Art Direction for food photography.' },
      { name: 'format-detection', content: 'telephone=no' },

      // OpenGraph tags
      { hid: 'og:type', property: 'og:type', content: 'website', vmid: 'og:type' },
      { hid: 'og:title', property: 'og:title', content: 'Amy Gooding - Packaging Designer & Art Director', vmid: 'og:title' },
      { hid: 'og:description', property: 'og:description', content: 'Senior Packaging Designer, based in Nottingham. Specialising in FMCG across branded and own-brand products. Experienced in Art Direction for food photography.', vmid: 'og:description' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.amygoodingdesign.com/', vmid: 'og:url' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Amy Gooding Design - Portfolio', vmid: 'og:site_name'},

      // Twitter card
      { hid: 'twitter:title', property: 'twitter:title', content: 'Amy Gooding - Packaging Designer & Art Director', vmid: 'twitter:title' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Senior Packaging Designer, based in Nottingham. Specialising in FMCG across branded and own-brand products. Experienced in Art Direction for food photography.', vmid: 'twitter:description' },
      { hid: 'twitter:site', property: 'twitter:site', content: 'Amy Gooding Design - Portfolio', vmid: 'twitter:site'},
      { hid: 'twitter:creator', property: 'twitter:creator', content: 'https://instagram.com/amygoodingdesign', vmid: 'twitter:creator'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
        '~/assets/scss/main.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}