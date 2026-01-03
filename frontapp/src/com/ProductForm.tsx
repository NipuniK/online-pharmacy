import React, { useState } from 'react';
import { useParams } from "react-router-dom";

interface ProductFormData {
  _id: string;
  brand_name: string;
  pharm_name: string;
  description: string;
  // keep as string in the form state to allow typing; convert on submit
  price: number | string;
  category: string;
  // keep as string here as well to allow empty/typing
  stock: number | string;
  imageUrl: string;
  medicineType: 'Prescription Medicines' | 'Over-the-Counter (OTC)' | 'Vitamins & Supplements' | 'Personal Care';
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  initialData?: Partial<ProductFormData>; // optional for edit
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    _id: initialData?._id || "",
    brand_name: initialData?.brand_name || "",
    pharm_name: initialData?.pharm_name || "",
    description: initialData?.description || "",
    price: initialData?.price != null ? initialData?.price : '',
    category: initialData?.category || "",
    stock: initialData?.stock != null ? initialData?.stock : '',
    imageUrl: initialData?.imageUrl || "",
    medicineType: (initialData as any)?.medicineType || 'Over-the-Counter (OTC)',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // keep price/stock as strings while typing to avoid forcing 0 on empty input
    if (name === "price" || name === "stock") {
      setFormData({
        ...formData,
        [name]: value,
      });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const priceNum = typeof formData.price === 'string' ? parseFloat(formData.price) : formData.price;
    const stockNum = typeof formData.stock === 'string' ? parseInt(String(formData.stock), 10) : formData.stock;

    if (isNaN(Number(priceNum)) || Number(priceNum) <= 0) {
      alert('Price must be a positive number.');
      return;
    }
    if (isNaN(Number(stockNum)) || Number(stockNum) <= 0) {
      alert('Stock must be a positive integer.');
      return;
    }

    // convert to numeric types for submit
    const submitData = {
      ...formData,
      price: Number(priceNum),
      stock: Number(stockNum),
    } as ProductFormData;

    onSubmit(submitData);
  };

  const { id } = useParams();
  const isEditMode = Boolean(id);

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="form-group mb-3">
        <label htmlFor="brand_name">Brand Name:</label>
        <input
          type="text"
          className="form-control"
          id="brand_name"
          name="brand_name"
          value={formData.brand_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="pharm_name">Pharmacy Name:</label>
        <input
          type="text"
          className="form-control"
          id="pharm_name"
          name="pharm_name"
          value={formData.pharm_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0.01"
          step="0.01"
          inputMode="decimal"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="medicineType">Medicine Type:</label>
        <select
          className="form-control"
          id="medicineType"
          name="medicineType"
          value={formData.medicineType}
          onChange={handleChange}
          required
        >
          <option value="Prescription Medicines">Prescription Medicines</option>
          <option value="Over-the-Counter (OTC)">Over-the-Counter (OTC)</option>
          <option value="Vitamins & Supplements">Vitamins & Supplements</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          className="form-control"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          min="1"
          step="1"
          inputMode="numeric"
        />
      </div>

      {/* Optional: Image URL (not in DB model, but useful for frontend display) */}
      <div className="form-group mb-3">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-inline d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-secondary mb-2 me-2"
            onClick={() =>
            setFormData({
              _id: '',
              brand_name: '',
              pharm_name: '',
              description: '',
              price: '',
              category: '',
              stock: '',
              imageUrl: '',
              medicineType: 'Over-the-Counter (OTC)',
            })
          }
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-success mb-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
