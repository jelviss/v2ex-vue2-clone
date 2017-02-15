import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../view/MainPage'
import App from '../App'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: MainPage
    }
  ]
})

export default router;
