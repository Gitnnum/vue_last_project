<template>
	<div class="production">
		<div class="title">
			<span>品牌商制造商直供</span>
			<span class="more">更多></span>
		</div>
		<ul class="supplier">
			<li class="item">
				<a href="javaScript:;">
					<p>海外制造商</p>
					<div class="price">
						<span>9.9</span>元起
						<span>上新</span>
					</div>
				</a>
			</li>
			<li class="item" >
				<a href="javaScript:;">
					<p>海外制造商</p>
					<div class="price">
						<span>9.9</span>元起
						<span>上新</span>
					</div>
				</a>
			</li>
			<li class="item">
				<a href="javaScript:;">
					<p>海外制造商</p>
					<div class="price">
						<span>9.9</span>元起
						<span>上新</span>
					</div>
				</a>
			</li>
			<li class="item">
				<a href="javaScript:;">
					<p>海外制造商</p>
					<div class="price">
						<span>9.9</span>元起
						<span>上新</span>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.production
		padding 0 10px
		background #fff
		margin-top 10px
		.title
			display flex
			justify-content space-between
			font-size 16px
			color #333
			height 50px
			line-height 50px
		.supplier
			display flex
			flex-wrap wrap
			.item
				width 49%
				height 130px
				background pink
				margin 0 1px 1px 0px
				text-align center
				line-height 30px
				p
					font-size 14px 
					color #333
				.price 
					font-size 12px
					color #7F7F7F
      
 
</style>
