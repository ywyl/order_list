import { createSlice } from "@reduxjs/toolkit";
import { mockGoodsInfoData } from "../mock/index";
import type { Goods } from "../types";

interface GoodsComment {
  user: string;
  level: number;
  description: string;
}

export interface GoodsInfo extends Goods {
  comments: Array<GoodsComment>;
}

export interface GoodsInfoState {
  goodsInfo: GoodsInfo | null;
}

const initialState: GoodsInfoState = {
  goodsInfo: null,
};

export const goodsInfoSlice = createSlice({
  name: "goodsInfo",
  initialState,
  reducers: {
    getGoodsInfo: (state) => {
      state.goodsInfo = mockGoodsInfoData;
    },
  },
});

export const { getGoodsInfo } = goodsInfoSlice.actions;

export default goodsInfoSlice.reducer;
