import './App.css'
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {

  return (
    <div className="home-page" id="home">
      <Navbar/>
      <div className='home-page-content'>
        <div className='home-mini'>
      <h1>Your one-stop destination for all your shopping needs</h1>
      <p>Discover an unparalleled shopping experience with our extensive selection of products, unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</p>
      <button><Link to="shop">Shop now</Link></button>
      </div>
      </div>
    </div>
  );
}

export default App
