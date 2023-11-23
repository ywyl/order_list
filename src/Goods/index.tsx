import type { Goods } from "../types";
import "./index.css";

interface PropsType {
  goods: Goods;
}

function Goods({ goods }: PropsType) {
  return (
    <>
      <div className="goods-content">
        <div className="img">
          <img src={goods.img} alt="" width={180} height={200} />
        </div>
        <p className="name">{goods.name}</p>
        <p className="price">{`￥ ${goods.price}`}</p>
        <p className="sales">{`月销量 ${goods.price}`}</p>
      </div>
    </>
  );
}

export default Goods;
