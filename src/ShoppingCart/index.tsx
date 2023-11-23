import { useAppSelector, useAppDispatch } from "../app/hooks";
import "./index.css"

import {
  addGoodsItems,
  delGoodsItems,
  incrementCounts,
  decrementCounts,
} from "../app/shoppingCartSlice";

import CartGoods from "../CartGoods/index";

function ShoppingCart() {
  const goodsList = useAppSelector((state) => state.shoppingCart.goodsList);
  const dispatch = useAppDispatch();

  return (
		<div className="cart-panel">
			<ul>
				{goodsList.map((item) => (
          <li key={item.id} className="cart-goods-item">
            <CartGoods goods={item}></CartGoods>
          </li>
        ))}
			</ul>
		</div>
	)
}

export default ShoppingCart;
