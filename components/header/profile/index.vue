<template>
    <div>
      <div class="nav-item ml-1" v-if="!$auth.loggedIn"  @click="toggleModalAuth()">
        <i class="fas fa-sign-in-alt"></i>
        Личный кабинет
      </div>
      <div class="ml-1">
        <div id="profile" v-if="$auth.loggedIn">
          <div class="profile" @click="TogglerMenu">
            <div class="avatar" v-if="!$auth.user.avatar && !$auth.user.avatar"></div>
            <img class="avatar" v-else-if="$auth.user.avatar" :src="$auth.user.avatar" :alt="$auth.user.name">
            <img class="avatar" v-else-if="$auth.user.avatar" :src="$auth.user.avatar" :alt="$auth.user.name">
            <div class="user-name" v-if="$auth.user.name">{{$auth.user.name}}</div><i class="py-05 color-light fas fa-caret-down"></i> 
          </div>
          <ToggleMenu v-show="ToggleMenuVariable" :TogglerMenu="TogglerMenu"/>
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

</style>