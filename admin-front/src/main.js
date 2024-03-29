import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './libs/element.config.js'
import './reset.css'
import './assets/icon/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$moment = moment

Vue.filter('format', value => {
  return moment(value).format('YYYY-MM-DD')
})

Vue.filter('changeZh', value => {
  let arr = ['一级', '二级', '三级']
  return arr[parseInt(value)]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
