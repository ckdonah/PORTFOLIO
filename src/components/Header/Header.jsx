import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getActiveClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <header className="header">
      <div className="header-container">
        <HashLink smooth to="/#home" className="header-logo" onClick={closeMenu}>
          Godwin.
        </HashLink>
        <button className="burger-menu" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          <HashLink smooth to="/#home" className={`header-link ${getActiveClass}`} onClick={closeMenu}>
            Home
          </HashLink>
          <HashLink smooth to="/#projects" className="nav-link header-link" onClick={closeMenu}>
            Work
          </HashLink>
          {/* Update About link to scroll to the top */}
          <HashLink smooth to="/about#top" className={`header-link ${getActiveClass}`} onClick={closeMenu}>
            About
          </HashLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
