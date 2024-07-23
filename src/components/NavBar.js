import React from 'react';
import './NavBar.css';  // Ensure this path matches the location of NavBar.css

function NavBar() {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/signup">Sign Up</a>
      <a href="/signin">Sign In</a>
    </div>
  );
}

export default NavBar;
