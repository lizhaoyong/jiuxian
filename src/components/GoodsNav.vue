<template>
  <div class="GoodsNav">
   <goods-nav1></goods-nav1>
   <goods-nav2></goods-nav2>
   
   
  </div>
</template>

<script>
	import GoodsNav1 from "./GoodsNav1"
	import GoodsNav2 from "./GoodsNav2"
export default {
  name: 'GoodsNav',
  data () {
    return {
     
    }
  },
  components:{
  	GoodsNav1,
  	GoodsNav2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.GoodsNav{
		width: 100%;
		position: absolute;
		left:0;
		top:943px;
		
	}
</style>
