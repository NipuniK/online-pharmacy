export interface Medicine {
    id: number;
    brand_name: string;
    price:100;
    pharm_name: string;
    description: string;
    imageUrl: string;
    stock: number;
  }
  
  export const medicines: Medicine[] = [
    {
      id: 1,
      brand_name: 'Health Mart Multivitamins',
      pharm_name: 'Health Mart Pharmacy',
      description: 'A comprehensive multivitamin for daily health.',
      price:100,
      imageUrl: './image1.jpg',
      stock: 100
    },
    
  ]