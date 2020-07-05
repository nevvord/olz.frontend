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
import PublicationsTop from '~/components/publications/top'
import PublicationsAll from '~/components/publications/all'
export default {
  middleware: 'categories/getCategories',
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
