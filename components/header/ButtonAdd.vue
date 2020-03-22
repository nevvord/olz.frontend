<template>
  <nuxt-link :to="this.$store.state.auth ? '/addpublication' : '/'" @click="toggleModalAuth" class="nav-item-add" >
    <div class="bg-left"></div>
    <div class="bg-right"></div>
    <div class="nav-item-add-text">
      <b>+</b> Подать объявление
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['toggleModalAuth'],
    methods: {
      checkAuth() {
        if(!this.$store.state.auth) this.toggleModalAuth()
      }
    }
      
  }
</script>

<style lang="scss" scoped>

</style>