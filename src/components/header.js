import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta">
        <button className="cta-btn">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
