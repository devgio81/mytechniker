<template>
  <div class="tab-pane col-12 col-md-10 col-lg-10 pt-4">
    <div id="dienstleister-liste" class="tab-content mt-4">
      <div
        id="v-pills-home"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <h1>Meine Angebote</h1>
        <div class="row no-marginLR match-my-cols justify-content-center align-items-start">
          <div class="col-12 col-md-12 col-xl-5">
            <form class="content-div p-3" @submit.prevent="createOffer">
              <h5 class="mb-4">
                Angebot erstellen
              </h5>
              <div class="form-group">
                <div class="d-flex">
                  <label class="mr-auto" for="exampleFormControlInput1">Titel des
                    Angebots:</label>
                </div>
                <input v-model="title" class="form-control bg-light" type="text">
                <p v-if="getOfferError.errors.title" class="text-left form-error">
                  {{ getOfferError.errors.title[0] }}
                </p>
              </div>
              <div class="form-group">
                <div class="d-flex">
                  <label class="mr-auto" for="exampleFormControlInput1">Rabatt in
                    Prozent:</label>
                </div>
                <input v-model="discountPercent" class="form-control bg-light" type="text">
                <p v-if="getOfferError.errors.discount_percent" class="text-left form-error">
                  {{ getOfferError.errors.discount_percent[0] }}
                </p>
              </div>
              <div class="form-group">
                <div class="d-flex">
                  <label
                    class="mr-auto"
                    for="exampleFormControlInput1"
                  >Beschreibung:</label>
                </div>
                <input v-model="description" class="form-control bg-light" type="text">
                <p v-if="getOfferError.errors.description" class="text-left form-error">
                  {{ getOfferError.errors.description[0] }}
                </p>
              </div>
              <div class="form-group">
                <div class="d-flex">
                  <label class="mr-auto" for="exampleFormControlInput1">Normalpreis
                    (Optional)</label>
                </div>
                <input v-model="price" class="form-control bg-light" type="text">
                <p v-if="getOfferError.errors.price" class="text-left form-error">
                  {{ getOfferError.errors.price[0] }}
                </p>
              </div>
              <div class="form-group">
                <div class="d-flex">
                  <label class="mr-auto" for="exampleFormControlInput1">Rabatt bis
                    zum:</label>
                </div>
                <input v-model="discountUntil" class="form-control bg-light" type="text">
                <p v-if="getOfferError.errors.discount_until" class="text-left form-error">
                  {{ getOfferError.errors.discount_until[0] }}
                </p>
              </div>
              <button type="submit" class="btn btn-primary green-btn mt-3" @click.prevent="createOffer">
                Angebot
                erstellen
              </button>
            </form>
          </div>
          <div class="col-12 col-md-12 col-xl-7">
            <div class="content-div p-3">
              <div class="row justify-content-between">
                <div class="col-6">
                  <h5 class="mb-4">
                    Aktuelle Angebote
                  </h5>
                </div>
                <div class="col-6">
                  <div class="dropdown float-right">
                    <button
                      id="dropdownMenu2"
                      class="btn nav-link-loggedin dropdown-toggle text-muted"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button class="dropdown-item" type="button">
                        Action
                      </button>
                      <button class="dropdown-item" type="button">
                        Another
                        action
                      </button>
                      <button class="dropdown-item" type="button">
                        Something else
                        here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="(offer,i) in getOffers" :key="i">
                <div class="row">
                  <div class="col-1">
                    <img src="~/assets/css/img/Avatar-kl.png" alt="Responsive image">
                  </div>
                  <div class="col-8">
                    <p class="font-weight-bolder mb-0 ml-3">
                      <nuxt-link style="cursor: pointer" :to="'/dashboard/angebote/' + offer.id ">
                        {{ offer.title }}
                      </nuxt-link>
                    </p>
                    <p class="mb-0 ml-3">
                      {{ offer.discountPercent }}% Rabatt bis zum {{ offer.discountUntil }}
                    </p>
                  </div>
                  <div class="col-3">
                    <p class="text-muted text-small text-right">
                      {{ offer.createdAt.ago }}
                    </p>
                  </div>
                </div>
                <hr>
              </div>
              <!--<p class="text-center">Du hast zur Zeit keine Angebote online</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OffersTechnician',
  data: () => ({
    title: '',
    description: '',
    price: '',
    discountPercent: '',
    discountUntil: ''

  }),
  computed: {
    ...mapGetters([
      'getOfferError',
      'getOffers'
    ])
  },

  created () {
    this.$store.dispatch('loadOffers')
  },
  methods: {
    createOffer () {
      const data = {
        title: this.title,
        description: this.description,
        discount_percent: this.discountPercent,
        discount_until: this.discountUntil
      }

      if (this.price.length > 0) {
        const price = {
          price: this.price
        }

        const offerData = { ...data, ...price }

        this.$store.dispatch('offer', offerData)
      } else {
        this.$store.dispatch('offer', data)
      }
    }
  }
}
</script>

<style scoped>

</style>
