import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface ProductDescriptionProps {
  _id: string;
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category?: string;
  medicineType?: string;
  showControls?: boolean;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  _id,
  brand_name,
  pharm_name,
  description,
  price,
  imageUrl,
  stock,
  category,
  medicineType,
  showControls = true,
}) => {
  const navigate = useNavigate();

  // ✅ Check if user is logged in (token exists)
  const isLoggedIn = !!localStorage.getItem("authToken"); // use the correct key


  const handleEdit = () => {
    // Navigate to edit route and pass the full product data in location state
    navigate(`/products/edit/${_id}`, {
      state: {
        _id,
        brand_name,
        pharm_name,
        description,
        price,
        imageUrl,
        stock,
        category,
        medicineType,
      },
    });
  };

  const formattedPrice = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(price);


  return (
    <div className="pharm-card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imageUrl}
            className="img-fluid rounded-start"
            alt={brand_name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body margin right text-left">
            <h4 className="card-title">{brand_name}</h4>
            <h6 className="card-text">{pharm_name}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text">{formattedPrice}</p>
            {showControls && (
              <>
                <p className="card-text">Stock: {stock}</p>

                {/* ✅ Only show Edit button if logged in */}
                {isLoggedIn && (
                  <button className="btn btn-warning mt-2" onClick={handleEdit}>
                    ✏️ Edit
                  </button>
                )}
                {isLoggedIn && (
                  <button
                    className="btn pharm-btn-outline ms-2 mt-2"
                    onClick={async () => {
                      if (!confirm("Are you sure you want to delete this product?")) return;
                      try {
                        await api.delete(`/products/${_id}`);
                        // Dispatch a global event so parent lists can update without reload
                        window.dispatchEvent(new CustomEvent('productDeleted', { detail: { id: _id } }));
                        alert("Product deleted");
                      } catch (err) {
                        console.error("Delete failed:", err);
                        alert("Failed to delete product");
                      }
                    }}
                  >
                    🗑️ Delete
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
