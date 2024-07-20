export interface Medicine {
    id: number;
    brand_name: string;
    pharm_name: string;
    description: string;
    imageUrl: string;
    is_stock: boolean;
  }
  
  export const medicines: Medicine[] = [
    {
      id: 1,
      brand_name: 'Health Mart Multivitamins',
      pharm_name: 'Health Mart Pharmacy',
      description: 'A comprehensive multivitamin for daily health.',
      imageUrl: './image1.jpg',
      is_stock: true
    },
    {
      id: 2,
      brand_name: 'Pain Relief Tablets',
      pharm_name: 'Pharma Plus',
      description: 'Effective relief for mild to moderate pain.',
      imageUrl: './image2.jpg',
      is_stock: false
    },
    {
        id: 1,
        brand_name: 'Health Mart Multivitamins',
        pharm_name: 'Health Mart Pharmacy',
        description: 'A comprehensive multivitamin for daily health.',
        imageUrl: './image1.jpg',
        is_stock: true
      },
      {
        id: 1,
        brand_name: 'Health Mart Multivitamins',
        pharm_name: 'Health Mart Pharmacy',
        description: 'A comprehensive multivitamin for daily health.',
        imageUrl: './image1.jpg',
        is_stock: true
      },
    // Add more medicines here...
  ];
  