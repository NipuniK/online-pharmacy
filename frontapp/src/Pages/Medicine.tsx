import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { Medicine } from '../Data/Medicine';
import ProductDescription from '../com/ProductDescription';

const Medicines: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
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

  // Listen for global delete events so we can remove product from the list dynamically
  useEffect(() => {
    const handler = (e: Event) => {
      const evt = e as CustomEvent<{ id: string }>;
      const deletedId = evt?.detail?.id;
      if (!deletedId) return;
      setMedicines(prev => prev.filter(m => m._id !== deletedId));
      setFilteredMedicines(prev => prev.filter(m => m._id !== deletedId));
    };

    window.addEventListener('productDeleted', handler as EventListener);
    return () => window.removeEventListener('productDeleted', handler as EventListener);
  }, []);

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

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredMedicines(medicines);
      return;
    }
    const filtered = medicines.filter((m) => {
      const brand = (m.brand_name || '').toString().toLowerCase();
      const pharm = (m.pharm_name || '').toString().toLowerCase();
      const desc = (m.description || '').toString().toLowerCase();
      return brand.includes(term) || pharm.includes(term) || desc.includes(term);
    });
    setFilteredMedicines(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredMedicines(medicines);
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

        {/* Search */}
        <form className="mb-3 d-flex" onSubmit={handleSearch}>
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search by medicine or brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search medicines"
          />
          <button className="btn btn-primary me-2" type="submit">Search</button>
          <button className="btn btn-outline-secondary" type="button" onClick={clearSearch}>Clear</button>
        </form>

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