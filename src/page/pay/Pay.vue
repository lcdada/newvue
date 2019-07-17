<template>
  <div>
     <div class="goods_list">
		<div class="choose_address" v-if="!showAddress"> 
			<div>
				<img src="./../../assets/img/address_icon1.png" alt="">
			</div>
			<p class="address_icon1_text" @click="openAddress()">添加收货地址</p>
			<van-icon name="arrow"  class="arrow"/>
		</div>
		<div class="show_address" style="display:none">
            <div class="peopleInfo">
                <p class="userName" :userName="userName">{{userName}}</p>
                <p class="telNumber" :telNumber="telNumber">{{telNumber}}</p>    
            </div>
            <p class="address_text" :detail="detail">{{detail}}</p>          
        </div>
		<!-- <div class="spare">
			<p class="spare_text">备用联系人</p>
			<input type="text" placeholder="姓名" class="inpt spare_name">
			<input type="text" placeholder="联系方式"  class="inpt spare_phone">
		</div> -->
		<ul>
			<li  v-for="item in carData" :key="item.id" class="item">
			<div class="cart_goods">
				<div class="goods_img">
					<img class="goods_picture" :src="item.thumb" alt="">
				</div>
				<div class="item_text">
					<p class="goods_name">{{item.goods_name}}</p>
					<p class= "goods_title">{{item.title}}</p>
					<div class="footer_pn">
						<p class="goods_price">￥{{item.score}}</p>
						<p class="goods_num"> x{{ item.num }}</p>
					</div>
				
				</div>
			</div>
			
			<!-- <van-icon name="cross" class="delete" @click="deleteFun(item)" /> -->
			</li>
		</ul>
		<div class="popCar">
			<!-- <p class="popCar_text">礼品卡</p> -->
			<div class="show_popCar" @click="showPopblock">
				<p>选择礼品卡</p>
				<p v-if="!showText">以绑定1张卡号</p>
				<p class="symbol">...</p>
			</div>
		</div>
		<van-popup
		v-model="show_cardList"
		position="bottom"
		:style="{ height: '73%' }"
		class="bindCart"
		>
			<div class="pop_title">
				<p class="title_left">礼品卡</p>
				<p class="new_cart" @click="bind_newCart">绑定新卡</p>
				<van-icon name="cross" size="18" color="#979797" @click="close_new"/>
			</div>
			<div class="hint_text">
				礼物卡是蓝卡优选认证的带有价值的兑换卡…
			</div>
			<div class="wt-radio">
				<ul>
					<li v-for="(item,index) in cartList" :key="index"  @click="changeItem(index,item)" class="itemCarts">
						<div class="cart_item">
							<div class="item_left">
								{{item.score}}
							</div>
							<div class="item_right">
								<p>卡号：{{item.account}}</p>
								<p>可抵扣：{{item.score}}</p>
							</div>
						</div>
						<div>
							<span :class="activeClass == index ? 'color' : 'iconImg' " ></span>
						</div>
					</li>
					<button class="confirm_btn" @click="confiemBtn">确定</button>
				</ul>
			</div>
		</van-popup>
		<van-popup
		v-model="show"
		position="bottom"
		:style="{ height: '73%' }"
		class="bindCart"
		>
			<div class="pop_title">
				<p class="title_left"></p>
				<van-icon name="cross" size="18" color="#979797" @click="close_newCarts"/>
			</div>
			<div class="cart_center">
				<p class="cart_text">请输入卡号密码</p>
				<input type="text" v-model="cartNum" class="inpt" placeholder="请输入卡号">
				<input type="text" v-model="cartPass" class="inpt" placeholder="请输入密码">
				<button class="btn_cart" @click="bindNew">绑定并使用</button>
			</div>
		</van-popup>
    </div>
	
    <div  class="footer_btn">
		<div class="totalPrice" v-if="!privilege">
			<p class="privilege">优惠</p>
            <p class="privilege_pice">-￥{{this.score}}</p>
		</div>
        <div class="totalPrice">
            <p class="total_text">总金额：</p>
            <p class="total_text"> <span class='old_price' v-if="!oldPrice">￥{{totalPrice}}</span> <span>￥{{totalPrice - this.score}}</span></p>
        </div>
        <!-- <button class="go_exchange" @click="goExchange">去结算</button> -->
        <div class="footer_pay">
          <!-- <p class="pay_text">付款方式</p>
          <ul>
			  <li class="pay_icon"  v-for="(item ,index) in paylist" :key="item.id" v-bind:class="{ischeck:index==current}" @lick="addClass(index)">
				   <img src="./../../assets/img/wx.png" alt="" class="wxpay_icon">
			  </li>
          </ul> -->
          <button class="pay" @click="pay()">付款</button>
        </div>

    </div>
  </div>
