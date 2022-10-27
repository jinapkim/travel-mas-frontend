import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
