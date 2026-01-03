import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { Medicine } from '../Data/Medicine';
import ProductDescription from '../com/ProductDescription';

const Medicines: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check for category filter from URL params
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      fetchMedicines(categoryFromUrl);
    } else {
      fetchMedicines('All');
    }
  }, [searchParams]);

  const fetchMedicines = async (category: string = 'All') => {
    try {
      // Use the correct backend route: /products
      const url = category === 'All' ? '/products' : `/products?category=${encodeURIComponent(category)}`;
      const response = await api.get(url);
      setMedicines(response.data);
      setFilteredMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    fetchMedicines(category);
  };

    return (
      <div className="container mt-5">
        <h1>Available Medicines</h1>
        
        {/* Category Filter Buttons */}
        <div className="mb-4">
          <h5>Filter by Category:</h5>
          <div className="btn-group flex-wrap" role="group">
            <button 
              type="button" 
              className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'} mb-2 me-2`}
              onClick={() => handleCategoryFilter('All')}
            >
              All Products
            </button>
            <button 
              type="button" 
              className={`btn ${selectedCategory === 'Prescription Medicines' ? 'btn-primary' : 'btn-outline-primary'} mb-2 me-2`}
              onClick={() => handleCategoryFilter('Prescription Medicines')}
            >
              Prescription Medicines
            </button>
            <button 
              type="button" 
              className={`btn ${selectedCategory === 'Over-the-Counter (OTC)' ? 'btn-primary' : 'btn-outline-primary'} mb-2 me-2`}
              onClick={() => handleCategoryFilter('Over-the-Counter (OTC)')}
            >
              Over-the-Counter (OTC)
            </button>
            <button 
              type="button" 
              className={`btn ${selectedCategory === 'Vitamins & Supplements' ? 'btn-primary' : 'btn-outline-primary'} mb-2 me-2`}
              onClick={() => handleCategoryFilter('Vitamins & Supplements')}
            >
              Vitamins & Supplements
            </button>
            <button 
              type="button" 
              className={`btn ${selectedCategory === 'Personal Care' ? 'btn-primary' : 'btn-outline-primary'} mb-2 me-2`}
              onClick={() => handleCategoryFilter('Personal Care')}
            >
              Personal Care
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-3">
          <p className="text-muted">
            Showing {filteredMedicines.length} of {medicines.length} products
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine: Medicine) => (
              <div className="col-md-6 mb-4" key={medicine._id}>
                  <ProductDescription
                    key={medicine._id}
                    brand_name={medicine.brand_name}
                    pharm_name={medicine.pharm_name}
                    description={medicine.description}
                    price={medicine.price}
                    imageUrl={medicine.imageUrl}
                    stock={medicine.stock}
                    _id={medicine._id}
                    category={medicine.category}
                    medicineType={medicine.medicineType}
                  />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info text-center">
                <h5>No products found</h5>
                <p>No products available in the "{selectedCategory}" category.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Medicines;