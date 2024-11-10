import React from 'react';
import styles from './SunnyDayFrame2.module.css';

const MusicGenre = ({ genre, description, isReversed }) => {
  return (
    <section className={styles.musicSection}>
      <div className={styles.musicRow}>
        {isReversed ? (
          <>
            <div className={styles.column}>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.column}>
              {genre === 'pop' ? (
                <div className={styles.popImageWrapper}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae76fea156f879b428897e5469864eb6dd4cf038c1c79132b9653d2ac05ff5fd?placeholderIfAbsent=true&apiKey=dfbcc8f9910f4fa692dbf30a00dca9db" alt="" className={styles.popImage} />
                  <span className={styles.popText}>{genre}</span>
                </div>
              ) : (
                <div className={styles.genreCircle}>{genre}</div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.column}>
              <div className={styles.genreCircle}>{genre}</div>
            </div>
            <div className={styles.column}>
              <p className={styles.description}>{description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MusicGenre;