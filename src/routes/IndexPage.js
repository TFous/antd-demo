import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainWrap from '../components/MainWrap/MainWrap'


function IndexPage({ location }) {
  return (
  <MainWrap location={location}>
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
      </ul>
    </div>
  </MainWrap>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
