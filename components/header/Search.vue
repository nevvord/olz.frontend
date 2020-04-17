<template lang="pug">
div
  form.nav-form-search.w-100(@submit.prevent="search()")
    input.nav-search-input.w-100(type="search" name="search" id="search" placeholder="Найти аренду...")
    .nav-search-btn
      i.fas.fa-search
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav-form-search {
    position: relative;

    .nav-search-input {
        padding: .5rem;
        border: none;
        outline: none;
    }

    .nav-search-btn {
        cursor: pointer;
        background-color: #33333300;
        border: none;
        outline: none;
        font-size: 1.5rem;
        position: absolute;
        right: .25rem;
        top: .25rem;
        color: rgb(169, 182, 196);
        padding: 0;
        &:hover {
            box-shadow: none;
            background: #00000000;
        }
    }
}
</style>