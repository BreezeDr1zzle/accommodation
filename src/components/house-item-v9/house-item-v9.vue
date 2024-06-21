<script setup>
import {ref} from "vue";
import {computed} from "vue";

const props = defineProps({
  houselistv9: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.houselistv9.commentScore)
})

</script>

<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="houselistv9.image.url">
      </div>
      <div class="infos">
        <div class="summary-text">{{ houselistv9.summaryText }}</div>
        <div class="house-name">{{ houselistv9.houseName }}</div>
        <div class="price">
          <van-rate
              :model-value="itemScore"
              :size="10"
              readonly
              allow-half
          />
          <span class="final-price">{{ "¥" + houselistv9.finalPrice }}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<style lang="less" scoped>
.house-item-v9 {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;
    background: #fff;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
    }

    .summary-text {
      font-size: 12px;
    }

    .house-name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }
  }
}
</style>
