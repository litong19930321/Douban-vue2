<template>
  <div class="group has-header">
    <banner title="打开App,发现更多"></banner>
    <user-bar></user-bar>
    <group title="租房找室友" :items="group_a">
      <a href="#" class="list-link" slot="more">租房找室友</a>
    </group>
    <group title="来聊五块钱" :items="group_b">
      <a href="#" class="list-link" slot="more">来聊五块钱</a>
    </group>
    <group title="买买买" :items="group_c">
      <a href="#" class="list-link" slot="more">买买买</a>
    </group>
    <download-app></download-app>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  import Banner from '../components/Banner.vue'
  import UserBar from '../components/UserBar.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  import Group from '../components/Group.vue'

  export default {
    components: {
      UserBar,
      DownloadApp,
      Banner,
      Group
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        group_a: state => state.group.group_a,
        group_b: state => state.group.group_b,
        group_c: state => state.group.group_c
      })
    },
    methods: {
      getGroup: function () {
        this.$store.dispatch('getGroup')
      }
    },
    created() {
      this.getGroup()
    }
  }
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
.user-bar {
  border-bottom: 0.2rem solid #ededed;
}
</style>
