<template>
<div id="home"> 
  
  <nav-bar class="home-nav-bar">
   <h5 slot="center">购物街</h5>
 </nav-bar>
 </div>

</template>

<script>
 import {getHomeMultidata} from '@/network/home.js';
 import NavBar from '@/components/common/NavBar/NavBar'
  export default{
    name:"Home",
    components:{
      NavBar
    },
    data(){
      return{
        result:null
      }
    },
    created(){
      getHomeMultidata().then(res => {
        this.result=res
       
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