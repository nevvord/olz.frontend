<template>
  <div>
    <div class="container bold color-light-2 bg-light py-1">
      <div class="pl-2">
        {{$auth.user.name}}
      </div>
    </div>
    <div class="container p-1">
      <div class="profile-user p-1">
        <div class="profile-user-content">
          <Links />
          <div class="ml-4">
            <AvatarViewer :img="$auth.user.avatar" :size="'200px'"/>
          </div>
          <div class="profile-info px-1 ml-2">
            <div class="mb-05 pb-05 border-b border-color-light-1">
              <h3 class=" color-blue">{{$auth.user.name}}</h3>
              <Status />
            </div>
            <div class="mt-1">
              <div>
                <div class="pl-05">Соц сети:</div>
                <div class="fs-2">
                  <a href="https://instagram.com" class="ml-05 "><i class="fab fa-instagram"></i></a>
                  <a href="https://instagram.com" class="ml-05 "><i class="fab fa-facebook-square"></i></a>
                </div>
                <!-- <div class="pl-05 color-blue" v-else>...</div> -->
              </div>
            </div>
            <div class="grid-2 m-0auto mt-2 bg-light border-radius p-1">
              <div>
                <div class="bold">Номер телефона:</div>
                <div class="bold">Почтовый адресс:</div>
                <div class="bold">Город:</div>
                <div class="bold">Дата рождеия:</div>
                <div class="bold">Вит деятельности:</div>
                <div class="bold">Семейное положение:</div>
                <div class="bold">О себе:</div>
              </div>
              <div class="ml-1">
                <div class="pl-05 color-blue" v-if="$auth.user.phone">{{$auth.user.phone}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="pl-05 color-blue" v-if="$auth.user.email">{{$auth.user.email}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="pl-05 color-blue" v-if="$auth.user.city">{{$auth.user.city}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="pl-05 color-blue" v-if="$auth.user.dateBirthday">{{$auth.user.dateBirthday}}
                </div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="pl-05 color-blue" v-if="$auth.user.business">{{$auth.user.business}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="pl-05 color-blue" v-if="$auth.user.adout">{{$auth.user.sp}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
                <div class="ml-05 color-blue" v-if="$auth.user.about">{{$auth.user.about}}</div>
                <div class="pl-05 color-blue" v-else>...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Links from '~/components/profile/Links'
import Status from '~/components/profile/Status'
import AvatarViewer from '~/components/imageComponents/AvatarViewer'

export default {
  components: {
    Links,
    Status,
    AvatarViewer
  },
  data: () => ({
  }),
  head() {return{
    title: `${this.$auth.user.name} | OLZ`
  }},
  middleware: 'authenticated'
}
</script>