// server.js

const express = require('express');
const got = require('got');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  try {
    const response = await got(`https://api.openweathermap.org/data/2.5/weather`, {
      searchParams: {
        q: city,
        appid: '589ca155fe2f4011e53a8475baeb5aea',
        units: 'imperial',
      },
      responseType: 'json',
    });
    
    const data = response.body;
    const weatherData = {
      city: data.name,
      description: data.weather[0].description,
      temperature: data.main.temp,
    };
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

module.exports = serverless(app);
