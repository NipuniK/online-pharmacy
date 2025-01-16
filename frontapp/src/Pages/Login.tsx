import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();


  const handleLogin =async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Make a POST request to the login endpoint of your backend
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      // Store the JWT token in localStorage (or sessionStorage)
      localStorage.setItem('token', response.data.token);

      // Navigate to another page, e.g., the dashboard, if login is successful
      navigate('/');

    } catch (err) {
      // Handle errors, e.g., invalid login credentials
      setError('Login failed. Please check your credentials and try again.');
      console.error('Error during login:', err);
    }
   
  };
 
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                
              </form>
              <p>
              Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
