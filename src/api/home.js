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
        return axios.post(`${base.home}/shop/goodsDetail`,qs.stringify(params))
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
        return axios.post(`${base.home}/shop/goodsClass`,qs.stringify(params))
    },
    // 获取模块 信息
   // 获取模块 信息
    block(params){
        return axios.post(`${base.home}/v1/block/contents`,qs.stringify(params))
    },
    // 分类列表
    classList(params){
        return axios.post(`${base.home}/shop/goodsList`,qs.stringify(params))
    },
    //获取验证码
    getCode(params){
        return axios.post(`${base.home}/v1/code/getCode`,qs.stringify(params))
    },
    // 登陆
    tologin(params){
        return axios.post(`${base.home}/v1/account/login`,qs.stringify(params))
    },
    // 增加购物车
    addcart(params){
        return axios.post(`${base.home}/shop/addCart`,qs.stringify(params))
    },
    // 删除购物车
    deletecart(params){
        return axios.post(`${base.home}/shop/delCart`,qs.stringify(params))
    },
    generateOrder(params){
        return axios.post(`${base.home}/shop/submitOrder`,qs.stringify(params))
    },
    weipay(params) {
        return axios.post(`${base.home}/weipay/weipay`, qs.stringify(params))
    },
    // 预先生成订单
    prepare(params){
        return axios.post(`${base.home}/shop/prepareOrder`, qs.stringify(params))
    },
    // 检测配送区域
    checkGoodsRegion(params){
        return axios.post(`${base.home}/Api/Shop/checkGoodsRegion`, qs.stringify(params))
    },
    //获取绑定卡号列表
    getAccountList(params){
        return axios.post(`${base.home}/shop/accountList`, qs.stringify(params))
    },
    //绑定新卡
    bindAccount(params){
        return axios.post(`${base.home}/shop/bindAccount`, qs.stringify(params))
    },
}

export default home;
