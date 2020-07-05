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
              .d-flex Название объявления
                .color-danger.bold.pl-03 *
              //- Validate
              .ml-auto.color-danger.mr-1
                small(v-if="form.title !== null && form.title.length <= 71") {{71-form.title.length}} символов
                small(v-if="form.title !== null && form.title.length > 71") Лимит!
              .invalid.color-danger(v-if="!$v.form.title.required") 
                small Это поле обязательно для заполнения
              .invalid(v-if="$v.form.title.$invalid && form.title") 
                .color-danger(v-if="!$v.form.title.minLength") 
                  small Минимальня длина названия 20 символов 
                .color-danger(v-if="!$v.form.title.maxLength") 
                  small Не более 71 символов
              .valid(v-if="!$v.form.title.$invalid && form.title")
                small.color-success.ts Хорошый выбор для названия! 
            input#inputTitle(
              v-model="form.title" 
              placeholder="Квартира в центре Одессы"
              :class="{'border-danger bs-danger': $v.form.title.$invalid && form.title, 'border-success bs-success': !$v.form.title.$invalid && form.title}"
            )
        //- Description
        .col-12.col-xl-12.pt-1
          .form-group
            label(for="inputDescription") Описание
            textarea#inputDescription(
              :class="{'border-danger': !$v.form.description.maxLength}"
              v-model="form.description"
              onkeyup="textAreaAdjust(this)"
              placeholder="Состояние хороше, отлично для отдыха"
              @keydown="validateDescription"
              @keydup="validateDescription"
            )
          //- Validate
          .validate.fs-08.color-blue
            div(v-if="form.description") {{10001 - form.description.length}} Символ
            div(v-if="!form.description") {{10001}} Символ
        //- Categories
        .col-12.pt-1
          .color-main-1.pb-03 Категория
            span.color-danger.pl-03.fs-1 *
          Categorie.bs.border-radius.border.border-white(
            :getCategory="getCategory"
          )
        .col-12.pt-1
          Schemes(:category="form.category" :updateCharacteristics="updateCharacteristics")
        //- Prices
        .price.col-2.pt-1
          .form-group
            label(for="inputPrice") Цена
            input#inputPrice(v-model="form.price.price" name="price" @keydown="onlyNumber($event)" placeholder="99грн")
        .price.col-1.pt-1
          .form-group
            .color-main-1.mb-03(for="inputType") Валюта
            select(v-model="form.price.type" id="inputType" name="type")
              option(value="uah") UAH
              option(value="usd") USD
              option(value="eur") EUR
        .price.col-2.pt-3
            input(v-model="form.price.bargain" id="inputBargain" type="checkbox" name="bargain")
            label.color-main-1(for="inputBargain") Договорная
        .col-7.mt-1
          .row
            .col-12.color-main-1.mb-03
              span(v-if="form.phoneNumbers.lenght > 0") Номера телефонов
              span(v-else) Номер телефонa
              span.ml-05
                label.pos-rel(
                  @mouseover="toggles.infoClouds.showNumbers = true"
                  @mouseleave="toggles.infoClouds.showNumbers = false"
                )
                  InfoCloud(
                    :title="'Скрывать номера телефонов'"
                    :info="'Это поможет для необнаружения номеров телефона роботами поискавиков'"
                    v-if="toggles.infoClouds.showNumbers"
                  )
                  span.color-light-2 (
                  span.ml-03.color-purple Скрывать
                  input(type="checkbox" v-model="form.phoneNumbersShow")
                  span.color-light-2.ml-03 )

            .col-4.p-nono.mt-03(v-for="(phone, index) in form.phoneNumbers" :key="index")
              input(v-model="form.phoneNumbers[index]" @keydown="onlyNumber($event)" placeholder="380933333333")
            .col-4.mt-03.pr-2
              button.btn.btn-primary.w-100.m-none(v-if="form.phoneNumbers.length < 10" @click="addPhoneNumber") Добавить номер
        .col-6.pt-1
          .form-group
            label(for="email") 
              span Почтовый адресс
              span.color-light-2.ml-03.fs-08 Используется указаный вами при регистрации
            input(id="email" type="text" name="email" disabled v-model="form.email")
        .col-6.pt-1
          .form-group
            label(for="name") 
              span Имя
              span.color-light-2.ml-03.fs-08 Используется заполненое вами в профиле или будет использован почтовый адресс
            input(id="name" type="text" name="name" disabled v-model="form.name")
        .col-12.pt-1
          .form-group
            label(for="city") Город
            input(id="city" name="city" type="text" v-model="form.adress" @keydown="findCity")
            .cities.bg-white.pt-03.bs(v-if="cities.length > 0")
              .city.p-05.cp(
                v-for="(city, index) in cities"
                :key="index"
                @click="pickCity(city.ru)"
              ) {{city.ru}}
        .col-12.pt-1
          .d-flex
            .ml-auto
              button.btn.btn-success.fs-1.bs(@click="addPublication") Подать объявление
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Categorie from '~/components/addpublication/Categories'
import ImageUpload from '~/components/addpublication/ImageUpload'
import Schemes from '~/components/addpublication/Schemes'
import InfoCloud from '~/components/infoBlocks/infoСloud'
export default {
  components: {
    Categorie,
    ImageUpload,
    Schemes,
    InfoCloud
  },
  middleware: ['authenticated', 'categories/getCategories'],
  data() {return{
    categories: this.$store.getters['categories/getCategories'],
    toggles: {
      infoClouds: {
        showNumbers: false
      }
    },
    form: {
      title: null, 
      description: null,
      photos: [],
      category: null,
      characteristics: null,
      adress: '',
      price: {
        price: null,
        bargain: false,
        type: 'uah'
      },
      email: this.$store.state.auth.user.email,
      name: this.$store.state.auth.user.name,
      phoneNumbers: [...this.$store.state.auth.user.phoneNumber],
      phoneNumbersShow: true
    },
    adress: {
      regions:[{
        name: "Odessa",
        ru: "Одесса",
        cities: [{
          en: "Odessa",
          ru: "Одесса",
          areas: [{
            en: "Moldovanka",
            ru: "Молдованка"
          }]
        },{
          name: "Chernomorsk",
          ru: "Черноморск"
        }]
      }]
    },
    cities: []
  }},
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(20),
        maxLength: maxLength(71)
      },
      description: {
        maxLength: maxLength(10001)
      }
    }
  },
  methods: {
    findCity() {
      const regex = `/W|${this.form.adress}`;
      const reg = new RegExp(regex, "i")
      this.adress.regions.forEach(region => {
        this.cities = []
        region.cities.forEach(city => {
          if (reg.exec(city.ru) !== null) {
            this.cities.push(city)
          }
        })
      })
    },
    addPhoneNumber() {
      if(this.form.phoneNumbers.length <= 9) this.form.phoneNumbers.push('')
    },
    newPhoto(photo) {
      this.form.photos.push(photo)
    },
    removePhoto(index) {
      this.form.photos.splice(index, 1)
    },
    upPhotoToMain(index) {
      const photo = this.form.photos[index]
      this.form.photos.unshift(photo)
      this.form.photos.splice(index+1, 1)
    },
    getCategory(category) {
      this.form.category = null
      this.form.category = category
    },
    updateCharacteristics(characteristics) {
      this.form.characteristics = characteristics
    },
    async addPublication() {
      const fd = new FormData()
      let responsePhotos = null
      if (this.form.photos.length > 0) {
        this.form.photos.forEach(photo => {
          fd.append('images', photo, photo.name)
        })
        responsePhotos = await this.$axios.post('/publications/add/images', fd)
      }
      const body = {
        title: this.form.title,
        description: this.form.description,
        images: responsePhotos.data.images,
        prices: this.form.price,
        characteristics: this.form.characteristics,
        adress: this.form.adress,
        category: this.form.category.category,
        subCategory: this.form.category._id,
        phoneNumbers: this.form.phoneNumbers,
        phoneNumbersShow: this.form.phoneNumbersShow 
      }
      this.$axios.post('/publications/add/publication', body).then(({data}) => {
        this.$notify({
          group: 'foo',
          text: data.msg,
          type: 'success'
        })
      }).catch(({response}) => {
        this.$notify({
          group: 'foo',
          text: response.data.msg,
          type: 'warn'
        })
      })
    },
    showInfoClouShowNumbers() {
      this.toggles.infoClouds.showNumbers = !this.toggles.infoClouds.showNumbers
    },
    pickCity(city) {
      this.cities = []
      this.form.adress = city
    },
    validateDescription() {
      if(this.form.description !== null && this.form.description.length > 10000) {
        this.form.description = this.form.description.substr(0, 10000)
      }
    },
    onlyNumber(event) {
      if(this.form.price.price !== null && this.form.price.price.length > 10) {
        this.form.price.price = this.form.price.price.substr(0, 10)
      }
      event = (event) ? event : window.event
      var charCode = (event.which) ? event.which : event.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault()
      } else {
        return true
      }
    }
  } 
}
</script>
<style lang="scss" scoped>
.cities{
  width: 100%;
  margin-top: -.3rem;
  z-index: -1;
  border-radius: 0 0 4px 4px;
  .city{
    &:hover {
      background-color: #0000ee20;
    }
    &:last-child {
      border-radius:  0 0 4px 4px;
    }
  }
}
.z-minus-2 {
  z-index: -2;
}
</style>