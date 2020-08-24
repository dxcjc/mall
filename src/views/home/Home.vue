<template>
<div id="home"> 
  
  <nav-bar class="home-nav-bar">
   <h5 slot="center">购物街</h5>
  </nav-bar>
  <Scroller :probe-type="3" ref="scroller" @scroll="scroll" class="home-scroller" :pullUpLoad="true" @pullingUp="pullUpLoad" >
    <home-swiper :banners="banners"/>
    <HomeRecommend :recommend="recommend"/>
    <HomeFeature/>
    <TabControl :ctitles="['流行', '新款', '精选']" @ctClick="pClick" />
    <GoodsList :goods="showGoods"/>
  </Scroller>
  <BackTop @click.native="backTopClick" v-show="isShowBackTop" />
  
</div>
  
  



</template>

<script>
  import {getHomeMultidata,getHomeData} from '@/network/home.js'
  
  import HomeSwiper from './childItem/HomeSwiper'
  import HomeRecommend from './childItem/HomeRecommend'
  import HomeFeature from './childItem/HomeFeature'


  import NavBar from '@/components/common/NavBar/NavBar'
  import Scroller from '@/components/common/Scroller/Scroller'

  import TabControl from '@/components/contents/tabControl/TabControl'
  import GoodsList from '@/components/contents/good/GoodsList'
  import BackTop from '@/components/contents/BackTop/BackTop'
 

 
  export default{
    name:"Home",
    components:{
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      NavBar,
      Scroller,
      TabControl,
      GoodsList,
      BackTop
      
    },
    data(){
      return{
        banners:[],
        recommend:[],
        goods:{
             pop:{page:0, list:[]},
             new:{page:0, list:[]},
             sell:{page:0, list:[]}
           },
        currentType:'pop',
        isShowBackTop: false
      }
    },
     computed: {
         showGoods() {
             return this.goods[this.currentType].list
         }
     },
    created(){
      this.getHomeData()

      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    mounted(){
      // 
      const refresh=this.debounce(this.$refs.scroller.refresh,50)
     this.$bus.$on("imageLoad",()=>{
       refresh()
       
     })
    },
    methods:{
      debounce(func,delay){
        let timer=null
        return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{

          func.apply(this,args)
        },delay)
        }
      },


      pClick(index){
         switch (index) {
                  case 0:
                      this.currentType = 'pop'
                      break
                  case 1:
                      this.currentType = 'new'
                      break
                  case 2:
                      this.currentType = 'sell'
                      break
              }
      },
      getHomeData(){
        getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        let page = this.goods[type].page + 1
        getHomeData(type, page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page = res.data.page
        })
      },
      scroll(postion){      
        this.isShowBackTop= -postion.y>1000;
        // console.log(this.isShowBackTop);
      },
      pullUpLoad(){
       this.getHomeGoodsData(this.currentType);
        this.$refs.scroller.finishPullUp()
      },
      backTopClick(){
        // console.log(this.$refs.scroller);
        this.$refs.scroller.scrollTo(0,0,300)
      }
    }
  }
  
</script>
<style scoped>
  #home {
      padding-top: 44px;
      height: 100vh;
      position: relative;
    }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;
  }
  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>