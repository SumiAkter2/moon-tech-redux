import { useReducer } from "react"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType/actionTypes"

export const initialState = {
    cart: [],
}

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product._id === action.payload._id);
    // console.log(selectedProduct);
    switch (action.type) {
        case ADD_TO_CART: ;
           
            if (selectedProduct) {
                 const newState = state.cart.filter(
                   (product) => product._id !== selectedProduct._id
                 );
                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart:[...newState,selectedProduct]
                }
           }
        return {
          ...state,
          cart: [...state.cart, {...action.payload,quantity:1}],
        };
      case REMOVE_FROM_CART:
            if (selectedProduct.quantity>1) {
            const newState=state.cart.filter(product=>product._id!==selectedProduct._id)
            selectedProduct.quantity = selectedProduct.quantity - 1;
            
            return {
                ...state,
                cart:[...newState,selectedProduct]
            }
        }
            return {
                
          ...state,
            cart: state.cart.filter(product=>product._id!== action.payload._id)
        };
      default:
        return state;
    }
}
 

export default productReducer;