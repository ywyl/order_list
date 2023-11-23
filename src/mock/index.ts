import { v4 as uuidv4 } from "uuid";
import type { Goods } from "../types";

export const mockData: Goods = {
  id: uuidv4(),
  img: "src/img/dataLine.png",
  name: "苹果15正版数据线",
  price: 68,
};
