import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../com/Carousel";
import api from "../services/api";
import ProductDescription from "../com/ProductDescription";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (medicineType: string) => {
    navigate(`/Medicines?category=${encodeURIComponent(medicineType)}`);
  };

  const [featured, setFeatured] = useState<Array<any>>([]);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const res = await api.get(`/products?category=${encodeURIComponent('Personal Care')}`);
        setFeatured(res.data.slice(0, 4)); // show up to 4 featured
      } catch (err) {
        console.error('Failed to load featured products', err);
      }
    };
    loadFeatured();
  }, []);

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

      {/* Featured Personal Care Products (dynamic) */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Featured Personal Care</h3>
        <div className="row">
          {featured.length > 0 ? (
            featured.map((p) => (
              <div key={p._id} className="col-md-3 mb-3">
                <ProductDescription
                  _id={p._id}
                  brand_name={p.brand_name}
                  pharm_name={p.pharm_name}
                  description={p.description}
                  price={p.price}
                  imageUrl={p.imageUrl || ''}
                  stock={p.stock}
                  category={p.category}
                  medicineType={p.medicineType}
                  showControls={false}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No featured Personal Care products available.</p>
            </div>
          )}
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-outline-primary" onClick={() => handleCategoryClick('Personal Care')}>
            View all Personal Care
          </button>
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
      </div>
    </>
  );
};

export default Home;
