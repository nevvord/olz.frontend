<template lang="pug">
div
  .color-dark.cursor-pointer.pick-categories.border-radius
    .title.p-05.pr-1.transition-03(@click="clickCategory")
      .bold.color-main-1 Выбрать категорию {{category}}
    .categories.transition-03(hidden)
      .category(v-for="(category, index)  in categories" :key="index")
        .title.py-05.pl-1.pr-1(@click="open")
          i.fas.fa-caret-down
          div {{category.title}}
        .subCategories(hidden)
          .subCategory(v-for="(subCategory, i) in category.subCategories" :key="i")
            .title.pl-15.pr-1.py-03(@click="pick(subCategory.value, subCategory.title)")
              i.fas.fa-icons
              div {{subCategory.title}}
</template>

<script>
export default {
  props: ['getCategory'],
  data: () => ({
    category: '',
    categories: [
      {
        title: 'Аренда недвижимости',
        title2: 'RentalProperty',
        position: 1,
        subCategories: [
          {title: "Квартири", value: 'apartments', icons: ''},
          {title: "Комнаты", value: 'rooms', icons: ''},
          {title: "Дома", value: 'houses' , icons: ''},
          {title: "Загородные дачи", value: 'сountryСottages', icons: ''},
          {title: "Земельные участки", value: 'lands', icons: ''},
          {title: "Гаражи", value: 'garages', icons: ''},
          {title: "Виллы", value: 'villas', icons: ''},
          {title: "Коттеджи", value: 'Cottages', icons: ''}
        ]
      },
      {
        title: 'Аренда коммерческой недвижимости',
        title2: 'CommercialRealEstateForRent',
        position: 2,
        subCategories: [
          {title: "Офисные помещения", value: 'officeRooms', icons: ''},
          {title: "Промышленные объекты", value: 'industrialFacilities', icons: ''},
          {title: "Водные объекты", value: 'waterObjects' , icons: ''},
          {title: "Склады", value: 'warehouses', icons: ''},
          {title: "Торговые точки", value: 'outlets', icons: ''},
          {title: "Земельные участки", value: 'commercialLands', icons: ''}
        ]
      }
    ]
  }),
  methods: {
    open() {
      const subCategory = event.target.closest('.category')
      subCategory.querySelector('.subCategories').hidden = !subCategory.querySelector('.subCategories').hidden
      if (subCategory.querySelector('i').style.transform === 'rotate(0deg)') return subCategory.querySelector('i').style = null
      subCategory.querySelector('i').style.transform = 'rotate(0deg)'
    },
    clickCategory() {
      const category = event.target.closest('.pick-categories').querySelector('.categories')
      category.hidden = !category.hidden
      if (event.target.closest('.pick-categories').querySelector('.title').style.paddingLeft === '1rem') { 
        event.target.closest('.pick-categories').querySelector('.title').style = null
      }else{
        event.target.closest('.pick-categories').querySelector('.title').style.paddingLeft = '1rem'
      }
    },
    pick(category, inner) {
      this.category = category
      this.getCategory(category)
      event.target.closest('.categories').hidden = true
      event.target.closest('.subCategories').hidden = true
      event.target.closest('.category').querySelector('i').style = null
      event.target.closest('.pick-categories').querySelector('.title').style = null
      event.target.closest('.pick-categories').querySelector('.bold').innerHTML = inner
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/value.scss';
.title {
  display: flex;
  i {
    display: block;
    color: map-get($colors , blue);
    transform: rotate(270deg);
    margin-right: .3rem;
  }
  &:hover {
    background: rgba(map-get($colors , blue), .1);
  }
}
</style>