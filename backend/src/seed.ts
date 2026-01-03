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
    imageUrl: "https://source.unsplash.com/600x400/?antibiotic,medicine"
  },
  {
    brand_name: "GSK",
    pharm_name: "Metformin 500mg",
    description: "Used to control blood sugar levels in type 2 diabetes.",
    price: 850,
    category: "Diabetes",
    stock: 40,
    medicineType: "Prescription Medicines",
    imageUrl: "https://source.unsplash.com/600x400/?diabetes,medicine"
  },
  {
    brand_name: "Johnson & Johnson",
    pharm_name: "Panadol",
    description: "Pain reliever and fever reducer.",
    price: 300,
    category: "Pain Relief",
    stock: 120,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://source.unsplash.com/600x400/?painkiller,medicine"
  },
  {
    brand_name: "Reckitt",
    pharm_name: "Strepsils",
    description: "Lozenges for sore throat relief.",
    price: 450,
    category: "Cold & Flu",
    stock: 90,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://source.unsplash.com/600x400/?lozenges,throat"
  },
  {
    brand_name: "Nature Made",
    pharm_name: "Vitamin C 1000mg",
    description: "Supports immune system health.",
    price: 1600,
    category: "Vitamins",
    stock: 70,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://source.unsplash.com/600x400/?vitamin-c,supplement"
  },
  {
    brand_name: "Blackmores",
    pharm_name: "Fish Oil Capsules",
    description: "Supports heart and joint health.",
    price: 2200,
    category: "Supplements",
    stock: 60,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://source.unsplash.com/600x400/?fish-oil,supplement"
  },
  {
    brand_name: "Himalaya",
    pharm_name: "Neem Face Wash",
    description: "Herbal face wash for acne-prone skin.",
    price: 650,
    category: "Skin Care",
    stock: 80,
    medicineType: "Personal Care",
    imageUrl: "https://source.unsplash.com/600x400/?skincare,facewash"
  },
  {
    brand_name: "Dettol",
    pharm_name: "Antiseptic Liquid",
    description: "Antiseptic solution for wound cleaning.",
    price: 900,
    category: "Hygiene",
    stock: 100,
    medicineType: "Personal Care",
    imageUrl: "https://source.unsplash.com/600x400/?antiseptic,hygiene"
  }
  ,
  {
    brand_name: "Lupin",
    pharm_name: "Amlodipine 5mg",
    description: "Used to treat high blood pressure and angina.",
    price: 700,
    category: "Cardiovascular",
    stock: 60,
    medicineType: "Prescription Medicines",
    imageUrl: "https://source.unsplash.com/600x400/?blood-pressure,medicine"
  },
  {
    brand_name: "Cipla",
    pharm_name: "Atorvastatin 10mg",
    description: "Cholesterol-lowering medication for cardiovascular risk.",
    price: 950,
    category: "Cardiovascular",
    stock: 45,
    medicineType: "Prescription Medicines",
    imageUrl: "https://source.unsplash.com/600x400/?cholesterol,medicine"
  },
  {
    brand_name: "Bayer",
    pharm_name: "Ibuprofen 200mg",
    description: "Pain reliever and anti-inflammatory (OTC).",
    price: 250,
    category: "Pain Relief",
    stock: 200,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://source.unsplash.com/600x400/?ibuprofen,pain"
  },
  {
    brand_name: "Tums",
    pharm_name: "Antacid Tablets",
    description: "Relieves heartburn and indigestion.",
    price: 300,
    category: "Digestive",
    stock: 150,
    medicineType: "Over-the-Counter (OTC)",
    imageUrl: "https://source.unsplash.com/600x400/?antacid,digestive"
  },
  {
    brand_name: "Garden of Life",
    pharm_name: "Vitamin D 2000IU",
    description: "Supports bone and immune health.",
    price: 1400,
    category: "Vitamins",
    stock: 80,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://source.unsplash.com/600x400/?vitamin-d,supplement"
  },
  {
    brand_name: "NOW Foods",
    pharm_name: "Multivitamin Adult",
    description: "Daily multivitamin for general wellness.",
    price: 1800,
    category: "Vitamins",
    stock: 70,
    medicineType: "Vitamins & Supplements",
    imageUrl: "https://source.unsplash.com/600x400/?multivitamin,supplement"
  },
  {
    brand_name: "Dove",
    pharm_name: "Moisturizing Lotion",
    description: "Daily moisturizing lotion for dry skin.",
    price: 1200,
    category: "Skin Care",
    stock: 90,
    medicineType: "Personal Care",
    imageUrl: "https://source.unsplash.com/600x400/?lotion,skincare"
  },
  {
    brand_name: "Sanitex",
    pharm_name: "Hand Sanitizer 500ml",
    description: "Kills germs and bacteria on the hands.",
    price: 650,
    category: "Hygiene",
    stock: 140,
    medicineType: "Personal Care",
    imageUrl: "https://source.unsplash.com/600x400/?hand-sanitizer,hygiene"
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
