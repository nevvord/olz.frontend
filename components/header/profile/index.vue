<template>
    <div>
      <div class="nav-item ml-1" @click="toggleModalAuth()">
        <i class="fas fa-sign-in-alt"></i>
        Личный кабинет
      </div>
      <div class="ml-1">
        <div id="profile" hidden>
          <div class="profile">
            <div class="avatar"></div>
            <div class="user-name">Big Baby <i class="fas fa-caret-down"></i></div>
          </div>
            <ToggleMenu />
        </div>
      </div>
    </div>
</template>

<script>
import ToggleMenu from './ToggleMenu'
    export default {
        components: {
            ToggleMenu
        },
        props: ['toggleModalAuth']
    }
</script>

<style lang="scss" scoped>

</style>