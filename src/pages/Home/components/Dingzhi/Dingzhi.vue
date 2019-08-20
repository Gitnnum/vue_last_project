<template>
	<div class="swiper-container" id="c1">
		<div class="title">私人定制</div>
		<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(slideItem,index) in totalArr" :key="index">
					<ul class="shopList">
						<li class="shopListItem" v-for="(liItem,index) in slideItem" :key="index">
							<a href="javaScript:;">
								<img :src="liItem.listPicUrl" alt="">
								<div class="info">
									<span class="words">{{liItem.name}}</span>
									<span class="price">￥{{liItem.retailPrice}}</span>
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
	import { mapState, mapGetters } from 'vuex'   
	export default {//
		data () {
			return {

			}
		},
		computed:{
			...mapState({
				homeData: state => state.home.homeData
			}),
			//私人定制  计算属性
			...mapGetters(['totalArr'])  
			// personalShop () {
			// 	if(this.homeData){
			// 		return this.homeData.personalShop
			// 	}
			// }
		},
		watch:{
			totalArr () {
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
					padding-left 8px
					display flex
					.shopListItem
						display flex
						margin-right 6px
						a
							width 33.3%
							img
								width 108px
								height 108px
								background #f5f5f5
							.info
								width 108px
								height 50px
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
