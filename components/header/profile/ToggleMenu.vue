<template>
    <div>
        <div class="toggle-menu" id="toggle-menu">
          <div class="toggle-menu-item"><i class="fas fa-newspaper"></i> Мои объявления </div>
          <nuxt-link @click.native="TogglerMenu" to="/profile" class="display-block toggle-menu-item"><i class="far fa-user"></i> Профиль </nuxt-link>
          <!-- <div class="toggle-menu-item"><i class="fas fa-wrench"></i> Настройки </div> -->
          <div class="toggle-menu-item" id="exit" @click="logout"><i class="fas fa-sign-out-alt"></i> Выход</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['TogglerMenu'],
        methods: {
            logout(){
                this.$auth.logout()
                this.TogglerMenu()
                localStorage.setItem('auth.strategy', 'local')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>