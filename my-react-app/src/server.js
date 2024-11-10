
//TESTTESTTETST
const express = require('express');
const querystring = require('querystring');
const axios = require('axios');  // Using axios to make the token request

const app = express();
const port = 3000;

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'http://localhost:3000/callback';

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (!code) {
    res.redirect('/?' + querystring.stringify({ error: 'missing_code' }));
    return;
  }

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        },
      }
    );

    const accessToken = response.data.access_token;
    res.redirect('/?' + querystring.stringify({ access_token: accessToken }));
  } catch (error) {
    res.redirect('/?' + querystring.stringify({ error: 'token_request_failed' }));
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

