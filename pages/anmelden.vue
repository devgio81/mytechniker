<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <h2 class="text-center">
            Login
          </h2>
          <p class="text-center text-muted mb-4 pb-4">
            Logge dich ein und finde deine Kunden.
          </p>
          <form class="one-col-form text-center" @submit.prevent="loginUser">
            <input
              v-model="email"
              type="email"
              name="nutzer-email"
              placeholder="E-Mail"
            >
            <input
              v-model="password"
              type="password"
              name="nutzer-passwort"
              placeholder="Passwort"
            >
            <p v-if="getAuthError" class="text-center form-error">
              Deine E-Mail oder dein Passwort ist leider falsch.
            </p>
            <input
              type="submit"
              class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 ml-3"
              value="Jetzt anmelden"
              @click.prevent="loginCurrentUser"
            >
            <p class="text-center">
              Du hast noch keinen Account? Jetzt
              <nuxt-link to="/registrieren">
                registrieren
              </nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'main',
  data: () => ({
    email: '',
    password: ''
  }),

  computed: {
    ...mapGetters([
      'getAuthError'
    ]),

    loggedIn () {
      return this.$auth.loggedIn
    }
  },

  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/dashboard/home')
    }
  },

  methods: {
    ...mapActions(['login']),
    loginCurrentUser () {
      this.login({ email: this.email, password: this.password })
    }
  }
}
</script>

<style></style>
