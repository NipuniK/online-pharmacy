import React from "react";
import ProductForm from "./ProductForm"; // adjust path if needed

// This is just an example of the form submission handler
const AddNew: React.FC = () => {
  const handleAddProduct = async (data: {
    brand_name: string;
    pharm_name: string;
    description: string;
    price: number;
    imageUrl: string;
  }) => {
    try {
      // Example: POST request to backend
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Product added successfully!");
      } else {
        alert("❌ Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddNew;
