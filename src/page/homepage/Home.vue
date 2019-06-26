<template>
    <div class="home">   
        <!-- <home-header :bless="bless_info"></home-header> -->
      
        <!-- <home-list :list="goods_list" :bless="bless_info"></home-list> -->
        <one :one="block_one" ></one>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeList from './components/List'
import One from './components/One'

export default {
    name:"HomePage",
    components:{
        HomeHeader,
        HomeList,
        One
    },
    data (){
        return {
           bless_info:{},
           goods_list:[],
           block_one:{},
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
                     console.log(params)
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
                    console.log(data)
                    console.log(data.data)

                    this.block_one = data

                }
            })
        }
        
    },
     mounted () {
        this.getBless(),
        this.getGoodsList()
        this.getBlockMsg()
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
