<template>
  <div class="home-view has-header">
    <sub-nav model="quickNav" class="subnav"></sub-nav>

    <!--<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">-->
      <!--<loading slot="spinner"></loading>-->
    <!--</infinite-loading>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import  SubNav from '../components/SubNav.vue'
  import  InfiniteLoading from 'vue-infinite-loading'
  import  Loading from '../components/Loading.vue'

  export default{
    components: {
      subNav: SubNav,
      InfiniteLoading,
      Loading
    },
    computed: {

    },
    data() {
      return {
        list: [],
      };
    },
    methods: {
      onInfinite: function () {
        var that = this
        setTimeout(() => {
          const temp = [];
          for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
            temp.push(i);
          }
          this.list = this.list.concat(temp);
          that.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 3000)
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