</template>

<script>
import {Icon,Popup,Toast, Cell,CellGroup,Checkbox, RadioGroup, Radio} from 'vant'
import utils from '@/utils/utils'
export default {
     name:'Pay',
     data() {
        return {
			isWx: false,
			current:0,
			total:0,
			address: {},
			showAddress:false,
			userName:'',
			telNumber:'',
			detail:'',
			gnum : 0,
			flag:true,
			cartNum:'',
			cartPass:'',
			show: false,
			show_cardList:false,
			radio: '0',
			cartList:[],
			itemscore:'',
			activeClass : -1,
			chooseItem :{},
			showText:true,
			account:'',
			score:0,
			privilege:true,
			oldPrice:true

        }
    },
    components:{
        [Icon.name]:Icon,
        [Popup.name]:Popup,
		[Toast.name]:Toast,
		[Cell.name]:Cell,
		[Checkbox.name]:Checkbox,
		[CellGroup.name]:CellGroup,
		[RadioGroup.name]:RadioGroup,
		[Radio.name]:Radio
		
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
				return  this.$store.getters.totalPrice;
        	}
        
        }
     
    },
	created () {
		localStorage.setItem('addressInfo',null);
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			if(ua.match('wxwork') == "wxwork") {
				this.isWx = false;
			}
			this.isWx = true;
		} else {
			this.isWx = false;
		}
	},
	methods: {
		toggle(index) {
			this.$refs.checkboxes[index].toggle();
		},
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
		},
		showPopblock(){
			this.show_cardList = true;
			this.$api.home.getAccountList({

			}).then(params =>{
				if(params.data.code === 1000){
					const cartlist = params.data.data
					console.log(cartlist)
					this.cartList = cartlist
				}
			});
		},
		close_new(){
			
			this.show_cardList = false
		},
		bind_newCart(){
			this.show = true
		},
		bindNew(){
			this.$api.home.bindAccount({
				account:this.cartNum,
				pwd:this.cartPass
			}).then(params =>{
				console.log(params)
				if(params.data.code === 1000){
					const Fscore = params.data.data
					console.log(Fscore)
					this.itemscore = Fscore
				}
			});
			this.show = false
			this.showPopblock()
		},
		close_newCarts(){
			this.show = false
		},
		changeItem(index,data){
			this.activeClass = index;
			this.chooseItem = data
			this.account = data.account
			this.score = data.score
			console.log(this.score)
		},
		confiemBtn(){
			// console.log(this.chooseItem)
			this.show_cardList = false
			this.showText = false
			this.privilege =false
			this.oldPrice = false
		},
		openAddress() {

			var addressInfo={
				  userName:'苏克',
				  telNumber:'15810227932',
				  provinceName:' 山西',
				  cityName:'运城',
				  countryName:'永济',
				  detailInfo:'中关村在线'
			}

		  	localStorage.setItem('addressInfo',JSON.stringify(addressInfo));
		  
		   	this.showAddress = true;
			this.userName = addressInfo.userName;
			this.telNumber = addressInfo.telNumber
			this.detail = addressInfo.provinceName +' '+ addressInfo.cityName+ ' '+ addressInfo.countryName+' '+addressInfo.detailInfo

			 if(this.isWx) {
				 wx.ready(function () {
					 wx.openAddress({
						 trigger: function (res) {
							 //alert('用户开始拉出地址');
						 },
						 success: function (res) {
							 //将收货地址信息 回显到 表单里
							 $('.choose_address').hide();
							 $('.show_address').show();

							 $('.userName').html(res.userName);
							 $('.telNumber').html(res.telNumber);
							 $('.address_text').html(res.provinceName +' '+ res.cityName+ ' '+ res.countryName+' '+res.detailInfo);
							 localStorage.setItem('addressInfo',JSON.stringify(res));
						 },
						 cancel: function (res) {
							 //alert('用户取消拉出地址');
						 },
						 fail: function (res) {
							 //alert(JSON.stringify(res));
						 }
					 });
				 });
			 }else{
				 //跳转新页面  编辑地址 并 save 保存到 localStorage addressInfo
			 }
		 },

		 pay() {
			 //1.判断是否选择收货地址
			let addressInfo = '';
			addressInfo = localStorage.getItem('addressInfo');
			if(!addressInfo || addressInfo === 'null') {
				this.openAddress();
			}else{
				let orderData = {};
				addressInfo = JSON.parse(addressInfo);
				this.address = {
					username : addressInfo.userName ? addressInfo.userName : '戚金奎',
					mobile : addressInfo.telNumber ? addressInfo.telNumber : '18310211825',
					province: addressInfo.provinceName ? addressInfo.provinceName : '北京',
					city: addressInfo.cityName ? addressInfo.cityName : '北京市',
					area: addressInfo.countryName ? addressInfo.countryName : '丰台区',
					address : addressInfo.detailInfo ? addressInfo.detailInfo : 'wonima',
					// spare_name : addressInfo.
				};

				orderData.addressInfo = this.address;

				if(utils.getUrlKey('now') === null) {
					orderData.goodsInfo = this.$store.state.carList;
					orderData.action = 'cart';
				}else{
					orderData.goodsInfo = this.$store.state.nowlist;
					orderData.action = 'detail';
				}

				for(var i in orderData.goodsInfo) {
					this.gnum += parseInt(orderData.goodsInfo[i]['num']);
				}

				orderData.id = utils.getUrlKey('oid');
				orderData.total = this.totalPrice;
				orderData.custom_id = utils.getUrlKey('custom_id') ? utils.getUrlKey('custom_id') : 26;

				//计算商品数量
				//获取支付选项
				orderData.payOption = {
					weipay: orderData.total-this.score,
					score: 0,
					num: this.gnum,
					total: orderData.total,
					type: 2,
					gift_card:this.score,
					gc_account:this.account
				};
				//验证配送区域
				this.checkGoodsRegion(orderData);
			 }
		 },

		checkGoodsRegion(orderData) {
			this.$api.home.checkGoodsRegion({
				gid: orderData.goodsInfo,
				addre: orderData.addressInfo
			}).then(params =>{
				if(params.data.status === 101){
					//生成订单
					this.generateOrder(orderData);
				}else if(params.data.code === 2002){
					alert("该区域暂不支持配送");
				}
			});
		},

		getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		},

		generateOrder(params) {
			this.$api.home.generateOrder(params).then(params =>{
				if(params.data.code === 1000){
					if(params.data.data.status === 1) {

					}else{
						this.weipay({
							order_sn: params.data.data.order_sn,
							id: params.data.data.oid,
							openid: this.getCookie('openid'),
							//openid: 'oYLAfwXXBplOVcKf7G3-TQ1tFQOM',
							action: 'orderpay'
						});
					}
				}else if(params.data.code === 2002){

				}
			});
		},
		weipay(params) {
			this.$api.home.weipay(params).then(params =>{
				if(params.data.code === 1000){
					if (typeof WeixinJSBridge == "undefined"){
						if( document.addEventListener ){
							document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
						}else if (document.attachEvent){
							document.attachEvent('WeixinJSBridgeReady', jsApiCall);
							document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
						}
					}else{
						WeixinJSBridge.invoke(
								'getBrandWCPayRequest',
								params.data.data,
								function(res){
									if(res.err_msg == 'get_brand_wcpay_request:ok') {
										//跳转到成功页面
									}else{
										//WeixinJSBridge.log(res.err_msg);
										//alert(res.err_code+res.err_desc+res.err_msg);
									}
								}
						);
					}
				}else if(params.data.code === 2002){

				}
			});
		}
	 }
}

