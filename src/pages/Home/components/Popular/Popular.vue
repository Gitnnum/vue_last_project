<template>
	<div class="popular">
		<div class="title">
			<span>人气推荐</span>
			<span class="more">更多></span>
		</div>
		<div class="bigItem" v-if="popularItemList">
			<a href="javaScript:;">
				<div class="left">
					<img :src="popularItemList[0].listPicUrl" alt="">
				</div>
				<div class="right">
					<p class="one">抄底特惠</p>
					<p class="two"><span>{{popularItemList[0].name}}</span></p>
					<p class="three">{{popularItemList[0].simpleDesc}}</p>
					<p class="price">￥{{popularItemList[0].retailPrice}}</p>
				</div>
			</a>
		</div>
		<ul class="shopList">
			<li class="shopListItem" v-for="(item,index) in popularImg" :key="index">
				<a href="javaScript:;">
					<img :src="item.primaryPicUrl" alt="">
					<div class="info">
						<span class="words">{{item.name.length >10 ?item.name.slice(0,10)+"..." : item.name}}</span>
						<span class="price">￥{{item.retailPrice}}</span>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters } from 'vuex'
  export default {
		computed:{
			...mapGetters(['popularItemList','popularImg'])
		},
		// //定义除了第一个商品剩下的三个商品数组，用于遍历
		// popularImg () {
		// 	//if(this.popularItemLis){
		// 		return this.popularItemList.splice(0,1)
		// 	//}
		// }
  }
	//popularItemList
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.popular
		padding 0 10px
		background #fff
		margin-top 10px
		.title
			display flex
			justify-content space-between
			font-size 16px
			color #333
			height 50px
			line-height 50px
		.bigItem
			height 140px
			background #FEF0DF
			margin-bottom 10px
			a
				display flex
				.left
					img
						width 140px
				.right
					width 175px
					margin 0 auto
					padding-top 30px
					.one
						width 44px
						font-size 10px
						color #B4282D
						background #fff
						border 1px solid #B4282D
						margin-bottom 10px
					.two 
						font-size 14px
						color #333
						overflow hidden
						white-space nowrap
						text-overflow ellipsis
						margin-bottom 10px
					.three
						font-size 12px
						color #7F7F7F
						margin-bottom 10px
					.price
						font-size 14px
						color #b4282d 
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
					padding-top 5px
					width 100px
					padding-left 4px
					.price
						font-size 12px
						color #b4282d
					.words
						font-size 12px
						color #333
      
 
</style>
