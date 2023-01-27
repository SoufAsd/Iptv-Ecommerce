<template>
  <div class="login-form">
    <form @submit.prevent="onSubmit">
      <input
        type="email"
        v-model="email"
        name="user-name"
        placeholder="Email"
      />
      <input
        type="password"
        v-model="password"
        name="user-password"
        placeholder="Password"
      />
      <div class="button-box">
        <div class="login-toggle-btn">
          <input type="checkbox" />
          <label>Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
    <button @click="loginWithGoogle()" icon-left="google">
      Sign in with Google
    </button>
    <!-- <div class="g-signin2" data-onsuccess="onSignIn"> -->
    <!-- <div id="googleButton"></div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith("google");
    },
    onSubmit() {
      const prod = {
        // username: this.username,
        password: this.password,
        email: this.email,
        // phone: this.phone,
      };
      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };
      this.$store.dispatch("loginUser", { prod, requestOptions });
    },
    handleCredentialResponse(response) {
      console.log(response);
    },
  },
  // mounted() {
  //   // initialize Google Sign in
  //   google.accounts.id.initialize({
  //       client_id: '619518220362-cacdb3tks7nhra1eutrbjq78q13ikbb1.apps.googleusercontent.com',
  //       callback: this.handleCredentialResponse,
  //       context: 'signin'
  //     })

  //   // render button
  //   google.accounts.id.renderButton(
  //     document.getElementById('googleButton'),
  //     {
  //       type: 'standard',
  //       size: 'large',
  //       text: 'signin_with',
  //       shape: 'rectangular',
  //       logo_alignment: 'center',
  //       width: 250
  //     }
  //   )
  // },
};
</script>
