import React from 'react';
import ProductForm from '../com/ProductForm';

const AddNewProduct: React.FC = () => {
  const handleFormSubmit = async (data: any) => {
    try {
      // Remove _id field for new products (MongoDB will generate it)
      const { _id, ...productData } = data;
      
      // Log the data being sent for debugging
      console.log("Sending product data:", productData);
      
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData), // send form data without _id
      });

      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Backend error response:", errorText);
        throw new Error(`Failed to save product: ${errorText}`);
      }

      const result = await response.json();
      console.log("✅ Product saved:", result);
      alert("Product added successfully!");
    } catch (error) {
      console.error("❌ Full error details:", error);
      
      // If it's a fetch error, log the response
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
      
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
