import React, { useState } from 'react';
import styles from './MoodXComponent.module.css';

const WeatherPrompt = ({ onWeatherFetch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onWeatherFetch(city);
    }
  };

  return (
    <section className={styles.weatherPrompt}>
      <h2 className={styles.promptTitle}>
        What's the weather around you? Let us match the vibes!
      </h2>
      <form onSubmit={handleSubmit} className={styles.weatherForm}>
        <label htmlFor="locationInput" className={styles.visuallyHidden}>
          Enter your city, state, country here:
        </label>
        <input
          type="text"
          id="locationInput"
          className={styles.locationInput}
          placeholder="Enter your city, state, country here:"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Check Weather</button>
      </form>
    </section>
  );
};

export default WeatherPrompt;
