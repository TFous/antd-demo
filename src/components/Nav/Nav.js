import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import style from '../../assets/index.css';


function Nav({dispatch,title,index,nav}) {

  const setFalse=()=>{
    localStorage.rightFilter=false;
    dispatch({
      type: 'arms/setFilter',
      payload:{
        rightFilter:false,
      }
    })
  };


  const setIndex=(id)=>{
    setFalse();
    localStorage.index=id;
      dispatch({
      type: 'arms/patch',
      payload:{
        index:id
      }
    })
  };




  const liComponents=nav.map(function(nav,i){
    {return <li key={i} onClick={setIndex.bind(null,i)} className={i==index?style.active:''}>{nav.name}</li>}
  });

  return(
  <div className={style.w_l}>
    <a href="#" className={style.wlogo}></a>
    <h3 className={style.w_tit}>{title}</h3>
    <div className={style.w_nav}>
      <div className={style.w_nav_t}>
        <div className={style.w_nav_b}>
          <ul className={style.w_l_ul}>
            {liComponents}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )

}

function mapStateToProps(state,{location}) {
  const {index,nav,title}=state.arms;
  return {
    title,
    index,
    nav
  };
}

export default connect(mapStateToProps)(Nav);

