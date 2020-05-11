<template>
  <hero>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="mt-5">
&nbsp;
        </div>
        <h1 class="mt-5 mb-5 font-weight-bold">
          Du bist professioneller,<br>
          technischer Dienstleister?
        </h1>
        <p class="font-weight-bold">
          <i class="fas fa-check-circle text-blue" /> 50.000 neue Aufträge monatlich
        </p>
        <p class="font-weight-bold">
          <i class="fas fa-check-circle text-blue" /> Direkter Kontakt zum Kunden
        </p>
        <p class="font-weight-bold">
          <i class="fas fa-check-circle text-blue" /> Keine Gewinnabführung
        </p>
        <nuxt-link to="/preise">
        <input
          type="submit"
          class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 mt-5"
          value="Wähle dein Technikerpaket"
        >
        </nuxt-link>
      </div>
    </div>
  </hero>
</template>

<script>
export default {
  name: 'Dienstleister',
  layout: 'main'
}
</script>

<style scoped>

</style>
