<template>
  <div
    id="v-pills-request"
    class="tab-pane show active fade"
    role="tabpanel"
    aria-labelledby="v-pills-request-tab"
  >
    <h1 class="h3 text-secondary mb-4">
      Kundenanfragen <span class="text-dark">>
        Hamudi Tamam</span>
    </h1>
    <div class="row no-marginLR match-my-cols justify-content-center align-items-start">
      <div class="col-12 col-md-12 col-xl-5">
        <div class="content-div p-3">
          <div class="row justify-content-between">
            <div class="col-7">
              <nav class="navbar navbar-light p-0 mb-1">
                <form class="form-inline">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span id="basic-addon1" class="input-group-text"><i
                        class="fas fa-search"
                      /></span>
                    </div>
                    <input
                      type="text"
                      class="form-control search-request"
                      placeholder="Suche"
                      aria-label="Suche"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                </form>
              </nav>
            </div>
            <div class="col-5">
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
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    > Alle
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    > Ungelesen
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    > Gelöscht
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    > Favoriten
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    > Anhang
                  </label>
                  <button class="dropright dropdown-item">
                    <button
                      id="dropdownMenu3"
                      class="dropdown-item dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sortieren
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                      <label class="dropdown-item text-primary">Sortieren
                        nach</label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        > Datum
                      </label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        > Produkt
                      </label>
                      <label
                        class="dropdown-item text-primary"
                      >Reihenfolge</label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        > Alte oben
                      </label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        > Neue oben
                      </label>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row new-request">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/Avatar-kl_new.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Hamudi Tamam
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - Samsung S9
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                3 Min
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/f75d557a41aaedfdd11c52e25d520c4a-kl.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Murat Aynan
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - iPhone XS
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                10 Min
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row new-request">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/e816039d16f41caec8de537145c1d76b_new.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Jessie Jackson
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - Samsung TabA
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                3 Std
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/20ee957724775f2316d370d7142efc3f_kl.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Mark Heizung
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - Samsung S9
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                02.02.2020
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/f75d557a41aaedfdd11c52e25d520c4a-kl.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Murat Aynan
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - iPhone XS
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                02.02.2020
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row new-request">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/e816039d16f41caec8de537145c1d76b_new.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Jessie Jackson
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - Samsung TabA
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                01.02.2020
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/20ee957724775f2316d370d7142efc3f_kl.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Mark Heizung
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - Samsung S9
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                01.02.2020
              </p>
            </div>
          </div>
          <hr class="m-0 grey-divider">
          <div class="row">
            <div class="col-2">
              <img
                class="mt-2 mb-2"
                src="~/assets/css/img/f75d557a41aaedfdd11c52e25d520c4a-kl.png"
                alt="Responsive image"
              >
            </div>
            <div class="col-7">
              <p class="font-weight-bolder mb-0 ml-4">
                Murat Aynan
              </p>
              <p class="mb-0 ml-4">
                Displayschaden - iPhone XS
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p class="text-muted text-small text-right">
                01.02.2020
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-12 col-xl-7">
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
                Status: offen
              </p>
            </div>
            <div class="col-2">
              <p class="text-black-50 text-small text-right">
                <i
                  class="far fa-star"
                />
              </p>
            </div>
          </div>
          <hr class="fulldivider">
          <h5 class="mt-5 mb-3">
            Displayschaden - Samsung S9
          </h5>
          <div class="row">
            <div class="col-auto">
              <p class="text-black-50 text-small text-left">
                <i
                  class="far fa-calendar text-black-50"
                /> 10.02.2020
              </p>
            </div>
            <div class="col-8">
              <p class="text-black-50 text-small text-left">
                <i
                  class="fas fa-map-marker-alt"
                /> 10715 Berlin - Wilmersdorf ·
                Entfernung: 2km
              </p>
            </div>
          </div>
          <p class="font-weight-bolder mt-4">
            Beschreibung
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam, quis
            nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute
            irure doloin reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, unt in culpa qui
            officia
            deserunt mollit anim id est laborum.
          </p>
          <p class="font-weight-bolder mt-3">
            Produkt Details
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam, quis
            nostrud
            exercitation ullamco laboris nisi ut
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
          <div class="row">
            <div class="col-auto">
              <button type="submit" class="btn btn-primary green-btn">
                Auftrag
                annehmen
              </button>
            </div>
            <div class="col-auto pt-2">
              <a class="text-danger" href="https://www.w3schools.com">Auftrag
                ablehnen</a>
            </div>
          </div>
        </div>
        <!--<p class="text-center">Du hast zur Zeit keine Angebote online</p>-->
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  layout: 'login',
  data () {
    return {
      socket: io('https://socket.my-techniker.de', { transports: ['websocket'] }),
      user: this.$auth.loggedIn ? this.$auth.user.data.id : '',
      view: 'LIST',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      posts: [{
        position: {
          lat: 52.5,
          lng: 10.8
        },
        infoText: '<strong>Displayschaden - Samsung S9</strong>',
        subject: 'Displayschaden - Samsung S9',
        contactId: 'ee231bcc-8b21-4985-bd04-cba50f0680f9'
      }, {
        position: {
          lat: 52,
          lng: 10.5
        },
        infoText: '<strong>Displayschaden - Nokia</strong>',
        subject: 'Displayschaden - Nokia',
        contactId: '7581a79c-fdfc-4feb-ba1d-4f16f00c70b0'
      }]
    }
  },
  mounted () {
    const vm = this
    vm.socket.emit('connected', vm.user)
  },
  methods: {
    setView (view) {
      this.view = view
    },
    toggleInfoWindow (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoOptions.content = marker.infoText

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
    createRoom (e, contactId) {
      if (e) {
        e.preventDefault()
      }
      const vm = this
      vm.socket.emit('create_room', {
        user1: vm.user,
        user2: contactId
      })
      this.$router.push(`/dashboard/postfach?conversation=${vm.user}|${contactId}`)
    }
  }
}
</script>

<style></style>
