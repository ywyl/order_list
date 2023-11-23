import { useAppDispatch } from "../app/hooks";
import type { Goods } from "../types";
import "./index.css";

import {
  incrementCounts,
  decrementCounts,
} from "../app/shoppingCartSlice";

export interface CartGoodsItem extends Goods {
  counts: number;
}
interface PropsType {
  goods: CartGoodsItem;
}

function Goods({ goods }: PropsType) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="cart-goods-content">
        <div className="img">
          <img src={goods.img} alt="" width={150} height={150} />
        </div>
        <div className="detail">
          <p className="name">{goods.name}</p>
          <p className="price">{`￥ ${goods.price}`}</p>
          <p className="counts">{goods.counts}</p>
          <div className="operation">
            <button onClick={() => dispatch(decrementCounts(goods.id))}>-</button>
            <button onClick={() => dispatch(incrementCounts(goods.id))}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goods;
