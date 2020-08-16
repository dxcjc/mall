<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from  '@/components/contents/MainTabBar/MainTabBar.vue'

  export default{
      name:'App',
      components: {MainTabBar},


  }
</script>

<style>

</style>
