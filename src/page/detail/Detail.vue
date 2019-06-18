<template>
    <div>
        <detail-banner></detail-banner>
        <detail-conent></detail-conent>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailConent from './components/Conent'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailConent
    }
}
</script>
<style lang="stylus" scoped>

</style>
