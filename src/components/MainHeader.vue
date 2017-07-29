<template>
  <header class="main-header">
  <span class="logo-jiuxian"></span>
  <div class="search">
  	 <span class="iconfont icon-sousuo" id="fdj"></span>
  	 <input type="text" />
  	<span class="btn">搜索</span>
  </div> 
   
  </header>
 
</template>


<script>
	
export default {
  name: 'main-header',
  data () {
    return {
     
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.main-header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;	
		height: 10em;
		display: flex;
		z-index: 100000;	
		.logo-jiuxian{
			float: left;
	    display: inline-block;
	    margin: .5em 0 0 .5em;
	    width: 5em;
	    height: 1.6em;
			background: url(../../img/jx-sprite.png) no-repeat;
			background-position: 0 0;
		  background-size: 15em 3em;			
		}
		.search{
			display: inline-block;
			float: left;
			margin: .5em 0 0 1.4em;
			width: 73%;
			height: 1.8em;
			position: relative;
			display: flex;
		
			input{
				height: 100%;
				margin-right: 5px;
				width: 79%;
				height: 1.4em;
				border-radius:0 5px 5px 0; 
				outline: 0;
				border:none;
			/*	background: #000000;*/
			}
			#fdj{
				position: absolute;
				left: -16px;
				top: 0px;
				display: block;
				background: #fff;
				width: 1em;
				height: 1.4em;
				border-radius: 5px 0 0 5px;
				line-height: 1.4em;
				text-align: center;
 
			}
			.btn{
				margin-left: .3em;
				color:#fff;
				font-size: 14px;
				
			}
		}
	}
	
	
</style>
