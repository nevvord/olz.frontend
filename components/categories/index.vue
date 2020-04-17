<template>
    <div class="bg-light py-1">
      <div class="container">
        <!-- Категории -->
        <div class="communication">
          <i class="fas fa-anchor my-1"></i>
          Теперь ты знаеш по чем в Oдессе рубироид!
        </div>
        <div class="categories">
          <div class="categories">
            <div class="cat-items">
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-briefcase"></i></span>
                  <span>Услуги</span>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleHiddenMenu(event, 'cat-item', 'cat-item-dropDown')">
                  <span class="cat-item-icon"><i class="far fa-building"></i></span>
                  <span>Аренда недвижИмости</span>
                </div>
                <div class="cat-item-dropDown" hidden>
                  <div class="cat-item-dropDown-item">
                    Зимний инвентарь
                  </div>
                  <a href="http://google.com">
                    <div class="cat-item-dropDown-item">
                      Турестический инвентар
                    </div>
                    <div class="cat-item-dropDown-item">
                      Турестический инвентар
                    </div>
                    <div class="cat-item-dropDown-item">
                      Турестический инвентар
                    </div>
                  </a>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-car"></i></span>
                  <span>Аренда транспорта</span>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-magnet"></i></span>
                  <span>Аренда оборудования</span>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-plug"></i></span>
                  <span>Аренда электроники</span>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-tshirt"></i></span>
                  <span>Аренда одежды</span>
                </div>
              </div>
              <div class="cat-item">
                <div class="item" onclick="toggleCategoriesDropdown(event)">
                  <span class="cat-item-icon"><i class="fas fa-swimmer"></i></span>
                  <span>Аренда спорт инвентаря</span>
                </div>
                <div class="cat-item-dropDown" id="categoriesDropDown" hidden>
                  <div class="cat-item-dropDown-item">
                    Зимний инвентарь
                  </div>
                  <a href="http://google.com">
                    <div class="cat-item-dropDown-item">
                      Турестический инвентар
                    </div>
                  </a>
                </div>
              </div>
              <div class="cat-item" onclick="toggleCategoriesDropdown(event)">
                <div class="item">
                  <span class="cat-item-icon"><i class="fas fa-hotel"></i></span>
                  <span>Покупка недвижемости</span>
                </div>
              </div>
              <div class="cat-item" onclick="toggleCategoriesDropdown(event)">
                <div class="item">
                  <span class="cat-item-icon"><i class="fas fa-otter"></i></span>
                  <span>Прочее</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>