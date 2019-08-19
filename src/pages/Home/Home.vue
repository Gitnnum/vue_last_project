<template>
  <div id="homeContainer">
    <div class="home_header">
      <div class="header">
        <a href="javaScript:;" class="logo">
          <img src="/static/images/logo.png" alt="logo">
        </a>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共21615款好物</span>
        </div>
        <button class="login">登录</button>
      </div>
      <div class="tabWrapper" ref="homeNav">
        <ul class="nav" v-show="!isShow" >
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个人清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
        <div class="all" v-show="isShow">全部频道</div>
        <ul class="allList" v-show="isShow">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个人清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
        <div class="more" :class="{on:isShow}" @click="isShow = !isShow">
            <div class="icon"><i class="iconfont icon-jiantou-copy-copy"></i> </div> 
        </div>
      </div>  
    </div>
    <div class="mask" v-show="isShow"></div>
    
    <BannerLoop/>
    <ul class="advantage">
      <li>
        <i class="iconfont icon-dunpai1"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-qianfenleishouye"></i>
        <span>48小时快速退货</span>
      </li>
    </ul>
    <div class="content">
      <First/>

      <!-- 私人定制 -->
      <Dingzhi/>

      <!-- 限时购 -->
      <TimeLimited/>

      <!-- 新品首发 -->
      <NewGoods></NewGoods>

      <!-- 人气推荐 -->
      <Popular/>

      <!-- 类目热销榜 -->
      <Hot/>

      <!-- 品牌商制造商直供 -->
      <Production/>

      <!-- 专题精选 -->
      <Topics/>

      <!-- 众筹 -->
      <ZhongChou/>

      <!-- 分类滑动模块 -->
      <div class="categoryWrap">
        <CategoryModule ></CategoryModule>
        <CategoryModule ></CategoryModule>
        <CategoryModule ></CategoryModule>
        <CategoryModule ></CategoryModule>
      </div>
    </div>
    <!-- 右侧固定定位 -->
    <a  class="gift"href="javaScript:;">
      <i class="iconfont icon-lipin"></i>
    </a>
    <div class="arrow">
      <i class="iconfont icon-jiantouxiangshang" ></i>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="top">
        <div class="phone">下载APP</div>
        <div class="pc">电脑版</div>
      </div>
      <p>网易公司版权所有 © 1997-2019</p>
      <P>食品经营许可证：JY13301080111719</P>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BannerLoop from './components/BannerLoop/BannerLoop'
  import First from './components/First/First'
  import Dingzhi from './components/Dingzhi/Dingzhi'
  import TimeLimited from './components/TimeLimited/TimeLimited'
  import NewGoods from './components/NewGoods/NewGoods'
  import Popular from './components/Popular/Popular'
  import Hot from './components/Hot/Hot'
  import Production from './components/Production/Production'
  import Topics from './components/Topics/Topics'
  import ZhongChou from './components/ZhongChou/ZhongChou'
  import CategoryModule from './components/CategoryModule/CategoryModule'
  

  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'    
  export default {
    data () {
      return {
        isShow: false
      }
    },
    components:{
      BannerLoop,
      First,
      Dingzhi,
      TimeLimited,
      NewGoods,
      Popular,
      Hot,
      Topics,
      ZhongChou,
      CategoryModule,
      Production
    },
    mounted () {
      this.$nextTick(()=>{
        // var mySwiper = new Swiper ('.swiper-container', {
        //   loop: true, // 循环模式选项
          
        //   // 如果需要分页器
        //   pagination: {
        //     el: '.swiper-pagination',
        //   }
        // })
        new BScroll(this.$refs.homeNav,{
          click:true,
          scrollX:true,
          scrollY:false
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeContainer
    padding-bottom 50px
    .home_header
      width 100%
      position fixed
      top 0px
      left 0px
      background #ffffff
      z-index 99      
      padding 2px 2px
      .header
        width 100%
        display flex
        justify-content space-around
        align-items center
        margin 5px 0px
        .logo
          width 70px
          height 20px
          img 
            width 70px
            height 20px
        .search
          padding 5px 15px
          height 20px
          font-size 14px
          color #666
          line-height 20px
          background #eeeeee
          border-radius 4px
          .icon-sousuo
            font-weight bold
        .login
          height 20px
          line-height 16px
          font-size 12px
          color #b4282d
          border 1px solid #b4282d
          border-radius 4px
          background-color transparent
          padding 2px 5px
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
        .all
          padding-left 10px
          font-size 14px
          color #333
          height 32px
          line-height: 32px;
        .allList
          background #fff
          position: absolute;
          top: 75px;
          left: 0px;
          display flex
          flex-wrap wrap
          li
            width 75px
            height 28px
            line-height 28px
            text-align center
            border 1px solid #CCC
            font-size 12px
            margin-left 15px
            margin-bottom 10px
            background: #FAFAFA;
            &.active
              border-color #b4282d
              color #b4282d
        .more
          position absolute
          right 0px
          top 40px
          width 60px
          height 30px
          background #fff
          text-align center
          .icon
            transition all 0.5s
          &.on
            .icon
              transform rotate(180deg)       
    .mask
      position: fixed;
      z-index: 1
      top: 0
      left: 0
      right: 0
      bottom: 0
      background rgba(0,0,0,.5)
    .advantage
      display flex
      padding 10px
      li
        width 33.3%
        font-size 12px
        text-align center
        .iconfont
          color #b4282d
          vertical-align middle
        span 
          color #333
          vertical-align middle
    .content
      width 100%
      background #eee   
    .gift
      position: fixed;
      right: 0;
      bottom: 110px;
      display: block;
      width 60px
      height 40px
      background #fff
      border-radius 20px 0px 0px 20px
      z-index: 10;
      text-align center
      line-height 40px
      .icon-lipin
        color red
        font-size 28px
    .arrow
      position: fixed;
      right: .5rem;
      bottom: 60px;
      width 41px
      height 41px
      text-align center
      line-height 34px
      background #fff
      border-radius 50%
      .icon-jiantouxiangshang
        width: 1.09333rem;
        height: 1.09333rem;
    .footer
      width 100%
      height 120px
      background #414141
      .top
        display flex
        justify-content center
        padding 20px 0px
        div
          font-size 12px
          text-align center
          line-height 34px
          width 90px
          height 30px
          border: 1px solid #999;
          color: #fff;
          background-color: transparent
          margin-right 25px
      p
        text-align center
        font-size: 12px;
        line-height: 20px;
        color: #999;
</style>
