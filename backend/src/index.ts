import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/product';
import userRoutes from './routes/user';
import authRoutes from './routes/auth'
import protectedRoutes from './routes/login';
dotenv.config();




const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Use cors middleware
app.use(express.json());


mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://nipunikfernando:4qXS2NNX05fmePIp@cluster0.iwcbyhz.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));

  app.use('/api', productRoutes);
  app.use('/api', userRoutes);
  app.use('/api', authRoutes);
app.use('/api', protectedRoutes);