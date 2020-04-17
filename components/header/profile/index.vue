<template lang="pug">
div
  .color-white.cursor-pointer.py-05(v-if="!$auth.loggedIn"  @click="toggleModalAuth()")
    i.fas.fa-sign-in-alt
    span  Авторизация
  div
    #profile(v-if="$auth.loggedIn")
      .row.cursor-pointer.toggleMenu(@click="TogglerMenu")
        AvatarViewer.col-2(:img="$auth.user.avatar" :size="'2rem'")
        .col-10.user-name.color-white.py-05.pl-03(v-if="$auth.user.name")
          span.ts {{$auth.user.name}}
            i.fas.fa-caret-down.color-light.pl-03 
      ToggleMenu(v-show="ToggleMenuVariable" :ToggleMenuVariable="ToggleMenuVariable" :TogglerMenu="TogglerMenu")
</template>

<script>
import ToggleMenu from './ToggleMenu'
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
  components: {
    ToggleMenu,
    AvatarViewer
  },
  props: ['toggleModalAuth'],
  data: () => ({
    ToggleMenuVariable: false
  }),
  methods: {
    TogglerMenu() {
      this.ToggleMenuVariable = !this.ToggleMenuVariable
    }
  }
}
</script>

<style lang="scss" scoped>
.user-name {
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */
  max-width: 80%;
}

</style>