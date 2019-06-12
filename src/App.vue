<template>
  <div id="app">
    <app-header v-if="header_show" class="header"></app-header>
    <router-view v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      header_show:true,
      footer_show:true,

    }
  },
  components:{
      AppHeader,
      AppFooter
  },
   methods:{
      //是否显示头部
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
      }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    padding-bottom 0.92rem
</style>

