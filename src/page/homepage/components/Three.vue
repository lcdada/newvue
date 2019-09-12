<template>
  <div>
      <div class="top_title">
		  <p class="title_b">{{title.banner_title}}</p>
		  <p class="title_s">{{title.banner_desc}}</p>
	  </div>
	  <div class="block_height">
		  <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
              <swiper-slide v-for="item in three" :key="item.id" @click.stop>
                <div @click="gourl(item)">
					  <div class=" item_img">
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
		  <button class="goplay" @click="gourlList">去逛逛</button>
	  </div>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'vant';
import 'swiper/dist/css/swiper.css'
import {Swipe, SwipeSlide } from 'vue-awesome-swiper'
import {  Tabbar, Toast  } from 'vant';
import utils from '@/utils/utils'
import {currency} from '@/utils/currency'
export default {
	name:'Three',
	props:{
		three:Array,
		title:Object
	},
	filters:{
		currency:currency
	},
	data(){
		return{
			 swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                 slidesPerView: 'auto',
                 spaceBetween: 30,
            } 
		}
	},
	components:{
		// [Swipe.name]:Swipe,
		// [SwipeItem.name]:SwipeItem
		Swipe,
        SwipeSlide,
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
				width 4.2rem
				line-height 0.4rem
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