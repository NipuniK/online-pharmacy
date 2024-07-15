import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Pharmacy Name</h5>
            <p>
              Your trusted pharmacy for all your medical needs. We provide quality medicines and health products with the best customer service.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Home</a></li>
              <li><a href="#!" className="text-dark">About</a></li>
              <li><a href="#!" className="text-dark">Services</a></li>
              <li><a href="#!" className="text-dark">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Email: info@pharmacy.com</a></li>
              <li><a href="#!" className="text-dark">Phone: +1 234 567 890</a></li>
              <li><a href="#!" className="text-dark">Address: 123 Pharmacy St, Health City</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-dark" href="https://pharmacy.com/">pharmacy.com</a>
      </div>
    </footer>
  );
}

export default Footer;
