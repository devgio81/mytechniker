<template>
  <div>
    <section id="funktioniert" class="description">
      <div class="container">
        <h3 class="text-center">
          So findest du deinen Techniker
        </h3>
        <hr class="my-4" width="100px">
        <p class="text-center text-muted mb-5 pb-4">
          In nur 3 Schritten findest du deinen passenden Techniker.
        </p>

        <div class="row">
          <div class="col-12 col-sm-12 col-lg-4">
            <h3>Suche deinen Techniker</h3>
            <hr class="my-4" width="100px" align="left">
            <p class="text-muted">
              Nutze die Suchmaske und finde Techniker in deiner Umgebung oder erstelle ganz einfach einen Auftrag und erhalte passende Angebote.
            </p>
          </div>
          <div class="col-12 col-sm-12 col-lg-4">
            <h3>Vergleiche die Techniker</h3>
            <hr class="my-4" width="100px" align="left">
            <p class="text-muted">
              Vergleiche kostenlos die passenden Techniker und ggf. die unverbindlichen Angebote zu deinem Auftrag.
            </p>
          </div>
          <div class="col-12 col-sm-12 col-lg-4">
            <h3>Wähle deinen Techniker</h3>
            <hr class="my-4" width="100px" align="left">
            <p class="text-muted">
              Kommuniziere direkt über unseren Nachrichtenchat mit dem Dienstleister deiner Wahl.
            </p>
          </div>
        </div>
        <div class="text-center">
          <nuxt-link to="/registrieren">
            <input
              id="custom-button-red"
              type="button"
              class="btn btn-danger custom-button-red text-light pl-4 pr-4 mt-4"
              value="Jetzt Auftrag erstellen"
            >
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="actioncall">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="d-none d-lg-block d-xl-none d-none d-xl-block">
            <img id="customerpic1" src="~/assets/css/img/_A7B7541-neu.jpg">
          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <h2 class="mt-4">
              Finde neue Kunden und biete deinen technischen Service über uns an.
            </h2>
            <h5 class="mt-4">
              Zeige was du drauf hast und gewinne neue Kunden.
            </h5>
            <a
              href="/preise"
              role="button"
              class="btn btn-primary custom-button text-light pl-4 pr-4 mt-4 mb-4"
            >Werde Techniker </a>
          </div>
        </div>
      </div>
    </section>
    <Carousel />
    <section class="product-finder">
      <div class="container">
        <h2 class="text-center mb-3">
          Finde deine technischen Produkte hier!
        </h2>
        <p class="text-center mb-5">
          Wir sind offizieller Amazon Partner. Finde jetzt bequem deine Produkte auf Amazon
        </p>
        <div class="input-group mt-4 finder mx-auto">
          <input
            type="text"
            class="form-control finder-textbox text-center text-muted"
            placeholder="Nach welchem technischen Produkt suchst du?"
          >
          <input type="button" class="btn btn-primary custom-button text-light pl-4 pr-4 ml-3" value="Suchen">
        </div>
      </div>
    </section>
    <section class="ecosensitive">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-sm" />
          <div class="col-12 col-lg-12 col-xl-6 ">
            <h2>
              Umweltbewusster mit
              der Technologie leben.
            </h2>
            <h5>
              Umweltbewusst die Technologie nutzen. <br>
              Was können wir verbessern?
            </h5>
            <nuxt-link to="/umwelttechnologie">
              <input type="button" class="btn btn-primary custom-button text-light pl-4 pr-4 mt-4" value="Mehr Infos">
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="app-section">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-md-12 col-lg-6">
            <h2 class="mt-4">
              Lade dir jetzt die MyTechniker App runter.
            </h2>
            <h5 class="mt-4 mb-5">
              Jetzt auch ganz einfach auf über deinen mobilen Geräten verfügbar.
            </h5>
            <div class="row">
              <div class="column mb-4">
                <a href="#"><img src="~assets/css/img/appstore.png" class="img-fluid ml-2" alt="Responsive image"></a>
              </div>
              <div class="column mb-4">
                <a href="#"><img src="~assets/css/img/googleplay.png" class="img-fluid ml-2" alt="Responsive image"></a>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-block d-xl-none d-none d-xl-block" style="text-align: center">
            <img class="big-hand" src="~assets/css/img/iphone_big-s.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Carousel from './../components/Carousel'

export default {
  components: {
    Carousel
  },
  data: () => ({

  })
}
</script>
