<template>
  <div id="app">
    <myworld></myworld>
    <router-view></router-view>
    <footed></footed>
  </div>
</template>

<script>
import myworld from './components/header/header';
import footed from './components/footer/footer';
export default { 
  name: 'App',
  components: {
    myworld,footed
  }
}

</script>

<style lang="scss">
	#app{
		display: flex;
		flex-direction: column;
	}
</style>
