<template>
  <div>
    <Customer v-if="getUserRole === 'customer'" />
    <Technician v-else />
  </div>
</template>
q
<script>
import { mapGetters } from 'vuex'
import Technician from '@/components/Settings/Technician'
import Customer from '@/components/Settings/Customer'
export default {
  name: 'Einstellungen',
  layout: 'login',
  components: { Customer, Technician },
  computed: {
    ...mapGetters([
      'getUserRole'
    ])
  }
}
</script>

<style></style>
