import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import profile from '../assets/profile.png';
import './NavbarStyles.css';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Link to="/" className="navbar-buyit font-bold hover:underline">BuyIt</Link>
        <Link to="/" className="navbar-link hover:underline hidden md:inline">New Arrival</Link>
        <Link to="/" className="navbar-link hover:underline hidden md:inline">Explore</Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 mb-4 md:mb-0">
        <input type="text" placeholder="Search..." className="navbar-search-input" />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/checkout" className="text-primary-700 hover:text-gray-500 relative">
          <FaShoppingCart className="navbar-cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
        <div className="flex items-center space-x-1 ml-auto">
          <img src={profile} alt="Profile" className="navbar-profile-img" />
          <span className="navbar-link hover:underline">My Account</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
