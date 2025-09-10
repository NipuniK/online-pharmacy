// src/Pages/EditProduct.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../com/ProductForm";

interface ProductData {
  _id: string;
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
}

const EditProduct: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<ProductData | null>(null);

  // Get product data from location state
  useEffect(() => {
    if (location.state && (location.state as ProductData)._id) {
      setProductData(location.state as ProductData);
    } else {
      alert("No product data found to edit!");
      navigate("/Medicines"); // redirect if no data
    }
  }, [location.state, navigate]);

  const handleFormSubmit = async (data: ProductData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productData?._id}`, {
        method: "PUT", // update existing product
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update product");

      const result = await response.json();
      console.log("✅ Product updated:", result);
      alert("Product updated successfully!");
      navigate("/Medicines");
    } catch (error) {
      console.error("❌ Error updating product:", error);
      alert("Something went wrong while updating the product");
    }
  };

  return (
    <div className="product-page">
      <div className="container bg-light padding">
        <h5>EDIT PRODUCT</h5>
        {productData && <ProductForm onSubmit={handleFormSubmit} initialData={productData} />}
      </div>
    </div>
  );
};

export default EditProduct;
