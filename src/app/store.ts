import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartSlice";
import goodsInfoReducer from "./goodsInfoSlice";

const store = configureStore({
  reducer: {
		shoppingCart: shoppingCartReducer,
		goodsInfo: goodsInfoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
