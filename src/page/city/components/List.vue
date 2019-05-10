<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">
            当前城市
          </div>
          <div class="button-list">
            <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            热门城市
          </div>
          <div class="button-list">
            <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
            <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
            <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
            <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
              <button class="button-wrapper">
              <div class="button">北京</div>
            </button>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            A
          </div>
          <div class="item-list"> 
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            A
          </div>
          <div class="item-list"> 
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            A
          </div>
          <div class="item-list"> 
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "CityList",
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
};
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:after 
      border-color #cccccc
    &:before
      border-color #cccccc
  .border-bottom
    &:after 
      border-color #cccccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      font-size .26rem
      background #eeeeee
      padding-left .2rem
      color #666
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        background #ffffff
        .button
          margin .1rem
          padding .1rem 0
          border-radius .06rem
          text-align center
          border .02rem solid #ccc
    .item-list
      .item
        line-height .76rem
        padding-left .1rem
</style>
