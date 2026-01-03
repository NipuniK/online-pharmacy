import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductDescriptionProps {
  _id: string;
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  _id,
  brand_name,
  pharm_name,
  description,
  price,
  imageUrl,
  stock,
}) => {
  const navigate = useNavigate();

  // ✅ Check if user is logged in (token exists)
  const isLoggedIn = !!localStorage.getItem("authToken"); // use the correct key


  const handleEdit = () => {
  // Navigate to EditProduct route and pass the full product data in location state
  navigate(`/EditProduct`, {
    state: {
      _id,
      brand_name,
      pharm_name,
      description,
      price,
      imageUrl,
      stock,
    },
  });
};


  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
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
            <p className="card-text">💲 {price}</p>
            <p className="card-text">Stock: {stock}</p>

            {/* ✅ Only show Edit button if logged in */}
            {isLoggedIn && (
              <button className="btn btn-warning mt-2" onClick={handleEdit}>
                ✏️ Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
