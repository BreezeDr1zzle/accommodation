<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import useCityStore from "@/stores/modules/city.js";

//从父组件拿到数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

//城市右侧标题
const indexlist = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

//监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="group-item">
    <van-index-bar :sticky="false" :z-index="9" :index-list="indexlist">
      <van-index-anchor index="热门"/>
      <div class="list">
        <template v-for="(item,index) in groupData.hotCities" :key="index">
          <div class="hotCity" @click="cityClick(item)">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"/>
        <template v-for="(city,indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .hotCity {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    color: #000;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    margin: 6px 0px;
  }
}
</style>
