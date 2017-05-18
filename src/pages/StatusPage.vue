<template>
  <div class="status-view has-header">
    <banner title="打开App,浏览更多"></banner>
    <user-bar></user-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import UserBar from '../components/UserBar.vue'

  export default {
    components: {
      Banner,
      UserBar
    }
  }
</script>

<style lang="scss" scoped>

</style>
