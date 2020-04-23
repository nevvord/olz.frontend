<template lang="pug">
div
  .row
    .col-12.col-lg-4
      .color-main-1 Количество комнат
      .display-flex.pt-03
        .display-flex.m-0auto.bs.br
          .px-1.py-05.cp.br-l.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '1', 'bg-blue color-white': sleepingPlaces === '1'}"
            @click="changeSleepingPlaces('1')"
          )
            div 1
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '2', 'bg-blue color-white': sleepingPlaces === '2'}"
            @click="changeSleepingPlaces('2')"
          )
            div 2
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '3', 'bg-blue color-white': sleepingPlaces === '3'}"
            @click="changeSleepingPlaces('3')"
          )
            div 3
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '4', 'bg-blue color-white': sleepingPlaces === '4'}"
            @click="changeSleepingPlaces('4')"
          )
            div 4
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '5', 'bg-blue color-white': sleepingPlaces === '5'}"
            @click="changeSleepingPlaces('5')"
          )
            div 5
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '6', 'bg-blue color-white': sleepingPlaces === '6'}"
            @click="changeSleepingPlaces('6')"
          )
            div 6
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '7', 'bg-blue color-white': sleepingPlaces === '7'}"
            @click="changeSleepingPlaces('7')"
          )
            div 7
          .px-1.py-05.cp.border-r.border-light-1(
            :class="{'bg-light': sleepingPlaces !== '8', 'bg-blue color-white': sleepingPlaces === '8'}"
            @click="changeSleepingPlaces('8')"
          )
            div 8
          .px-1.py-05.cp.br-r(
            :class="{'bg-light': sleepingPlaces !== '8+', 'bg-blue color-white': sleepingPlaces === '8+'}"
            @click="changeSleepingPlaces('8+')"
          )
            div 8+
</template>
<script>
export default {
  data: () => ({
    sleepingPlaces: '1'
  }),
  methods: {
    changeSleepingPlaces(places) {
      this.sleepingPlaces = places
    }
  }
}
</script>