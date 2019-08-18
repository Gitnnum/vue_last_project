<template>
  <footer class="footer">
    <a href="javascript:;" @click="$router.replace('/home')" :class="{on:$route.path === '/home'}">
      <i class="iconfont icon-shouye1"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/category')" :class="{on:$route.path === '/category'}">
      <i class="iconfont icon-icon"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" @click="$router.replace('/search')" :class="{on:$route.path === '/search'}">
      <i class="iconfont icon-tupian"></i>
      <span>
        识物
      </span>
    </a>
    <a href="javascript:;" @click="$router.replace('/shopCart')" :class="{on:$route.path === '/shopCart'}">
      <i class="iconfont icon-gouwuche"></i>
      <span>
        购物车
      </span>
    </a>
    <a href="javascript:;" @click="$router.replace('/personal')" :class="{on:$route.path === '/personal'}">
      <i class="iconfont icon-geren"></i>
      <span>
        个人
      </span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    display flex
    z-index 99
    background #ffffff
    a 
      width 20%
      text-align center
      display flex
      flex-direction column
      align-items center
      justify-content center
      .iconfont
        font-size 20px
        margin-bottom 5px
      span 
        font-size 14px
      &.on
        color #b4282d
</style>
