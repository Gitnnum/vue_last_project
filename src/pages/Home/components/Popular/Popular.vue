<template>
	<div class="popular">
		<div class="title">
			<span>人气推荐</span>
			<span class="more">更多></span>
		</div>
		<div class="bigItem">
			<a href="javaScript:;">
				<div class="left">
					<img src="https://yanxuan-item.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=280x280" alt="">
				</div>
				<div class="right">
					<p class="one">抄底特惠</p>
					<p class="two"><span>泰国制造 天然乳胶凉感席套装 可机洗</span></p>
					<p class="three">天然乳胶内芯，科技凉感面料</p>
					<p class="price">￥123</p>
				</div>
			</a>
		</div>
		<ul class="shopList">
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="words">泰国制造，镜片优选</span>
						<span class="price">￥12</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="words">泰国制造，镜片优选</span>
						<span class="price">￥12</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="words">泰国制造，镜片优选</span>
						<span class="price">￥12</span>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
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
					padding-left 4px
					.price
						font-size 12px
						color #b4282d
					.words
						font-size 12px
						color #333
      
 
</style>
