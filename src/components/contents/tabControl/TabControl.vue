<template>
  <div class="tab-control">
   
    <div class="tab-control-item" 
          v-for="(item,index) in ctitles" 
          :key="index"
          @click='ctClick(index)'>
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    ctitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    currentIndex:0
    }
  },
  methods:{
    ctClick(index){
     
      this.currentIndex=index;
      this.$emit("ctClick",index)
    }
  }

}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }

</style>