export default async function ({ store, $axios }) {
  const response = await $axios.$get('/publications/get/user')
  store.dispatch('publications/updateUserPublications', response.publications)
}