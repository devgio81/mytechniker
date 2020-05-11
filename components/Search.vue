<template>
  <div class="row d-flex align-items-center">
    <div class="col-12 col-md-12 col-lg-7 mt-5">
      <ul id="myTab" class="nav nav-tabs navi-header justify-content-start" role="tablist">
        <li class="nav-item select-provider">
          <a
            id="provider-tab"
            :class="['nav-link', 'pl-1', { active: isActiveProvider }]"
            data-toggle="tab"
            role="tab"
            style="cursor:pointer"
            aria-controls="provider"
            aria-selected="true"
            @click="toggleClass(2)"
          >Suche Dienstleister</a>
        </li>
        <li class="nav-item select-customer">
          <a
            id="customer-tab"
            :class="['nav-link', 'pr-1', { active: isActiveCustomer }]"
            data-toggle="tab"
            role="tab"
            style="cursor:pointer"
            aria-controls="customer"
            aria-selected="false"
            @click="toggleClass(1)"
          >Finde Kunden</a>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div id="provider" :class="['tab-pane', 'fade', { active: isActiveProvider}, { show: isActiveProvider }]" role="tabpanel" aria-labelledby="provider-tab">
          <h1 class="mt-4">
            Finde jetzt den passenden Techniker in deiner Umgebung.
          </h1>
          <div class="input-group mt-4">
            <model-select
              v-model="items"
              style="width: 350px"
              :options="getCategories"
              placeholder="Womit brauchst du Hilfe ?"
              @select="onSelect"
            />
            <input type="text" class="form-control second-form-control col-3" placeholder="Postleitzahl">
            <input type="button" class="btn btn-primary custom-button text-light pl-4 pr-4 ml-3" value="Suchen">
          </div>
        </div>
        <div id="customer" :class="['tab-pane' ,'fade', { active: isActiveCustomer }, { show: isActiveCustomer }]" role="tabpanel" aria-labelledby="customer-tab">
          <h1 class="mt-4">
            Finde neue Kunden und biete deinen technischen Service über uns an.
          </h1>
          <nuxt-link to="/preise">
            <input type="button" class="btn btn-primary custom-button text-light pl-4 pr-4 mt-4" value="Jetzt registrieren">
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-12 col-lg-5 mt-5">
      <div class="d-none d-lg-block d-xl-none d-none d-xl-block" style="text-align: center">
        <img v-if="picProvider === true" id="customerpic" :src="require('@/assets/css/img/' + selectedImage)">
        <img v-if="picCustomer === true" id="customerpic1" src="~/assets/css/img/_A7B7687_neu.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import { mapGetters } from 'vuex'

export default {
  name: 'Search',
  components: {
    ModelSelect
  },
  data: () => ({
    isActiveProvider: true,
    isActiveCustomer: false,
    picProvider: true,
    picCustomer: false,
    lastSelectItem: {},
    items: {
      value: '',
      text: ''
    },
    images: [
      '_A7B7635.JPG',
      '_A7B7600.JPG',
      '_A7B7722.JPG',
      '_A7B7687_neu.jpg'
    ],

    selectedImage: null
  }),
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  },

  created () {
    this.$store.dispatch('loadCategories')
    this.selectedImage = this.images[Math.floor(Math.random() * this.images.length)]
  },

  methods: {
    onSelect (items, lastSelectItem) {
      this.item = items
      this.lastSelectItem = lastSelectItem
    },

    toggleClass (id) {
      this.isActiveProvider = !this.isActiveProvider
      this.isActiveCustomer = !this.isActiveCustomer

      if (id === 1) {
        this.picProvider = false
        this.picCustomer = true
      } else if (id === 2) {
        this.picProvider = true
        this.picCustomer = false
      }
    }
  }
}
</script>

<style>
  @import 'vue-search-select/dist/VueSearchSelect.css';
</style>
