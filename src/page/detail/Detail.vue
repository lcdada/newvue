<template>
    <div class="detail">
        <detail-banner :Spics="Swiperpics"></detail-banner>
        <detail-conent :message='Msessage'></detail-conent>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailConent from './components/Conent'
// import {  Tabbar, TabbarItem } from 'vant';
import utils from '@/utils/utils'
export default {
    name:'Detail',
    data (){
        return {
            Swiperpics:[],
            Msessage:{}
        }
    },
    components:{
        DetailBanner,
        DetailConent,
        // [Tabbar.name]:Tabbar,
        // [TabbarItem.name]:TabbarItem
    },
    methods:{
         init () {
            let goods_id = utils.getUrlKey('goods_id')
            let id = utils.getUrlKey('goods_class')
            // console.log(id)
            this.$api.home.getGoodsDetail({
                goods_id:goods_id
            }).then(params =>{
                 if(params.data.code  == 1000){
                        const data = params.data.data[0];
                        // console.log(params)
                        this.Swiperpics = data.pics
                        this.Msessage =data

                    }
            })
        }
    },
    mounted () {
        this.init()
       
    },  
}
</script>
<style lang="stylus" scoped>
    .detail
        background #fff
</style>
