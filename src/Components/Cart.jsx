import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
// const cartItems = [1,2,3,4,5,17];



const Cart = ({cart,removeFromCart}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    let TotalBill = products.reduce((total, product) => {
      return total + product.amount;
    }, 0);

    useEffect(()=>{
      const newdata=[];
    

      cart.forEach((itemId) => {
        fetch(`https://fakestoreapi.com/products/${itemId.toString()}`)
          .then((response) => response.json())
          .then((data) => {
          newdata.push(data);
          
          if(newdata.length===cart.length) 
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
    },[cart]);

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
    function handleRemove(Id)
    {
      console.log(`Removing item with ID: ${Id}`);

      removeFromCart(Id);
      setProducts(products.filter((id) => id !== Id));
      if(cart.length===1){
       
        setIsLoading(true);
      } 
    }
    return(
      <div>
        <Navbar/>
        <div className="cart-header">
        <div><h1>Your CART</h1></div>
        {products.length>0&&<div className="checkout">
          <div>
            <div>Total Bill: - {parseInt(TotalBill.toFixed(0))} $</div>
            <button onClick={()=> window.location.reload()}><Link to="https://www.youtube.com/watch?v=xvFZjo5PgG0">Proceed to pay</Link></button>
          </div>
        </div>}
        </div>
        <h2>Product List</h2>
        {isLoading && (products.length>0)&& <div className="loading-animation"></div>}
        {isLoading && (products.length===0)&& <div  className="Empty-cart">
            The Cart Looks empty
        </div>}
        {!isLoading && <div className="mens-list">
        {products.map((product) => (
          <div key={product.id} className="mens-list-item">
            <div><img src={product.image}/></div>
            <div className="title">
               {product.title}
            </div>
            <div className="price">Price:- {product.price}$</div>
            <div className="quantity">
              <button onClick= {() => handleIncrement(product.id)}>+</button>
              <div>{product.quantity}</div>
              <button onClick={() => handleDecrement(product.id)}>-</button>
            </div>
            <div className="amount">Amount: - {parseInt(product.amount.toFixed(0))} $</div>
            <div className="remove-btn"> <button onClick={()=> handleRemove(product.id)}>Remove Item</button></div>
           </div>
        ))}
      </div>}
      </div>
    )
}
Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Assuming cart is an array
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
