import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="hero-image">
        <Link to="/" className="logo">
          MUSIC DB
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
