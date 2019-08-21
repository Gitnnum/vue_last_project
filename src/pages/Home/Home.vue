<template>
  <div id="homeContainer">
    <!-- 头部在非路由组建里 -->
    <HomeHeader ref="maskIsShow"></HomeHeader>
    <!-- 轮播 -->
    <BannerLoop/>
    <!-- 服务策略  -->
    <ul class="advantage">
      <li v-for="(policyDesc,index) in policyDescList" :key="index">
        <i class="iconfont icon-dunpai1"></i>
        <span>{{policyDesc.desc}}</span>
      </li>
    </ul>
    <div class="content">
      <!-- 私人定制之上的结构 -->
      <First/>

      <!-- 私人定制 -->
      <Dingzhi/>

      <!-- 限时购 -->
      <keep-alive>
         <TimeLimited/>
      </keep-alive>

      <!-- 新品首发 -->
      <NewGoods></NewGoods>

      <!-- 人气推荐 -->
      <Popular/>

      <!-- 类目热销榜 -->
      <Hot/>

      <!-- 品牌商制造商直供 -->
      <!-- <Production/> -->

      <!-- 专题精选 -->
      <Topics/>

      <!-- 众筹 -->
      <ZhongChou/>

      <!-- 分类滑动模块 -->
      <div class="categoryWrap">
        <CategoryModule v-for="(categoryModuleItem,index) in categoryModule" :key="index" :categoryModuleItem='categoryModuleItem' :index='index'></CategoryModule>
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
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  

  
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css' 
  import { mapState } from 'vuex'   
  export default {
    data () {
      return {
        currentIndex:0 // 存储当前的导航index值
      }
    },
    mounted () {
      // 分发获取home的mock数据请求
      this.$store.dispatch('getHome')
    },
    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      }),
      kingKongModule () {
        if(this.homeData){
          return this.homeData.kingKongModule
        }
      },
      //服务策略
      policyDescList () {
        if(this.homeData){
         return this.homeData.policyDescList
        }
      },
      //最后的一个模板，大图加滑动列表categoryModule
      categoryModule () {
        if(this.homeData){
          return this.homeData.categoryModule
        }
      }
    },
    components:{  // 注册组件
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
      Production,
      HomeHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeContainer
    padding-bottom 50px
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
