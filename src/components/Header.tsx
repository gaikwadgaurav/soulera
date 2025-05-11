import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
          <a href="/" className={isActive("/") ? "active" : ""}>Home</a>
          <a href="/features" className={isActive("/features") ? "active" : ""}>Features</a>
          <a href="/blog" className={isActive("/blog") ? "active" : ""}>Blog</a>
          <a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</a>
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
