<template>
  <div>
    <div>
      <Header />
      <div id="content-body">
        <nuxt />
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import Header from '~/components/header'
export default {
  components: {
    Header
  }
  
}
</script>
<style lang="scss" scoped>
#content-body {
  height: calc(100vh - 50px);
  width: 100%;
  overflow-y: auto;
  overflow-x: none;
  padding-top: 50px;
}

#content-body::-webkit-scrollbar {
  width: 4px;
}
.content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.507);
}
.content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.637);
  outline: 1px solid rgb(0, 0, 0);
}
</style>
