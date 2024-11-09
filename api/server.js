// Import necessary modules
import express from 'express';
import serverless from 'serverless-http';
import got from 'got';  // Static import for got module



const app = express();

// Simple form for input
app.get('/', (req, res) => {
  res.send(`
    <form action="/weather" method="get">
        <label for="city">Enter City:</label>
        <input type="text" id="city" name="city" required>
        <button type="submit">Get Weather</button>
    </form>
  `);
});

// Weather fetching logic
app.get('/weather', async (req, res) => {
  const city = req.query.city;

  try {
    const response = await got('https://samples.openweathermap.org/data/2.5/forecast', {
      searchParams: {
        q: city,
        appid: '589ca155fe2f4011e53a8475baeb5aea' // Replace with actual API key
      },
      responseType: 'json',
    });

    // Access the data from the response body
    const data = response.body;
    const weatherDescription = data.list[0].weather[0].description;

    res.send(`The weather in your city "${city}" is ${weatherDescription}`);
  } catch (error) {
    res.status(500).send("An error occurred while fetching the weather data.");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});


// Export the handler function for Vercel serverless
export default serverless(app);
