<template lang="pug">
div
  div.bs.br.mt-1.p-1
    .bold.color-main-1 Характеристики
    .mt-1.row
      div.mt-05.col-6(v-for="(char, index) in subCategory.characteristics" :key="index")
        span {{char.name}}:
        span.ml-05(v-if="char.type === 'chekbox'")
          span.fs-08.p-03.border.border-main-1.br.mr-03(v-for="(check, i) in characteristics[char.title]") {{check}}
        span.ml-05(v-else) {{characteristics[char.title]}}
        span.ml-03.color-light-2.fs-08(v-if="char.suffix") {{char.suffix}}
</template>
<script>
export default {
  props: ['characteristics', 'subCategory']
}
</script>