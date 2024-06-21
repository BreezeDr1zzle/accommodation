<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "@/views/home/cpns/home-search-box.vue";
import HomeCategories from "@/views/home/cpns/home-categories.vue";
import useHomeStore from "@/stores/modules/home.js";
import HomeContent from "@/views/home/cpns/home-content.vue";
import {useScroll} from "@/hooks/useScroll.js";
import {watch, ref, computed} from "vue";
import SearchBar from "@/components/search-bar/search-bar.vue";


//发送热点推荐请求
const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggestsData()
//发送房屋种类请求
homeStore.fetchHomeCategoryData()
//发送房屋列表
homeStore.fetchHouseListData()

//滚动加载内容(发送网络请求)
const {isReachBottom, scrollTop} = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})
//滚动加载搜索框
// const isShowSearch = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearch.value = newTop > 100
// })

//滚动加载搜索框 (改良版) 有缓存
//定义的可响应式数据，依赖于另一个可响应式数据，那么就可以使用计算属性
const isShowSearch = computed(() => {
  return scrollTop.value >= 350
})
</script>

<template>
  <div class="home">
    <HomeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <home-search-box/>
    <home-categories/>
    <search-bar v-if="isShowSearch"/>
    <home-content/>
  </div>
</template>


<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.banner {
  img {
    width: 100%;
  }
}


</style>
<style>

</style>
