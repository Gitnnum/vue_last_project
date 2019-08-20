<template>
  <div class="swiper-container" id="c2" ref="container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/c2f12fa2f7f75a2259ade59daa75e260.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/566844f22dbcc4f949aa2403bf1503e6.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/975f983b0314af8da367b781efa5afeb.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
				</a>
			</div>
			<div class="swiper-slide">
				<a href="javaScript:;">
					<img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0" alt="banner">
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
