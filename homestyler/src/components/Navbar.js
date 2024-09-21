import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar({ daybeds }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);
    const results = daybeds.filter((product) =>
      product.name && product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(results);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <input
            type="text"
            placeholder="What can we help you find?"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch} 
          />
          <div className="search-button">
            <p><i className="fa fa-search" aria-hidden="true"></i></p>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img src="../img/homepage/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <i className="cart-icon">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </i>
          </Link>
          <Link to="/login">
            <i className="account-icon">
              <i className="fa fa-user" aria-hidden="true"></i>
            </i>
          </Link>
        </div>
      </nav>
      {searchTerm && (
        <div className="search-results">
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))
            ) : (
              <li>No products found</li>
            )}
          </ul>
        </div>
      )}

      <nav className="nav">
        <ul>
          <li><Link to="/options">FURNITURE</Link></li>
          <li><a href="/options">OUTDOOR</a></li>
          <li><a href="/options">DECOR & MIRRORS</a></li>
          <li><a href="/options">LIGHTING</a></li>
          <li><a href="/options">RUGS</a></li>
          <li><a href="/options">PILLOWS & THROWS</a></li>
          <li><a href="/options">BEDDING & BATH</a></li>
          <li><a href="/designer">DESIGNER</a></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">
              OUR SELECTIONS
            </a>
            <div className="dropdown-content">
              <a href="/options">Best Sellers</a>
              <a href="/options">Inspiration</a>
              <a href="/designer">Designers</a>
              <a href="/options">Free Design Services</a>
              <a href="/options">Wedding Registry</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
