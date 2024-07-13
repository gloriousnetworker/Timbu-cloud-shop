// src/services/TimbuAPI.js

const fetchProducts = async () => {
    const url = `https://api.timbu.cloud/products?organization_id=297e089bdf614e9fb319c84199099ac4&reverse_sort=false&page=2&size=10&Appid=5VUFI141KKJMC26&Apikey=a96b78a5eff94e4ba0ea955bb2606dca20240713031808752958`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Propagate the error further
    }
  };
  
  export { fetchProducts };
  