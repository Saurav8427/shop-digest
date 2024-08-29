// Header.js
import React, { useState } from "react";
import './Header.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="header-container">
      <div className="flex items-center space-x-4">
        {/* Burger Menu for Mobile */}
        <div className="burger-menu" onClick={toggleMobileNav}>
          &#9776; {/* Unicode for burger menu icon */}
        </div>
        <i className="fa-solid fa-user"></i>
        {/* Logo with Shopify Dropdown */}
        <div className="header-logo">
          <a href="/" className="text-purple-600 text-2xl font-bold 2xs:text-xl">
            ShopDigest
          </a>
          <div className="shopify-dropdown">
            <span className="mr-1 font-thin text-gray-700">|</span>
            <button className="shopify-dropdown-button">
              Shopify <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {/* <ul className="shopify-dropdown-menu group-hover:block">
              <li>
                <a href="/" className="dropdown-item">
                  Option 1
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Option 2
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="nav-menu">
        <a href="/" className="nav-link">
          Features
        </a>
        <a href="/" className="nav-link marketplace">
          Marketplace
        </a>
        <div className="relative group">
          <button className="dropdown-button">
            Company <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </button>
        </div>
        <a href="/" className="nav-link team">
          Team
        </a>
        <a href="/" className="nav-link">
          Contact
        </a>
      </nav>

      {/* Buttons */}
      <div className="header-buttons">
        <button className="login-button">Login</button>
        <button className="add-post-button">Add post →</button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`}>
        <div className="close-button" onClick={toggleMobileNav}>
          &times; {/* Unicode for close (x) icon */}
        </div>
        <ul className="mobile-nav-links">
          <li>
            <a href="/" className="mobile-nav-link">Shopify</a>
          </li>
          <li>
            <a href="/" className="mobile-nav-link">Features</a>
          </li>
          <li>
            <a href="/" className="mobile-nav-link">Marketplace</a>
          </li>
          <li>
            <a href="/" className="mobile-nav-link">Company</a>
          </li>
          <li>
            <a href="/" className="mobile-nav-link">Team</a>
          </li>
          <li>
            <a href="/" className="mobile-nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
