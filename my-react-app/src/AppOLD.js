import React, { useState } from 'react';

const WeatherDisplay = () => {
  const [accessToken, setAccessToken] = useState(null);  // State for access token

  const clientId = 'c4e4950088434c8d842394760ae0280a';
  const redirectUri = 'localhost:3000/callback';
  const clientSecret = '57e542558805452a88c59a8eb84742dd'; // Define your client secret
  const scopes = 'user-library-read user-read-private';

  // Step 1: Handle the button click to redirect to Spotify
  const handleSpotifyAuth = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;  // Redirect to Spotify authorization page
  };

  // Step 2: Handle the redirect back from Spotify and exchange the code for an access token
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      // Exchange the authorization code for an access token
      const fetchAccessToken = async () => {
        const tokenUrl = 'https://accounts.spotify.com/api/token';
        const body = new URLSearchParams({
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: redirectUri,
        });

        const headers = {
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret), // Base64 encode client ID and secret
          'Content-Type': 'application/x-www-form-urlencoded',
        };

        try {
          const response = await fetch(tokenUrl, {
            method: 'POST',
            headers,
            body,
          });
          const data = await response.json();
          const newAccessToken = data.access_token;
          setAccessToken(newAccessToken);  // Store the access token in state
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };

      fetchAccessToken();
    }
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div style={{ backgroundColor: '#4A5568', color: '#FFFFFF', height: '100vh', padding: '20px' }}>
      {/* Display weather data and mood */}
      <h1>mood(x)</h1>
      
      {/* Show the access token if available */}
      {accessToken ? (
        <p>Access Token: {accessToken}</p>  // Use the access token for further Spotify API calls
      ) : (
        <div>
          <p>Click the button below to log in to Spotify:</p>
          <button onClick={handleSpotifyAuth} style={{ padding: '10px 20px', backgroundColor: '#1DB954', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Log in with Spotify
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
