import { Link ,Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import mens_ware from "../assets/mens_ware.webp";
import womens_ware from "../assets/womens_ware.jpeg";
import electronics from "../assets/electronics.jpg";
import jewellery from "../assets/jewellery.webp";


const Shop = () => {
    
    return(
      <div className="home-page">
        <Navbar/>
        <div>
          <h1>Go Ahead and Pick your choice</h1>
          <div className="choice-container">
            <div><Link to="mensWare"><img alt="mens clothing" src={mens_ware}/>Mens Ware</Link></div>
            <div><Link to="womensWare"><img alt="women's clothing" src={womens_ware}/>Womens Ware</Link></div>
            <div><Link to="jewellery"><img alt="Jewellery" src={jewellery}/>Jewellery</Link></div>
            <div><Link to="electronics"><img alt="Electronics" src={electronics}/>Electronics</Link></div>

          </div>
        </div>
        <Outlet className="outlet"/>
      </div>
    )
}
export default Shop;
