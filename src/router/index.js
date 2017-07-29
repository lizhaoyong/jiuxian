import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../components/MainPage'
import FindPage from '../components/FindPage'
import ActivePage from '../components/ActivePage'
import BuyCarPage from '../components/BuyCarPage'
import SelfPage from '../components/SelfPage'

Vue.use(Router)

export default new Router({
  routes: [
   {path: '/mainpage',name: 'mainpage',component: MainPage},
   {path: '/findpage',name: 'findpage',component: FindPage},
   {path: '/activepage',name: 'activepage',component: ActivePage},
   {path: '/buycarpage',name: 'buycarpage',component: BuyCarPage},
   {path: '/selfpage',name: 'selfpage',component: SelfPage},
   {path: '/',redirect:"/mainpage"},
   {path: '*',redirect:"/mainpage"}
   
     
  ]
})
