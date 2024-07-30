

const router =require('express').Router();
let Product = require('../model/product.model');

const newProduct = new Product({
    name: 'Aspirin',
    price: 9.99,
    description: 'Pain relief medication',
    category: 'Medicine',
    stock: 100,
  });
  
  newProduct.save()
    .then(() => console.log('Product created!'))
    .catch(err => console.error('Error creating product:', err));
  
    Product.findOne({ name: 'Aspirin' })
  .then(product => console.log(product))
  .catch(err => console.error('Error finding product:', err));

  Product.findByIdAndUpdate(productId, { price: 8.99 })
  .then(() => console.log('Product updated!'))
  .catch(err => console.error('Error updating product:', err));

  Product.findByIdAndDelete(productId)
  .then(() => console.log('Product deleted!'))
  .catch(err => console.error('Error deleting product:', err));
