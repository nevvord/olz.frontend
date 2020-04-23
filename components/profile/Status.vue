<template lang="pug">
.status(@click="change")
  label(v-if="!clicked")
    p.my-05(v-if="$auth.user.status") {{$auth.user.status}}
    p.my-05(v-else class="color-light-2") Введите свой первый статус
  div(v-if="clicked")
    form(@submit.prevent="apdateStatus")
      input.w-100(type="text" v-model="status" @keydown="onKeydown" autofocus)
</template>
<script>
export default {
  data: () => ({
    status: '',
    clicked: false
  }),
  methods: {
    change(event) {
      if (!this.clicked) {
        this.status = this.$auth.user.status
        this.clicked = true
      }
      event.target.closest('.status').querySelector('.input-change-status')
    },
    apdateStatus() {
      this.$axios.put('/user/profile/change/status', {
          status: this.status
        })
        .then(({
          data
        }) => {
          this.$auth.user.status = this.status
          this.clicked = false
          this.$notify({
            group: 'foo',
            text: data.msg,
            type: 'success'
          })
        })
        .catch(({
          response
        }) => {
          this.$notify({
            group: 'foo',
            text: response.data.msg,
            type: 'warn'
          })
        })
    },
    onKeydown(event) {
      const ESCAPE = 27
      if (event.keyCode === ESCAPE) {
        this.clicked = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>