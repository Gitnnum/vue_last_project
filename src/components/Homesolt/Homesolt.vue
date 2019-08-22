<template>
  <div class="headerWrap">
		<div class="header">
			<i class="iconfont icon-shouye1" @click="$router.replace('/home')"></i>
			<div class="find">
				<!-- <span :class="{on: new RegExp('/search/topic').test($route.path)}" >
				<router-link to="/search/topic/0">发现</router-link>
				</span> -->
				<!-- <span :class="{on:$route.path === '/search/expert'}">
				<router-link to="/search/expert">甄选家</router-link>
				</span> -->
				<slot name="wangyitupian"></slot>
				<slot name="faxian"></slot>
				<slot name="zhenxuanjia"></slot>
			</div>
			<div class="right">
				<i class="iconfont icon-sousuo" @click="$router.push('/hotfind')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/shopcart')"></i>
			</div>
		</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerWrap
	.header
		width 100%
		display flex
		justify-content space-around
		align-items center
		.iconfont
			font-size 28px
		.find
			width 100px
			height 50px
			img  
				width 86px
				height 27px
				padding-top 14px
			span 
				font-size 14px
				line-height 50px
				&.on
					a
						font-size 20px
						color #b4282d
						font-weight bold
</style>
