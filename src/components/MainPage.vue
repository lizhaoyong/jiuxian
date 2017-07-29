<template>
  <div class="mainpage">
   <main-header></main-header>
   <head-banner></head-banner>
   <item-nav></item-nav>
   <broad-cast></broad-cast>
   <count-down></count-down>
   <!--<toplist></toplist>-->
   <div class="lists">
	   	<pub-banner></pub-banner>
   </div>
   <goods-nav></goods-nav>
   <div class="lists2">
	   	<pub-banner></pub-banner>
   </div>
   <nav-list></nav-list>
   <small2></small2>
   <listitem></listitem>
  	<bottom></bottom>
  </div>
</template>

<script>
	import HeadBanner from './MainBanner/MainBanner'
	import MainHeader from './MainHeader'
	import ItemNav from './ItemNav/ItemNav'
	import BroadCast from './BroadCast'
	import CountDown from './CountDown'
	import Bottom from "./Bottom"
//	import toplist from "./TopList"
	import pubBanner from "./SecondList"
	import GoodsNav from "./GoodsNav"
	import NavList from "./Nav"
	import small2 from "./smallnav"
	import listitem from "./list"
	import bottom from "./Bottom"
	
	
	
	
	
	
	
	
	
	
export  default {
  name: 'mainpage',
  data () {
    return {
     
    }
  },
  components:{
  	MainHeader,
  	HeadBanner,
  	ItemNav,
  	BroadCast,
  	CountDown,
  	pubBanner,
  	GoodsNav,
  	NavList,
  	small2,
  	listitem,
  	Bottom
  },
  methods:{
  	
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.mainpage{
		width: 100%;
		height: 100%;
		
		position: relative;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		.mint-swipe-indicators{
			position: absolute;
			left: 70%;
			bottom: 10px;
		}
		.lists{
			position: absolute;
			left: 0;
			top: 570px;
			width: 100%;
			height: auto;
			background: red;
	
		}
		.lists2{
			position: absolute;
			left: 0;
			top: 1260px;
		}
		
		/*.bottombox{
			position: fixed;
			left: 0;
			bottom: 0;
		}*/
	}
</style>
