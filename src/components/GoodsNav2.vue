<template>
  <div class="GoodsNav2">
  	
	  
	<div class="swiper-container2">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide"><img src="http://img07.jiuxian.com/bill/2017/0728/6863122aaaf7463792d6ae9fd8d01993.jpg" alt="" /></div>
	    <div class="swiper-slide"><img src="http://img07.jiuxian.com/bill/2017/0728/6863122aaaf7463792d6ae9fd8d01993.jpg" alt="" /></div>
	    <div class="swiper-slide"><img src="http://img07.jiuxian.com/bill/2017/0728/6863122aaaf7463792d6ae9fd8d01993.jpg" alt="" /></div>
	   
	    
	  </div>
	</div>
   
   
  </div>
</template>

<script>
export default {
  name: 'GoodsNav2',
  data () {
    return {
     
    }
  },
  methods:{
  	change:function(){
  		var mySwiper = new Swiper('.swiper-container2', {
				slidesPerView : 3,
			})
  	}
  },
  mouted(){
  	this.change()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.GoodsNav2{
		width: 100%;
		padding-left: 10px;
		.swiper-container2{
			width: 100%;
			.swiper-wrapper{
				width: 100%;
				.swiper-slide{
					width: 30%;
					margin:2%;
					
					img{
						width: 110px;
						height: 110px;
					}
				}
			}
		}
	}
</style>
