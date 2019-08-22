<template>
  <div class="showOrderWrap">
      <div class="top">
        <p class="better">{{showOrder.subtitle}}</p>
        <p class="title">“ {{showOrder.title}} ”</p>
        <div class="ulwrap" ref="ulwrap">
          <ul class="ulList">
            <li v-for="(img,index) in showOrder.lookList" :key="index">
              <img :src="img.banner.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <p class="name">TA们的严选生活</p>
        <div class="btn">
          <button class="on">最新</button>
          <button>本月最热</button>
          <button>晒单合集</button>
        </div>
        <div class="orderList">
          <ul class="list">
            <li v-for="(item,index) in showOrderInfo.topicList" :key="index">
              <img :src="item.bannerInfo.picUrl" alt="">
              <p class="words">{{item.content}}</p>
              <div class="user">
                <img :src="item.avatar" alt="">
                <span class="haoma">{{item.nickName}}</span>
                <span class="dianzan">{{item.supportNum}}</span>
                <i class="iconfont icon-dianzan"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'
  export default {
    computed:{
      ...mapState({
        showOrder: state => state.searchthing.showOrder,
        showOrderInfo : state => state.searchthing.showOrderInfo
      })
    },
    async mounted () {
      await this.$store.dispatch('getShowOrder')
      await this.$store.dispatch('getComment',{page:1,size:20,type:2})
      this.$nextTick(()=>{
        new BScroll (this.$refs.ulwrap,{
          click:true,
          scrollX:true,
          scrollY:false
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .showOrderWrap
    padding-top 60px
    height 667px
    .top
      padding-bottom 20px
      padding-top 20px
      padding-left 10px
      padding-right 10px
      background #fff
      .better
        font-size 14px
        color #7f7f7f
        text-align center
      .title
        font-size 16px
        color #333
        text-align center
        height 48px
        width 225px
        margin 10px auto
        line-height 24px
      .ulwrap
        display flex
        .ulList
          display flex
          li
            img 
              width 120px
              height 120px
              border-radius 4px
              margin-right 10px
    .bottom
      margin-top 10px
      padding 30px 10px 10px
      background #fff
      .name
        font-size 16px
        color #333
        text-align center
      .btn
        margin-top 30px
        margin-bottom 10px
        display flex
        justify-content space-around
        button  
          font-size 14px
          height 28px
          width 90px
          color #333
          text-align center
          line-height 28px
          background #f4f4f4
          border none 
          border-radius 3px
          &.on
            background-color #ffe4af
            color #b0955f
            font-weight 700
      .orderList
        box-sizing border-box
        padding-left 10px
        .list
          display flex
          flex-wrap wrap
          li
            margin-right 10px
            margin-bottom 10px
            width 162px
            img 
              width 162px
              height 230px
              border-radius 10px
            .words
              font-size 12px
              color #333
              padding 10px 8px 10px
            .user
              img  
                width 24px
                height 24px
                border-radius 50%
                vertical-align middle
              .haoma
                font-size 12px
                color #7f7f7f
                padding-left 2px
                padding-right 50px
              .dianzan
                font-size 12px
                color #7f7f7f
</style>
