//import React from 'react';
import api from '../services/api';
import React, { useEffect, useState } from 'react';
import {  Medicine } from '../Data/Medicine';
import ProductDescription from '../com/ProductDescription';

const Medicines: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        
        const response = await api.get('/product');

        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

    return (
      <div className="container mt-5">
        <h1>Available Medicines</h1>
        <div className="row">
          {medicines.map((medicine: Medicine) => (
            <div className="col-md-6 mb-4" key={medicine._id}> {/* ✅ use _id instead of id */}
              <ProductDescription
                key={medicine._id}
                brand_name={medicine.brand_name}
                pharm_name={medicine.pharm_name}
                description={medicine.description}
                price={medicine.price}
                imageUrl={medicine.imageUrl}
                stock={medicine.stock}
                _id={medicine._id}
              />
            </div>
          ))}
      </div>

      </div>
    );
  };
  
  export default Medicines;