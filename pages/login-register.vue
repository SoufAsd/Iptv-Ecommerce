<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="login-register" />

    <div class="login-register-area pt-100 pb-100 bg-img">
      <div class="container">
        <div class="login-register-tab-list nav">
          <button
          class="white-text"
            @click="comA('Login')"
            :class="{ active: isActive === 'Login' }"
          >
            Login
          </button>
          <button
          class="white-text"
            @click="comA('Register')"
            :class="{ active: isActive === 'Register' }"
          >
            Register
          </button>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <component :is="isActive" />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      isActive: "Login",
    };
  },

  methods: {
    comA(item) {
      this.isActive = item;
    },
  },
  head() {
    return {
      title: "Login / Register",
      meta: [
        {
          name: "google-signin-client_id",
          content:
            "619518220362-cacdb3tks7nhra1eutrbjq78q13ikbb1.apps.googleusercontent.com",
        },
      ],
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          
        },
      ],
    };
  },
};
</script>
<style scoped>
.bg-img{
  background-image: url('@/static/img/bg/login-register-bg.png')
}
.white-text{
  color:#87B2FA
}
</style>
