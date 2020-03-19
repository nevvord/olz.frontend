<template>
  <div>
    <SideBarMenu />
    <nav>
        <ButtonOpenSideBarMenu hidden/>
        <Logo />
        <Links />
        <Search />
        <div class="hidden-block">
          <div class="nav-items ml-1">
            <ButtonAdd />
            <Profile :toggleModalAuth="toggleModalAuth" />
          </div>
        </div>
        <SmallLoginBtn hidden/>
    </nav>
    <ModalWindowForAuth  v-if="showModalAuth" :toggleModalAuth="toggleModalAuth" />
    <div class="freePlaceUnderHeader"></div> <!-- Опускает основной сайт под шапку -->
  </div>
</template>

<script>
import SideBarMenu from './SideBarMenu'
import ButtonOpenSideBarMenu from './ButtonOpenSideBarMenu'
import Logo from './Logo'
import Links from './Links'
import Search from './Search'
import ButtonAdd from './ButtonAdd'
import Profile from './Profile/'
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

<style>

</style>