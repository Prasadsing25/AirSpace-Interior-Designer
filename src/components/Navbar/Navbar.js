import React, { useState, useEffect } from 'react';
import './Navbar.css';
const Navbar = () => {
  // //Product counter
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log("Updated cart count:", cartCount);
  }, [cartCount]);

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <a href="/" className="logo">LivSpace</a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='/connect'>Help</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon" aria-label="Shopping Cart">
        <i className="fas fa-shopping-cart"></i></a>
        <button
          type="button"
          onClick={() => {
            setCartCount(cartCount + 1);
          }}
        >
          Add to Cart
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartCount}</span>
        </button>
        <button href='/login' style={{ color: "white", backgroundColor: "black" }}>AdminLogin</button>


        <a href="/" className="user-icon" aria-label="User Account">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;