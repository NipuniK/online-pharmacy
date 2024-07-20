// Contact.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
            {isSubmitted && <p className="mt-3 text-success">Thank you for your message!</p>}
          </form>
        </div>
        <div className="col-md-6">
          <h2>Contact Details</h2>
          <p><strong>Address:</strong> 123 Health St, Wellness City, HC 45678</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> support@healthmart.com</p>
          <p><strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
