<template lang="pug">
  .links.color-black
    .bs.p-05.border-radius.bg-white
      nuxt-link.display-block.p-03(to="/profile/edit" exact-active-class="profileLinkActive")
        i.fas.fa-pen.width-icon
        span.ml-03.ml-03 Редактировать

      nuxt-link.display-block.p-03(to="profile/edit")
        i.fa.fa-tools.width-icon
        span.ml-03.ml-03 Настройки
      
      nuxt-link.display-block.p-03(to="profile/edit")
        i.fas.fa-user-friends.width-icon
        span.ml-03 Подписки

      nuxt-link.display-block.p-03(to="profile/edit")
        i.fas.fa-star.width-icon
        span.ml-03 Подпиcчики
      
      nuxt-link.display-block.p-03(to="profile/edit")
        i.far.fa-comment-alt.width-icon
        span.ml-03 Сообщения
      
      nuxt-link.display-block.p-03(to="profile/edit")
        i.far.fa-file-alt.width-icon
        span.ml-03 Мои обьявления
      
      nuxt-link.display-block.p-03(to="profile/edit")
        i.far.fa-star.width-icon
        span.ml-03 Избранное
      
      nuxt-link.display-block.p-03(to="profile/edit")
        i.fas.fa-money-bill-wave.width-icon
        span.ml-03 Работас счетом
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.links a:hover {
  background-color: #0000ff10;
  color: #364c9f;
  border-radius: 6px;
}

.profileLinkActive {
  background-color: #364c9f;
  border-radius: 6px;
  color: white;
}

.width-icon {
  width: 1.2rem;
}
</style>