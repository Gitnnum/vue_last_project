<template>
  <div class="categoryContainer">
      <div class="categpryHeader">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共21615款好物</span>
      </div>
      <div class="line"></div>
      <div class="bottom">
        <div class="nav" ref="nav">
          <ul class="navList">
            <li v-for="(item,index) in categoryArr" :key="index"  :class="{active:categoryArr[currentIndex] === item}" @click="saveCurrent(index)">
              <router-link :to="`/category/detial/${item.id}`"> {{item.name}} </router-link>
            </li>
          </ul>
        </div>
        <!-- 第一种模板 -->
        <router-view></router-view>
        <!-- 第二种模板 -->
        <div class="contentOther" v-if="!isContent">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javaScript:;">
                  <img src="https://yanxuan.nosdn.127.net/6b4e9df61f124c2eb18f764fdc957255.jpg?imageView&quality=75&thumbnail=0x196" alt="banner">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javaScript:;">
                  <img src="https://yanxuan.nosdn.127.net/99818d29b6d1eb03477ba2874a119d6d.jpg?imageView&quality=75&thumbnail=0x196" alt="banner">
                </a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="categoryBottom">
            <div class="categoryTitle">童装</div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import { mapState } from 'vuex'
  import CategoryItem from './CategoryItem/CategoryItem'
  export default {
    data () {
      return {
        isContent:true, // 准备工作先显示第一个模板
        currentIndex: 0 // 点击时候的index 用于添加active
      }
    },
    components: {
      CategoryItem
    },
    computed:{
      ...mapState({
        categoryArr: state => state.category.categoryArr
      })
    },
    mounted () {
      

      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    watch:{
      categoryArr () {
        this.$nextTick(()=>{
          new BScroll(this.$refs.nav,{
            click:true,
            scrollX:false,
            scrollY:true
          })
        })
      }
    },
    methods:{
      saveCurrent (index) {
        this.currentIndex = index
      }
    },
    beforeRouteEnter (to,from,next) {
      next(component => {
        // '/category/detial/'+(store.categoryArr ? store.categoryArr[0].id : '')
        console.log(component.categoryArr)
        setTimeout(()=>{
          component.$router.replace('/category/detial/'+(component.categoryArr ? component.categoryArr[0].id : ''))
        },300)
      })
    }
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
      height 556px
      overflow hidden
      .nav
        flex 0 0 auto
        padding 20px 0
        height 100%
        width 25%
        background #eee
        .navList
          font-size 14px
          overflow hidden
          li
            position relative
            padding 5px 0
            margin-top 20px
            width 100%
            text-align center
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
      .contentOther
        padding-right 20px
        width 75%
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              a
                img 
                  width 100%
                  height 120px
          /deep/ .swiper-pagination-bullet
            width 20px
            height 2px
            background #ffffff
        .categoryBottom
          margin-top 10px
          .categoryTitle
            font-size 14px
            font-weight bold
            color #333
            padding-left 8px
            padding-bottom 10px
            border-bottom 1px solid #eee
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
