<template>
    <div class="status" @click="change">
        <label v-show="!clicked">
            <p v-if="$auth.user.status">{{$auth.user.status}}</p>
            <p v-else class="color-light-2">Введите свой первый статус</p>
        </label>
        <div v-show="clicked">
            <form @submit.prevent="apdateStatus">
                <input size="" class="input-change-status mr-1" type="text" v-model="status" @keydown="onKeydown">
            </form>
        </div>
    </div>
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
                event.target.closest('.status').querySelector('.input-change-status').focus()
            },
            apdateStatus() {
                this.$axios.put('/user/profile/change/status', {status: this.status})
                    .then(({data}) => {
                        this.$auth.user.status = this.status
                        this.clicked = false
                        this.$notify({
                        group: 'foo',
                        text: data.msg,
                        type: 'success'
                      })
                    })
                    .catch(({response}) => {
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
.input-change-status {
    border: 1px solid #dfe5ec;
    width: 98%;
    border-radius: 4px;
    padding: 2px;
}
</style>