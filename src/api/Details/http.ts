import request from "@/utils/index";

// 商品详情 
// 请求1
export const getDatilsSpu = (data:any) => {
    return request({
        url:'/store/getSpu',
        method:'post',
        data
    })
}
// 请求二
export const getDatilsSku = (data:any) => {
    return request({
        url:'/store/getSku',
        method:'post',
        data
    })
}