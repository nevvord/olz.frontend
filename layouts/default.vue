<template>
  <div>
    <div>
      <Header />
      <nuxt />
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import Header from '~/components/header'
export default {
  components: {
    Header
  }
  
}
</script>

<style>
</style>
