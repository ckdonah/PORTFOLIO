import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getActiveClass = ({ isActive }) => (isActive ? 'text-blue-500' : '');

  return (
    <header className="bg-white text-black p-5 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4">
        <HashLink
          smooth
          to="/#home"
          className="text-3xl font-bold"
          onClick={closeMenu}
        >
          GON
        </HashLink>
        <button
          className="text-5xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center justify-center fixed md:static inset-0 md:inset-auto bg-white z-50 p-12 md:p-0 space-y-4 md:space-y-0 md:space-x-8 transition-all duration-300`}
        >
          <HashLink
            smooth
            to="/#home"
            className={`${
              isOpen ? 'text-2xl md:text-base' : 'text-lg'
            } font-semibold ${getActiveClass}`}
            onClick={closeMenu}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#work"
            className={`${
              isOpen ? 'text-2xl md:text-base' : 'text-lg'
            } font-semibold`}
            onClick={closeMenu}
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="/about#top"
            className={`${
              isOpen ? 'text-2xl md:text-base' : 'text-lg'
            } font-semibold ${getActiveClass}`}
            onClick={closeMenu}
          >
            About
          </HashLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
