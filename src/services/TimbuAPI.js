import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getProducts = async (page, size) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
