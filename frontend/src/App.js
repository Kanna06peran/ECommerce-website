import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kid_banner from "./components/Assets/banner_kids.png"


function App() {
  return (
    <div className="px-10  bg-white border rounded-md">
        
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Shop/>}></Route>
      <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}></Route>
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}></Route>
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids"/>}></Route>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
      </Route>
      
      <Route path="/cart" element={<Cart/>}></Route>

      
      <Route path="/login" element={<LoginSignup/>}></Route>
      
    </Routes>
    <Footer/>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
