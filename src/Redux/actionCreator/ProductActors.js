import { ADD_TO_CART, TOGGLE_BRAND } from "../ActionType/actionTypes"

export const addToCart = ({product}) => {
    return {
        type: ADD_TO_CART,
        payload:product
    }
}
export const toggleBrand = ({ brandName }) => {
    return {
        type: TOGGLE_BRAND,
        payload:brandName
    }
}