<template lang="pug">
div
  .container.bold.color-light-2.bg-light.py-1.bs.zindex
    .pl-2
      nuxt-link(to="/profile") {{$auth.user.name}}
      span  • Редактор
  .container.bg-light-05.py-1
    .profile-user
      .profile-user-content
        Links
        .ml-2.text-center.bs.p-05.border-radius.bg-white
          AvatarViewer(:img="avatar" :size="'200px'")
          .mt-1
            label.display-block.btn-pick-img.color-blue-1.bs(for="avatar")
              i.far.fa-image
              span  Выберете фото
            input#avatar(type="file", name="file" accept=".jpg, .jpeg, .png" @change="filePicked" enctype="multipart/form-data" hidden)
            .display-block.btn-pick-img.color-blue-1.bs.pos-rel(@click="saveAvatar")
              //- tooltip(:hidden="!showTooltip" left @click="closeTolltip") Сначала виберете аватар
              i.far.fa-save
              span  Сохранить
        .ml-2.bg-white
          PickDefaultAvatar(:avatarDefaultPicker="avatarDefaultPicker")
    .row.py-1
      .col-4
        .bs.p-1.border-radius.bg-white.mr-05
          .pr-1
            label.display-block.color-gray(for="City") Город
            input.w-100#City(type="text" v-model="textForm.city" )
          .pr-1.mt-1
            label.display-block.color-gray(for="PhoneNum") Номер телефона
            input.w-100#PhoneNum(type="text" v-model="textForm.phoneNumber" )
      .col-4
        .bs.p-1.border-radius.bg-white.mx-05
          .pr-1
            label.display-block.color-gray(for="name") Имя
            input.w-100#name(type="text" v-model="textForm.name" )
          .pr-1.mt-1
            label.display-block.color-gray(for="login") Логин
            input.w-100#login(type="text" v-model="textForm.login" )
      .col-4
        .bs.p-1.border-radius.bg-white.ml-05
          .pr-1
            label.display-block.color-gray(for="business") Бизнес
            input.w-100#business(type="text" v-model="textForm.business" )
          .pr-1.mt-1
            label.display-block.color-gray(for="sp") Семейное положение
            select.w-100#sp(type="text" v-model="textForm.sp" )
              option(value="0" selected) Не указанно
              option(value="1") Свобода
              option(value="2") Есть пара
              option(value="3") Женат замужем
              option(value="4") Все сложно
    .row
      .col-12
        .bs.p-1.mb-1.border-radius.bg-white
          .row
            .col-6
              .bs.p-1.bg-light
                .px-1
                  span.mr-05 Facebook:
                  input.w-100.dislpay-block(v-model="textForm.social.facebook")
                .px-1.mt-1
                  span.mr-05 Instagram:
                  input.w-100.dislpay-block(v-model="textForm.social.instagram")
            .col-6
              .bs.p-1.bg-light.ml-1
                .pr-1
                  label(for="dateBirthday") Дата рождения:
                  input.w-100.dislpay-block#dateBirthday(type="date" v-model="textForm.dateBirthday")

    .row
      .col-12
        .bs.p-1.border-radius.bg-white
          .pr-1
            label.display-block.color-gray(for="about") О себе
            textarea.about.w-100#about(type="text" v-model="textForm.about" onkeyup="textAreaAdjust(this)" style="overflow:hidden")



</template>

