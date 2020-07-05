<template lang="pug">
no-ssr
  .avatar(:style="bgUrl")
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
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 4px #00000080;
}
</style>