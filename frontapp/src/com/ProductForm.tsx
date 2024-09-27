import React, { useState } from 'react';

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

interface ProductFormData {
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    brand_name: '',
    pharm_name: '',
    description: '',
    price: 0,
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

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
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
    
    
      <div className="form-inline d-flex justify-content-end">
      <button type="submit" className="btn btn-primary mb-2 me-2 text-success bg-white">CANCEL</button>
      <button type="submit" className="btn btn-primary mb-2 bg-success text-white"> SAVE </button>
      </div>
    </form>
  );
};

export default ProductForm;
