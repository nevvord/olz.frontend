import Vue from 'vue'

// Vue.filter('formatDate', value => {
//   if (value) {
//     const date = value.split('T')
//     const time = date[1].split(':')
//     return `${date[0]}, ${time[0]}:${time[1]}`
//   }
// })
Vue.filter('formatDateNoTime', value => {
  if (value) {
    const date = value.split('T')
    return date[0]
  }
})