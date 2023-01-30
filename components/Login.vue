<template>
  <div class="login-form">
    <button type="button" @click="loginWithGoogle()" class="login-with-google-btn">
      Sign in with Google
    </button>
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
    <!-- <button @click="loginWithGoogle()" icon-left="google">
      Sign in with Google
    </button> -->
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
<style lang="scss">
.login-with-google-btn {
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
}
</style>
