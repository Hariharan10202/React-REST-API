import React, { useEffect, useState } from 'react';
import styles from './Display.module.css';

const DisplayContent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.timeClock}>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default DisplayContent;
