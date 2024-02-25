const site = require('./site')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: site.name,
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: site.name },
      { hid: 'description', name: 'description', content: site.description },
      { hid: 'url', name: 'url', content: site.url },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { hid: 'p5', src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js'  },
      { hid: 'p5Dom', src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js' },
      { id: 'mazeA', src: '/maze/js/sketch.js'  },
      { id: 'mazeB', src: '/maze/js/Cell.js' },
    ],
  },

  target: 'static',

  // generate: {
	// 	// subFolders: false
	// 	// crawler: false,
	// },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/basics.css',
    '~/assets/css/style.css',
  ],
 
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: ['nuxt-animejs'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/'
    // baseURL: 'https://raphaelmouly.com',
    // browserBaseURL: 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: {
    // '/api': '~/api',
  },
}
