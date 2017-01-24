import React from 'react';
import style from '../../assets/index.css';
import Nav from '../Nav/Nav';
import RightWrap from '../RightWrap/RightWrap';


function Arms() {
  return(
  <div className={style.wrap+' '+style.bg2}>
    <Nav></Nav>
    <RightWrap></RightWrap>
  </div>
  )

}

export default Arms;

