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
        <NavLink to="/" className="header-logo" onClick={closeMenu}>OGD</NavLink>
        <button className="burger-menu" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          <HashLink smooth to="/#projects" className="nav-link header-link" onClick={closeMenu}>Projects</HashLink>
          <NavLink to="/about" className={`header-link ${getActiveClass}`} onClick={closeMenu}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
