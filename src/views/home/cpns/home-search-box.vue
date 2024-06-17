<script setup>
import {useRouter} from "vue-router";
import useCityStore from "@/stores/modules/city.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {formatMonthDay, getDiffDate} from "@/utils/format_data.js";
import useHomeStore from "@/stores/modules/home.js";

const router = useRouter()
//跳转城市
const cityClick = () => {
  router.push("/city")
}
//获取当前位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功", res)
  }, err => {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  })
}

//获取当前城市
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)

//获取当天日期
const nowDate = new Date()
const newData = new Date()
newData.setDate(nowDate.getDate() + 1)

const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newData))
const stayCount = ref(getDiffDate(nowDate, newData))

//日历范围
const showCalendar = ref(false)
const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}
const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDate(selectStartDate, selectEndDate)
  showCalendar.value = false
}
const isShowCalendar = () => {
  showCalendar.value = true
}

//热点建议展示
const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggestsData()
const {hotSuggest} = storeToRefs(homeStore)
console.log(hotSuggest)
</script>

<template>
  <div class="search-box">
    <!--  位置信息  -->
    <div class="section location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <!--  日期范围  -->
    <div class="section date-range" @click="isShowCalendar">
      <div class="start">
        <div class="date">
          <span class="tips">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">
        <span class="staytime">共{{ stayCount }}晚</span>
      </div>
      <div class="end">
        <div class="date">
          <span class="tips">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
        v-model:show="showCalendar"
        type="range"
        color="#ff9854"
        :formatter="formatter"
        :round="false"
        @confirm="onConfirm"/>
    <div class="section price-counter">
      <div class="start tips">价格不限</div>
      <div class="end tips">人数不限</div>
    </div>
    <div class="section specific-search">
      <span class="tips">关键字/位置/酒店名</span>
    </div>
    <div class="hotSuggests">
      <template v-for="(item,index) in hotSuggest" :key="index">
          {{item.tagText.text}}
      </template>
    </div>
  </div>


</template>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 15px;

  .city {
    flex: 1;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
      margin-top: 2px;
      color: #333333;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}

.date-range {
  display: flex;
  padding: 0 15px;

  .date {
    display: flex;
    flex-direction: column;


    .time {
      margin-top: 5px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }

    .end {
      min-width: 30%;
      padding-left: 20px;
    }
  }

  .stay {
    min-width: 40%;
    font-size: 12px;
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .tips {
    font-size: 12px;
    color: #999;
  }
}

.specific-search {
  margin-top: 15px;
}

</style>
