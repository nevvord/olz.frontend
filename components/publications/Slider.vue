<template lang="pug">
div
  div.pos-rel.sslider(v-if="images")
    .slider-bg(:style="`background-image: url(${link}/${images[position].name})`")
    .slider.br(:style="`background-image: url(${link}/${images[position].name})`")
      .btn-left.cp.bold.fs-15.p-05.color-white(@click="prevImg")
        .arrow <
      .btn-right.cp.bold.fs-15.p-05.color-white(@click="nextImg")
        .arrow >
  div(v-else)
    .text-center.bold.bs.br.p-1.color-main-1 Фото отсутствует
</template>
<script>
export default {
  props: ['images'],
  data() {return{
    position: 0,
    link: process.env.BASE_URL
  }},
  mounted() {
    addEventListener('keydown', (event) => {
      if (event.keyCode === 37 ) {
        if (this.position + 1 === 1) this.position = this.images.length - 1
        else this.position --
      }
      if (event.keyCode === 39) {
        if (this.position + 1 === this.images.length) this.position = 0
        else this.position++
      }
    })
  },
  methods: {
    nextImg() {
      if (this.position + 1 === this.images.length) this.position = 0
      else this.position++
    },
    prevImg() {
      if (this.position + 1 === 1) this.position = this.images.length - 1
      else this.position --
    }
  }
}
</script>

<style lang="scss" scoped>
.sslider {
  overflow: hidden;
}
.slider-bg {
  position: absolute;
  background: #000;
  right: 0;
  left: 0;
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 450px;
  z-index: -1;
  border-radius: 4px;
  filter: blur(10px);
  overflow: hidden;
  opacity: .9;
}
.slider {
  position: relative;
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 450px;

  .btn-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2rem;
    border-radius: 0 4px 4px 0;
    background-color: #00000060;
  }
  .btn-left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2rem;
    border-radius: 4px 0 0 4px;
    background-color: #00000060;
  }
  .arrow {
    position: absolute;
    top: 50%;
    display: block;
  }
}
</style>