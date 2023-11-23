import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ShoppingCart from "./ShoppingCart/index.tsx";
import GoodsInfo from "./GoodsInfo/index.tsx";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart></ShoppingCart>,
  },
  {
    path: "/goods-info",
    element: <GoodsInfo></GoodsInfo>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
