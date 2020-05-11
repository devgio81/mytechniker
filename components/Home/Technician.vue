<template>
  <div id="dienstleister-liste" class="tab-content mt-4">
    <h1>Home</h1>
    <div
      id="v-pills-home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
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
            <h3>Datum</h3>
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
            <h3>Entfernung</h3>
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
          <h2 class="mb-5">
            Kundeninserate
          </h2>
          <div v-for="i in 10" :key="i">
          <div class="row">
            <div class="col-1">
              <img src="~/assets/css/img/Avatar-kl.png" alt="Responsive image">
            </div>
            <div class="col-8">
              <p class="font-weight-bolder mb-0 ml-3">
                <nuxt-link to="/dashboard/kundeninserate/12345">Displayschaden - Samsung S9 </nuxt-link>
              </p>
              <p class="mb-0 ml-3 text-black-50">
                10713 - Wilmersdorf · Entfernung: 2 km
              </p>
              <p class="mt-4 ml-3">
                Mein Handy hat einen Displayschaden und geht nicht mehr
                an. Ich habe kein
                Ersatzhandy und brauche bis Donnerstag mein Handy...
              </p>
            </div>
            <div class="col-3">
              <p class="text-muted text-small text-right">
                02.02.2020
              </p>
            </div>
          </div>
          <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Technician'
}
</script>

<style scoped>

</style>
