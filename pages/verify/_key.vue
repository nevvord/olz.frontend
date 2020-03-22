<template>
    <div>
        Подверждение почтового адресса!
    </div>
</template>

<script>
    export default {
      mounted() {
        this.$axios.post('/auth/verifymail', {
            key: this.$route.params.key
          })
          .then(response => {
            console.log(response.data.user);
            this.$router.push('/')
            this.$notify({
                group: 'foo',
              text: response.data.msg,
              type: 'success'
            })
          })
          .catch(error => {
            this.$router.push('/')
            this.$notify({
              group: 'foo',
              text: error.response.data.msg,
              type: 'warn'
            })
          })
      }
    }
</script>

<style lang="scss" scoped>

</style>