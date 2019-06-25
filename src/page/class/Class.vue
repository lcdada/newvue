<template>
    <div>
        <ul>
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
</template>
<script>
import {Icon} from 'vant'
export default {
    name:'Class',
    components:{
        [Icon.name]:Icon
    },
    data (){
        return{
            class_list:[]
        }
    },
    methods:{
         getClassList (){
            this.$api.home.getGoodsList({
            }).then(params => {
                 if(params.data.code  == 1000){
                        const data = params.data.data;
                        this.class_list = data
                        console.log(data)
                    
                    }
                console.log(params)
            
            })
        },
        goClassList(item){
            console.log(this.$refs.drawer) 
            this.$router.push({path:'./classpage',query:{goods_class:item.id}})
        }
    },
    mounted () {
        this.getClassList()
    }
}
</script>
<style lang="stylus" scoped>
    .item
        height 0.9rem
        display flex
        justify-content  space-between
        align-items center
        padding 0.3rem
        box-sizing border-box
        .class_item
            font-size 0.28rem
            font-weight 500
</style>
