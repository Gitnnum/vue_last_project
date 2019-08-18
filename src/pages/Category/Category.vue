<template>
  <div class="categoryContainer">
      <div class="categpryHeader">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共21615款好物</span>
      </div>
      <div class="line"></div>
      <div class="bottom">
        <div class="nav">
          <ul class="navList">
            <li class="active">推荐专区</li>
            <li>夏凉专区</li>
            <li>爆品专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>全球特色</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
          </ul>
        </div>
        <div class="content">
          <div class="img">
            <a href="javaScript:;">
              <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
            </a>
          </div>
          <ul class="list">
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>员工精选好货</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    padding-top 10px
    .categpryHeader
      background #ededed
      width 90%
      margin 0 auto
      font-size 14px
      color #666
      text-align center
      border-radius 4px
      padding 5px 0
      .icon-sousuo
        font-size 20px
        vertical-align middle
    .line
      height 1px
      width 100%
      background #d9d9d9
      margin 10px 0
    .bottom
      display flex
      width 100%
      .nav
        padding 20px 0
        height 100%
        width 25%
        .navList
          font-size 14px
          li
            position relative
            padding 5px 0
            margin-top 20px
            width 100%
            text-align center
            border-left 2px sliod #f40
            &:first-child
              margin-top 0px
            &.active
              color #ab2b2b
              &::before
                content: ' ';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 3px;
                background-color: #ab2b2b;
      .content
        padding-right 20px
        width 75%
        .img
          width 100%
          height 100px
          img 
            width 100%
            height 100px
        .list
          display flex
          flex-wrap wrap
          li
            width 72px
            margin-right 10px
            margin-left 5px
            img 
              width 72px
              height 72px
            span 
              font-size 12px
              color #333
</style>
