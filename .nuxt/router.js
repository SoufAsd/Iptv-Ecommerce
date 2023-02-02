import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ef3c1fe = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4ba7ff38 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _54fb6adc = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _62938802 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6219354e = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _2c1191d8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _290ec7d2 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _bfb6e56e = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _46e76c86 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _4fc73706 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _c7ccf4ca = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _47976c17 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _2f3673f6 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _635e607a = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _79a1bdc8 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _fd59a556 = () => interopDefault(import('..\\pages\\pack.vue' /* webpackChunkName: "pages/pack" */))
const _2c9cf366 = () => interopDefault(import('..\\pages\\packdetail.vue' /* webpackChunkName: "pages/packdetail" */))
const _44a0cbc4 = () => interopDefault(import('..\\pages\\packdetail\\_id.vue' /* webpackChunkName: "pages/packdetail/_id" */))
const _dda33b5a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4002efb2 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _e2965e58 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _4b0c1b1c = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _7236d80f = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _65595b7a = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _2caf5f08 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _9c85d29e = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _13eb497a = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _0c74cdfe = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _f9f526c4 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _352dbe8a = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _6333e448 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _4f1541c8 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _d0d5a512 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _103df9c6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1ef3c1fe,
    name: "about"
  }, {
    path: "/blog",
    component: _4ba7ff38,
    name: "blog"
  }, {
    path: "/cart",
    component: _54fb6adc,
    name: "cart"
  }, {
    path: "/checkout",
    component: _62938802,
    name: "checkout"
  }, {
    path: "/compare",
    component: _6219354e,
    name: "compare"
  }, {
    path: "/contact",
    component: _2c1191d8,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _290ec7d2,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _bfb6e56e,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _46e76c86,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _4fc73706,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _c7ccf4ca,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _47976c17,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _2f3673f6,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _635e607a,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _79a1bdc8,
    name: "my-account"
  }, {
    path: "/pack",
    component: _fd59a556,
    name: "pack"
  }, {
    path: "/packdetail",
    component: _2c9cf366,
    name: "packdetail",
    children: [{
      path: ":id?",
      component: _44a0cbc4,
      name: "packdetail-id"
    }]
  }, {
    path: "/privacy-policy",
    component: _dda33b5a,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _4002efb2,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _e2965e58,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _4b0c1b1c,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _7236d80f,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _65595b7a,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _2caf5f08,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _9c85d29e,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _13eb497a,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _0c74cdfe,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _f9f526c4,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _352dbe8a,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _6333e448,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _4f1541c8,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _d0d5a512,
    name: "product-slug"
  }, {
    path: "/",
    component: _103df9c6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
