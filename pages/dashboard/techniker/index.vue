<template>
  <div id="v-pills-tabContent" class="tab-content mt-4">
    <div
      id="v-pills-home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      <div id="dienstleister-liste" class="tab-content mt-4">
        <div class="d-flex mb-3">
          <h1>Angebote</h1>
          <button type="button" class="btn btn-primary custom-button ml-auto">
            <i class="fas fa-map-marker-alt text-light" /> Karte ansehen
          </button>
        </div>
        <div class="row panel-group ml-1">
          <div class="col-xl-3 col-lg-3 col-md-12 filter-panel">
            <h2>Filter</h2>
            <div class="filter-group">
              <h3>Produkt</h3>
              <div class="filter-list">
                <label>
                  <input type="radio" name="filter-product" value="0" checked>
                  <span>Alle</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="1">
                  <span>Produktname</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="2">
                  <span>Produktname</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="3">
                  <span>Produktname</span>
                </label>
                <label class="hide hidden">
                  <input type="radio" name="filter-product" value="4">
                  <span>Produktname</span>
                </label>
              </div>
              <div class="filter-more" onclick="toggleFilter(this)">
                <span>mehr</span> <i
                  class="fas fa-chevron-down"
                />
              </div>
            </div>
            <div class="filter-group">
              <h3>Produktgröße</h3>
              <div class="filter-list">
                <label>
                  <input type="radio" name="filter-size" value="0" checked>
                  <span>Alle</span>
                </label>
                <label>
                  <input type="radio" name="filter-size" value="1">
                  <span>Produktgröße</span>
                </label>
                <label>
                  <input type="radio" name="filter-size" value="2">
                  <span>Produktgröße</span>
                </label>
                <label>
                  <input type="radio" name="filter-size" value="3">
                  <span>Produktgröße</span>
                </label>
                <label class="hide hidden">
                  <input type="radio" name="filter-size" value="4">
                  <span>Produktgröße</span>
                </label>
              </div>
              <div class="filter-more" onclick="toggleFilter(this)">
                <span>mehr</span> <i
                  class="fas fa-chevron-down"
                />
              </div>
            </div>
            <div class="filter-group">
              <h3>Entfernung</h3>
              <div class="filter-list">
                <label>
                  <input type="radio" name="filter-date" value="0" checked>
                  <span>Alle</span>
                </label>
                <label>
                  <input type="radio" name="filter-date" value="1">
                  <span>Datum</span>
                </label>
                <label>
                  <input type="radio" name="filter-date" value="2">
                  <span>Datum</span>
                </label>
                <label>
                  <input type="radio" name="filter-date" value="3">
                  <span>Datum</span>
                </label>
                <label class="hide hidden">
                  <input type="radio" name="filter-date" value="4">
                  <span>Datum</span>
                </label>
              </div>
              <div class="filter-more" onclick="toggleFilter(this)">
                <span>mehr</span> <i
                  class="fas fa-chevron-down"
                />
              </div>
            </div>
            <div class="filter-group">
              <h3>Produkt</h3>
              <div class="filter-list">
                <label>
                  <input type="radio" name="filter-product" value="0" checked>
                  <span>Alle</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="1">
                  <span>1km</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="2">
                  <span>10km</span>
                </label>
                <label>
                  <input type="radio" name="filter-product" value="3">
                  <span>100km</span>
                </label>
                <label class="hide hidden">
                  <input type="radio" name="filter-product" value="4">
                  <span>1000km</span>
                </label>
              </div>
              <p class="blue-headline mt-5">
                Filter zurücksetzen
              </p>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12">
            <h2 class="mb-4">
              Deine Angebote
            </h2>
            <div v-for="i in 5" :key="i">
              <div class="row provider-profile-overview profile-overview">
                <div class="col-lg-2">
                  <img class="profile-picture img-fluid" src="~/assets/css/img/avatar.png">
                  <p class="text-black-50 text-small top-right">
                    <i
                      class="far fa-star text-light"
                    />
                  </p>
                </div>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-9">
                      <h3>Tech Repair</h3>
                      <div class="profile-rating mb-3">
                        <span
                          class="profile-rating-stars text-warning"
                        >★★★★</span><span>★</span>
                        <a
                          class="text-primary ml-4"
                          href="#"
                        ><u>Weiterempfehlen</u></a>
                      </div>
                      <div class="profile-place">
                        <i class="fas fa-map-marker-alt" />
                        <span class="text-muted">Bettstraße 101, 10713 Wilmersdorf •
                          Entfernung:
                          2km</span>
                      </div>
                      <div class="profile-opening-times">
                        <div
                          class="profile-opening-summary"
                          onclick="showProfileOpeningTimes(this)"
                        >
                          <i class="fas fa-clock" />
                          <span class="text-muted">Schließt um 20:00 Uhr</span>
                          <i class="fas fa-chevron-down" />
                        </div>
                        <ul>
                          <li class="text-muted">
                            Montag: 09:00 bis 17:00 Uhr
                          </li>
                          <li class="text-muted">
                            Dienstag: 09:00 bis 17:00 Uhr
                          </li>
                          <li class="text-muted">
                            Mittwoch: 09:00 bis 17:00 Uhr
                          </li>
                          <li class="text-muted">
                            Donnerstag: 09:00 bis 17:00 Uhr
                          </li>
                          <li class="text-muted">
                            Freitag: 09:00 bis 17:00 Uhr
                          </li>
                          <li class="text-muted">
                            Samstag: 09:00 bis 15:00 Uhr
                          </li>
                          <li class="text-muted">
                            Sonntag: geschlossen
                          </li>
                        </ul>
                      </div>
                      <div class="profile-phone">
                        <i class="fas fa-phone" />
                        <span class="text-muted">030 - 77771234 </span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="row">
                        <div class="col-10">
                          <p class="text-dark text-right mb-0">
                            Sehr gut
                          </p>
                          <p class="text-right text-muted mb-0">
                            <a
                              href="#"
                            ><u>26 Bewertungen</u></a>
                          </p>
                        </div>
                        <div class="col-2">
                          <div class="green-rating-box pt-2">
                            <p class="text-light text-center">
                              9,1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-lg-9">
                      <p class="profile-short-description text-dark">
                        Display Reparatur · Laptop Reparatur · PC Reparatur ·
                        Waschmaschinen Reparatur · TV Reparatur
                      </p>
                    </div>
                    <div class="col-lg-3">
                      <nuxt-link
                        to="/dashboard/techniker/12345"
                        type="submit"
                        class="btn btn-primary custom-button text-light"
                      >
                        Profil ansehen
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>

</style>
