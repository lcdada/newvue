<template>
    <div>
         <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        fixed
        />    
    </div>    
</template>
<script>
import { NavBar } from 'vant';
export default {
    name:"app-header",
     components:{
        [NavBar.name]:NavBar,
     }
}
</script>
<style lang="stylus" scoped>

</style>
