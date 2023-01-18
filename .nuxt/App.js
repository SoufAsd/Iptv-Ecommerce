import Vue from 'vue'
import { decode, parsePath, withoutBase, withoutTrailingSlash, normalizeURL } from 'ufo'

import { getMatchedComponentsInstances, getChildrenComponentInstancesUsingFetch, promisify, globalHandleError, urlJoin, sanitizeComponent } from './utils'
import NuxtError from '..\\layouts\\error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '..\\assets\\scss\\bootstrap.scss'

import '..\\assets\\scss\\_common.scss'

import '..\\assets\\scss\\_header.scss'

import '..\\assets\\scss\\_slider.scss'

import '..\\assets\\scss\\_support.scss'

import '..\\assets\\scss\\_section-title.scss'

import '..\\assets\\scss\\_product.scss'

import '..\\assets\\scss\\_footer.scss'

import '..\\assets\\scss\\_suscribe.scss'

import '..\\assets\\scss\\_about.scss'

import '..\\assets\\scss\\_instagram.scss'

import '..\\assets\\scss\\_testimonial.scss'

import '..\\assets\\scss\\_brand-logo.scss'

import '..\\assets\\scss\\_timers.scss'

import '..\\assets\\scss\\_breadcrumb.scss'

import '..\\assets\\scss\\_sidebar.scss'

import '..\\assets\\scss\\_shop.scss'

import '..\\assets\\scss\\_product-details.scss'

import '..\\assets\\scss\\_cart.scss'

import '..\\assets\\scss\\_checkout.scss'

import '..\\assets\\scss\\_compare.scss'

import '..\\assets\\scss\\_contact.scss'

import '..\\assets\\scss\\_login-register.scss'

import '..\\assets\\scss\\_my-account.scss'

import '..\\assets\\scss\\_sidebar-mobilemenu.scss'

import '..\\assets\\scss\\_custom.scss'

import '..\\assets\\css\\animation.css'

import _6f6c098b from '..\\layouts\\default.vue'
import _602e6cb4 from '..\\layouts\\HomeSidebarMenu.vue'

const layouts = { "_default": sanitizeComponent(_6f6c098b),"_HomeSidebarMenu": sanitizeComponent(_602e6cb4) }

export default {
  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: '',

    nbFetching: 0
    }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this

    if (process.client) {
      // add to window so we can listen when ready
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  async mounted () {
    this.$loading = this.$refs.loading
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    },

    isFetching () {
      return this.nbFetching > 0
    },

    isPreview () {
      return Boolean(this.$options.previewData)
    },
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$fetch) {
          p.push(page.$fetch())
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch())
          }
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail(error)
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },
    errorChanged () {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err)
          }
          if (this.$loading.finish) {
            this.$loading.finish()
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context)
        }

        this.setLayout(errorLayout)
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    },
  },

  components: {
    NuxtLoading
  }
}
