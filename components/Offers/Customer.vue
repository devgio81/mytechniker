<template>
  <div id="dienstleister-liste" class="tab-content mt-4">
    <div
      id="v-pills-home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      <h1 class="h3 text-secondary mb-4">
        Angebote <span class="text-dark">> 30% -
          Handydisplayreparatur Samsung und iPhone</span>
      </h1>
      <div class="content-div p-4">
        <div class="row">
          <div class="col-11 col-xl-3 col-lg-4 col-md-12">
            <img class="profile-picture" src="~/assets/css/img/avatar.png" alt="Responsive image">
          </div>
          <div class="col-11 col-xl-8 col-lg-7 col-md-12">
            <h3>Tech Repair<span class="h6 text-success"> (online)</span></h3>
            <div class="profile-rating">
              <span class="profile-rating-average">4.3</span>
              <span class="profile-rating-stars text-warning">★★★★</span><span>★</span>
              <span class="profile-rating-count">(26)</span>
            </div>
            <div class="profile-place">
              <i class="fas fa-map-marker-alt" />
              <span>Bettstraße 101, 10713 Wilmersdorf • Entfernung: 2km</span>
            </div>
            <div class="profile-opening-times">
              <div
                class="profile-opening-summary"
                onclick="showProfileOpeningTimes(this)"
              >
                <i class="fas fa-clock" />
                <span>Schließt um 20:00 Uhr</span>
                <i class="fas fa-chevron-down" />
              </div>
              <ul>
                <li>Montag: 09:00 bis 17:00 Uhr</li>
                <li>Dienstag: 09:00 bis 17:00 Uhr</li>
                <li>Mittwoch: 09:00 bis 17:00 Uhr</li>
                <li>Donnerstag: 09:00 bis 17:00 Uhr</li>
                <li>Freitag: 09:00 bis 17:00 Uhr</li>
                <li>Samstag: 09:00 bis 15:00 Uhr</li>
                <li>Sonntag: geschlossen</li>
              </ul>
            </div>
            <div>
              <a
                href="#"
                type="submit"
                class="btn btn-primary custom-button text-light mt-3"
              >Techniker
                kontaktieren</a>
            </div>
          </div>
          <div class="col-1 col-xl-1 col-lg-1 col-md-12">
            <p class="text-black-50 text-small text-right">
              <i class="far fa-star" />
            </p>
          </div>
          <p class="ml-auto text-black-50 text-right">
            Angebot bis zum 31.02.2020
          </p>
        </div>
        <hr class="fulldivider">
        <div class="row justify-content-between">
          <div class="col-10">
            <h5>30% - Handydisplayreparatur Samsung und iPhone</h5>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-primary button-outline">
              <b>Preis: 180 €</b>
            </button>
          </div>
        </div>

        <p class="font-weight-bolder mt-4">
          Unser Angebot
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure doloin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, unt in culpa qui officia
          deserunt mollit anim id est laborum.
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

        <p class="font-weight-bolder mt-3">
          Top Bewertung
        </p>
        <div class="row">
          <div class="col-auto">
            <img src="~/assets/css/img/f75d557a41aaedfdd11c52e25d520c4a.png" alt="Responsive image">
          </div>
          <div class="col-auto">
            <p class="mt-2">
              Jonah Jones <span class="text-black-50 ml-3"> 28.01.2020</span>
            </p>
          </div>
          <div class="col-auto">
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star unchecked mt-2" />
            <span class="fa fa-star unchecked mt-2" />
          </div>
        </div>
        <p class="mb-4 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          tempor
          incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure doloin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, unt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div class="row">
          <div class="col-auto">
            <img src="~/assets/css/img/f75d557a41aaedfdd11c52e25d520c4a.png" alt="Responsive image">
          </div>
          <div class="col-auto">
            <p class="mt-2">
              Jonah Jones <span class="text-black-50 ml-3"> 28.01.2020</span>
            </p>
          </div>
          <div class="col-auto">
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star checked mt-2" />
            <span class="fa fa-star unchecked mt-2" />
            <span class="fa fa-star unchecked mt-2" />
          </div>
        </div>
        <p class="mb-4 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          tempor
          incididunt ut labore et dolore magna aliqua. Ut en ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure doloin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, unt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customer'
}
</script>

<style scoped>

</style>
