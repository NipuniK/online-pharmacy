export interface Medicine {
    _id: string;  
    id: number;
    brand_name: string;
    price: number;
    pharm_name: string;
    description: string;
    imageUrl: string;
    stock: number;
    medicineType: 'Prescription Medicines' | 'Over-the-Counter (OTC)' | 'Vitamins & Supplements' | 'Personal Care';
  }
  
  