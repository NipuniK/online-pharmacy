import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');  // State for email input
  const [password, setPassword] = useState<string>('');  // State for password input
  const [error, setError] = useState<string>('');  // State for error handling
  const navigate = useNavigate();  // For navigating after successful registration

  // Handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send POST request to register endpoint
      const response = await axios.post('http://localhost:3000/api/register', {
        email,
        password
      });

      // Store the JWT token returned by the server
      localStorage.setItem('token', response.data.token);

     
      navigate('/');
    } catch (err) {
      // Handle errors, e.g., if user already exists
      setError('Registration failed. The user may already exist.');
      console.error('Error during registration:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Register</h2>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
