import axios from "axios";
import {BASE_URL, TIMEOUT} from "@/service/request/config.js";
import useMainStore from "@/stores/modules/main.js";

const mainStore = useMainStore()

class SHRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        //拦截器
        this.instance.interceptors.request.use(config => {
            mainStore.isLoading = true
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use(res => {
            mainStore.isLoading = false
            return res
        }, err => {
            mainStore.isLoading = false
            return err
        })
    }

    request(config) {

        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "get"})
    }

    post(config) {
        return this.request({...config, method: "post"})
    }
}

export default new SHRequest(BASE_URL, TIMEOUT)

