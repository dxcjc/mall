<template>
<div class="navbar">  
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>

</div>
  
</template>

<script>
export default {
  name:'NavBar'

}
</script>

<style>
  .navbar{
    display: flex;
    font-size: 16px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    text-align: center;
  }
  .left,.right{
    width: 44px;
  }
  .center{
    flex: 1;
  }

</style>