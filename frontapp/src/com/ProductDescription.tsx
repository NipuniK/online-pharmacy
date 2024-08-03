// src/com/ProductDescription.tsx
import React from 'react';

interface ProductDescriptionProps {
  brand_name: string;
  pharm_name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ brand_name,pharm_name, description, imageUrl,price, stock}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} className="img-fluid rounded-start" alt={brand_name} />
        </div>
        <div className="col-md-8">
          <div className="card-body margin right text-left">
        
            <h4 className="card-title">{brand_name}</h4>
            <h6 className="card-text">{pharm_name}</h6>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <p className="card-text">{stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
