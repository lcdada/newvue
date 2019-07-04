<template>
    <div class="home">   
        <one :one="block_one"></one>
        <two :two="block_two" ></two>
        <three :three="block_three" :title="text_three"></three>
        <four :four="data_four"></four>
        <five :five="block_five"  :fiveTitle="text_five"></five>
        <div class="footer">
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="付款方式" name="1">
                    <p>

                    </p>
                </van-collapse-item>
                <van-collapse-item title="客服中心" name="2">内容</van-collapse-item>
                <van-collapse-item title="关于蓝卡优选" name="3">内容</van-collapse-item>
            </van-collapse>
            <p class="text_center">蓝卡优选科技优选公司</p>
        </div>
    </div>
</template>
<script>
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import { Collapse, CollapseItem } from 'vant';
export default {
    name:"HomePage",
    components:{
        One,
        Two,
        Three,
        Four,
        Five,
        [Collapse.name]:Collapse,
        [CollapseItem.name]:CollapseItem
    },
    data (){
        return {
           block_one:{},
           block_two:{},
           block_three:[],
           text_three:{},
           data_four:{},
           block_five:[],
           text_five:{},
           activeName: '1'
        }

    },
    methods:{
        getBlockMsg(){
             this.$api.home.block({
                block_id:1 ,
                page:1,
                per_page:1
            }).then(params => {
                if(params.data.code  == 1000){
                    const data = params.data.data.list[0]
                    this.block_one = data
                }
            })
        },
         getBlockMsgtow(){
             this.$api.home.block({
                block_id:2 ,
                page:1,
                per_page:1
            }).then(params => {
                if(params.data.code  == 1000){
                    const data_two = params.data.data.list[0]
                    this.block_two = data_two
                }
            })
        },
         getBlockMsgthree(){
             this.$api.home.block({
                block_id:3 ,
                page:1,
                per_page:100
            }).then(params => {
                if(params.data.code  == 1000){
                        const data_three = params.data.data.list
                        const text_three = params.data.data.list[0]
                        this.block_three = data_three
                        this.text_three = text_three
                }
            })
        },
         getBlockMsgfour(){
             this.$api.home.block({
                block_id:4 ,
                page:1,
                per_page:100
            }).then(params => {
                if(params.data.code  == 1000){
                        const data_four = params.data.data.list[0]
                        this.data_four = data_four
                }
            })
        },
          getBlockMsgfive(){
             this.$api.home.block({
                block_id:5,
                page:1,
                per_page:100
            }).then(params => {
                if(params.data.code  == 1000){
                        const data_five = params.data.data.list
                        const text_five = params.data.data.list[0]
                        this.block_five = data_five
                        this.text_five = text_five
                }
            })
        }
        
    },
     mounted () {
        this.getBlockMsg()
        this.getBlockMsgtow()
        this.getBlockMsgthree()
        this.getBlockMsgfour()
        this.getBlockMsgfive()
    }

}
</script>
<style lang="stylus">
    .home
        padding 0 .2rem
        background #fff
        .footer
            height auto
            background #000
            color #fff
            .text_center
                text-align center
                padding 1rem 0
 </style>
