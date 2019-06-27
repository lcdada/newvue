<template>
  <div id="app">
	  	  <div>
				<van-popup
				v-model="show"
				position="left"
				:lock-scroll="true"
				 >
					 <div ref="wrapper" class="wrapper">
						<div class="class_img">
							<img src="./assets/img/logo_icon.png" alt="">
						</div>
						<ul >
							<li
							v-for="item in class_list"
							:key="item.id"
							class="item"
							@click="goClassList(item)"
							>
								<p class="class_item">{{item.name}}</p>
								<van-icon name="arrow"  class="arrow"/>
							</li>
						</ul>
					</div>
				</van-popup>
		  </div>
		  <div>
				<div class="header">
					<van-nav-bar title="蓝卡优选" fixed class="header_nav">
						<van-icon name="wap-nav" slot="left" color="#000" size="20px" @click="handleMaskClick"/>
						<van-icon name="manager-o" slot="right" color="#000" size="20px" class="mine"/>
						<van-icon name="bag-o" slot="right" color="#000" size="20px"/>
					</van-nav-bar>
				</div>
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive" v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
				</keep-alive>
					<router-view v-if="!$route.meta.keepAlive"></router-view>
				<!-- <app-footer v-if="footer_show"></app-footer> -->
		  </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import Class from "@/page/class/Class";
import BScroll from 'better-scroll'
// import AppFooter from './components/Footer'
import { DrawerLayout } from "vue-drawer-layout";
import { NavBar, Icon,Popup,Button } from "vant";

export default {
  name: "App",
  data() {
    return {
      header_show: true,
      footer_show: true,
	  class_list: [],
	  show: false
    };
  },
  components: {
    AppHeader,
    // AppFooter,
    Class,
    [DrawerLayout.name]: DrawerLayout,
    [NavBar.name]: NavBar,
	[Icon.name]: Icon,
	[Popup.name]:Popup,
	[Button.name]:Button 
  },
  methods: {
    //是否显示头部
    public_header: function(bool) {
      this.header_show = bool;
    },
    //是否显示底部
    public_footer: function(bool) {
      this.footer_show = bool;
    },
    handleMaskClick() {
		this.show = true;
		this.$api.home.class({}).then(params => {
        if (params.data.code == 1000) {
          const data = params.data.data;
          this.class_list = data;
          console.log(data);
        }
        console.log(params);
      });
    },
    goClassList(item) {
      this.show = false;
      this.$router.push({
        path: "./classpage",
        query: { goods_class: item.id }
      });
    }
  },
  
};
</script>

<style lang="stylus" scoped>
	.wrapper
		width 3.2rem
		.class_img
			height 0.92rem
			line-height 0.92rem
			padding-left 0.3rem
		.item 
			height: 0.9rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.3rem;
			box-sizing: border-box;
			.class_item 
				font-size: 0.28rem;
				font-weight: 500;
	.header
		padding-bottom 0.92rem
		.mine
			margin-right 0.2rem
		
		.content-wrap
				overflow auto
</style>

