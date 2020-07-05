<template lang="pug">
div
  .bs.p-1
    .bold.pb-05.pl-05.text-center {{info.title}}
    .border.br.border-warning.p-05.text-center 
      span.pr-03 {{info.prices[0].price}}
      span(v-if="info.prices[0].type === 'uah'") ГРН
      span(v-if="info.prices[0].type === 'usd'") USD
      span(v-if="info.prices[0].type === 'eur'") EUR
      span.color-danger.pl-03(v-if="info.prices[0].bargain") Обмен
    .text-center
      div.p-05.hover-main-1.cp.border.br.border-main-1.mt-05.color-main-1(v-if="toggles.phoneNumbers" @click="togglePhoneNumbers") Показать номер телефона
      div.mt-05.row(v-else)
        .col(v-for="(number, index) in info.phoneNumbers" :key="index")
          a.d-block.cp.p-05.cp.border.br.border-main-1(:href="`tel:${number}`") {{number}}

</template>
<script>
export default {
  props: ['info'],
  data() {return{
    toggles: {
      phoneNumbers: this.info.phoneNumbersShow
    }
  }},
  methods: {
    togglePhoneNumbers() {
      this.toggles.phoneNumbers = !this.toggles.phoneNumbers
    }
  }
}
</script>