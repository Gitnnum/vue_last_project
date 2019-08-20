<template>
	<div>
		<div class="home_header">
			<div class="header">
				<a href="javaScript:;" class="logo">
					<img src="/static/images/logo.png" alt="logo">
				</a>
				<div class="search">
					<i class="iconfont icon-sousuo"></i>
					<span @click="$router.push('/hotfind')">搜索商品，共21615款好物</span>
				</div>
				<button class="login" @click="$router.push('/personal')">登录</button>
			</div>
			<div class="tabWrapper" ref="homeNav">
				<ul class="nav" v-show="!isShow" >
					<li class="active">推荐</li>
					<li>居家生活</li>
					<li>服饰鞋包</li>
					<li>美食酒水</li>
					<li>个人清洁</li>
					<li>母婴亲子</li>
					<li>运动旅行</li>
					<li>数码家电</li>
					<li>全球特色</li>
				</ul>
				<div class="all" v-show="isShow">全部频道</div>
				<ul class="allList" v-show="isShow">
					<li class="active">推荐</li>
					<li>居家生活</li>
					<li>服饰鞋包</li>
					<li>美食酒水</li>
					<li>个人清洁</li>
					<li>母婴亲子</li>
					<li>运动旅行</li>
					<li>数码家电</li>
					<li>全球特色</li>
				</ul>
				<div class="more" :class="{on:isShow}" @click="isShow = !isShow">
						<div class="icon"><i class="iconfont icon-jiantou-copy-copy"></i> </div> 
				</div>
			</div>  
		</div>
		<div class="mask"  v-show="isShow"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
  export default {
		data () {
			return {
				isShow:false // 是否点击了小箭头，显示全部频道
			}
		},
		mounted () {
			this.$nextTick(()=>{
        new BScroll(this.$refs.homeNav,{
          click:true,
          scrollX:true,
          scrollY:false
        })
      })
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.home_header
		width 100%
		position fixed
		top 0px
		left 0px
		background #ffffff
		z-index 99      
		padding 2px 2px
		.header
			width 100%
			display flex
			justify-content space-around
			align-items center
			margin 5px 0px
			.logo
				width 70px
				height 20px
				img 
					width 70px
					height 20px
			.search
				padding 5px 15px
				height 20px
				font-size 14px
				color #666
				line-height 20px
				background #eeeeee
				border-radius 4px
				.icon-sousuo
					font-weight bold
			.login
				height 20px
				line-height 16px
				font-size 12px
				color #b4282d
				border 1px solid #b4282d
				border-radius 4px
				background-color transparent
				padding 2px 5px
		.tabWrapper
			display flex
			width 100%
			.nav
				display flex
				padding-right 50px
				li
					white-space nowrap
					line-height 30px
					font-size 14px
					color #333
					padding 0 8px
					margin-left 10px
					border-bottom 2px solid rgba(0,0,0,0)
					&.active
						color #b4282d
						border-color #b4282d
			.all
				padding-left 10px
				font-size 14px
				color #333
				height 32px
				line-height: 32px;
			.allList
				background #fff
				position: absolute;
				top: 75px;
				left: 0px;
				display flex
				flex-wrap wrap
				li
					width 75px
					height 28px
					line-height 28px
					text-align center
					border 1px solid #CCC
					font-size 12px
					margin-left 15px
					margin-bottom 10px
					background: #FAFAFA;
					&.active
						border-color #b4282d
						color #b4282d
			.more
				position absolute
				right 0px
				top 40px
				width 60px
				height 30px
				background #fff
				text-align center
				.icon
					line-height 30px
					transition all 0.5s
				&.on
					.icon
						transform rotate(180deg)       
  .mask
		position: fixed
		z-index: 1
		top: 0
		left: 0
		right: 0
		bottom: 0
		background rgba(0,0,0,.5)
</style>
