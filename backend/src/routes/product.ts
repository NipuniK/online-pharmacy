
import express from 'express'; 
import {Product, IProduct} from '../model/product.model';
const router = express.Router();

const newProduct = new Product({
    name: 'Aspirin',
    price: 9.99,
    description: 'Pain relief medication',
    category: 'Medicine',
    stock: 100,
  });
  
  newProduct.save()
    .then(() => console.log('Product created!'))
    .catch((err:Error) => console.error('Error creating product:', err));
  
    Product.findOne({ name: 'Aspirin' })
  .then((product:IProduct| null) => console.log(product))
  .catch((err:unknown) => console.error('Error finding product:', err));

  Product.findByIdAndUpdate({productId: Product}, { price: 8.99 })
  .then(() => console.log('Product updated!'))
  .catch((err:unknown) => console.error('Error updating product:', err));

  Product.findByIdAndDelete({productId: Product})
  .then(() => console.log('Product deleted!'))
  .catch((err:unknown) => console.error('Error deleting product:', err));
