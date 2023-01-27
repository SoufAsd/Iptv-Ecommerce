import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login-register",
    "logout": "/",
    "home": "/",
    "callback": "/login-register"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "google"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // google
  $auth.registerStrategy('google', new Oauth2Scheme($auth, {
  "clientId": "619518220362-cacdb3tks7nhra1eutrbjq78q13ikbb1.apps.googleusercontent.com",
  "codeChallengeMethod": "",
  "responseType": "code",
  "endpoints": {
    "authorization": "https://accounts.google.com/o/oauth2/auth",
    "userInfo": "http://localhost:8000/api/client/google/get",
    "token": "http://localhost:8000/api/client/google/post"
  },
  "name": "google",
  "scope": [
    "openid",
    "profile",
    "email"
  ]
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
