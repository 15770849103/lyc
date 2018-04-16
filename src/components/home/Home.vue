
<template>
  <div class="home">
    <app-banner></app-banner>
    <na></na>
    <shop></shop>
  </div>
</template>

<script>
import AppBanner from './Banner'
import na from './na'
import shop from './shop-banner'
export default {
  name:'Home',
  components: {
    AppBanner,na,shop
  }
}
</script>
<style lang="scss" >
	.home{
		overflow: scroll;
		flex: 1;
	}
</style>

