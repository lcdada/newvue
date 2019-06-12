<template>
    <div class="search">
        <input class="search-input" type = "text" placeholder="输入城市名字">
    </div>
</template>
<script>
export default {
  name: "CitySearch"
}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .search
        height .7rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-raduis .06rem
            color #666
            padding 0 .1rem
</style>
