<template>
	<div class="swiper-container" id="c1">
		<div class="title">私人定制</div>
		<div class="swiper-wrapper">
				<div class="swiper-slide">
					<ul class="shopList">
						<li class="shopListItem">
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
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
				<div class="swiper-slide">
					<ul class="shopList">
						<li class="shopListItem">
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
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
				<div class="swiper-slide">
					<ul class="shopList">
						<li class="shopListItem">
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
							<a href="javaScript:;">
								<img src="/static/images/私人定制.png" alt="">
								<div class="info">
									<span class="words">泰国制造，镜片优选</span>
									<span class="price">￥12</span>
								</div>
							</a>
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
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination" id="s1"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'   
  export default {
		mounted () {
			this.$nextTick(()=>{
				var mySwiper = new Swiper ('#c1', {
					loop: true, // 循环模式选项
					
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					}
				})
			})
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.swiper-container
		margin-top 10px
		padding-left 10px
		padding-bottom 30px
		background #fff
		.title
			height 50px
			line-height 50px
			font-size 16px
			color #333
		.swiper-wrapper
			.swiper-slide
				width 100%
				overflow hidden
				.shopList
					.shopListItem
						display flex
						a
							width 33.3%
							img
								width 108px
								height 108px
								background #f5f5f5
							.info
								height 30px
								font-size 12px
								color #333
								.price
									color #b4282d
		.swiper-pagination
			/deep/ .swiper-pagination-bullet
				width 6px
				height 6px
			/deep/ &.swiper-pagination-bullet-active
				width 6px
				height 6px
				background #b4282d
	
 
</style>
