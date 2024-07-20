import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Medicines from './Pages/Medicine';
import Footer from './com/Footer';
import Navigation from './com/Navigation';
import Contact from './Pages/Contact';

function App() {
  return (
  
      <div className="App">
        <Navigation />
        <Routes>
          
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
