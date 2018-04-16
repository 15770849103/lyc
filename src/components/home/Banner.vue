<template>
   <div class="banner swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide" v-for = " banner in banners " :key = " banner.id ">
               <img width="100%" :src="banner.image" alt="">
           </div>
       </div>
       <div class="swiper-pagination"></div>
   </div>
</template>
<script>
// 引入swiper相关，因为只有banner在用，所以把样式也引入到banner里了
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
   name:'AppBanner',
   data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
//     		console.log(1)
            this.$http.get('./static/banners.json')
            .then( res => {
//            	console.log(res)
          	this.banners = res.data.bannerList
            } )
       }
   },
   created () {
       this.getBanners()
   },
   updated () {
       new Swiper('.banner',{
       		loop:true,
       		autoplay:true,
           	pagination: {
               el: '.swiper-pagination'
           }
       })
   }
}
</script>
<style lang="scss">
	.swiper-pagination{
		width: 4.14rem;
		height: 1rem!important;
	}
</style>


