<template>
  <div class="hotFindContainer">
      <div class="header">
				<div class="find">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" placeholder="硅藻土浴室地垫 直降29元" v-model="keywordPrefix" @keyup="toFind">
				</div>
				<span class="quxiao" @click="$router.back()">取消</span>
				<div class="result_show" v-show="keywordPrefix" >
					<ul>
						<li v-for="(item, index) in hotWords" :key="index">
							{{item}}
						</li>
					</ul>
      	</div>
      </div>
      <div class="findlist">
				<span class="title">热门搜索</span>
				<ul class="nav">
						<li class="navItem" v-for="(item,index) in hotInit" :key="index">{{item.keyword}}</li>
				</ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
	import {mapState} from 'vuex'
	import test from 'loadsh'
  export default {
		data () {
			return {
				keywordPrefix:''
			}
		},
		mounted () {
			this.$store.dispatch('getHotInit')
		},
		computed:{
			...mapState({
				hotWords: state => state.hotfind.hotWords
			}),
			...mapState({
				hotInit: state => state.hotfind.hotInit
			})
		},
		methods:{
			// 防抖loadsh库
			// toFind(){
			// 	test.debounce(()=> {
			// 		if(this.keywordPrefix){
			// 			this.$store.dispatch('getHotWords',this.keywordPrefix)
			// 		}
			// 	},500).call(this)
			// },
			toFind(){
				this.debounce(()=> {
					if(this.keywordPrefix){
						this.$store.dispatch('getHotWords',this.keywordPrefix)
					}
				},500)()
			},
			//封装一个防抖的函数 debounce
			debounce (callback,delay) {
				return function () {
					const that = this
					const arg = arguments
					if(callback.timerId ){
						clearTimeout(callback.timerId)
					}
					callback.timerId = setTimeout(()=>{
						callback.apply(that,arg)
						delete callback.timerId 
					},delay)
				}
			}
			// toFind () {
			// 	if(this.keywordPrefix){
			//  		this.$store.dispatch('getHotWords',this.keywordPrefix)
			//  	}
			// }
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.hotFindContainer
		background #eeeeee
		padding 0 20px
		.header
			height 45px
			display flex
			align-items center
			justify-content space-around
			position relative
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
			.result_show
				position absolute
				top 44px
				left 0px
				width 100%
				background #ffffff
				ul
					width 100%
					li
						padding-left 20px
						width 90%
						height 40px
						border-bottom 1px solid #eee
						line-height 40px
						color #666
						font-size 14px
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
					margin-right: .22667rem;
					margin-bottom: .12667rem;
					line-height: .31333rem;
					border: 1px solid #999;
					border-radius: 3px;
					&.on
						border: 1px solid red;
</style>
