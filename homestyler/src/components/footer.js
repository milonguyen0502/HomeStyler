import React from 'react';
import '../css/footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-item">
          <h3>ORDERS</h3>
          <p>Find out when your purchase will arrive or schedule a delivery.</p>
          <a href="#">TRACK ORDER</a> | <a href="#">SCHEDULE DELIVERY</a>
        </div>
        <div className="footer-item">
          <h3>CONTACT US & STORE LOCATOR</h3>
          <p>Questions? Text us: <a href="tel:+15103992206">(510) 399-2206</a></p>
          <a href="#">CHAT WITH US</a> | <a href="#">LEAVE FEEDBACK</a> | <a href="#">FIND A STORE</a>
        </div>
        <div className="footer-item">
          <h3>CB2 CREDIT CARD</h3>
          <p>Earn Reward Dollars every time you shop* (excluding special financing purchases), plus get access to special offers and events.</p>
          <a href="#">APPLY NOW</a> | <a href="#">MANAGE YOUR ACCOUNT</a>
        </div>
        <div className="footer-item">
          <h3>OUR IOS APP</h3>
          <p>Shop exclusive first looks, get personalized alerts and manage your registry faster and easier than ever before.</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="footer-column">
            <h4>HELP</h4>
            <a href="#">CUSTOMER SERVICE</a>
            <a href="#">ACCOUNT</a>
            <a href="#">RETURN POLICY</a>
            <a href="#">SHIPPING INFORMATION</a>
            <a href="#">PRODUCT RECALLS</a>
            <a href="#">EMAIL & TEXT PREFERENCES</a>
            <a href="#">SIGN UP FOR TEXTS</a>
          </div>

          <div className="footer-column">
            <h4>RESOURCES</h4>
            <a href="#">FREE DESIGN SERVICES</a>
            <a href="#">GIFT REGISTRY</a>
            <a href="#">GIFT CARDS</a>
            <a href="#">CATALOGS</a>
            <a href="#">TRADE PROGRAM</a>
            <a href="#">CONTRACT GRADE FURNITURE</a>
          </div>

          <div className="footer-column">
            <h4>OUR COMPANY</h4>
            <a href="#">ABOUT US</a>
            <a href="#">CAREERS</a>
            <a href="#">RESPONSIBLE DESIGN</a>
            <a href="#">ACCESSIBILITY STATEMENT</a>
          </div>

          <div className="footer-column">
            <h4>SHOW US YOUR LOOK WITH #MYCB2</h4>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-tiktok"></i></a>
            <a href="#"><i className="fa fa-pinterest"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>

          <div className="footer-column">
            <h4>OUR BRANDS</h4>
            <a href="#">CB2</a>
            <a href="#">HUDSON</a>
            <a href="#">GRACE</a>
            <a href="#">Crate&Barrel</a>
            <a href="#">Crate&kids</a>
          </div>
        </div>
      </div>

      <div className="footer-terms">
        <a href="#">TERMS OF USE</a> | 
        <a href="#">PRIVACY</a> | 
        <a href="#">SITE INDEX</a> | 
        <a href="#">AD CHOICES</a> | 
        <a href="#">COOKIE SETTINGS</a> | 
        <a href="#">CA SUPPLY CHAINS ACT</a> | 
        <a href="#">DO NOT SELL OR SHARE MY PERSONAL INFORMATION</a>
        <p>©2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
