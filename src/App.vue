<script setup>
import TabBar from "@/components/tab-bar/TabBar.vue";
import TabBarVant from "@/components/tab-bar/TabBarVant.vue";
</script>

<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
<!--    <tab-bar-vant/>-->
  </div>
</template>

<style scoped>

</style>
