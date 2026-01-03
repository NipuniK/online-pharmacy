import express, { Request, Response } from "express";
import { Product } from "../model/product.model";

const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Get all products (optional filter by medicineType)
 */
router.get("/products", async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category && category !== "All") {
      query = { medicineType: category };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error("Fetch products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/products/:id
 * @desc    Get single product by ID (for Edit)
 */
router.get("/products/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Fetch product error:", error);
    res.status(400).json({ message: "Invalid product ID" });
  }
});

/**
 * @route   POST /api/products
 * @desc    Add new product
 */
router.post("/products", async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Create product error:", error);
    res.status(400).json({
      message: "Error creating product",
      error: error instanceof Error ? error.message : error
    });
  }
});

/**
 * @route   PUT /api/products/:id
 * @desc    Update product
 */
router.put("/products/:id", async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Update product error:", error);
    res.status(400).json({
      message: "Error updating product",
      error: error instanceof Error ? error.message : error
    });
  }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete product
 */
router.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(400).json({ message: "Invalid product ID" });
  }
});

export default router;
