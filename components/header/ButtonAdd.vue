<template lang="pug">
div
  nuxt-link.display-block(@click.native="checkAuth" :to="this.$store.state.auth.loggedIn ? '/addpublication' : '/'")
    .color-main-2.py-05.border.border-main-2.text-center.border-radius + Подать обьявление
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