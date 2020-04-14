<template>
<div>
  <Categories />
  <AddCircle />
  <PublicationsTop />
  <PublicationsAll />
</div>
</template>

<script>
import Categories from '~/components/categories'
import AddCircle from '~/components/ads/circle'
import PublicationsTop from '~/components/piblications/top'
import PublicationsAll from '~/components/piblications/all'
export default {
  components: {
    Categories,
    AddCircle,
    PublicationsTop,
    PublicationsAll
  },
  head: {
    title: 'OLZ'
  }
}
</script>

<style lang="scss">

</style>
