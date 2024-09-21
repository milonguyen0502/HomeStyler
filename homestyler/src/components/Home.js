import React from "react";
import "../css/Home.css";
import SelectCategory from "./selectCategory";
import MyCarousel from "./MyCarousel";
import { Link } from "react-router-dom";
import MostView from "./MostView";
import CarouselProduct from "./CarouselProduct";
import { useNavigate } from "react-router-dom";
function Home({daybeds, collections, chair, table}) {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/all-products', { state: { products: collections, category: 'Sofa & Sectional Collections' } });
};
  return (
    <div className="row">
      <div className="col-12 home-image-container">
        <img
          src="./img/homepage/luxury.jpg"
          alt="luxury"
          className="home-image"
        />
        <div className="home-image-text">{"WELL MADE IS ALWAYS WORTH IT"}</div>
        <p className="home-image-text-2">
          150+ CUSTOM FABRICS, DELIVERY IN AS LITTLE AS 4 WEEKS
        </p>
        <div className="home-image-text-3">
            <button  onClick={handleSeeMore}>SHOP BEST SELLERS</button>
            <button  onClick={handleSeeMore}>SHOP SOFA COLLECTIONS</button>
        </div>
        <div className="div-h3">
          <h3>BROWSE OUR BEST SELLERS</h3>
          <p>THESE PIECES ADD INSTANT CHARACTER TO ANY SPACE</p>
        </div>
      </div>
      <CarouselProduct daybeds={daybeds}/>
      <div className=".lower-div">
      
        <div className="home-image-container">
          <img
            src="./img/homepage/mordern3.webp"
            alt="mordern"
            className="home-image-3"
          />
          <div className="home-image-text-4 ">{"WORTH THE HYPE"}</div>
          <div className="home-image-text-5">
            <button onClick={handleSeeMore}>SHOP BEST SELLERS</button>
          </div>
          <div className="div-h3">
          <h3>OUR VISION</h3>
          <p>THESE PIECES ADD INSTANT CHARACTER TO ANY SPACE</p>
        </div>
        </div>
        <CarouselProduct collections={collections}/>
        <div className="home-image-container">
          <img
            src="./img/homepage/bedroomwood.jpg"
            alt="bedroom"
            className="home-image-2"
          />
          <div className="home-image-text-6">
            {"LIKE SLEEPING IN A GRAND HOTEL"}
          </div>
          <p className="home-image-text-7">
            NEW BEDDING IN THE FINEST OF MATERIALS-AND IT ALL SHIPS FREE
          </p>
          <div className="home-image-text-8">
            <button onClick={handleSeeMore}>SHOP BEDROOM FURNITURE</button>
            <button onClick={handleSeeMore}>SHOP BEDDING</button>
          </div>
          <div className="div-h3">
          <h3>BROWSE OUR BEST SELLERS</h3>
          <p>THESE PIECES ADD INSTANT CHARACTER TO ANY SPACE</p>
        </div>
        </div>
        <CarouselProduct chair={chair}/>
      </div>
    </div>
  );
}

export default Home;
