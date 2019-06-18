import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/homepage/Home'
import Test from '@/page/test/Test'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Login from '@/page/login/Login'
import Class from '@/page/class/Class'
import Detail from '@/page/detail/Detail'
import Cart from '@/page/cart/Cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage,
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/test',
      name:'Test',
      component :Test,
      meta: {
        keepAlive: false //缓存
      }

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path:'/login',
      name:'Login',
      conponent:Login
    },
    {
      path:'/class',
      name:'Class',
      component:Class
    }
    
  ]
})
