<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './../components/Footer'
import Header from './../components/Header'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
@import "assets/css/index.css";
</style>
