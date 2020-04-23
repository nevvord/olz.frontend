<template lang="pug">
div
  no-ssr
    .avatar.br( :style="bgUrl")
    //- .bg(v-else)
</template>

<script>
export default {
  props: ['img', 'size'],
  data: () => ({
    bgUrl: null
  }),
  mounted() {
    if (this.img) {
      const image = new Image()
      image.onload = () => {
        if (image.width > image.height) {
          this.bgUrl = `background-image: url(${this.img}); background-size: auto ${this.size}; max-width: ${this.size}; min-width: ${this.size}; max-height: ${this.size}; min-height: ${this.size};`
        } else {
          this.bgUrl = `background-image: url(${this.img}); background-size: ${this.size} auto; max-width: ${this.size}; min-width: ${this.size}; max-height: ${this.size}; min-height: ${this.size};`
        }
      }
      image.src = this.img
    }
  },
  watch: {
    img(newVal, oldVal) {
      if (newVal) {
        const image = new Image()
        image.onload = () => {
          if (image.width > image.height) {
            this.bgUrl = `background-image: url(${newVal}); background-size: auto ${this.size}; max-width: ${this.size}; min-width: ${this.size}; max-height: ${this.size}; min-height: ${this.size};`
          } else {
            this.bgUrl = `background-image: url(${newVal}); background-size: ${this.size} auto; max-width: ${this.size}; min-width: ${this.size}; max-height: ${this.size}; min-height: ${this.size};`
          }
        }
        image.src = newVal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  background-repeat: no-repeat;
  background-position: center;
}
.bg{
  width: 200px; height: 200px;
  border-radius: 50%;
  background-image: url('/images/bg-avatars.svg');
  background-size: 400%;
  background-position: -15px -60px;
}
</style>