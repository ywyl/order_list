import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { addGoodsItems, type CartGoodsItem } from "../app/shoppingCartSlice";
import { getGoodsInfo, type GoodsInfo } from "../app/goodsInfoSlice";
import "./index.css";

function GoodsInfo() {
  const goodsInfo = useAppSelector((state) => state.goodsInfo.goodsInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGoodsInfo());
  });

  const add = (item: GoodsInfo | null): void => {
    if (!item) {
      return;
    }
    const goodsItem: CartGoodsItem = {
      id: item.id,
      img: item.img,
      name: item.name,
      price: item.price,
      counts: 1,
    };
    addGoodsItems;
    dispatch(addGoodsItems(goodsItem));
  };

  return (
    <>
      <Link to="/shopping-cart">{"查看购物车"}</Link>
      <div className="cart-panel">
        <div className="img">
          <img src={goodsInfo?.img} alt="" width={180} height={200} />
        </div>
        <div className="info">
          <p>{goodsInfo?.name}</p>
          <p>{goodsInfo?.price}</p>
        </div>
        <div className="comments">
          <ul>
            {goodsInfo?.comments.map((item) => (
              <li key={item.user}>
                <p className="user">{item.user}</p>
                <p className="level">{`评分: ${item.level}`}</p>
                <p className="description">{item.description}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => add(goodsInfo)}>加入购物车</button>
        </div>
      </div>
    </>
  );
}

export default GoodsInfo;
