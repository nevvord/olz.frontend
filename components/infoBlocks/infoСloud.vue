<template lang="pug">
.infoCloud.bg-white.br.border.border-light-1.bs
  .title.p-03.fs-08.color-gray.bg-light.br-t.border-b.border-light-1 {{title}}
  .info.p-03.fs-08 {{info}}
</template>
<script>
export default {
  props: ['title', 'info']
}
</script>
<style lang="scss" scoped>
.infoCloud {
  transition: .3s;
  position: absolute;
  bottom: 100%;
  z-index: 1;
}
</style>