// server.js
const express = require('express');
const fetch = require('node-fetch'); // Ensure you're using node-fetch@2
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();

// Optional: Enable CORS for local testing if needed.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Route to return projects from projects.json.
app.get('/api/projects', (req, res) => {
  const projectsFile = path.join(__dirname, 'projects.json');
  fs.readFile(projectsFile, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading projects file:", err);
      return res.status(500).json({ error: "Failed to load projects" });
    }
    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseError) {
      console.error("Error parsing projects file:", parseError);
      res.status(500).json({ error: "Failed to parse projects data" });
    }
  });
});

// Route to fetch weather data from OpenWeatherMap.
// Example URL: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=38707b9ec875dc6d9e520cc67d58cc9f
// We update it to use Halifax,ca.
app.get('/api/weather', async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY || '38707b9ec875dc6d9e520cc67d58cc9f';
    const city = 'Halifax,ca';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`);
    }
    const data = await response.json();
    // Extract required fields.
    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: {
        current: data.main.temp,
        feels_like: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      humidity: data.main.humidity,
    };
    res.json(weatherData);
  } catch (error) {
    console.error("Error in /api/weather route:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
