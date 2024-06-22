<script setup>
const props = defineProps({
  swipePart: {
    type: Array,
    default: () => []
  }
})


//数据按分类处理 第一种方式
// const newSwipePartData = {}
// for (const item of props.swipePart){
//   newSwipePartData[item.enumPictureCategory] = []
// }
// for(const item of props.swipePart){
//   const valueArray = newSwipePartData[item.enumPictureCategory]
//   valueArray.push(item)
// }

//数据分类处理 第二种方式
const newSwipePartData = {}
for (const item of props.swipePart) {
  //将key的值赋值给valueArray 那么Array为undefined
  let valueArray = newSwipePartData[item.enumPictureCategory]
  if (!valueArray) {
    //如果valueArray为undefined 将一个空数组赋值给它
    valueArray = []
    //key的值等于这个空数组
    newSwipePartData[item.enumPictureCategory] = valueArray
  }
  //将内容加入数组
  valueArray.push(item)
}

//filterData
const filterData = item => {
  return item.replace("：", "").replace("【", "").replace("】", "")
}
//匹配轮播图 (理解不动)
const getCategoryIndex = (item) => {
  const valueArray = newSwipePartData[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}

</script>

<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in swipePart" :key="item.orderIndex">
        <img :src="item.url"/>
      </van-swipe-item>
      <template #indicator="props">
        <div class="custom-indicator">
          <template v-for="(value,key,index) in newSwipePartData" :key="key">
            <span class="item" :class="{active : swipePart[props.active]?.enumPictureCategory == key}">
             <span class="text">{{ filterData(value[0].title) }}</span>
              <span class="count" v-if="swipePart[props.active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipePart[props.active]) }}/{{ value.length }}</span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swipe {

  img {
    width: 100%;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    display: flex;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);

    .item {
      margin: 0 5px;
      border-radius: 6px;

      &.active {
        background: #fff;
        color: #333;
      }
    }
  }
}
</style>
