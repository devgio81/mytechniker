<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <h2 class="text-center">
            Neues Passwort
          </h2>
          <p class="text-center text-muted pb-2">
            Bitte gib dein neues Passwort ein.
          </p>
          <form class="one-col-form text-center mt-5">
            <input type="password" name="nutzer-passwort" placeholder="Neues Passwort">
            <input type="password" name="nutzer-passwort" placeholder="Neues Passwort wiederholen">
            <input type="submit" class="btn btn-primary custom-button text-light pl-4 pr-4 pt-2 pb-2 ml-3 mt-5" value="Passwort ändern">
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
