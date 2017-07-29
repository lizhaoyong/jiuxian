<template>
  <div class="NavList">
  <li class="case" v-for="item in tip">
  	<nav-top :url="item.url"></nav-top>
   	<nav-bottom></nav-bottom>
  </li>
   	
   
  </div>
</template>

<script>
	import NavTop from "./NavTop"
	import NavBottom from "./NavBottom"
	import axios from 'axios'
export default {
  name: 'NavList',
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
  components:{
  	NavTop,
  	NavBottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.NavList{
		width: 100%;
		height: auto;
		background: red;
		position: absolute;
		top: 1640px;
		left: 0;
		.case{
			list-style: none;
			height: auto;
		}
		
	}
</style>
