const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Proxy Server!');
});


// Proxy endpoint
app.get('/proxy', async (req, res) => {
  try {
    const category = req.query.category;
    const response = await fetch(`https://pic.re/image?category=${category}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
