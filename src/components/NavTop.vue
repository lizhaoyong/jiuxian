<template>
  <div class="NavTop">
   	<a href="#">
   		<img src="http://img08.jiuxian.com/bill/2017/0321/18c109eff15d43cbba20498a6e24d8e0.jpg" alt="" />
   	</a>
   
   
  </div>
</template>

<script>
	import GoodsNav1 from "./GoodsNav1"
	import GoodsNav2 from "./GoodsNav2"
	import axios from 'axios'
export default {
  name: 'NavTop',
  data () {
    return {
      tip:[]
    }
  },
   methods:{
  	maketip:function(){
  		var that = this;
  		axios.get("./static/tipheader.json",{
  			params:{
  				
  			}
  		}).then(function(res){
  			that.tip = res.data;
  			
  		})
  	}
  },
  mounted(){
  	this.maketip()
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.NavTop{
		   width: 100%;
		   height: 40px;
		    text-align: center;
		    border-bottom: 1px solid #f1f1f1;		    
		    a{
		    	display: inline;
		    	width: 100%;
		    	height: 100%;
		    	img {
		    		width: 100%;
		    		height: 100%;
		    	}
		    }
		}
</style>
