<template>
	<div class="zhongchou">
		<div class="title">
			<span>众筹</span>
			<span class="more">更多></span>
		</div>
		<div class="top">
			<a href="javaScript:;">
				<div class="image">
					<img src="https://yanxuan.nosdn.127.net/721fd65889559e3ceff651c81c18685a.png?imageView&thumbnail=210x210&quality=75" alt="">
				</div>
				<div class="info">
					<p class="info_one">来自地心的礼物</p>
					<p class="price">￥<span>123</span>起</p>
					<div class="progressWrap">
						<div class="progres"></div>
						<p class="rate">9%</p>
					</div>
					<p class="info_last">6人支持</p>
				</div>
			</a>
		</div>
		<div class="bottom">
			<a href="javaScript:;">
				<div class="image">
					<img src="https://yanxuan.nosdn.127.net/71134f6fcdefe050c24031d26d02fbad.png?imageView&thumbnail=210x210&quality=75" alt="">
				</div>
				<div class="info">
					<p class="info_one">一把七亿岁的石瓢壶</p>
					<p class="price">￥<span>123</span>起</p>
					<div class="progressWrap">
						<div class="progres"></div>
						<p class="rate">399%</p>
					</div>
					<p class="info_last">194人已支持</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.zhongchou
		padding 5px 10px
		margin-top 10px
		background #fff
		.title
			display flex
			justify-content space-between
			font-size 16px
			color #333
			height 50px
			line-height 50px
		.top
			margin-bottom 20px
			a
				display flex
				align-items center
				.image
					background #f4f4f4
					width 105px
					height 105px
					margin-right 15px
					img
						width 105px
						height 105px
				.info
					.info_one
						font-size 14px
						color #333
						margin-bottom 5px
					.price
						font-size 12px
						color #b4282d
						margin-bottom 5px
						span
							font-size 16px
					.progressWrap
						position relative
						height 3px
						width 180px
						background #D8D8D8
						margin  15px 0px
						.progres
							position absolute
							top: 0;
							left: 0;
							height 3px
							width 9%
							background #FEA438
						.rate
							font-size 12px
							color #7F7F7F
							position absolute
							top: -4px;
							right: -30px;
					.info_last
						font-size 12px
						color #7F7F7F
		.bottom
			margin-bottom 20px
			a
				display flex
				align-items center
				.image
					background #f4f4f4
					width 105px
					height 105px
					margin-right 15px
					img
						width 105px
						height 105px
				.info
					.info_one
						font-size 14px
						color #333
						margin-bottom 5px
					.price
						font-size 12px
						color #b4282d
						margin-bottom 5px
						span
							font-size 16px
					.progressWrap
						position relative
						height 3px
						width 180px
						background #D8D8D8
						margin  15px 0px
						.progres
							position absolute
							top: 0;
							left: 0;
							height 3px
							width 100%
							background #FEA438
						.rate
							font-size 12px
							color #7F7F7F
							position absolute
							top: -4px;
							right: -30px;
					.info_last
						font-size 12px
						color #7F7F7F
      
 
</style>
