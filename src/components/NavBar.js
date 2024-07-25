import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure the CSS file exists and is correctly named

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
