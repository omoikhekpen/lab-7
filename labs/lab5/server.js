// server.js
// This file sets up an Express server for my Recipe Recommender App.
// It connects to the Spoonacular API using my API key and serves static files.

const express = require('express');
const axios = require('axios');  // For making HTTP requests
const cors = require('cors');    // Enable CORS
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// My Spoonacular API key
const SPOONACULAR_API_KEY = '0168fbfd3f3f488592a5fba56a65c40e';

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public folder

// Endpoint to get recipes based on user input
app.get('/api/recipes', async (req, res) => {
  try {
    // Get dietary preference and ingredients from query parameters
    const { diet, ingredients } = req.query;
    
    // Build the Spoonacular API URL
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&diet=${diet || ''}&includeIngredients=${ingredients || ''}&number=5`;

    // Make a GET request to the API
    const response = await axios.get(apiUrl);
    
    // Send back the recipe data
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
