
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import Medicines from './Pages/Medicine';
import Footer from './com/Footer';
import Navigation from './com/Navigation';
import Contact from './Pages/Contact';
import AdminNav from './com/AdminNav';
import AddNewProduct from './adminPages/AddNewProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import React, { useEffect, useState } from 'react';
import EditProduct from './adminPages/EditProduct';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if a token exists in localStorage to determine if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);  // User is logged in
    } else {
      setIsAuthenticated(false);  // User is not logged in
    }
  }, []);
  return (
  
      <div className="App">

        
      {isAuthenticated ? <AdminNav setIsAuthenticated={setIsAuthenticated} /> : <Navigation setIsAuthenticated={setIsAuthenticated} />}

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductForm" element={<AddNewProduct />}/>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/Register' element={<Register setIsAuthenticated={setIsAuthenticated} />}/>
          <Route path="/AddNewProduct" element={<AddNewProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
