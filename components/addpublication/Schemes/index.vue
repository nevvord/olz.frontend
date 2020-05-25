<template lang="pug">
div
  .characteristaics(v-if="category")
    .charact(v-for="(charact, index) in category.characteristics")
      .form-group.mb-05(v-if="charact.type === 'text'")
        label.display-block.mb-03(:for="`input-${index}`")
          span.color-main-1 {{charact.name}}
          small.ml-05.color-light-2 {{charact.suffix}}
          span.ml-03.color-danger(v-if="charact.required") *
        input(:type="charact.type" :id="`input-${index}`" v-model="form[charact.title]" @change="changeChar")
      .form-group.mb-05(v-if="charact.type === 'select'")
        label.display-block.mb-03(:for="`select-${index}`")
          span.color-main-1 {{charact.name}}
          small.ml-05.color-light-2 {{charact.suffix}}
          span.ml-03.color-danger(v-if="charact.required") *
        select.w-100.fs-1(:id="`select-${index}`" v-model="form[charact.title]" @change="changeChar")
          option.fs-1(value="") Сделайте выбор
          option.fs-1(v-for="(option, i) in charact.options" :value="option.value") {{option.title}}
      .mb-05(v-if="charact.type === 'chekbox'")
        .display-block.mb-03(:for="`checkbox-${index}`")
          span.color-main-1 {{charact.name}}
          small.ml-05.color-light-2 {{charact.suffix}}
          span.ml-03.color-danger(v-if="charact.required") *
        div.d-inlineBlock(v-for="(cb, i) in charact.list")
          input(type="checkbox" :id="`cb-${i}`" v-model="form[charact.title]" :value="cb" @change="changeChar")
          label(:for="`cb-${i}`") {{cb}}
</template>
<script>
import Rooms from './RentalProperty/rooms'
import Apartments from './RentalProperty/apartments'
export default {
  components: {
    Rooms,
    Apartments
  },
  props: ['category', 'updateCharacteristics'],
  data() {return{
    form: {}
  }},
  watch: {
    category: function(newVar, oldVar) {
      if (newVar && newVar !== oldVar) {
        this.form = {}
        newVar.characteristics.forEach(char => {
          if (char.type === 'chekbox') return this.form[char.title] = []
          this.form[char.title] = ''
        })
      }
    }
  },
  methods: {
    changeChar() {
      this.updateCharacteristics(this.form)
    }
  }
}
</script>