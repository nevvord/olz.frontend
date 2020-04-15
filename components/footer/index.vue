<template lang="pug">
.container.bg-dark.color-white.py-2
  .row.border-b.border-white.pb-2
    .col-3
      nuxt-link.display-block.p-03.color-white(to="/info/dogovor") Договор об аренде 
      nuxt-link.display-block.p-03.color-white(to="/info/guide") Руководство пользователя 
      nuxt-link.display-block.p-03.color-white(to="/info/useragree") Пользовательское соглашение 
      nuxt-link.display-block.p-03.color-white(to="/info/useragree") Политика конфидециаьности 
      a.display-block.p-03.color-white(href="http://zvonilo.com") Zvonilo.com 
    .col-7
      nuxt-link.display-block.p-03.color-white(to="/info/about") О нас 
      nuxt-link.display-block.p-03.color-white(to="/info/pays") Способы оплаты 
      nuxt-link.display-block.p-03.color-white(to="/info/vacansis") Вакансии 

    .col-2
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