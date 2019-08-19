<template>
  <div class="hotFindContainer">
      <div class="header">
				<div class="find">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" placeholder="硅藻土浴室地垫 直降29元">
				</div>
				<span class="quxiao" @click="$router.back()">取消</span>
      </div>
      <div class="findlist">
				<span class="title">热门搜索</span>
				<ul class="nav">
						<li class="navItem">爆款 行李箱</li>
						<li class="navItem">香氛牙膏 谈吐芳香</li>
						<li class="navItem">轻弹云朵拖鞋9.9元</li>
						<li class="navItem">中秋月饼 上新热卖</li>
						<li class="navItem">韩国造 睡眠喷雾</li>
						<li class="navItem">百搭帆布鞋89元起</li>
						<li class="navItem">内裤</li>
						<li class="navItem">行李箱</li>
						<li class="navItem">耳机</li>
						<li class="navItem">男士内裤</li>
						<li class="navItem">牙刷</li>
						<li class="navItem">男鞋</li>
				</ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.hotFindContainer
		background #ffffff
		padding 0 20px
		.header
			height 45px
			display flex
			align-items center
			justify-content space-between
			.find
				border-radius 2px
				width 86%
				padding 2px 
				background #eee
				font-size 14px
				color #666
				.icon-sousuo
					font-size 24px
					vertical-align middle
				input 
					height 20px
					background #eee
			.quxiao
				font-size 14px
				color #333
		.findlist
			.title
				height 50px
				font-size 14px
				color #999
			.nav
				margin-top 10px
				width 100%
				display flex
				flex-wrap wrap
				.navItem
					font-size 12px
					padding: .25rem;
					margin-right: .42667rem;
					margin-bottom: .42667rem;
					line-height: .61333rem;
					border: 1px solid #999;
					border-radius: 3px;
</style>
