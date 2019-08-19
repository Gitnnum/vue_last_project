<template>
  <div class="searchContainer">
    <div class="seaech_header">
      <div class="header">
        <i class="iconfont icon-shouye1"></i>
        <div class="find">
          <span class="on">发现</span>
          <span>甄选家</span>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo" @click="$router.push('/hotfind')"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="tabWrapper" ref="searchNav">
        <ul class="nav" >
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
    <!-- 盛夏特别版图片 -->
    <div v-if="false">
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
    <!-- 推荐 -->
    <div class="content">
      <div class="first">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </a>
      </div>
      <!-- 模板一 -->
      <div class="second">
        <div class="user">
          <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
          <p>选美</p>
        </div>
        <div class="info">
          夏凉拖鞋捡漏啦！人字拖、软木拖、穆勒鞋……最低5折！
        </div>
        <div class="img">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/4268aea8303aff2e998e1367d72fc82d.jpg?imageView&quality=65&thumbnail=690y376" alt="">
          </a>
        </div>
        <div class="watch">
          <i class="iconfont icon-shouji"></i>
          <p><span>53.5k</span>人看过</p>
        </div>
      </div>
      <!-- 模板二 -->
      <div class="third">
        <div class="left">
          <div class="user">
            <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
            <p>选美</p>
          </div>
          <div class="info">
            我可以擦厨房，但从不洗抹布
          </div>
          <div class="info2">
            本色抑菌懒人抹布限时6.6折
          </div>
          <div class="watch">
            <i class="iconfont icon-shouji"></i>
            <p><span>53.5k</span>人看过</p>
          </div>
        </div>
        <div class="right">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/dfb45f7fb44232989b7094e8be4a8dd3.jpg?imageView&quality=65&thumbnail=272y272" alt="">
          </a>
        </div>
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
  .searchContainer
    width 100%
    background #eee
    .seaech_header
      width 100%
      position fixed
      top 0px
      left 0px
      background #fafafa
      z-index 99      
      padding 2px 2px
      .header
        width 100%
        display flex
        justify-content space-around
        align-items center
        margin 10px 0px
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
      .third
        padding 15px 15px
        background #ffffff
        box-sizing: border-box
        margin-top 10px
        display flex
        .left
          width 200px
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
          .info
            margin 10px 0px
            line-height 25px
            font-size 18px
            color #333
          .info2
            font-size 14px
            color #7f7f7f
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
        .right
          margin-left 10px
          width 136px
          height 136px
          img 
            width 100%
            height 100%
            border-radius 4px
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
