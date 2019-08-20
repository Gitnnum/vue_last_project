<template>
	<div class="topics">
		<div class="title">
			<span>专题精选</span>
			<span class="more">更多></span>
		</div>
		<div class="container" ref="container" >
			<ul class="topicList" >
				<li class="topicItem" v-for="(item,index) in topicList" :key="index" >
					<a href="javascript:;">
						<img :src="item.itemPicUrl" alt="">
					</a>
					<div class="info">
						<h4>{{item.title}}</h4>
					</div>
					<p>{{item.subtitle}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	import { mapGetters } from 'vuex'
  export default {
		computed:{
			...mapGetters(['topicList'])
		},
		watch:{
			topicList () {
				this.$nextTick(()=>{
					new BScroll(this.$refs.container,{
						click:true,
						scrollX:true,
						scrollY:false
					})
				})
			} 
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
