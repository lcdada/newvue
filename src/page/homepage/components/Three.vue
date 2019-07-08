<template>
  <div>
      <div class="top_title">
		  <p class="title_b">{{title.banner_title}}</p>
		  <p class="title_s">{{title.banner_desc}}</p>
	  </div>
	  <div>
		  <van-swipe :width="210" :show-indicators="false" >
			  <van-swipe-item v-for="item in three" :key="item.id" @click.stop>
				  <div @click="gourl(item)">
					  <div class=" item_img">
						  <img :src="item.img" alt="" class="itemImg">
					  </div>
					  <div class="itemText">
						  <p class="text_1 text">{{item.title}}</p>
						  <p class="text_2 text">{{item.desc}}</p>
						  <p class="text_3 text">￥{{item.new_price}}</p>
					  </div>
				  </div>
			  </van-swipe-item>
			  
		  </van-swipe>
	  </div>
	  <div>
		  <button class="goplay" @click="gourlList">去逛逛</button>
	  </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
	name:'Three',
	props:{
		three:Array,
		title:Object
	},
	components:{
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem
	},
	methods:{
		gourl(data){
			let url = data.url
			window.location.href = url
		},
		gourlList(){
			this.$api.home.classList({
			goods_class:11,
			custom_id:26,
			pageindex:1,
			// pagesize:1
		}).then(params => {
			if(params.data.code  == 1000){
				if(params.data.code  == 1000){
					this.$router.push({path:'./classpage', query: { goods_class: 11 }})

				}
			}
		})
		}
	}
}

</script>
<style lang='stylus' scoped>
	.top_title
		display flex
		flex-direction column
		align-items center
		.title_b
			font-size 0.32rem
			font-weight 600
			color #000
		.title_s
			font-size 0.28rem
			color #666
	.item_img
		width 4.2rem
		.itemImg
			width 100%
	.itemText
		display flex
		justify-content center
		flex-direction column
		align-items center
		.text_1
			font-size 0.28rem
			color #000
			font-weight 600
		.text
			line-height 0.4rem
	.goplay
		width: 2.36rem;
		height: 0.84rem;
		background: #000;
		color: #fff;
		display: block;
		margin: 0 auto;
		margin-top: 0.8rem;
		margin-bottom: 0.64rem;
</style>