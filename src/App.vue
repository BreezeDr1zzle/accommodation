<script setup>
import TabBar from "@/components/tab-bar/TabBar.vue";
import TabBarVant from "@/components/tab-bar/TabBarVant.vue";
import {useRouter, useRoute} from "vue-router";
import {ref} from "vue";


// 取到路由元信息meta
const route = useRoute()
const router = useRouter()
const isShow = ref()
router.beforeEach((to, from) => {
  isShow.value = to.meta.hideTabBar
})



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
