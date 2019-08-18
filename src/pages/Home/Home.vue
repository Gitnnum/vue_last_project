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
      <div class="tabWrapper">
        <ul class="nav" v-show="!isShow" ref="homeNav">
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
          <i class="iconfont icon-jiantou-copy-copy"></i>
        </div>
      </div>  
    </div>
    <div class="mask" v-show="isShow"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javaScript:;">
            <img src="/static/images/banner.png" alt="banner">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

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
      <div class="first">
        <ul class="goodsCategory">
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
          <li>
            <a href="javaScript:;">
              <img src="/static/images/上新.png" alt="">
            </a>
            <span>新品首发</span>
          </li>
        </ul>
        <div class="employee">
          <a href="javaScript:;">
            <img src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif" alt="img">
          </a>
        </div>
        <div class="employeeShops">
          <div class="item">
            <a href="javaScript:;">
              <p class="one">9.9超值专区首发</p>
              <p class="two">180款爆品新定价</p>
              <div class="images">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </div>
          <div class="item">
            <a href="javaScript:;">
              <p class="one">9.9超值专区首发</p>
              <p class="two">180款爆品新定价</p>
              <div class="images">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </div>
          <div class="item">
            <a href="javaScript:;">
              <p class="one">9.9超值专区首发</p>
              <p class="two">180款爆品新定价</p>
              <div class="images">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </div>
          <div class="item">
            <a href="javaScript:;">
              <p class="one">9.9超值专区首发</p>
              <p class="two">180款爆品新定价</p>
              <div class="images">
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 私人定制 -->
      <div class="swiper-container">
        <div class="title">私人定制</div>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul class="shopList">
                <li class="shopListItem">
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>       
                  </a>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="shopList">
                <li class="shopListItem">
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>       
                  </a>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="shopList">
                <li class="shopListItem">
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>
                  </a>
                  <a href="javaScript:;">
                    <img src="/static/images/私人定制.png" alt="">
                    <div class="info">
                      <span class="words">泰国制造，镜片优选</span>
                      <span class="price">￥12</span>
                    </div>       
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 限时购 -->
      <div class="timeLimited">
        <div class="title">
          <span>限时购</span>
          <div class="time">
            <span>00</span>
            <span>:</span>
            <span>00</span>
            <span>:</span>
            <span>00</span>
          </div>
          <span class="more">更多></span>
        </div>
        <ul class="shopList">
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="price">￥12</span>
                <span class="oldPrice">￥11</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 新品首发 -->
      <div class="newGoods">
        <div class="title">
          <span>新品首发</span>
          <span class="more">更多></span>
        </div>
        <ul class="shopList">
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 人气推荐 -->
      <div class="popular">
        <div class="title">
          <span>人气推荐</span>
          <span class="more">更多></span>
        </div>
        <div class="bigItem">
          <a href="javaScript:;">
            <div class="left">
              <img src="https://yanxuan-item.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=280x280" alt="">
            </div>
            <div class="right">
              <p class="one">抄底特惠</p>
              <p class="two"><span>泰国制造 天然乳胶凉感席套装 可机洗</span></p>
              <p class="three">天然乳胶内芯，科技凉感面料</p>
              <p class="price">￥123</p>
            </div>
          </a>
        </div>
        <ul class="shopList">
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
          <li class="shopListItem">
            <a href="javaScript:;">
              <img src="/static/images/私人定制.png" alt="">
              <div class="info">
                <span class="words">泰国制造，镜片优选</span>
                <span class="price">￥12</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 类目热销榜 -->
      <div class="hot">
        <div class="title">
          <span>类目热销榜</span>
          <span class="more">更多></span>
        </div>
        <div class="top">
          <div class="hotLeft">
            <span>热销</span>榜
            <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
          <div class="goodRight">
            <span>好评</span>榜
            <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
        </div>
        <div class="bottom">
          <ul class="list">
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
            <li>
              <a href="javaScript:;">
                <p class="name">居家生活榜</p>
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 品牌商制造商直供 -->
      <div class="production">
        <div class="title">
          <span>品牌商制造商直供</span>
          <span class="more">更多></span>
        </div>
        <ul class="supplier">
          <li class="item">
            <a href="javaScript:;">
              <p>海外制造商</p>
              <div class="price">
                <span>9.9</span>元起
                <span>上新</span>
              </div>
            </a>
          </li>
          <li class="item" >
            <a href="javaScript:;">
              <p>海外制造商</p>
              <div class="price">
                <span>9.9</span>元起
                <span>上新</span>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javaScript:;">
              <p>海外制造商</p>
              <div class="price">
                <span>9.9</span>元起
                <span>上新</span>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javaScript:;">
              <p>海外制造商</p>
              <div class="price">
                <span>9.9</span>元起
                <span>上新</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'    
  export default {
    data () {
      return {
        isShow: false
      }
    },
    mounted () {
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
      console.log(this.$refs.homeNav)
      new BScroll(this.$refs.homeNav,{
        click:true,
        scrollX:true
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
          border 1px solid #b4282d
          border-radius 4px
          background-color transparent
          padding 2px 5px
      .tabWrapper
        display flex
        width 100%
        .nav
          width 90%
          display flex
          overflow hidden
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
          text-align center
          transition transform 0.5s
          &.on
            transform rotate(180deg)
    .mask
      position: fixed;
      z-index: 1
      top: 0
      left: 0
      right: 0
      bottom: 0
      background rgba(0,0,0,.5)
    .swiper-container
      padding-top 75px
      .title
        margin-top: -75px;
      .swiper-wrapper
        .swiper-slide
          a
            img 
              width 100%
              height 200px
      /deep/ .swiper-pagination-bullet
        width 20px
        height 2px
        background #ffffff
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
      .first
        background #fff
        padding-bottom 10px
        .goodsCategory
          width 100% 
          display flex
          flex-wrap wrap
          li 
            width 20%
            display flex
            flex-direction column
            align-items center
            margin 3px 0
            a
              width 100%
              img 
                padding-left 12px
                width 55px
                height 55px
            span 
              font-size 12px
              color #333
        .employee
          width 100%
          background #fff
          padding-top 10px
          a
            img 
              width 100%
        .employeeShops
          background #fff
          padding 3px 10px
          display flex
          flex-wrap wrap
          .item
            width 49%
            display flex
            justify-content center
            align-items center
            background #eee
            margin-top 2px
            margin-right 2px
            .one
              font-size 16px
              margin-top 15px
              margin-bottom 5px
              text-align center
            .two
              font-size 12px
              text-align center
            .images
              display flex
              img 
                width 50%

      .swiper-container
        margin-top 10px
        padding-left 10px
        padding-bottom 30px
        background #fff
        .title
          height 50px
          line-height 50px
          font-size 16px
          color #333
        .swiper-wrapper
          .swiper-slide
            width 100%
            overflow hidden
            .shopList
              .shopListItem
                display flex
                a
                  width 33.3%
                  img
                    width 108px
                    height 108px
                    background #f5f5f5
                  .info
                    height 30px
                    font-size 12px
                    color #333
                    .price
                      color #b4282d
        /deep/ .swiper-pagination-bullet
          width 6px
          height 6px
          border-radius 50%
          background #b4282d
      .timeLimited
        padding 0 10px
        background #fff
        margin-top 10px
        .title
          display flex
          font-size 16px
          color #333
          height 50px
          line-height 50px
          .time
            margin-left 5px
            margin-right 170px
            span 
              font-size 12px
              &:nth-child(2n+1)
                background #333
                color #fff
                padding 0 3px
                border-radius 2px
        .shopList
          display flex
          flex-wrap wrap
          .shopListItem
            width 33.3%
            padding-bottom 15px
            img
              width 108px
              background #F5F5F5
            .info
              padding-left 4px
              .price
                font-size 14px
                color #b4282d
              .oldPrice
                font-size 12px
                color #333
      .newGoods
        padding 0 10px
        background #fff
        margin-top 10px
        .title
          display flex
          justify-content space-between
          font-size 16px
          color #333
          height 50px
          line-height 50px
          .time
            margin-left 5px
            margin-right 170px
            span 
              font-size 12px
              &:nth-child(2n+1)
                background #333
                color #fff
                padding 0 3px
                border-radius 2px
        .shopList
          display flex
          flex-wrap wrap
          .shopListItem
            width 33.3%
            padding-bottom 15px
            img
              width 108px
              background #F5F5F5
            .info
              padding-left 4px
              .price
                font-size 12px
                color #b4282d
              .words
                font-size 12px
                color #333
      .popular
        padding 0 10px
        background #fff
        margin-top 10px
        .title
          display flex
          justify-content space-between
          font-size 16px
          color #333
          height 50px
          line-height 50px
        .bigItem
          height 140px
          background #FEF0DF
          margin-bottom 10px
          a
            display flex
            .left
              img
                width 140px
            .right
              width 175px
              margin 0 auto
              padding-top 30px
              .one
                width 44px
                font-size 10px
                color #B4282D
                background #fff
                border 1px solid #B4282D
                margin-bottom 10px
              .two 
                font-size 14px
                color #333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                margin-bottom 10px
              .three
                font-size 12px
                color #7F7F7F
                margin-bottom 10px
              .price
                font-size 14px
                color #b4282d 
        .shopList
          display flex
          flex-wrap wrap
          .shopListItem
            width 33.3%
            padding-bottom 15px
            img
              width 108px
              background #F5F5F5
            .info
              padding-left 4px
              .price
                font-size 12px
                color #b4282d
              .words
                font-size 12px
                color #333
      .hot
        padding 0 10px
        background #fff
        margin-top 10px
        .title
          display flex
          justify-content space-between
          font-size 16px
          color #333
          height 50px
          line-height 50px
        .top
          display flex
          .hotLeft
            width 50%
            display flex
            align-items center
            justify-content space-around
            font-size 14px
            background #F9F3E4
            margin-right 5px
            span
              height 20px
              padding-top 8px
              border-bottom 2px solid #333
            img
              width 100px
              height 100Px
          .goodRight
            width 50%
            background #EBEFF6
            display flex
            justify-content space-around
            align-items center
            font-size 14px
            margin-right 5px
            span
              height 20px
              padding-top 8px
              border-bottom 2px solid #333
            img
              width 100px
              height 100Px
        .bottom
          .list
            display flex
            flex-wrap wrap
            li
              width 23.5%
              background #F5F5F5
              margin-top 5px
              margin-right 5px
              .name
                font-size 12px
                color #333
                text-align center
              img
                width 60px
                height 60px
                padding-left 10px
      .production
        padding 0 10px
        background #fff
        margin-top 10px
        .title
          display flex
          justify-content space-between
          font-size 16px
          color #333
          height 50px
          line-height 50px
        .supplier
          display flex
          flex-wrap wrap
          .item
            width 49%
            height 130px
            background pink
            margin 0 1px 1px 0px
            text-align center
            line-height 30px
            p
              font-size 14px 
              color #333
            .price 
              font-size 12px
              color #7F7F7F

</style>
