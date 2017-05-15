<template>
  <div class="pages-view">
    <header-bar v-on:showTalion="open"></header-bar>
    <router-view></router-view>
    <talion-view v-show="talion" v-on:closeTalion="close"></talion-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from '../components/HeaderBar.vue'
  import TalionView from '../pages/TalionPage.vue'
  export  default{
    components: {
      headerBar:HeaderBar,
      talionView: TalionView
    },
    data() {
     return {
        talion: ''
      }
    },
    methods:{
      //监听最左侧的点击事件
      open: function () {
        console.log('say hello')
        this.talion = 'true'
      },
      close: function () {
        this.talion = ''
        console.log('close')
      }
    }
}
</script>

<style lang="scss" scoped>
  .pages-view{

  }
</style>
