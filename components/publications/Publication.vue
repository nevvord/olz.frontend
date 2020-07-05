<template lang="pug">
div
  .publication.bg-white.br.border.border-light-1(:class="{'border-success': publication.top}")
    .publication-head
      nuxt-link(:to="`/publications/one/${publication._id}`")
        PhotoViewer.w-100(v-if="publication.images" :img="`${link}/${publication.images[0].name}`" :size="'100%'")
        PhotoViewer.w-100(v-else :img="'/images/imageNotFound.jpg'" :size="'100%'") 
      .images.p-05.bg-main-1.color-white.br
        i.far.fa-image
        span.quantity.pl-05(v-if="publication.images") {{publication.images.length}}
        span.quantity.pl-05(v-else) 0
      .cost.bg-warning.border.border-warning.p-05.br 
        span.mr-03 {{publication.prices[0].price}}
        span(v-if="publication.prices[0].type === 'uah'") ГРН
        span(v-if="publication.prices[0].type === 'usd'") USD
        span(v-if="publication.prices[0].type === 'eur'") EUR
      //- .top.bg-success.p-05.br.color-light
        i.fas.fa-crown.mr-05.color-warning
        span ТОП
    .description
      .adress.border-b.border-light.p-05.color-blue
        i.fas.fa-map-marker-alt.color-warning.mr-05
        span.text {{publication.adress}}
      .title.color-black.border-b.border-light.p-05
        .bold.mb-03 {{publication.title}}
        div {{publication.description}}
      .footer.my-05.pt-05.row
        .user.col-8
          .row
            .col-2
              AvatarViewer.ml-03(:img="`${link}/${publication.user.avatar.link}`" :size="'2rem'")
            .col-10
              .user-name.p-05.cp
                nuxt-link(:to="`/user/${publication.user._id}`") {{publication.user.name}}
        .date.p-05.col-4
          i.far.fa-calendar-alt
          span.date-num {{publication.date | formatDateNoTime}}
</template>
<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
import PhotoViewer from '~/components/imageComponents/PublicationPhotoViewer'
export default {
  components: {
    AvatarViewer,
    PhotoViewer
  },
  props: ['publication'],
  data() {return{
    link: process.env.BASE_URL
  }}
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/value.scss';
.publication {
  // margin: 1rem;
  transition: .3s;
  // &:hover {
  //   border-color: map-get($map: $colors, $key: dGreen);
  //   margin: .3rem;
  // }

  &-head {
    position: relative;
    display: block;
    cursor: pointer;

    .images {
      position: absolute;
      top: .5rem;
      left: .5rem;
      font-size: .8rem;
    }

    .cost {
      position: absolute;
      bottom: .5rem;
      left: .5rem;
      font-size: .8rem;
    }

    .top {
      position: absolute;
      top: -20px;
      right: -20px;
      font-size: .8rem;
      font-weight: 900;
    }
  }

  .description {
    .adress {
      .text {
        font-size: .8rem;
      }
    }

    .title {
      font-size: .8rem;
      // white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 2.4rem;
      max-height: 3.2rem;
    }

    .footer {
      .user {
        // .avatar {
        //   background-color: #fff;
        //   border-radius: 100%;
        //   width: 2rem;
        //   max-width: 2rem;
        //   height: 2rem;
        //   max-height: 2rem;
        //   background-image: url('/images/bg-avatars.svg');
        //   background-size: 400%;
        //   background-position-x: -2px;
        //   background-position-y: -9px;
        // }

        &-name {
          font-size: .8rem;
          white-space: nowrap;
          overflow: hidden;
          // text-overflow: ellipsis;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .date {
        font-size: .8rem;
      }
    }
  }
}
</style>