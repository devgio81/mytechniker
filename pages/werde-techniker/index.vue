<template>
  <div>
    <Technician :subscription="basic" />
  </div>
</template>

<script>
import Technician from './../../components/Technician'

export default {
  layout: 'main',
  components: {
    Technician
  }
}
</script>

<style>

</style>
