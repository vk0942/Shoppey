import  { useEffect, useState } from "react";
import PropTypes from 'prop-types';




const Jewellery= ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
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
    <div>
      <h2>Product List</h2>
      {isLoading && <div className="loading-aimation"></div>}


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
                <button onClick={()=> addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );

};

Jewellery.propTypes = {
  // Assuming cart is an array
    addToCart: PropTypes.func.isRequired,
  };
  

export default Jewellery;



