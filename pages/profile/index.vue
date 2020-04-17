<template lang="pug">
div
  .bg-light.bs
    .container.py-1.zindex
      .pl-2.color-blue {{$auth.user.name}}
  .mt-1
    .container
      .profile-user
        .profile-user-content
          Links
          .ml-2
            .text-center.bs.p-05.border-radius.bg-white
              AvatarViewer(:img="$auth.user.avatar" :size="'200px'")
          .profile-info.px-1.ml-2.bg-white.p-1.bs.border-radius
            .mb-05.pb-05
              h3.color-blue {{$auth.user.name}}
              Status.border-b
            .mt-1
              div(v-if="$store.state.auth.user.social.facebook || $store.state.auth.user.social.instagram")
                .pl-05 Соц сети:
                .fs-2
                  a.ml-05(v-if="$store.state.auth.user.social.instagram" :href="$store.state.auth.user.social.instagram")
                    i.fab.fa-instagram
                  i.fab.fa-instagram.color-light-2(v-else)
                  a.ml-05(v-if="$store.state.auth.user.social.facebook" :href="$store.state.auth.user.social.facebook")
                    i.fab.fa-facebook-square
                  i.fab.fa-facebook-square.color-light-2(v-else)
            .row.mt-2.bg-light.border-radius.p-1.bs
              .col-4
                .p-05.bold Номер телефона:
                .px-05.py-03.bold Почтовый адресс:
                .px-05.py-03.bold Город:
                .px-05.py-03.bold Дата рождеия:
                .px-05.py-03.bold Вит деятельности:
                .px-05.py-03.bold Семейное положение:
                .px-05.py-03.bold О себе:
              .col-8
                  .px-05.py-03.color-blue(v-if="$auth.user.phoneNumber") {{$auth.user.phoneNumber}}
                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.email") {{$auth.user.email}}
                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.city") {{$auth.user.city}}
                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.dateBirthday") {{ $auth.user.dateBirthday | formatDateNoTime }}
                  
                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.business")
                    div(v-if="$auth.user.business === '0'") Не указано
                    div(v-if="$auth.user.business === '1'") Частно лицо
                    div(v-if="$auth.user.business === '2'") Юридическое лицо

                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.sp")
                    div(v-if="$auth.user.sp === '0'") Не указано
                    div(v-if="$auth.user.sp === '1'") Свобода
                    div(v-if="$auth.user.sp === '2'") Есть пара
                    div(v-if="$auth.user.sp === '3'") Женат\Замужем
                    div(v-if="$auth.user.sp === '4'") Все сложно
                  .px-05.py-03.color-blue(v-else) ...
                  .px-05.py-03.color-blue(v-if="$auth.user.about") {{$auth.user.about}}
                  .px-05.py-03.color-blue(v-else) ...
      .row.mt-1
        .col-12
          .bs.p-1.bg-white
            .color-gray.mb-1 Мои обьявления
            div Вы не добавили не одного объявления! 0_0
</template>

<script>
import Links from '~/components/profile/Links'
import Status from '~/components/profile/Status'
import AvatarViewer from '~/components/imageComponents/AvatarViewer'

export default {
  components: {
    Links,
    Status,
    AvatarViewer
  },
  data: () => ({
  }),
  head() {return{
    title: `${this.$auth.user.name} | OLZ`
  }},
  middleware: 'authenticated'
}
</script>

<style lang="scss" scoped>
.zindex {
  position: relative;
}
</style>