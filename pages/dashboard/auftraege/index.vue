<template>
  <div
    id="v-pills-assignment"
    class="tab-pane active show fade"
    role="tabpanel"
    aria-labelledby="v-pills-assignment-tab"
  >
    <h1>Aufträge</h1>
    <div class="row no-marginLR match-my-cols justify-content-center align-items-start">
      <div class="col-12 col-md-12 col-xl-5">
        <form class="content-div p-3">
          <h5 class="mb-4">
            Auftrag erstellen
          </h5>
          <div class="form-group">
            <div class="d-flex">
              <label class="mr-auto" for="exampleFormControlInput1">Produkt:</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <div class="form-group">
            <div class="d-flex">
              <label class="mr-auto" for="exampleFormControlInput1">Schaden:</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <div class="form-group">
            <div class="d-flex">
              <label
                class="mr-auto"
                for="exampleFormControlInput1"
              >Beschreibung:</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <div class="form-group">
            <div class="d-flex">
              <label class="mr-auto" for="exampleFormControlInput1">Ort (Postleitzahl):</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <div class="form-group">
            <div class="d-flex">
              <label class="mr-auto" for="exampleFormControlInput1">Platzhalter:</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <div class="form-group">
            <div class="d-flex">
              <label class="mr-auto" for="exampleFormControlInput1">Platzhalter:</label>
            </div>
            <input class="form-control bg-light" type="text">
          </div>
          <button type="submit" class="btn btn-primary green-btn mt-3">
            Auftrag
            erstellen
          </button>
        </form>
      </div>
      <div class="col-12 col-md-12 col-xl-7">
        <div class="content-div p-3">
          <h3>Aktuelle Aufträge</h3>
          <p class="text-muted text-center">
            Du hast zur Zeit keine Aufträge online
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'login'
}
</script>

<style scoped>

</style>
