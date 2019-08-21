<template>
	<div class="timeLimited">
		<div class="title">
			<span>限时购</span>
			<div class="time">
				<span>{{cTimer | format-date('HH')}}</span>
				<span>:</span>
				<span>{{cTimer | format-date('mm')}}</span>
				<span>:</span>
				<span>{{cTimer | format-date('ss')}}</span>
			</div>
			<span class="more">更多></span>
		</div>
		<ul class="shopList" v-if="flashSaleModule">
			<li class="shopListItem"   v-for="(item,index) in flashSaleModule.itemList" :key="index">
				<a href="javaScript:;">
					<img :src="item.picUrl" alt="">
					<div class="info">
						<span class="price">￥{{item.activityPrice}}</span>
						<del class="oldPrice">￥{{item.originPrice}}</del>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters } from 'vuex'
  export default {
		data () {
			return {
				cTimer: 0
			}
		},
		computed:{
			...mapGetters(['flashSaleModule']),
			timer (){
				if(this.flashSaleModule){
					return this.flashSaleModule.nextStartTime*1
				}
			}
		},
		mounted () {
			setTimeout(()=>{
				this.cTimer = this.timer
				console.log(this.timer)
				let timerId = setInterval(()=>{
					if(this.cTimer === 0){
						clearInterval(timeId)			
					}
					this.cTimer-=1000
				},1000)
			},300)
			}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.timeLimited
		padding 0 10px
		background #fff
		margin-top 10px
		.title
			display flex
			font-size 16px
			color #333
			height 50px
			line-height 50px
			.time
				margin-left 5px
				margin-right 170px
				span 
					font-size 12px
					&:nth-child(2n+1)
						background #333
						color #fff
						padding 0 3px
						border-radius 2px
		.shopList
			display flex
			flex-wrap wrap
			.shopListItem
				width 33.3%
				padding-bottom 15px
				img
					width 108px
					background #F5F5F5
				.info
					padding-left 4px
					.price
						font-size 14px
						color #b4282d
					.oldPrice
						font-size 12px
						color #333
      
 
</style>
