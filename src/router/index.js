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
import GoodsDetail from '@/page/goodsdetail/GoodsDetail'

import utils from '@/utils/utils'

Vue.use(Router)
const router = new Router({
  
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage,
      meta: {
        keepAlive: false, //缓存,
        title:'首页'
      }
    },
    {
      redirect: to => {
        let gid = utils.getUrlKey('goods_id');
        window.location.href = 'http://www.lkvip.com/lancard_wechat/app/index.php?i=7&c=entry&webbefore=detail&webbefore_params=id&id='+gid+'&do=high_discount&m=high_discount#/detail?id='+gid;
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      },
      path:'/detail',
      name:'Detail',
      component:Detail,
      meta:{
        title:'商品详情'
      }
    },
    {
      path:'./address',
      name:'Address',
      component:Address,
      meta:{
        title:'商品详情'
      }
    },
    {
      path:'/test',
      name:'Test',
      component :Test,
      meta: {
        keepAlive: false,//缓存
      }

    },
    {
      path:'/shopcart',
      name:'ShopCart',
      component:ShopCart,
      meta: {
        title: '购物车',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path:'/succeed',
      name:'Succeed',
      component:Succeed,
      meta:{
        title:'购买成功'
      }
    },
    {
      path:'/classpage',
      name:'ClassPage',
      component:ClassPage,
      meta:{
        title:'商品分类'
      }
    },
    {
      path:'/pay',
      name:'Pay',
      component:Pay,
      meta:{
        title:'支付'
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      meta:{
        title:'登陆'
      }
    },{
      path:'/goodsdetail',
      name:'GoodsDetail',
      component:GoodsDetail
    }
  ]
  
});
router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // const type = to.meta.type
  // // 判断该路由是否需要登录权限
  // if (type === 'login') {
  //   if (window.localStorage.getItem('login')) {
  //     next()
  //   } else {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // } else {
  //   next()  // 确保一定要有next()被调用
  // };
  // if (to.path === '/login') {
  //   next();
  // } else {
  //   let token = localStorage.getItem('Authorization');
  //   // console.log(token)
 
  //   if (token === null || token === '') {
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   } else {
  //     next(); // 确保一定要有next()被调用
  //   }
  // }
  // router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
      let token = localStorage.getItem('Authorization');
      if (token) {  // 判断当前的token是否存在
        next();
      }
      else {
        next({
          path: '/login',
          query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else {
      next();
    }
  // });
});
export default router
