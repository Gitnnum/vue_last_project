<template>
<div class="loginWrap">
	<div class="login_header">
		<div class="header">
			<i class="iconfont icon-shouye1" @click="$router.replace('/home')"></i>
			<div class="find">
				<img src="/static/images/logo.png" alt="">
			</div>
			<div class="right">
				<i class="iconfont icon-sousuo" @click="$router.push('/hotfind')"></i>
				<i class="iconfont icon-gouwuche" @click="$router.replace('/shopcart')"></i>
			</div>
		</div>
	</div>
	<div class="loginPhone">
		<div class="image">
			<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
		</div>
		<form class="form">
			<input type="text" placeholder="请输入手机号" v-model="phoneNum">
			<i class="iconfont icon-quxiao" v-show="phoneNum" @click="clearUserInput"></i>
			<div class="inp_btn">
				<input type="text" placeholder="请输入短信验证码" v-model="checkCode">
				<button class="code">获取验证码</button>
			</div>
			<div class="problem">
				<span class="left">遇到问题？</span>
				<span class="right">使用验证码登录</span>
			</div>
			<button class="btnLogin">登录</button>
		</form>
		<div class="checkbox">
			<input type="checkbox" checked="checked">
			<div class="agreement">
				<span>我同意</span>
				<a href="javascript:;">《服务条款》</a>
				<span>和</span>
				<a href="javascript:;">《网易隐私政策》</a>
			</div>
		</div>
		<div class="other" @click="$router.replace('/personal')">
			其他登录方式>
		</div>
		<div class="err">
				<p>{{error_phone}}</p>
				<p>{{error_code}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
		data () {
			return {
				phoneNum:'',
				checkCode:'',//登录手机验证码
				error_phone:'',// 手机格式验证
				error_code:'',// 验证码格式验证
			}
		},
		methods:{
      clearUserInput () {
        this.phoneNum=""
      }
    },
		watch:{
			phoneNum: function(newValue){
				if(!/^1[3-9][0-9]{9}$/.test(newValue)){
					this.error_phone = '请输入正确的手机号'
				}else{
					this.error_phone = ''
				}
			},
			checkCode: function(newValue){
				if(!/^[0-9]{4,6}/.test(newValue)){
					this.error_code = '请输入4止6位的验证码'
				}else{
					this.error_code = ''
				}
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginWrap
	width 100%
	height 100%
	background #ffffff
	.login_header
		.header
			padding 0 10px
			height 50px
			background #fafafa
			display flex
			justify-content space-between
			align-items center
			.iconfont
				font-size 28px
			.find
				img  
					width 86px
					height 27px
	.loginPhone
		padding-bottom 250px
		.image
			padding-top 40px
			height 32px
			text-align center
			img 
				width 96px
				height 32px
		.form
			position relative
			margin-top 10px
			padding 0 20px
			.icon-quxiao
				position absolute
				top 20px 
				right 40px
				font-size 16px
				color #666
			input
				width 90%
				margin 14px 0
				padding 5px 10px
				border-bottom 1px solid #eee
				font-size 15px
				color #666
				&::-webkit-input-placeholder
					font-size 15px
			.inp_btn
				position relative
				.code
					position absolute
					top 14px
					right 25px
					font-size 14px
					color #333
					background transparent
					border 1px solid #eee
					border-radius 2px
			.problem
				font-size 15px
				color #333
				display flex
				padding 0 10px
				justify-content space-between
				margin 15px 0
				.left
					color #7f7f7f
			.btnLogin
				width 100%
				height 45px
				background #DD1A21
				color #fff
				border none 
				border-radius 5px
		.checkbox
			margin-top 20px
			display flex
			padding 0 20px
			input
				width 18px
				height 18px
				margin-right 10px
			.agreement
				line-height 18px
				font-size 12px
				span 
					color #7f7f7f
				a
					color #007AFF
		.other
			margin-top 20px
			text-align center
			font-size 14px
			color #333
		.err
			padding-left 136px
			padding-top 40px
			color red
			font-size 14px
			p
				padding-top 10px
    
 
</style>
