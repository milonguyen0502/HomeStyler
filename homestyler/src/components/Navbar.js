import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <input
            type="text"
            placeholder="What can we help you find?"
            className="search-bar"
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="navbar-center">
          <h1>HomeStyler</h1>
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <i className="cart-icon">🛒</i>
          </Link>
          <a href="#">
            <i className="heart-icon">❤️</i>
          </a>
          <a href="#">
            <i className="account-icon">👤</i>
          </a>
        </div>
      </nav>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">NEW</a>
          </li>
          <li>
            <Link to="/options">FURNITURE</Link>
          </li>
          <li>
            <a href="#">OUTDOOR</a>
          </li>
          <li>
            <a href="#">DECOR & MIRRORS</a>
          </li>
          <li>
            <a href="#">LIGHTING</a>
          </li>
          <li>
            <a href="#">RUGS</a>
          </li>
          <li>
            <a href="#">PILLOWS & THROWS</a>
          </li>
          <li>
            <a href="#">BEDDING & BATH</a>
          </li>
          <li>
            <a href="#">TABLETOP & BAR</a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              OURS SELECTIONS
            </a>
            <div class="dropdown-content">
              <a href="#">Best Sellers</a>
              <a href="#">Inspiration</a>
              <a href="#">Designers</a>
              <a href="#">Free Design Services</a>
              <a href="#">Wedding Registry</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
