import request from '../utils/request';

export function query($url) {
  return request($url);
  // return request('/db_arms/nav');
};

export function queryList($url){
  return request($url);
};


