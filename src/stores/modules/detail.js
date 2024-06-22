import {defineStore} from "pinia";
import {getHouseDetail} from "@/service/modules/detail.js";

const useHouseDetailStore = defineStore("detail", {
    state: () => ({
        houseDetail: {}
    }),
    actions: {
        async fetchHouseDetailData(houseId) {
            const res = await getHouseDetail(houseId)
            this.houseDetail = res.data

        }
    }
})

export default useHouseDetailStore
