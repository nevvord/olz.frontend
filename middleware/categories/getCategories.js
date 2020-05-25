export default async function ({ store, $axios }) {
  const response = await $axios.$get('/publications/categories/get/forMainPage')
  store.dispatch('categories/updateCategories', response.categories)
}