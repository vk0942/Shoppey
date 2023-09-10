import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import MensWare from "./Components/MensWare";
import WomensWare from "./Components/WomensWare";
import Jewellery from "./Components/Jewellery";
import DefaultShop from "./Components/DefaultShop";
import { useState } from "react";

const Router = ()=>{
    
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
      
     if(!cart.includes(productId)) setCart([...cart, productId]);
     else {alert("This item is already added to the Cart")}
    };
  
    const removeFromCart = (productId) => {
      setCart(cart.filter((id) => id !== productId));
    };


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
            { path: "jewellery", element: <Jewellery  addToCart={addToCart}/> },
          ],
        },
        {
          path: "/cart",
          element: <Cart cart={cart} removeFromCart={removeFromCart}/>,
        }
      ]);
      return <RouterProvider router={router} />;
}
export default Router;