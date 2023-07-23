import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import FilterReducer from "./FilterReducer";

const RootReducer = combineReducers({
  product: productReducer,
  filter: FilterReducer,
});
export default RootReducer;
