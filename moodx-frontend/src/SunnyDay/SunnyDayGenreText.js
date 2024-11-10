import React from 'react';
import styles from './SunnyDayFrame2.module.css';
import MusicGenre from './SunnyDayMusic';

const SunnyDayMusic = () => {
  const genres = [
    {
      genre: 'reggae',
      description: "reggae is a perfect soundtrack for sunny days, with its relaxed beats and uplifting vibes that mirror the warmth of the sun. the genre's steady rhythms and island influences create a carefree, breezy feel that transports listeners to a tropical paradise. reggae's positive messages and soothing melodies make it ideal for a laid-back, sunny day outdoors. every beat feels like a gentle wave, inviting you to unwind and enjoy the moment.",
      isReversed: false
    },
    {
      genre: 'pop',
      description: "pop music and sunny days go hand in hand, with bright, catchy melodies and high-energy beats that lift the spirit. the upbeat tempos and feel-good lyrics make pop perfect for any sunny-day adventure, whether you're out with friends or just enjoying the weather. the genre's infectious energy keeps things lively and fun, providing the perfect background for those golden hours. with pop, every sunny day feels like a celebration.",
      isReversed: true
    }
  ];

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {genres.map((genreInfo, index) => (
          <MusicGenre key={index} {...genreInfo} />
        ))}
      </div>
    </main>
  );
};

export default SunnyDayMusic;