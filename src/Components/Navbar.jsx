import { Link } from "react-router-dom";
const Navbar = () => {
    
    return(
      <div className="Navbar">
        <h1><Link to="/">Shoppey</Link></h1>
        <div>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/cart">Cart</Link></button>

        </div>
      </div>
    )
}
export default Navbar;
