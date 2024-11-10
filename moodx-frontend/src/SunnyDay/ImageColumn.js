import React from 'react';
import styles from './SunnyDay.module.css';

const ImageColumn = ({ src, alt }) => {
  return (
    <div className={styles.imageColumn}>
      <img src={src} alt={alt} className={styles.image} loading="lazy" />
    </div>
  );
};

export default ImageColumn;
