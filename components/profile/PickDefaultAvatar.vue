<template lang="pug">
.bs.p-05.border-radius
  div Вы можете выбрать готовую аватарку:
  .container.avatars-palitra
    .row
      .avka.col-2(v-for="(avatar, index) in avatars" :key="index" @click="pick(index)")
        .picked(v-if="picked === index")
          i.fas.fa-check
        AvatarViewer.m-05.cursor-pointer( :img="'http://localhost:3013/images/avatars/'+ avatar" :size="'100px'")
        br(v-if="index === 6")
</template>

<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
  props: ['avatarDefaultPicker'],
  components: {
    AvatarViewer
  },
  data: () => ({
    avatars: null,
    picked: null
  }),
  methods: {
    pick(index) {
      this.picked = index
      const img = event.target.closest('.avka').querySelector('.avatar').style.backgroundImage.split('"')[1]
      this.avatarDefaultPicker(img)
    }
  },
  async beforeCreate() {
    await this.$axios.get('/user/get/defaultavatars')
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

.h116{
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.picked {
  font-size: 1.4rem;
  font-weight: 100;
  position: absolute;
  color: map-get($colors, green );
  right: .5rem;
  top: .5rem;
  text-shadow: 0 0 4px #000000;
}
.avatars-palitra {
  width: 100%;
  height: 282px;
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