<template>
<div id="home"> 
  
  <nav-bar class="home-nav-bar">
   <h5 slot="center">购物街</h5>
 </nav-bar>
 <home-swiper :banners="banners"/>


 </div>


</template>

<script>
  import {getHomeMultidata} from '@/network/home.js';
  import HomeSwiper from './childItem/HomeSwiper'
  import NavBar from '@/components/common/NavBar/NavBar'
 
  


  export default{
    name:"Home",
    components:{
      NavBar,
      HomeSwiper
      
    },
    data(){
      return{
        banners:[],
        recommend:[]
      }
    },
    created(){
      getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend
        })
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