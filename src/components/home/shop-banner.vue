<template>
<div class="shopshow">
	<div class="title">
   		<img src="https://s10.mogucdn.com/mlcdn/c45406/180316_725b351h42166d01dj74ke9l7adi7_188x54.png"/>
   	</div>
   	<div class="shopbox">
   		<div class="shops">
			<div class="sp" v-for="banner of banners" :key="banner.id">
				<img :src="banner.src"/>
				<p class="p1">{{banner.title}}</p>
				<p class="p2">
					{{banner.price}}
					<i>{{banner.original}}</i>
				</p>
				<p class="p3">去拼团</p>
				<img class="xiao" src="https://s10.mogucdn.com/mlcdn/c45406/171123_4ai9ha3hbk20bi338gb40361j30af_49x50.png"/>
				<span>{{banner.intro}}</span>
			</div>
		</div>
   	</div>
	
</div>
</template>
<script>
// 引入swiper相关，因为只有banner在用，所以把样式也引入到banner里了
export default {
	name:"shop",
	data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
//     		console.log(1)
            this.$http.get('./static/shop.json')
            .then( res => {
//            	console.log(res.data.shop)
          	this.banners = res.data.shop
//          	console.log(this.banners)
            } )
       }
   },
   created () {
       this.getBanners()
   }
}
</script>
<style lang="scss">
	.shopshow{
		overflow: scroll;
		.title{
			display: flex;
			align-items: center;
			width: 100%;
			height: 0.54rem;
			padding: 0.02rem 0;
			background: #000000;
			background: white;
			img{
				width: 1.11rem;
				height: 0.28rem;
			}
		}
		.shopbox{
			overflow: scroll;
			.shops{
			display: flex;
			justify-content: space-around;
			width: 15rem;
			background: white;
				.sp{
					width: 33.33%;
					height: 2.92rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					img{
						width: 1.15rem;
						height: 1.17rem;
					}
					.p1{
						width: 100%;
						height: 0.23rem;
						padding-left: 0.1rem;
						font-size: 0.13rem;
						line-height: 0.23rem;
						margin-bottom: 0.04rem;
					}
					.p2{
						width: 100%;
						padding-left: 0.05rem;
						font-size: 0.15rem;
						color: #ff5777;
						text-align: start;
						i{
							font-size: 0.12rem;
						    text-decoration: line-through;
						    font-weight: 400;
						    color: #999999;
						}
					}
					.p3{
						display: flex;
						width: 1.07rem;
						height: 0.29rem;
						color: white;
						border-radius: 0.02rem;
						padding: 0.05rem 0;
						font-size: 0.15rem;
						background: #ff5777;
						justify-content: center;
					}
					.xiao{
						width: 0.24rem;
						height: 0.24rem;
						position: absolute;
						top: 0;
						left: 0.05rem;
					}
					span{
						position: absolute;
						top: 1rem;
						left: 0.05rem;
						width: 0.8rem;
						height: 0.17rem;
						font-size: 0.1rem;
						color: white;
						text-align: center;
						border-radius: 0 0.05rem 0 0;
						white-space: nowrap;
					    text-overflow: ellipsis;
					    background: linear-gradient(to right, #fe8a42, #ff496c);
					}
				}
			}
		}
	}
	
</style>