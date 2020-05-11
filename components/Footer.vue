<template>
  <footer class="pt-md-5 footer-class">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-4">
          <img src="~/assets/css/img/Logo-white.png" alt="Logo">
          <ul class="list-unstyled text-small">
            <li>
              <p class="mt-3 mb-0 text-light">
                Wir helfen gerne
              </p>
            </li>
            <li><a href="mailto:kundenservice@my-techniker.de" class="d-block text-light font-weight-normal">kundenservice@my-techniker.de</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h5 class="text-light mb-4">
            Navigation
          </h5>
          <ul class="list-unstyled text-small">
            <li><nuxt-link class="text-light" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="text-light" to="/registrieren">Registrieren</nuxt-link></li>
            <li><nuxt-link class="text-light" to="/anmelden">Login</nuxt-link></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h5 class="text-light mb-4">
            Werde Techniker
          </h5>
          <ul class="list-unstyled text-small">
            <li><nuxt-link class="text-light" v-scroll-to="'#funktioniert'" to="#">So funktioniert´s</nuxt-link></li>
            <li><nuxt-link class="text-light" to="/umwelttechnologie">Think Green</nuxt-link></li>
            <li><nuxt-link class="text-light" to="/preise">Dienstleister werden</nuxt-link></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h5 class="text-light mb-4">
            Social Media
          </h5>
          <ul class="list-unstyled text-small">
            <li>
              <a href="#"><i class="fab fa-twitter-square fa-2x mr-1 ml-2 text-light" /></a>
              <a href="#"><i class="fab fa-facebook fa-2x mr-1 ml-2 text-light" /></a>
              <a href="#"><i class="fab fa-instagram fa-2x mr-1 ml-2 text-light" /></a>
              <br>
              <a href="#"><i class="fab fa-linkedin fa-2x mr-1 ml-2 text-light" /></a>
              <a href="#"><i class="fab fa-xing-square fa-2x mr-1 ml-2 text-light" /></a>
              <a href="#"><i class="fab fa-whatsapp fa-2x mr-1 ml-2 text-light" /></a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="row mt-5">
        <div class="col-6 col-lg-4">
          <p class="d-block mb-3 text-light">
            &copy; MyTechniker | All rights reserved 2020
          </p>
        </div>
        <div class="col-6 col-lg-3">
          <ul class="list-unstyled text-small">
            <li>
              <nuxt-link class="text-light" to="/agb">AGB</nuxt-link><span class="text-light"> | </span>
              <nuxt-link
                class="text-light"
                to="/datenschutz"
              >Datenschutz</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <ul class="list-unstyled text-small">
            <li><nuxt-link class="text-light" to="/impressum">Impressum</nuxt-link></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <ul class="list-unstyled text-small">
            <li><nuxt-link class="text-light" to="/partnerprogramm">Partnernprogramm</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style></style>
