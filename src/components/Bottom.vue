<template>
  <footer class="Bottom">
  	<router-link to="/mainpage"><span class="iconfont icon-shouye"></span>首页</router-link>
  	<router-link to="/findpage"><span class="iconfont icon-fenlei"></span>分类</router-link>
  	<router-link to="/activepage"><img class="activeImg" src="../../img/active.png"/> </router-link>
  	
  	<router-link to="/buycarpage"><span class="iconfont icon-gouwuche"></span>购物车</router-link>
  	
  	<router-link to="/selfpage"><span class="iconfont icon-wodejuhuasuan"></span>我的酒仙</router-link>
  	
  </footer>
   
   
  
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/virtual.scss";	
	.Bottom{
	
		position:fixed;
		bottom:0;
		width: 100%;
		height: 1.3rem;
		display: flex;	
		box-shadow:0 -2px 5px #eee;
		z-index:9999;
		background:#fff;
		.activeImg{
			width: 90%;
			height:90%;		
			align-items: center;
			
			
		}
		a{
			flex-flow:1 ;
			flex-shrink: 1;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			align-items: center;
			margin: 0 auto;
			font-size: 0.8em;
			text-decoration: none;
			color:#6a6767;
			span{
				font-size: 1.8em;
			}
			&.router-link-active{
				color:$base-color;
			}
			
		}
		a:nth-child(3){
				width: 20%;
				height: 100%;
			}
	}
</style>
