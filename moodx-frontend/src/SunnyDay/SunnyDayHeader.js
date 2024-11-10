import React from 'react';
import styles from './SunnyDay.module.css';

const MoodHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4820c475-908b-4c95-afa6-3c54c0b16d74?placeholderIfAbsent=true&apiKey=dfbcc8f9910f4fa692dbf30a00dca9db" 
          className={styles.logoImage} 
          alt="Mood(x) logo"
        />
        <div className={styles.brandName}>mood(x)</div>
      </div>
      <div className={styles.location}>manhattan, ks</div>
    </header>
  );
};

export default MoodHeader; 
