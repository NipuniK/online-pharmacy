import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface AdminNavProps {
  setIsAuthenticated: (isAuth: boolean) => void;
}

const AdminNav: React.FC<AdminNavProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    
    // ✅ Update authentication state immediately
    setIsAuthenticated(false);
    
    setMessage("✅ Logged out successfully!");
    navigate("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-white" href="#">
          Admin Panel
        </a>
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
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Medicines">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AddNewProduct">
                Add New Product
              </Link>
            </li>
          </ul>

          <button onClick={handleLogout} className="btn btn-danger ms-2">
            Logout
          </button>
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

export default AdminNav;