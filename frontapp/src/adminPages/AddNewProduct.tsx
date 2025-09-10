import React from 'react';
import ProductForm from '../com/ProductForm';

const AddNewProduct: React.FC = () => {
  const handleFormSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // send form data
      });

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      const result = await response.json();
      console.log("✅ Product saved:", result);
      alert("Product added successfully!");
    } catch (error) {
      console.error("❌ Error adding product:", error);
      alert("Something went wrong while saving the product");
    }
  };

  return (
    <div className="product-page">
      <div className="container bg-light padding">
        <h5>ADD NEW PRODUCT</h5>
        <ProductForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default AddNewProduct;
