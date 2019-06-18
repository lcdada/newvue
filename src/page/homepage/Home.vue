<template>
    <div>

    </div>
</template>
<script>
export default {
    name:"Home",
    methods:{
        getInfo () {
            this.$api.home.getBless({
               jid:2
            }).then(params => {
                
            })
        },
    },
     mounted () {
        this.getInfo()
    },  

}
</script>
