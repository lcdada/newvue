import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/homepage/Home'
import Test from '@/page/test/Test'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Login from '@/page/login/Login'
import Class from '@/page/class/Class'


// import Detail from '@/page/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
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
      path:'/',
      component:HomePage,
    },
    {
      path:'/class',
      name:'Class',
      component:Class
    }
    
  ]
})
