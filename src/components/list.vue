<template>
 	<ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="5" class="listitem">
	  <li v-for="item in list">
	  	<i style="background:#ff6266;">团购</i>
		    <img v-lazy.container="item.url">
		    <span class="title">
		    	【周末打折惠】52°泸州老窖三人炫1000ml（双瓶装）+52°泸州老窖三人炫100ml
		    </span>
		    <span class="price">
		    	<strong class="price2">￥179.00</strong>
		    </span>
	  </li>
	</ul>
	
	<!--<div id="container">
		<ul class="listitem">
		  <li v-for="item in list">
		  	<i style="background:#ff6266;">团购</i>
		    <img v-lazy.container="item.url">
		    <span class="title">
		    	【周末打折惠】52°泸州老窖三人炫1000ml（双瓶装）+52°泸州老窖三人炫100ml
		    </span>
		    <span class="price">
		    	<strong class="price2">￥179.00</strong>
		    </span>
		  </li>
		</ul>
	 
	</div>-->
	
	
</template>

<script>
	
	import axios from 'axios'
	import 	Vue from 'vue'
	
	import { InfiniteScroll } from 'mint-ui';

	Vue.use(InfiniteScroll)
export default {
  name: 'listitem',
  data () {
    return {
     	list:[]
    }
  },
  methods:{
  	makeimg:function(){
  		var that = this;
  		axios.get("./static/listnav.json",{
  			params:{
  				list:{}
  			}
  		}).then(function(res){
  			that.list = res.data;
			
  		})
  	},
  	loadMore() {
	  this.loading = true;
	  var that = this;
	  setTimeout(() => {
	    let last = that.list[that.list.length - 1];
	    
	    for (let i = 1; i <= 10; i++) {
	      that.list.push(last);
	     
	    }
	    that.loading = false;
	  }, 2000);
	 
	}
  },
  mounted(){
  	this.makeimg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	.listitem{
		position: absolute;
		left: 0;
		top: 3220px;
		width: 100%;
		height: auto;
		i{
			display: inline-block;
			font-size: 12px;
			margin-left: 5px;
			
		}
		li{
			width: 44%;
			height: auto;
			float: left;
			margin: 3px 10px;
			img{
				width: 100%;
				height: 100%;
				
			}
			.title{
				display: block;
				font-size: 12px;
			}
			.price{
				display: block;
				width: 100%;
				
				.price2{
					display: block;
					width: 100%;
					color:orangered;
				}
			}
			
		}
	}
</style>
