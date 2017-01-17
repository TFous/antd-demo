import React from 'react';
import { connect } from 'dva';
import MainWrap from '../components/MainWrap/MainWrap';
import ItemsComponent from '../components/Arms/Arms';



function Items({location}) {
  return (
  <MainWrap location={location}>
    <ItemsComponent location={location}></ItemsComponent>
  </MainWrap>
  );
}


export default connect()(Items);
