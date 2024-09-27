import React from 'react';
import ProductForm from '../com/ProductForm';

const AddNewProduct: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log('Form Submitted:', data);
    // Here, you can handle form submission, such as making API calls to save the data
  };

  return (
    <div className="product-page">
      <div className="container bg-light padding">
        <h5>ADD NEW PRODUCT</h5>
        <ProductForm onSubmit={handleFormSubmit} />
      </div>
      
    </div>
  );
};

export default AddNewProduct;
