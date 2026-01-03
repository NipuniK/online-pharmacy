import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
  setIsAuthenticated: (isAuth: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    
    // ✅ Update authentication state immediately
    setIsAuthenticated(false);
    
    setMessage("✅ Logged out successfully!");
    navigate("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pharm-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Medicines">
                Our Products
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            )}
            
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/AddNewProduct">
                  Add New Product
                </Link>
              </li>
            )}
          </ul>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn pharm-btn-primary ms-2">
              Logout
            </button>
          ) : (
            <Link to="/Login" className="btn pharm-btn-primary ms-2">
              Login
            </Link>
          )}
        </div>
      </nav>

      {message && (
        <div className="container mt-2">
          <div className="alert alert-info">{message}</div>
        </div>
      )}
    </>
  );
};

export default Navigation;
