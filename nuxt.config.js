export default {
    generate: {
        fallback: true
    },

    target: 'static', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Digital Land - Meilleur IPTV au France | Abonnement Koora IPTV France',
        titleTemplate: 'Digital Land | Meilleur IPTV au France | Abonnement Koora IPTV France',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'Digital Land : Meuble, Déco, High Tech, Bricolage, Jardin, Sport | Livraison gratuite à partir de 25€ | Paiement sécurisé | 4x possible | Retour simple et rapide | E-commerçant français, des produits et services au meilleur prix.', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/bootstrap.scss',
        '~/assets/scss/_common.scss',
        '~/assets/scss/_header.scss',
        '~/assets/scss/_slider.scss',
        '~/assets/scss/_support.scss',
        '~/assets/scss/_section-title.scss',
        '~/assets/scss/_product.scss',
        '~/assets/scss/_footer.scss',
        '~/assets/scss/_suscribe.scss',
        '~/assets/scss/_about.scss',
        '~/assets/scss/_instagram.scss',
        '~/assets/scss/_testimonial.scss',
        '~/assets/scss/_brand-logo.scss',
        '~/assets/scss/_timers.scss',
        '~/assets/scss/_breadcrumb.scss',
        '~/assets/scss/_sidebar.scss',
        '~/assets/scss/_shop.scss',
        '~/assets/scss/_product-details.scss',
        '~/assets/scss/_cart.scss',
        '~/assets/scss/_checkout.scss',
        '~/assets/scss/_compare.scss',
        '~/assets/scss/_contact.scss',
        '~/assets/scss/_login-register.scss',
        '~/assets/scss/_my-account.scss',
        '~/assets/scss/_sidebar-mobilemenu.scss',
        '~/assets/scss/_custom.scss',
        '~/assets/css/animation.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        { src: '~/plugins/paypal.client.js' },
        { src:'~/plugins/checkcart.js', mode: 'client' },
        { 
            src: '~/plugins/bootstrap.js', 
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        
    ],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],
    axios: {
        baseURL: 'http://127.0.0.1:8000/',
      },
    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },
    auth: {
        redirect: {
          login: '/login-register',
          logout: '/',
          callback: '/login-register',
          home: '/'
        },
        strategies: {
            google: {
              clientId: '619518220362-cacdb3tks7nhra1eutrbjq78q13ikbb1.apps.googleusercontent.com',
codeChallengeMethod: '',
responseType: 'code',
              endpoints: {
                token: 'http://localhost:8000/api/client/google/post',
                userInfo: 'http://localhost:8000/api/client/google/get'
        },
            },
          }
      },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [
            "vee-validate/dist/rules"
          ],
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
        vendor: ['vue-paypal-checkout'],
    },
}
