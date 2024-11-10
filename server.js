// server.js

const express = require('express');
const app = express();
const serverless = require('serverless-http');
const cors = require('cors');


app.use(cors());  // This will enable CORS for all routes by default
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`
        <form action="/weather" method="get">
            <label for="city">Enter City:</label>
            <input type="text" id="city" name="city" required>
            <button type="submit">Get Weather</button>
        </form>
    `);
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const got = (await import('got')).default;
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
    res.setHeader('Content-Type', 'application/json'); // Ensure response is treated as JSON
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));


module.exports = serverless(app);
