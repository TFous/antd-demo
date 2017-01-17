import * as armsService from '../services/Arms';


export default {
  namespace: 'arms',
  state: {
    index: null,
    weaponClass: null,
    title: null,
    nav: [],
    weaponList: [],
    weaponMsg: null,
    rightFilter: null,
    wid: null
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname === '/arms') {
          localStorage.clear();
          dispatch({
            type: 'fetch', payload: {
              rightFilter:false,
            }
          });
        }
        if (pathname === '/items') {
          localStorage.clear();
          dispatch({
            type: 'fetch', payload: {rightFilter:false,}
          });
        }
      });
    },
  },
  effects: {
    *fetch({ payload:{
      index = localStorage.index || 0,
      wid,
      rightFilter = localStorage.rightFilter || false
    }
    }, {call, put}) {
      var navurl,nlisturl;
      if (window.location.href.indexOf("arms") > 0) {
        navurl='/db_arms/nav';
        nlisturl='/db_arms/arms';
      }
      if (window.location.href.indexOf("items") > 0) {
        navurl='/db_items/nav';
        nlisturl='/db_items/items';
      }
      const {data}=yield call(armsService.query,navurl);
      const weaponData = yield call(armsService.queryList,nlisturl);
      const title = data.name;
      const nav = data.main;
      const weaponClass = data.main[index].name;
      const weaponList = weaponData.data.filter(weapon => weapon.tips == weaponClass);
      const weaponMsg = weaponList.filter(weapon => weapon.wid == (wid || localStorage.wid));

      yield put({
        type: 'save',
        payload: {
          title: title,
          weaponClass,
          nav: nav,
          index: index,
          rightFilter: rightFilter,     //false:weaponList show   true:weaponMsg show
          weaponList: weaponList,
          weaponMsg: weaponMsg,
          wid
        }
      });
    },
    *patch({payload:{index}}, {call, put}) {
      yield put({
        type: 'fetch', payload: {
          index
        }
      });
    },
    *getweaponMsg({payload:{wid}}, {call, put}){
      yield put({
        type: 'fetch', payload: {
          wid
        }
      });
    },
    *setFilter({payload:{rightFilter}}, {call, put}){
      yield put({
        type: 'fetch', payload: {
          rightFilter
        }
      });
    },
  },
  reducers: {
    save(state, {payload:{title, nav, index, weaponList, weaponMsg, rightFilter, wid, weaponClass}}) {
      console.log({...state, title, nav, index, weaponList, weaponMsg, rightFilter, wid, weaponClass})
      return {...state, title, nav, index, weaponList, weaponMsg, rightFilter, wid, weaponClass};
    },
  },

};
