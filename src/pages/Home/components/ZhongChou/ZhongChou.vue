<template>
	<div class="zhongchou">
		<div class="title">
			<span>众筹</span>
			<span class="more">更多></span>
		</div>
		<div class="top" v-for="(item,index) in zhongChouList" :key="index">
			<a href="javaScript:;" >
				<div class="image">
					<img :src="item.picUrl" alt="">
				</div>
				<div class="info">
					<p class="info_one">{{item.name}}</p>
					<p class="price">{{item.showRetailPrice}}</p>
					<div class="progressWrap" ref="progressWrap" >
						<!-- <div class="progres" :style="`width:${Math.floor(item.progress/progressWrapWidth*100)}px`"></div> -->
						<div class="progres" :style="`width:${item.progress>180?180:item.progress}px`"></div>
						<p class="rate">{{Math.floor(item.progress/item.retailPrice*100)}}%</p>
					</div>
					<p class="info_last">{{item.supportNum}}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters } from 'vuex'
  export default {
		computed:{
			...mapGetters(['zhongChouList']),
			// progressWrapWidth () {
			// 	if(this.$refs.progressWrap){
			// 		console.log(this.$refs.progressWrap[0])
			// 		return  this.$refs.progressWrap[0].style.width
			// 	}
			// }
		}
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
