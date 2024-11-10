import React, { useState } from 'react';
import styles from './MoodXComponent.module.css';
import WeatherPrompt from './WeatherPrompt';

const MoodXComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const url = `/weather?city=${city}`;
      console.log('Request URL:', url);

      const response = await fetch(url);
      console.log('Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error Response:', errorText);
        throw new Error(`Failed to fetch weather data: ${errorText}`);
      }

      const data = await response.json();
      console.log('Weather Data:', data);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>mood(x)</h1>
      </header>
      <section className={styles.contentSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e3a650a864ef0d1d0881cc5ba73afe92e8d39b887214d316adfc5bed95961a?placeholderIfAbsent=true&apiKey=dfbcc8f9910f4fa692dbf30a00dca9db"
          alt="Mood illustration"
          className={styles.moodImage}
        />
        <WeatherPrompt onWeatherFetch={fetchWeather} />
        {error && <p className={styles.errorText}>{error}</p>}
        {weatherData && (
          <div className={styles.weatherDetails}>
            <h3>Weather in {weatherData.city}</h3>
            <p>Condition: {weatherData.description}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default MoodXComponent;
