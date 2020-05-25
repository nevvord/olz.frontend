<template lang="pug">
.bg-light
  .container.row.p-1(v-if="categories")
    .categories.cp.col-xl-3.p-none.mx-05(v-for="(category, index) in categories" :key="index")
      .category.p-05.border.br.border-main-1.color-main-1.bg-white(@click="toggleSubCategories") {{category.titleRu}}
      .subCategories.w-100(hidden v-for="(subCategory, i) in category.subCategories" :key="i")
        nuxt-link.subCategory.border.border-main-1.p-03.pl-1.d-block(:to="'/publications/'+subCategory.titleEn") {{subCategory.titleRu}}
  .container(v-else) Else
</template>

<script>
export default {
  data() {return{
    categories: this.$store.getters['categories/getCategories'],
    toggles: {
      subCategories: false
    }
  }},
  beforeCreate() {
    // this.$axios.get('/publications/categories/get/forMainPage').then(async response => {
    //   await this.$store.dispatch('categories/updateCategories', response.data.categories)
    //   this.categories = await this.$store.getters['categories/getCategories']
    // }).catch(error => {
    //   console.log(error)
    // })
  },
  methods: {
    toggleSubCategories() {
      const subCategories = event.target.closest('.categories').querySelector('.subCategories')
      subCategories.hidden = !subCategories.hidden      
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  position: relative;
}
.subCategories{
  position: absolute;
  top: 1.8rem;
  .subCategory {
    background: #fff;
    &:last-child {
      border-radius: 0 0 4px 4px;
    }
    :hover{
      background: maroon;
      border-right-color: maroon;
    }
  }
}
</style>