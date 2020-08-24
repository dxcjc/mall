<template>
<div class="goods-list">
  <GoodListItem v-for="(item,index) in goods" :key="index" class="goods-item"
                :good="item"/>
</div>
  
</template>

<script>
import GoodListItem from "./GoodsListItem";
export default {
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodListItem

  }

}
</script>

<style>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
   
    padding: 2px;
  }

</style>