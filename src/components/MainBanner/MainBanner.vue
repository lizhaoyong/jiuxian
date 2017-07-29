<template>
	
		<mt-swipe :auto="4000" class="HeadBanner">
		  <mt-swipe-item><img src="../../../img/header-banner1.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../img/header-banner2.jpg"/></mt-swipe-item>		  
		  <mt-swipe-item><img src="../../../img/header-banner3.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../img/header-banner4.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../img/header-banner5.jpg"/></mt-swipe-item>		  
		  <mt-swipe-item><img src="../../../img/header-banner6.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../img/header-banner7.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../../img/header-banner8.jpg"/></mt-swipe-item>		  
		  
			
		</mt-swipe>
		
	
	
</template>

<script>
	export default {
	  name: 'HeadBanner',
	  data () {
	    return {
	     
	    }
	  }
	  
	}
</script>

<style scoped lang="scss">
	.HeadBanner{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 9.9em;
		background: #0000FF;
		
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>