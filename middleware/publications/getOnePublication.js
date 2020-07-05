export default async function ({ store, $axios, route }) {
  await $axios.$get(`/publications/get/publication/${route.params.id}`).then((response) => {
    store.dispatch('publications/updateOnePublication', response.publication)
  }).catch((error) => {
    console.error(error.response.msg);
  })
}