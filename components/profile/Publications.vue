<template lang="pug">
.row(v-if="publications.length > 0")
  Publication.col-3(v-for="(publication, index) in publications" :key="index" :publication="publication")
div(v-else) У вас еще нет активных публикация
</template>
<script>
import Publication from '~/components/publications/Publication'
export default {
  components: {
    Publication
  },
  data() {return{
    publications: this.$store.getters['publications/getUserPublications']
  }}
}
</script>