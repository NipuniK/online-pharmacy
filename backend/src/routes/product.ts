
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

router.post("/products", async (req, res) => {
  try {
    console.log("Received product data:", req.body); // Debug log
    const newProduct = new Product(req.body); // data from frontend
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Product creation error:", error); // Debug log
    res.status(400).json({ 
      message: "Error creating product", 
      error: error instanceof Error ? error.message : error 
    });
  }
});

export default router;