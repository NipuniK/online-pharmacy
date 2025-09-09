import mongoose from "mongoose";
import { Product } from "./model/product.model"; // adjust path if needed
import dotenv from "dotenv";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ Connected to MongoDB");

    const products = [
      {
        brand_name: "Panadol",
        pharm_name: "Acetaminophen",
        description: "Pain reliever and fever reducer",
        price: 120,
        category: "Analgesics",
        stock: 100,

        
      },
      {
        brand_name: "Amoxil",
        pharm_name: "Amoxicillin",
        description: "Antibiotic for bacterial infections",
        price: 350,
        category: "Antibiotics",
        stock: 50,
      },
      {
        brand_name: "Zyrtec",
        pharm_name: "Cetirizine",
        description: "Antihistamine for allergy relief",
        price: 200,
        category: "Antihistamines",
        stock: 80,
      },
    ];

    await Product.insertMany(products);
    console.log("🌱 Database seeded with products!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
}

seed();
