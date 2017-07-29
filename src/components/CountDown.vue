<template>
  <div class="CountDown">
	<div class="active-time">
		<h5>掌上秒拍</h5>
		<p>距结束<span class="lol"><i>00</i>:<i>00</i>:<i>00</i></span></p>
		<span>更多商品等你来抢！</span>
		<b>></b>
	</div>
	
</div>
   
   
   
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  data () {
    return {
     	
    }
  },
//https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1500866403725&pagenum=1&tabnum=1
 	methods:{
 		count:function(){
 			var timer = null; 
 			var date = new Date('2017/7/30 00:00:00');			
 			var date2 = new Date();	 					 			
 			var sy = date.getTime()-date2.getTime();		
 			var h = parseInt(sy/1000/60/60%24) 			
		 	var m = parseInt(sy/1000/60%60)
		 	var s = parseInt(sy/1000%60)
		 	var that = this;
 			timer = setInterval(function(){	
 				s--;
 				if(s<0){
 					m--;
 					s=59;
 					if(m<0){
 						h--;
 						m=59;
 						if(h==0&&m==0&&s==0){
 							clearInterval(timer);
 						}
 					}
 				}	
   				s = s < 10 ? '0' + s : s;
// 				m = m < 10 ? '0' + m : m;				
// 				h = h < 10 ? '0' + h : h;				
				$('.lol').html('<i>'+h+'</i>:<i>'+m+'</i>:<i>'+s+'</i>')
		},1000)	
 		},
 		move:function(){
 			
 		},

 	},
 	
 	mounted(){ 		
 		this.count()
 		this.move()
 		
 		
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.CountDown{
		position: absolute;
		bottom: 108px;
		left: 0;
		height: 1.5em;
		width:100%;
	
		
		
		.active-time{
			width: 100%;
			
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: 1px solid #ccc;
			h5{
				font-size: 14px;
			}
			p{
				color:#ADADAD;
				font-size: 13px;
				i{
					width: 16px;
					height: 16px;
					background: #404040;
					color:#fff;
				}
			}
			span{
				font-size: 13px;
				color:#ADADAD;
			}
			b{
				color:#ADADAD;
				font-size: 13px;
				font-style: oblique;
			}
		}
		
		
		   
		
	}
</style>
