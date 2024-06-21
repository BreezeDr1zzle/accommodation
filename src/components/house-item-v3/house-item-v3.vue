<script setup>
defineProps({
  houselistv3: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="house-item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="houselistv3.image.url">
      </div>
      <div class="infos">
        <div class="location">
          <img src="@/assets/img/home/icon_location.png">
          <span>{{ houselistv3.location }}</span>
        </div>
        <div class="house-name">{{ houselistv3.houseName }}</div>
        <div class="summary-text">{{ houselistv3.summaryText }}</div>
        <div class="price">
          <div class="new">{{ "¥" + houselistv3.finalPrice }}</div>
          <div class="old">{{ "¥" + houselistv3.productPrice }}</div>
          <div class="tip">{{ houselistv3?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item-v3 {
  width: 50%;

  .item-inner {
    margin: 5px;
    border-radius: 6px;
    background: #fff;
    overflow: hidden;

    .location {
      img {
        width: 15px;
        height: 15px;
        position: relative;
        bottom: 1px;
      }

      span {
        font-size: 10px;
      }
    }

    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      padding: 8px 10px;
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
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;


      .new {
        color: var(--primary-color);
      }

      .old {
        text-decoration: line-through;
        color: #999999;
        font-size: 12px;
        margin: 0 10px;
      }

      .tip {
        font-size: 12px;
        background: red;
        border-radius: 6px;
        color: white;
      }
    }
  }
}
</style>
