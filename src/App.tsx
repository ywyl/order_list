import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Goods from "./Goods/index";
import { mockGoodsData } from "./mock/index";

function App() {
  const bottomElement = useRef<HTMLDivElement | null>(null);

  const [goodsList, setGoodsList] = useState<Array<Goods>>([]);

  const initgoodsList = () => {
    const temp: Array<Goods> = [];
    for (let i = 0; i < 30; i++) {
      temp.push(mockGoodsData);
    }
    setGoodsList(temp);
  };

  const addItem = (addNum: number, curNum: number) => {
    const temp = [...goodsList];
    for (let i = curNum; i < curNum + addNum; i++) {
      temp.push(mockGoodsData);
    }
    setGoodsList(temp);
  };

  const io = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) {
      return;
    }
    addItem(20, goodsList.length);
  });

  useEffect(() => {
    if (bottomElement.current) {
      io.observe(bottomElement.current);
    }
  });

  useEffect(initgoodsList, []);
  return (
    <>
      <div className="header">
        <Link to='/shopping-cart'>{'购物车'}</Link>
      </div>
      <div className="main">
        <ul className="goods-list">
          {goodsList.map((item) => (
            <li key={item.id} className="goods-item" onClick={() => {window.location.href = '/goods-info'}}>
              <Goods goods={item}></Goods>
            </li>
          ))}
        </ul>
        <div ref={bottomElement} className="bottom"></div>
      </div>
    </>
  );
}

export default App;
