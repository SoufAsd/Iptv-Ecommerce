<template>
  <div class="register-form white-bg">
    <div class="row mb-4">
        <div class="col">
          <button class="fa fa-facebook"></button>
        </div>
        <div class="col">
          <button @click="RegisterWithGoogle()" class="fa fa-google"></button>
        </div>
      </div>
    <ValidationObserver v-slot="{ handleSubmit,invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
        <span>{{ errors[0] }}</span>
          <input v-model="email" placeholder="email" type="email" />
        </ValidationProvider>

        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
        <span>{{ errors[0] }}</span>
          <input v-model="Name" placeholder="Name" type="text" />
          
        </ValidationProvider>

        <ValidationProvider
          name="password"
          rules="required|alpha_dash|min:6"
          v-slot="{ errors }"
        >
        <span>{{ errors[0] }}</span>
          <input v-model="password" placeholder="password" type="password" />
          
        </ValidationProvider>
        <div class="button-box">
          <button type="submit">Register</button>
        </div>

      </form>
    </ValidationObserver>
    <notifications position="bottom right" group="register" />
    <!-- <button @click="submit">Register</button> -->
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    rules,
    required
  },
  data() {
    return {
      Name: "",
      password: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    RegisterWithGoogle() {
      this.$auth.loginWith("google", { params: { prompt: "select_account" } });
    },
    onSubmit() {
      const prod = {
        name: this.Name,
        password: this.password,
        email: this.email,
        phone: this.phone,
      };
      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };
      this.$store.dispatch("registerUser", {prod,requestOptions});
    },
  },
};
</script>
