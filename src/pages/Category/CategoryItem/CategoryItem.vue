<template>
	<div class="content">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="javaScript:;">
						<img :src="currentArr.bannerUrl" alt="banner">
					</a>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<ul class="list">
			<li v-for="(item,index) in subCateList" :key="index">
				<a href="javaScript:;">
					<img :src="item.wapBannerUrl" alt="">
					<span>{{item.name}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
		props:{
			currentIndex:Number
		},
		computed:{
			...mapState({
        categoryArr: state => state.category.categoryArr
			}),
			currentArr () {
					let id = this.$route.params.id*1
					return this.categoryArr.find((item)=> item.id === id) || {}
			},
			subCateList () {
				if(this.currentArr){
					return this.currentArr.subCateList
				}
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.content
		padding-right 20px
		width 75%
		.swiper-container
			.swiper-wrapper
				.swiper-slide
					a
						img 
							width 100%
							height 120px
			/deep/ .swiper-pagination-bullet
				width 20px
				height 2px
				background #ffffff
		.list
			padding-left 10px
			display flex
			flex-wrap wrap
			li
				width 72px
				margin-right 10px
				margin-left 5px
				margin-bottom 5px
				img 
					width 72px
					height 72px
					border-radius: 5px;
				span 
					font-size 12px
					color #333
      
 
</style>
