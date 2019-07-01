<template>
    <div>
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant';
export default {
    name:'Footer',
    data() {
        return {
            activeName: '1'
        };
    },
    components:{
        [Collapse.name]:Collapse,
        [CollapseItem.name]:CollapseItem
    }
}

</script>
<style lang='stylus' scoped>
</style>