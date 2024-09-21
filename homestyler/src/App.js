
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import './App.css';
import SelectCategory from "./components/selectCategory";
import ScrollToTop from "./components/ScrollToTop";
import DesignerCollective from "./components/DesignerCollective";
import ProfileDesigner from "./components/ProfileDesigner";
import profile from './json/profile.json';
import furnitureLivingRoomAccentChairs from './json/furnitureLivingRoomAccentChairs.json';
import Home from "./components/Home";
import Footer from "./components/footer";
import furnitureLivingRoomCoffeeTables from './json/furnitureLivingRoomCoffeeTables.json'
import DesignerCollection from './json/DesignCollection.json'
import DesignerCollectionDetail from "./components/DesignerCollectionDetail";
import RoyalLivingRoom from "./json/RoyalLivingRoom.json";
import funitureLivingRoomSessionals from "./json/funitureLivingRoomSessionals.json";
import WallMirror from "./json/WallMirror.json";
import FloorMirror from "./json/FloorMirror.json";
import officeFurnitureDesks from "./json/officeFurnitureDesks.json";
import MostView from "./components/MostView";
import BackToTop from "./components/BacktoTop";
import LoginForm from "./components/LoginForm";
import Signup from "./components/SignUp";
import Sitemap from "./components/Sitemap";


function App() {

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
      <ScrollToTop/>
      <Navbar daybeds={furnitureLivingRoomDaybeds}/>
      <Routes>
            <Route path="/" element={<Home  daybeds={furnitureLivingRoomDaybeds} collections={furnitureLivingRoomCollections} chair={furnitureLivingRoomAccentChairs} table={furnitureLivingRoomCoffeeTables}/>}/>
            <Route path="/viewoption" element={<ViewOption daybeds={furnitureLivingRoomDaybeds} collections={furnitureLivingRoomCollections} chair={furnitureLivingRoomAccentChairs} table={furnitureLivingRoomCoffeeTables} sessional={funitureLivingRoomSessionals} mirror={WallMirror} desk={officeFurnitureDesks} fmirror={FloorMirror}/>}/>
            <Route path="/options" element={<Options/>}/>
            <Route path="/all-products" element={<ProductMenu daybeds={furnitureLivingRoomDaybeds} daybeds={furnitureLivingRoomDaybeds}/>} />
            <Route path="/product-details/:id" element={<ProductDetails daybeds={furnitureLivingRoomDaybeds} handleAddToCart={handleAddToCart} collections={furnitureLivingRoomCollections} chair={furnitureLivingRoomAccentChairs} table={furnitureLivingRoomCoffeeTables} DesignerCollection={DesignerCollection}  sessional={funitureLivingRoomSessionals} mirror={WallMirror} desk={officeFurnitureDesks} fmirror={FloorMirror}/>} />
            <Route path="/cart" element={<Cart cart={cart} handleDelete={handleDelete}/>}/>
            <Route path="/designer" element={<DesignerCollective daybeds={furnitureLivingRoomDaybeds}/>}/>
            <Route path="profile-designer/:id" element={<ProfileDesigner daybeds={furnitureLivingRoomDaybeds} profile={profile} collections={furnitureLivingRoomCollections} DesignerCollection={DesignerCollection}/>}/>
            <Route path="/designer-collection-detail/:id" element={<DesignerCollectionDetail DesignerCollection={DesignerCollection} handleAddToCart={handleAddToCart} RoyalLivingRoom={RoyalLivingRoom}/>} />
            <Route path="/mostview" element={<MostView daybeds={furnitureLivingRoomDaybeds} collections={furnitureLivingRoomCollections}/>}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <BackToTop/>
      <Footer />
    </div>
  );
}

export default App;
