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
    <header className="bg-white text-black p-6 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-8">
        <HashLink
          smooth
          to="/#home"
          className="text-2xl font-bold"
          onClick={closeMenu}
        >
          Godwin.
        </HashLink>
        <button
          className="text-3xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-40 p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
        >
          <HashLink
            smooth
            to="/#home"
            className={`text-lg font-semibold ${getActiveClass}`}
            onClick={closeMenu}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#work" 
            className="text-lg font-semibold"
            onClick={closeMenu}
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="/about#top"
            className={`text-lg font-semibold ${getActiveClass}`}
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
