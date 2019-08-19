<template>
	<div class="categoryModule">
		<div class="bigImage">
			<a href="javaScript:;">
				<img src ="https://yanxuan.nosdn.127.net/874cc79fd5f7e13eac10e1dcc9fe6c92.jpg?imageView&thumbnail=750x0&quality=75"/>
			</a>
		</div>
		<div class="shopWrapper" ref="shopWrapper1">
			<ul class="shopList">
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
					</a>
					<div class="info">
							<span class="words">泰国制造，镜片优选</span>
							<p class="price">￥12</p>
					</div>
				</li>
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/89ea5ccc1e8e09912b17c18005b6f704.png?imageView&quality=65&thumbnail=330x330" alt="">
						<div class="info">
							<span class="words">泰国制造，镜片优选</span>
							<p class="price">￥12</p>
						</div>
					</a>
				</li>
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
					</a>
					<div class="info">
							<span class="words">泰国制造，镜片优选</span>
							<p class="price">￥12</p>
					</div>
				</li>
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/89ea5ccc1e8e09912b17c18005b6f704.png?imageView&quality=65&thumbnail=330x330" alt="">
					</a>
					<div class="info">
						<span class="words">泰国制造，镜片优选</span>
						<p class="price">￥12</p>
					</div>
				</li>
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
					</a>
					<div class="info">
							<span class="words">泰国制造，镜片优选</span>
							<p class="price">￥12</p>
					</div>
				</li>
				<li class="shopListItem">
					<a href="javaScript:;">
						<img src="https://yanxuan-item.nosdn.127.net/89ea5ccc1e8e09912b17c18005b6f704.png?imageView&quality=65&thumbnail=330x330" alt="">
					</a>
					<div class="info">
						<span class="words">泰国制造，镜片优选</span>
						<p class="price">￥12</p>
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
		mounted () {
			this.$nextTick (()=>{
				new BScroll(this.$refs.shopWrapper1,{
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
						padding-left 4px
						.price
							font-size 12px
							color #b4282d
						.words
							font-size 12px
							color #333
 
</style>
