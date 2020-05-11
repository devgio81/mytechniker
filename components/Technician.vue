<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <h2 class="text-center">
            Werde Techniker
          </h2>
          <p class="text-center text-muted mb-4 pb-4">
            Registriere dich in 60 Sekunden und erhöhe deine Reichweite.
          </p>
          <form class="one-col-form text-center" @submit.prevent="register">
            <input v-model="firstname" type="text" name="techniker-vorname" placeholder="Vorname">
            <p v-if="getError.errors.email" class="text-left form-error">
              {{ getError.errors.firstname[0] }}
            </p>
            <input v-model="lastname" type="text" required name="techniker-nachname" placeholder="Nachname">
            <p v-if="getError.errors.lastname" class="text-left form-error">
              {{ getError.errors.lastname[0] }}
            </p>
            <input v-model="company" type="text" required name="techniker-firmenname" placeholder="Firmenname">
            <p v-if="getError.errors.company" class="text-left form-error">
              {{ getError.errors.company[0] }}
            </p>
            <input v-model="email" type="email" rquired name="techniker-email" placeholder="E-Mail">
            <p v-if="getError.errors.email" class="text-left form-error">
              {{ getError.errors.email[0] }}
            </p>
            <input v-model="employeeId" type="text" name="techniker-mitarbeiter-id" placeholder="Mitarbeiter ID">
            <p v-if="getError.errors.mt_employee_id" class="text-left form-error">
              {{ getError.errors.mt_employee_id[0] }}
            </p>
            <div class="upload-field-wrapper">
              <span>Logo hochladen (optional)</span>
              <div class="upload-field">
                <input
                  id="techniker-logo"
                  ref="logo"
                  type="file"
                  name="techniker-logo"
                  class="inputfile inputfile-1"
                >
                <label for="techniker-logo"><span>Datei auswählen</span></label>
              </div>
            </div>
            <p v-if="getError.errors.logo" class="text-left form-error">
              {{ getError.errors.logo[0] }}
            </p>
            <div class="upload-field-wrapper">
              <span>Gewerbeanmeldung hochladen</span>
              <div class="upload-field">
                <input
                  id="techniker-gewerbeanmeldung"
                  ref="businessRegistration"
                  multiple
                  type="file"
                  name="techniker-gewerbeanmeldung"
                  class="inputfile inputfile-1"
                >
                <label for="techniker-gewerbeanmeldung"><span>Datei auswählen</span></label>
              </div>
            </div>
            <p v-if="getError.errors.business_registration" class="text-left form-error">
              {{ getError.errors.business_registration[0] }}
            </p>
            <div class="upload-field-wrapper">
              <span>Ausweis zur Legitimation hochladen</span>
              <div class="upload-field">
                <input
                  id="techniker-ausweis"
                  ref="idCard"
                  multiple
                  type="file"
                  name="techniker-ausweis"
                  class="inputfile inputfile-1"
                >
                <label for="techniker-ausweis"><span>Datei auswählen</span></label>
              </div>
            </div>
            <p v-if="getError.errors.id_card" class="text-left form-error">
              {{ getError.errors.id_card[0] }}
            </p>
            <input v-model="numberOfEmployees" required type="text" name="techniker-mitarbeiteranzahl" placeholder="Mitarbeiteranzahl">
            <p v-if="getError.errors.number_of_employees" class="text-left form-error">
              {{ getError.errors.number_of_employees[0] }}
            </p>
            <input v-model="password" required type="password" name="techniker-passwort" placeholder="Passwort">
            <p v-if="getError.errors.password" class="text-left form-error">
              {{ getError.errors.password[0] }}
            </p>
            <input v-model="password_confirm" required type="password" name="techniker-passwort-wiederholung" placeholder="Passwort wiederholen">
            <p v-if="getError.errors.password" class="text-left form-error">
              {{ getError.errors.password[0] }}
            </p>
            <p class="text-center">
              <input v-model="terms" type="checkbox" name="nutzer-akzeptanz" value="ja">
              Ich akzeptiere die <nuxt-link to="/nutzungsbedingungen">
                Nutzungsbedingungen
              </nuxt-link> und die <nuxt-link to="/datenschutz">
                Datenschutzerklärung
              </nuxt-link>.
            </p>
            <p v-if="getError.errors.terms" class="text-left form-error">
              {{ getError.errors.terms[0] }}
            </p>
            <input type="submit" class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 ml-3" value="Jetzt registrieren" @click.prevent="register">
            <p class="text-center">
              Du hast bereits einen Account? Jetzt <nuxt-link to="/anmelden">
                anmelden
              </nuxt-link>
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
  name: 'Technician',
  props: {
    subscription: {
      type: String,
      default: 'basic'
    }
  },
  data: () => ({
    firstname: '',
    lastname: '',
    email: '',
    terms: false,
    password: '',
    password_confirm: '',
    user_type: 'basic',
    company: '',
    employeeId: '',
    numberOfEmployees: ''
  }),

  computed: {
    ...mapGetters([
      'getError'
    ])
  },
  methods: {
    register () {
      const formData = new FormData()

      formData.append('business_registration', this.$refs.businessRegistration.files[0])
      formData.append('id_card', this.$refs.idCard.files[0])

      if (this.$refs.logo.files[0]) {
        formData.append('logo', this.$refs.logo.files[0])
      }

      formData.append('company', this.company)
      formData.append('number_of_employees', this.numberOfEmployees)
      formData.append('email', this.email)

      if (this.employeeId.length > 0) {
        formData.append('mt_employee_id', this.employeeId)
      }

      formData.append('firstname', this.firstname)
      formData.append('lastname', this.lastname)
      formData.append('password', this.password)
      formData.append('password_confirmation', this.password_confirm)
      formData.append('terms', this.terms)
      formData.append('user_type', 'technician_' + this.subscription)

      this.$store.dispatch('register', formData)
    }
  }
}
</script>

<style>

</style>
