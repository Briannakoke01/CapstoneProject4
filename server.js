require('dotenv').config(); // Load environmental variables from .env
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL;

// Route to fetch meme templates
app.get('/memes', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data from API');

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching memes:', error);
    res.status(500).json({ error: 'Failed to retrieve meme templates' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
