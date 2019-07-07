<template>
  <div class="goods_list">
	  <ul class="goodsList">
		  <li class="item" v-for="item in list" :key="item.id" @click="godetail(item)">
			  <div class="item_img">
				  <img :src="item.thumb" class="img"/>
			  </div>
			  <div class="item_text">
				  	<p class="text_title">{{item.goods_name}}</p>
				   	<p class="text_desc">{{item.class_name}}</p>
					<p class="text_price">{{item.score}}</p>
			  </div>
		  </li>
	  </ul>
  </div>
</template>

<script>
import utils from '@/utils/utils'
export default {
	name:'ClassPage',
	data(){
		return{
			list:[],
			goods_class:""
		}
	},
	created(){
		this.getGoddsList()
	},
    methods:{
		getGoddsList(){ 
			let id = utils.getUrlKey('goods_class')
			this.$api.home.classList({
				goods_class:id,
				custom_id:19,
				pageindex:1,
				// pagesize:1
		}).then(params => {
			if(params.data.code  == 1000){
				const data = params.data.data.list
				this.list = data
			}else if (params.data.code  == 2009) {
					this.$router.push({path:'/login'})
			}
		})
		},
		godetail(item){
			let id = utils.getUrlKey('goods_class')
			this.$router.push({path:'./detail',query:{goods_class:id,goods_id:item.id}})
		}
	},
	watch:{
		
		 $route(){
      		this.getGoddsList()
     	}
	}

}

</script>
<style lang='stylus' scoped>
	@import '../../assets/styles/mixins.styl'	
	.goods_list
		padding 0.2rem
		.goodsList
			display flex
			justify-content flex-start
			flex-wrap wrap
			align-items center
			.item
				width 50%
				.img
					width 100%
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