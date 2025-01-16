
// src/app.ts
import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product';
import userRoutes from './routes/user';
import authRoutes from './routes/auth';

// Create an Express application
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for frontend requests (adjust as needed)
app.use(cors({
  origin: 'http://localhost:5173'  // Allow requests from your frontend
}));

// Define routes
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

// Export the app without starting the server (this will be done in index.ts)
export default app;
