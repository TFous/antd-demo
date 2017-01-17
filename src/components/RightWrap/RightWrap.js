import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import WeaponListComponents from './weaponListComponents';
import WeaponItem from './weaponItem';

function RightWrap({dispatch,rightFilter}) {
  return (
    eval(rightFilter)?<WeaponItem/>:<WeaponListComponents/>
  )
}
function mapStateToProps(state) {
  const {rightFilter}=state.arms;
  return {
    rightFilter
  };
}

export default connect(mapStateToProps)(RightWrap);

