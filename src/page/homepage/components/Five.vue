<template>
  <div>
      <div class="top_title">
		  <p class="title_b">{{fiveTitle.banner_title}}</p>
		  <p class="title_s">{{fiveTitle.banner_desc}}</p>
	  </div>
	  <div class="block_height">
		  <!-- <van-swipe :width="210" :show-indicators="false">
			  <van-swipe-item v-for="item in five" :key="item.id" @click.stop>
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
			  
		  </van-swipe> -->
		  <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="item in five" :key="item.id" @click.stop>
                <div @click="gourl(item)">
					  <div class="item_img">
						  <img :src="item.img" alt="" class="itemImg">
					  </div>
					  <div class="itemText">
						  <p class="text_1 text">{{item.title}}</p>
						  <p class="text_2 text">{{item.desc}}</p>
						  <p class="text_3 text">{{item.new_price | currency}}</p>
					  </div>
				  </div>
              </swiper-slide>
          </swiper>
	  </div>
	  <div>
		  <button class="goplay">去逛逛</button>
	  </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {Swipe, SwipeSlide } from 'vue-awesome-swiper'
import {currency} from '@/utils/currency'
export default {
	name:'Five',
	props:{
		five:Array,
		fiveTitle:Object
	},
	filters:{
		currency:currency
	},
	data(){
		return{
			 swiperOption: {
                 slidesPerView: 'auto',
                 spaceBetween: 30,
            } 
		}
	},
	components:{
		Swipe,
        SwipeSlide,
    },
    methods:{
        gourl(data){
			let url = data.url
			window.location.href = url
		},
    }
}

</script>
<style lang='stylus' scoped>
@import '../../../assets/styles/mixins.styl'
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
	.block_height
		height 6rem
		.swiper-slide 
			width: 60%;
		.item_img
			width 4.2rem
			.itemImg
				width 100%
		.itemText
			width 4.2rem
			display flex
			justify-content center
			flex-direction column
			align-items center
			text-align center
			.text_1
				font-size 0.28rem
				color #000
				font-weight 600
			.text
				line-height 0.4rem
				width 4.2rem
				align-items center
				ellipsis()
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