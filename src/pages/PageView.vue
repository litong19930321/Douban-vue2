<template>
  <div class="pages-view">
    <header-bar v-on:showTalion="open"></header-bar>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from '../components/HeaderBar.vue'

export  default{
  components: {
    headerBar:HeaderBar
  },
  data() {
    return {

    }
  },
  methods:{
    //监听最左侧的点击事件
    open: function () {
      console.log('say hello')
    }
  }
}
</script>

<style lang="scss" scoped>
  .pages-view{
    display: flex;
    flex-direction: column;
  }
</style>
