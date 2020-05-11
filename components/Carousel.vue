<template>

  <section class="testimonials">
    <div class="container">
      <h3 class="text-center">
        Testimonials
      </h3>
      <hr class="my-4" width="100px">
      </br>
      <slick-slide ref="slick" :options="slickOptions">
        <div class="testimonial-part-one ml-3 mr-3">
          <img class="quote-icon" src="~/assets/css/img/quote.png">
          <p class="font-italic text-left">
            Durch MyTechniker konnte ich mehr Kunden akquirieren und meine Reichweite erweitern. Die Plattform ist simpel
            und leicht zu navigieren.
            <br>
          </p>
          <h5 class="text-left">
            Thomas H.
          </h5>
        </div>
        <div class="testimonial-part-two ml-3 mr-3">
          <img class="quote-icon" src="~/assets/css/img/quote.png">
          <p class="font-italic text-left">
            Wir sind glücklich! Seitdem wir MyTechniker nutzen, können und möchten
            wir nicht mehr darauf verzichten. Es hat uns enorm geholfen.
            <br>
          </p>
          <h5 class="text-left">
            Jörg K.
          </h5>
        </div>
        <div class="testimonial-part-one ml-3 mr-3">
          <img class="quote-icon" src="~/assets/css/img/quote.png">
          <p class="font-italic text-left">
            Das Produkt zu bedienen ist sehr einfach. Endlich sind wir schnell
            und bequem zu finden. Durch die Chat-Funktion können wir
            leicht einen Erstkontakt mit den Kunden herstellen.
          </p>
          <h5 class="text-left">
            Murat K.
          </h5>
        </div>
        <div class="testimonial-part-two ml-3 mr-3">
          <img class="quote-icon" src="~/assets/css/img/quote.png">
          <p class="font-italic text-left">
            Schnell, simpel und effektiv. Eine Platform für Techniker
            war schon lange fällig.
          <br>
          </p>
          <h5 class="text-left">
            Sabine U.
          </h5>
        </div>
        <div class="testimonial-part-one ml-3 mr-3">
          <img class="quote-icon" src="~/assets/css/img/quote.png">
          <p class="font-italic text-left">
            <br>
            Ein großer Teil meiner neuen Kunden findet mich
            über MyTechniker. Diese Platform ist genial!
          <br><br>
          </p>
          <h5 class="text-left">
            Stefan A.
          </h5>
        </div>
      </slick-slide>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
    slickOptions: {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }),
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>

<style scoped>

</style>
