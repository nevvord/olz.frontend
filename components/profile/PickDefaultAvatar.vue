<template lang="pug">
.bs.p-05.border-radius
  h5.m-none Вы можете выбрать готовую аватарку:
  .container.avatars-palitra
    .row
      .avka.col-6.col-lg-4.col-xl-3(v-for="(avatar, index) in avatars" :key="index" @click="pick(index)")
        .picked(v-if="picked === index")
          i.fas.fa-check
        AvatarViewer.m-05.cursor-pointer( :img="link + avatar" :size="'130px'" :data-link="avatar")
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
    picked: null,
    link: process.env.BASE_URL + '/images/avatars/'
  }),
  methods: {
    pick(index) {
      this.picked = index
      const currentImage = process.env.BASE_URL + '/images/avatars/' + event.target.closest('.avka').querySelector('.avatar').dataset.link
      const imageForSave = 'images/avatars/' + event.target.closest('.avka').querySelector('.avatar').dataset.link
      this.avatarDefaultPicker(currentImage, imageForSave)
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
  color: map-get($colors, success );
  right: 1.4rem;
  top: 1.4rem;
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