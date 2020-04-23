<template lang="pug">
div
  .container
    //- Title
    .bs.bg-light.p-1.br-b.mb-1
      .row
        .col-12.col-md-auto.col-lg-auto.pr-none
          .bold.text-center.color-main-1 Добавить новую пуликацию
        .col-12.col-md-auto.col-lg-auto.pl-none
          .pl-03.text-center - всего за 4 шага!
    //- Content
    .bs.mb-1.px-1.pb-1.pt-05.border-radius
      small.bold Обязательные поля помеченны 
        span.color-danger.pl-03.fs-1 *
      .row
        //- Image uploader
        .col-12.pt-1
          .display-flex
            .color-main-1.pb-03 Фото
            small.db.ml-auto.color-danger Максимум 20 фото!
          ImageUpload.bs.border-radius(
            :newPhoto="newPhoto"
            :removePhoto="removePhoto"
            :upPhotoToMain="upPhotoToMain"
          )
        //- Title add
        .col-12.col-xl-12.pt-1
          .form-group
            label(for="inputTitle")
              div Название объявления
                span.color-danger.bold.pl-03 *
              //- Validate
              .invalid.color-danger.ml-auto(v-if="!$v.title.required") 
                small Это поле обязательно для заполнения
              .invalid.ml-auto(v-if="$v.title.$invalid && title") 
                .color-danger(v-if="!$v.title.minLength") 
                  small Минимальня длина названия 20 символов 
                .color-danger(v-if="!$v.title.maxLength") 
                  small Не более 71 символов
              .valid.ml-auto(v-if="!$v.title.$invalid && title")
                small.color-success.ts Хорошый выбор для названия! 
            input#inputTitle(
              v-model="title" 
              placeholder="Квартира в центре Одессы"
              :class="{'border-danger bs-danger': $v.title.$invalid && title, 'border-success bs-success': !$v.title.$invalid && title}"
            )
        //- Description
        .col-12.col-xl-12.pt-1
          .form-group
            label(for="inputDescription") Описание
            textarea#inputDescription(v-model="description" placeholder="Состояние хороше, отлично для отдыха")
        //- Categories
        .col-12.pt-1
          .color-main-1.pb-03 Категория
            span.color-danger.pl-03.fs-1 *
          Categorie.bs.border-radius.border.border-white(
            :getCategory="getCategory"
          )
        .col-12.pt-1
          Schemes(:schema="category")
        .col-12.pt-1
          .d-flex
            .ml-auto
              button.btn.btn-success.fs-1.bs Подать объявление
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Categorie from '~/components/addpublication/Categories'
import ImageUpload from '~/components/addpublication/ImageUpload'
import Schemes from '~/components/addpublication/Schemes'
export default {
  components: {
    Categorie,
    ImageUpload,
    Schemes
  },
  middleware: 'authenticated',
  data: () => ({
    title: null, 
    description: null,
    photos: [],
    category: null
  }),
  validations: {
    title: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(71)
    }
  },
  methods: {
    newPhoto(photo) {
      this.photos.push(photo)
    },
    removePhoto(index) {
      this.photos.splice(index, 1)
    },
    upPhotoToMain(index) {
      const photo = this.photos[index]
      this.photos.unshift(photo)
      this.photos.splice(index+1, 1)
    },
    getCategory(category) {
      this.category = category
    }
  } 
}
</script>

<style lang="scss" scoped>
</style>