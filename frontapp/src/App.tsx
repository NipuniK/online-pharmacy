import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './com/Footer';

function App() {
  return (
  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
