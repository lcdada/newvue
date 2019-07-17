<template>
    <div>
         <swiper :options="swiperOption" ref="mySwiper" class="Swiper_cont">
              <swiper-slide v-for="item in Spics" :key="item.id" class="swiper_item">
						  <img :src="item" alt="" class="swiper_item_img">
              </swiper-slide>
          </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {Swipe, SwipeSlide } from 'vue-awesome-swiper'
export default {
    name:'DetailBanner',
    props:{
        Spics:Array
    },
    components:{
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
        .swiper_item_img
            width 100%
            height 100%
            display block
</style>
