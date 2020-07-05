<template lang="pug">
div
  .container.bold.color-light-2.py-1.bs.zindex.br-b.bg-light
    .pl-2
      nuxt-link(to="/profile") {{$auth.user.name}}
      span  • Редактор
  .container.mb-1
    .row
      .col-12.col-xl-none
        .btn-burger
          .btn.btn-main-1.openMenu(@click="openMenu")
            i.fas.fa-bars
            .menu(hidden)
              Links
      Links.pt-1.col-none.col-xl-2
      .pt-1.col-12.col-md-4.col-xl-3
        .bs.border-radius.py-05
          AvatarViewer.m-0auto(:img="link + avatar" :size="'200px'" v-if="!form.avatar")
          AvatarViewer.m-0auto(:img="form.avatar" :size="'200px'" v-if="form.avatar")
          .row.px-15.pt-05
            label.btn.btn-light.col-12.text-center.color-blue(for="avatar")
              i.far.fa-image
              span  Выберете фото
            input#avatar(type="file", name="file" accept=".jpg, .jpeg, .png" @change="filePicked" enctype="multipart/form-data" hidden)
          .row.px-15.pt-05
            .btn.btn-light.col-12.text-center.color-blue(@click="save")
              i.far.fa-save
              span  Сохранить
      .pt-1.col-12.col-md-8.col-xl-7
        PickDefaultAvatar(:avatarDefaultPicker="avatarDefaultPicker")
          
      .col-12
        .bg-white.p-1.my-1.border-radius.bs
          .row
            .color-blue.col-12.col-lg-6
              div
                label.display-block.bold.pb-03(for="City") Город
                input.w-100#City(type="text" v-model="textForm.city" )
              div.row.m-none
                label.display-block.bold.pb-03.pt-1.col-12.pl-none(for="PhoneNum") Номер телефона
                .col-xl-4.p-none(
                  v-for="(phone, index) in textForm.phoneNumber"
                  :key="index"
                )
                  input(
                    type="text"
                    id="PhoneNum"
                    v-model="textForm.phoneNumber[index]"
                  )
                .col.p-none
                  button.btn.btn-outline-success.w-100.mr-03.mt-none.ml-none(@click="addPhoneNumber" v-if="textForm.phoneNumber.length <= 9") Добавить номер
              
            .pt-1.col-12.col-lg-6
              .bs.p-1.border-radius
                .row
                  .col.border-b.bold.pb-03(
                    :class="{'border-blue color-blue': socialPicked === 1, 'border-instagram color-instagram': socialPicked === 0}"
                  ) Соцсети
                .row
                  i.fab.fa-instagram.fs-2.col.text-center.py-05.cursor-pointer(
                    :class="{'border-b border-instagram color-instagram bg-instagram-01': socialPicked === 0}"
                    @click="changeSocialPick(0)"
                  )
                  i.fab.fa-facebook-square.fs-2.col.text-center.py-05.cursor-pointer(
                    :class="{'border-b border-blue color-blue bg-blue-01': socialPicked === 1}"
                    @click="changeSocialPick(1)"
                  )
                  .col-12.pt-05(v-if="socialPicked === 0")
                    label.display-block.color-instagram(for="instagram") Instagram
                    input.w-100#instagram(type="text" v-model="textForm.social.instagram" )
                  .col-12.pt-05(v-if="socialPicked === 1")
                    label.display-block.color-blue(for="facebook") Facebook
                    input.w-100#facebook(type="text" v-model="textForm.social.facebook" )
            .pt-1.col-12.col-lg-6
              div
                label.display-block.color-blue.bold.pb-03(for="name") Имя
                input.w-100#name(type="text" v-model="textForm.name" )
              div
                label.display-block.color-blue.bold.pb-03.pt-1(for="login") Логин
                input.w-100#login(type="text" v-model="textForm.login" )
            .pt-1.col-12.col-lg-6
              div
                label.display-block.color-blue.bold.pb-03(for="business") Вид деятильности
                select.w-100#business(type="text" v-model="textForm.business" )
                  option.fs-1(value="0") Неуказанно
                  option.fs-1(value="1") Частно лицо
                  option.fs-1(value="2") Юридическое лицо
              div
                label.display-block.color-blue.bold.pb-03.pt-1(for="sp") Семейное положение
                select.w-100#sp(type="text" v-model="textForm.sp" )
                  option.fs-1(value="0" selected) Не указанно
                  option.fs-1(value="1") Свобода
                  option.fs-1(value="2") Есть пара
                  option.fs-1(value="3") Женат замужем
                  option.fs-1(value="4") Все сложно
            .pt-1.col-12.col-lg-6
              .bs.border-radius.p-1
                label.color-blue.bold(for="dateBirthday") Дата рождения: 
                span(v-if="!textForm.newBirthday.day && !textForm.newBirthday.month && !textForm.newBirthday.year") {{textForm.dateBirthday | formatDateNoTime}}
                span(v-else) {{textForm.newBirthday.year}}-{{textForm.newBirthday.month}}-{{textForm.newBirthday.day}}
                div
                  //-Year 
                  .window(v-if="openDate === 3")
                    .bg-light.p-1.border-radius.bs
                      .text-center.pb-1 {{textForm.newBirthday.year}}
                      div
                        .row
                          .col-3.pl-03.pr-none
                            .border.border-light-2.border-radius
                              .border-b.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="firstChange('+')") +
                              .text-center.py-03.bg-white {{textForm.newBirthday.yearChange.first}}
                              .border-t.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="firstChange('-')") -
                          .col-5.p-none
                            .border.border-light-2.border-radius
                              .border-b.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="secondChange('+')") +
                              .text-center.py-03.bg-white {{textForm.newBirthday.yearChange.second}}
                              .border-t.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="secondChange('-')") -
                          .col-4.pl-none.pr-03
                            .border.border-light-2.border-radius
                              .border-b.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="thirdChange('+')") +
                              .text-center.py-03.bg-white {{textForm.newBirthday.yearChange.third}}
                              .border-t.border-light-2.bg-blue-01.text-center.cursor-pointer.hover(@click="thirdChange('-')") -
                  //- Month
                  .window(v-if="openDate === 2")
                    .row.bg-light.border-radius.bs
                      .col-3.p-03(v-for=" (index) in 12")
                        .w-100.p-03.bg-white.bs.text-center.border-radius.cursor-pointer.day(@click="changeMonth(index)") {{index}}
                  //- Day
                  .window(v-if="openDate === 1")
                    .row.bg-light.border-radius.bs
                      .col-3.p-03(v-for=" (index) in 31")
                        .w-100.p-03.bg-white.bs.text-center.border-radius.cursor-pointer.day(@click="changeDay(index)") {{index}}
                button.btn.btn-white.mt-05(@click="openDateWindow(1)") День
                button.btn.btn-white.mt-05(@click="openDateWindow(2)") Месяц
                button.btn.btn-white.mt-05(@click="openDateWindow(3)") Год
            .p-1.col-12.col-lg-6
              label.display-block.color-blue.bold.pb-03(for="about") О себе
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
    avatar: this.$auth.user.avatar.link,
    form: {
      avatar: null,
      pickedAvatar: null
    },
    link: process.env.BASE_URL + '/',
    textForm: {
      city: this.$store.state.auth.user.city,
      phoneNumber: this.$store.state.auth.user.phoneNumber,
      name: this.$store.state.auth.user.name,
      login: this.$store.state.auth.user.login,
      business: this.$store.state.auth.user.business,
      sp: this.$store.state.auth.user.sp,
      about: this.$store.state.auth.user.about,
      dateBirthday: this.$store.state.auth.user.dateBirthday,
      newBirthday: {
        day: null,
        month: null,
        year: null,
        yearChange: {
          first: 19,
          second: 6,
          third: 0
        }
      },
      social: {
        facebook: this.$store.state.auth.user.social.facebook,
        instagram: this.$store.state.auth.user.social.instagram
      }
    },
    openDate: 0,
    socialPicked: 0
  }},
  head() {
    return {
      title: `${this.$auth.user.name} | Редактировать профиль | OLZ`
    }
  },
  methods: {
    addPhoneNumber(){
      if(this.textForm.phoneNumber.length <= 9) {
        this.textForm.phoneNumber.push('')
      }else{
        this.$notify({
          group: 'foo',
          text: `Максимум 10 номеров`,
          type: 'warning'
        })
      }
    },
    openMenu() {
      const menu = event.target.closest('.openMenu').querySelector('.menu')
      menu.hidden = !menu.hidden
    },
    updateYear(){
      this.textForm.newBirthday.year = `${this.textForm.newBirthday.yearChange.first}${this.textForm.newBirthday.yearChange.second}${this.textForm.newBirthday.yearChange.third}`
    },
    thirdChange(math) {
      if (math === '+' && this.textForm.newBirthday.yearChange.third <= 8) this.textForm.newBirthday.yearChange.third ++
      if (math === '-' && this.textForm.newBirthday.yearChange.third >= 1) this.textForm.newBirthday.yearChange.third --
      this.updateYear()
    },
    secondChange(math) {
      if (math === '+') {
        if (this.textForm.newBirthday.yearChange.second <=8 && this.textForm.newBirthday.yearChange.first === 19) {
          this.textForm.newBirthday.yearChange.second ++ 
        }
        if (this.textForm.newBirthday.yearChange.second === 0 && this.textForm.newBirthday.yearChange.first === 20) {
          this.textForm.newBirthday.yearChange.second ++ 
        }
      }
      if (math === '-') {
        if (this.textForm.newBirthday.yearChange.second >= 7 && this.textForm.newBirthday.yearChange.first === 19) {
          this.textForm.newBirthday.yearChange.second --
        }
        if (this.textForm.newBirthday.yearChange.second === 1 && this.textForm.newBirthday.yearChange.first === 20) {
          this.textForm.newBirthday.yearChange.second --
        }
      }
      this.updateYear()
    },
    firstChange(math) {
      if (math === '+' && this.textForm.newBirthday.yearChange.first !== 20) {
        this.textForm.newBirthday.yearChange.first ++ 
        if ( this.textForm.newBirthday.yearChange.second >= 6) this.textForm.newBirthday.yearChange.second = 0
      }
      if (math === '-' && this.textForm.newBirthday.yearChange.first !== 19) {
        this.textForm.newBirthday.yearChange.first -- 
        if ( this.textForm.newBirthday.yearChange.second <= 1) this.textForm.newBirthday.yearChange.second = 6
      }
      this.updateYear()
    },
    openDateWindow(window) {
      if (window === this.openDate) return this.openDate = 0
      if (window === 3 && this.openDate !== 3) this.updateYear()
      // if (window === 3 && this.openDate === 3) this.textForm.newBirthday.year = null
      this.openDate = window
    },
    changeDay(day)  {
      this.textForm.newBirthday.day = day
      this.openDateWindow(0)
    },
    changeMonth(day)  {
      this.textForm.newBirthday.month = day
      this.openDateWindow(0)
    },
    changeSocialPick(num) {
      this.socialPicked = num
    },
    closeTolltip(event){
      event.cancelBubble = true
      this.showTooltip = false
    },
    filePicked(event) {
      const newAvatar = event.target.files[0]
      this.form.pickedAvatar = newAvatar
      if ( event.target.files[0] ) {
        this.form.avatar = URL.createObjectURL(newAvatar)
        return this.avatar = URL.createObjectURL(newAvatar)
      }
      this.$notify({
        type: 'error',
        text: 'Error...'
      })
    },
    avatarDefaultPicker(currentAvatar, avatarForSave) {
      this.form.avatar = currentAvatar
      this.form.pickedAvatar = null
      this.avatar = avatarForSave
    },
    async save(){
      if (this.form.avatar && !this.form.pickedAvatar){
        await this.$axios
        .put('/user/profile/change/avatar', {avatar: this.avatar})
        .then(({data}) => {
          this.$auth.user.avatar.link = this.avatar
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
      if(this.form.pickedAvatar){
        const fd = new FormData()
        fd.append('image', this.form.pickedAvatar, this.form.pickedAvatar.name)
        await this.$axios.put('/user/profile/change/avatar', fd).then(({data}) => {
          this.$auth.user.avatar = data.user.avatar
          this.form.pickedAvatar = null
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
      }
      if (this.textForm.newBirthday.day && this.textForm.newBirthday.month && this.textForm.newBirthday.year) {
        this.textForm.dateBirthday = `${this.textForm.newBirthday.day}-${this.textForm.newBirthday.month}-${this.textForm.newBirthday.year}`
        console.log(this.textForm.dateBirthday);
        
      }
      this.$axios
        .put('/user/profile/change/info', {
          ...this.textForm, 
          phoneNumber: this.textForm.phoneNumber.filter(phone => phone !== '')
        }).then(({data}) => {
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
.menu {
  position: fixed;
  top: 6rem;
  left: 4.2rem;
  right: 1.2rem;
}
.btn-burger {
  z-index: 10;
  position: fixed;
  left: 1rem;  
}
.window{
    position: absolute;
    bottom: 4rem;
    min-width: 180px;
    z-index: 1;
    .day:hover {
      background: #d1d1d1;
    }
}
.about {
  height: 2rem;
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