</script>
<style lang='stylus' scoped>
@import '../../assets/styles/mixins.styl' 
    .goods_list 
        // margin-top 0.16rem
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
		.show_address
			height 1.4rem
			background #fff
			margin-top 0.2rem
			padding 0.2rem
			box-sizing border-box
			border-bottom 0.02rem solid #f5f5f5
			.peopleInfo
				display flex
				justify-content flex-start
				align-items center
				line-height 0.4rem
				.userName,.telNumber
					font-size 0.28rem
					font-weight 600
					color #000
				.telNumber
					margin-left 0.8rem
		.spare
			height: 3.5rem;
			display: flex;
			flex-direction: column;
			padding: 0.4rem;
			box-sizing: border-box;
			border-bottom: 0.02rem solid #f5f5f5;
			border-top: 0.02rem solid #f5f5f5;
			margin-top: 0.2rem;
			.spare_text
				line-height 0.44rem
				color #333
			.inpt
				width 100%
				height 0.88rem
				background #ebebeb
				padding-left 0.28rem
			.inpt::placeholder
				color #333
			.spare_name
				margin-top 0.2rem
			.spare_phone
				margin-top 0.32rem
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
		.popCar
			// height 1.84rem
			height 1.2rem
			box-sizing border-box
			padding 0.3rem 0.16rem 0 0.16rem
			border-bottom: 0.02rem solid #f5f5f5;
			.popCar_text
				font-size 0.28rem
				color #000
				font-weight 600
				line-height 0.44rem
			.show_popCar
				display flex
				justify-content space-between
				align-items center
				line-height 0.4rem
				// margin-top 0.32rem	
				.symbol
					font-size 0.4rem
					padding-bottom 0.2rem
		.bindCart
			padding 0.32rem
			box-sizing border-box
			.pop_title
				display flex 
				justify-content space-between
				align-items center
				line-height 0.44rem
				.title_left
					font-size 0.28rem
					color #000
					font-weight 600
				.new_cart
					padding-left 1.6rem
			.itemCarts
				display flex
				justify-content space-between
				align-items center
				margin 0.2rem
			.cart_item
				width 5.2rem
				height 1.48rem
				border 0.02rem solid #ccc
				border-radius 0.16rem
				display flex
				justify-content space-between
				.item_left
					width 30%;
					line-height 1.48rem
					text-align center
				.item_right
					flex 1
					text-align center
					line-height 0.74rem
			.iconImg
				display block
				width 0.4rem
				height 0.4rem
				border-radius 50%
				border 0.01rem solid #ccc
			.color
				display block
				width 0.4rem
				height 0.4rem
				border-radius 50%
				background #1989fa
				border 0.01rem solid #ccc
			.confirm_btn
				width 80%
				height 0.92rem
				display block
				background #333
				color #fff
				margin 0.4rem auto
				border-radius  0.16rem
			.hint_text
				width 100%
				height 0.76rem
				line-height 0.76rem
				padding-left 0.3rem
				margin-top 0.32rem
				background #f5f5f5
				border-radius 0.4rem
				box-sizing border-box
				ellipsis()
				
				.wt-radio {
					ul {
						background: #ffffff;
						list-style: none;
						padding: 0;
						margin: 0;
						position: relative;
						li {
							box-sizing: border-box;
							position: relative;
							text-align: left;
							// line-height: 2rem;
							// height: 2rem;
							font-size: 0.8rem;
							display: flex;
							align-items: center;
							&.disable {
								background: #f6f6f6;
							}
							.item-inner {
								width: 100%;
								box-sizing: border-box;
								white-space: nowrap;
								// padding-right: 2rem;
								text-overflow: ellipsis;
								overflow: hidden;
								padding-left: 8px;
								&::after {
									transform: scaleY(.5);
									height: 1px;
									content: '';
									border-bottom: 1px solid #ccc;
									display: block;
								}
								.title {
									display: -webkit-box;
									-webkit-line-clamp: 1;
									overflow: hidden;
									-webkit-box-orient: vertical;
									white-space: normal;
									margin: 0.2rem;
									padding-right: 2rem;
									&.normal {
										padding-right: 0;
									}
								}
								.subtitle {
									display: -webkit-box;
									-webkit-line-clamp: 2;
									overflow: hidden;
									-webkit-box-orient: vertical;
									white-space: normal;
									color: #999;
									font-size: 0.7rem;
									margin: 0.2rem;
									padding-right: 2rem;
									&.normal {
										padding-right: 0;
									}
								}
							}
							p {
								position: absolute;
								right: 0.5rem;
								color: #1BB5F1;
								font-size: 1rem;
								&.btn {
									min-width: 1.2rem;
									min-height: 1.2rem;
									width: 1.2rem;
									height: 1.2rem;
									border-radius: 1.2rem;
									border: 1px solid #ccc;
									box-sizing: border-box;
									overflow: hidden;
									align-items: center;
									margin: 0 0 0 0.5rem;
									justify-content: center;
									display: flex;
									position: relative;
									right: initial;
									&.active {
										border: 1px solid #1BB5F1;
									}
									&.disable {
										background: #eee;
									}
								}
							}
							&::before {
								font-size: 1rem;
								position: absolute;
								right: 8px;
								line-height: 2rem;
								color: #1BB5F1;
								text-align: right;
							}
						}
					}
				}

			.cart_center
				height 4.36rem
				margin-top 0.84rem
				padding 0 0.4rem
				.cart_text
					font-size 0.28rem
					color #333
					line-height 0.4rem
				.inpt
					width 100%
					border-bottom 1px solid #979797
					margin-top 0.32rem
					line-height 0.8rem
				.inpt::placeholder
					color #a6a6a6
				.btn_cart
					width 100%
					height 0.88rem
					margin-top 0.8rem
					background #000
					color #fff
					border-radius 0.4rem
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
					line-height 0.44rem
					.old_price
						text-decoration line-through
						color #ccc
						font-weight 500
				.privilege_pice
					color red
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