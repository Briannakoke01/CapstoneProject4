const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

router.get('/get-memes', async (req, res) => {
    try {
        const url = process.env.TARGET_URL;
        const response = await axios.get(url);

        // Parse the HTML response
        const $ = cheerio.load(response.data);

        // Extract all memes
        const memes = [];
        $('#meme option').each((i, element) => {
            const displayName = $(element).text(); // e.g., "1950s Middle Finger"
            const imageName = $(element).attr('value'); // e.g., "1950s-Middle-Finger"
            memes.push({ displayName, imageName });
        });

        // Pagination logic
        const page = parseInt(req.query.page, 10) || 1; // Current page
        const limit = parseInt(req.query.limit, 10) || 10; // Items per page
        const totalItems = memes.length;
        const totalPages = Math.ceil(totalItems / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedMemes = memes.slice(startIndex, endIndex);

        res.status(200).json({
            success: true,
            totalItems,
            totalPages,
            currentPage: page,
            memes: paginatedMemes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching memes',
            error: error.message,
        });
    }
});

router.get('/proxy-image', async (req, res) => {
    const { memeUrl } = req.query;  // Get the meme URL from the query string

    if (!memeUrl) {
      return res.status(400).json({ error: 'memeUrl parameter is required' });
    }

    try {
      const imageResponse = await axios.get(memeUrl, {
        responseType: 'arraybuffer',  // Get the image as an array buffer
      });

      res.set('Content-Type', 'image/png');  // Adjust the content type as needed
      res.set('Access-Control-Allow-Origin', '*');  // Allow cross-origin access
      res.send(imageResponse.data);  // Send the image data
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).send('Error fetching image');
    }
  });



module.exports = router;
