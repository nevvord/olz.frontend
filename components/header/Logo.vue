<template lang="pug">
div
  nuxt-link.display-flex.fs-15.pt-03(to="/")
    .color-white O
    .color-main-2.transformed L
    .color-white Z
</template>

<style lang="scss" scoped>
.transformed{
  transition: .3s;
}
.transform:hover .transformed {
  transform: scaleX(-1);
}
</style>