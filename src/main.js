import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// fastClick解决移动端300ms延迟问题
import fastClick from 'fastclick'
// 加载重置css
import '@css/reset.css'
// 1像素边框问题解决
import '@css/border.css'
// 引入iconfont
import '@css/iconfont/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
