import {defineStore} from "pinia";
import {getHomeHotSuggest} from "@/service/index.js";


const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggest: []
    }),
    actions: {
        async fetchHomeHotSuggestsData() {
            const res = await getHomeHotSuggest()
            this.hotSuggest = res.data
        }
    }
})
export default useHomeStore

