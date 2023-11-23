import { v4 as uuidv4 } from "uuid";
import type { Goods } from "../types";
import type { GoodsInfo } from "../app/goodsInfoSlice";

export const mockGoodsData: Goods = {
  id: uuidv4(),
  img: "src/img/dataLine.png",
  name: "苹果15正版数据线",
  price: 68,
};

export const mockGoodsInfoData: GoodsInfo = {
  id: uuidv4(),
  img: "src/img/dataLine.png",
  name: "苹果14据线",
  price: 24,
  comments: [
    {
      user: "未知用户6688",
      level: 5,
      description: "数据线太好用啦",
    },
    {
      user: "未知用户9527",
      level: 3,
      description: "数据线充电好慢",
    },
    {
      user: "未知用户89757",
      level: 1,
      description: "数据线型号不匹配",
    },
  ],
};
