import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
require('@/assets/css/core-style.css')
require('@/assets/style.css')
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.js'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
