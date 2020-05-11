<template>
  <div id="dienstleister-liste" class="tab-content mt-4">
    <div
      id="v-pills-home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      <h1 class="h3 text-secondary mb-4">
        <nuxt-link to="/dashboard/angebote">
          Meine Angebote
        </nuxt-link><span class="text-dark">> {{ getById.title }}</span>
      </h1>
      <div class="content-div p-4">
        <div class="row">
          <div class="col-1">
            <img src="~/assets/css/img/Avatar-kl.png" alt="Responsive image">
          </div>
          <div class="col-8">
            <p class="font-weight-bolder mb-0 ml-4">
              Hamudi Tamam
            </p>
            <p class="mb-0 ml-4 text-black-50">
              Anzeigenr.: 25661897563
            </p>
          </div>
          <div class="col-2">
            <p class="text-black-50 text-small text-right">
              <i class="far fa-star" />
            </p>
          </div>
        </div>
        <hr class="fulldivider">
        <h5 class="mt-5 mb-3">
          {{ getById.discountPercent }}% Rabatt bis zum {{ getById.discountUntil }}
        </h5>
        <div class="row">
          <div class="col-auto">
            <p class="text-black-50 text-small text-left">
              <i
                class="far fa-calendar text-black-50"
              /> {{ getById.discountUntil }}
            </p>
          </div>
          <div class="col-8">
            <p class="text-black-50 text-small text-left">
              <i
                class="fas fa-eye text-black-50"
              /> 530
            </p>
          </div>
        </div>
        <p>
          {{ getById.description }}
        </p>
        <div class="row">
          <div class="col-auto">
            <span
              class="badge badge-pill badge-light p-3 text-left text-black-50 mt-2 mb-2"
            >Samsung
              S9</span>
          </div>
          <div class="col-auto">
            <span
              class="badge badge-pill badge-light p-3 text-left text-black-50 mt-2 mb-2"
            >OLED
              Screen</span>
          </div>
          <div class="col-auto">
            <span
              class="badge badge-pill badge-light p-3 text-left text-black-50 mt-2 mb-2"
            >Samsung
              S9</span>
          </div>
          <div class="col-auto">
            <span
              class="badge badge-pill badge-light p-3 text-left text-black-50 mt-2 mb-2"
            >OLED
              Screen</span>
          </div>
        </div>
        <hr class="fulldivider mt-5 mb-5">
        <a class="text-danger mb-5" href="https://www.w3schools.com">Angebot löschen</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Id',
  layout: 'login',
  computed: {
    ...mapGetters([
      'getOfferById'
    ]),
    getById () {
      return this.getOfferById(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
