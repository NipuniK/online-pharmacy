import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './com/Footer';
import Navigation from './com/Navigation';

function App() {
  return (
  
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
