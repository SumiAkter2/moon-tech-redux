import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools, } from "@redux-devtools/extension";
import RootReducer from "./Reducer/RootReducer";
import logger from "redux-logger";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware()));
export default store;
