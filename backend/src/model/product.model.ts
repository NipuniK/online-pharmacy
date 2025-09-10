import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  brand_name: string;
  _id: string; 
  pharm_name: string;
  description: string;
  price: number;
  category?: string;
  stock: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const productSchema = new Schema<IProduct>({
  brand_name: { type: String, required: true },
  pharm_name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String },
  stock: { type: Number, required: true },
  imageUrl: { type: String }, // Add imageUrl field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to update the updatedAt field
productSchema.pre('save', function (next) {
  (this as any).updatedAt = new Date();
  next();
});

// Create and export the model
export const Product = model<IProduct>('Product', productSchema);
