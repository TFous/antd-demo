import React from 'react';
import styles from './MainWrap.css';
import Header from './Header';

export default function MainWrap({children, location}) {
  return (
    <div className={styles.normal}>
      <Header location={location}/>
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  )
}

