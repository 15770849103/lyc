// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "../static/font-awesome-4.7.0/css/font-awesome.min.css"
import "./assets/common-wap.css"
Vue.config.productionTip = false
//axios
import axios from 'axios'
// 将axios放入到Vue的原型上之后，因为组件其实是Vue的子类，所以会继承Vue原型上的东西，对于组件实例来说，可以通过this.$http直接使用
Vue.prototype.$http = axios
//使用的时候$http.get
import router from '../router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//将路由工具配置在这里之后，里面所有的组件都能通过this.$router来使用路由
  components: { App },
  template: '<App/>'
})
