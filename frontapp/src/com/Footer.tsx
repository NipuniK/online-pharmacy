import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address to subscribe.');
      return;
    }
    // Placeholder: wire this to an API later
    alert(`Thanks! ${email} has been added to our newsletter.`);
    setEmail('');
  };

  return (
    <footer className="pharm-footer bg-light text-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Health Mart Pharmacy</h5>
            <p className="small">Trusted care and fast delivery. Licensed pharmacists available to consult and assist.</p>
            <div className="d-flex gap-2">
              <a href="#" aria-label="facebook" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="instagram" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="twitter" className="text-dark fs-5"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-dark">Home</Link></li>
              <li><Link to="/Medicines" className="text-dark">Medicines</Link></li>
              <li><Link to="/Register" className="text-dark">Register</Link></li>
              <li><Link to="/Login" className="text-dark">Login</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled small">
              <li>Prescription Refills</li>
              <li>Online Pharmacist Consultation</li>
              <li>Home Delivery</li>
              <li>Vitamins & Supplements</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Contact & Hours</h6>
            <p className="small mb-1">Phone: <a href="tel:+94123456789" className="text-dark">+94 123 456 789</a></p>
            <p className="small mb-1">Email: <a href="mailto:info@healthmart.com" className="text-dark">info@healthmart.com</a></p>
            <p className="small">Mon - Fri: 8:00 AM - 8:00 PM<br/>Sat: 9:00 AM - 6:00 PM<br/>Sun: Closed</p>
          </div>
        </div>

        <div className="row align-items-center mt-3">
          <div className="col-md-8">
            <form className="d-flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email for offers & health tips"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <button className="btn pharm-btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
          <div className="col-md-4 text-md-end small mt-3 mt-md-0">
            <div>© {new Date().getFullYear()} Health Mart. All rights reserved.</div>
            <div><Link to="/Privacy" className="text-dark">Privacy</Link> · <Link to="/Terms" className="text-dark">Terms</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
