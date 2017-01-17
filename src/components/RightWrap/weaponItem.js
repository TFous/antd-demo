import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import style from '../../assets/index.css';


function weaponItem({dispatch,weaponMsg}) {
  return (
    <div className={style.w_r + ' ' + style.wMsg_r}>
      <h3 className={style.w_class_tit}>{weaponMsg[0].title}<span>{weaponMsg[0].tips}</span></h3>
      <div className={style.owl_item + ' ' + style.weapon_item}>
        <div className={style.w_w}>
          <img src={`http://cdn1.zygames.com/qqsm/t1/weapon/${weaponMsg[0].wid}.png`} alt=""/>
          <div className={style.ww_tips}>
            <p className={style.w_s}><span>属性</span>无</p>
            <p className={style.w_c}>{weaponMsg[0].int}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const {weaponMsg}=state.arms;
  return {
    weaponMsg
  };
}

export default connect(mapStateToProps)(weaponItem);

