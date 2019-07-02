<template>
  <div>
      <div>
          <div class="one_img" @click="godetail(one)">
              <img :src="one.img" alt="" class="one_pict"  >
              <div class="img_text">
                  <p class="img_title">{{ one.img_title}}</p>
                  <p class="img_desc">{{one.img_desc}}</p>
                  <!-- <p>{{one.text.img_title}}</p> -->
              </div>
          </div>
          <div class="pic_text">
              <p class="title">{{one.title}}</p>
              <p class="desc">{{one.desc}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'One',
    props:{
        one:Object,
    },
    methods:{
        godetail(data){
            let url = data.url
            window.location.href = url
        }
    },
    mounted(){
        
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