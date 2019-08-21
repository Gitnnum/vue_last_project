<template>
  <div class="searchContainer">
    <div class="seaech_header">
      <div class="header">
        <i class="iconfont icon-shouye1"></i>
        <div class="find">
          <span :class="{on:$route.path === '/search/topic/0'}" >
          <router-link to="/search/topic/0">发现</router-link>
          </span>
          <span :class="{on:$route.path === '/search/expert'}">
          <router-link to="/search/expert">甄选家</router-link>
          </span>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo" @click="$router.push('/hotfind')"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="tabWrapper" ref="searchNav" v-show="$route.path !== '/search/expert'">
        <ul class="nav" >
          <li :class="{active:searchTab[currentIndex] === tab}" v-for="(tab,index) in searchTab" :key="index" 
          @click="saveCurrentIndex(index)">
          <router-link :to="`/search/topic/${index}`">{{tab.tabName}}</router-link>
          </li>
        </ul>
      </div>  
    </div>
    <!-- 盛夏特别版图片 -->
    <!-- <div v-if="false">
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
    </div> -->
    <!-- 推荐 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        currentIndex:0//保存当前点击的tab的index
      }
    },
    computed:{
      ...mapState({
        searchTab: state => state.searchthing.searchTab
      })
    },
    async mounted () {
      await this.$store.dispatch('getSearchTab')
      this.$nextTick(()=>{
          new BScroll(this.$refs.searchNav,{
          click:true,
          scrollX:true,
          scrollY:false
        })
      })
    },
    methods:{
      saveCurrentIndex (index) {
        this.currentIndex = index
      }
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
              a
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
