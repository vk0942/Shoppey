import { Link ,Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Shop = () => {
    
    return(
      <div>
        <Navbar/>
        <h1>Welcome to the shop page</h1>
        <div>
          <div><Link to="mensWare">Mens Clothing</Link></div>
          <div><Link to="womensWare">Womens Clothing</Link></div>
          <div><Link to="jewellery">Jewellery</Link></div>
        </div>
        <Outlet/>
      </div>
    )
}
export default Shop;
