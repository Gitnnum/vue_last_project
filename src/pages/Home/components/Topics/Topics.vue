<template>
	<div class="topics">
		<div class="title">
			<span>专题精选</span>
			<span class="more">更多></span>
		</div>
		<div class="container" ref="container" >
			<ul class="topicList" >
				<li class="topicItem">
					<a href="javascript:;">
						<img src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
					</a>
					<div class="info">
						<h4>直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</h4>
					</div>
					<p>女士精选礼物大赏</p>
				</li>
				<li class="topicItem">
					<a href="javascript:;">
						<img src="https://yanxuan.nosdn.127.net/bd2b2c7a026a9b1e00d2bae2907789c1.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
					</a>
					<div class="info">
						<h4>直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</h4>
					</div>  
					<p>女士精选礼物大赏</p>
				</li>
				<li class="topicItem">
					<a href="javascript:;">
						<img src="https://yanxuan.nosdn.127.net/3da981b031a4db90e21e54147a5fb863.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
					</a>
					<div class="info">
						<h4>每天在用的纸巾, 你会留意原料吗？原生木浆纸巾更安全~</h4>
					</div>
					<p>无需比对品质，只用挑选规格</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
  export default {
		mounted () {
			this.$nextTick(()=>{
				new BScroll(this.$refs.container,{
					click:true,
					scrollX:true,
					scrollY:false
				})
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.topics
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
		.container
			display flex
			width 100%
			overflow hidden
			.topicList
				display flex
				height 190px
				.topicItem
					width 240px
					margin-right 15px
					background: #F5F5F5;
					a
						width 100%
						height 133px
						img
							width 100%
							height 133px
					.info
						width 240px
						padding 4px
						h4
							white-space nowrap
							overflow hidden
							text-overflow ellipsis
							font-size 14px
							color #333
					p
						padding 4px
						font-size 12px
						color #7F7F7F

 
</style>
