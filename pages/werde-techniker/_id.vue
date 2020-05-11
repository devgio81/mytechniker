<template>
  <div>
    <Technician :subscription="userType" />
  </div>
</template>

<script>

import Technician from './../../components/Technician'

export default {
  layout: 'main',
  components: {
    Technician
  },

  validate ({ params }) {
    return /([basic|premium|vip])$/.test(params.id)
  },

  created () {
    this.userType = this.$route.params.id
  }
}
</script>

<style>

</style>
