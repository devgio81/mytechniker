<template>
  <div>
    <header class="page-header-loggedin">
      <nav class="navbar navbar-expand-xl logged-in-navi navbar-light pt-4">
        <nuxt-link class="navbar-brand mr-auto" to="/">
          <img class="navbrand" src="~/assets/css/img/Logo.png" alt="Logo">
        </nuxt-link>
        <div class="input-group input-search mr-auto">
          <input
            class="form-control first-form-control mx-auto"
            type="search"
            placeholder="Finde deine Kunden"
            aria-label="Search"
          >
          <input type="text" class="form-control mx-auto col-3" placeholder="PLZ oder Ort">
          <input type="button" class="btn btn-primary loggedin-navi-button text-light pl-4 pr-4" value="Suchen">
        </div>
        <div v-if="loggedIn" class="navbar-nav input-group-login mx-auto">
          <div class="input-group input-profile">
            <a class="nav-item nav-link" href="#"><i class="fas fa-comments ml-5 mr-1" /></a>
            <a class="nav-item nav-link" href="#"><i class="fas fa-bell ml-1 mr-1" /></a>
            <div class="vl mt-2 ml-1 mr-1" />
            <ul class="nav nav-pills">
              <li class="nav-item dropdown">
                <a
                  class="nav-link nav-link-loggedin dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  style="cursor:pointer"
                  aria-haspopup="true"
                  aria-expanded="true"
                  @click="toggleMenu"
                >{{ user.data.profile.firstname }} {{ user.data.profile.lastname }}
                </a>
                <div class="dropdown-menu" :style="'display:' + display">
                  <a class="dropdown-item" href="javascript:void(0)" @click="logoutUser">Abmelden</a>
                  <nuxt-link class="dropdown-item" to="/dashboard/einstellungen">Einstellungen</nuxt-link>
                </div>
              </li>
            </ul>
            <img src="~/assets/css/img/Avatar-kl.png" class="ml-2" HEIGHT="46" WIDTH="46" alt="Responsive image">
          </div>
        </div>
      </nav>
    </header>
    <main>
      <Sidebar>
        <nuxt />
      </Sidebar>
    </main>
   <Footer></Footer>
  </div>

</template>

<script>

import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default {
  comments: {
    Sidebar, Footer
  },
  components: { Footer, Sidebar },
  asyncData (context) {
  },
  data: () => ({
    display: 'none'
  }),
  middleware: 'check-auth',
  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    },
    user () {
      return this.$auth.user
    }
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
<style>
  @import "assets/css/index.css";
</style>
