<template>
  <div>
    <div id="nav-toggle-menu">
      <div class="sideBar-menu-item">Тарифы</div>
      <div class="sideBar-menu-item">Помощь</div>
      <div class="sideBar-menu-item">Контакты</div>
      <div class="sideBar-menu-item"><i class="fas fa-newspaper"></i> Мои объявления </div>
      <div class="sideBar-menu-item"><i class="fas fa-coins"></i> Мои пакеты </div>
      <div class="sideBar-menu-item"><i class="fas fa-wrench"></i> Настройки </div>
      <div class="sideBar-menu-item" id="exit"><i class="fas fa-sign-out-alt"></i> Выход</div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#nav-toggle-menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    margin-top: 52px;
    transition: 1s cubic-bezier(0.34, 0.63, 0.19, 0.99);
    z-index: 2000;
}
</style>