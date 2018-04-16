<template>
	<footer class="bottom-foot">
		<li @click="tiao1">
			<a class="fa fa-home"></a>
			<span>首页</span>
		</li>
		<li @click="tiao2">
			<a class="fa fa-th-large"></a>
			<span>分类</span>
		</li>
		<li @click="tiao3">
			<a class="fa fa-cart-plus"></a>
			<span>购物车</span>
		</li>
		<li @click="tiao4">
			<a class="fa fa-user-circle"></a>
			<span>我的</span>
		</li>
	</footer> 
</template>

<script>
	export default{
		name:'footed',
		methods:{
			tiao1 (){
				this.$router.push({name:'home'});
			},
			tiao2 (){
				this.$router.push({name:'classify'});
			},
			tiao3 (){
				this.$router.push({name:'cart'});
			},
			tiao4 (){
				this.$router.push({name:'mine'});
			}
		}
	}
</script>

<style lang="scss">
	.bottom-foot{
		height: 0.49rem;
		width: 100%;
    	background-color: #fff;
    	bottom: -0.01rem;
    	border-top: 1px solid #CCCCCC;
    	color: #999;
    	position: fixed;
    	display: flex;
    	justify-content: space-around;
    	font-size: 0.14rem;
    	li{
    		display: flex;
    		flex-direction: column;
    		justify-content: center;
    		align-items: center;
    	}
	}
</style>