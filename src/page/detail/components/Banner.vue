<template>
    <div>
        <!-- <van-swipe :autoplay="3000">
            <van-swipe-item v-for="item in Spics" :key="item.id" class="swiper_item">
                <img :src="item" class="swiper_item_img"/>
            </van-swipe-item>
        </van-swipe> -->
         <swiper :options="swiperOption" ref="mySwiper" class="Swiper_cont">
              <swiper-slide v-for="item in Spics" :key="item.id" class="swiper_item">
					  <div class="item_img">
						  <img :src="item" alt="" class="swiper_item_img">
					  </div>
              </swiper-slide>
          </swiper>
    </div>
</template>
<script>
// import {Swipe, SwipeItem,Lazyload } from 'vant'
import 'swiper/dist/css/swiper.css'
import {Swipe, SwipeSlide } from 'vue-awesome-swiper'
export default {
    name:'DetailBanner',
    props:{
        Spics:Array
    },
    components:{
        // [Swipe.name]:Swipe,
        // [SwipeItem.name]:SwipeItem,
        // [Lazyload.name]:Lazyload 
        Swipe,
        SwipeSlide,
    },
    data() {
        return {
             swiperOption: {
                 slidesPerView: 'auto',
            } 
        }
    }
}
</script>
<style lang="stylus" scoped>
    .Swiper_cont
        height 8.4rem
        .swiper_item_img
            width 100%
            height 100%
            display block
</style>
