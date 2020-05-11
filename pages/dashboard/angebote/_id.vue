<template>
  <div>
    <Technician v-if="getUserRole !== 'customer'" />
    <Customer v-else />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Technician from '../../../components/Offers/Technician'
import Customer from '../../../components/Offers/Customer'
export default {
  name: 'Id',
  layout: 'login',
  components: { Customer, Technician },
  computed: {
    ...mapGetters([
      'getUserRole'
    ])
  }
}
</script>
