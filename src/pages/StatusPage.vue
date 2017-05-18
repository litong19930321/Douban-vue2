<template>
  <div class="status-view has-header">
    <banner title="打开App,浏览更多"></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card v-for="item in items" model="quote"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import UserBar from '../components/UserBar.vue'
  import Card from '../components/Card.vue'
  import DownloadApp from '../components/DownloadApp.vue'

  export default {
    components: {
      Banner,
      UserBar,
      Card,
      DownloadApp
    },
    data() {
      return {
        items: [1,2,3,4,5,6,7,8,9]
      }
    }
  }
</script>

<style lang="scss" scoped>
.status-view {
  .content-list{
    .list-link {
      display: block;
      margin-top: 2rem;
      text-align: center;
      color: green;
      font-size: 1.5rem;
    }
  }
}
</style>
