<template>
    <div class="home">   
        <!-- <home-header :bless="bless_info"></home-header> -->
      
        <!-- <home-list :list="goods_list" :bless="bless_info"></home-list> -->
        <one :one="block_one" :text="text_one"></one>
        <two :two="block_two" :text_two="text_two"></two>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeList from './components/List'
import One from './components/One'
import Two from './components/Two'

export default {
    name:"HomePage",
    components:{
        HomeHeader,
        HomeList,
        One,
        Two
    },
    data (){
        return {
           bless_info:{},
           goods_list:[],
           block_one:{},
           text_one:{},
           block_two:{},
           text_two:{},

        }

    },
    methods:{
        getBless () {
            this.$api.home.getBless({
               jid:767
            }).then(params => {
                    if(params.data.code  == 1000){
                        const data = params.data.data;
                        this.bless_info = data.bless_info

                    }
            })
        },
        getGoodsList (){
            this.$api.home.getGoodsList({
               package_id:390
            }).then(params => {
                 if(params.data.code  == 1000){
                     const data = params.data.data.goods_list;
                     this.goods_list = data.data
                    
                    }
            })
        },
        getBlockMsg(){
             this.$api.home.block({
                block_id:1 ,
                page:1,
                per_page:1
            }).then(params => {
                if(params.data.code  == 1000){
                    const data = params.data.data.list[0]
                    const data_text = JSON.parse(data.data)
                    // data.text = data_text;
                    console.log(data)
                    this.block_one = data
                    this.text_one = data_text
                    // this.block_one.banner_text = data_text

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
                    const data_text_two = JSON.parse(data_two.data)
                   
                    this.block_two = data_two
                    this.text_two = data_text_two
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
                     if(params.data.code  == 1000){
                         console.log(params)
                        const data_three = params.data.data.list
                        // const data_text_two = JSON.parse(data_two.data)
                        console.log(data_three)
                        // this.block_two = data_two
                        // this.text_two = data_text_two
                    }
                }
            })
        },
        
    },
     mounted () {
        this.getBless(),
        this.getGoodsList()
        this.getBlockMsg()
        this.getBlockMsgtow()
        this.getBlockMsgthree()
    }

}
</script>
<style lang="stylus">
    .home
        padding 0 .2rem
        background #fff
        .numb_text
            text-align center
            display block
            padding 0.8rem 0 0.32rem 0
            font-weight 600
</style>
