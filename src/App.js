import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';  // Ensure these paths are correct
import AppRouter from './routes/Router';

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
