import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaChevronDown } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const SearchIcon = FaSearch as any;
const CartIcon = FaShoppingCart as any;
const UserIcon = FaUser as any;
const MenuIcon = FaBars as any;
const ChevronDownIcon = FaChevronDown as any;

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
        <div className="logo">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=60&fit=crop" alt="ELLY's House" className="logo-image" />
        </div>
          <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} className="nav-link">Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }} className="nav-link">About</a>
            <div className="nav-dropdown">
              <a href="#" className="nav-link">Services <ChevronDownIcon className="arrow" size={12} /></a>
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('store'); }} className="dropdown-link">Store</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('store'); }} className="dropdown-link">Men's Clothing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('store'); }} className="dropdown-link">Women's Clothing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('store'); }} className="dropdown-link">Children's Clothing</a>
              </div>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }} className="nav-link">Contact</a>
          </nav>
          <div className="header-search">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for items and brands" 
                className="search-input"
              />
              <button className="search-btn"><SearchIcon size={18} /></button>
            </div>
          </div>
          <div className="nav-actions">
            <button className="help-btn">Help & FAQs</button>
            <button className="profile-btn"><UserIcon size={18} /></button>
            <button className="cart-btn"><CartIcon size={18} /></button>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <MenuIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;