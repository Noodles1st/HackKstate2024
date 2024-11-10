import React from 'react';
import styles from './SunnyDay.module.css';
import ImageColumn from './ImageColumn';

const SunnyDayComponent = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57c84efd8e0b83ab06053aa0da6b460406cce6f7aa9476ccc37edf2f0de804a6?placeholderIfAbsent=true&apiKey=dfbcc8f9910f4fa692dbf30a00dca9db", alt: "Sunny day illustration" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f4d0da40495f8e90723857ad5d7129ce3a3e563c4e1de2b5f67ee572b059e6e?placeholderIfAbsent=true&apiKey=dfbcc8f9910f4fa692dbf30a00dca9db", alt: "Happy beats visualization" }
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.flexContainer}>
          <section className={styles.textSection}>
            <h1 className={styles.title}>sunny day.</h1>
            <p className={styles.description}>
              "a sunny day calls for bright tunes and happy beats!"
            </p>
          </section>
          <section className={styles.imageSection}>
            <div className={styles.imageGrid}>
              {images.map((image, index) => (
                <ImageColumn key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SunnyDayComponent;
