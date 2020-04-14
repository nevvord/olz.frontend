<template>
    <div class="modal">
        <div class="modal-bg" @click="msg"></div>
        <div class="modal-body">
            <div class="text-center p-1 color-blue">Для окончания регистрации введите пароль!</div>
            <form @submit.prevent="sendPassword">
                <input class="m-0auto display-block" type="password" v-model="form.password" required>
                <button class="m-0auto display-block my-1" type="submit">Готово</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  props: ["hideModal"],
  data: () => ({
    form: {
      password: ''
    }
  }),
  methods: {
    sendPassword() {
      const body = {
        name: this.$auth.user.name,
        password: this.form.password,
        email: this.$auth.user.email,
        avatar: this.$auth.user.picture.data.url,
        fbID: this.$auth.user.id
      }
      this.$axios.post('/auth/registrationFB', body)
        .then(response => {
          this.form = {
            password: ''
          }
          this.$store.state.user = response.data.user
          this.hideModal()
          this.$notify({
            group: 'foo',
            text: response.data.msg,
            type: 'success'
          })
        })
        .catch(error => {
          this.$notify({
            group: 'foo',
            text: error.response.data.msg,
            type: 'warn'
          })
        })
    },
    msg() {
        this.$notify({
            group: 'foo',
            text: "Это нужно для ваше безопасности",
            type: 'warn'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/value.scss';
.modal{
    &-body {
        input {
            width: 70%;
            color: rgb(12, 12, 77);
            transition: .5s;

            &:focus {
                width: 80%;
            }
        }
        button {
            background-color: map-get($colors, blue);
            color: white;
            width: 73%;
        }
    }
}
</style>