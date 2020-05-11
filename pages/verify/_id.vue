<template>
  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-9 col-md-7 col-lg-6">
          <p class="text-center text-muted mb-4 pb-4" v-if="getVerifyStatus">
            Deine E-Mail wurde erfolgreich verifiziert.
          </p>
          <p class="text-center text-muted mb-4 pb-4" v-else>
            Deine E-Mail konnte <strong>nicht</strong> verifiziert werden.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  data: () => ({
    type: 'basic'
  }),

  computed: {
    ...mapGetters([
      'getVerifyStatus'
    ])
  },

  created () {
    this.$store.dispatch('verifyEmail', this.$route.params.id)
  }
}
</script>

<style>

</style>
