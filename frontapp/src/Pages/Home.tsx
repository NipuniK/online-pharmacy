import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../com/Carousel";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (medicineType: string) => {
    navigate(`/Medicines?category=${encodeURIComponent(medicineType)}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-light text-dark text-center py-5">
        <h1 className="display-4 fw-bold mt-4">Your Health, Our Priority</h1>
        <p className="lead">Trusted Online Pharmacy at Your Doorstep</p>
        <div className="mt-3">
          <button className="btn btn-primary mx-2">Shop Now</button>
          <button className="btn btn-outline-primary mx-2">View Medicines</button>
        </div>
      </div>

      {/* Categories */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Featured Categories</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div 
              className="card p-3 shadow-sm" 
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick('Prescription Medicines')}
            >
              <i className="bi bi-capsule fs-1"></i>
              <h6 className="mt-2">Prescription Medicines</h6>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div 
              className="card p-3 shadow-sm" 
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick('Over-the-Counter (OTC)')}
            >
              <i className="bi bi-bandaid fs-1"></i>
              <h6 className="mt-2">Over-the-Counter (OTC)</h6>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div 
              className="card p-3 shadow-sm" 
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick('Vitamins & Supplements')}
            >
              <i className="bi bi-heart-pulse fs-1"></i>
              <h6 className="mt-2">Vitamins & Supplements</h6>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div 
              className="card p-3 shadow-sm" 
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick('Personal Care')}
            >
              <i className="bi bi-person-hearts fs-1"></i>
              <h6 className="mt-2">Personal Care</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Featured Products</h3>
        <div className="row text-center">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-3 mb-3">
              <div className="card p-3 shadow-sm">
                <img
                  src={`product${item}.jpg`}
                  alt={`Product ${item}`}
                  className="img-fluid mb-2"
                />
                <h6>Product {item}</h6>
                <p>$15</p>
                <button className="btn btn-sm btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="container my-5 text-center">
        <input
          type="text"
          className="form-control w-75 mx-auto"
          placeholder="Search medicines, brands, or health products"
        />
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-truck fs-1"></i>
            <p className="mt-2">Delivery within 24 hours</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-check fs-1"></i>
            <p className="mt-2">Verified medicines only</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-headset fs-1"></i>
            <p className="mt-2">
              Safe, affordable, and fast delivery to your doorstep
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2025 Health Mart | All Rights Reserved</p>
      </div>
    </>
  );
};

export default Home;
