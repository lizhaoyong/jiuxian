<template>
  <div class="small2">
  	
  		<a class="abc">
  			<img src="http://img07.jiuxian.com/bill/2017/0321/1746c9c0000e42d2be988597189eb184.jpg"/>
  		</a>
  	
  	<div class="_nav">
  		<a class="c" href="#" v-for="item in tip2">
  			<img :src="item.url"/>
  		</a>
  	</div>
   	
   <p>爆款推荐</p>
  </div>
</template>

<script>
	
	import axios from 'axios'
export default {
  name: 'small2',
  data () {
    return {
     tip2:[]
    }
  },
  methods:{
  	maketip2:function(){
  		var that = this;
  		axios.get("./static/smallnav.json",{
  			params:{
  				
  			}
  		}).then(function(res){
  			that.tip2 = res.data;
//			console.log(that.tip2)
  		})
  	}
  },
  mounted(){
  	this.maketip2()
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.small2{
		position: absolute;
		left: 0;
		top: 2830px;
		width: 100%;
		height: auto;
		.abc{
			width: 100%;
			height: 40px;			
				img{
					width: 100%;
					height: 40px;
				}
			
			
		}
		._nav{
			width: 100%;
			height: auto;
			.c{
				width: 50%;
				height: auto;
				img{
					width: 50%;
					height: 70%;
					float: left;
				}
			}
		}
		p{
			text-align: center;
			font-size: 13px;
			color: #C8C7CC;
		}
	}
</style>
