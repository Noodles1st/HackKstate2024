const express = require('express')
const app = express();

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
    const got = (await import('got')).default;
    let city = req.query.city;
    
    try {
        const response = await got(`https://samples.openweathermap.org/data/2.5/forecast`, {
            searchParams: {
                q: city,
                appid: '589ca155fe2f4011e53a8475baeb5aea'
            },
            responseType: 'json'
        });
        
        // Access the data from the response body
        const data = response.body;
        const weatherDescription = data.list[0].weather[0].description;
        res.send(`The weather in your city "${city}" is ${weatherDescription}`);
    } catch (error) {
        res.status(500).send("An error occurred while fetching the weather data.");
    }
});


app.listen(3000, () => console.log('Sever connected to port 3000'))