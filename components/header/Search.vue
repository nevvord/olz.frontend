<template>
  <div class="hidden-block-480">
    <div class="nav-items nav-item-searh">
      <form @submit.prevent="search()" class="nav-form-search w-100 m-0auto mx-1">
        <input type="text" name="search" id="search" placeholder="Найти аренду..." class="nav-search-input w-100">
        <button type="submit" class="nav-search-btn"><i class="fas fa-search bg-none"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>