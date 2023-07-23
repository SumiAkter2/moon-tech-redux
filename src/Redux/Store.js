import { createStore } from "redux";
import productReducer from "./Reducer/ProductReducer";

const store = createStore(productReducer);
export default store;
