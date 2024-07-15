import ProductDescription from './com/ProductDescription';
import Login from './com/Login';
import Footer from './com/Footer';

import './App.css'

const App: React.FC = () => {
  const product = {
    brand_name: 'Product Title',
    pharm_name: 'NAME',
    description: 'This is a description of the product.',
    imageUrl: './image1.jpg' ,
    is_stock:true
    
  };

  
  return (
    
      <div className="container mt-5">
      <ProductDescription 
        brand_name={product.brand_name}
        pharm_name={product.pharm_name}
        description={product.description}
        imageUrl={product.imageUrl}
        is_stock={product.is_stock}
      />
      <Login/>
      <Footer/>
    </div>
  
  );
};
export default App;
