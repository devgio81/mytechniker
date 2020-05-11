<template>
  <div id="v-pills-tabContent" class="tab-content mt-4">
    <h1>Angebote</h1>
    <div class="row panel-group ml-1">
      <div class="col-xl-3 col-lg-3 col-md-2 filter-panel">
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
      <div class="col-xl-9 col-lg-9 col-md-10">
        <h2 class="mb-4">
          Deine Angebote
        </h2>
        <div v-for="i in 5" :key="i">
          <div class="row provider-profile-overview profile-overview">
            <div class="col-3">
              <img class="profile-picture" src="~/assets/css/img/avatar.png">
            </div>
            <div class="col-9">
              <div class="row">
                <div class="col-9">
                  <h3>Tech Repair</h3>
                  <div class="profile-rating">
                    <span class="profile-rating-average">4.3</span>
                    <span
                      class="profile-rating-stars text-warning"
                    >★★★★</span><span>★</span>
                    <span class="profile-rating-count">(26)</span>
                  </div>
                  <div class="profile-place">
                    <i class="fas fa-map-marker-alt" />
                    <span>Bettstraße 101, 10713 Wilmersdorf • Entfernung:
                      2km</span>
                  </div>
                </div>
                <div class="col-3">
                  <nuxt-link
                    to="/dashboard/angebote/12345"
                    type="submit"
                    class="btn btn-primary custom-button text-light"
                  >
                    Zum
                    Angebot
                  </nuxt-link>
                </div>
              </div>
              <h5 class="mt-1 mb-4">
                30% - Handydisplayreparatur Samsung und iPhone
              </h5>
              <p class="profile-short-description">
                Wir reparieren dein Handy, TV, Tablet oder Haushaltsgeräte. Dabei
                bieten wir einen schnellen Service und eine Garantie von zwei
                Wochen. Bitte kontaktiere uns über myTechniker, um einen Termin zu
                buchen. Zur Zeit
              </p>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Offers',
  layout: 'login'
}
</script>

<style scoped>

</style>
