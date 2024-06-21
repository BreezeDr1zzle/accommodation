<script setup>
import useMainStore from "@/stores/modules/main.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import {formatMonthDay} from "@/utils/format_data.js";

const mainStore = useMainStore()

const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<template>
  <div class="top-search-bar">
    <div class="search-bar">
      <div class="select-time">
        <div class="item-start">
          <div class="name">住</div>
          <div class="date">{{ startDateStr }}</div>
        </div>
        <div class="item-end">
          <div class="name">离</div>
          <div class="date">{{ endDateStr }}</div>
        </div>
      </div>
      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top-search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background: #fff;
  z-index: 9;

}

.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;

  .select-time {
    display: flex;
    flex-direction: column;

    .item-start, .item-end {
      display: flex;
      flex-direction: row;
    }
  }

  .date {
    color: black;
  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 16px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }
  }

  .right {
    display: flex;
    align-items: center;
  }

  .icon-search {
    width: 24px;
    height: 24px;
    display: inline-block;
    background-image: url("../../assets/img/home/home-sprite.png");
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}
</style>
