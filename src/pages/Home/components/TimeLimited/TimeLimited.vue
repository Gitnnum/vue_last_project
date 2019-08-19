<template>
	<div class="timeLimited">
		<div class="title">
			<span>限时购</span>
			<div class="time">
				<span>00</span>
				<span>:</span>
				<span>00</span>
				<span>:</span>
				<span>00</span>
			</div>
			<span class="more">更多></span>
		</div>
		<ul class="shopList">
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
					</div>
				</a>
			</li>
			<li class="shopListItem">
				<a href="javaScript:;">
					<img src="/static/images/私人定制.png" alt="">
					<div class="info">
						<span class="price">￥12</span>
						<span class="oldPrice">￥11</span>
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
