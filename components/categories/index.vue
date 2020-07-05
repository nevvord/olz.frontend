<template lang="pug">
.bg-light
  .container.row.p-1(v-if="categories")
    .categories.cp.col-xl-3.p-none.mx-05(v-for="(category, index) in categories" :key="index")
      .category.p-05.border.br.border-main-1.color-main-1.bg-white(@click="toggleSubCategories") {{category.titleRu}}
      .subCategories.w-100(hidden)
        nuxt-link.subCategory.border-main-1.p-03.pl-1.d-block(
          :to="'/publications/'+subCategory.titleEn"
          v-for="(subCategory, i) in category.subCategories"
          :key="i"  
        ) {{subCategory.titleRu}}
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
    display: block;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    &:first-child {
      border-top: 1px solid;
    }
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