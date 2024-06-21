import {defineStore} from "pinia";
import {getHomeCategory, getHomeHotSuggest, getHouseList} from "@/service/index.js";


const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        hotCategories: [],
        houseList: [],
        currentPage: 1
    }),
    actions: {
        async fetchHomeHotSuggestsData() {
            const res = await getHomeHotSuggest()
            this.hotSuggests = res.data
        },
        async fetchHomeCategoryData() {
            const res = await getHomeCategory()
            this.hotCategories = res.data
        },
        async fetchHouseListData() {
            const res = await getHouseList(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++
        }
    }
})
export default useHomeStore

