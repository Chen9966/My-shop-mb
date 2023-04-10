import request from "@/utils";

// 首页轮播图
export const getSwiper = ()=>{
    return request.post('/type/getSwiper')
}
// 获取一级分类
export const getParentNameList = () => {
    return request({
        url: '/type/getParentName',
        method: 'post',
    })
}

// 获取一级分类所有商品
export const getProduct = (data:any)=>{
    return request({
        url:'/type/getproduct',
        method:'post',
        data
    })
}