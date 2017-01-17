import React,{findDOMNode} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import style from '../../assets/index.css';


function weaponListComponents({dispatch, weaponList,weaponClass}) {
  const setTrue=()=>{
    localStorage.rightFilter=true;
    dispatch({
      type: 'arms/setFilter',
      payload:{
        rightFilter:true,
      }
    })
  };

  const getWid=(id)=> {
    setTrue();
    localStorage.wid=id;
    dispatch({
      type: 'arms/getweaponMsg',
      payload: {
        wid: id,
      }
    });

  };

  function setImgWidth(dom, w, h) {
    var Img = dom;
    if (Img.offsetWidth > w) {
      // Img.width = w;
      if (Img.offsetHeight > h) {
        w -= 5;
        setImgWidth(dom, w, h);
      } else {
        return w;
      }
    }
  }


  const weaponItems = weaponList.map(function (item, i) {
    {
      return <li key={i} className={style.explainBox} onClick={getWid.bind(null,item.wid)}>
          <img ref={`li${i}`} onLoad={console.log(this.refs)} className={style.w_img}
                src={"http://cdn1.zygames.com/qqsm/t1/weapon/" + item.wid + ".png"} alt=""/>
          <p className={style.wname}>{item.title}</p>
      </li>

    }
  });

  return (
    <div>
      <div className={style.w_r}>
        <h3 className={style.w_class_tit}>{weaponClass}</h3>
        <ul className={style.w_class_ul}>
          {weaponItems}
        </ul>
      </div>
      <div className={style.clearfix}></div>
      <div className={style.bottom_wrap}></div>
    </div>
  )
}

function mapStateToProps(state) {
  const {weaponList,weaponClass}=state.arms;
  return {
    weaponList,
    weaponClass
  };
}

export default connect(mapStateToProps)(weaponListComponents);

