import React from 'react';
import { connect } from 'dva';
import MainWrap from '../components/MainWrap/MainWrap';
import ArmsComponent from '../components/Arms/Arms';



function Arms({location}) {
  return (
  <MainWrap location={location}>
    <ArmsComponent ></ArmsComponent>
  </MainWrap>
  );
}

Arms.propTypes = {
};

export default connect()(Arms);
