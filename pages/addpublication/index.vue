<template>
    <div>
        hihihihi
    </div>
</template>

<script>
    export default {
        beforeCreate(){
            if (!this.$store.state.auth) {
                this.$router.push('/')
                this.$notify({
                    group: 'foo',
                    text: `Войдите в личный кабинет для продолжения`,
                    type: 'warn'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>