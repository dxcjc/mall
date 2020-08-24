<template>
    <div ref="wrapper" class="wrapper">
    <div class="content">
      <ul>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
        <li>23132</li>
      </ul>
  </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Category",
   data() {
            return {
                scroller:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
    mounted(){
      this.scroller=new BScroll(document.querySelector(".wrapper"),{
        
      })
      

 
  

}
    
  }

</script>

<style>
.wrapper{
  background-color: pink;
  height: 300px;
  overflow: hidden;
}

</style>