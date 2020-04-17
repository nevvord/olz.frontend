<template>
  <div>
    <div class="modal">
      <div class="modal-bg" @click="toggleModalAuth()"></div>
      <div class="modal-body">
      
        <div class="modal-body-title">
          <div class="modal-body-title-auth-btn border-b border-light">
            <div class="btn p-05 m-0auto color-blue" :class="{'picked': mode === 'signin'}" @click="changeMode()">
              Вход
            </div>
            <div class="btn p-05 m-0auto color-blue" :class="{'picked': mode === 'signup'}" @click="changeMode()">
              Регистрация
            </div>
          </div>
        </div>
        <div class="modal-body-content">
          <Phrases />
          <Social />
          <div class="signin mt-1" v-show="mode === 'signin'">
            <div class="inputs text-center">
              <form @submit.prevent="signin()">
                <input v-model="form.signin.email" class="m-0auto mb-1" type="email" name="email"
                  placeholder="Электронный адрес" required>
                <input v-model="form.signin.password" class="m-0auto mb-1" type="password" name="password"
                  placeholder="Пароль" required>
                <button type="submit" class="mb-1">Вход</button>
              </form>
            </div>
          </div>
          <div class="signup mt-1" v-show="mode === 'signup'">
            <div class="inputs text-center">
              <form @submit.prevent="signup()">
                <input v-model="form.signup.email" class="m-0auto mb-1" type="email" name="email"
                  placeholder="Электронный адрес" required>
                <input v-model="form.signup.password" class="m-0auto mb-1" type="password" name="password"
                  placeholder="Пароль" required>
                <input v-model="form.signup.name" class="m-0auto mb-1" type="text" name="fullName"
                  placeholder="Имя пользователя" required>
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
      this.$auth.loginWith('local', {
          data: {
            "email": this.form.signin.email,
            "password": this.form.signin.password
          }})
          .then(response => {
            this.signin = {
              email: '',
              password: ''
            }
            this.toggleModalAuth()
            this.$notify({
              group: 'foo',
              text: "Добро пожаловать",
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
    signup(){
      const sendBody = {...this.form.signup}
      this.$axios.post('/auth/registration', sendBody)
          .then(response => {
            this.signup = {
              email: '',
              password: '',
              name: ''
            }
            this.toggleModalAuth()
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
          cursor: pointer;
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