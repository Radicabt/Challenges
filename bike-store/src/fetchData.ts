import axios from 'axios';
import { Bike } from './types/Bike';

export const fetchBikes = async (): Promise<Bike[]> => {
  try {
    const response = await axios.get('https://challenges.brainster.tech/ajax_data/data.json');
    const products = response.data.products.map((product: any) => ({
      ...product,
      gender: product.gender.charAt(0).toUpperCase() + product.gender.slice(1).toLowerCase(),
    }));
    return products;
  } catch (error) {
    console.error('Error fetching bikes:', error);
    return [];
  }
};

