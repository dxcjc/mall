<template>
  <div id="MainTabBar">
    <div id="nav">

      <tab-bar>
        <TabBarItem path="/home" isStyleActive="blue">
          <img slot="tab-bar-item-icon" src="@/assets/images/tabbar/home.svg" alt="首页"/>
          <img slot="active" src="@/assets/images/tabbar/home_active.svg" alt="首页"/>
          <h5 slot="tab-bar-item-text">首页</h5>
        </TabBarItem>
        <TabBarItem path="/category">
          <img slot="tab-bar-item-icon" src="@/assets/images/tabbar/category.svg" alt="分类"/>
          <img slot="active" src="@/assets/images/tabbar/category_active.svg" alt="分类"/>
          <h5 slot="tab-bar-item-text">分类</h5>
        </TabBarItem>
        <TabBarItem path="shopcart">
          <img slot="tab-bar-item-icon" src="@/assets/images/tabbar/shopcart.svg" alt="购物车"/>
          <img slot="active" src="@/assets/images/tabbar/shopcart_active.svg" alt="购物车"/>
          <h5 slot="tab-bar-item-text">购物车</h5>
        </TabBarItem>
        <TabBarItem path="profile">
          <img slot="tab-bar-item-icon" src="@/assets/images/tabbar/profile.svg" alt="个人"/>
          <img slot="active" src="@/assets/images/tabbar/profile_active.svg" alt="个人"/>
          <h5  slot="tab-bar-item-text">个人</h5>
        </TabBarItem>
      </tab-bar>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/common/tabbar/TabBar.vue'
import Common from '@/assets/css/base.css'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style>


</style>
