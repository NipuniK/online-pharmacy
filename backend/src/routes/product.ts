
import express from 'express'; 
import {Product, IProduct} from '../model/product.model';
const router = express.Router();

 
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