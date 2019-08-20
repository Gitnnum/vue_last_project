import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import category from './modules/category'
import home from './modules/home'
Vue.use(Vuex)
export default new Vuex.Store({
    mode:"history",
    actions,
    mutations,
    getters,
    modules:{
        category, // 分类子状态
        home
    }
})