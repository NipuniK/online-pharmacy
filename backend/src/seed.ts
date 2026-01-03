import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./model/product.model";

dotenv.config();

const products = [
  {
    brand_name: "Pfizer",
    pharm_name: "Amoxicillin 500mg",
    description: "Antibiotic used to treat bacterial infections.",
    price: 1200,
    category: "Antibiotic",
    stock: 50,
    medicineType: "Prescription Medicines",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "GSK",
    pharm_name: "Metformin 500mg",
    description: "Used to control blood sugar levels in type 2 diabetes.",
    price: 850,
    category: "Diabetes",
    stock: 40,
    medicineType: "Prescription Medicines",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Johnson & Johnson",
    pharm_name: "Panadol",
    description: "Pain reliever and fever reducer.",
    price: 300,
    category: "Pain Relief",
    stock: 120,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Reckitt",
    pharm_name: "Strepsils",
    description: "Lozenges for sore throat relief.",
    price: 450,
    category: "Cold & Flu",
    stock: 90,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Nature Made",
    pharm_name: "Vitamin C 1000mg",
    description: "Supports immune system health.",
    price: 1600,
    category: "Vitamins",
    stock: 70,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Blackmores",
    pharm_name: "Fish Oil Capsules",
    description: "Supports heart and joint health.",
    price: 2200,
    category: "Supplements",
    stock: 60,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Himalaya",
    pharm_name: "Neem Face Wash",
    description: "Herbal face wash for acne-prone skin.",
    price: 650,
    category: "Skin Care",
    stock: 80,
    medicineType: "Personal Care",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    brand_name: "Dettol",
    pharm_name: "Antiseptic Liquid",
    description: "Antiseptic solution for wound cleaning.",
    price: 900,
    category: "Hygiene",
    stock: 100,
    medicineType: "Personal Care",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");

    await Product.deleteMany();
    console.log("Old products removed");

    await Product.insertMany(products);
    console.log("Dummy products added");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
