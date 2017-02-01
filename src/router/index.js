import Vue from 'vue'
import VueRouter from 'vue-router'

import MainWrapper from '../view/MainWrapper'
import App from '../App'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: MainWrapper
    }
  ]
})

export default router;
