<template>
<div class="nan">	
   	<div class="lis" v-for="li of banners" :key="banners.id">
   		<img :src="li.src"/>
   		<span>{{li.tite}}</span>
   	</div>
</div> 
</template>
<script>

export default {
   name:'na',
   data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
//     		console.log(1)
            this.$http.get('./static/nv.json')
            .then( res => {
          	this.banners = res.data.banners
            } )
       }
   },
   created () {
       this.getBanners()
   }
}
</script>
</script>
<style lang="scss">
	.nan{
		display: flex;
		flex-wrap: wrap;
		background: white;
		.lis{
			width: 20%;
			padding-top: 0.15rem;
			display: flex;
			flex-direction:column;
			align-items:center;
			img{
			width: 0.5rem;
			height: 0.5rem;
			}
			span{
				width: 0.56rem;
				height: 0.18rem;
				font-weight: normal;
				text-align: center;
				color: rgb(96, 96, 96);
    			font-size: 0.12rem;
			}
		}
	}
</style>


