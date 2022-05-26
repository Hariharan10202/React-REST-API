import React from 'react';
import styles from './DisplayContent.module.css';

const DisplayContent = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.content}>
        <img
          src='https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <button>
          <a href='https://www.pexels.com/photo/man-in-a-gray-blazer-working-on-his-laptop-7964371/'>
            View Page
          </a>
        </button>
      </div>
    </div>
  );
};

export default DisplayContent;
