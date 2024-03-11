import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice"

const rootReducer = combineReducers({
  product: productReducer,
  user:userReducer,
});

module.exports = rootReducer;
