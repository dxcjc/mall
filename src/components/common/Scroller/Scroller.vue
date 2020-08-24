<template>
  <div ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"scroller",
  props:{
     probeType:{
       type:Number,
       default:0
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }
  },
  data(){
    return{
        scroller:{
        type:Object,
        default(){
          return {}
        }
      }
    }
    
  },
  mounted(){
     this.scroller = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad        
    });
    
     this.scroller.on('scroll', (postion) => {
        // console.log(this.pullUpLoad)
        this.$emit('scroll', postion)
    });
    this.scroller.on('pullingUp', () => {
      // console.log('到底了——————————————————————————————————————————————')
        this.$emit('pullingUp')
    });
  },
  methods:{
      scrollTo(x, y, time=300) {
        //  console.log("ddadad");
         this.scroller.scrollTo(0, 0, time)
      },
      finishPullUp() {
        this.scroller.finishPullUp()
      },
      refresh() {
      console.log("+++++++++++++++++++++++++++++++++++")
        this.scroller.refresh()
      }
   

  }



}
</script>

<style>

</style>







