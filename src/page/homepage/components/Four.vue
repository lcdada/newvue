<template>
  <div>
      <div>
          <div class="one_img" @click="gourl(four)">
              <img :src="four.img" alt="" class="one_pict">
              <div class="img_text">
                  <p class="img_title">{{ four.img_title}}</p>
                  <p class="img_desc">{{four.img_desc}}</p>
                  <!-- <p>{{one.text.img_title}}</p> -->
              </div>
          </div>
          <div class="pic_text">
              <p class="title">{{four.title}}</p>
              <p class="desc">{{four.desc}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Four',
    props:{
        four:Object,
    },
    methods:{
        gourl(data){
            let url = data.url
            window.location.href = url
        }
    }
   
}

</script>
<style lang='stylus' scoped>
    .one_img
        width 100%
        position relative
        .one_pict
            width 100%
    .img_text
        width 100%;
        line-height 0.6rem
        display flex
        justify-content center
        flex-direction column
        align-items center
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        .img_title
            color #ffffff
            font-size 0.48rem
            font-weight 500
        .img_desc
            color #ffffff
            font-size 0.28rem
    .pic_text
        height 1.56rem
        line-height: 0.44rem;
        padding-top: 0.08rem;
        .title
            color #000
            font-weight 500
            font-size 0.32rem
        .desc
            color #666
            font-size 0.28rem
</style>