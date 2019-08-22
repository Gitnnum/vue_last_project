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
		<div class="loginEmil" >
			<div class="image">
				<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
			</div>
			<form class="form">
				<input type="text" placeholder="邮箱账号" v-model="emilNum">
				<i class="iconfont icon-quxiao quxiao1" v-show="emilNum" @click="clearUserInputEml"></i>
				<div class="inp_btn">
					<input type="password" placeholder="密码" v-model="emilPwd">
					<i class="iconfont icon-quxiao quxiao2" v-show="emilPwd" @click="clearUserInputPwd"></i>
				</div>
				<div class="problem">
					<span class="left" >注意问题</span>
					<span class="right">忘记密码</span>
				</div>
				<button class="btnLogin">登录</button>
			</form>
			<div class="other" @click="$router.replace('/personal')">
				其他登录方式>
			</div>
			<div class="err">
				<p>{{error_emil}}</p>
				<p>{{error_pwd}}</p>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
		data () {
			return {
				emilNum:'',
				emilPwd:'',
				error_emil:'',// 邮箱格式验证
				error_pwd:'',// 密码格式验证
			}
		},
		methods:{
      clearUserInputEml () {
        this.emilNum=""
			},
			clearUserInputPwd () {
				this.emilPwd=""
			}
    },
		watch:{
			emilNum: function(newValue){//166923883@qq.com.cn
				if(!/^([0-9a-zA-Z\._-]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(newValue)){
					this.error_emil = '请输入正确的邮箱'
				}else{
					this.error_emil = ''
				}
			},
			emilPwd: function(newValue){
				if(!/^[0-9a-z\.-_]{8,18}/.test(newValue)){
					this.error_pwd = '请输入8止18位的字母加数字密码'
				}else{
					this.error_pwd = ''
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
			
		.loginEmil
			padding-bottom 300px
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
				.quxiao1
					position absolute
					top 20px 
					right 40px
					font-size 16px
					color #666
				.inp_btn
					.quxiao2
						position absolute
						top 76px 
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
				.problem
					font-size 15px
					color #7f7f7f
					display flex
					padding 0 10px
					justify-content space-between
					margin 15px 0
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
