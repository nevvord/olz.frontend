<template lang="pug">
div
  .row
    .col-12.col-xl-6.pt-1
      div
        .color-main-1.pb-03.pl-03 Вид аренды
          span.color-danger.pl-03 *
        .row.cursor-pointer.text-center.bs.border.border-light-1.br.mx-03
          .col.px-none(@click="changeTypeArent('hourly')")
            .br-l.p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': typeArent === 'hourly'}"
            ) Почасовая
          .col.px-none(@click="changeTypeArent('daily')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': typeArent === 'daily'}"
            ) Посуточная
          .col.px-none(@click="changeTypeArent('longTerm')")
            .br-r.p-05(
              :class="{'bg-main-1 color-white': typeArent === 'longTerm'}"
            ) Долгосрочная
    .col-12.col-xl-6.pt-1
      div
        .color-main-1.pb-03.pl-03 Количество комнат
          span.color-danger.pl-03 *
        .row.cursor-pointer.text-center.bs.border.border-light-1.br.mx-03
          .col.px-none(@click="changeRooms('1')")
            .br-l.p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': rooms === '1'}"
            ) 1
          .col.px-none(@click="changeRooms('2')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': rooms === '2'}"
            ) 2
          .col.px-none(@click="changeRooms('3')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': rooms === '3'}"
            ) 3
          .col.px-none(@click="changeRooms('4')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': rooms === '4'}"
            ) 4
          .col.px-none(@click="changeRooms('5')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': rooms === '5'}"
            ) 5
          .col.px-none(@click="changeRooms('5+')")
            .br-r.p-05(
              :class="{'bg-main-1 color-white': rooms === '5+'}"
            ) 5+
    .col-12.col-xl-6.pt-1
      div
        .color-main-1.pl-03.pb-03 Количество спальных мест
        .row.cursor-pointer.text-center.bs.border.border-light-1.br.mx-03
          .col.px-none(@click="changeSleepingPlaces('1')")
            .br-l.p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '1'}"
            ) 1
          .col.px-none(@click="changeSleepingPlaces('2')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '2'}"
            ) 2
          .col.px-none(@click="changeSleepingPlaces('3')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '3'}"
            ) 3
          .col.px-none(@click="changeSleepingPlaces('4')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '4'}"
            ) 4
          .col.px-none(@click="changeSleepingPlaces('5')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '5'}"
            ) 5
          .col.px-none(@click="changeSleepingPlaces('6')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '6'}"
            ) 6
          .col.px-none(@click="changeSleepingPlaces('7')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '7'}"
            ) 7
          .col.px-none(@click="changeSleepingPlaces('8')")
            .p-05.border-r.border-light-1(
              :class="{'bg-main-1 color-white': sleepingPlaces === '8'}"
            ) 8
          .col.px-none(@click="changeSleepingPlaces('8+')")
            .br-r.p-05(
              :class="{'bg-main-1 color-white': sleepingPlaces === '8+'}"
            ) 8+
    .col-12.col-xl-6.pt-1
      div
        .row
          .col-6
            .windowPickLevel.bg-white.br.border.border-main-1.text-center(v-if="windows.level")
              .row.m-none
                .col-2.cursor-pointer.hover-main-1.py-03.br(
                  v-for="index in 47" :key="index"
                  @click="changeLeve(index)"
                )
                  div {{index}}
            .color-main-1.pb-03 Этаж
            .p-05.border.br.border-light-1.bs.text-center.cursor-pointer(@click="toggleWindow('level')")
              div {{level}}
          .col-6
            .windowPickLevel.bg-white.br.border.border-main-1.text-center(v-if="windows.maxLevel")
              .row.m-none
                .col-2.cursor-pointer.hover-main-1.py-03.br(
                  v-for="index in 47" :key="index"
                  @click="changeMaxLeve(index)"
                )
                  div {{index}}
            .color-main-1.pb-03 Всего этажей
            .p-05.border.br.border-light-1.bs.text-center.cursor-pointer(@click="toggleWindow('maxLevel')")
              div {{maxLevel}}
    .col-12.col-xl-6.pt-1
      div
        .color-main-1.pl-03.pb-03 Типо дома
        select.w-100.border.border-light-1.fs-1(v-model="houseType")
          option Дореволюционные
          option Сталинка
          option Старая панель
          option Типовая панель
          option Улучшенная типовая панель(70е - 80е гг.)
    .col-12.col-xl-6.pt-1
      div
        .color-main-1.pl-03.pb-03 Санузел
        .row.cursor-pointer
          .col.pr-none
            .border.border-light-1.p-05.br-l(
              @click="changeBathroom('adjacent')"
              :class="{'bg-main-1 color-white': bathroom === 'adjacent'}"
            )
              div Смежный
          .col.pl-none
            .border.border-light-1.p-05.br-r.border-l-none(
              @click="changeBathroom('separate')"
              :class="{'bg-main-1 color-white': bathroom === 'separate'}"
            )
              div Раздельный
    //- .col-none.col-xl-6
    .col-12.col-xl-4.pt-1
      .color-main-1.pb-03.pl-03 Общая площадь
        small.color-light-2.pl-05 M2
      input.border.border-light-1.w-100(type="text" v-model="area.total")
    .col-12.col-xl-4.pt-1
      .color-main-1.pb-03.pl-03 Жилая площадь
        small.color-light-2.pl-05 M2
      input.border.border-light-1.w-100(type="text" v-model="area.living")
    .col-12.col-xl-4.pt-1
      .color-main-1.pb-03.pl-03 Площадь кухни
        small.color-light-2.pl-05 M2
      input.border.border-light-1.w-100(type="text" v-model="area.kitchen")
    .col-12.pt-1 
      .color-main-1.pb-03.pl-03.cursor-pointer.d-flex(@click="toggleConditions")
        i.fas.fa-caret-down(:class="{'transform-270': !windows.сonditions}")
        span.pl-05 Бытовые условия
        .pl-05.d-flex (
          .color-light-2(v-for="(сondition, index) in arrays.livingСonditions")
            span.pl-03(v-if="сondition.picked") {{сondition.title}},
        div )
      div(v-if="windows.сonditions")
        .d-flex.cursor-pointer
          .hover-main-1-05.br.m-03(
            v-for="(сondition, index) in arrays.livingСonditions" 
            :key="index"
            :class="{'border border-main-1 color-main-1': сondition.picked, 'border border-white color-light-2': !сondition.picked}"
            @click="changeСonditions(index)"
          )
            .p-05 {{сondition.title}}
      .border-b.border-light-1
    .col-12.pt-1
      .color-main-1.pb-03.pl-03.cursor-pointer.d-flex(@click="toggleadvantages")
        i.fas.fa-caret-down(:class="{'transform-270': !windows.advantages}")
        span.pl-05 Преймущества
        .pl-05.d-flex (
          .color-light-2(v-for="(advantage, index) in arrays.advantages")
            span.pl-03(v-if="advantage.picked") {{advantage.title}},
        div )
      div(v-if="windows.advantages")
        .d-flex.cursor-pointer
          .hover-main-1-05.br.m-03(
            v-for="(advantage, index) in arrays.advantages" 
            :key="index"
            :class="{'border border-main-1 color-main-1': advantage.picked, 'border border-white color-light-2': !advantage.picked}"
            @click="changeAdvantage(index)"
          )
            .p-05 {{advantage.title}}
      .border-b.border-light-1
    .col-12.pt-1
      .color-main-1.pb-03.pl-03 Планировка
      select.fs-1.w-100.border.border-light-1(v-model="forLayout")
        option(value="null") Выбрать планировку
        option(v-for="(layout, index) in arrays.layouts" :key="index" :value="layout.value") {{layout.name}}
    div
