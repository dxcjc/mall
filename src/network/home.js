/**
 * Created by cjc on 2020/8/16.
 */
import {request} from  "./request"

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })

}