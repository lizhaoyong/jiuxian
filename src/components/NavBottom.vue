<template>
  <div class="NavBottom">
   	<li v-for="i in listimg">
   		<a href="#">
   			<img :src="i.url"/>
   		</a>
   	</li>
   
   
  </div>
</template>

<script>
	import GoodsNav1 from "./GoodsNav1"
	import GoodsNav2 from "./GoodsNav2"
	import axios from 'axios'
export default {
  name: 'NavBottom',
  data () {
    return {
     	listimg:[]
    }
  },
  methods:{
  	makeimg:function(){
  		var that = this;
  		axios.get("./static/listnav.json",{
  			params:{
  				
  			}
  		}).then(function(res){
  			that.listimg = res.data;
//			console.log(that.listimg)
  		})
  	}
  },
  mounted(){
  	this.makeimg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.NavBottom{
		width: 100%;
		height: auto;
		li{
			list-style: none;
			width: 50%;
			float: left;
			a{
				width: 50%;
				height: 100px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		li:nth-child(3){
			width: 33.3%;
		}
		li:nth-child(4){
			width: 33.3%;
			
		}
		li:nth-child(5){
			width: 33.3%;
			
		}
	}
</style>
