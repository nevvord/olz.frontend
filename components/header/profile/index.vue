<template lang="pug">
div
  .nav-item.ml-1(v-if="!$auth.loggedIn"  @click="toggleModalAuth()")
    i.fas.fa-sign-in-alt
    span Личный кабинет
  .ml-1
    #profile(v-if="$auth.loggedIn")
      .profile(@click="TogglerMenu")
        AvatarViewer(:img="$auth.user.avatar" :size="'32px'")
        .user-name(v-if="$auth.user.name")
          span {{$auth.user.name}}
            i.fas.fa-caret-down.pl-05.color-light 
      ToggleMenu(v-show="ToggleMenuVariable" :TogglerMenu="TogglerMenu")
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
#profile {
  position: relative;

  .profile {
    display: flex;
    cursor: pointer;

    &:hover .user-name {
      color: white;
    }

    .avatar {
      background-color: #fff;
      border-radius: 100%;
      width: 2rem;
      height: 2rem;
      background-image: url('/images/bg-avatars.svg');
      background-size: 400%;
      // background-position: -2px -9px;
    }

    .user-name {
      padding: .5rem;
      span {
        max-width: 8rem;
        /* Запрещаем перенос строк */
        white-space: nowrap;
        overflow: hidden;
        /* Обрезаем все, что не помещается в область */
        text-overflow: ellipsis;
        color: rgb(219, 219, 219);
      }
    }
  }
}
</style>