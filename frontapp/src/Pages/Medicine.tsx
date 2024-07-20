import React from 'react';
import { medicines, Medicine } from '../Data/Medicine';
import ProductDescription from '../com/ProductDescription';

const Medicines: React.FC = () => {
    return (
      <div className="container mt-5">
        <h1>Available Medicines</h1>
        <div className="row">
          {medicines.map((medicine: Medicine) => (
            <div className="col-md-6 mb-4" key={medicine.id}>
              <ProductDescription
                brand_name={medicine.brand_name}
                pharm_name={medicine.pharm_name}
                description={medicine.description}
                imageUrl={medicine.imageUrl}
                is_stock={medicine.is_stock}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Medicines;