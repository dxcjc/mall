<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link" >
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
  
</template>

<script>
export default {
  name:"HomeRecommend",
  props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
  }

}
</script>

<style>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    margin: 0px;
    padding: 5px;
    border-bottom: 10px solid #eee;
    font-size: 12px;
    
  }

  .home-recommend-item{
    flex: 1;
    /* width: 30%; */
  }

  .home-recommend-item img{
    width: 60px;
    height: 60px;
    /* border-radius: 100%; */

  }
</style>