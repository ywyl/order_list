import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { Goods } from "../types";

export interface CartGoodsItem extends Goods {
  counts: number;
}

export interface ShoppingCartState {
  goodsList: Array<CartGoodsItem>;
}

const initialState: ShoppingCartState = {
  goodsList: [
    {
      id: "452308f9-bc52-47a6-b5d8-97e596445cd1",
      img: "src/img/dataLine.png",
      name: "苹果15正版数据线",
      price: 68,
      counts: 3,
    },
    {
      id: "0b228ebf-6bfd-4c46-869e-6da74a5ae526",
      img: "src/img/dataLine.png",
      name: "苹果14据线",
      price: 24,
      counts: 4,
    },
    {
      id: "821f25ee-3a67-4218-a6bc-c3b3c9f3a25a",
      img: "src/img/dataLine.png",
      name: "苹果16快充数据线",
      price: 68,
      counts: 2,
    },
  ],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addGoodsItems: (state, action: PayloadAction<CartGoodsItem>) => {
      state.goodsList.push(action.payload);
    },
    delGoodsItems: (state, action: PayloadAction<string>) => {
      state.goodsList = state.goodsList.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementCounts: (state, action: PayloadAction<string>) => {
      const index = state.goodsList.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1) {
        state.goodsList[index].counts += 1;
      }
    },
    decrementCounts: (state, action: PayloadAction<string>) => {
      const index = state.goodsList.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1 && state.goodsList[index].counts > 0) {
        state.goodsList[index].counts -= 1;
      }
    },
  },
});

export const {
  addGoodsItems,
  delGoodsItems,
  incrementCounts,
  decrementCounts,
} = shoppingCartSlice.actions;

export const getSum = (state: RootState): number =>
  state.shoppingCart.goodsList.reduce(
    (total: number, item: CartGoodsItem) => total + item.price * item.counts,
    0
  );

export default shoppingCartSlice.reducer;
