import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/homepage/Home'
import Test from '@/page/test/Test'
import ClassPage from '@/page/classpage/ClassPage'
import Detail from '@/page/detail/Detail'
import ShopCart from '@/page/shopcart/ShopCart'
import Address from '@/page/address/Address'
import Pay from '@/page/pay/Pay'
import Succeed from '@/page/succeed/Succeed'
import Login from '@/page/login/Login'

Vue.use(Router)
const router = new Router({
  
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage,
      meta: {
        keepAlive: false //缓存
      }
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'./address',
      name:'Address',
      component:Address
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
      path:'/shopcart',
      name:'ShopCart',
      component:ShopCart,
      meta: {
        type: 'login'  // 是否需要判断是否登录,这里是需要判断
      }
    },
    {
      path:'/succeed',
      name:'Succeed',
      component:Succeed
    },
    {
      path:'/classpage',
      name:'ClassPage',
      component:ClassPage
    },
    {
      path:'/pay',
      name:'Pay',
      component:Pay
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
  
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
});
export default router
