import axios from 'axios';

// Set the base URL of your backend API
const API_URL = 'http://localhost:3000/api';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: API_URL,
});

export default api;
