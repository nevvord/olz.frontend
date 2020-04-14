<template>
  <nuxt-link @click.native="checkAuth" :to="this.$store.state.auth.loggedIn ? '/addpublication' : '/'" @click="toggleModalAuth" class="nav-item-add" >
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
        if (!this.$store.state.auth.loggedIn) {
          this.toggleModalAuth()
          this.$notify({
            group: 'foo',
            text: `Войдите в личный кабинет для продолжения`,
            type: 'warn'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>