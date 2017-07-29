<template>
  <div class="GoodsNav1">
   <div class="left">
   		<img src="http://img06.jiuxian.com/bill/2017/0728/2d0ca6f24313424e8157e4a8774710df.jpg" alt="" class="test-lazyload" />
   </div>
   <div class="right">
   		<img src="http://img09.jiuxian.com/bill/2017/0728/3003167a542a4605b6b481d99358c263.jpg" alt="" class="test-lazyload" />
   		<img src="http://img09.jiuxian.com/bill/2017/0621/2555e10978734f9ab563930c46e8e0c0.jpg" alt="" class="test-lazyload" />
   </div>
   
   
  </div>
</template>

<script>
export default {
  name: 'GoodsNav1',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.GoodsNav1{
		width: 100%;
		overflow: hidden;
		.left{
			float:left;
			width: 49.1%;
			background: blue;
			img{
				width: 100%;
			}
		}
		.right{
			float:right;
			width: 50.9%;
			img{
				width: 100%;
			}
		}
	}
</style>
