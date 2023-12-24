// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/aboutus" className="navbar-link">About Us</Link>
        <Link to="/contactus" className="navbar-link">Contact Us</Link>
      </div>
      <div className="navbar-right">
        <Link to="/user" className="navbar-link">User</Link>
        <Link to="/staff-signup" className="navbar-link">Staff Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
