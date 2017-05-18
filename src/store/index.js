/**
 * Created by litong on 2017/5/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'

import activities from './modules/activities'
import movie from './modules/movie'
import book from './modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    movie,
    book
  }
})
