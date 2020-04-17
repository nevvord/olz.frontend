<template lang="pug">
  .bg-light(v-if="user")
    .bs.container.p-1
      span.color-blue {{user.name}}
      span.color-dark.pl-05 {{user.login}}
    .container.p-1
      .row
        .col-3
          div
            AvatarViewer.m-0auto(:img="user.avatar" :size="'200px'")
            .p-1
              button.btn-blue.w-100.color-light Подписатся
        .col-9
          .px-2.ml-4.pt-1.pb-2.bs.border-radius.bg-white
            .pt-05.pb-2 {{user.status}}
            .border-b.border-light-1.f-mono Социальные сети
            .fs-2.p-1
              a.ml-05(v-if="user.social.instagram" :href="user.social.instagram")
                i.fab.fa-instagram
              i.fab.fa-instagram.color-light-2(v-else)
              a.ml-05(v-if="user.social.facebook" :href="user.social.facebook")
                i.fab.fa-facebook-square
              i.fab.fa-facebook-square.color-light-2(v-else)
            .border-b.border-light-1.f-mono Иформация пользователя
            .pl-1
              .row.mt-1
                .col-3 Почтовый адресс: 
                .col-9.color-blue {{user.email}} 
              .row.mt-1
                .col-3 Номер телеона: 
                .col-9.color-blue {{user.phoneNumber}} 
              .row.mt-1
                .col-3 Город: 
                .col-9.color-blue {{user.city}} 
              .row.mt-1
                .col-3 День рождения: 
                .col-9.color-blue {{user.dateBirthday | formatDateNoTime}} 
              .row.mt-1
                .col-3 Вид деятельности: 
                .col-9.color-blue {{user.business}} 
              .row.mt-1
                .col-3 Семейное положение: 
                .col-9.color-blue
                  div(v-if="user.sp === '0'") Не указано
                  div(v-if="user.sp === '1'") Свобода
                  div(v-if="user.sp === '2'") Есть пара
                  div(v-if="user.sp === '3'") Женат\Замужем
                  div(v-if="user.sp === '4'") Все сложно
              .row.mt-1
                .col-3  Обомне: 
                .col-9.color-blue {{user.about}} 

  div(v-else)
    img(src="https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif" style="width: 6rem")
</template>
<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'

export default {
  components: {
    AvatarViewer
  },
  data: () => ({
    user: null
  }),
  beforeCreate() {
    this.$axios
      .get(`/user/profile/get/${this.$route.params.id}`)
      .then(({data}) => {
        this.user = data.user
      })
      .catch(error => {
        this.$notify({
          group: 'foo',
          text: error.response.data.msg,
          type: 'error'
        })
      })
  }
}
</script>