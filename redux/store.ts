import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice"

const persistConfig = {
  key: "root", 
  storage,
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    product: productReducer,
    user: userReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store); 
setTimeout(() => {
  persistor.purge();
}, 3600000 * 2);
export default store;