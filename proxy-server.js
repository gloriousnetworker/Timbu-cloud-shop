const express = require('express');
const cors = require('cors'); // Import CORS middleware
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

// Enable CORS for all origins (replace with specific origin in production)
app.use(cors());

app.get('/api/products', async (req, res) => {
  const { page, size } = req.query;
  const apiUrl = `https://api.timbu.cloud/products?organization_id=297e089bdf614e9fb319c84199099ac4&reverse_sort=false&page=${page}&size=${size}&Appid=5VUFI141KKJMC26&Apikey=a96b78a5eff94e4ba0ea955bb2606dca20240713031808752958`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error in proxy server:', error);
    res.status(500).json({ message: 'Failed to fetch products.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
