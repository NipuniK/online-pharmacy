// src/Pages/EditProduct.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductForm from "../com/ProductForm";
import api from "../services/api";

interface ProductData {
  _id: string;
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category?: string;
  medicineType: 'Prescription Medicines' | 'Over-the-Counter (OTC)' | 'Vitamins & Supplements' | 'Personal Care';
  createdAt?: string;
  updatedAt?: string;
}

const EditProduct: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<ProductData | null>(null);

  // Get product data from location state or fetch by id param
  const { id } = useParams();

  useEffect(() => {
    const stateData = location.state as ProductData | undefined;
    if (stateData && stateData._id) {
      setProductData(stateData);
      return;
    }

    // If no state, try fetching by id param
    const fetchById = async (productId?: string) => {
      if (!productId) {
        alert("No product data found to edit!");
        navigate("/Medicines");
        return;
      }
      try {
        const response = await api.get(`/products/${productId}`);
        setProductData(response.data as ProductData);
      } catch (error) {
        console.error("Failed to fetch product for edit:", error);
        alert("Product not found");
        navigate("/Medicines");
      }
    };

    fetchById(id);
  }, [location.state, navigate, id]);

  const handleFormSubmit = async (data: ProductData) => {
    try {
      const productId = productData?._id || id;
      const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
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
