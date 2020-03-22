<template>
  <div>
    <div class="title p-1">Войти через</div>
    <div class="social">
      <div class="display-flex text-center">
        <no-ssr>
          <div @click="fblogin()" class="bnt bg-blue color-white p-05 border-radius px-2 mr-1">
            <i class="fab fa-facebook-square"></i>
            Facebook
          </div>
          <div @click="glogin()" class="bnt bg-orange color-white p-05 border-radius px-2 ml-1">
            <i class="fab fa-google"></i>
            Google
          </div>
        </no-ssr>
      </div>
    </div>
    <div class="title p-1">или</div>
  </div>
</template>

<script>
export default {
  methods: {
    async glogin(){
      await this.$auth.loginWith('google')
      .then(response => {
          this.$notify({
            group: 'foo',
            text: response,
            type: 'success'
          })
          console.log(this.$auth.user);
        })
        .catch(error => {
          this.$notify({
            group: 'foo',
            text: error,
            type: 'warn'
          })
        })
    },
    async fblogin() {
      // this.$axios.get(`https://www.facebook.com/v6.0/dialog/oauth?client_id=661486947949676&redirect_uri={"https://localhost:3000"}&state={"{st=state123abc,ds=123456789}"}`)
      await this.$auth.loginWith('facebook')
        .then(response => {
          this.$notify({
            group: 'foo',
            text: response,
            type: 'success'
          })
          console.log(response);
        })
        .catch(error => {
          this.$notify({
            group: 'foo',
            text: error,
            type: 'warn'
          })
        })

    }
  }
}
</script>

<style lang="scss" scoped>

</style>