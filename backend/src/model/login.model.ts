// models/Owner.ts
import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('Login', loginSchema);
