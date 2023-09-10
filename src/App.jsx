import './App.css'
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {

  return (
    <div>
      <Navbar/>
      <h1>Hello from Home page!</h1>
      <p>So, how are you?</p>
      <button><Link to="shop">Shop now</Link></button>
    </div>
  );
}

export default App
