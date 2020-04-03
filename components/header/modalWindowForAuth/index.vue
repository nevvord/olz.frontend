<template>
    <div>
        <div class="modal">
            <div class="modal-bg" @click="toggleModalAuth()"></div>
            <div class="modal-body">
                <div class="modal-body-title">
                    <div class="modal-body-title-auth-btn border-b border-color-light">
                        <div class="btn p-05 m-0auto color-blue" :class="{'picked': mode === 'signin'}" @click="changeMode()">Вход</div>
                        <div class="btn p-05 m-0auto color-blue" :class="{'picked': mode === 'signup'}" @click="changeMode()">Регистрация</div>
                    </div>
                </div>
                <div class="modal-body-content">
                    <Social hidden/>
                    <Phrases />
                    <div class="signin mt-1" v-show="mode === 'signin'">
                        <div class="inputs text-center">
                            <form @submit.prevent="signin()">
                                <input class="m-0auto mb-1" type="email" placeholder="Электронный адрес" required>
                                <input class="m-0auto mb-1" type="password" placeholder="Пароль" required>
                                <button type="submit m-0auto dislpay-block" class="mb-1">Вход</button>
                            </form>
                        </div>
                    </div>
                    <div class="signup" v-show="mode === 'signup'">
                        <div class="inputs text-center">
                            <form @submit.prevent="signup()">
                                <input class="m-0auto mb-1" type="email" placeholder="Электронный адрес" required>
                                <input class="m-0auto mb-1" type="password" placeholder="Пароль" required>
                                <input class="m-0auto mb-1" type="text" placeholder="Имя пользователя" required>
                                <button type="submit m-0auto display-block" class="mb-1">Регистрация</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Social from './Social'
import Phrases from './Phrases'

export default {
  components: {
    Social,
    Phrases
  },
  props: ['toggleModalAuth'],
  data: () => ({
    mode: 'signin',
    form: {
      signin: {
        email: '',
        password: ''
      },
      signup: {
        email: '',
        password: '',
        name: ''
      }
    },

  }),
  methods: {
    signin() {
      this.$notify({
        group: 'foo',
        text: 'login',
        type: 'success'
      })

    },
    changeMode() {
      if (this.mode === 'signin') return this.mode = 'signup'
      this.mode = 'signin'
    }
  }
}
</script>

<style lang="scss">@import "~/assets/scss/value.scss";
// Variables
$width-input: 70%;

.modal {
  &-body {
    &-title {
      &-auth-btn {
        display: flex;

        .btn {
          font-size: 1.3rem;
          font-weight: 100;
          cursor: pointer;
          width: 40%;
          text-align: center;
        }

        .picked {
          border-bottom: 1px solid map-get($colors, blue);
        }

      }
    }

    &-content {
      .title {
        color: #999;
        font-size: .7rem;
        text-align: center;
      }

      .social {
        .bnt {
          &:first-child {
            margin-left: auto;
          }

          &:last-child {
            margin-right: auto;
          }
        }
      }

      .signin, .signup {
        .inputs {
          input {
            width: $width-input;
            color: rgb(12, 12, 77);
            transition: .5s;
            &:focus {
              width: 80%;
            }
          }

          button {
            background-color: map-get($colors, blue);
            color: white;
            width: 83%;
          }
        }
      }
    }
  }
}

</style>