// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import './assets/css/reset.css'

Vue.config.productionTip = false

//数据接口服务器代理解决跨域问题
global.API_PROXY = 'https://bird.ioliu.cn/v2/?url=' 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
