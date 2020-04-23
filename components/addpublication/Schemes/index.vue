<template lang="pug">
div
  Rooms(v-if="schema === 'rooms'")
  Apartments(v-if="schema === 'apartments'")
</template>
<script>
import Rooms from './RentalProperty/rooms'
import Apartments from './RentalProperty/apartments'
export default {
  components: {
    Rooms,
    Apartments
  },
  props: ['schema']
}
</script>