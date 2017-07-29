<template>   
   	<div class="pubBanner" id="__tonglan3-1" >
	   	<a href="https://m.jiuxian.com/mobile/2016/bandaojing/index.html" v-for="item in lists">
	   		<img :src = "item.url" />
	   </a>
   	</div>
   	
   
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'pubBanner',
  data () {
    return {
     lists:[]
    }
  },
  methods:{
  	
  	getres:function(){
  		var that = this;
  		axios.get("./static/shouye.json",{
  		params:{
  			
  		}
  	}).then(function(res){
  		that.lists = res.data;
		console.log(that.lists[0].url)
		
  	})
  	}
  	
  },
  mounted(){
  	
  		this.getres()
//		console.log(this.lists)
 	} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	
		.pubBanner{
			width: 100%;
			float: left;
			
			a{
				text-decoration: none;
			    color: #333;
			    -webkit-tap-highlight-color: rgba(0,0,0,0);
			    img{
			    	width: 100%;
   					height: auto;
			}






			}
		}
	
</style>
