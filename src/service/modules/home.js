import SHrequest from "@/service/request/index.js";

export function getHomeHotSuggest() {
    return SHrequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategory() {
    return SHrequest.get({
        url: "/home/categories"
    })
}

export function getHouseList(currentPage) {
    return SHrequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage
        }
    })
}
