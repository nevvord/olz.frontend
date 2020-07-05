<template lang="pug">
client-only
  div(v-if="publication")
    .container.mb-1
      .bg-light.br-b.py-1.px-2
        nuxt-link(to="/") Главная
        span.mx-03.color-light-2 •
        nuxt-link(:to="`/publications/${publication.category.titleEn}`") {{publication.category.titleRu}}
        span.mx-03.color-light-2 •
        nuxt-link(:to="`/publications/${publication.category.titleEn}/${publication.subCategory.titleEn}`") {{publication.subCategory.titleRu}}
        span.mx-03.color-light-2 •
        span.color-gray {{publication.title}}
      .mt-1
        .row
          .col-9
            Slider(:images="publication.images")
            .description.mt-2.p-1.bs.br
              .bold.color-main-1 Описание
              .pt-1 {{publication.description}}
            Characteristics(
              :characteristics="publication.characteristics[0]"
              :subCategory="publication.subCategory"
            )
          .col-3
            MainInfo(
              :info="{prices: publication.prices, title: publication.title, phoneNumbers: publication.phoneNumbers, phoneNumbersShow: publication.phoneNumbersShow}"
            )
            nuxt-link.user.bs.br.mt-05.p-05.d-block.no-underline.bg-light(:to="`/user/${publication.user._id}`")
              .row
                .m-0auto
                  AvatarViewer.bs(
                    :img="`${link}/${publication.user.avatar.link}`"
                    :size="'6rem'"
                  )
                .col-12.text-center.mt-05.bold.color-main-1 {{publication.user.name}}
                .col-12.text-center.mt-03.color-black.fs-08 {{publication.date | formatDateNoTime}}
            .bs.br.p-1.mt-05 {{publication.adress}}
  div.p-1(v-else) Публикация не найденна!?! Возможно была удаленна или заблокированна! Или ее вообще небыло! 
</template>
<script>
import Slider from '~/components/publications/Slider'
import MainInfo from '~/components/publications/MainInfo'
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
import Characteristics from '~/components/publications/Characteristics'
export default {
  middleware: 'publications/getOnePublication',
  components: {
    Slider,
    MainInfo,
    AvatarViewer,
    Characteristics
  },
  data() {return{
    publication: this.$store.getters['publications/getOnePublication'],
    link: process.env.BASE_URL
  }}
}
</script>