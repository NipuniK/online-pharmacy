import { Schema, model, Document } from 'mongoose';

// Interface representing a User document in MongoDB
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  
});

// Pre-save hook to update the updatedAt field
userSchema.pre('save', function (next) {
 
  next();
});

// Create and export the model
export const User = model<IUser>('User', userSchema);
