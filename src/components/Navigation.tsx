import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="custom-nav-wrapper">
      <div className={`custom-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link
          to="/case-studies"
          className={location.pathname === '/case-studies' ? 'active' : ''}
          onClick={closeMobileMenu}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
          onClick={closeMobileMenu}
        >
          About
        </Link>
      </div>
      <button
        className={`custom-mobile-menu-toggle${isMobileMenuOpen ? ' open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Navigation; 