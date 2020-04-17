<template lang="pug">
footer.bg-dark
  .container.color-white
    .row.border-b.border-white.py-2
      .col-12.col-sm-6.col-md-4.col-lg-4.col-xl-4
        nuxt-link.display-block.p-03.color-white(to="/info/dogovor") Договор об аренде 
        nuxt-link.display-block.p-03.color-white(to="/info/guide") Руководство пользователя 
        nuxt-link.display-block.p-03.color-white(to="/info/useragree") Пользовательское соглашение 
        nuxt-link.display-block.p-03.color-white(to="/info/useragree") Политика конфидециаьности 
        a.display-block.p-03.color-white(href="http://zvonilo.com") Zvonilo.com 
      .col-12.col-sm-6.col-md-4.col-lg-5.col-xl-6
        nuxt-link.display-block.p-03.color-white(to="/info/about") О нас 
        nuxt-link.display-block.p-03.color-white(to="/info/pays") Способы оплаты 
        nuxt-link.display-block.p-03.color-white(to="/info/vacansis") Вакансии 
      .col-12.col-sm-12.col-md-4.col-lg-3.col-xl-2.text-right
        div Контакты:
        div +38 (050) 65-68-756
        div +38 (068) 17-02-284
    .row
      .col-6.py-1
        div
          small OLZ.com.ua 2019
        div
          small ТОВ "Коляда Софт". Все права защишены
      .col-6
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>