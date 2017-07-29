<template>
  <div class="BroadCast">
	  <div class="news"> 
	  	<i><img src="http://img07.jiuxian.com/bill/2016/1222/c1a96aafcaff438b81d529ed3bff9889.jpg"></i>
	  	
	  	
	  <div class="swiper-container newList swiper-container-vertical" id="newList">
		  <div class="swiper-wrapper">
		  	<li class="swiper-slide swiper-slide-duplicate " data-swiper-slide-index="1">
		  		<a href="">APP首单满100送100活动规则 点击查看!</a>
		  	</li>
		  	<li class="swiper-slide" data-swiper-slide-index="0" style="height: 20px;">
		  		<a href="">炫酷爆品日 全场满399享1.2L大坛，领券更优惠，7.24火热开抢!</a>
		  	</li>
		  	<li class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style="height: 20px;">
		  		<a href="">APP首单满100送100活动规则 点击查看!</a>
		  	</li>
		  	<li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" >
		  		<a href="">炫酷爆品日 全场满399享1.2L大坛，领券更优惠，7.24火热开抢!</a>
		  	</li>
		  </div>
	  </div>

	  <!--<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>-->
    </div>
  
</div>
   
   
   
  </div>
</template>

<script>
export default {
  name: 'BroadCast',
  data () {
    return {
     
    }
  },
  methods:{
	move:function(){	
	
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
				autoplay : 1000,	
				autoplayDisableOnInteraction : true,
        direction: 'vertical'
    });
    
			
	}
  },
  mounted(){
	this.move()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.BroadCast{	
    	background: #fff;
    	position: absolute;
    	bottom: 135px;
    	left: 0;  
    	width: 375px;
    	overflow: hidden; 	
    	.news{
    		height: 20px;
    		position: relative;
    		i{
    			width: 83px;
			    height: 16px;
			    padding: 0px 10px 2px 0;
			    position: absolute;
			    display: inline-block;
			    top: -2px;
			    left: 5px;
			    border-right: 1px solid #ededed;
			    padding-right: 10px;
			    img{
			    	width: 100%;
			    	height: 100%;
			    }
    		}
    		#newList{
    			margin-left: 105px;
			    color: #252525;
			    font-size: 12px;
			    height: 20px;
			    line-height: 20px;
			    overflow: hidden;
			    width: auto;
			    li{
			    	list-style: none;
			    	height: 20px; 
				    line-height: 20px; 
				    width: 100%; 
				    overflow: hidden; 
				    float: none; 
				    font-size: 12px; 
				    text-overflow: ellipsis; 
				    white-space: nowrap;
				    a{
				    	color:#333;
				    	font-size: 10px;
				    } 
			    }
    		}
    	}
		
	}
</style>
