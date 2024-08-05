import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const NavBar = ({ user }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><button onClick={handleSignOut}>Sign Out</button></li>
          </>
        )}
        {!user && (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
