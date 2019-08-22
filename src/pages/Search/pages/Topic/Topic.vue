<template>
	<div class="contentWrap" ref="contentWrap">
		<div class="content">
		<div class="first">
			<a href="javascript:;">
				<img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
			</a>
		</div>
		
		<div v-for="(item,index) in recManual" :key="index">
			<div class="second" v-for="(user,index) in item.topics" :key="index">
				<div class="user">
					<img :src="user.avatar" alt="">
					<p>{{user.nickname}}</p>
				</div>
				<!-- 模板一 -->
				<div class="moduone" v-show="user.type === 0">
					<div class="info">
						{{user.title}}
					</div>
					<div class="img">
						<a href="javascript:;">
							<img :src="user.picUrl" v-lazy="user.picUrl" alt="">
						</a>
					</div>
					<div class="watch">
						<i class="iconfont icon-shouji"></i>
						<p><span>{{user.readCount}}</span>人看过</p>
					</div>
				</div>
				<!-- 模板二 -->
				<div class="modutwo" v-show="user.type === 2">
					<div class="info">
						{{user.title}}
					</div>
					<div class="info2">
						{{user.subTitle}}
					</div>
					<div class="watch">
						<i class="iconfont icon-shouji"></i>
						<p><span>{{user.readCount}}</span>人看过</p>
					</div>
					<div class="right">
						<a href="javascript:;">
							<img :src="user.picUrl"  v-lazy="user.picUrl" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- 新增加 -->
		<div v-for="(item,nindex) in recommment.result" :key="nindex+Date.now()">
			<div class="second" v-for="(user,lindex) in item.topics" :key="lindex-2+Date.now()+Date.now()">
				<div class="user">
					<img :src="user.avatar"  v-lazy="user.avatar"alt="">
					<p>{{user.nickname}}</p>
				</div>
				<!-- 模板一 -->
				<div class="moduone" v-show="user.type === 0">
					<div class="info">
						{{user.title}}
					</div>
					<div class="img">
						<a href="javascript:;">
							<img  v-lazy="user.picUrl" :src="user.picUrl" alt="">
						</a>
					</div>
					<div class="watch">
						<i class="iconfont icon-shouji"></i>
						<p><span>{{user.readCount}}</span>人看过</p>
					</div>
				</div>
				<!-- 模板二 -->
				<div class="modutwo" v-show="user.type === 2">
					<div class="info">
						{{user.title}}
					</div>
					<div class="info2">
						{{user.subTitle}}
					</div>
					<div class="watch">
						<i class="iconfont icon-shouji"></i>
						<p><span>{{user.readCount}}</span>人看过</p>
					</div>
					<div class="right">
						<a href="javascript:;">
							<img :src="user.picUrl" v-lazy="user.picUrl"alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
  export default {
		data () {
			return {
				showPage:1//一开始默认只获取第一页的数据
			}
		},
		computed:{
			...mapState({
				recommment: state => state.searchthing.recommment,//用来收集更多的数据信息存储
				recManual: state => state.searchthing.recManual//初始数据
			}),
		},
		async mounted () {
			this.$nextTick(()=>{
				try {
					if(this.myScroll){
						this.myScroll.refresh()
					}else{
						this.myScroll = new BScroll(this.$refs.contentWrap,{
							click:true,
							scrollX:false,
							scrollY:true,
							bounce:false,//当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
							pullUpLoad:true,//这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
							probeType:2//此时不需要计算惯性的滑动，但是要实时
							// 有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
							// 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
							// 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
							// 如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
						})
					//pullingUp   
								//参数：无
								//触发时机：在一次上拉加载的动作后，这个时机一般用来去后端请求数据。
						this.myScroll.on('pullingUp',() =>{
							this.showPage++
							this.$store.dispatch('getRecomment',{page:this.showPage,size:5})
							this.myScroll.finishPullUp();    // 可以多次执行上拉刷新
						})
					}
					}catch(e){
						console.log(e)
					}
			})

		await this.$store.dispatch('getRecManual')
		await this.$store.dispatch('getRecomment',{page:1,size:5})	
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.contentWrap
		height 667px
		.content
			background #eee
			padding-top 81px
			padding-bottom 50px
			.first
				width 100%
				height 224px
				padding 15px
				box-sizing: border-box;
				background #ffffff
				img 
					width 345px
					height 188px
					border-radius 8px
			.second
				padding 15px 15px
				background #ffffff
				box-sizing: border-box
				margin-top 10px
				.user
					display flex
					align-items center
					img 
						width 28px
						height 28px
						border-radius 50%
						margin-right 5px
					p
						font-size 14px
						color #333
				.moduone
					.info
						margin 10px 0px
						line-height 25px
						font-size 18px
						color #333
					.img
						width 100%
						height 188px
						img 
							width 100%
							height 100%
							border-radius 8px
					.watch
						margin-top 10px
						display flex
						align-items center
						.icon-yanjing
							width 10px
							font-size 14px
							margin-right 10px
						p
							font-size 11px
							color #999
				.modutwo
					margin-bottom -124px
					.info
						margin 10px 0px
						line-height 25px
						font-size 18px
						color #333
						width 50%
					.info2
						font-size 14px
						color #7f7f7f
						width 50%
					.watch
						margin-top 10px
						display flex
						align-items center
						width 50%
						.icon-yanjing
							width 10px
							font-size 14px
							margin-right 10px
						p
							font-size 11px
							color #999
					.right
						position relative
						top -120px
						right -190px
						margin-left 10px
						width 136px
						height 136px
						img 
							width 100%
							height 100%
							border-radius 4px
				
		
 
</style>