</template>

<script>
export default {
  data: () => ({
    windows: {
      level: false,
      maxLevel: false,
      advantages: false,
      сonditions: false
    },
    typeArent: null,
    rooms: null,
    sleepingPlaces: '1',
    level: 1,
    maxLevel: 1,
    houseType: null,
    bathroom: 'separate',
    forLayout: null,
    area: {
      total: null,
      living: null,
      kitchen: null

    },
    arrays: {
      livingСonditions: [
        {title: 'Телевизор', picked: false},
        {title: 'Бойлер', picked: false}, 
        {title: 'WI-Fi', picked: false},
        {title: 'Посуда', picked: false},
        {title: 'ПК', picked: false},
        {title: 'Фен', picked: false},
        {title: 'Утюг', picked: false},
        {title: 'Душ', picked: false},
        {title: 'Ванная', picked: false},
        {title: 'Балкон', picked: false},
        {title: 'Камин', picked: false},
        {title: 'Консьерж', picked: false},
        {title: 'Домофон', picked: false},
        {title: 'Холодильник', picked: false},
        {title: 'Сикроволновка', picked: false},
        {title: 'Фильтр воды', picked: false},
        {title: 'Кондиционер', picked: false},
        {title: 'Стереосистема', picked: false},
        {title: 'Пол с подогревом', picked: false},
        {title: 'Охранная система', picked: false},
        {title: 'Звукоизоляция',picked: false},
        {title: 'Газовая колонка', picked: false},
        {title: 'Стиральная машина', picked: false},
        {title: 'Индивидуальное отопление', picked: false},
        {title: 'Пожарная система безопасности', picked: false}
      ],
      advantages: [
        {title: "Магазин 24", picked: false},
        {title: "Супермаркет", picked: false},
        {title: "Кинотеатр", picked: false},
        {title: "Ресторан", picked: false}, 
        {title: "Кафе", picked: false},
        {title: "Бар", picked: false},
        {title: "Аптека 24", picked: false},
        {title: "Библиотека", picked: false},
        {title: "Школа", picked: false},
        {title: "Детский садик", picked: false},
        {title: "Парк", picked: false},
        {title: "Университет", picked: false},
        {title: "Парковка", picked: false},
        {title: "Сквер для выгула собак", picked: false},
        {title: "Личное парковочное место", picked: false},
        {title: "Нараж", picked: false},
        {title: "Спортивная площадка", picked: false},
        {title: "Детская игровая зона", picked: false},
        {title: "Спортивный зал", picked: false},
        {title: "Рынок", picked: false},
        {title: "Торговый центр", picked: false},
        {title: "Больница", picked: false},
        {title: "Детская поликлиника", picked: false},
        {title: "Удобная транспортная развязка", picked: false},
        {title: "Зоомагазин", picked: false},
        {title: "Ветеринарная клиника", picked: false},
        {title: "Религиозный центр", picked: false},
        {title: "Магазин одежды", picked: false},
        {title: "Канцтовары", picked: false},
        {title: "Шаурма", picked: false},
        {title: "Кофейня", picked: false},
        {title: "Бювет", picked: false},
        {title: "Лаборатория", picked: false},
        {title: "Музей", picked: false},
        {title: "Театр", picked: false},
        {title: "Памятники архитектуры", picked: false},
        {title: "Близко к морю", picked: false},
        {title: "Вид на море", picked: false},
        {title: "Красивый вид", picked: false},
        {title: "Зоопарк", picked: false},
        {title: "Автомойка", picked: false},
        {title: "Автосервис", picked: false},
        {title: "Нотариус", picked: false},
        {title: "Ночной клуб", picked: false},
        {title: "IT-кафе", picked: false},
        {title: "Поча", picked: false}
      ],
      layouts: [
        {value: "adjacent", name: "Смежная"},
        {value: "walkThrough", name: "Проходная"},
        {value: "separate", name: "Раздельная"},
        {value: "studio", name: "Студия"},
        {value: "penthouse", name: "Пентхаус"},
        {value: "multiLevel", name: "Многоуровневая"},
        {value: "smallFamily", name: "Малосемейка"},
        {value: "livingRoom", name: "Гостинка"},
        {value: "smartApartment", name: "Смарт-квартира"},
        {value: "freeLayout", name: "Свободная планировка"},
        {value: "twoSided", name: "Двухсторонняя"}
      ]
    }
  }),
  methods: {
    changeTypeArent(type) {
      this.typeArent = type
    },
    changeRooms(rooms) {
      this.rooms = rooms
    },
    changeSleepingPlaces(places) {
      this.sleepingPlaces = places
    },
    changeLeve(level) {
      this.level = level
      if (this.maxLevel < this.level) this.maxLevel = this.level
      this.toggleWindow('level')
    },
    changeMaxLeve(level) {
      this.maxLevel = level
      if (level < this.level) this.maxLevel = this.level
      this.toggleWindow('maxLevel')
    },
    toggleWindow(window) {
      this.windows[window] = !this.windows[window]
    },
    changeBathroom(type) {
      this.bathroom = type
    },
    changeСonditions(index) {
      this.arrays.livingСonditions[index].picked = !this.arrays.livingСonditions[index].picked 
    },
    changeAdvantage(index) {
      this.arrays.advantages[index].picked = !this.arrays.advantages[index].picked 
    },
    toggleConditions() {
      this.windows.сonditions = !this.windows.сonditions
    },
    toggleadvantages() {
      this.windows.advantages = !this.windows.advantages
    }
  }
}
</script>

<style lang="scss" scoped>
.windowPickLevel {
  position: absolute;
  bottom: 2.2rem;
}
</style>