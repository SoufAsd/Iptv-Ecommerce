export default {
    generate: {
        fallback: true
    },

    target: 'static', // default is 'server'
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Flone - VueJS eCommerce Template',
        titleTemplate: 'Flone | %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
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
    ],
    axios: {
        baseURL: 'http://127.0.0.1:8000/',
      },
    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },
}
