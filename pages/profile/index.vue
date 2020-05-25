<template lang="pug">
div
  .container.bold.py-1.bs.zindex.br-b.bg-light
    .pl-2
      span.color-blue {{$auth.user.name}} 
      span  - {{$store.state.auth.user.login}}
  .container.mb-1
    .row
      .col-12.col-xl-none
        .btn-burger
          .btn.btn-main-1.openMenu(@click="openMenu")
            i.fas.fa-bars
            .menu(hidden)
              Links
      Links.pt-1.col-none.col-xl-2
      .pt-1.col-12.col-md-4.col-xl-3
        .py-05
          AvatarViewer.m-0auto(:img="link + $store.state.auth.user.avatar.link" :size="'200px'")
      .col-12.col-xl-7.pt-1
        .bg-white.px-1.pt-03.bs.border-radius
          h3.m-none.color-blue {{$auth.user.name}}
          Status.border-b.border-gray
          .mt-1
            div(v-if="$store.state.auth.user.social.facebook || $store.state.auth.user.social.instagram")
              .pl-05 Соц сети:
              .fs-2.pl-1
                a.ml-05(v-if="$store.state.auth.user.social.instagram" target="_blank" rel="noopener noreferrer" :href="$store.state.auth.user.social.instagram")
                  i.fab.fa-instagram
                i.fab.fa-instagram.color-light-2(v-else)
                a.ml-05(v-if="$store.state.auth.user.social.facebook" target="_blank" rel="noopener noreferrer" :href="$store.state.auth.user.social.facebook")
                  i.fab.fa-facebook-square
                i.fab.fa-facebook-square.color-light-2(v-else)
          .row
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
        .bs.p-1.bg-white.border-radius
          .color-gray.mb-1 Мои обьявления
          p Вы не добавили не одного объявления! 0_0
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
    link: process.env.BASE_URL + '/'
  }),
  head() {return{
    title: `${this.$auth.user.name} | OLZ`,
  }},
  methods: {
    openMenu() {
      const menu = event.target.closest('.openMenu').querySelector('.menu')
      menu.hidden = !menu.hidden
    },
  },
  middleware: 'authenticated'
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 6rem;
  left: 4.2rem;
  right: 1.2rem;
}
.btn-burger {
  z-index: 10;
  position: fixed;
  left: 1rem;  
}
.zindex {
  position: relative;
}
</style>