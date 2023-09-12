import  { useEffect, useState } from "react";
import PropTypes from 'prop-types';


const Electronics= ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const str = "electronics";
        const response = await fetch(`https://fakestoreapi.com/products/category/${str}`);
        const data = await response.json();
        setProducts(data); // Displaying only 5 products
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="mens-ware-container">
      <h2>Got your Devices ?</h2>
      {isLoading && <div className="loading-aimation"></div>}
      
      
      {!isLoading && <div className="mens-list">
        {products.map((product) => (
          <div key={product.id} className="mens-list-item">
            <div className="product-image"><img src={product.image}/></div>
            <div className="title">
               <span>
               {product.title}
               </span>
            </div>
            <div className="price">Price:- {product.price}$</div>
            <div>
                <button onClick={()=> addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );

};  


Electronics.propTypes = {
  // Assuming cart is an array
    addToCart: PropTypes.func.isRequired,
  };
  

export default Electronics;