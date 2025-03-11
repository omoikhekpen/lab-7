// netlify/functions/getRecipes.js
// This Netlify Function handles API requests for the Recipe Recommender App
// It calls the Spoonacular API using my API key and returns recipe data.

const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    // Get dietary preference and ingredients from query parameters
    const { diet = '', ingredients = '' } = event.queryStringParameters;

    // My Spoonacular API key
    const SPOONACULAR_API_KEY = '0168fbfd3f3f488592a5fba56a65c40e';

    // Build the Spoonacular API URL
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&diet=${encodeURIComponent(diet)}&includeIngredients=${encodeURIComponent(ingredients)}&number=5`;

    // Make a GET request to the Spoonacular API
    const response = await axios.get(apiUrl);

    // Return the recipe data with a 200 status code
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch recipes' }),
    };
  }
};
