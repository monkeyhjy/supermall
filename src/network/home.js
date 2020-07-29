//对首页数据的请求，这样首页不用管从哪里获取数据，只单纯的获取到数据即可
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
    // url: '/test/getBanners'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    // url: '/test/getGoods',
    params: {
      type,
      page
    }
  })
}
