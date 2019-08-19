<template>
  <div class="swiper-container" id="c2" ref="container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="/static/images/banner.png" alt="banner">
				</a>
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination" id="s2" ref="pagination"></div>
	</div>
</template>

<script type="text/ecmascript-6" >
	import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css' 
  export default {
		mounted () {
			this.$nextTick(()=>{
					console.log(this.$refs)
				var mySwiper = new Swiper (this.$refs.container, {
					loop: true, // 循环模式选项
					scrollX: true,
					click: false,
					// autoplay : 2000,
					// 如果需要分页器
					pagination: {
						el: '#s2',
					}
				})
			})
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.swiper-container
		padding-top 75px
		.title
			margin-top: -75px;
		.swiper-wrapper
			.swiper-slide
				a
					img 
						width 100%
						height 200px
		.swiper-pagination
			/deep/ .swiper-pagination-bullet
				width 20px
				height 2px
				background #eeeeee
			/deep/ &.swiper-pagination-bullet-active
				width 20px
				height 2px
				background #ffffff
    
 
</style>
