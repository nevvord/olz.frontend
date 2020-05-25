require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/scripts/ToggleHiddenMenu.js', body: true},
      {src: '/scripts/nevvi.js', body: true},
      { src: "https://kit.fontawesome.com/b194ce6fcf.js", body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#8BC34A',
    background: 'white',
    height: '4px' 
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-notifications.js', ssr: false },
    { src: '~/plugins/filters.js', ssr: true },
    { src: '~/plugins/vuelidate.js', ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL
  },
  auth: {
    // cookie: false,
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: '/',
          user: {url: '/auth/user', method: 'get', propertyName: 'user'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '661486947949676',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email',
        scope: ['public_profile', 'email'],
      },
      google: {
        client_id: '369032606446-ravdneekf8m2bpeie8nnsd34tbit5j35.apps.googleusercontent.com',
      },
    },
    redirect: {
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
