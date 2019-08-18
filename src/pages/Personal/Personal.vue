<template>
  <div class="loginWrap">
    <div class="login_header">
      <div class="header">
        <i class="iconfont icon-shouye1"></i>
        <div class="find">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
    </div>
    <!-- 登陆的首页 -->
    <div class="login" v-show="isLoginMain">
      <div class="loginImg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btn">
        <button class="phone on">
          <i class="iconfont icon-shouji"></i>
          手机号快捷登录
        </button>
        <button class="emil">
          <i class="iconfont icon-duanxin"></i>
          邮箱账号登录
        </button>
      </div>
    </div>
    <!-- 手机号登录 -->
    <div class="loginPhone" v-show="isLoginByPhone">
      <div class="image">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form class="form">
        <input type="text" placeholder="请输入手机号">
        <i class="iconfont icon-quxiao"></i>
        <div class="inp_btn">
          <input type="text" placeholder="请输入短信验证码">
          <button class="code">获取验证码</button>
        </div>
        <div class="problem">
          <span class="left">遇到问题？</span>
          <span class="right">使用验证码登录</span>
        </div>
        <button class="btnLogin">登录</button>
      </form>
      <div class="checkbox">
        <input type="checkbox">
        <div class="agreement">
          <span>我同意</span>
          <a href="javascript:;">《服务条款》</a>
          <span>和</span>
          <a href="javascript:;">《网易隐私政策》</a>
        </div>
      </div>
      <div class="other">
        其他登录方式>
      </div>
    </div>
    <!-- 邮箱登录 -->
    <div class="loginEmil" v-show="isLoginByEmil">
      <div class="image">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form class="form">
        <input type="text" placeholder="邮箱账号">
        <i class="iconfont icon-quxiao quxiao1"></i>
        <div class="inp_btn">
          <input type="password" placeholder="密码">
          <i class="iconfont icon-quxiao quxiao2"></i>
        </div>
        <div class="problem">
          <span class="left">注册账号</span>
          <span class="right">忘记密码</span>
        </div>
        <button class="btnLogin">登录</button>
      </form>
      <div class="other">
        其他登录方式>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isLoginMain:true,  //是否显示登陆的首页
        isLoginByPhone:false,
        isLoginByEmil:false
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
    .loginEmil
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
</style>
