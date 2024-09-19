import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Options from "./components/Options";
import Navbar from "./components/Navbar";
import CategoryProduct from "./components/SleeperAndDaybeds";
import { useState, useEffect } from "react";
import ProductMenu from "./components/ProductMenu";
import ViewOption from "./components/ViewOption";
import ProductDetails from "./components/ProductDetails";
import furnitureLivingRoomDaybeds from './json/furnitureLivingRoomDaybeds.json';
import Cart from "./components/Cart";
import furnitureLivingRoomCollections from './json/furnitureLivingRoomCollections.json';

function App() {
  // const [daybeds, setDaybeds] = useState([]);

//   useEffect(() => {
//     const fetchAccounts = async () => {
//         try {
//             const response = await fetch('furnitureLivingRoomDaybeds.json');
//             const data = await response.json();
//             setDaybeds(data);
//         } catch (error) {
//             console.error('Error fetching account data:', error);
//         }
//     };
//     fetchAccounts();
// }, []);
const [cart, setCart] = useState([]);

const handleAddToCart = (product) => {
    setCart([...cart, product]);
};

const handleDelete = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
};

  return (
    <div className="App">
      <Navbar />
      <Routes>
            <Route path="/viewoption" element={<ViewOption daybeds={furnitureLivingRoomDaybeds} collections={furnitureLivingRoomCollections} />}/>
            <Route path="/options" element={<Options/>}/>
            <Route path="/all-products" element={<ProductMenu daybeds={furnitureLivingRoomDaybeds} />} />
            <Route path="/product-details/:id" element={<ProductDetails daybeds={furnitureLivingRoomDaybeds} handleAddToCart={handleAddToCart} collections={furnitureLivingRoomCollections}/>} />
            <Route path="/cart" element={<Cart cart={cart} handleDelete={handleDelete}/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
