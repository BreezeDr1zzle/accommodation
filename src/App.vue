<script setup>
import TabBar from "@/components/tab-bar/TabBar.vue";
import TabBarVant from "@/components/tab-bar/TabBarVant.vue";
import {useRouter, useRoute} from "vue-router";
import {ref, computed, watch} from "vue";


const route = useRoute()
const router = useRouter()

/**
 * 以下全都拿不到刚进页面时Home的meta
 */
// watch监听路由变化取到路由元信息meta
// const isShow = ref()
// watch(route, newRoute => {
//   isShow.value = newRoute.meta.hideTabBar
//   console.log(isShow.value)
// })
// computed 取到路由元信息meta
const isShow = computed(() => {
  return route.meta.hideTabBar
})
// 路由导航守卫取到路由元信息meta
// const isShow = ref()
// router.beforeEach((to, from) => {
//   isShow.value = to.meta.hideTabBar
// })


</script>

<template>
  <div class="app">
    <router-view/>
    <!--    <tab-bar/>-->
    <tab-bar v-if="!isShow"/>
    <!--    <tab-bar-vant/>-->
  </div>
</template>

<style scoped>

</style>
