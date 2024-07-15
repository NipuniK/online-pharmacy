import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Pharmacy</h1>
      <p>Your trusted pharmacy for all your medical needs. We provide quality medicines and health products with the best customer service.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/path/to/featured-product.jpg" className="card-img-top" alt="Featured Product" />
            <div className="card-body">
              <h5 className="card-title">Featured Product</h5>
              <p className="card-text">Check out our featured product of the month.</p>
              <a href="/product-details" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/path/to/service-1.jpg" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Our Services</h5>
              <p className="card-text">Discover the range of services we offer to keep you healthy.</p>
              <a href="/services" className="btn btn-primary">Explore Services</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/path/to/contact.jpg" className="card-img-top" alt="Contact" />
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Have questions? Get in touch with us.</p>
              <a href="/contact" className="btn btn-primary">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
