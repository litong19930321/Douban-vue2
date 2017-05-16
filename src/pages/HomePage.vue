<template>
  <div class="home-view has-header">
    <sub-nav model="quickNav" class="subnav"></sub-nav>
    <list model="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapActions } from 'vuex'

  import  SubNav from '../components/SubNav.vue'
  import  InfiniteLoading from 'vue-infinite-loading'
  import  Loading from '../components/Loading.vue'
  import  List from '../components/List.vue'

  export default{
    name: 'home-page',
    components: {
      subNav: SubNav,
      InfiniteLoading,
      Loading,
      List
    },
    computed: {
      ...mapState({
        events: state => state.activities.events
      })
    },
    data() {
      return {

      };
    },
    methods: {
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      ...mapActions([
        'loadMore',
        'getEvent'
      ])
    },
    created() {
//      this.loadMore()
    }
  }
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
