<template>
  <div class="loginWrap">
    <div class="login_header">
      <HeaderSlot>
        <img slot="wangyitupian" src="/static/images/logo.png" alt="">
      </HeaderSlot>
    </div>
    <!-- 登陆的首页 -->
    <div class="login" v-show="isShow">
      <div class="loginImg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btn">
        <button class="phone on" @click="$router.replace('/phone')" >
          <i class="iconfont icon-shouji" ></i>
          手机号快捷登录
        </button>
        <button class="emil" @click="$router.replace('/emil')">
          <i class="iconfont icon-duanxin" ></i>
          邮箱账号登录
        </button>
        <button class="registerBtn" @click="isShow =!isShow">立即注册</button>
      </div>
    </div>
    <div class="register" v-show="!isShow">
      <div class="image">
        <p>手机注册</p>
      </div>
      <form class="form">
        <input type="text" placeholder="请输入手机号" v-model="phoneRegister">
        <i class="iconfont icon-quxiao" v-show="phoneRegister" @click="clearUserInput"></i>
        <div class="inp_btn">
          <input type="text" placeholder="请输入短信验证码" v-model="codeRegister">
          <button class="code">获取验证码</button>
        </div>
        <input type="password" placeholder="请输入密码" v-model="pwdRegister">
        <button class="btnLogin">注册</button>
      </form>
      <div class="checkbox" checked="checked">
        <input type="checkbox">
        <div class="agreement">
          <span>我同意</span>
          <a href="javascript:;">《服务条款》</a>
          <span>和</span>
          <a href="javascript:;">《网易隐私政策》</a>
        </div>
      </div>
      <div class="other">
        邮箱账号注册>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import Phone from './components/Phone/Phone'
  import Emil from './components/Emil/Emil'
  export default {
    data () {
      return {
        isShow:true,
        phoneRegister:"",
        codeRegister:'',//注册手机验证码
        pwdRegister:''// 注册密码
        // isLoginMain:true,  //是否显示登陆的首页---0
        // isLoginByPhone:false, // 是否手机登录----1
        // isLoginByEmil:false, // 是否邮箱登录------2
        // isRegister: false // 是否注册----------3
      }
    },
    methods:{
      clearUserInput () {
        this.phoneRegister=""
      }
    },
    components:{
      Phone,
      Emil
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrap
    width 100%
    height 100%
    background #ffffff     
    .login
      background #F2F5F4
      .loginImg
        position relative
        width 100%
        height 241px
        img 
          position absolute
          left 50%
          top 50%
          margin-left -67px
          margin-top -22px
          width 134px
          height 45px
      .btn
        display flex
        flex-direction column
        padding 0 20px
        .iconfont
          font-size 20px
          vertical-align middle
        .phone
          height 47px
          color #DD1A21
          background transparent
          border 1px solid  #DD1A21
          margin-bottom 20px
          &.on
            background #DD1A21
            color #ffffff
        .emil
          height 47px
          color #DD1A21
          border 1px solid #DD1A21
          background transparent
          &.on
            background #DD1A21
            color #ffffff
        .registerBtn
          margin-top 20px
          height 47px
          color #DD1A21
          border 1px solid #DD1A21
          background transparent
    .register
      padding-bottom 250px
      .image
        padding-top 40px
        height 32px
        text-align center
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
    
</style>
