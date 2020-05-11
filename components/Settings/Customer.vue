<template>
  <div
    id="v-pills-settings"
    class="tab-pane active show fade"
    role="tabpanel"
    aria-labelledby="v-pills-settings-tab"
  >
    <div class="row justify-content-center align-items-start">
      <div class="col-12 col-md-6 col-xl-6">
        <h2>Einstellungen</h2>
        <div class="content-div p-4">
          <h3>Mein Profil</h3>
          <form class="profile-settings p-3">
            <div class="form-group">
              <div class="d-flex">
                <label class="mr-auto" for="exampleFormControlInput1">Name:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Name
                  bearbeiten</a></u>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Melvin Ada"
                readonly
              >
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label class="mr-auto" for="exampleFormControlInput1">Foto:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Foto ändern</a></u>
              </div>
              <img src="~/assets/css/img/nutzer-logo.png"><u><a
                class="ml-2 text-primary"
                href="#"
              >Bild anzeigen</a></u>
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label
                  class="mr-auto"
                  for="exampleFormControlInput1"
                >Passwort:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Passwort ändern</a></u>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="*****************"
                readonly
              >
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label class="mr-auto" for="exampleFormControlInput1">Email
                  Adresse:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Email ändern</a></u>
              </div>
              <input class="form-control" type="text" placeholder="melvinada@gmail.com" readonly>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-6">
        <p class="text-center">
          Hier kannst du deine Einstellungen ändern
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
