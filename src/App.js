import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Experiences from './pages/experiences';

function App() {

  //const [token, setToken] = useState();

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/experiences' element={<Experiences/>} />
      </Routes>
    </Router>
  );
}

export default App;
