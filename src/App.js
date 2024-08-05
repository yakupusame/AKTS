import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import SearchComponent from './SearchComponent';
import NavBar from './components/NavBar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './styles.css';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/signin" />} />
        <Route path="/search" element={user ? <SearchComponent /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
