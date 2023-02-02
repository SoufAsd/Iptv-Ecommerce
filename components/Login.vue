<template>
  <div class="login-form white-bg">
    <div class="row mb-4">
      <div class="col">
        <button class="fa fa-facebook"></button>
      </div>
      <div class="col">
        <button @click="loginWithGoogle()" class="fa fa-google"></button>
      </div>
    </div>
    <ValidationObserver v-slot="{ handleSubmit, invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
        <span>{{ errors[0] }}</span>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Email"
          />
        </ValidationProvider>
        <ValidationProvider
          name="password"
          rules="required|alpha_dash|min:6"
          v-slot="{ errors }"
        >
        <span>{{ errors[0] }}</span>
        <input
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
      </ValidationProvider>
        <div class="button-box">
          <div class="login-toggle-btn">
            <input type="checkbox" />
            <label>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </ValidationObserver>
    <notifications position="bottom right" group="foo" />
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    rules,
    required
  },
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    loginWithGoogle(){
      this.$auth.loginWith("google", { params: { prompt: "select_account" } });
    },
    async onSubmit() {
      const prod = {
        password: this.password,
        email: this.email,
      };
      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };
      await this.$auth.loginWith('local', { data: prod })
    
    },
    handleCredentialResponse(response) {
      console.log(response);
    },
  },
};
</script>
<style lang="scss">
.fa {
  padding: 10px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  margin: auto 0;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.white-bg {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
