<template>
  <div>
    <div id="mySidebar" ref="sidebar" class="sidebar" @mouseover="toggleSidebarIn" @mouseout="toggleSidebarOut">
      <div id="v-pills-tab" class="nav flex-column nav-pills mt-4" role="tablist" aria-orientation="vertical">
        <nuxt-link
          v-if="getUserRole === 'customer'"
          id="v-pills-home-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <i
            class="fas fa-home loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Techniker</span>
        </nuxt-link>
        <nuxt-link
          v-if="getUserRole !== 'customer'"
          id="v-pills-home-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <i
            class="fas fa-home loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Home</span>
        </nuxt-link>
        <nuxt-link
          v-if="getUserRole !== 'customer'"
          id="v-pills-request-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/kundenanfragen"
          role="tab"
          aria-controls="v-pills-request"
          aria-selected="false"
        >
          <i
            class="fas fa-clipboard-list loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Kundenanfragen</span>
        </nuxt-link>
        <nuxt-link
          id="v-pills-messages-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/postfach"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          <i
            class="fas fa-comments loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Postfach</span>
        </nuxt-link>
        <nuxt-link
          id="v-pills-offers-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/angebote"
          role="tab"
          aria-controls="v-pills-offers"
          aria-selected="false"
        >
          <i
            class="fas fa-gavel loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Angebote</span>
        </nuxt-link>
        <nuxt-link
          v-if="getUserRole === 'customer'"
          id="v-pills-assignment-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/auftraege"
          role="tab"
          aria-controls="v-pills-assignment"
          aria-selected="false"
        >
          <i
            class="fas fa-user-check loggedin-sidenavi-icon fa-fw mr-1"
          /><span class="icon-text">Meine
            Aufträge</span>
        </nuxt-link>
        <nuxt-link
          id="v-pills-settings-tab"
          class="nav-link nav-link-control"
          data-toggle="pill"
          to="/dashboard/einstellungen"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          <i
            class="fas fa-cog loggedin-sidenavi-icon fa-fw mr-1"
          /><span
            class="icon-text"
          >Einstellungen</span>
        </nuxt-link>
      </div>
    </div>
    <section id="main" ref="main" class="profile-controls">
      <a id="nav_btn" class="float-right bg-white"><span>Toggle Menu</span></a>
      <div class="row no-marginLR">
        <div id="nav" class="col-12 col-md-3 col-lg-3 col-xl-1 logged-in-sidenavi pr-0 toggle">
          <div
            id="v-pills-tab"
            class="nav flex-column nav-pills mt-4"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              id="v-pills-home-tab"
              class="nav-link active nav-link-control"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            ><i
              class="fas fa-home loggedin-sidenavi-icon fa-fw mr-1"
            />Home</a>
            <a
              id="v-pills-messages-tab"
              class="nav-link nav-link-control"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            ><i
              class="fas fa-comments loggedin-sidenavi-icon fa-fw mr-1"
            />Postfach</a>
            <a
              id="v-pills-offers-tab"
              class="nav-link nav-link-control"
              data-toggle="pill"
              href="#v-pills-offers"
              role="tab"
              aria-controls="v-pills-offers"
              aria-selected="false"
            ><i
              class="fas fa-gavel loggedin-sidenavi-icon fa-fw mr-1"
            />Angebote</a>
            <a
              id="v-pills-settings-tab"
              class="nav-link nav-link-control"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            ><i
              class="fas fa-cog loggedin-sidenavi-icon fa-fw mr-1"
            />Einstellungen</a>
          </div>
        </div>
        <div class="col-12 col-md-9 col-lg-9 col-xl-10">
          <transition name="fade">
            <slot />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  methods: {
    toggleSidebarIn () {
      this.$refs.sidebar.style.width = '250px'
      this.$refs.main.style.marginLeft = '250px'
    },

    toggleSidebarOut () {
      this.$refs.sidebar.style.width = '85px'
      this.$refs.main.style.marginLeft = '85px'
    }
  },

  computed: {
    ...mapGetters([
      'getUserRole'
    ])
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
