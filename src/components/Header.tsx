import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <header className="header">
        <h1 className="logo">nullBrains.</h1>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button className="search-button" aria-label="Search">
            <FiSearch size={20} />
          </button>
        </nav>

        <div className={`auth-buttons ${isMenuOpen ? "open" : ""}`}>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
