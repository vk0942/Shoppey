import Navbar from "./Navbar";
import { useState,useEffect } from "react";
const cartItems = [1,2,3,4,5,17];
let TotalBill=0;

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    useEffect(()=>{
      const newdata=[];
     
      

      cartItems.forEach((itemId) => {
        fetch(`https://fakestoreapi.com/products/${itemId.toString()}`)
          .then((response) => response.json())
          .then((data) => {
          newdata.push(data);
          TotalBill+=data.price;
          if(newdata.length===cartItems.length) 
          {
            setIsLoading(false);
            const moddata = newdata.map((product) => ({
              ...product,
              quantity: 1 ,// Set the initial quantity value as 0 or any other default value
              amount: product.price
            }));
            setProducts(moddata);
          }
          })
          .catch((error) => {
            console.error(`Error fetching item with ID ${itemId}:`, error);
          });
         

       });
    },[]);
    function handleIncrement(id)
    {
       let newpds = [...products];
       newpds.forEach((item) =>{
        if(item.id===id)
        {
          item.quantity+=1;
          item.amount+=item.price;
          TotalBill+=item.price;
        }
       })
       setProducts(newpds);
    }
    function handleDecrement(id)
    {
       let newpds = [...products];
       let nah =false;
       newpds.forEach((item) =>{
        if(item.id===id)
        {
          if(item.quantity>0)
          {
            item.quantity-=1;
            item.amount-=item.price;
            TotalBill-=item.price;
          }else nah = true;
        }
       })
       if(!nah) setProducts(newpds);
    }
    return(
      <div>
        <Navbar/>
        <h1>Welcome to the Cart page</h1>
        <div className="checkout">
          <div>
            <div>Total Bill: - {parseInt(TotalBill.toFixed(0))}</div>
            <button>Proceed to checkout</button>
          </div>
        </div>
        <h2>Product List</h2>
        {isLoading && <div className="loading-animation"></div>}
        {!isLoading && <div>
        {products.map((product) => (
          <div key={product.id}>
            <div><img src={product.image}/></div>
            <div>
               <h3>Title</h3>
               {product.title}
            </div>
            <div>Price:- {product.price}$</div>
            <div>
              <button onClick= {() => handleIncrement(product.id)}>+</button>
              <div>{product.quantity}</div>
              <button onClick={() => handleDecrement(product.id)}>-</button>
            </div>
            <div>Amount: - {parseInt(product.amount.toFixed(0))}</div>
           </div>
        ))}
      </div>}
      </div>
    )
}

export default Cart;
