import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/image/logo.png" alt="Logo" />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <a href="#">HOME</a>
        <a href="#">BIKES</a>
        <a href="#">GEAR</a>
        <a href="#">PARTS</a>
        <a href="#">TIRES</a>
        <a href="#">SERVICE-INFO</a>
        <a href="#">CATALOGES</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className="icons">
        <FaSearch />
        <FaShoppingCart />
      </div>
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
