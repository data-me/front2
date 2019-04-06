import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import router from '../router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
