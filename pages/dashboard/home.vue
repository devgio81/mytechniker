<template>
  <div>
    <Technician v-if="getUserRole !== 'customer'" />
    <Customer v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Technician from '@/components/Home/Technician'
import Customer from '@/components/Home/Customer'
export default {
  layout: 'login',
  name: 'Home',
  components: { Technician, Customer },
  computed: {
    ...mapGetters([
      'getUserRole'
    ])
  }
}
</script>

<style scoped>

</style>
