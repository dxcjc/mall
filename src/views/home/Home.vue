<template>
<div id="home"> 
  
  <nav-bar class="home-nav-bar">
   <h5 slot="center">购物街</h5>
  </nav-bar>
  <home-swiper :banners="banners"/>
  <HomeRecommend :recommend="recommend"/>
  <HomeFeature/>
  <TabControl :ctitles="['流行', '新款', '精选']" @tabClick="ctClick" />
  <GoodsList :goods="showGoods"/>
   <ul>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
   <li>00000</li>
 </ul>
 </div>



</template>

<script>
  import {getHomeMultidata,getHomeData} from '@/network/home.js'
  
  import HomeSwiper from './childItem/HomeSwiper'
  import HomeRecommend from './childItem/HomeRecommend'
  import HomeFeature from './childItem/HomeFeature'


  import NavBar from '@/components/common/NavBar/NavBar'
  import TabControl from '@/components/contents/tabControl/TabControl'
  import GoodsList from '@/components/contents/good/GoodsList'

 
  export default{
    name:"Home",
    components:{
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      NavBar,
      TabControl,
      GoodsList
      
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
         currentType:'pop'  

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
    methods:{
      ctClick(index){
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
      },getHomeGoodsData(type) {
                let page = this.goods[type].page + 1
                getHomeData(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page = res.data.page
                })
            },
      
      
    
  
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


</style>