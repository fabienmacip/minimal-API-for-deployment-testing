const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/products', (req, res) => {
  const sampleProducts = [
    {
      id: 1,
      name: "Local Honey",
      price: 8.50,
      description: "Fresh honey from local producers"
    },
    {
      id: 2,
      name: "Artisan Cheese",
      price: 12.00,
      description: "Handcrafted regional cheese"
    }
  ];
  
  res.json(sampleProducts);
});

// Health check endpoint (important for Render.com)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});