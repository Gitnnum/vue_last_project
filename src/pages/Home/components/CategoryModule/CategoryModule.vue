<template>
	<div class="categoryModule">
		<div class="bigImage">
			<a href="javascript:;">
				<img :src ="categoryModuleItem.titlePicUrl"/>
			</a>
		</div>
		<div  class="shopWrapper" :class="currentClass" ref="shopWrapper">
			<ul class="shopList">
				<li class="shopListItem" v-for="(itemL,index) in categoryModuleItem.itemList" :key="index">
					<a href="javascript:;">
						<img :src="itemL.listPicUrl" alt="">
					</a>
					<div class="info">
							<span class="words">{{itemL.name.length >10 ?itemL.name.slice(0,15)+"..." : itemL.name}}</span>
							<p class="price">￥{{itemL.retailPrice}}</p>
					</div>
				</li>
				<li class="shopListItem">
					<span>
						<a href="javaScript:;">
							查看更多>
						</a>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
  export default {
		props:{
			categoryModuleItem: Object,
			index: Number
		},
		computed:{
			currentClass () {
				return "shopWrapper"+this.index
			}	
		},
		async mounted () {
			await this.$store.dispatch('getHome')
			this.$nextTick (()=>{
				// console.log(this.$refs.shopWrapper1)
				new BScroll("."+this.currentClass,{
					click:true,
					scrollX:true,
					scrollY:false
				})
			}) 
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.categoryModule
		background #fff
		.bigImage
			a
				img
					width 100%
					height 185px
		.shopWrapper
			width 100%
			height 190px
			margin-top 5px
			overflow hidden
			.shopList
				padding-left 10px
				float left
				display flex
				.shopListItem
					padding-bottom 15px
					margin-right 10px
					&:last-child
						width 108px
						height 94px
						background #f4f4f4
						font-size 14px
						color #333
						text-align center
						line-height 94px
					img
						width 108px
						background #f4f4f4
					.info
						width 100px
						padding-left 4px
						.price
							font-size 12px
							color #b4282d
						.words
							font-size 12px
							color #333
 
</style>
