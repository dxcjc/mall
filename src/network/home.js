/**
 * Created by cjc on 2020/8/16.
 */
import { request } from "./request"

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })

}

export function getHomeData(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}