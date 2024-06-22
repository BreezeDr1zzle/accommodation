import SHRequest from "../request"

export function getHouseDetail(houseId) {
    return SHRequest.get({
        url: "/detail/infos",
        params: {
            houseId
        }
    })
}
