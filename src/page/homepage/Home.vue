<template>
    <div>

    </div>
</template>
<script>
export default {
    name:"HomePage",
    methods:{
        getInfo () {
            this.$api.home.getBless({
               jid:767
            }).then(params => {
                if(cood==1000){
                    console.log(params)
                }
                
            })
        },
        getGoodsList (){
            this.$api.home.getGoodsList({
               package_id:390
            }).then(params => {
                if(cood==1000){
                    console.log(params)
                }
                
            })
        }
        
    },
     mounted () {
        this.getInfo(),
        this.getGoodsList()
    },  

}
</script>
