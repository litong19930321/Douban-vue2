/**
 * Created by litong on 2017/5/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'

import activities from './modules/activities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities
  }
})
