<template lang="pug">
div
  .photo.br-t(:style="bgUrl")
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
          this.bgUrl = `background-image: url(${this.img}); background-size: auto 200px;`
        } else {
          this.bgUrl = `background-image: url(${this.img}); background-size: ${this.size} 200px;`
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
            this.bgUrl = `background-image: url(${newVal}); background-size: auto 200px;`
          } else {
            this.bgUrl = `background-image: url(${newVal}); background-size: ${this.size} 200px;`
          }
        }
        image.src = newVal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.photo {
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 200px;
}
.bg{
  width: 200px; height: 200px;
  border-radius: 50%;
  background-image: url('/images/bg-avatars.svg');
  background-size: 400%;
  background-position: -15px -60px;
}
</style>