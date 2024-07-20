// src/com/ProductDescription.tsx
import React from 'react';

interface ProductDescriptionProps {
  brand_name: string;
  pharm_name: string;
  description: string;
  imageUrl: string;
  is_stock: boolean;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ brand_name,pharm_name, description, imageUrl, is_stock}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} className="img-fluid rounded-start" alt={brand_name} />
        </div>
        <div className="col-md-8">
          <div className="card-body margin right text-left">
          {!is_stock && (
              <button type="button" className="btn btn-primary mb-2">
                Out of Stock
              </button>
            )}
            <h4 className="card-title">{brand_name}</h4>
            <h6 className="card-text">{pharm_name}</h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