<script>
import Links from '~/components/profile/Links'
import PickDefaultAvatar from '~/components/profile/PickDefaultAvatar'
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
  middleware: 'authenticated',
  components: {
    Links,
    AvatarViewer,
    PickDefaultAvatar
  },
  data() {return{
    avatar: this.$auth.user.avatar,
    form: {
      avatar: null,
      pickedAvatar: null
    },
    textForm: {
      city: this.$store.state.auth.user.city,
      phoneNumber: this.$store.state.auth.user.phoneNumber,
      name: this.$store.state.auth.user.name,
      login: this.$store.state.auth.user.login,
      business: this.$store.state.auth.user.business,
      sp: this.$store.state.auth.user.sp,
      about: this.$store.state.auth.user.about,
      dateBirthday: this.$store.state.auth.user.dateBirthday,
      social: {
        facebook: this.$store.state.auth.user.social.facebook,
        instagram: this.$store.state.auth.user.social.instagram
      }
    },
    showTooltip: false
  }},
  head() {
    return {
      title: `${this.$auth.user.name} | Редактировать профиль | OLZ`
    }
  },
  methods: {
    closeTolltip(event){
      event.cancelBubble = true
      this.showTooltip = false
    },
    filePicked(event) {
      const newAvatar = event.target.files[0]
      this.form.pickedAvatar = newAvatar
      this.form.avatar = null
      if ( event.target.files[0] ) return this.avatar = URL.createObjectURL(newAvatar)
      this.$notify({
        type: 'error',
        text: 'Error...'
      })
    },
    avatarDefaultPicker(avatar) {
      this.form.avatar = avatar
      this.form.pickedAvatar = null
      this.avatar = avatar
    },
    saveAvatar(){
      // if (!this.form.avatar && !this.form.pickedAvatar) {
      //   this.showTooltip = true
      //   setTimeout(() => {this.showTooltip = false}, 3000)
      // }
      if (this.form.avatar && !this.form.pickedAvatar){
        this.$axios
        .put('/user/profile/change/avatar', {avatar: this.form.avatar})
        .then(({data}) => {
          this.$auth.user.avatar = this.avatar
          this.$notify({
            group: 'foo',
            text: data.msg,
            type: 'success'
          })
        })
        .catch(({response}) => {
          this.$notify({
            group: 'foo',
            text: response.data.msg,
            type: 'warn'
          })
        })
      }
      if(!this.form.avatar && this.form.pickedAvatar){
        const fd = new FormData()
        fd.append('image', this.form.pickedAvatar, this.form.pickedAvatar.name)
        this.$axios
        .put('/user/profile/change/avatar', fd)
        .then(({data}) => {
          this.$auth.user.avatar = data.avatar
          this.form.pickedAvatar = null
          this.$notify({
            group: 'foo',
            text: data.msg,
            type: 'success'
          })
        })
        .catch(({response}) => {
          this.$notify({
            group: 'foo',
            text: response.data.msg,
            type: 'warn'
          })
        })
      }
      this.$axios
        .put('/user/profile/change/info', {...this.textForm})
        .then(({data}) => {

          this.$auth.user.city = this.textForm.city
          this.$auth.user.phoneNumber = this.textForm.phoneNumber
          this.$auth.user.name = this.textForm.name
          this.$auth.user.login = this.textForm.login
          this.$auth.user.business = this.textForm.business
          this.$auth.user.sp = this.textForm.sp
          this.$auth.user.about = this.textForm.about
          this.$auth.user.dateBirthday = this.textForm.dateBirthday
          this.$auth.user.social = this.textForm.social

          this.$notify({
            group: 'foo',
            text: data.msg,
            type: 'success'
          })
        })
        .catch(({response}) => {
          this.$notify({
            group: 'foo',
            text: response.data.msg,
            type: 'warn'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 1rem;
} 
.zindex {
  position: relative;
}
.picked-img {
  width: 200px; height: 200px; /* Ширина и высота */
  border-radius: 50%; /* Превращаем в круг */
  background-size: 200px auto; /* Высота фотографии равна высоте элемента */
  background-repeat: no-repeat;
  background-position: center;
}

.btn-pick-img {
  padding: .5rem;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin: .5rem;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: #6a87ff;
    color: #fff;
    box-shadow: 0 0 4px #00000040;
  }
}
.file-picker{
    display: grid;
    grid-template-columns: 1fr 2fr;
    .show {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
}
</style>