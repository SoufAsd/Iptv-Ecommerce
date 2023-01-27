<template>
  <div class="register-form">
    <ValidationObserver v-slot="{ handleSubmit,invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input v-model="email" placeholder="email" type="email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="username"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <input v-model="username" placeholder="username" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="password"
          rules="required|alpha_dash|min:6"
          v-slot="{ errors }"
        >
          <input v-model="password" placeholder="password" type="password" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit" :disabled="invalid">Register</button>
      </form>
    </ValidationObserver>
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
      username: "",
      password: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    onSubmit() {
      const prod = {
        username: this.username,
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
