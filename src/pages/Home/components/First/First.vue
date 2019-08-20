<template>
  <div class="first">
		<ul class="goodsCategory">
			<li v-for="(kingKong,index) in kingKongModule.kingKongList" :key="index">
				<a href="javascript:;">
					<img :src="kingKong.picUrl" alt="">
				</a>
				<span>{{kingKong.text}}</span>
			</li>
		</ul>
		<div class="employee">
			<a href="javaScript:;">
				<img src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif" alt="img">
			</a>
		</div>
		<!-- 购物导航榜单 -->
		<div class="employeeShops">
			<div class="item" v-for="(item,index) in homeData.sceneLightShoppingGuideModule">
				<a href="javaScript:;">
					<p class="one">{{item.styleItem.title}}</p>
					<p class="two">{{item.styleItem.desc}}</p>
					<div class="images">
						<img :src="pic" alt="img"  v-for="(pic,index) in item.styleItem.picUrlList" :key="index">
					</div>
				</a>
			</div>
		</div>
  </div>
</template>

<script type="text/ecmascript-6">
	import { mapState } from 'vuex'
  export default {
		computed:{
      ...mapState({
        homeData: state => state.home.homeData
			}),
			// 分类导航
      kingKongModule () {
        if(this.homeData){
          return this.homeData.kingKongModule || {}
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.first
		background #fff
		padding-bottom 10px
		.goodsCategory
			width 100% 
			display flex
			flex-wrap wrap
			li 
				width 20%
				display flex
				flex-direction column
				align-items center
				margin 3px 0
				a
					width 100%
					img 
						padding-left 12px
						width 55px
						height 55px
				span 
					font-size 12px
					color #333
		.employee
			width 100%
			background #fff
			padding-top 10px
			a
				img 
					width 100%
		.employeeShops
			background #fff
			padding 3px 10px
			display flex
			flex-wrap wrap
			.item
				width 49%
				display flex
				justify-content center
				align-items center
				background #eee
				margin-top 2px
				margin-right 2px
				.one
					font-size 16px
					margin-top 15px
					margin-bottom 5px
					text-align center
					color #333
				.two
					font-size 12px
					text-align center
				.images
					padding-top 10px
					display flex
					img 
						width 75px
						height 75px
      
 
</style>
