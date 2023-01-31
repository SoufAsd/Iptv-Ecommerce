import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_b1e477fe from 'nuxt_plugin_plugin_b1e477fe' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_axios_1cd271a4 from 'nuxt_plugin_axios_1cd271a4' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_vueawesomeswiper_5ce03f58 from 'nuxt_plugin_vueawesomeswiper_5ce03f58' // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
import nuxt_plugin_vuejspagiante_7edc93b2 from 'nuxt_plugin_vuejspagiante_7edc93b2' // Source: ..\\plugins\\vuejs-pagiante.js (mode: 'all')
import nuxt_plugin_observevisibility_b986de04 from 'nuxt_plugin_observevisibility_b986de04' // Source: ..\\plugins\\observe-visibility.js (mode: 'all')
import nuxt_plugin_checkcart_1ca06745 from 'nuxt_plugin_checkcart_1ca06745' // Source: ..\\plugins\\checkcart.js (mode: 'client')
import nuxt_plugin_bootstrap_68fdc73f from 'nuxt_plugin_bootstrap_68fdc73f' // Source: ..\\plugins\\bootstrap.js (mode: 'client')
import nuxt_plugin_vuejsmodal_f50827f4 from 'nuxt_plugin_vuejsmodal_f50827f4' // Source: ..\\plugins\\vue-js-modal (mode: 'client')
import nuxt_plugin_notificationsclient_f727f91e from 'nuxt_plugin_notificationsclient_f727f91e' // Source: ..\\plugins\\notifications-client.js (mode: 'client')
import nuxt_plugin_aos_caeae0de from 'nuxt_plugin_aos_caeae0de' // Source: ..\\plugins\\aos (mode: 'client')
import nuxt_plugin_auth_0cea730c from 'nuxt_plugin_auth_0cea730c' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Digital Land - Meilleur IPTV au France | Abonnement Koora IPTV France","titleTemplate":"Digital Land | Meilleur IPTV au France | Abonnement Koora IPTV France","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"Digital Land : Meuble, Déco, High Tech, Bricolage, Jardin, Sport | Livraison gratuite à partir de 25€ | Paiement sécurisé | 4x possible | Retour simple et rapide | E-commerçant français, des produits et services au meilleur prix.","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_b1e477fe === 'function') {
    await nuxt_plugin_plugin_b1e477fe(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_1cd271a4 === 'function') {
    await nuxt_plugin_axios_1cd271a4(app.context, inject)
  }

  if (typeof nuxt_plugin_vueawesomeswiper_5ce03f58 === 'function') {
    await nuxt_plugin_vueawesomeswiper_5ce03f58(app.context, inject)
  }

  if (typeof nuxt_plugin_vuejspagiante_7edc93b2 === 'function') {
    await nuxt_plugin_vuejspagiante_7edc93b2(app.context, inject)
  }

  if (typeof nuxt_plugin_observevisibility_b986de04 === 'function') {
    await nuxt_plugin_observevisibility_b986de04(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_checkcart_1ca06745 === 'function') {
    await nuxt_plugin_checkcart_1ca06745(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_bootstrap_68fdc73f === 'function') {
    await nuxt_plugin_bootstrap_68fdc73f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuejsmodal_f50827f4 === 'function') {
    await nuxt_plugin_vuejsmodal_f50827f4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_notificationsclient_f727f91e === 'function') {
    await nuxt_plugin_notificationsclient_f727f91e(app.context, inject)
  }

<<<<<<< HEAD
  if (process.client && typeof nuxt_plugin_aos_caeae0de === 'function') {
    await nuxt_plugin_aos_caeae0de(app.context, inject)
=======
  if (typeof nuxt_plugin_auth_0cea730c === 'function') {
    await nuxt_plugin_auth_0cea730c(app.context, inject)
>>>>>>> feature/clientAuth
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
