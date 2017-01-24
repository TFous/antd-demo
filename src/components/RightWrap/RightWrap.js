import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import WeaponListComponents from './weaponListComponents';
import WeaponItem from './weaponItem';

function RightWrap({dispatch,rightFilter,state}) {

  function setTrue() {
    localStorage.rightFilter=true;
    dispatch({
      type: 'arms/setFilter',
      payload:{
        rightFilter:true,
      }
    })
  }
  function getWid(id) {
    setTrue();
    localStorage.wid=id;
    dispatch({
      type: 'arms/getweaponMsg',
      payload: {
        wid: id,
      }
    });
  }

  return (
    eval(rightFilter)?
      <WeaponItem/>:<WeaponListComponents
        record={state}
        getWid={getWid.bind(null)}
      />
  )
}
function mapStateToProps(state) {
  const {rightFilter}=state.arms;
  return {
    rightFilter,
    state
  };
}

export default connect(mapStateToProps)(RightWrap);

