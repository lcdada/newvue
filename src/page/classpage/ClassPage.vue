<template>
  <div>
	  <ul>
		  <li>
			  
		  </li>
	  </ul>
  </div>
</template>

<script>
export default {
    name:'ClassPage',
    methods:{
		getGoddsList(){ 
			this.$api.home.classList({
				// goods_class:15,
				custom_id:19,
				pageindex:1,
				// pagesize:1
		}).then(params => {
			if(params.data.code  == 1000){
					if(params.data.code  == 1000){
						console.log(params)
				}
			}
		})
        },
	},
	mounted () {
		this.getGoddsList()
	}

}

</script>
<style lang='stylus' scoped>
</style>