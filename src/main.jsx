import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import MensWare from "./Components/MensWare";
import WomensWare from "./Components/WomensWare";
import Jewellery from "./Components/Jewellery";
import DefaultShop from "./Components/DefaultShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      { index: "defaultShop" , element: <DefaultShop/>},
      { path: "mensWare", element: <MensWare/> },
      { path: "womensWare", element: <WomensWare/> },
      { path: "jewellery", element: <Jewellery/> },
    ],
  },
  {
    path: "/cart",
    element: <Cart/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
