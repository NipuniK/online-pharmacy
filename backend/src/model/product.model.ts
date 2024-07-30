import { Schema, model, Document } from 'mongoose';

// Interface representing a Product document in MongoDB
export interface IProduct extends Document {
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  stock: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to update the updatedAt field
productSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Create and export the model
export const Product = model<IProduct>('Product', productSchema);
