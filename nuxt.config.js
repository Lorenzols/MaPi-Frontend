export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mapi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  env: {
    URL_PRODUCTION: process.env.URL_PRODUCTION
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.URL_PRODUCTION || 'http://localhost:8000',
    // baseURL: 'https://mapipoolbackend.herokuapp.com',
    // prefix: 'http://localhost:8000',
    // proxy: true 
  },

  // proxy: {
  //   '/api/': { target: 'http://localhost:8000', pathRewrite: {'^/api/': ''} }
  //   // '/api/': 'http://localhost:8000'
  // },

  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token", //property name that the Back-end sends for you as a access token for saving on localStorage and cookie of user browser
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
//        data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
//      },
        endpoints: {
          login: { url: "/auth/signin", method: "post" },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/auth/user", method: "get" }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
