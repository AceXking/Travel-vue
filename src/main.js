import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// fastClick解决移动端300ms延迟问题
import fastClick from 'fastclick'
// swiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 加载重置css
import '@css/reset.css'
// 1像素边框问题解决
import '@css/border.css'
// 引入iconfont
import '@css/iconfont/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
