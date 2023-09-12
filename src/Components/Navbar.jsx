import { Link } from "react-router-dom";
const Navbar = () => {
    
    return(
      <div className="Navbar">
        <h1><Link to="/">Shoppey</Link></h1>
        <div className="nav-buttons">
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/cart">Cart</Link></button>

        </div>
      </div>
    )
}
export default Navbar;
