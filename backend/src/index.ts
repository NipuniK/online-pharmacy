// src/index.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';  // Import the Express app from app.ts

// Load environment variables from .env file
dotenv.config();

// Define the port to run the server on (from environment or default to 3000)
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the Express server after a successful MongoDB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
