<template lang="pug">
.bs-black.p-05.border-radius
  div Вы можете выбрать готовую аватарку:
  .avatars-palitra.text-center
    div.h116(v-for="(avatar, index) in avatars" :key="index")
      AvatarViewer.m-05( :img="'http://localhost:3013/images/avatars/'+ avatar" :size="'100px'")
      br(v-if="index === 6")
</template>

<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
  components: {
    AvatarViewer
  },
  data: () => ({
    avatars: null
  }),
  beforeCreate() {
    this.$axios.get('/user/get/defaultavatars')
        .then(({data}) => {
          this.avatars = data.avatars
        })
        .catch(error => {
          console.error(error);
        })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/value.scss';

.content {
}
.h116{
  display: inline-block;
  vertical-align: top;
}
.avatars-palitra {
  width: 100%;
  height: 232px;
  overflow: auto;
  overflow-x: auto;
  transition: .3s;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #00000030;
  }
  &::-webkit-scrollbar-thumb {
    background-color: map-get($map: $colors, $key: blue);
  }

}
</style>