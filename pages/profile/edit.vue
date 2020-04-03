<template lang="pug">
  div
    .container.bold.color-light-2.bg-light.py-1.bs-black.zindex
      .pl-2
        nuxt-link(to="/profile") {{$auth.user.name}}
        span  • Редактор
        
    .container.bg-light-05.py-1
      .profile-user
        .profile-user-content
          Links.bs-black.p-05.border-radius.bg-white
          .ml-2.text-center.bs-black.p-05.border-radius.bg-white
            AvatarViewer(:img="avatar" :size="'200px'")
            .mt-1
              label.btn-pick-img.color-blue-1(for="avatar")
                i.far.fa-image
                span  Выберете фото
              input#avatar(type="file", name="file" accept=".jpg, .jpeg, .png" @change="filePicked" enctype="multipart/form-data" hidden)
          .ml-2.bg-white
            PickDefaultAvatar


    
      .py-1.display-flex
        .bs-black.p-05.border-radius.bg-white.mr-1
          .form-group.mt-1.mx-1
            label(for="City") Введите ваш город
            input.nevvi-fg-input#City(type="text" v-model="form.city" onclick="FormGroupInput(event)")
          .form-group.my-2.mx-1
            label(for="PhoneNum") Введите ваш номер телефона
            input.nevvi-fg-input#PhoneNum(type="text" v-model="form.phoneNum" onclick="FormGroupInput(event)")
        .bs-black.p-05.border-radius.bg-white.mr-1
          .form-group.mt-1.mx-1
            label(for="City") Введите ваш город
            input.nevvi-fg-input#City(type="text" v-model="form.city" onclick="FormGroupInput(event)")
          .form-group.my-2.mx-1
            label(for="PhoneNum") Введите ваш номер телефона
            input.nevvi-fg-input#PhoneNum(type="text" v-model="form.phoneNum" onclick="FormGroupInput(event)")

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
      avatar: '',
      city: '',
      phoneNum: ''
    }
  }},
  head() {
    return {
      title: `${this.$auth.user.name} | Редактировать профиль | OLZ`
    }
  },
  methods: {
    filePicked(event) {
      const newAvatar = event.target.files[0]
      if ( event.target.files[0] ) {
        this.avatar = URL.createObjectURL(newAvatar)
      } else {
        console.log('else');
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 240px;
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

  &:hover {
    background-color: #e9ebf3;
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

.form-group {
    input {
        padding-bottom: .3rem;
    }
}

</style>