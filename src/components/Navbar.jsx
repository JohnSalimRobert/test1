import React, { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import logo from '../assets/logo-1.png'


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt='logo'></img></div>
      <div className="nav-links">
        <div className="nav-group">
          <a href="/">Pricing</a>
          <div className="nav-dropdown">
            <a href="/">Company</a>
            <div className="dropdown-content width-fix">
              <a href="/">About Us</a>
              <a href="/">Why us?</a>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="/">Services</a>
            <div className="dropdown-content">
            <div className="sub-dropdown">
                <a href="/">Eassy Writing</a>
                <div className="sub-dropdown-content">
                  <a href="/">Annotated Biblography Service</a>
                  <a href="/">Dissertation Writing Service</a>
                  <a href="/">Literature Review Service</a>
                  <a href="/">Peer Responses Service</a>
                  <a href="/">Research Papers Service</a>
                  <a href="/">Thesis Writing Service</a>
                </div>
              </div>
            <div className="sub-dropdown">
                <a href="/">Applied & Professional Sciences</a>
                <div className="sub-dropdown-content">
                  <a href="/">Nursing Assignment Help</a>
                  <a href="/">Criminal Justice Assignment Help</a>
                  <a href='/'>Proofreading Service</a>
                  <a href='/'>Nutrition Assignment Help</a>
                </div>
              </div>
            <div className="sub-dropdown">
                <a href="/">Custom Essay Writing</a>
                <div className="sub-dropdown-content">
                  <a href="/">Custom Essay Writing</a>
                  <a href="/">CV Writing Service</a>
                  <a href="/">Resume Writing Service</a>
                  <a href="/">Proofreading Service</a>
                  <a href="/">Editing & Formatting Service</a>
                </div>
              </div>
            <div className="sub-dropdown">
                <a href="/">Humanities</a>
                <div className="sub-dropdown-content">
                  <a href="/">English Assignment Help</a>
                  <a href="/">Philosophy Assignment Help</a>
                  <a href='/'>Literature Assignment Help</a>
                  <a href='/'>History Assignment Help</a>
                  <a href='/'>Geography Assignment Help</a>
                </div>
              </div>
            <div className="sub-dropdown">
                <a href="/">Social Sciences</a>
                <div className="sub-dropdown-content">
                  <a href="/">Communication Assignment Help</a>
                  <a href="/">Public Relations Assignment Help</a>
                  <a href="/">Sociology Assignment Help</a>
                  <a href="/">Social Work Assignment Help</a>
                  <a href="/">Religion Assignment Help</a>
                  <a href="/">Psychology Assignment Help</a>
                  <a href="/">Political Assignment Help</a>
                  <a href="/">HRM Assignment Help</a>
                </div>
              </div>
            </div>
          </div>
          <a href="/">Blog</a>
        </div>
      </div>
      <div className="order-login">
        <button className="order-btn">Order Now</button>    
        <div className="nav-dropdown">
        <FaUser className="login-icon" />
            <div className="dropdown-content width-fix">
              <a href="/">Log in</a>
              <a href="/">Sign up</a>
            </div>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/">Pricing</a>
          <a href="/">Company</a>
          <a href="/">Services</a>
          <a href="/">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
