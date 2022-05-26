import React from 'react';
import styles from './DisplatText.module.css';

const Exno = ({ text }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.content}>{text}</div>;
    </div>
  );
};

export default Exno;
