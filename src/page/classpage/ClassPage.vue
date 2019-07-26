<template>
  <div class="goods_list">
	  <div class="pagetite">
		  {{PageTitle}}
	  </div>
	  <ul class="goodsList">
		  <li class="item" v-for="item in list" :key="item.id" @click="godetail(item)">
			  <div class="item_img">
				  <img :src="item.thumb" class="img"/>
			  </div>
			  <div class="item_text">
				  	<p class="text_title">{{item.goods_name}}</p>
				   	<p class="text_desc">{{item.class_name}}</p>
					<p class="text_price">{{item.score | currency}}</p>
			  </div>
		  </li>
	  </ul>
  </div>
</template>

<script>
import utils from '@/utils/utils'
import {currency} from '@/utils/currency'
export default {
	name:'ClassPage',
	data(){
		return{
			list:[],
			goods_class:"",
			PageTitle:''
		}
	},
	filters:{
		currency:currency
	},
	created(){
		this.getGoddsList();
		let PageTitle = utils.getUrlKey('goods_title')
		this.PageTitle = PageTitle
	},
    methods:{
		getGoddsList(){ 
			let id = utils.getUrlKey('goods_class')
			this.$api.home.classList({
				goods_class:id,
				custom_id:utils.getUrlKey('custom_id') ? utils.getUrlKey('custom_id') : 26,
				pageindex:1,
				// pagesize:1
		}).then(params => {
			if(params.data.code  == 1000){
				const data = params.data.data.list
				this.list = data
			}
		})
		},
		godetail(item){
			let id = utils.getUrlKey('goods_class')
			this.$router.push({path:'./goodsdetail',query:{goods_class:id,goods_id:item.id}})
		}
	},
	watch:{
		
		 $route(){
			  this.getGoddsList();
			  let PageTitle = utils.getUrlKey('goods_title');
			  this.PageTitle = PageTitle
     	}
	}

}

</script>
<style lang='stylus' scoped>
	@import '../../assets/styles/mixins.styl'	
	.goods_list
		padding 0.2rem
		.pagetite
			height 1rem
			margin 0 auto
			text-align center
			line-height 1rem
			color #333
			font-size 0.28rem
			font-weight 600
		.goodsList
			display flex
			justify-content flex-start
			flex-wrap wrap
			align-items center
			box-sizing border-box
			.item
				width 50%
				.item_img
					width 100%
					height 4rem
					.img
						width 100%
						height 100%
			.item_text
				text-align center
				padding-top 0.16rem
				.text_title
					line-height 0.5rem
					font-size 0.3rem
					color #000
					ellipsis()
				.text_desc
					line-height 0.4rem
					font-size 0.3rem
					color #666
					ellipsis()
				.text_price
					line-height 0.5rem
					font-size 0.28rem
					color #000
</style>