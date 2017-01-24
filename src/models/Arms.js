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
        if (pathname === '/page_arms') {
          localStorage.clear();
          dispatch({
            type: 'fetch', payload: {
              rightFilter:false,
            }
          });
        }
        if (pathname === '/page_items') {
          localStorage.clear();
          dispatch({
            type: 'fetch', payload: {
              rightFilter:false,
              }
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

        const options = {mode: 'no-cors'};


      var navurl,nlisturl;
      if (window.location.href.indexOf("page_arms") > 0) {
        navurl='/db_arms/nav';
        nlisturl='/db_arms/arms';
      }
      if (window.location.href.indexOf("page_items") > 0) {
        navurl='/db_items/nav';
        nlisturl='/db_items/items';
      }
      const {data}=yield call(armsService.query,navurl);
      const weaponData = yield call(armsService.queryList,nlisturl);
      const title = data.data.name;

      const nav = data.data.main;
      const weaponClass = data.data.main[index].name;
      const weaponList = weaponData.data.data.filter(weapon => weapon.tips == weaponClass);
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
      return {...state, title, nav, index, weaponList, weaponMsg, rightFilter, wid, weaponClass};
    },
  },

};
