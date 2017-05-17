<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" v-bind:items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" v-bind:items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" v-bind:items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" v-bind:items="movieTags"></scroller>
    <types></types>
    <download-app ></download-app>
    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
import DownloadApp from '../components/DownloadApp.vue'
import Scroller from '../components/Scroller.vue'
import Loading from '../components/Loading.vue'
import Types from '../components/Types.vue'

import { mapState } from 'vuex'

export default {
   components: {
     DownloadApp,
     Scroller,
     Loading,
     Types
   },
   data() {
      return {
        loading: true
      }
   },
   created() {
      this.getMovie()
   },
   methods: {
     getMovie: function () {
       this.$store.dispatch('getMovie').then( res => {
         this.loading = false
       })
     }
   },
   computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      topMovies: state => state.movie.topMovies,
      newMovies: state => state.movie.newMovies,
      movieTags: state => state.movie.movieTags
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
