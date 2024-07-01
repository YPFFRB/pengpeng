import {get} from "./axios.js"

const getSeller = get("seller")
const getGoods=get('goods')

//获取商家的
export {
    getSeller,
    getGoods
}