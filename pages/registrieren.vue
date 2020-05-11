<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <h2 class="text-center">
            Registrierung
          </h2>
          <p class="text-center text-muted mb-4 pb-4">
            Registriere dich in 30 Sekunden und finde deine Dienstleister.
          </p>
          <form class="one-col-form text-center" @submit.prevent="register">
            <input v-model="firstname" type="text" required name="nutzer-vorname" placeholder="Vorname">
            <p v-if="getError.errors.firstname" class="text-left form-error">
              {{ getError.errors.firstname[0] }}
            </p>
            <input v-model="lastname" type="text" required name="nutzer-nachname" placeholder="Nachname">
            <p v-if="getError.errors.lastname" class="text-left form-error">
              {{ getError.errors.lastname[0] }}
            </p>
            <input v-model="email" type="email" required name="nutzer-email" placeholder="E-Mail">
            <p v-if="getError.errors.email" class="text-left form-error">
              {{ getError.errors.email[0] }}
            </p>
            <input v-model="password" type="password" required name="nutzer-passwort" placeholder="Passwort">
            <p v-if="getError.errors.password" class="text-left form-error">
              {{ getError.errors.password[0] }}
            </p>
            <input
              v-model="password_confirm"
              type="password"
              name="nutzer-passwort-wiederholung"
              placeholder="Passwort wiederholen"
              required
            >
            <p v-if="getError.errors.password" class="text-left form-error">
              {{ getError.errors.password[0] }}
            </p>
            <p class="text-center">
              <input v-model="terms" type="checkbox" name="nutzer-akzeptanz" value="ja">
              Ich akzeptiere die
              <a href="/nutzungsbedingungen">Nutzungsbedingungen</a> und die
              <a href="datenschutzerklaerung">Datenschutzerklärung</a>.
            </p><p v-if="getError.errors.terms" class="text-left form-error">
              {{ getError.errors.terms[0] }}
            </p>
            </p>
            <input
              type="submit"
              class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 ml-3"
              value="Jetzt registrieren"
              @click.prevent="register"
            >
            <p class="text-center">
              Du hast bereits einen Account? Jetzt
              <a href="/anmelden">anmelden</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  layout: 'main',
  data: () => ({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirm: '',
    terms: false
  }),

  computed: {
    ...mapGetters([
      'getError'
    ])
  },

  methods: {
    register () {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirm,
        terms: this.terms,
        user_type: 'customer'
      }
      this.$store.dispatch('register', data)
    }
  }
}
</script>

<style></style>
