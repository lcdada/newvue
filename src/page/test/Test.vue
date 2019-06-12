<template>
    <div>
        <test-header></test-header>
        <test-list :weekend="weekendList"></test-list>
        <test-goods-list></test-goods-list>
       
    </div>
</template>
<script>
import TestHeader from './components/Header'
import TestList from './components/List'
import TestGoodsList from './components/GoodsLIst'
export default {
    name:'Test',
    components:{
        TestHeader,
        TestList,
        TestGoodsList,
    },
    data (){
        return {
            weekendList:[]
        }
    },
     created:function () {
        this.$emit('public_header', false);
    },
    methods:{
        onLoad() {      
            this.$api.article.articleList({        
                api: 123      
            }).then(res=> {
                // 执行某些操作  
                res = res.data;
                if (res.ret && res.data) {
                    this.weekendList = res.data.weekendList
                }
                console.log(res)  
            })    
        },
        getGoods () {
            this.$api.article.goodslist({
                package_id:525,
                pageindex:3
            }).then(params => {
                console.log(params)
            })
        }
    },
     mounted () {
         this.onLoad()
        //  this.getGoods()
    },  
}
</script>
<style lang="stylus" scoped>

</style>
