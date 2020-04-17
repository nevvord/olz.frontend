<template lang="pug">
div
  SideBarMenu
  nav.bg-main-1.py-05
    .container
      .row
        ButtonOpenSideBarMenu.col-2.col-md-1.col-lg-none
        .col-xl-3
          .row
            Logo.col-8.col-md-2.col-lg-1.col-xl-3
            Links.col-none.col-xl-9
        Search.col-none.col-sm-none.col-md-8.col-lg-7.col-xl-5
        .col-none.col-lg-3.col-xl-4
          .row
            ButtonAdd.col-lg-12.col-xl-6(:toggleModalAuth="toggleModalAuth")
            Profile.col-none.col-xl-6(:toggleModalAuth="toggleModalAuth")
        SmallLoginBtn.col-2.col-md-1.col-lg-1.col-xl-none
        

        
    ModalWindowForAuth(v-if="showModalAuth" :toggleModalAuth="toggleModalAuth")
</template>

<script>
import SideBarMenu from './SideBarMenu'
import ButtonOpenSideBarMenu from './ButtonOpenSideBarMenu'
import Logo from './Logo'
import Links from './Links'
import Search from './Search'
import ButtonAdd from './ButtonAdd'
import Profile from './profile/'
import SmallLoginBtn from './SmallLoginBtn'
import ModalWindowForAuth from './modalWindowForAuth/'

export default {
    components: {
        SideBarMenu,
        ButtonOpenSideBarMenu,
        Logo,
        Links,
        Search,
        ButtonAdd,
        Profile,
        ButtonAdd,
        SmallLoginBtn,
        ModalWindowForAuth
    },
    data() {return{
      showModalAuth: false
    }},
    methods: {
      toggleModalAuth() {
        this.showModalAuth = !this.showModalAuth
      }
    }
}
</script>

<style lang="scss" scoped>
nav {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>