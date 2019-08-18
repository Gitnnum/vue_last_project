<template>
  <div>
    <div class="seaech_header">
      <div class="header">
        <i class="iconfont icon-shouye1"></i>
        <div class="find">
          <span class="on">发现</span>
          <span>甄选家</span>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="tabWrapper" ref="searchNav">
        <ul class="nav" v-show="!isShow" >
          <li class="active">盛夏特别版</li>
          <li>推荐</li>
          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>
          <li>开发日记</li>
          <li>达人</li>
          <li>HOME</li>
        </ul>
      </div>  
    </div>
    <!-- 图片 -->
    <div class="one">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
      </a>
    </div>
    <div class="two">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
      </a>
    </div>
    <div class="three">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </a>
    </div>
    <div class="four">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </a>
      <div class="listWrap">
        <ul class="list">
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/15640230745743338.png?quality=95&thumbnail=130x130&imageView" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll(this.$refs.searchNav,{
        click:true,
        scrollX:true,
        scrollY:false
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .seaech_header
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
        span 
          font-size 14px
          &.on
            font-size 20px
            color #b4282d
            font-weight bold
    .tabWrapper
        display flex
        width 100%
        .nav
          display flex
          li
            white-space nowrap
            line-height 30px
            font-size 14px
            color #333
            padding 0 8px
            margin-left 10px
            border-bottom 2px solid rgba(0,0,0,0)
            &.active
              color #b4282d
              border-color #b4282d
  .one
    width 100%
    height 120px
    img 
      width 100%
  .two
    width 100%
    height 120px
    padding-bottom 52px
    img 
      width 100%
  .three
    width 100%
    height 120px
    img 
      width 100%
  .four
    width 100%
</style>
