<template>
  <div>
      <div>
          <div class="one_img">
              <img :src="one.img" alt="" class="one_pict">
              <div class="img_text">
                  <p>{{one.length && one.banner_text.img_title}}</p>
                  <p>{{one.length && one.banner_text.img_desc}}</p>
              </div>
          </div>
          <div class="pic_text">
              <p>{{one.title}}</p>
              <!-- <p>{{one.banner_text.desc}}</p> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'One',
    props:{
        one:Object,
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
        display flex
        justify-content center
        flex-direction column
        align-items center
        position absolute
        top 0
        left 0
        right 0
        bottom 0
    .pic_text
        height 1.56rem
</style>