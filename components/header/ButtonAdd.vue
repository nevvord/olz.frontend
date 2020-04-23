<template lang="pug">
div
  nuxt-link.display-block.button-add(@click.native="checkAuth" :to="this.$store.state.auth.loggedIn ? '/addpublication' : '/'")
    button.btn.btn-outline-warning.m-none(@mouseover="animete") + Подать объявление
</template>

<script>
export default {
  props: ['toggleModalAuth'],
  methods: {
    animete() {
      // const dot = event.target.closest(`.button-add`).querySelector(`.dot`)
      // dot.style = 'width: 100%; height: 100%';
    },
    animateLeave() {
    },
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
button {
  position: relative;
}
</style>