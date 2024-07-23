import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default AppRouter;
