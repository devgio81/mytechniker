<template>
  <header class="page-header">
    <div class="container p-0">
      <nav class="navbar navbar-expand-xl navbar-light pt-3 pl-0 pr-0">
        <nuxt-link class="navbar-brand mr-auto ml-1" to="/"><img src="~/assets/css/img/Logo.png" alt="Logo"></nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNavAltMarkup" class="collapse navbar-collapse justify-content-around">
          <div class="navigation navbar-nav ml-auto">
            <nuxt-link class="nav-item nav-link font-weight-normal ml-2 mr-2" to="/">Home<span
              class="sr-only"
            >(current)</span></nuxt-link>
            <nuxt-link v-scroll-to="'#funktioniert'" to="#" class="nav-item nav-link font-weight-normal ml-2 mr-2">
              So funktioniert´s
            </nuxt-link>
            <nuxt-link class="nav-item nav-link font-weight-normal ml-2 mr-2" to="/umwelttechnologie">
              Think Green
            </nuxt-link>
          </div>
          <div class="login navbar-nav mt-1 ml-4 ml-auto" v-if="!isLoggedIn">
            <nuxt-link class="nav-item nav-link font-weight-bolder text-dark" to="/anmelden">
              LOGIN
            </nuxt-link><span class="d-none d-xl-block mt-2 ml-2 mr-2"> |
            </span><nuxt-link class="nav-item nav-link font-weight-bolder text-dark" to="/registrieren">REGISTRIEREN</nuxt-link>
            <a
              class="nav-item nav-link btn btn-primary custom-navi-button text-light pl-4 pr-4 ml-4"
              href="/preise"
              role="button"
            >Werde Techniker</a>
          </div>
          <div v-if="isLoggedIn" class="login navbar-nav mt-1 ml-4">
            <nuxt-link
              class="nav-item nav-link btn btn-primary custom-navi-button text-light pl-4 pr-4 ml-4"
              to="/dashboard/home"
              role="button"
            >
              Dashboard
            </nuxt-link>
          </div>
        </div>
        <div v-if="isLoggedIn" class="login navbar-nav mt-1 ml-4">
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a
                class="nav-link nav-link-loggedin dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                href="javascript:void(0)"
                @click="toggleMenu"
              >{{ loggedInUser.profile.firstname }} {{ loggedInUser.profile.lastname }}</a>
              <div class="dropdown-menu" :style="'display:' + display">
                <a class="dropdown-item" href="javascript:void(0)" @click="logoutUser">logout</a>
              </div>
            </li>
          </ul>
          <img src="~/assets/css/img/Avatar-kl.png" class="ml-2" HEIGHT="46" WIDTH="46" alt="Responsive image">
        </div>
      </nav>
    </div>
    <div class="container">
      <Search v-if="search" />
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import Search from './Search'
export default {
  components: {
    Search
  },
  props: {
    search: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    display: 'none'
  }),

  computed: {
    ...mapGetters([
      'isLoggedIn',
      'loggedInUser'
    ])
  },

  methods: {
    toggleMenu () {
      this.display = this.display === 'none' ? 'block' : 'none'
    },
    logoutUser () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style></style>
