import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ab6af30 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _37f57153 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _597098cd = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _a823551a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _e17eb470 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _ab7710fa = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3dfbfc83 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _3fe96210 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _1c730b6c = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _0cb8ab37 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _2a8c520c = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _0488e048 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _76d79276 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _3983f718 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _51021a0e = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _f46f4974 = () => interopDefault(import('..\\pages\\pack.vue' /* webpackChunkName: "pages/pack" */))
const _eb0baed2 = () => interopDefault(import('..\\pages\\packdetail.vue' /* webpackChunkName: "pages/packdetail" */))
const _654ba59a = () => interopDefault(import('..\\pages\\packdetail\\_id.vue' /* webpackChunkName: "pages/packdetail/_id" */))
const _b3c8d1f8 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _44781da3 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _55cc0676 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _dd1d71e6 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _69ab5a7e = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _13b87e34 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _300d7c6d = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _6eae8ae2 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _bb43d42a = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _43206672 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _7a21380f = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _56f71c8a = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _6dbcc10d = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _363ed00b = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a6fb3bb0 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _cb22ec16 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7ab6af30,
    name: "about"
  }, {
    path: "/blog",
    component: _37f57153,
    name: "blog"
  }, {
    path: "/cart",
    component: _597098cd,
    name: "cart"
  }, {
    path: "/checkout",
    component: _a823551a,
    name: "checkout"
  }, {
    path: "/compare",
    component: _e17eb470,
    name: "compare"
  }, {
    path: "/contact",
    component: _ab7710fa,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _3dfbfc83,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _3fe96210,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _1c730b6c,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _0cb8ab37,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _2a8c520c,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _0488e048,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _76d79276,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _3983f718,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _51021a0e,
    name: "my-account"
  }, {
    path: "/pack",
    component: _f46f4974,
    name: "pack"
  }, {
    path: "/packdetail",
    component: _eb0baed2,
    name: "packdetail",
    children: [{
      path: ":id?",
      component: _654ba59a,
      name: "packdetail-id"
    }]
  }, {
    path: "/privacy-policy",
    component: _b3c8d1f8,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _44781da3,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _55cc0676,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _dd1d71e6,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _69ab5a7e,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _13b87e34,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _300d7c6d,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _6eae8ae2,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _bb43d42a,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _43206672,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _7a21380f,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _56f71c8a,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _6dbcc10d,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _363ed00b,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _a6fb3bb0,
    name: "product-slug"
  }, {
    path: "/",
    component: _cb22ec16,
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
