<template lang="pug">
div
  nuxt-link.display-flex.fs-15.pt-03.transform(to="/")
    .color-white O
    .color-main-2.transformed L
    .color-white Z
</template>

<style lang="scss" scoped>
.transform{
  text-decoration: none;
  &:hover .transformed {
    transform: scaleX(-1);
  }
  .transformed{
    transition: .3s;
  }
}
</style>