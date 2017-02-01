import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import axios  from 'axios'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
