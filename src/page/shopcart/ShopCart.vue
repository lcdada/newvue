<template>
    <div>
        <div class="goods_list" v-cloak>
            <ul>
                <li  v-for="item in carData" :key="item.id" class="item">
                <div class="cart_goods">
                    <div class="goods_img">
                        <img class="goods_picture" :src="item.picture" alt="">
                    </div>
                    <div class="item_text">
                        <p class="goods_name">{{item.goods_name}}</p>
                        <p class= "goods_title">{{item.title}}</p>
                        <div class="footer_pn">
                            <p class="goods_price">￥{{item.price}}</p>
                            <p class="goods_num"> x{{ item.num }}</p>
                        </div>
                    
                    </div>
                </div>
                
                <van-icon name="cross" class="delete" @click="deleteFun(item)" />
                </li>
            </ul>
        </div> 
        <div  class="footer_btn" v-if="!showCart">
            <div class="totalPrice">
                <p class="total_text">总金额：</p>
                <p class="total_text">￥{{totalPrice}}</p>
            </div>
            <button class="go_exchange" @click="goExchange">去结算</button>

        </div>
        <div class="empty_cart" v-if="showCart">
            <div class="empty_content">
                <p class="text1">购物袋</p>
                <p class="text2">购物袋为空 ,快去挑选吧!</p>
                <button class="goHomePage" @click="goHomePage">去逛逛</button>
            </div>
        </div>

    </div>
</template>

<script>

import {Icon,Popup,Toast} from 'vant'
import utils from '@/utils/utils'

export default {
    name:'ShopCart',
     data() {
        return {
            showCart:false
        }
    },
    created(){
        if(this.count == 0){
            console.log(this.count)
            this.showCart =true
        }
    },
    components:{
        [Icon.name]:Icon,
        [Popup.name]:Popup,
        [Toast.name]:Toast     
    },
    computed: { 
        //购物车列表
        carData() {
            return this.$store.state.carList;
            // console.log(this.$store.state.carList)
        },
        
        //商品总数
        count() {
            return this.$store.getters.carCount;
        },
         //商品总价
        totalPrice() {
        return this.$store.getters.totalPrice;
        }
     
    },
     methods: {
        // 增加数量
        addCar(data){
        this.$store.dispatch('addCar',data)
        },
        // 减数量
        reduceFun(data){
        this.$store.dispatch('reducedCar',data)
        },
        // 删除
        deleteFun(data){
            this.$store.dispatch('deleteCar',data);
            this.$api.home.deletecart({
                goods_id:data.id,
            }).then(params =>{
                 if(params.data.code  == 1000){
                     console.log(params)
                     Toast.success('已删除');
                     if(this.count == 0){
                        console.log(this.count)
                        this.showCart =true
                     }
                    }else{
                        console.log(params.data.error)
                       
                    }
            })
        },
        goExchange(){
            // let custom_id = utils.getUrlKey('custom_id')
            this.$api.home.prepare({
                custom_id:26,
            }).then(params =>{
                 if(params.data.code  == 1000){
                     console.log(params)
                     const oid = params.data.data
                     this.$router.push({path:'/pay',query: {oid:oid} })
                    }else{
                        alert(params.data.error)
                    }
            })
        },
        goHomePage(){
            this.$router.push({path:'/'})
        }

    }
}

</script>
<style lang='stylus' scoped>
@import '../../assets/styles/mixins.styl'
[v-cloak]{
    display: none;
}
    .goods_list 
        margin-top 0.16rem
        padding 0 0.2rem
        .item
            position relative
            height 3.72rem 
            padding 0.32rem 0
            box-sizing border-box
            display flex
            justify-content space-between
            align-items center
            background #fff
            margin-bottom 0.08rem
            border-bottom 0.04rem solid #f5f5f5
            .cart_goods
                width 100%
                display flex
                justify-content flex-start
                align-items center
                .goods_img
                    width 2.8rem
                    height 3.14rem
                    .goods_picture
                        width 100%
                        height 100%
                        display block
                .item_text
                    flex: 1;
                    margin-left: 0.32rem;
                    height: 3.14rem;
                    padding-top 0.18rem
                    position relative
                    .goods_name
                        font-size 0.28rem
                        color #333
                        font-weight 600
                        width 50%
                        ellipsis()
                    .goods_title
                        ellipsis()
                        font-size 0.28rem
                        color #666
                        padding-top 0.2rem
                    .footer_pn
                        width 100%
                        position absolute
                        bottom 0
                        left 0
                        display flex
                        justify-content space-between
                        align-items center
                        .goods_num
                            padding-right 0.3rem
        .delete
            position absolute
            top 0.32rem
            right 0.4rem
    .go_exchange
        width 3.2rem
        height 0.8rem
        border-radius 0.08rem
        display block
        margin-top 0.48rem
        background #000
        color #fff
    .footer_btn
        padding 0 0.2rem
        .totalPrice
            padding 0.2rem 0
            display flex 
            justify-content space-between
            align-items center
            .total_text
                font-size 0.28rem
                font-weight 600
                color #000
    .empty_content
        display flex
        flex-direction column
        align-items center
        .text1
            font-size 0.28rem
            line-height 0.44rem
            font-weight 600
            color #000
        .text2
            color #333
            line-height 0.4rem
            margin-top 0.1rem
        .goHomePage
            width 90%
            height 0.92rem
            background #000
            color #fff
            border-radius 0.08rem
            margin-top 0.6rem
</style>