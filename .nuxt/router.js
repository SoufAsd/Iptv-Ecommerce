import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24631ac1 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _21cd2c24 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _77aff71c = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _78b0177c = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _7f807119 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _caf77a58 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _749df7dc = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _43a5e909 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _ffe4b506 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _1c715346 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _cdc49c4a = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _14418857 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _352e1b76 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _6af30c03 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _3167cbf0 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _2dd09e93 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _62b77bf2 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _4d6e45d8 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _d4bfb148 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _34b463cf = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _17e75e83 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _343c5cbc = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _7e6732f1 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _10ef75ba = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _5ada0541 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _103958de = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _45179aca = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _43602bc8 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _20168adc = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _343769b7 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _441af586 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _24631ac1,
    name: "about"
  }, {
    path: "/blog",
    component: _21cd2c24,
    name: "blog"
  }, {
    path: "/cart",
    component: _77aff71c,
    name: "cart"
  }, {
    path: "/checkout",
    component: _78b0177c,
    name: "checkout"
  }, {
    path: "/compare",
    component: _7f807119,
    name: "compare"
  }, {
    path: "/contact",
    component: _caf77a58,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _749df7dc,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _43a5e909,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _ffe4b506,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _1c715346,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _cdc49c4a,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _14418857,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _352e1b76,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _6af30c03,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _3167cbf0,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _2dd09e93,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _62b77bf2,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _4d6e45d8,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _d4bfb148,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _34b463cf,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _17e75e83,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _343c5cbc,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _7e6732f1,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _10ef75ba,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _5ada0541,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _103958de,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _45179aca,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _43602bc8,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _20168adc,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _343769b7,
    name: "product-slug"
  }, {
    path: "/",
    component: _441af586,
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
