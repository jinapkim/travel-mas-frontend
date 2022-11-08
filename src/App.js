import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Experiences from './pages/experiences';
import EditExperiencePage from './pages/edit-experience';

function App() {
  //const [token, setToken] = useState();
  const [experienceToEdit, setExperienceToEdit] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/experiences' element={<Experiences setExperienceToEdit={setExperienceToEdit}/>} />
          <Route path='/edit-experience' element={<EditExperiencePage experienceToEdit={experienceToEdit}/>} />
      </Routes>
    </Router>
  );
}

export default App;
