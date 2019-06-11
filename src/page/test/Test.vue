<template>
    <div>
        <test-header></test-header>
        <test-list></test-list>
    </div>
</template>
<script>
import TestHeader from './components/Header'
import TestList from './components/List'
import getGoodsList from '../../api/test.js'
export default {
    name:'Test',
    components:{
        TestHeader,
        TestList
    },
    //  methods: {
    //     getHomeInfo () {
    //         axios.get('/api/index.json')
    //             .then(this.getHomeInfoSucc)
	// 			},
	// 			getHomeInfoSucc (res) {
	// 				console.log(res)
	// 				res = res.data
	// 				if (res.ret && res.data) {
	// 					const data =  res.data
	// 					this.swiperList = data.swiperList
	// 					this.iconList = data.iconList
	// 					this.recommendList = data.recommendList
	// 					this.weekendList = data.weekendList

	// 				}
	// 			}
    // },
     methods: {
        getUse: async function() {
            const params = {
                username: 'admin',
            }
            let res = await getUserInfo(params);
            console.log(res)
            
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
