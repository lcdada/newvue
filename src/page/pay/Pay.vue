<template>
  <div>
     <div class="goods_list">
		<div class="choose_address"> 
			<div>
				<img src="./../../assets/img/address_icon1.png" alt="">
			</div>
			<p class="address_icon1_text">添加收货地址</p>
			<van-icon name="arrow"  class="arrow"/>
		</div>
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
			
			<!-- <van-icon name="cross" class="delete" @click="deleteFun(item)" /> -->
			</li>
		</ul>
    </div> 
    <div  class="footer_btn">
        <div class="totalPrice">
            <p class="total_text">总金额：</p>
            <p class="total_text">￥{{totalPrice}}</p>
        </div>
        <!-- <button class="go_exchange" @click="goExchange">去结算</button> -->
        <div class="footer_pay">
          <p class="pay_text">付款方式</p>
          <ul>
			  <li class="pay_icon"  v-for="(item ,index) in paylist" :key="item.id" v-bind:class="{ischeck:index==current}" @lick="addClass(index)">
				   <img src="./../../assets/img/wx.png" alt="" class="wxpay_icon">
			  </li>
          </ul>
          <button class="pay">付款</button> 
        </div>

    </div>
  </div>
</template>

<script>
import {Icon,Popup,Toast} from 'vant'
export default {
     name:'Pay',
     data() {
        return {
			current:0,
			paylist:[
				{	
					id:1,
					// img:'./../../assets/img/wx.png'
				}
			]
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
        	if(this.$route.query.now!=undefined){
        		return this.$store.state.nowlist;
        	}else{
        		return this.$store.state.carList;
        	}
           
        },
        
        //商品总数
        count() {
        	if(this.$route.query.now!=undefined){
        		return this.$store.getters.carCount1;
        	}else{
        		return this.$store.getters.carCount;
        	}
        },
         //商品总价
        totalPrice() {
        	if(this.$route.query.now!=undefined){
        		return this.$store.getters.totalPrice1;
        	}else{
        		return this.$store.getters.totalPrice;
        	}
        
        }
     
    },
    created(){
    	console.log(this.$store.state.carList)
    	console.log(this.$store.state.nowlist)
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
            this.$store.dispatch('deleteCar',data)
        },
        // goExchange(){
        //     this.$router.push({path:'/cart'})
		// },
		addClass(index){
			this.current=index
    }
    }
}

</script>
<style lang='stylus' scoped>
@import '../../assets/styles/mixins.styl' 
    .goods_list 
        margin-top 0.16rem
        padding 0 0.2rem
		.choose_address
			position relative
			height 1.12rem
			display flex
			align-items center
			border-radius 0.08rem 
			background #000
			color #fff
			padding 0 0.32rem
			margin-top 0.16rem
			.address_icon1_text
				margin-left 0.24rem
			.arrow
				position: absolute;
				right: 0.32rem;
				bottom: 0.4rem;
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
				padding 0.2rem 0.32rem
				display flex 
				justify-content space-between
				align-items center
				.total_text
					font-size 0.28rem
					font-weight 600
					color #000
		.footer_pay
			padding 0.32rem
			.pay_text
				line-height 0.44rem
				font-size 0.24rem
				color #000
				font-weight 600
			.pay_icon
				width 100%
				margin-top 0.32rem
				height 1.28rem
				// border 1px solid #ccc
				.wxpay_icon
					width 100%
			.pay
				width 3.2rem
				height 0.8rem
				border-radius 0.08rem
				display block
				margin-top 0.48rem
				background #000
				color #fff
			.ischeck
				border 1px solid #000

</style>