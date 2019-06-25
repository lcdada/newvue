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
        return axios.post(`${base.home}/shop/checkGoodsRegion`,qs.stringify(params))
    },
    // 检测卡号密码的正确性
    accountPwd(params){
        return axios.post(`${base.home}/shop/checkAccountPwd`,qs.stringify(params))
    },
    //生成订单
    order(params){
        return axios.post(`${base.home}/shop/generateOrder`,qs.stringify(params))
    },
    // 获取分类列表
    class(params){
        return axios.post(`${base.home}/shop/goodsClass`,qs.stringify(params))
    }

}

export default home;