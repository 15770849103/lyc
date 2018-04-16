<template>
	<header class="word">
		<a class="fa fa-commenting-o"></a>
		<a class="fa fa-search"></a>
		<a class="fa fa-shopping-cart"></a>
	</header>
</template>

<script>
	export default{
		name:'myworld'
	}
</script>

<style>
	.word{
		display: flex;
	    width: 100%;
	    height: 0.5rem;
	    padding: 0.05rem 0.1rem;
	    justify-content: space-between;
	    align-items: center;
	    background-color: #fff;
	    border-bottom: 1px solid #e5e5e5;
	    z-index: 100;
	   /* overflow: hidden;*/
	}
	.fa{
		color: #CCCCCC;
		font-size: 0.2rem !important;
	}
	.word-center{
		width: 2.92rem;
		height: 0.33rem;
		background: #2C3E50;
	}
	.fa-search{
		width: 2.82rem;
		height: 0.33rem;
		background: #EEEEEE;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 0.1rem;
		border-radius: 0.05rem;
	}
</style>