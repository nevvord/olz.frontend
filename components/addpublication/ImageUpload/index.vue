<template lang="pug">
div.bg-light
  input#addImage.col-none(
    type="file" 
    name="photos" 
    multiple
    accept=".jpg, .jpeg, .png" 
    @change="addPhotos"
  )
  .images-show.row
    .col-12.col-md-4.col-lg-3.col-xl-2.pb-1(v-for="(image, index) in images" :key="index")
      .image.bs
        PhotoViewer.col-none.col-xl.p-none(:img="image" :size="'171px'")
        PhotoViewer.col-none.col-lg.col-xl-none.p-none(:img="image" :size="'193px'")
        PhotoViewer.col-none.col-md.col-lg-none.p-none(:img="image" :size="'188px'")
        PhotoViewer.col-md-none.p-none(:img="image" :size="'258px'")
        .px-03.py-03.br.bold.check.border(
          :class="{'color-success border-success bg-dark': index === 0, 'border-light-2 .color-light-2 bg-light': index !== 0}"
          @click="toMain(index)"
        )
          div(v-if="index === 0") Обложка
          div(v-else) На обложку
        .bg-light.px-05.py-03.br.color-danger.bold.delete.border.border-danger(@click="delPhoto(index)") 
          i.fas.fa-times
    .col.pb-1
      label.bg-white.br.text-center.cursor-pointer.db.color-main-1.bold.w-100.fs-12.f-nevvi.h-100.btnAdd.border.border-main-1(
        for="addImage"
      ) 
        span.m-auto + Добавить фото объявления
</template>
<script>
import PhotoViewer from './photoViewer'
export default {
  props: ['newPhoto', 'removePhoto', 'upPhotoToMain'],
  components: {
    PhotoViewer
  },
  data: () => ({
    photos: [],
    images: []
  }),
  methods: {
    delPhoto(index) {
      this.images.splice(index, 1)
      this.photos.splice(index, 1)
      this.removePhoto(index)
    },
    toMain(index) {
      const photo = this.photos[index]
      const image = this.images[index]
      this.photos.unshift(photo)
      this.images.unshift(image)
      this.delPhoto(index+1)
      this.upPhotoToMain(index)
    },
    addPhotos() {
      for (let index = 0; index < event.target.files.length; index++) {
        if (this.photos.length <= 20) {
          this.photos.push(event.target.files[index])
          this.newPhoto(event.target.files[index])
          const img = URL.createObjectURL(event.target.files[index])
          this.images.push(img)
        }else{
          return this.$notify({
            group: 'foo',
            title: 'Валидация',
            text: "Не более 21 фото!",
            type: 'error'
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/value.scss';
.images-show {
  padding: 1rem 1rem 0 1rem;
  .image {
    border-radius: 4px;
    position: relative;
    .delete {
      position: absolute;
      right: .5rem;
      top: .5rem;
      cursor: pointer;
    }
    .check {
      position: absolute;
      left: .5rem;
      bottom: .5rem;
      cursor: pointer;
      &:hover {
        background-color: map-get($colors, dark );
        color: map-get($colors, success );
        border-color: map-get($colors, success );
      }
    }
    img {
      object-fit: cover;
      vertical-align: top;
    }
  }
}
.btnAdd {
  min-height: 3.2rem;
  display: inline-flex;
}
</style>