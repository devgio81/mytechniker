<template>
  <div>
    <OffersTechnician v-if="getUserRole !== 'customer'" />
    <Offers v-if="getUserRole === 'customer'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OffersTechnician from '@/components/OffersTechnician'
import Offers from '@/components/Offers'
export default {
  layout: 'login',
  name: 'OffersCustomer',
  components: { OffersTechnician, Offers },
  computed: {
    ...mapGetters([
      'getUserRole'
    ])
  }
}
</script>

<style scoped>

</style>
