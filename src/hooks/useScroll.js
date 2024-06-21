import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

export function useScroll() {
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const clientHeight = ref(0)
    const scrollHeight = ref(0)
    //防抖/节流
    const scrollListener = throttle(() => {
        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight
        console.log("监听到滚动")
        if (clientHeight.value + (scrollTop.value + 1) >= scrollHeight.value) {
            console.log("滚动到底部了")
            isReachBottom.value = true
        }
    }, 1000)
    onMounted(() => {
        window.addEventListener("scroll", scrollListener)
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListener)
    })
    return {isReachBottom, scrollHeight, scrollTop, clientHeight}
}

