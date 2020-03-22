<template>
    <div>
        <div class="toggle-menu" id="toggle-menu">
          <div class="toggle-menu-item"><i class="fas fa-newspaper"></i> Мои объявления </div>
          <div class="toggle-menu-item"><i class="fas fa-coins"></i> Мои пакеты </div>
          <div class="toggle-menu-item"><i class="fas fa-wrench"></i> Настройки </div>
          <div class="toggle-menu-item" id="exit" @click="logout"><i class="fas fa-sign-out-alt"></i> Выход</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['TogglerMenu'],
        methods: {
            logout(){
                // localStorage.removeItem('auth')
                this.$auth.logout()
                this.TogglerMenu()
                localStorage.setItem('auth.strategy', 'local')
                // this.$store.state.auth = false
                // this.$store.state.user = null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>