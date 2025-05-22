
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavLinkItem } from '../../types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Using Heroicons for menu toggle
import GoogleTranslatePlaceholder from '../ui/GoogleTranslatePlaceholder';

interface NavbarProps {
  logoSrc: string;
  navLinks: NavLinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-10 sm:h-12 w-auto" src={logoSrc} alt="Nehemia Ministry Kenya Logo" />
              <span className="ml-3 text-xl sm:text-2xl font-bold tracking-tight hidden md:block">Nehemia Ministry</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-amber-400 transition-colors duration-150 ${
                    isActive ? 'active-nav-link bg-slate-700' : 'text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <GoogleTranslatePlaceholder />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <GoogleTranslatePlaceholder />
            <button
              onClick={toggleMenu}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-slate-800 p-2 space-y-1 sm:px-3 z-40 shadow-xl" id="mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-amber-400 transition-colors duration-150 ${
                  isActive ? 'active-nav-link bg-slate-700' : 'text-gray-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
