import SHrequest from "@/service/request/index.js"

export function getCityAll() {
    return SHrequest.get({
        url: "/city/all"
    })
}


