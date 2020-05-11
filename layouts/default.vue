<template>
  <div>
    <Header search />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './../components/Header'
import Footer from './../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import "assets/css/index.css";
</style>
