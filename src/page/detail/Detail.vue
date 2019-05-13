<template>
    <div>
        <detail-header></detail-header>
        <detail-banner></detail-banner>
        <detail-list></detail-list>
    </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/list'


export default {
    name:'Detail',
    components:{
        DetailHeader,
        DetailBanner,
        DetailList
    }
}
</script>
<style lang="stylus" scoped>

</style>
