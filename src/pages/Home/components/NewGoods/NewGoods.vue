<template>
	<div class="newGoods">
		<div class="title">
			<span>新品首发</span>
			<span class="more">更多></span>
		</div>
		<ul class="shopList" v-if="newItemList">
			<li class="shopListItem" v-for="(item,index) in newItemList" :key="index">
				<a href="javaScript:;">
					<img :src="item.primaryPicUrl" alt="">
					<div class="info">
						<span class="words">{{item.name.length >10 ?item.name.slice(0,10)+"..." : item.name}}</span>
						<span class="price">￥{{item.counterPrice}}</span>
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
			...mapGetters(['newItemList'])
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.newGoods
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
					width 100px
					padding-top 5px
					padding-left 4px
					.price
						font-size 12px
						color #b4282d
					.words
						font-size 12px
						color #333
      
 
</style>
