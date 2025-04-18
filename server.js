import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config(); // This should work now with import syntax

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL;

// Serve static files (like favicon)
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
