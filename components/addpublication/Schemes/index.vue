<template lang="pug">
div
  .characteristaics(v-if="category")
    .charact(v-for="(charact, index) in category.characteristics")
      .form-group.mb-05(v-if="charact.type === 'text'")
        label.display-block.mb-03(:for="`input-${index}`")
          span.color-main-1 {{charact.name}}
          small.ml-05.color-light-2 {{charact.suffix}}
          span.ml-03.color-danger(v-if="charact.required") *
        input(
          :type="charact.type"
          :id="`input-${index}`"
          @keydown="nevviValidate"
          @keyup="nevviValidate"
          v-model="form[charact.title]"
          @keypress="changeChar"
          :data-validate-maxLength="charact.maxLength"
          :data-validate-minLength="charact.minLength"
          :data-validate-OnlyNumber="charact.onlyNumber"
          :data-validate-title="charact.title"
        )
      .form-group.mb-05(v-if="charact.type === 'select'")
        label.display-block.mb-03(:for="`select-${index}`")
          span.color-main-1 {{charact.name}}
          small.ml-05.color-light-2 {{charact.suffix}}
          span.ml-03.color-danger(v-if="charact.required") *
        select.w-100(:id="`select-${index}`" v-model="form[charact.title]" @change="changeChar")
          option(value="") Сделайте выбор
          option(v-for="(option, i) in charact.options" :value="option.value") {{option.title}}
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
export default {
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
          this.form[char.title] = null
        })
      }else{
        oldVar.characteristics.forEach(char => {
          if (char.type === 'chekbox') return this.form[char.title] = []
          this.form[char.title] = null
        })
      }
    }
  },
  methods: {
    changeChar() {
      this.updateCharacteristics(this.form)
    },
    nevviValidate(event) {
      const input = event.target
      if(this.form[input.dataset.validateTitle] && this.form[input.dataset.validateTitle] !== null && this.form[input.dataset.validateTitle].length >= input.dataset.validateMaxlength) {
        this.form[input.dataset.validateTitle] = this.form[input.dataset.validateTitle].substr(0, input.dataset.validateMaxlength)
      }
      if (input.dataset.validateOnlynumber) {
        event = (event) ? event : window.event
        var charCode = (event.which) ? event.which : event.keyCode
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          event.preventDefault()
        } else {
          return true
        }
      }
    }
  }
}
</script>