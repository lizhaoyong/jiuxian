<template>
  <div id="app">
    <router-view></router-view>   
  </div>
</template>

<script>
//	import Bottom from "./components/Bottom"
export default {
  name: 'app',
  components:{

  }
}
</script>

<style lang="scss">
@import url("./style/reset.scss");	
@import url("./style/virtual.scss");	
html{
	font-size: 10vw;
}
body{
	font-size: 16px;
}
		html,body,#app{
			height: 100%;
			padding: 0;
			margin: 0;
			position: relative;
			
		}
	#app{
		display: flex;
	}	
</style>
