import SHrequest from "@/service/request/index.js";

export function getHomeHotSuggest() {
    return SHrequest.get({
        url: "/home/hotSuggests"
    })
}
