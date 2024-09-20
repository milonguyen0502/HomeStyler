import React from "react";
import "../css/Home.css";
import SelectCategory from "./selectCategory";
import MyCarousel from "./MyCarousel";

function Home() {
  return (
    <div>
      <div className="home-image-container">
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
          <button>SHOP BEST SELLERS</button>
          <button>SHOP SOFA COLLECTIONS</button>
        </div>
        <div className="div-h3">
          <h3>BROWSE OUR BEST SELLERS</h3>
          <p>THESE PIECES ADD INSTANT CHARACTER TO ANY SPACE</p>
        </div>
      </div>
      <SelectCategory />
      <div className=".lower-div">
        <div className="div-h3">
          <h3>A FEAST OF FINERY</h3>
          <p>THE BEST GATHERINGS START WITH A PROPERLY SET FOUNDATION</p>
        </div>
        <div>
          <img
            src="./img/homepage/mordern2.avif"
            alt="mordern"
            className="home-image"
          />
        </div>
        <div className="home-image-container">
          <img
            src="./img/homepage/mordern3.webp"
            alt="mordern"
            className="home-image-3"
          />
          <div className="home-image-text-4 ">{"WORTH THE HYPE"}</div>
          <div className="home-image-text-5">
            <button>SHOP BEST SELLERS</button>
          </div>
        </div>
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
            <button>SHOP BEDROOM FURNITURE</button>
            <button>SHOP BEDDING</button>
          </div>
        </div>
        <div className="div-h3">
          <h1>GET GUEST-READY FOR THE SEASON</h1>
        </div>
        <MyCarousel />
        <div className="home-image-container">
          <img
            src="./img/homepage/designer.jpg"
            alt="design"
            className="home-image-2"
          />
          <div className="home-image-text-9">{"THE DESIGNER COLLECTIVE"}</div>
          <div className="home-image-text-10">
            <button>MEET OUR DESIGNERS</button>
          </div>
        </div>
        <div className="div-h3">
          <h1>EXPLORE THE COLLECTIVE</h1>
          <p>EXCLUSIVE PIECES FROM THE BEST NAMES IN DESIGN</p>
        </div>
        <MyCarousel />
      </div>
    </div>
  );
}

export default Home;
