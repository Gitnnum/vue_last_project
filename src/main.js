// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入适配的包文件
import 'lib-flexible/flexible'

//引入路由器
import router from './router/index'

//引入store
import store from './store'

//引入mock模块
import './mock/mock-server.js'

//引入filter全局过滤器
import './filter'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 注册路由器
  store
})
