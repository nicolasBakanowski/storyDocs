import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

module.exports = rootReducer;
