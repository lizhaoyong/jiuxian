<template>
  <div class="ItemNav">
  	<a href=""><img src="../../../img/navitem7.jpg"/></a>
  	<a href=""><img src="../../../img/navitem8.jpg"/></a> 	
  	<a href=""><img src="../../../img/navitem9.jpg"/></a>  	
  	<a href=""><img src="../../../img/navitem11.jpg"/></a> 	
  	<a href=""><img src="../../../img/navitem14.jpg"/></a> 	 	
  	<a href=""><img src="../../../img/navitem2.jpg"/></a> 	
  	<a href=""><img src="../../../img/navitem3.jpg"/></a>
  	<a href=""><img src="../../../img/navitem4.jpg"/></a> 	
  	<a href=""><img src="../../../img/navitem10.jpg"/></a> 	
  	<a href=""><img src="../../../img/navitem12.jpg"/></a>
  	
  	
  	<a href=""><img src="../../../img/navitem13.jpg"/></a>
  	
  	<a href=""><img src="../../../img/navitem5.jpg"/></a>
  	<a href=""><img src="../../../img/navitem6.jpg"/></a>
  	
  	
  </div>
  </template>

<script>
export default {
  name: 'ItemNav',
  data () {
    return {
     
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.ItemNav{
		position: absolute;
		left: 0;
		top: 10em;
		width: 100%;
		height: 22em;
		
		a{	
			display: block;
			width: 20%;
		    display: block;
		    text-align: center;
		    float: left;
		    img{
		    	width: 100%;
		    	height: 100%;
		    }
		  &:nth-last-child(3){
		  	width: 100%;
		  }
		   &:nth-last-child(2){
		  	width: 50%;
		  }
		   &:nth-last-child(1){
		  	width: 50%;
		  }
		}


		
	}
	
</style>
