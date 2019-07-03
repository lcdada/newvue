/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const home = {
    // 获取礼包绑定的祝福信息 
    getBless (params){
        return axios.post(`${base.home}/exchange/bless`,qs.stringify(params))
    },
    // 礼包商品列表
    getGoodsList(params){
        return axios.post(`${base.home}/exchange/goodsList`,qs.stringify(params))
    },
    // 商品详情
    getGoodsDetail(params){
        return axios.post(`${base.home}goodsDetail`,qs.stringify(params))
    },
    // 验证配送区域
    getRegion(params){
        return axios.post(`${base.home}checkGoodsRegion`,qs.stringify(params))
    },
    // 检测卡号密码的正确性
    accountPwd(params){
        return axios.post(`${base.home}checkAccountPwd`,qs.stringify(params))
    },
    //生成订单
    order(params){
        return axios.post(`${base.home}generateOrder`,qs.stringify(params))
    },
    // 获取分类列表
    class(params){
        return axios.post(`${base.home}goodsClass`,qs.stringify(params))
    },
    // 获取模块 信息
   // 获取模块 信息
    block(params){
        return axios.post(`${base.home}contents`,qs.stringify(params))
    },
    // 分类列表
    classList(params){
        return axios.post(`${base.home}goodsList`,qs.stringify(params))
    },
    //获取验证码
    getCode(params){
        return axios.post(`${base.home}getCode`,qs.stringify(params))
    },
    // 登陆
    tologin(params){
        return axios.post(`${base.home}login`,qs.stringify(params))
    },
    // 增加购物车
    addcart(params){
        return axios.post(`${base.home}addCart`,qs.stringify(params))
    },
    // 删除购物车
    deletecart(params){
        return axios.post(`${base.home}delCart`,qs.stringify(params))
    },
    generateOrder(params){
        return axios.post(`${base.home}submitOrder`,qs.stringify(params))
    },
    weipay(params) {
        return axios.post(`${base.home}weipay`, qs.stringify(params))
    }
}

export default home;
