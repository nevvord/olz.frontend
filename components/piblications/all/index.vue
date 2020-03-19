<template>
  <div>
    <div class="container mt-1  bg-light">
      <!-- Блок объявлений -->
      <div class="publications-title color-blue fs-15 border-b border-color-blue pt-1">
        Самые свежие
      </div>
      <div href="https://goggle.com" class="publications">
        <div class="publication bg-white bs-green p-05 border border-color-green border-radius">
          <div class="publication-head">
            <!-- Картинка, цена, количество изображений -->
            <img class="w-100" src="/dress.jpeg" alt="dress">
            <div class="images p-05 bg-blue color-white border-radius"><i class="far fa-image"></i><span class="
            quantity pl-05">3</span></div>
            <div class="cost bg-orange p-05 border-radius color-white"> 150grn</div>
            <div class="top bg-green p-05 border-radius color-light"><i class="fas fa-crown mr-05 color-warning"></i>ТОП
            </div>
          </div>
          <div class="description">
            <div class="adress border-b border-color-light my-05 color-blue"><i
                class="fas fa-map-marker-alt color-warning mr-05"></i><span class="text">Одесская область, г.Одесса,
                Д.Донского , 55</span></div>
            <div class="title color-black">
              Дом, 1 этаж, 3 комнаты. Площадь участка 2 сотки. Планировка комнат смежно-раздельная. Общее состояние дома
              - хорошее состояние. Срочно.
            </div>
            <div class="footer my-05 border-t border-color-light pt-05">
              <div class="user">
                <div class="avatar"></div>
                <div class="user-name p-05">Big Baby</div>
              </div>
              <div class="date p-05"><i class="far fa-calendar-alt"></i><span class="date-num">16.03.2019</span></div>
            </div>
          </div>
        </div>
        <div class="publication bg-white p-05 border border-color-blue border-radius">
          <a href="/pages/publication.html" class="publication-head">
            <!-- Картинка, цена, количество изображений -->
            <img class="w-100" src="/dress.jpeg" alt="dress">
            <div class="images p-05 bg-blue color-white border-radius"><i class="far fa-image"></i><span class="
            quantity pl-05">3</span></div>
            <div class="cost bg-orange p-05 border-radius color-white"> 150grn</div>
          </a>
          <div class="description">
            <div class="adress border-b border-color-light my-05 color-blue"><i
                class="fas fa-map-marker-alt color-warning mr-05"></i><span class="text">Одесская область, г.Одесса,
                Д.Донского , 55</span></div>
            <div class="title color-black">
              Дом, 1 этаж, 3 комнаты. Площадь участка 2 сотки. Планировка комнат смежно-раздельная. Общее состояние дома
              - хорошее состояние. Срочно.
            </div>
            <div class="footer my-05 border-t border-color-light pt-05">
              <div class="user">
                <div class="avatar"></div>
                <a href="/user/777" class="user-name p-05">Big Baby</a>
              </div>
              <div class="date p-05"><i class="far fa-calendar-alt"></i><span class="date-num">16.03.2019</span></div>
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