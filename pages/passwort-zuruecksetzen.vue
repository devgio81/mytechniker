<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <h2 class="text-center">
            Passwort zurücksetzen
          </h2>
          <p class="text-center text-muted pb-2">
            Bitte gib deine Email ein.
          </p>
          <form class="one-col-form text-center mt-5">
            <input type="email" name="nutzer-email" placeholder="E-Mail">
            <input type="submit" class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 ml-3 mt-5" value="Passwort zurücksetzen">
            <p class="text-center text-small">
              <nuxt-link to="/">
                Zurück zur Startseite
              </nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'main'
}
</script>

<style>

</style>
