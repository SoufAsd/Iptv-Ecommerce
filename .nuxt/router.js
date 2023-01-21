import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bb9edae = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _162aa6e8 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3c849bb4 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _0de88cda = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _360334fe = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _0002373c = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7bd2caaa = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _282b7b71 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _649337e5 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _6ec3e444 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _4de83273 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _7f237a22 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _cb991a46 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _2114d29b = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _b86e26c0 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _68dc5e2d = () => interopDefault(import('..\\pages\\pack.vue' /* webpackChunkName: "pages/pack" */))
const _381b35aa = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _278c208a = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _2d3151ac = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _2ceec818 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _a666ef92 = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _6bcfd31b = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _efb65d58 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _2a93ed89 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _748c135c = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _b5cac44e = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _c9b47d14 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _72e7853c = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _5fc48cb4 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _1997e978 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2b4d9f62 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _19dae3ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0bb9edae,
    name: "about"
  }, {
    path: "/blog",
    component: _162aa6e8,
    name: "blog"
  }, {
    path: "/cart",
    component: _3c849bb4,
    name: "cart"
  }, {
    path: "/checkout",
    component: _0de88cda,
    name: "checkout"
  }, {
    path: "/compare",
    component: _360334fe,
    name: "compare"
  }, {
    path: "/contact",
    component: _0002373c,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _7bd2caaa,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _282b7b71,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _649337e5,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _6ec3e444,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _4de83273,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _7f237a22,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _cb991a46,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _2114d29b,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _b86e26c0,
    name: "my-account"
  }, {
    path: "/pack",
    component: _68dc5e2d,
    name: "pack"
  }, {
    path: "/privacy-policy",
    component: _381b35aa,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _278c208a,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _2d3151ac,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _2ceec818,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _a666ef92,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _6bcfd31b,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _efb65d58,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _2a93ed89,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _748c135c,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _b5cac44e,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _c9b47d14,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _72e7853c,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _5fc48cb4,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _1997e978,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _2b4d9f62,
    name: "product-slug"
  }, {
    path: "/",
    component: _19dae3ee,
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
