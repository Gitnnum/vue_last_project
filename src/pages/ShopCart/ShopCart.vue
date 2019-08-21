<template>
  <div class="cartContainer">
    <div class="cart_header"> 
      <p class="left">购物车</p>
      <p class="right">领券</p>
    </div>
    <ul class="list">
      <li>
        <span>。</span>
        <span>30天无忧退货</span>
      </li>
      <li>
        <span>。</span>
        <span>48小时快速退款</span>
      </li>
      <li>
        <span>。</span>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="img">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <p>去添加点儿神魔吧</p>
    </div>
    <button class="btn" @click="$router.replace('/personal')">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartContainer
    width 100%
    height 100%
    background #eee
    .cart_header
      padding 0 20px
      height 50px
      display flex
      justify-content space-between
      align-items center
      background #ffffff
      .left
        font-size 18px
        color #333
      .right
        font-size 15px
        color #B4282D
    .list
      display flex
      background #eee
      padding 8px
      li
        width 33%
        font-size 12px
        color #666
        display flex
        justify-content center
        align-items center
        span 
          &:last-child
            padding-top 7px
    .img
      position absolute
      top 270px
      left 130px
      width 124px
      height 124px
      p
        font-size 14px
        color #999
      img 
        width 100%
        height 100%
    .btn
      position absolute
      bottom 206px
      left 36px
      width 300px
      height 42px
      background #b4282d
      border-radius 4px
      margin 0 auto
      color #ffffff
      font-size 14px
      border none 
</style>
