
import express from 'express'; 
import {Product, IProduct} from '../model/product.model';
const router = express.Router();

const newProduct:IProduct = new Product({
    brand_name: 'Aspirin',
    pharm_name: 'asp',
    price: 9.99,
    description: 'Pain relief medication',
    category: 'Medicine',
    stock: 100,
  });
  
  newProduct.save()
    .then(() => console.log('Product created!'))
    .catch((err:Error) => console.error('Error creating product:', err));
  
 
  router.get('/product', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/product', async (req, res) => {
  try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

export default router;