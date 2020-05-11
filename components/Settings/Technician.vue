<template>
  <div
    id="v-pills-settings"
    class="tab-pane show active fade"
    role="tabpanel"
    aria-labelledby="v-pills-settings-tab"
  >
    <div class="row justify-content-center align-items-start">
      <div class="col-12 col-md-6 col-xl-6">
        <div class="content-div p-4">
          <h1>Einstellungen</h1>
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
                placeholder="Reparaturshop Berlin"
                readonly
              >
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label class="mr-auto" for="exampleFormControlInput1">Logo:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Logo ändern</a></u>
              </div>
              <img src="~/assets/css/img/nutzer-logo.png"><u><a class="ml-2 text-primary" href="#">Bild anzeigen</a></u>
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label
                  class="mr-auto"
                  for="exampleFormControlInput1"
                >Beschreibung:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Beschreibung ändern</a></u>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Wir reparieren TVs, Handys und Tablets"
                readonly
              >
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
                >Passwort ändern</a></u>
              </div>
              <input class="form-control" type="text" placeholder="Name:" readonly>
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label class="mr-auto" for="exampleFormControlInput1">MyTechniker
                  Membership:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Membership&nbsp;upgrade</a></u>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="VIP Membership"
                readonly
              >
            </div>
            <div class="form-group">
              <div class="d-flex">
                <label
                  class="mr-auto"
                  for="exampleFormControlInput1"
                >Zahlungs­­methode:</label>
                <u><a
                  href="#"
                  class="ml-auto text-primary"
                  for="exampleFormControlInput1"
                >Zahlungsmethode&nbsp;ändern</a></u>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Kreditkarte"
                readonly
              >
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
  </div>
</template>

<script>
export default {
  name: 'Technician'
}
</script>

<style scoped>

</style>
