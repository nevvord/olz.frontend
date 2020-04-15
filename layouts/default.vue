<template>
  <div>
    <div>
      <ModalFbPassword :hideModal="hideModal" v-if="showModal" />
      <Header />
      <div id="content-body">
        <nuxt />
        <Footer />
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'
import ModalFbPassword from '~/components/registerFbPasword'
export default {
  components: {
    Header,
    Footer,
    ModalFbPassword
  },
  data: () => ({
    showModal: false
  }),
  methods: {
    hideModal() {
      this.showModal = false
    }
  },
  mounted() {
    const strategy = localStorage.getItem('auth.strategy')
    if (strategy === 'facebook' && this.$auth.loggedIn) {
      const body = {
        name: this.$auth.user.name,
        avatar: this.$auth.user.picture.data.url,
        email: this.$auth.user.email,
        fbID: this.$auth.user.id
      }
      this.$axios.post('/auth/fb', body)
          .then(({data}) => {
            this.$auth.setUser(data.user)
            this.$store.state.user = data.user
          })
          .catch(error => {
            if(error.response && error.response.status === 404) {
              this.showModal = true
            }
            
          })

    } 
    
  }
  
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/value.scss';
#content-body {
  $sizing: 50px;
  height: calc(100vh - 50px);
  width: 100%;
  overflow-y: auto;
  overflow-x: none;
  padding-top: $sizing;
  
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #00000030;
  }
  &::-webkit-scrollbar-thumb {
    background-color: map-get($map: $colors, $key: blue);
  }
}

</style>
