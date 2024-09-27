import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import Medicines from './Pages/Medicine';
import Footer from './com/Footer';
import Navigation from './com/Navigation';
import Contact from './Pages/Contact';
import AdminNav from './com/AdminNav';
import AddNewProduct from './adminPages/AddNewProduct';
import Login from './com/Login';
function App() {
  return (
  
      <div className="App">
        <Navigation />
        <AdminNav />
        <Routes>
          
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductForm" element={<AddNewProduct />}/>
          <Route path="/login" Component={Login} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
